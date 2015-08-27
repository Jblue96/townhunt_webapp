<template>
  <div class="page__queries">
    <div class="queries_form">
      <div>
        <label>Location</label>
        <select v-model="values.area" options="options.areas"></select>
      </div>
      <div>
        <label>Genre</label>
        <select v-model="values.category" options="options.categories"></select>
      </div>
      <div>
        <label>Price Range</label>
        <select v-model="values.priceRange" options="options.priceRanges"></select>
      </div>
      <div>
        <label>Open Now</label>
        <input type="checkbox" v-model="values.nowOpened">
      </div>
    </div>
    <div class="queries_footer">
        <div class="queries_btn btn_large" v-on="click: submit">Filter</div>
    </div>
  </div>

</template>

<script lang="babel">
import config from '../../common/config'
import util from '../../common/util'
import cache from '../../common/cache'
import constants from '../../../../controllers/constants'

var DEFAULT_VALUE = '_default'

export default {
    data() {
      var areas = constants.getKeyLabel('Area_JP_tokyo', 'value', 'text')
      var categories = constants.getKeyLabel('Genre', 'value', 'text')
      return {
        options: {
          areas: [{value: DEFAULT_VALUE, text:'All'}].concat(areas),
          categories: [{value: DEFAULT_VALUE, text: 'All'}].concat(categories),
          priceRanges: [
            {value: DEFAULT_VALUE, text: 'All'},
            {value: '_¥3000', text: 'Up to ¥3,000'},
            {value: '¥3000_¥4000', text: '¥3,000 - ¥4,000'},
            {value: '¥4000_¥5000', text: '¥4,000 - ¥5,000'},
            {value: '¥5000_¥8000', text: '¥5,000 - ¥8,000'},
            {value: '¥8000_¥10000', text: '¥8,000 - ¥10,000'},
            {value: '¥10000_', text: 'Over ¥10,000'}
          ]
        },
        values: {
          area: DEFAULT_VALUE,
          category: DEFAULT_VALUE,
          priceRange: DEFAULT_VALUE,
          nowOpened: false
        },
        queryParams: {
          // order: '',
          where: {
          }
        }
      }
    },

    created() {
      // handle initial query params
      this.queryParams = $.extend(this.queryParams, util.getUrlSearchQueryParams())
      console.log(this.queryParams.where)
      // convet queryParams to form values
      this.values.area = this.queryParams.where.area || DEFAULT_VALUE
      this.values.category = this.queryParams.where.category || DEFAULT_VALUE
      this.values.priceRange = this.queryParams.where.priceRange || DEFAULT_VALUE

    },

    methods: {
      submit() {
        // set as url query by form values
        var filtered = false
        // set area
        if (this.values.area === DEFAULT_VALUE) {
          delete this.queryParams.where.area
        } else {
          this.queryParams.where.area = this.values.area
          filtered = true
        }
        // set category
        if (this.values.category === DEFAULT_VALUE) {
          delete this.queryParams.where.category
        } else {
          this.queryParams.where.category = this.values.category
          filtered = true
        }
        // set price range
        if (this.values.priceRange === DEFAULT_VALUE) {
          delete this.queryParams.where.priceRange
        } else {
          this.queryParams.where.priceRange = this.values.priceRange
          filtered = true
        }

        // TODO:
        // nowOpened
        // check today is holiday -> check operatingHours_holiday_srart, operatingHours_holiday_end

        // check today's day -> check corresponding operatingHours_<day>_srart, operatingHours_<day>_end

        console.log(this.queryParams.where)
        // location.href = '?search={"where":{"area":"shibuya"}}#/'
        if (filtered) {
          location.href = '?search=' + JSON.stringify(this.queryParams) + '#/'
        } else {
          location.href = '/#/'
        }
      }
    }
}
</script>