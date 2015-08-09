class Map {
    constructor(map) {
        // constants
        this._markerSize = 36;
        this._displayedIds = []
        this._markers = []
        this._map = map
    }

    addMaker(opt = {}) {
        var id = opt.id,
            lat = opt.lat,
            lng = opt.lng,
            onClickMarker = opt.onClickMarker
        // dup check
        if(this._displayedIds.indexOf(id) !== -1) {
          return
        }
        var ms = this._markerSize,
            gLatLng = new google.maps.LatLng(lat, lng)

        // TODO: use custom marker to show title and image?
        var marker = new google.maps.Marker({
          position: gLatLng,
          map: this._map
        })
        if(onClickMarker) {
            google.maps.event.addListener(marker, 'click', onClickMarker)
        }
        this._markers.push(marker)
        this._displayedIds.push(id)
    }

    clearMarkers() {
        this._displayedIds = []
        this._markers.forEach((marker, i) => {
          marker.setMap(null)
        })
        this._markers = []
    }
}

export default {

    newInstance(map) {
        return new Map(map)
    },

    create(mapNode, opt={}) {
        var MY_MAPTYPE_ID = 'Booked_style',
            lat = opt.lat,
            lng = opt.lng,
            zoom = opt.zoom

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

        return this.newInstance(map)
    }
}