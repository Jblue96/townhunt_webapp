<template>
    <div class="component__menu_item">
      <div class="menu_item_row">
        <div class="menu_item_name">{{item.name_en}}</div>
        <div class="menu_item_price">{{currency.symbol}}{{item.price | numberFormat}}</div>
      </div>
      <div class="menu_item_desc">{{item.description_en}}</div>
    </div>
</template>

<script lang="babel">
import constants from '../../../../controllers/constants'
import util from '../../common/util'
import filter from '../filters/filter'

//                {
//                   "type": "MenuItem",
//                   "price": 100,
//                   "name_ja": "",
//                   "name_en": "",
//                   "description_ja": "",
//                   "description_en": "",
//                   "option_groups": [
//                      {
//                         "type": "OPTION_ADD",
//                         "text_ja": "Choics",
//                         "text_en": "Choics",
//                         "options": [{
//                            "name_ja": "小",
//                            "name_en": "Small",
//                            "price": 100
//                         }, {
//                            "name_ja": "大",
//                            "name_en": "Large",
//                            "price": 300
//                         }]
//                      }
//                   ]
//                }

export default {

  props: ['item', 'currency'],

  data() {
    return {
      item: {},
      currency: {}
    }
  },

  created() {
  },

  methods: {
  }
}
</script>


