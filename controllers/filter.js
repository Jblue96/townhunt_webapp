var constants = require('./constants')

module.exports = {

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

    displayCard(available) {
        if(!available) {
            return 'N/A'
        }
        return available ? 'Yes' : 'No'
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
    }
}