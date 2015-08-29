var constants = require('./constants')

var filter = {

    util: {
        getNowInfo() {
            var date = new Date()
            var hour = ('0' + date.getHours()).slice(-2)
            var minites = ('0' + date.getMinutes()).slice(-2)
            var queryPrefix = (hour - 0)  > 16 ? 'oh2_' : 'oh1_'
            var daysOfWeek = constants.DaysOfWeek[date.getDay()]
            return {
              hour: hour,
              minites: minites,
              diplayTime: hour + ':' + minites,
              daysOfWeek: daysOfWeek,
              startColumn: queryPrefix + daysOfWeek + '_start',
              endColumn: queryPrefix + daysOfWeek + '_end'
            }
        }
    },

    price(price) {
        if (!price) {
            return ''
        }
        if (!price.amount) {
            return 'Free'
        }else{
            return price.unit + price.amount
        }
    },

    address(address) {
        return [address.line1,
                address.line2,
                address.city,
                address.region].join(' ')
    },

    type(type) {
        var matched = type
        constants.Types.forEach(function(obj) {
            if(obj.id === type) {
                matched = obj.label
            }
        })
        return matched
    },

    dislayImageUrl(item) {
        var image = item.images && item.images.length && item.images[item.defaultImageIndex || 0]
        return (image && image.url) || '/img/no_image.png'
    },
    
    michelin(value) {
        if (value === null) {
            return '-'
        }
        return value
    },

    displayBudget(budget) {
        if (!budget) {
            return '-'
        }
        // TODO
        return 'Day: ' + budget.day + " Night: " + budget.night
    },

    displayAvailbility(available) {
        // TODO: nls
        switch (available) {
            case 'yes': 
                return 'Yes'
            case 'no':
                return 'No'
            default:
                return '-'
        }
    },

    displayOperatingHours(array) {
        if (!array || array.length === 0) {
            return '-'
        }
        // TODO
        return JSON.stringify(array)
    },

    displayShopHolidays(array) {
        // TODO
        if (!array || array.length === 0) {
            return '-'
        }
        // TODO
        return JSON.stringify(array)
    },

    gMapLink(location) {
        if(!location) {
            return 'javascript:;'
        }
        return 'http://www.google.com/maps/place/' + location.latitude + ',' + location.longitude
    },
    
    displaySearchInfo(where, labels) {
        var _labels = []
        if(where) {
            if (where.area) {
                _labels.push('Area: ' + where.area)
            }
            if (where.category && where.category['$regex']) {
                _labels.push('Genre: ' + where.category['$regex'])
            }
            if (where.priceRange) {
                _labels.push('Price Range: ' + where.priceRange)
            }
            for (var prop in where) {
                // temp to check having time conditions
                if (prop && prop.indexOf('_start') >= 0) {
                    _labels.push('Open Now')
                }
            }
            if (where.name && where.name['$regex']) {
                _labels.push('Keyword: ' + where.name['$regex'])
            }
        }
        return _labels.length > 0 ? 'Filtered by ' + _labels.join(', ') : 'Search with ...'
    },

    displayNowOpened(item) {
      var nowInfo = filter.util.getNowInfo()
      // check current time is between start time and end time
      if (item[nowInfo.startColumn] <= nowInfo.diplayTime
       && item[nowInfo.endColumn] >= nowInfo.diplayTime) {
        return 'Open Now'
      } else{
        return ''
      }
    },

    displayCategory(categoryStr, labels) {
        // TODO: split with comma

    }

}

module.exports = filter