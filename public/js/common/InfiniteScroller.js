/**
 * Infinite Scroll Mixin
 */
import $ from 'npm-zepto'
import util from './util'

export default class InfiniteScroller {

  constructor(options) {
    var opt = options || {}
    this.$win = $(window)
    this.$container = options.selector ? $(options.selector) : $(document)
    this.callback = options.callback || function() {}
    this._winH = 0
    this.autoLoadingBottomHeight = 40
  }

  enable() {
      this.disable()
      this._attachScrollEvent()
  }

  disable() {
      this._removeScrollEvent()
  }

  _scroll() {
      if (this.$win.scrollTop() + this.$win.height() >= this.$container.height() - this.autoLoadingBottomHeight) {
        this.callback()
      }
  }

  _attachScrollEvent() {
      this.$win.on("scroll.paging", util.throttle(() => this._scroll(), 100))
  }

  _removeScrollEvent() {
      this.$win.off("scroll.paging")
  }

}