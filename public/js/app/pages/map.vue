<template>
  <div class="page__top">
      <div class="top_nav">
        <component-search-info></component-search-info>
      </div>
      <div class="top_map">
        <div id="map_canvas"></div>
      </div>
      <div>
        <component-map-card item="{{selectedMapItem}}" v-if="selectedMapItem"></component-map-card>
      </div>
  </div>
</template>

<script lang="babel">
import $ from 'npm-zepto'
import util from '../../common/util'
import config from '../../common/config'
import cache from '../../common/cache'
import mapUtil from '../../common/mapUtil'
// import componentCategories from '../components/categories.vue'
import componentSearchInfo from '../components/searchInfo.vue'
import componentMapCard from '../components/mapCard.vue'
import pageTop from '../pages/top.vue'

// extend pageTop
var Component = {
    data() {
      return {
        zoom: 16,
        items: [],
        selectedMapItem: null,
        queryParams: {
          limit: 40,
          // filter: '',
          order: 'popular',
          where: ''
        },
        initPos: {lat: 35.658517, lng: 139.701334}
      }
    },

    components: {
      // 'component-categories': componentCategories
      'component-search-info': componentSearchInfo,
      'component-map-card': componentMapCard
    },

    created() {
      // listening events
      this.attachEvents()
    },

    attached() {
      // handle initial query params
      this.queryParams = $.extend(this.queryParams, util.getUrlSearchQueryParams())
      // initial load
      this.clear()
      // render and select first item
      var initRender = (items) => {
          this.render(items)
          if (items.length > 0) {
            this.updateMapCard(items[0])
          }
          this._initialized = true
      }
      this.refresh().then((result) => {
        // set current position by default
        this.getCurrentLocation().then((coords) => {
          // move to center
          this._map.setCenter(coords)
          // set initial location
          initRender(result.items)
        }, () => {
          initRender(result.items)
        })
      })
    },

    detached() {
      this._initialized = false
      this.selectedMapItem = null
    },

    ready() {
      this.initMap()
    },

    methods: {
      attachEvents() {
        this.$on('onSelectMarker', this.updateMapCard.bind(this))
        this.$on('onSelectMapCard', this.onSelectMapCard.bind(this))
      },

      // getQueryParams() {
      //   // add additional location parameters
      //   return $.extend({}, this.queryParams)
      // },

      initMap() {
        // temp to set map height
        var that = this,
          mapNode = document.getElementById("map_canvas"),
          headerH = 44,
          filterH = 60,
          mapCardH = 60

        $(mapNode).height($(window).height() - (headerH + filterH + mapCardH))

        this._map = mapUtil.create(mapNode, {
          lat: this.initPos.lat,
          lng: this.initPos.lng,
          zoom: this.zoom,
          onDragEnd() {
            if (that._initialized) {
              // load with the map center position
              var gLatLng = that._map.getCenter()
              that.loadByLocation({
                latitude: gLatLng.lat(),
                longitude: gLatLng.lng()
              })
            }
          }
        })
      },

      clear() {
        // clear existing markers
        if (this._map) {
          this._map.clearMarkers()
        }
      },

      render(items) {
        var that = this
        // add new markers
        items.forEach((item, i) => {
          this._map.addMaker({
            id: item.objectId,
            lat: item.location.latitude,
            lng: item.location.longitude,
            onClickMarker() {
              that.$emit('onSelectMarker', item)
            }
          })
        })
      },

      loadByLocation(location) {
        if (this._requesting || !location) {
          return
        }
        // reference: https://parse.com/docs/rest/guide/#geopoints-geo-queries
        // construct query parmas
        this.queryParams.where = JSON.stringify({
          "location": {
            "$nearSphere": {
              "__type": "GeoPoint",
              "latitude": location.latitude,
              "longitude": location.longitude
            },
            "$maxDistanceInKilometers": 4.0
          }
        })
        // this.queryParams.location = location
        this.load().then((result) => {
          this.render(result.items)
        })
      },

      getCurrentLocation() {
        // TODO: loading indicator?
        return new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition((pos) => {
            // TODO: 
            resolve(pos.coords)
          }, () => reject, {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
          })
        })
      },

      updateCurrentLocation() {
        // TODO: call with interval or click current location button
        this.getCurrentLocation().then(this.setCurrentLocationMarker)
      },

      setCurrentLocationMarker(coords) {
        // TODO: place current location marker?

      },

      updateMapCard(item) {
        // move to center position
        this._map.setCenter(item.location)
        // set as selected item
        this.selectedMapItem = item
        // load by the selected location
        this.loadByLocation(item.location)
      },

      onSelectMapCard(id) {
        // set to response cache
        cache.set('detail', util.getItemById(this.items, id))
        location.href = '#/detail/' + id
      }
    }
}
// TODO: temp for load
Component.methods = $.extend({}, pageTop.methods, Component.methods)
export default Component
</script>