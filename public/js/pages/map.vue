<template>
  <div class="page__top">
      <!-- <div class="top_title"></div> -->
      <div class="top_nav">
        <component-categories selected-type="{{queryParams.filter}}"></component-categories>
      </div>
      <div class="top_filter">
          <select class="select_large" v-on="change: onChangeOrder" v-model="queryParams.order">
            <option value="popular">Popular</option>
            <option value="price">Price</option>
            <option value="time">Limited Time Offer</option>
          </select>
      </div>
      <div class="top_map">
        <div id="map_canvas"></div>
      </div>
  </div>
</template>

<script lang="babel">
import $ from 'npm-zepto'
import util from '../common/util'
import config from '../common/config'
import cache from '../common/cache'
import mapUtil from '../common/mapUtil'
import componentCategories from '../components/categories.vue'
import pageTop from '../pages/top.vue'

// extend pageTop
var Component = {
    data() {
      return {
        items: [],
        queryParams: {
          filter: '',
          order: 'popular'
        },
        initPos: {lat: 35.658517, lng: 139.701334},
      }
    },

    components: {
      'component-categories': componentCategories
    },

    ready() {
      this.initMap()
    },

    methods: {
      attachEvents() {
        this.$on('onSelectMap', this.onSelectMap.bind(this))
        this.$on('onSelectType', this.onSelectType.bind(this))
      },

      onSelectMap(id) {
        // set to response cache
        cache.set('detail', util.getItemById(this.items, id))
        location.href = '#/detail/' + id
      },

      initMap() {
        // temp to set map height
        var mapNode = document.getElementById("map_canvas"),
          headerH = 44,
          navH = 48,
          filterH = 32

        $(mapNode).height($(window).height() - (headerH + navH + filterH))

        // should move to component?
        this._map = mapUtil.create(mapNode, {
          lat: this.initPos.lat,
          lng: this.initPos.lng,
          zoom: 12
        })
      },

      onLoadCompleted() {
        var that = this
        this.items.forEach((item, i) => {
          this._map.addMaker({
            id: item.id,
            lat: item.location.lat,
            lng: item.location.lng,
            onClickMarker() {
              that.onSelectCard(item.id)
            }
          })
        })
      }
    }
}
// TODO: temp extend implementation for methos
Component.methods = $.extend({}, pageTop.methods, Component.methods)
Component.computed = $.extend({}, pageTop.computed, Component.computed)
export default $.extend({}, pageTop, Component)
</script>