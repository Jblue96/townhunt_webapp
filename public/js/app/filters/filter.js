import Vue from 'vue'
import labels from '../../common/labels'
import filter from '../../../../controllers/filter'

Vue.filter('numberFormat', filter.numberFormat)
Vue.filter('price', filter.price)
Vue.filter('address',  filter.address)
Vue.filter('type', filter.type)
Vue.filter('dislayImageUrl', filter.dislayImageUrl)
Vue.filter('displayArea', (area) => {
    return filter.displayArea(area, labels)
})
Vue.filter('michelin', filter.michelin)
Vue.filter('displayTel', filter.displayTel)
Vue.filter('displayBudget', filter.displayBudget)
Vue.filter('displayAvailbility', filter.displayAvailbility)
Vue.filter('displayPriceRange', (value) => {
    return filter.displayPriceRange(value, labels)
})
Vue.filter('displayOperatingHours', (array) => {
    return filter.displayOperatingHours(array, labels)
})
Vue.filter('displayShopHolidays', (array) => {
    return filter.displayShopHolidays(array, labels)
})
Vue.filter('gMapLink', filter.gMapLink)
Vue.filter('displayNowOpened', filter.displayNowOpened)
Vue.filter('displaySearchInfo', (where) => {
    return filter.displaySearchInfo(where, labels)
})
Vue.filter('displayCategory', (categoryStr) => {
    return filter.displayCategory(categoryStr, labels)
})
Vue.filter('displayMenuType', (menuType) => {
    return filter.displayMenuType(menuType, labels)
})
Vue.filter('displayReserveDate', (reserveDate) => {
    return filter.displayReserveDate(reserveDate, labels)
})
Vue.filter('displayReservePersons', (numOfPersons) => {
    return filter.displayReservePersons(numOfPersons, labels)
})

export default filter