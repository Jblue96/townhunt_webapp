<template>
  <div class="page__menu">
    <div v-if="initialized">
      <div class="detail_banner swiper-container detail_banner_swiper">
        <ul class="swiper-wrapper">
          <li v-repeat="item.images" class="swiper-slide detail_banner_bg" v-style="background-image: 'url(' + url + ')'">
          <div class="detail_banner_label" v-if="title">{{title}}</div>
          </li>
        </ul>
      </div>
      <div class="detail_summary">
        <div class="detail_table">
            <div class="detail_middle">
                <div class="detail_title">{{item.name}}</div>
            </div>
        </div>
      </div>
      <div class="menu_wrap">
        <component-menus menus="{{item.menus}}"></component-menus>
      </div>
    </div>
    <div class="detail_footer" v-if="initialized">
        <div class="btn_submit_reserve btn_large" v-on="click: reserve">REQUEST RESERVE</div>
    </div>
    <div v-if="!initialized"></div>
  </div>
</template>

<script lang="babel">
import $ from 'npm-zepto'
import util from '../../common/util'
import config from '../../common/config'
import cache from '../../common/cache'
import labels from '../../common/labels'
import componentMenus from '../components/menus.vue'

export default {
    data() {
        return {
          initialized: false,
          showLoading: false,
          item: {}
        }
    },

    components: {
      'component-menus': componentMenus
    },

    attached() {
        // check exisiting item
        var detail = cache.get('detail')
        if(detail){
            // TODO: temp workaround to scrollTop
            setTimeout(() => {
                this.initialized = true
                this.item = detail
                // temp
                this.item.menus = [
                    {  
                       "currency": {
                          "name":"JPY",
                          "symbol":"¥"
                       },
                       "menu_type": "lunch",
                       "menu_name_ja": "",
                       "menu_name_en": "Lunch",
                       "section_items": [
                          {
                             "section_type": "",
                             "section_name_ja": "おまかせ",
                             "section_name_en": "Chef's Choice",
                             "contents": [
                                  {
                                     "type": "MenuItem",
                                     "price": 2100,
                                     "name_ja": "",
                                     "name_en": "Nigiri 8 pieces",
                                     "description_ja": "",
                                     "description_en": "Veriety of 8 pcs of Nigiri (Hand-pressed) Sushi",
                                     "option_groups": []
                                  },
                                  {
                                     "type": "MenuItem",
                                     "price": 3600,
                                     "name_ja": "",
                                     "name_en": "Nigiri 12 pieces",
                                     "description_ja": "",
                                     "description_en": "Veriety of 12 pcs of Nigiri (Hand-pressed) Sushi",
                                     "option_groups": []
                                  }
                              ]
                          }
                       ],
                       "option_groups": []
                    },
                    {  
                       "currency": {
                          "name":"JPY",
                          "symbol":"¥"
                       },
                       "menu_type": "dinner",
                       "menu_name_ja": "",
                       "menu_name_en": "Dinner",
                       "section_items": [
                          {
                             "section_type": "",
                             "section_name_ja": "おまかせ",
                             "section_name_en": "Chef's Choice",
                             "contents": [
                                  {
                                     "type": "MenuItem",
                                     "price": 15000,
                                     "name_ja": "",
                                     "name_en": "Nigiri",
                                     "description_ja": "",
                                     "description_en": "Veriety of 15 pcs of Nigiri (Hand-pressed) Sushi",
                                     "option_groups": []
                                  }
                              ]
                          },
                          {
                             "section_type": "",
                             "section_name_ja": "飲み物",
                             "section_name_en": "Drinks",
                             "contents": [
                                  {
                                     "type": "MenuItem",
                                     "price": 600,
                                     "name_ja": "",
                                     "name_en": "Draft Beer",
                                     "description_ja": "",
                                     "description_en": "Asahi",
                                     "option_groups": []
                                  },
                                  {
                                     "type": "MenuItem",
                                     "price": 600,
                                     "name_ja": "",
                                     "name_en": "Bottled Beer",
                                     "description_ja": "",
                                     "description_en": "Asahi, Kirin, Sapporo",
                                     "option_groups": []
                                  },
                                  {
                                     "type": "MenuItem",
                                     "price": 800,
                                     "name_ja": "",
                                     "name_en": "Sake",
                                     "description_ja": "",
                                     "description_en": "",
                                     "option_groups": []
                                  }
                              ]                            
                          }
                       ],
                       "option_groups": []
                    }
                 ]


                this.initSwiper()
            }, 25)
        }else{
          // TODO: handling direct access
          location.href = '#/'
        }
    },

    detached() {
      this.initialized = false
    },

    methods: {
        initSwiper() {
            // TODO: temp to attach after DOM is inserted by initialized flag
            setTimeout(() => {
              util.initBannerSwiper($(this.$el).find('.detail_banner_swiper'))
            }, 25)
        },

        reserve() {
          location.href = '#/reserve/date_form/' + this.item.objectId
        }

    }
}
</script>