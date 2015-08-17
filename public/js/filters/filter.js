import Vue from 'vue'
import constants from '../common/constants'

Vue.filter('price', function (price) {
    if (!price.amount) {
        return "Free"
    }else{
        return price.unit + price.amount
    }
})

Vue.filter('address', function (address) {
    return [address.line1,
            address.line2,
            address.city,
            address.region].join(' ')
})

Vue.filter('type', function (type) {
    var matched = type
    constants.Types.forEach((obj) => {
        if(obj.id === type) {
            matched = obj.label
        }
    })
    return matched
})