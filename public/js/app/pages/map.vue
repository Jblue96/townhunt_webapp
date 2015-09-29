<template>
  <div class="page__map">
      <div class="top_nav">
        <component-search-info></component-search-info>
      </div>
      <div class="map_main">
        <div id="map_canvas"></div>
      </div>
      <div class="map_card" v-show="initialized">
        <div class="map_card_msg" v-show="!selectedMapItem && this.items.length == 0">
          <span>No results found in this location</span>
        </div>
        <div class="map_card_msg" v-show="!selectedMapItem && this.items.length > 0">
          <span>Select a Pin</span>
        </div>
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
import urlQueryParser from '../../common/urlQueryParser'
import constants from '../../../../controllers/constants'
import componentSearchInfo from '../components/searchInfo.vue'
import componentMapCard from '../components/mapCard.vue'
import pageTop from '../pages/top.vue'

// extend pageTop
var Component = {
    data() {
      return {
        initialized: false,
        zoom: 16,
        items: [],
        selectedMapItem: null,
        queryParams: {
          limit: 40,
          // filter: '',
          order: 'popular',
          where: {}
        },
        initPos: constants.getAreaLocation('shibuya')
      }
    },

    components: {
      'component-search-info': componentSearchInfo,
      'component-map-card': componentMapCard
    },

    created() {
      // listening events
      this.attachEvents()
    },

    attached() {
      this._detached = false
      // handle initial query params
      this.queryParams = $.extend(this.queryParams, urlQueryParser.getUrlSearchQueryParams())
      // initial load
      this.clear()

      var postRender = () => {
          // set zoom
          this._map.setZoom(this.zoom)
          this.loadByCenterLocation()
          this.initialized = true
          // attach resizer
          $(window).on("resize.map", this.resize.bind(this))
          this._myLocationInterval = setInterval(() => {
            this.updateCurrentLocation(true/*noMove*/)
          }, 10000)          
      }
      
      // render and select first item
      var initRender = (coords) => {
        // if area is specified as a query, show the area as initial location
        var queryArea = this.queryParams.where.area
        var initialPos = queryArea && constants.getAreaLocation(queryArea) || coords
        if (initialPos) {
          // move to center position
          this._map.setCenter(initialPos).then(postRender)
        } else {
          // for GPS disabled
          postRender()
        }
      }
      // set current position by default
      this.updateCurrentLocation().then(initRender, initRender)
    },

    detached() {
      util.abortRequests()
      this._detached = true
      this.initialized = false
      this.selectedMapItem = null
      $(window).off("resize.map");
      clearInterval(this._myLocationInterval)
    },

    ready() {
      this.initMap()
    },

    methods: {
      attachEvents() {
        this.$on('onSelectMarker', this.updateMapCard.bind(this))
        this.$on('onSelectMapCard', this.onSelectMapCard.bind(this))
      },

      initMap() {
        // temp to set map height
        var that = this
        this._mapNode = document.getElementById("map_canvas")
        this.resize()
        this._map = mapUtil.create(this._mapNode, {
          lat: this.initPos.latitude,
          lng: this.initPos.longitude,
          zoom: 14,
          onDragEnd() {
            // load with the map center position
            that.loadByCenterLocation()
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
          if(!this._map.exists(item.objectId)) {
            this._map.addMaker({
              id: item.objectId,
              lat: item.location.latitude,
              lng: item.location.longitude,
              onClickMarker() {
                that.$emit('onSelectMarker', item)
              }
            })
            this.items.push(item)
          }
        })
        this.resize()
      },

      loadByCenterLocation() {
        if (this._requesting || this._detached) {
          return
        }
        // reference: https://parse.com/docs/rest/guide/#geopoints-geo-queries
        // construct query parmas
        var latlngBounds = this._map.getBounds();
        if(!latlngBounds){
            // map is not loaded yet
            return [];
        }
        var swLatlng = latlngBounds.getSouthWest();
        var neLatlng = latlngBounds.getNorthEast();
        var geoQuery = {
          "location": {
            "$within": {
              "$box": [
                {
                  "__type": "GeoPoint",
                  "latitude": swLatlng.lat(),
                  "longitude": swLatlng.lng()
                },
                {
                  "__type": "GeoPoint",
                  "latitude": neLatlng.lat(),
                  "longitude": neLatlng.lng()
                }
              ]
            }
          }
        }
        // mixin geo queries
        try {
          this.queryParams.where = JSON.parse(this.queryParams.where)
        } catch(e) {}
        var query = $.extend({}, this.queryParams.where, geoQuery)
        this.queryParams.where = JSON.stringify(query)
        this.load().then((result) => {
          this.render(result.items)
        })
      },

      getCurrentLocation() {
        // TODO: loading indicator?
        return new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition((pos) => {
            resolve(pos.coords)
          }, reject, {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
          })
        })
      },

      updateCurrentLocation(noMove) {
        // call with interval or click current location button
        return this.getCurrentLocation().then((coords) => {
          if (noMove) {
            return new Promise((resolve, reject) => {
              // just update my location
              this._map.updateMyLocation(coords)
              resolve()
            })
          } else {
            return this.setCurrentLocationMarker(coords)
          }
        }, () => {
          // fail to get current location
          return new Promise((resolve, reject) => {
            reject()
          })
        })
      },

      setCurrentLocationMarker(coords) {
        // place current location marker?
        return new Promise((resolve, reject) => {
          this._map.setMyLocation(coords).then(() => {
            resolve(coords)
          })
        })
      },

      updateMapCard(item) {
        // set as selected item
        this.selectedMapItem = item
        // move to center position
        this._map.setCenter(item.location).then(() => {
          // load by the selected location
          this.loadByCenterLocation()
        })
      },

      onSelectMapCard(id) {
        // set to response cache
        cache.set('detail', util.getItemById(this.items, id))
        util.redirect('#/detail/' + id)
      },

      resize() {
        if (this._mapNode) {
          var headerH = 44,
            filterH = 60,
            mapCardH = 60
          $(this._mapNode).height($(window).height() - (headerH + filterH + mapCardH))
        }
        if (this._map) {
          this._map.resize()
        }
      }
    }
}
// TODO: temp for load
Component.methods = $.extend({}, pageTop.methods, Component.methods)
export default Component
</script>