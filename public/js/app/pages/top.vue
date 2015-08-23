<template>
  <div class="page__top">
      <div class="top_nav">
      Search Conditions
      </div>
      <div class="top_main" v-if="!loading">
        <component-card v-repeat="items"></component-card>
      </div>
      <div v-if="loading">
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
        loading: false,
        items: [],
        queryParams: {
          filter: '',
          order: 'popular'
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
      this.refresh()
    },

    methods: {
      attachEvents() {
        this.$on('onSelectCard', this.onSelectCard.bind(this))
        this.$on('onSelectType', this.onSelectType.bind(this))
      },

      restoreQueryParams() {
        // restore queryParams
        var _cache = cache.get('queryParams')
        if(_cache) {
          this.queryParams = _cache
        }
      },

      refresh() {

        var params = {
          limit: 50,
          order: '-createdAt'
        }

        // if (skip) {
        //   params.skip = skip
        // }

        if (this.queryParams.filter) {
          params.where = { type: this.queryParams.filter }
        }

        // list promise
        var listDeferred = util.request({
          // url: './api/v1/offer/list'
          url: config.api.url + '/classes/Offer',
          data: params
        })

        this.loading = true
        // done both list and me promises are resolved
        Promise.all([listDeferred, this.$root.fetchMe()]).then((data) => {
          // for initial router destroyed e.g. direct access to detail page
          if(!this.$root) { return }
          // store to cache
          var items = data[0] && data[0].results || [],
              me = data[1] || {favorites: []}
          // set favorited
          items.forEach((item) => {
            item.favorited = (me.favorites.indexOf(item.id) > -1)
          })
          this.items = items
          this.loading = false
          // broadcast load events
          this.$emit('onLoadCompleted')
          this.$broadcast('onLoadCompleted')
        })
      },

      onSelectCard(id) {
        // set to response cache
        cache.set('detail', util.getItemById(this.items, id))
        location.href = '#/detail/' + id
      },

      onSelectType(id) {
        // toggle
        if (this.queryParams.filter === id) {
          this.queryParams.filter = ''
        } else {
          this.queryParams.filter = id
        }
        // store cache to refer from map component
        cache.set('queryParams', this.queryParams)
        this.refresh()
      },

      onChangeOrder() {
        console.log("order by: " + this.queryParams.order)
      }
    }
}
</script>