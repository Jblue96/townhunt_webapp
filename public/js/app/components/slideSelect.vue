<template>
    <div class="component__slideSelect">
      <div class="swiper-container">
        <ul class="swiper-wrapper">
            <li class="swiper-slide" v-repeat="options" v-class="selected: selectedValue == value">
              <a href="javascript:;" v-on="click: onClickOption($data)">
                <span v-if="safe">{{{label}}}</span>
                <span v-if="!safe">{{label}}</span>
              </a>
            </li>
        </ul>
      </div>
      <div class="slideSelect_title" v-if="title">{{title}}</div>
    </div>
</template>

<script lang="babel">
import $ from 'npm-zepto'
import constants from '../../../../controllers/constants'
import util from '../../common/util'
import filter from '../filters/filter'

export default {

  props: ['prop', 'options', 'title', 'results'],

  data() {
    return {
      prop: '',
      // set safe to enable html
      // [{label: "", value: "", safe: true}]
      options: [],
      title: '',
      results: {}
    }
  },

  computed: {
    selectedValue() {
      return this.results[this.prop]
    }
  },

  created() {
  },

  attached() {
    setTimeout(() => {
      this.initSwiper()
      console.log('prop: ' + this.prop + ", selected : " + this.selectedValue)
    }, 25)
  },

  methods: {
    initSwiper() {
      // free horizontal scroll
      util.initHorizontalSwiper($(this.$el).find('.swiper-container'))
    },

    onClickOption(option) {
        // this.selectedValue = option.value
        var changed = this.results[this.prop] !== option.value
        // update results with two-way binginds
        this.results[this.prop] = option.value 
        if (changed) {
          this.$dispatch('onSelectOption', {
            prop: this.prop,
            selectedValue: option.value ,
            option: option
          })
        }
    }
  }
}
</script>
