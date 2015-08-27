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
  ] 
}