<template>
  <div class="page__top">
      <div class="top_title">
        Welcome to Tokyo!
      </div>
      <div class="top_nav">
        <component-categories selected-type="{{queryParams.filter}}"></component-categories>
      </div>
      <div class="top_filter">
          <select v-on="change: onChangeOrder" v-model="queryParams.order">
            <option value="popular">Popular</option>
            <option value="price">Price</option>
            <option value="time">Limited Time Offer</option>
          </select>
      </div>
      <div class="top_main" v-if="initialized">
        <component-card v-repeat="items"></component-card>
      </div>
      <div v-if="!initialized">
        Loading...
      </div>
  </div>
</template>

<script lang="babel">
import $ from 'npm-zepto'
import util from '../common/util'
import config from '../common/config'
import componentCategories from '../components/categories.vue'
import componentCard from '../components/card.vue'

export default {
    data() {
      return {
        initialized: false,
        items: [],
        queryParams: {
          filter: '',
          order: 'popular'
        }
      }
    },

    components: {
      'component-categories': componentCategories,
      'component-card': componentCard,
    },

    created() {
      // listening events
      this.$on('onSelectCard', this.onSelectCard.bind(this))
      this.$on('onSelectType', this.onSelectType.bind(this))
      // initial load
      this.refresh()
    },

    methods: {
      refresh() {
        // list promise
        var listDeferred = util.request({
          url: './api/v1/offer/list'
        })

        // done both list and me promises are resolved
        Promise.all([listDeferred, this.$root.fetchMe()]).then((data) => {
          // for initial router destroyed e.g. direct access to detail page
          if(!this.$root) { return }
          // store to cache
          var items = data[0] || [],
              me = data[1] || {favorites: []}
          // set favorited
          items.forEach((item) => {
            item.favorited = (me.favorites.indexOf(item.id) > -1)
          })
          this.items = items
          this.initialized = true
        })
      },

      getItemById(id) {
        var items = $.grep(this.items, (item) => {
          return item.id === id
        })
        return (items && items[0]) || null
      },

      onSelectCard(id) {
        // set to response cache
        this.$root.cache.detail = this.getItemById(id)
        location.href = '#/detail/' + id
      },

      onSelectType(id) {
        this.queryParams.filter = id
        alert("filter by: " + this.queryParams.filter)
      },

      onChangeOrder() {
        alert("order by: " + this.queryParams.order)
      }
    }
}
</script>