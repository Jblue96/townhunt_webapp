import Vue from 'vue'
import config from '../../common/config'
import filter from '../../../../controllers/filter'

Vue.filter('price', filter.price)
Vue.filter('address',  filter.address)
Vue.filter('type', filter.type)
Vue.filter('dislayImageUrl', filter.dislayImageUrl)
Vue.filter('michelin', filter.michelin)
Vue.filter('displayBudget', filter.displayBudget)
Vue.filter('displayCard', filter.displayCard)
Vue.filter('displayOperatingHours', filter.displayOperatingHours)
Vue.filter('displayShopHolidays', filter.displayShopHolidays)
Vue.filter('gMapLink', filter.gMapLink)
Vue.filter('displayNowOpened', filter.displayNowOpened)
Vue.filter('displaySearchInfo', function(where) {
    return filter.displaySearchInfo(where, config.labels)
})
Vue.filter('displayCategory', function(categoryStr) {
    return filter.displayCategory(categoryStr, config.labels)
})

export default filter