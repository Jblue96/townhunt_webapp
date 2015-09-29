<template>
    <div class="component__slideSelect swiper-container">
        <ul class="swiper-wrapper">
            <li class="swiper-slide" v-repeat="options" v-class="selected: selectedValue == value">
              <a href="javascript:;" v-on="click: onClickOption($data)">
                <span v-if="safe">{{{label}}}</span>
                <span v-if="!safe">{{label}}</span>
              </a>
            </li>
        </ul>
    </div>
</template>

<script lang="babel">
import constants from '../../../../controllers/constants'
import util from '../../common/util'
import filter from '../filters/filter'

export default {

  props: ['type', 'options', 'selectedValue'],

  data() {
    return {
      type: '',
      selectedValue: "",
      // set safe to enable html
      // [{label: "", value: "", safe: true}]
      options: []
      // defaultSelectedIndex: 0
    }
  },

  created() {
    this.$on('selectValue_' + this.type, this.selectValue.bind(this))
    // initial selection
    // if (this.defaultSelectedIndex >= 0 && this.options[this.defaultSelectedIndex]) {
    //   this.onClickOption(this.options[this.defaultSelectedIndex])
    // }
  },

  attached() {
    // TODO: temp workaround to scrollTop
    setTimeout(() => {
      this.initSwiper()
    }, 25)
  },

  methods: {
    initSwiper() {
      // free horizontal scroll
      util.initHorizontalSwiper(this.$el)
    },

    onClickOption(option) {
        this.selectedValue = option.value
        this.$dispatch('onSelectOption', {
          type: this.type,
          selectedValue: this.selectedValue,
          option: option
        })
    },

    selectValue(obj) {
      // if (obj.value === '' && obj.defaultSelectedIndex !== undefined && this.options[obj.defaultSelectedIndex]) {
      //   // select first option
      //   this.selectedValue = this.options[obj.defaultSelectedIndex].value
      // } else {
        this.selectedValue = obj.value
      // }
    }
  }
}
</script>
