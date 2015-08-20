<template>
  <div class="page__wishlist">
      <component-card v-repeat="items"></component-card>
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
          items: []
        }
    },

    components: {
      'component-card': componentCard,
    },

    created() {
      // listening events
      this.$on('onSelectCard', this.onSelectCard.bind(this))
      this.refresh()
    },

    methods: {
        refresh() {
          // TODO: disscuss need wishlist API? or client filter or get list with favorited states only
          // util.request({
          //     url: './api/v1/wishlist'
          // }).then((data) => {
          //   this.items = data
          // })
          // TODO: temp
          util.request({
            url: './api/v1/offer/list'
          }).then((data) => {
            this.items = data
          })
        },

      onSelectCard(id) {
        // set to response cache
        cache.set('detail', util.getItemById(this.items, id))
        location.href = '#/detail/' + id
      },
    }
}
</script>