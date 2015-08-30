import Vue from 'vue'
import config from '../../common/config'
import filter from '../../../../controllers/filter'

Vue.filter('price', filter.price)
Vue.filter('address',  filter.address)
Vue.filter('type', filter.type)
Vue.filter('dislayImageUrl', filter.dislayImageUrl)
Vue.filter('displayArea', (area) => {
    return filter.displayArea(area, config.labels)
})
Vue.filter('michelin', filter.michelin)
Vue.filter('displayBudget', filter.displayBudget)
Vue.filter('displayAvailbility', filter.displayAvailbility)
Vue.filter('displayOperatingHours', (array) => {
    return filter.displayOperatingHours(array, config.labels)
})
Vue.filter('displayShopHolidays', (array) => {
    return filter.displayShopHolidays(array, config.labels)
})
Vue.filter('gMapLink', filter.gMapLink)
Vue.filter('displayNowOpened', filter.displayNowOpened)
Vue.filter('displaySearchInfo', (where) => {
    return filter.displaySearchInfo(where, config.labels)
})
Vue.filter('displayCategory', (categoryStr) => {
    return filter.displayCategory(categoryStr, config.labels)
})

export default filter