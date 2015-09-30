/**
 * Cache
 * Store API response cache and temp data
 */
export default {

  _ref: {
    // login user info
    me: null,

    // callback URL after login success
    loginCallbackUrl: null,

    // URL histories to move by back button
    histories: ['#/'],

    // current selected detail offer
    detail: null,

    // current selected request detail in my history
    requestHistoryDetail: null,

    // reserveRequest for submit data
    // {
    //   "date": "2015-10-05",
    //   "menuType": "lunch",
    //   "time": "13:00",
    //   "numberOfPersons": 3,
    //   "user": {
    //     "name": "Takuya Tejima",
    //     "email": "tejitak@indie-inc.com"
    //   },
    //   "special": "Order birthday cakes"
    // }
    reserveRequest: null,

    // force reload with ignoring keep-alive
    _forceReload: {
      'page-top': true
    }
  },

  set(key, value) {
    this._ref[key] = value
  },

  get(key) {
    if (key === 'detail' && this._ref[key]) {
      // temp to be removed
      this._ref[key].menus = [
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
    }



    return this._ref[key]
  },

  enableForceReload(componentId) {
    this._ref._forceReload[componentId] = true
  },

  disableForceReload(componentId) {
    this._ref._forceReload[componentId] = false
  },

  needForceReload(componentId) {
    return this._ref._forceReload[componentId] || false
  }

}
