<template>
  <div class="page__top">
      <div class="top_nav">
        <component-search-info></component-search-info>
      </div>
      <div class="top_main">
        <component-card v-repeat="items" track-by="objectId"></component-card>
      </div>
      <div class="top_no_result" v-show="!hasNext && items.length == 0">
        No Results
      </div>
      <div class="loading_more" v-if="hasNext">
        <div class="icon_loading"></div>
      </div>
  </div>
</template>

<script lang="babel">
import $ from 'npm-zepto'
import util from '../../common/util'
import config from '../../common/config'
import cache from '../../common/cache'
import urlQueryParser from '../../common/urlQueryParser'
import componentCard from '../components/card.vue'
import componentSearchInfo from '../components/searchInfo.vue'

export default {
    data() {
      return {
        hasNext: true,
        items: [],
        queryParams: {
          limit: 20,
          skip: 0,
          order: 'createdAt',
          // e.g. where:{"$or":[{"objectId":{"$regex":"shibuya"}},{"name":{"$regex":"shibuya"}},{"description":{"$regex":"shibuya"}},{"town":{"$regex":"shibuya"}}]}
          where: ''
        }
      }
    },

    components: {
      'component-card': componentCard,
      'component-search-info': componentSearchInfo
    },

    created() {
      // listening events
      this.attachEvents()
    },

    attached() {
      // handle initial query params
      this.queryParams = $.extend(this.queryParams, urlQueryParser.getUrlSearchQueryParams())
      if (cache.needForceReload(this.$options.id)) {
        this._cachedScrollTop = 0
        this.refresh().then((result) => {
          this.items = result.items
          cache.disableForceReload(this.$options.id)
        })
      }
      $(window).scrollTop(this._cachedScrollTop || 0)
      this.$root._infiniteScroller.enable()
    },

    detached() {
      util.abortRequests()
      this._cachedScrollTop = this.$root._infiniteScroller.getLastScrollTop()
      this.$root._infiniteScroller.disable()
    },

    methods: {
      attachEvents() {
        this.$on('onSelectCard', this.onSelectCard.bind(this))
        this.$on('onScrollBottom', this.loadMore.bind(this))
      },

      getQueryParams() {
        return this.queryParams
      },

      refresh() {
        return this.load()
      },

      load() {
        return new Promise((resolve, reject) => {
          this._requesting = true
          // list promise
          var listDeferred = util.request({
            // url: './api/v1/offer/list'
            url: config.api.url + '/classes/Offer',
            data: this.getQueryParams()
          })

          // done both list and me promises are resolved
          Promise.all([listDeferred, util.me()]).then((data) => {
            // store to cache
            var items = data[0] && data[0].results || [],
                me = data[1] || {favorites: []}
            // set favorited
            items.forEach((item) => {
              item.favorited = (me.favorites.indexOf(item.objectId) > -1)
            })
            
            // hide loading
            if (items.length === 0 || items.length < this.queryParams.limit) {
              this.hasNext = false
            }
            this._requesting = false
            resolve({items: items, me: me})
          }, () => {
            this._requesting = false
            reject()
          })
        })
      },

      loadMore() {
        if (this._requesting) {
          return
        }
        this.queryParams.skip = this.queryParams.skip + this.queryParams.limit
        this.load().then((result) => {
          result.items.forEach((item) => {
            this.items.push(item)
          })
        })
      },

      onSelectCard(id) {
        // set to response cache
        cache.set('detail', util.getItemById(this.items, id))
        location.href = '#/detail/' + id
      }

    }
}
</script>