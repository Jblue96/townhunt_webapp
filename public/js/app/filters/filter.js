import Vue from 'vue'
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

export default filter