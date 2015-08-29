
class Map {

    constructor(map) {
        // constants
        this._markerSize = 36;
        this._displayedIdMap = {}
        this._markers = []
        this._map = map
        this._currentPlaceCircle = null
        this._currentPlaceMarker = null
        // this.markerIcon = new google.maps.MarkerImage('/img/icons/map_goal_icon.png', new google.maps.Size(24, 35), new google.maps.Point(24, 35), new google.maps.Point(12, 35));
        // this.currentPlaceIcon = new google.maps.MarkerImage('/img/icons/map_blue_circle.png', new google.maps.Size(32, 32), new google.maps.Point(16, 16), new google.maps.Point(8, 8));
        this.markerIcon = new google.maps.MarkerImage('/img/icons/map_goal_icon.png', new google.maps.Size(24, 36));
        this.currentPlaceIcon = new google.maps.MarkerImage('/img/icons/map_blue_circle.png', new google.maps.Size(16, 16));
    }

    exists(id) {
      return this._displayedIdMap[id] === true
    }

    addMaker(opt = {}) {
      var id = opt.id,
          lat = opt.lat,
          lng = opt.lng,
          onClickMarker = opt.onClickMarker
      // dup check
      if(this.exists(id)) {
        return
      }
      var ms = this._markerSize,
          gLatLng = new google.maps.LatLng(lat, lng)

      // TODO: use custom marker to show category?
      var marker = new google.maps.Marker({
        position: gLatLng,
        map: this._map,
        icon: this.markerIcon
      })
      if(onClickMarker) {
          google.maps.event.addListener(marker, 'click', onClickMarker)
      }
      this._markers.push(marker)
      this._displayedIdMap[id] = true
    }

    clearMarkers() {
        for (var name in this._displayedIdMap) {
            if (name && this._displayedIdMap[name]) {
                this._displayedIdMap[name] = false
            }
        }
        this._markers.forEach((marker, i) => {
          marker.setMap(null)
        })
        this._markers = []
    }

    getCenter() {
      return this._map.getCenter()
    }

    setCenter(coords) {
      return new Promise((resolve, reject) => {
        // set to center
        this._map.panTo(new google.maps.LatLng(coords.latitude, coords.longitude))
        // temp workaround for no firing
        var called = false
        google.maps.event.addListenerOnce(this._map, 'idle', () => {
          if(!called) {
            called = true
            resolve()
          }
        })
        // force fire for 1 seconds
        setTimeout(() => {
          if(!called) {
            called = true
            resolve()
          }
        }, 1500)
      })
    }

    setZoom(zoom) {
      this._map.setZoom(zoom)
    }

    setMyLocation(coords) {
        var lat = coords.latitude,
            lng = coords.longitude,
            accuracy = coords.accuracy
        this.removeOverlays()
        var gLatLng = new google.maps.LatLng(lat, lng)
        // draw a circle with acc
        this._currentPlaceCircle = new google.maps.Circle({
            strokeColor: "#7eabe3",
            strokeWeight: 1,
            strokeOpacity: 1,
            fillColor: "#d7e5ed",
            fillOpacity: 0.35,
            center: gLatLng,
            radius: accuracy,
            map: this._map
        })
        // add blue icon at center
        this._currentPlaceMarker = new google.maps.Marker({
            position: gLatLng,
            icon: this.currentPlaceIcon,
            map: this._map
        }) 
        return this.setCenter(coords)
    }

    removeOverlays() {
        if(this._currentPlaceCircle){
            this._currentPlaceCircle.setMap(null)
            this._currentPlaceCircle = null
        }
        if(this._currentPlaceMarker){
            this._currentPlaceMarker.setMap(null)
            this._currentPlaceMarker = null                
        }
    }

    getBounds() {
        return this._map.getBounds()
    }

}

export default {

    newInstance(map) {
        return new Map(map)
    },

    create(mapNode, opt={}) {
        var MY_MAPTYPE_ID = 'TownHunt_style',
            lat = opt.lat,
            lng = opt.lng,
            zoom = opt.zoom,
            onDragEnd = opt.onDragEnd

        var map = new google.maps.Map(mapNode, {
            center: new google.maps.LatLng(lat, lng),
            zoom: zoom || 12,
            // mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeId: MY_MAPTYPE_ID,
            mapTypeControl: false,
            panControl: true,
            panControlOptions: {
                position: google.maps.ControlPosition.TOP_RIGHT
            },
            zoomControl: true,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.LARGE,
                position: google.maps.ControlPosition.TOP_RIGHT
            },
            scaleControl: true,
            streetViewControl: true,
            streetViewControlOptions: {
                position: google.maps.ControlPosition.TOP_RIGHT
            }
        })

        var customMapType = new google.maps.StyledMapType([
            {
                "stylers": [{"hue": "#0069b2"}, {"saturation": -70}],
                "elementType": "all",
                "featureType": "all"
            }, {
                "featureType": "poi",
                "elementType": "labels",
                "stylers": [
                    { "visibility": "off" }
                ]
            }], {
                "name": 'Start Map'
            }
        )
        map.mapTypes.set(MY_MAPTYPE_ID, customMapType)

        if (onDragEnd) {
            google.maps.event.addListener(map, 'idle', function(){
                onDragEnd()
            })
        }
        return this.newInstance(map)
    }
}