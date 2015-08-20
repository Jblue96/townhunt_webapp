<template>
    <div class="component__categories swiper-container">
        <ul class="swiper-wrapper">
            <li class="swiper-slide" v-repeat="types" v-class="selected: selectedType == id"><a href="javascript:;" v-on="click: onClickType(id)">{{label}}</a></li>
        </ul>
    </div>
</template>

<script lang="babel">
import Swiper from '../../lib/swiper.jquery'
import constants from '../../common/constants'

export default {

  props: ['selectedType'],

  data() {
    return {
      types: constants.Types
    }
  },

  created() {
    this.$on('onLoadCompleted', this.initialize.bind(this))
  },

  methods: {

    initialize() {
      // free horizontal scroll
      new Swiper(this.$el, {
          freeMode: true,
          freeModeMomentumBounce: false,
          freeModeMomentumRatio: 0.6,
          wrapperClass: "swiper-wrapper",
          slideClass: "swiper-slide",
          slidesPerView: "auto"
      })
    },

    onClickType(type) {
        this.$dispatch('onSelectType', type)
    }
  }
}
</script>