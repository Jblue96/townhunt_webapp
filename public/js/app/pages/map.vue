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
import util from '../../common/util'
import config from '../../common/config'
import cache from '../../common/cache'
import mapUtil from '../../common/mapUtil'
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

    created() {
      // TODO: handle initial query params
      this.restoreQueryParams()
      // listening events
      this.attachEvents()
      // initial load
      this.refresh()
    },

    ready() {
      this.initMap()
    },

    methods: {
      attachEvents() {
        this.$on('onSelectMap', this.onSelectMap.bind(this))
        this.$on('onSelectType', this.onSelectType.bind(this))
        this.$on('onLoadCompleted', this.onLoadCompleted.bind(this))
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

        // TODO: get current location
        this._map = mapUtil.create(mapNode, {
          lat: this.initPos.lat,
          lng: this.initPos.lng,
          zoom: 12
        })
      },

      onLoadCompleted() {
        var that = this
        // clear existing markers
        this._map.clearMarkers()
        // add new markers
        this.items.forEach((item, i) => {
          this._map.addMaker({
            id: item.objectId,
            lat: item.location.latitude,
            lng: item.location.longitude,
            onClickMarker() {
              that.onSelectCard(item.objectId)
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