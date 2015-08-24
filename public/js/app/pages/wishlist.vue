<template>
  <div class="page__wishlist">
      <component-card v-repeat="items" track-by="objectId"></component-card>
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
          // 'like', 'bucket'
          type: '',
          items: []
        }
    },

    components: {
      'component-card': componentCard,
    },

    created() {
      this.$on('onRoute', (options) => {
        this.type = options.type
        this.refresh()
      })
      // listening events
      this.$on('onSelectCard', this.onSelectCard.bind(this))
    },

    methods: {
        refresh() {
          console.log('load from localStorage: ' + this.type)
        },

      onSelectCard(id) {
        // set to response cache
        cache.set('detail', util.getItemById(this.items, id))
        location.href = '#/detail/' + id
      },
    }
}
</script>