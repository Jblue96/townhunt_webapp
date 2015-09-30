<template>
    <div class="component__categories swiper-container">
        <ul class="swiper-wrapper">
            <li class="swiper-slide" v-repeat="types" v-class="selected: selectedType == id"><a href="javascript:;" v-on="click: onClickType(id)">{{label}}</a></li>
        </ul>
    </div>
</template>

<script lang="babel">
import util from '../../common/util'
import constants from '../../../../controllers/constants'

export default {

  props: ['selectedType'],

  data() {
    return {
      selectedType: '',
      types: constants.getgetKeyLabel('Type')
    }
  },

  created() {
    this.$on('onLoadCompleted', this.initialize.bind(this))
  },

  methods: {

    initialize() {
      // free horizontal scroll
      util.initHorizontalSwiper(this.$el)
    },

    onClickType(type) {
        this.$dispatch('onSelectType', type)
    }
  }
}
</script>