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

    displayArea(area, labels) {
        return labels['constants_Area_JP_tokyo_' + area] || area
    },
    
    michelin(value) {
        if (value === null) {
            return '-'
        }
        return value
    },

    displayTel(tel) {
        if (!tel) {
            return '-'
        }
        // 03-5485-0025 (+81-3-5485-0025) 
        var arr = tel.split(' ')
        if (arr.length == 1) {
            return tel
        } else {
            var newArr = []
            arr.forEach(function(str) {
                if (str) {
                    newArr.push(str)
                }
            })
            var link = newArr[0].replace(/-/g, '')
            return '<a href="tel:' + link + '">' + newArr[0] + '</a> ' + newArr[1]
        }
    },

    displayBudget(budget) {
        if (!budget) {
            return '-'
        }
        return 'Day ' + (budget.day || '-') + '<br>Night ' + (budget.night || '-')
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

    displaySmoking(value) {
        switch (value) {
            case 'yes': 
                return 'Yes'
            case 'no':
                return 'No'
            case 'sectionalized':
                return 'Sectionalized'
            default:
                return '-'
        }
    },

    displayOperatingHours(array, labels) {
        if (!array || array.length === 0) {
            return '-'
        }
        var order = ['default', 'holiday', 'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
        var map = {}
        // [{"end":"15:30","lo":"15:00","start":"11:30","type":"default"},{"end":"20:00","lo":"19:30","start":"11:30","type":"saturday"},{"end":"17:00","lo":"16:30","start":"11:30","type":"sunday"},{"end":"21:30","lo":"21:00","start":"18:30","type":"default"}]
        array.forEach(function(item) {
            if (!map[item.type]) {
                map[item.type] = []
            }
            var strs = []
            if (item.start) {
                strs.push(item.start)
            }
            strs.push(' - ')
            if (item.end) {
                strs.push(item.end)
            }
            if (item.lo) {
                strs.push(' (L.O. ' + item.lo + ')')
            }
            map[item.type].push(strs.join(''))
        })
        // build strings from map
        var results = []
        order.forEach(function(key) {
            if (map[key]) {
                var str = key === 'default' ? '' : (labels['constants_DayOfWeek_' + key] || key) + ' '
                // e.g. 15:00-18:00, 20:00-22:00
                str += map[key].join(', ')
                results.push(str)
            }
        })
        return results.join('<br>')
    },

    displayPriceRange(value, labels) {
        return labels['constants_PriceRange_' + value] || value
    },

    displayShopHolidays(array, labels) {
        if (!array || array.length === 0) {
            return '-'
        }
        var results = []
        array.forEach(function(day) {
            results.push(labels['constants_DayOfWeek_' + day] || day)
        })
        return results.join(', ')
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
                _labels.push('Genre: ' + filter.displayCategory(where.category['$regex'], labels))
            }
            if (where.priceRange) {
                _labels.push('Price Range: ' + filter.displayPriceRange(where.priceRange, labels))
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
        if (!categoryStr) {
            return ''
        }
        var newArr = [],
            arr = categoryStr.split(',')
        arr.forEach(function (key) {
            newArr.push(labels['constants_Genre_' + key] || key)
        })
        return newArr.join(', ')
    }

}

module.exports = filter