<template>
  <div class="page__queries">
    <div class="queries_form">
      <div class="queries_item_wrap">
        <div class="queries_item_label">
          <label>Location</label>
        </div>
        <div clas="queries_item_select">
          <select v-model="values.area" options="options.areas"></select>
        </div>
      </div>
      <div class="queries_item_wrap">
        <div class="queries_item_label">
          <label>Genre</label>
        </div>
        <div clas="queries_item_select">
          <select v-model="values.category" options="options.categories"></select>
        </div>
      </div>
      <div class="queries_item_wrap">
        <div class="queries_item_label">
          <label>Price Range</label>
        </div>
        <div clas="queries_item_select">
          <select v-model="values.priceRange" options="options.priceRanges"></select>
        </div>
      </div>
      <div class="queries_item_wrap">
        <div class="queries_item_label">
          <label>Open Now</label>
          <input type="checkbox" v-model="values.nowOpened">
        </div>
      </div>
      <div class="queries_item_wrap">
        <div class="queries_item_label">
          <label>Keyword</label>
        </div>
        <div clas="queries_item_input">
          <input type="text" v-model="values.keyword" placeholder="Restaurant name">
        </div>
      </div>

    </div>
    <div class="queries_footer">
        <div class="btn_submit_queries btn_large" v-on="click: submit">Filter</div>
    </div>
  </div>

</template>

<script lang="babel">
import config from '../../common/config'
import cache from '../../common/cache'
import util from '../../common/util'
import urlQueryParser from '../../common/urlQueryParser'
import filter from '../filters/filter'
import constants from '../../../../controllers/constants'

var DEFAULT_VALUE = '_default'

export default {
    data() {
      var areas = constants.getKeyLabel('Area_JP_tokyo', 'value', 'text')
      // show only top genre
      var categories = constants.getKeyLabel('Genre', 'value', 'text', 21)
      var priceRanges = constants.getKeyLabel('PriceRange', 'value', 'text')
      return {
        options: {
          areas: [{value: DEFAULT_VALUE, text:'All'}].concat(areas),
          categories: [{value: DEFAULT_VALUE, text: 'All'}].concat(categories),
          priceRanges: [{value: DEFAULT_VALUE, text:'All'}].concat(priceRanges)
        },
        values: {
          area: DEFAULT_VALUE,
          category: DEFAULT_VALUE,
          priceRange: DEFAULT_VALUE,
          nowOpened: false,
          keyword: ''
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
      this.queryParams = $.extend(this.queryParams, urlQueryParser.getUrlSearchQueryParams())
      // convet queryParams to form values
      this.values.area = this.queryParams.where.area || DEFAULT_VALUE
      this.values.category = this.queryParams.where.category && this.queryParams.where.category['$regex'] || DEFAULT_VALUE
      this.values.priceRange = this.queryParams.where.priceRange || DEFAULT_VALUE

      var nowInfo = filter.util.getNowInfo()
      this.values.nowOpened = this.queryParams.where[nowInfo.startColumn] ? true : false

      this.values.keyword = this.queryParams.where.name && this.queryParams.where.name['$regex'] || ''
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
          // this.queryParams.where.category = this.values.category
          // TODO: temp implementation handling comma separated string
          this.queryParams.where.category = {'$regex': this.values.category, '$options':'i'}
          filtered = true
        }
        // set price range
        if (this.values.priceRange === DEFAULT_VALUE) {
          delete this.queryParams.where.priceRange
        } else {
          this.queryParams.where.priceRange = this.values.priceRange
          filtered = true
        }

        // for time query
        var nowInfo = filter.util.getNowInfo()
        // check today's day -> check corresponding oh1_<day>_start, oh1_<day>_end
        // TODO: TEMP implementation
        // -16:00 -> query for oh1_ columns as day
        // 16:00- -> query for oh2_ columns as nihgt 
        // TODO: check today is holiday -> check oh1_holiday_start, oh1_holiday_end

        if (this.values.nowOpened) {
          // start time
          this.queryParams.where[nowInfo.startColumn] = {"$lte": nowInfo.diplayTime}
          // end time
          this.queryParams.where[nowInfo.endColumn] = {"$gte": nowInfo.diplayTime}
          filtered = true
        } else {
          delete this.queryParams.where[nowInfo.startColumn]
          delete this.queryParams.where[nowInfo.endColumn]
        }

        // keyword
        // query with {'$regex': q, '$options':'i'} for now
        if (this.values.keyword) {
          this.queryParams.where.name = {'$regex': this.values.keyword, '$options':'i'}
          filtered = true
        } else {
          delete this.queryParams.where.name
        }

        // location.href = '?search={"where":{"area":"shibuya"}}#/'
        // chcek previous page e.g. #/ or #/map
        var histories = cache.get('histories')
        var prev = histories[histories.length - 2] || '#/'
        if (filtered) {
          util.redirect('?search=' + JSON.stringify(this.queryParams) + prev)
        } else {
          util.redirect('?' + prev)
        }
      }
    }
}
</script>