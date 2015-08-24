<template>
  <div class="page__top">
      <div class="top_nav">
      Search Conditions (To be implemented...)
      </div>
      <div class="top_main" v-if="!showLoading">
        <component-card v-repeat="items" track-by="objectId"></component-card>
      </div>
      <div v-if="showLoading">
        Loading...
      </div>
  </div>
</template>

<script lang="babel">
import $ from 'npm-zepto'
import util from '../../common/util'
import config from '../../common/config'
import cache from '../../common/cache'
import componentCategories from '../components/categories.vue'
import componentCard from '../components/card.vue'

export default {
    data() {
      return {
        showLoading: false,
        items: [],
        queryParams: {
          limit: 20,
          skip: 0,
          order: '-createdAt',
          // e.g. where:{"$or":[{"objectId":{"$regex":"shibuya"}},{"name":{"$regex":"shibuya"}},{"description":{"$regex":"shibuya"}},{"town":{"$regex":"shibuya"}}]}
          where: ''
        }
      }
    },

    components: {
      'component-categories': componentCategories,
      'component-card': componentCard
    },

    created() {
      // TODO: handle initial query params
      this.restoreQueryParams()
      // listening events
      this.attachEvents()
      // initial load
      this.refresh().then((result) => {
        this.items = result.items
        // broadcast load events
        this.$emit('onLoadCompleted')
        this.$broadcast('onLoadCompleted')
      })
    },

    methods: {
      attachEvents() {
        this.$on('onSelectCard', this.onSelectCard.bind(this))
        this.$on('onScrollBottom', this.loadMore.bind(this))
      },

      restoreQueryParams() {
        // restore queryParams
        var _cache = cache.get('queryParams')
        if(_cache) {
          this.queryParams = _cache
        }
      },

      refresh() {
        // show loading
        this.showLoading = true
        return this.load()
      },

      load() {
        return new Promise((resolve, reject) => {
          this._requesting = true
          // list promise
          var listDeferred = util.request({
            // url: './api/v1/offer/list'
            url: config.api.url + '/classes/Offer',
            data: this.queryParams
          })

          // done both list and me promises are resolved
          Promise.all([listDeferred, this.$root.fetchMe()]).then((data) => {
            // for initial router destroyed e.g. direct access to detail page
            if(!this.$root) { return }
            // store to cache
            var items = data[0] && data[0].results || [],
                me = data[1] || {favorites: []}
            // set favorited
            // items.forEach((item) => {
            //   item.favorited = (me.favorites.indexOf(item.id) > -1)
            // })
            
            // hide loading
            this._requesting = this.showLoading = false
            resolve({items: items, me: me})
          }, () => {
            this._requesting = this.showLoading = false
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