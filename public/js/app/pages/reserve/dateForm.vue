<template>
  <div class="page__reserve">
    <div v-if="initialized">
      <div class="detail_banner swiper-container detail_banner_swiper">
        <ul class="swiper-wrapper">
          <li v-repeat="item.images" class="swiper-slide detail_banner_bg" v-style="background-image: 'url(' + url + ')'"></li>
        </ul>
      </div>
      <div class="detail_summary">
        <div class="detail_table">
            <div class="detail_middle">
                <div class="detail_title">{{item.name}}</div>
            </div>
        </div>
      </div>
      <div class="reserve_date_form">
        <div>
          <component-slide-select type="date" options="{{dateOptions}}" selectedValue="{{@ reserveRequestDate.date}}"></component-slide-select>
        </div>
        <hr/>
        <div>
          <component-slide-select type="menuType" options="{{menuTypeOptions}}" selectedValue="{{@ reserveRequestDate.menuType}}"></component-slide-select>
        </div>
        <hr/>
        <div>
          <component-slide-select type="time" options="{{timeOptions}}" selectedValue="{{@ reserveRequestDate.time}}"></component-slide-select>
        </div>
        <hr/>
        <div>
          <component-slide-select type="numberOfPersons" options="{{numberOfPersonsOptions}}" selectedValue="{{@ reserveRequestDate.numberOfPersons}}"></component-slide-select>
        </div>
      </div>
    </div>
    <div class="reserve_footer" v-if="initialized">
        <div class="btn_submit_reserve btn_large" v-on="click: next">NEXT</div>
    </div>
    <div v-if="!initialized"></div>
  </div>
</template>

<script lang="babel">
import $ from 'npm-zepto'
import util from '../../../common/util'
import config from '../../../common/config'
import cache from '../../../common/cache'
import labels from '../../../common/labels'
import componentSlideSelect from '../../components/slideSelect.vue'


export default {
    data() {
        return {
          initialized: false,
          showLoading: false,
          item: {},
          reserveRequestDate: this.initialData()
        }
    },

    components: {
      'component-slide-select': componentSlideSelect
    },

    computed: {
      dateOptions() {
        // generate 2 weeks dates
        var options = []
        // e.g. 2015-10-5
        var day = util.today()
        for (var i=0; i<14; i++) {
          var longValue = util.convetDateToLongValue({value: day})
          var dateInfo = util.convertLongValueToDateInfo(longValue)
          options.push({
            value: day,
            label: `<div class=''>${dateInfo.dayOfWeek}</div><div class=''>${dateInfo.dayOfMonth} ${dateInfo.month}</div>`,
            safe: true
          })
          // set as a next day
          day = util.tomorrow(day)
        }
        return options
      },

      menuTypeOptions() {
        // check menus array
        var options = []
        if (this.item.menus) {
          this.item.menus.forEach((menu) => {
            options.push({
              value: menu.menu_type,
              label: menu.menu_name_en
            })
          })
        }
        return options
      },

      timeOptions() {
        // TOOD: check item.openHours
        if (this.reserveRequestDate.menuType == 'lunch') {
          var arr = [
            "11:00",
            "11:30",
            "12:00",
            "12:30",
            "13:00",
            "13:30",
            "14:00",
            "14:30",
            "15:00",
          ]
          return $.map(arr, function(n, i){
            return {
              label: n,
              value: n
            }
          })
        } else {
          var arr = [
            "17:00",
            "17:30",
            "18:00",
            "18:30",
            "19:00",
            "19:30",
            "20:00",
            "20:30",
            "21:00",
            "21:30",
            "22:00",
            "22:30",
          ]
          return $.map(arr, function(n, i){
            return {
              label: n,
              value: n
            }
          })
        }
      },

      numberOfPersonsOptions() {
        return $.map([1,2,3,4,5,6,7,8,9,10,11,12], function(n, i){
          return {
            label: n,
            value: n
          }
        })
      }
    },

    created() {
      this.$on('onSelectOption', this.onSelectOption.bind(this))
    },

    attached() {
        // check exisiting item
        var detail = cache.get('detail')
        if (detail) {
          // TODO: temp workaround to scrollTop
          setTimeout(() => {
              this.initialized = true
              this.item = detail
              this.initSwiper()

              // check reserve request object cache
              // if no exist, set blank to update cache rendering
              // execute after this.item is set
              setTimeout(() => {
                this.reserveRequestDate = cache.get('reserveRequestDate') || this.initialData()
                // this.$broadcast('selectValue_date', {value: this.reserveRequestDate.date, defaultSelectedIndex: 0})
                // this.$broadcast('selectValue_menuType', {value: this.reserveRequestDate.menuType, defaultSelectedIndex: 0})
                // this.$broadcast('selectValue_time', {value: this.reserveRequestDate.time, defaultSelectedIndex: 0})
                // this.$broadcast('selectValue_numberOfPersons', {value: this.reserveRequestDate.numberOfPersons, defaultSelectedIndex: 0})
              }, 25)
          }, 25)

        } else {
          // TODO: handling direct access
          util.redirect('#/')
        }
    },

    detached() {
      this.initialized = false
    },

    methods: {
        initialData() {
          return {
            "date": util.today(),
            "menuType": "lunch",
            "time": "11:00",
            "numberOfPersons": 1
          }
        },

        initSwiper() {
            // TODO: temp to attach after DOM is inserted by initialized flag
            setTimeout(() => {
              util.initBannerSwiper($(this.$el).find('.detail_banner_swiper'))
            }, 25)
        },

        onSelectOption(selectedObj) {
          this.reserveRequestDate[selectedObj.type] = selectedObj.selectedValue
          // temp workaround to reflect depedencies data to UI
          if (selectedObj.type === 'menuType') {
            setTimeout(() => {
                // also update time
                var times = this.$options.computed.timeOptions.apply(this)
                this.reserveRequestDate.time = times[0] && times[0].value || ''
                this.$broadcast('selectValue_time', {value: this.reserveRequestDate.time})
            }, 50)
          }
        },

        next() {
          // validate
          if (!this.reserveRequestDate.time) {
            alert('Please specify the time')
            return
          }
          console.log(JSON.stringify(this.reserveRequestDate))
          // store into cache
          cache.set('reserveRequestDate', this.reserveRequestDate)
          util.redirect('#/reserve/user_form')
        }
    }
}
</script>
