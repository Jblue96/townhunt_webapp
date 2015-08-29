module.exports = {

  _messages: null,

  init(messages) {
    this._messages = messages
  },

  // return key-value list
  // e.g. for 'Types'
  // [{id: "food-and-drinks", label: "Food and Drinks"},...]
  getKeyLabel(constantName, keyProp, labelProp) {
    if (!this._messages || !this[constantName]) {
      console.log('no messages or no constant in constants.js')
      return
    }
    var that = this,
      arr = []
    this[constantName].forEach(function(id) {
      var obj = {}
      obj[keyProp || 'id'] = id
      obj[labelProp || 'label'] = that._messages['constants_' + constantName + '_' + id] || id
      arr.push(obj)
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

  Genre: [
    'sushi',
    'soba',
    'yakitori'
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
  ]
}