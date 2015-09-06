module.exports = {

  _messages: null,

  init(messages) {
    this._messages = messages
  },

  // return key-value list
  // e.g. for 'Types'
  // [{id: "food-and-drinks", label: "Food and Drinks"},...]
  getKeyLabel(constantName, keyProp, labelProp, limit) {
    if (!this._messages || !this[constantName]) {
      console.log('no messages or no constant in constants.js')
      return
    }
    var that = this,
      arr = []
    this[constantName].forEach(function(id) {
      if (!limit || (limit >= 0 && arr.length < limit)) {
        var obj = {}
        obj[keyProp || 'id'] = id
        obj[labelProp || 'label'] = that._messages['constants_' + constantName + '_' + id] || id
        arr.push(obj)
      }
    })
    return arr
  },

  getAreaLocation(area) {
    switch(area) {
      case 'shibuya':
        return {latitude: 35.658129, longitude: 139.702133}
      case 'shinjuku':
        return {latitude: 35.690921, longitude: 139.700258}
      case 'roppongi':
        return {latitude: 35.662836, longitude: 139.731443}
      case 'ginza-shinbash':
        return {latitude: 35.671989, longitude: 139.763965}
    }
    return null
  },

  Area_JP_tokyo: [
    'shibuya',
    'shinjuku',
    'roppongi',
    'ginza-shinbash'
  ],

  // TopGenre: [
  //   'kappo_kaiseki','seafood','izakaya','sushi','yakitori_kushiyaki','ramen_noodles','soba','shabu_shabu','sukiyaki','kyoto_cuisine','tonkatsu','unagi','oden','tenpura','teppanyaki','chicken','sake','hot_pot','yakiniku','kushiage','okinawa_cuisine'
  // ],

  Genre: [
    'kappo_kaiseki','seafood','izakaya','sushi','yakitori_kushiyaki','ramen_noodles','soba','shabu_shabu','sukiyaki','kyoto_cuisine','tonkatsu','unagi','oden','tenpura','teppanyaki','chicken','sake','hot_pot','yakiniku','kushiage','okinawa_cuisine','japanese_food','regional_cuisine','grilled_tripe','bar','fried_foods','japanese_fusion_cuisine','horumon','chinese','donburi','tendon','stand_bar','standing_style','fugu','steak','suppon','french','beef','dishes','robatayaki','pork','udon','tsukemen','tempura','creative_cuisine','grilled_pork','genghis_khan','barfowl','western','curry','mizutaki','champon','bistro','oyster_bar','wine_bar','motsunabe','vegetable_dishes','sumibiyaki','shojin_cuisine','cafe_bar','oyakodon','gyutan','crab','shochu','cafe','kaitenzushi','takoyaki','tofu','yuba','ryokan'
  ],

  Type: [
    'food-and-drinks',
    'shows',
    'luxury',
    'wifi-and-transport',
    'theme-parks',
    'outdoor'
  ],

  DaysOfWeek: [
    'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'
  ],

  PriceRange: [
    '_¥3000','¥3000_¥4000','¥4000_¥5000','¥5000_¥8000','¥8000_¥10000','¥10000_'
  ],

  clientStorages: {
    favorites: 'townhunt.favorites'
  }
}