<template>
  <div class="page__wishlist">
      <div class="wishlist_main">
        <component-card v-repeat="items" track-by="objectId"></component-card>
      </div>
      <div class="wishlist_no_result" v-show="!hasNext && items.length == 0">
        No Results
      </div>
      <div class="loading_more" v-if="hasNext">
        Loading...
      </div>
  </div>
</template>

<script lang="babel">
import config from '../../common/config'
import util from '../../common/util'
import cache from '../../common/cache'
import componentCard from '../components/card.vue'

export default {
    data() {
        return {
          // e.g. 'favorites'
          type: '',
          hasNext: true,
          items: [],
          queryParams: {
            // limit: 20,
            // skip: 0,
            where: {
              objectId: {
                "$regex": ""
              }
            }
          }
        }
    },

    components: {
      'component-card': componentCard,
    },

    created() {
      this.$on('onRoute', (options) => {
        this.type = options.type
      })
      // listening events
      this.$on('onSelectCard', this.onSelectCard.bind(this))
      // TODO: handle login
      
    },

    attached() {
      // TODO: paging
      this.hasNext = true
      this.refresh().then((result) => {
        this.items = result.items
      })
    },

    detached() {
      util.abortRequests()
      this.items = []
    },

    methods: {
      refresh() {
        return new Promise((resolve, reject) => {
          util.me().then((data) => {
            this.load(data).then(resolve, reject)
          }, reject)
        })
      },

      load(me) {
        return new Promise((resolve, reject) => {
          // no favorites
          if(me.favorites.length === 0) {
            this.hasNext = false
            resolve({items: [], me: me})
            return
          }
          this._requesting = true
          // build query
          this.queryParams.where.objectId['$regex'] = me.favorites.join('|')
          // list promise
          util.request({
            // url: './api/v1/offer/list'
            url: config.api.url + '/classes/Offer',
            data: this.queryParams
          }).then((data) => {
            var items = data && data.results || []
            // set favorited
            items.forEach((item) => {
              item.favorited = (me.favorites.indexOf(item.objectId) > -1)
            })
            this.hasNext = false
            this._requesting = false
            resolve({items: items, me: me})
          }, () => {
            this._requesting = false
            reject()
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