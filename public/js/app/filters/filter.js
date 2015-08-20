import Vue from 'vue'
import filter from '../../../../controllers/filter'

Vue.filter('price', filter.price)
Vue.filter('address',  filter.address)
Vue.filter('type', filter.type)
Vue.filter('dislayImageUrl', filter.dislayImageUrl)

export default filter