/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(18);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _vue = __webpack_require__(19);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _director = __webpack_require__(86);
	
	var _commonConfig = __webpack_require__(87);
	
	var _commonConfig2 = _interopRequireDefault(_commonConfig);
	
	var _commonUtil = __webpack_require__(89);
	
	var _commonUtil2 = _interopRequireDefault(_commonUtil);
	
	var _commonCache = __webpack_require__(93);
	
	var _commonCache2 = _interopRequireDefault(_commonCache);
	
	// components
	
	var _componentsHeaderVue = __webpack_require__(94);
	
	var _componentsHeaderVue2 = _interopRequireDefault(_componentsHeaderVue);
	
	var _componentsNavVue = __webpack_require__(97);
	
	var _componentsNavVue2 = _interopRequireDefault(_componentsNavVue);
	
	var _componentsFooterVue = __webpack_require__(100);
	
	var _componentsFooterVue2 = _interopRequireDefault(_componentsFooterVue);
	
	// pages
	
	var _pagesDetailVue = __webpack_require__(103);
	
	var _pagesDetailVue2 = _interopRequireDefault(_pagesDetailVue);
	
	var _pagesLoginVue = __webpack_require__(106);
	
	var _pagesLoginVue2 = _interopRequireDefault(_pagesLoginVue);
	
	var _pagesLogoutVue = __webpack_require__(109);
	
	var _pagesLogoutVue2 = _interopRequireDefault(_pagesLogoutVue);
	
	var _pagesTopVue = __webpack_require__(112);
	
	var _pagesTopVue2 = _interopRequireDefault(_pagesTopVue);
	
	var _pagesMapVue = __webpack_require__(125);
	
	var _pagesMapVue2 = _interopRequireDefault(_pagesMapVue);
	
	var _pagesWishlistVue = __webpack_require__(129);
	
	var _pagesWishlistVue2 = _interopRequireDefault(_pagesWishlistVue);
	
	var _pagesMypageTopVue = __webpack_require__(132);
	
	var _pagesMypageTopVue2 = _interopRequireDefault(_pagesMypageTopVue);
	
	var _pagesMypageEditVue = __webpack_require__(135);
	
	var _pagesMypageEditVue2 = _interopRequireDefault(_pagesMypageEditVue);
	
	var _pagesPaymentOrderVue = __webpack_require__(138);
	
	var _pagesPaymentOrderVue2 = _interopRequireDefault(_pagesPaymentOrderVue);
	
	var _pagesPaymentSuccessVue = __webpack_require__(141);
	
	var _pagesPaymentSuccessVue2 = _interopRequireDefault(_pagesPaymentSuccessVue);
	
	var _pagesRequestListVue = __webpack_require__(144);
	
	var _pagesRequestListVue2 = _interopRequireDefault(_pagesRequestListVue);
	
	var _pagesRequestDetailVue = __webpack_require__(147);
	
	var _pagesRequestDetailVue2 = _interopRequireDefault(_pagesRequestDetailVue);
	
	// filter
	
	var _filtersFilter = __webpack_require__(121);
	
	var _filtersFilter2 = _interopRequireDefault(_filtersFilter);
	
	// zepto patch
	// for swiper
	
	var _npmZepto = __webpack_require__(88);
	
	var _npmZepto2 = _interopRequireDefault(_npmZepto);
	
	__webpack_require__(150);
	
	// setup Vue
	_vue2['default'].config.debug = _commonConfig2['default'].debug;
	
	var app = new _vue2['default']({
	
	    el: '#app',
	
	    components: {
	        'component-header': _componentsHeaderVue2['default'],
	        'component-nav': _componentsNavVue2['default'],
	        'component-footer': _componentsFooterVue2['default'],
	        'page-detail': _pagesDetailVue2['default'],
	        'page-login': _pagesLoginVue2['default'],
	        'page-logout': _pagesLogoutVue2['default'],
	        'page-top': _pagesTopVue2['default'],
	        'page-map': _pagesMapVue2['default'],
	        'page-wishlist': _pagesWishlistVue2['default'],
	        'page-mypage-top': _pagesMypageTopVue2['default'],
	        'page-mypage-edit': _pagesMypageEditVue2['default'],
	        'page-payment-order': _pagesPaymentOrderVue2['default'],
	        'page-payment-success': _pagesPaymentSuccessVue2['default'],
	        'page-request-list': _pagesRequestListVue2['default'],
	        'page-request-detail': _pagesRequestDetailVue2['default']
	    },
	
	    data: {
	        currentView: 'page-top',
	        headerOptions: {},
	        // API response cache
	        cache: {
	            detail: null,
	            me: null,
	            request: {
	                detail: null
	            }
	        }
	    },
	
	    created: function created() {
	        var _this = this;
	
	        // called by headear save button
	        this.$on('onSave', function (componentId) {
	            // e.g. onSave:page-mypage-edit
	            _this.$broadcast('onSave:' + componentId);
	        });
	    },
	
	    methods: {
	        fetchMe: function fetchMe() {
	            var _this2 = this;
	
	            return new Promise(function (resolve, reject) {
	                // not loggedIn
	                if (!_commonConfig2['default'].isLoggedIn) {
	                    resolve();
	                    return;
	                }
	                // already loaded
	                if (_this2.$root && _commonCache2['default'].get('me')) {
	                    resolve(_commonCache2['default'].get('me'));
	                    return;
	                }
	                // initial load
	                _commonUtil2['default'].request({
	                    url: './api/v1/user/me'
	                }).then(function (data) {
	                    _commonCache2['default'].set('me', data);
	                    resolve(data);
	                }, reject);
	            });
	        }
	    }
	});
	
	var onRoute = function onRoute(componentId) {
	    app.currentView = componentId;
	    app.$broadcast('onRoute', componentId);
	};
	
	// setup router
	var routes = {
	    '/': function _() {
	        onRoute('page-top');
	    },
	    '/map': function map() {
	        onRoute('page-map');
	    },
	    '/detail/:id': function detailId(id) {
	        onRoute('page-detail');
	    },
	    '/login': function login() {
	        onRoute('page-login');
	    },
	    '/logout': function logout() {
	        onRoute('page-logout');
	    },
	    '/wishlist': function wishlist() {
	        onRoute('page-wishlist');
	    },
	    '/mypage/top': function mypageTop() {
	        onRoute('page-mypage-top');
	    },
	    '/mypage/edit': function mypageEdit() {
	        onRoute('page-mypage-edit');
	    },
	    '/payment/order': function paymentOrder() {
	        onRoute('page-payment-order');
	    },
	    '/payment/success': function paymentSuccess() {
	        onRoute('page-payment-success');
	    },
	    '/request/list': function requestList() {
	        onRoute('page-request-list');
	    },
	    '/request/detail/:id': function requestDetailId(id) {
	        onRoute('page-request-detail');
	    }
	};
	
	var NEED_LOGIN_PAGES = ['mypage', 'payment', 'request', 'wishlist'];
	
	var router = app.router = (0, _director.Router)(routes).configure({
	    before: function before() {
	        // move login screen for anonymous login
	        var current = '#/' + router.getRoute().join('/');
	        if (!_commonConfig2['default'].isLoggedIn) {
	            if (NEED_LOGIN_PAGES.indexOf(router.getRoute()[0]) > -1) {
	                _commonCache2['default'].set('loginCallbackUrl', current);
	                location.href = '#/login';
	                return false;
	            }
	        }
	        _commonCache2['default'].get('histories').push(current);
	    }
	});
	
	router.init('/');
	
	module.exports = app;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(20)
	var extend = _.extend
	
	/**
	 * The exposed Vue constructor.
	 *
	 * API conventions:
	 * - public API methods/properties are prefiexed with `$`
	 * - internal methods/properties are prefixed with `_`
	 * - non-prefixed properties are assumed to be proxied user
	 *   data.
	 *
	 * @constructor
	 * @param {Object} [options]
	 * @public
	 */
	
	function Vue (options) {
	  this._init(options)
	}
	
	/**
	 * Mixin global API
	 */
	
	extend(Vue, __webpack_require__(29))
	
	/**
	 * Vue and every constructor that extends Vue has an
	 * associated options object, which can be accessed during
	 * compilation steps as `this.constructor.options`.
	 *
	 * These can be seen as the default options of every
	 * Vue instance.
	 */
	
	Vue.options = {
	  replace: true,
	  directives: __webpack_require__(45),
	  elementDirectives: __webpack_require__(67),
	  filters: __webpack_require__(70),
	  transitions: {},
	  components: {},
	  partials: {}
	}
	
	/**
	 * Build up the prototype
	 */
	
	var p = Vue.prototype
	
	/**
	 * $data has a setter which does a bunch of
	 * teardown/setup work
	 */
	
	Object.defineProperty(p, '$data', {
	  get: function () {
	    return this._data
	  },
	  set: function (newData) {
	    if (newData !== this._data) {
	      this._setData(newData)
	    }
	  }
	})
	
	/**
	 * Mixin internal instance methods
	 */
	
	extend(p, __webpack_require__(72))
	extend(p, __webpack_require__(73))
	extend(p, __webpack_require__(74))
	extend(p, __webpack_require__(78))
	extend(p, __webpack_require__(80))
	
	/**
	 * Mixin public API methods
	 */
	
	extend(p, __webpack_require__(81))
	extend(p, __webpack_require__(82))
	extend(p, __webpack_require__(83))
	extend(p, __webpack_require__(84))
	extend(p, __webpack_require__(85))
	
	module.exports = _.Vue = Vue


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var lang = __webpack_require__(24)
	var extend = lang.extend
	
	extend(exports, lang)
	extend(exports, __webpack_require__(25))
	extend(exports, __webpack_require__(26))
	extend(exports, __webpack_require__(21))
	extend(exports, __webpack_require__(27))
	extend(exports, __webpack_require__(28))


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var _ = __webpack_require__(20)
	var config = __webpack_require__(23)
	var extend = _.extend
	
	/**
	 * Option overwriting strategies are functions that handle
	 * how to merge a parent option value and a child option
	 * value into the final value.
	 *
	 * All strategy functions follow the same signature:
	 *
	 * @param {*} parentVal
	 * @param {*} childVal
	 * @param {Vue} [vm]
	 */
	
	var strats = Object.create(null)
	
	/**
	 * Helper that recursively merges two data objects together.
	 */
	
	function mergeData (to, from) {
	  var key, toVal, fromVal
	  for (key in from) {
	    toVal = to[key]
	    fromVal = from[key]
	    if (!to.hasOwnProperty(key)) {
	      to.$add(key, fromVal)
	    } else if (_.isObject(toVal) && _.isObject(fromVal)) {
	      mergeData(toVal, fromVal)
	    }
	  }
	  return to
	}
	
	/**
	 * Data
	 */
	
	strats.data = function (parentVal, childVal, vm) {
	  if (!vm) {
	    // in a Vue.extend merge, both should be functions
	    if (!childVal) {
	      return parentVal
	    }
	    if (typeof childVal !== 'function') {
	      process.env.NODE_ENV !== 'production' && _.warn(
	        'The "data" option should be a function ' +
	        'that returns a per-instance value in component ' +
	        'definitions.'
	      )
	      return parentVal
	    }
	    if (!parentVal) {
	      return childVal
	    }
	    // when parentVal & childVal are both present,
	    // we need to return a function that returns the
	    // merged result of both functions... no need to
	    // check if parentVal is a function here because
	    // it has to be a function to pass previous merges.
	    return function mergedDataFn () {
	      return mergeData(
	        childVal.call(this),
	        parentVal.call(this)
	      )
	    }
	  } else if (parentVal || childVal) {
	    return function mergedInstanceDataFn () {
	      // instance merge
	      var instanceData = typeof childVal === 'function'
	        ? childVal.call(vm)
	        : childVal
	      var defaultData = typeof parentVal === 'function'
	        ? parentVal.call(vm)
	        : undefined
	      if (instanceData) {
	        return mergeData(instanceData, defaultData)
	      } else {
	        return defaultData
	      }
	    }
	  }
	}
	
	/**
	 * El
	 */
	
	strats.el = function (parentVal, childVal, vm) {
	  if (!vm && childVal && typeof childVal !== 'function') {
	    process.env.NODE_ENV !== 'production' && _.warn(
	      'The "el" option should be a function ' +
	      'that returns a per-instance value in component ' +
	      'definitions.'
	    )
	    return
	  }
	  var ret = childVal || parentVal
	  // invoke the element factory if this is instance merge
	  return vm && typeof ret === 'function'
	    ? ret.call(vm)
	    : ret
	}
	
	/**
	 * Hooks and param attributes are merged as arrays.
	 */
	
	strats.created =
	strats.ready =
	strats.attached =
	strats.detached =
	strats.beforeCompile =
	strats.compiled =
	strats.beforeDestroy =
	strats.destroyed =
	strats.props = function (parentVal, childVal) {
	  return childVal
	    ? parentVal
	      ? parentVal.concat(childVal)
	      : _.isArray(childVal)
	        ? childVal
	        : [childVal]
	    : parentVal
	}
	
	/**
	 * 0.11 deprecation warning
	 */
	
	strats.paramAttributes = function () {
	  /* istanbul ignore next */
	  process.env.NODE_ENV !== 'production' && _.warn(
	    '"paramAttributes" option has been deprecated in 0.12. ' +
	    'Use "props" instead.'
	  )
	}
	
	/**
	 * Assets
	 *
	 * When a vm is present (instance creation), we need to do
	 * a three-way merge between constructor options, instance
	 * options and parent options.
	 */
	
	function mergeAssets (parentVal, childVal) {
	  var res = Object.create(parentVal)
	  return childVal
	    ? extend(res, guardArrayAssets(childVal))
	    : res
	}
	
	config._assetTypes.forEach(function (type) {
	  strats[type + 's'] = mergeAssets
	})
	
	/**
	 * Events & Watchers.
	 *
	 * Events & watchers hashes should not overwrite one
	 * another, so we merge them as arrays.
	 */
	
	strats.watch =
	strats.events = function (parentVal, childVal) {
	  if (!childVal) return parentVal
	  if (!parentVal) return childVal
	  var ret = {}
	  extend(ret, parentVal)
	  for (var key in childVal) {
	    var parent = ret[key]
	    var child = childVal[key]
	    if (parent && !_.isArray(parent)) {
	      parent = [parent]
	    }
	    ret[key] = parent
	      ? parent.concat(child)
	      : [child]
	  }
	  return ret
	}
	
	/**
	 * Other object hashes.
	 */
	
	strats.methods =
	strats.computed = function (parentVal, childVal) {
	  if (!childVal) return parentVal
	  if (!parentVal) return childVal
	  var ret = Object.create(parentVal)
	  extend(ret, childVal)
	  return ret
	}
	
	/**
	 * Default strategy.
	 */
	
	var defaultStrat = function (parentVal, childVal) {
	  return childVal === undefined
	    ? parentVal
	    : childVal
	}
	
	/**
	 * Make sure component options get converted to actual
	 * constructors.
	 *
	 * @param {Object} options
	 */
	
	function guardComponents (options) {
	  if (options.components) {
	    var components = options.components =
	      guardArrayAssets(options.components)
	    var def
	    var ids = Object.keys(components)
	    for (var i = 0, l = ids.length; i < l; i++) {
	      var key = ids[i]
	      if (_.commonTagRE.test(key)) {
	        process.env.NODE_ENV !== 'production' && _.warn(
	          'Do not use built-in HTML elements as component ' +
	          'id: ' + key
	        )
	        continue
	      }
	      def = components[key]
	      if (_.isPlainObject(def)) {
	        def.id = def.id || key
	        components[key] = def._Ctor || (def._Ctor = _.Vue.extend(def))
	      }
	    }
	  }
	}
	
	/**
	 * Ensure all props option syntax are normalized into the
	 * Object-based format.
	 *
	 * @param {Object} options
	 */
	
	function guardProps (options) {
	  var props = options.props
	  if (_.isPlainObject(props)) {
	    options.props = Object.keys(props).map(function (key) {
	      var val = props[key]
	      if (!_.isPlainObject(val)) {
	        val = { type: val }
	      }
	      val.name = key
	      return val
	    })
	  } else if (_.isArray(props)) {
	    options.props = props.map(function (prop) {
	      return typeof prop === 'string'
	        ? { name: prop }
	        : prop
	    })
	  }
	}
	
	/**
	 * Guard an Array-format assets option and converted it
	 * into the key-value Object format.
	 *
	 * @param {Object|Array} assets
	 * @return {Object}
	 */
	
	function guardArrayAssets (assets) {
	  if (_.isArray(assets)) {
	    var res = {}
	    var i = assets.length
	    var asset
	    while (i--) {
	      asset = assets[i]
	      var id = asset.id || (asset.options && asset.options.id)
	      if (!id) {
	        process.env.NODE_ENV !== 'production' && _.warn(
	          'Array-syntax assets must provide an id field.'
	        )
	      } else {
	        res[id] = asset
	      }
	    }
	    return res
	  }
	  return assets
	}
	
	/**
	 * Merge two option objects into a new one.
	 * Core utility used in both instantiation and inheritance.
	 *
	 * @param {Object} parent
	 * @param {Object} child
	 * @param {Vue} [vm] - if vm is present, indicates this is
	 *                     an instantiation merge.
	 */
	
	exports.mergeOptions = function merge (parent, child, vm) {
	  guardComponents(child)
	  guardProps(child)
	  var options = {}
	  var key
	  if (child.mixins) {
	    for (var i = 0, l = child.mixins.length; i < l; i++) {
	      parent = merge(parent, child.mixins[i], vm)
	    }
	  }
	  for (key in parent) {
	    mergeField(key)
	  }
	  for (key in child) {
	    if (!(parent.hasOwnProperty(key))) {
	      mergeField(key)
	    }
	  }
	  function mergeField (key) {
	    var strat = strats[key] || defaultStrat
	    options[key] = strat(parent[key], child[key], vm, key)
	  }
	  return options
	}
	
	/**
	 * Resolve an asset.
	 * This function is used because child instances need access
	 * to assets defined in its ancestor chain.
	 *
	 * @param {Object} options
	 * @param {String} type
	 * @param {String} id
	 * @return {Object|Function}
	 */
	
	exports.resolveAsset = function resolve (options, type, id) {
	  var camelizedId = _.camelize(id)
	  var asset = options[type][id] || options[type][camelizedId]
	  while (
	    !asset && options._parent &&
	    (!config.strict || options._repeat)
	  ) {
	    options = options._parent.$options
	    asset = options[type][id] || options[type][camelizedId]
	  }
	  return asset
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(22)))

/***/ },
/* 22 */
/***/ function(module, exports) {

	// shim for using process in browser
	
	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            currentQueue[queueIndex].run();
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	// TODO(shtylman)
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = {
	
	  /**
	   * The prefix to look for when parsing directives.
	   *
	   * @type {String}
	   */
	
	  prefix: 'v-',
	
	  /**
	   * Whether to print debug messages.
	   * Also enables stack trace for warnings.
	   *
	   * @type {Boolean}
	   */
	
	  debug: false,
	
	  /**
	   * Strict mode.
	   * Disables asset lookup in the view parent chain.
	   */
	
	  strict: false,
	
	  /**
	   * Whether to suppress warnings.
	   *
	   * @type {Boolean}
	   */
	
	  silent: false,
	
	  /**
	   * Whether allow observer to alter data objects'
	   * __proto__.
	   *
	   * @type {Boolean}
	   */
	
	  proto: true,
	
	  /**
	   * Whether to parse mustache tags in templates.
	   *
	   * @type {Boolean}
	   */
	
	  interpolate: true,
	
	  /**
	   * Whether to use async rendering.
	   */
	
	  async: true,
	
	  /**
	   * Whether to warn against errors caught when evaluating
	   * expressions.
	   */
	
	  warnExpressionErrors: true,
	
	  /**
	   * Internal flag to indicate the delimiters have been
	   * changed.
	   *
	   * @type {Boolean}
	   */
	
	  _delimitersChanged: true,
	
	  /**
	   * List of asset types that a component can own.
	   *
	   * @type {Array}
	   */
	
	  _assetTypes: [
	    'component',
	    'directive',
	    'elementDirective',
	    'filter',
	    'transition',
	    'partial'
	  ],
	
	  /**
	   * prop binding modes
	   */
	
	  _propBindingModes: {
	    ONE_WAY: 0,
	    TWO_WAY: 1,
	    ONE_TIME: 2
	  },
	
	  /**
	   * Max circular updates allowed in a batcher flush cycle.
	   */
	
	  _maxUpdateCount: 100
	
	}
	
	/**
	 * Interpolation delimiters.
	 * We need to mark the changed flag so that the text parser
	 * knows it needs to recompile the regex.
	 *
	 * @type {Array<String>}
	 */
	
	var delimiters = ['{{', '}}']
	Object.defineProperty(module.exports, 'delimiters', {
	  get: function () {
	    return delimiters
	  },
	  set: function (val) {
	    delimiters = val
	    this._delimitersChanged = true
	  }
	})


/***/ },
/* 24 */
/***/ function(module, exports) {

	/**
	 * Check is a string starts with $ or _
	 *
	 * @param {String} str
	 * @return {Boolean}
	 */
	
	exports.isReserved = function (str) {
	  var c = (str + '').charCodeAt(0)
	  return c === 0x24 || c === 0x5F
	}
	
	/**
	 * Guard text output, make sure undefined outputs
	 * empty string
	 *
	 * @param {*} value
	 * @return {String}
	 */
	
	exports.toString = function (value) {
	  return value == null
	    ? ''
	    : value.toString()
	}
	
	/**
	 * Check and convert possible numeric strings to numbers
	 * before setting back to data
	 *
	 * @param {*} value
	 * @return {*|Number}
	 */
	
	exports.toNumber = function (value) {
	  if (typeof value !== 'string') {
	    return value
	  } else {
	    var parsed = Number(value)
	    return isNaN(parsed)
	      ? value
	      : parsed
	  }
	}
	
	/**
	 * Convert string boolean literals into real booleans.
	 *
	 * @param {*} value
	 * @return {*|Boolean}
	 */
	
	exports.toBoolean = function (value) {
	  return value === 'true'
	    ? true
	    : value === 'false'
	      ? false
	      : value
	}
	
	/**
	 * Strip quotes from a string
	 *
	 * @param {String} str
	 * @return {String | false}
	 */
	
	exports.stripQuotes = function (str) {
	  var a = str.charCodeAt(0)
	  var b = str.charCodeAt(str.length - 1)
	  return a === b && (a === 0x22 || a === 0x27)
	    ? str.slice(1, -1)
	    : false
	}
	
	/**
	 * Camelize a hyphen-delmited string.
	 *
	 * @param {String} str
	 * @return {String}
	 */
	
	exports.camelize = function (str) {
	  return str.replace(/-(\w)/g, toUpper)
	}
	
	function toUpper (_, c) {
	  return c ? c.toUpperCase() : ''
	}
	
	/**
	 * Hyphenate a camelCase string.
	 *
	 * @param {String} str
	 * @return {String}
	 */
	
	exports.hyphenate = function (str) {
	  return str
	    .replace(/([a-z\d])([A-Z])/g, '$1-$2')
	    .toLowerCase()
	}
	
	/**
	 * Converts hyphen/underscore/slash delimitered names into
	 * camelized classNames.
	 *
	 * e.g. my-component => MyComponent
	 *      some_else    => SomeElse
	 *      some/comp    => SomeComp
	 *
	 * @param {String} str
	 * @return {String}
	 */
	
	var classifyRE = /(?:^|[-_\/])(\w)/g
	exports.classify = function (str) {
	  return str.replace(classifyRE, toUpper)
	}
	
	/**
	 * Simple bind, faster than native
	 *
	 * @param {Function} fn
	 * @param {Object} ctx
	 * @return {Function}
	 */
	
	exports.bind = function (fn, ctx) {
	  return function (a) {
	    var l = arguments.length
	    return l
	      ? l > 1
	        ? fn.apply(ctx, arguments)
	        : fn.call(ctx, a)
	      : fn.call(ctx)
	  }
	}
	
	/**
	 * Convert an Array-like object to a real Array.
	 *
	 * @param {Array-like} list
	 * @param {Number} [start] - start index
	 * @return {Array}
	 */
	
	exports.toArray = function (list, start) {
	  start = start || 0
	  var i = list.length - start
	  var ret = new Array(i)
	  while (i--) {
	    ret[i] = list[i + start]
	  }
	  return ret
	}
	
	/**
	 * Mix properties into target object.
	 *
	 * @param {Object} to
	 * @param {Object} from
	 */
	
	exports.extend = function (to, from) {
	  for (var key in from) {
	    to[key] = from[key]
	  }
	  return to
	}
	
	/**
	 * Quick object check - this is primarily used to tell
	 * Objects from primitive values when we know the value
	 * is a JSON-compliant type.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */
	
	exports.isObject = function (obj) {
	  return obj !== null && typeof obj === 'object'
	}
	
	/**
	 * Strict object type check. Only returns true
	 * for plain JavaScript objects.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */
	
	var toString = Object.prototype.toString
	exports.isPlainObject = function (obj) {
	  return toString.call(obj) === '[object Object]'
	}
	
	/**
	 * Array type check.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */
	
	exports.isArray = Array.isArray
	
	/**
	 * Define a non-enumerable property
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 * @param {Boolean} [enumerable]
	 */
	
	exports.define = function (obj, key, val, enumerable) {
	  Object.defineProperty(obj, key, {
	    value: val,
	    enumerable: !!enumerable,
	    writable: true,
	    configurable: true
	  })
	}
	
	/**
	 * Debounce a function so it only gets called after the
	 * input stops arriving after the given wait period.
	 *
	 * @param {Function} func
	 * @param {Number} wait
	 * @return {Function} - the debounced function
	 */
	
	exports.debounce = function (func, wait) {
	  var timeout, args, context, timestamp, result
	  var later = function () {
	    var last = Date.now() - timestamp
	    if (last < wait && last >= 0) {
	      timeout = setTimeout(later, wait - last)
	    } else {
	      timeout = null
	      result = func.apply(context, args)
	      if (!timeout) context = args = null
	    }
	  }
	  return function () {
	    context = this
	    args = arguments
	    timestamp = Date.now()
	    if (!timeout) {
	      timeout = setTimeout(later, wait)
	    }
	    return result
	  }
	}
	
	/**
	 * Manual indexOf because it's slightly faster than
	 * native.
	 *
	 * @param {Array} arr
	 * @param {*} obj
	 */
	
	exports.indexOf = function (arr, obj) {
	  for (var i = 0, l = arr.length; i < l; i++) {
	    if (arr[i] === obj) return i
	  }
	  return -1
	}
	
	/**
	 * Make a cancellable version of an async callback.
	 *
	 * @param {Function} fn
	 * @return {Function}
	 */
	
	exports.cancellable = function (fn) {
	  var cb = function () {
	    if (!cb.cancelled) {
	      return fn.apply(this, arguments)
	    }
	  }
	  cb.cancel = function () {
	    cb.cancelled = true
	  }
	  return cb
	}


/***/ },
/* 25 */
/***/ function(module, exports) {

	// can we use __proto__?
	exports.hasProto = '__proto__' in {}
	
	// Browser environment sniffing
	var inBrowser = exports.inBrowser =
	  typeof window !== 'undefined' &&
	  Object.prototype.toString.call(window) !== '[object Object]'
	
	exports.isIE9 =
	  inBrowser &&
	  navigator.userAgent.toLowerCase().indexOf('msie 9.0') > 0
	
	exports.isAndroid =
	  inBrowser &&
	  navigator.userAgent.toLowerCase().indexOf('android') > 0
	
	// Transition property/event sniffing
	if (inBrowser && !exports.isIE9) {
	  var isWebkitTrans =
	    window.ontransitionend === undefined &&
	    window.onwebkittransitionend !== undefined
	  var isWebkitAnim =
	    window.onanimationend === undefined &&
	    window.onwebkitanimationend !== undefined
	  exports.transitionProp = isWebkitTrans
	    ? 'WebkitTransition'
	    : 'transition'
	  exports.transitionEndEvent = isWebkitTrans
	    ? 'webkitTransitionEnd'
	    : 'transitionend'
	  exports.animationProp = isWebkitAnim
	    ? 'WebkitAnimation'
	    : 'animation'
	  exports.animationEndEvent = isWebkitAnim
	    ? 'webkitAnimationEnd'
	    : 'animationend'
	}
	
	/**
	 * Defer a task to execute it asynchronously. Ideally this
	 * should be executed as a microtask, so we leverage
	 * MutationObserver if it's available, and fallback to
	 * setTimeout(0).
	 *
	 * @param {Function} cb
	 * @param {Object} ctx
	 */
	
	exports.nextTick = (function () {
	  var callbacks = []
	  var pending = false
	  var timerFunc
	  function handle () {
	    pending = false
	    var copies = callbacks.slice(0)
	    callbacks = []
	    for (var i = 0; i < copies.length; i++) {
	      copies[i]()
	    }
	  }
	  /* istanbul ignore if */
	  if (typeof MutationObserver !== 'undefined') {
	    var counter = 1
	    var observer = new MutationObserver(handle)
	    var textNode = document.createTextNode(counter)
	    observer.observe(textNode, {
	      characterData: true
	    })
	    timerFunc = function () {
	      counter = (counter + 1) % 2
	      textNode.data = counter
	    }
	  } else {
	    timerFunc = setTimeout
	  }
	  return function (cb, ctx) {
	    var func = ctx
	      ? function () { cb.call(ctx) }
	      : cb
	    callbacks.push(func)
	    if (pending) return
	    pending = true
	    timerFunc(handle, 0)
	  }
	})()


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var _ = __webpack_require__(20)
	var config = __webpack_require__(23)
	
	/**
	 * Query an element selector if it's not an element already.
	 *
	 * @param {String|Element} el
	 * @return {Element}
	 */
	
	exports.query = function (el) {
	  if (typeof el === 'string') {
	    var selector = el
	    el = document.querySelector(el)
	    if (!el) {
	      process.env.NODE_ENV !== 'production' && _.warn(
	        'Cannot find element: ' + selector
	      )
	    }
	  }
	  return el
	}
	
	/**
	 * Check if a node is in the document.
	 * Note: document.documentElement.contains should work here
	 * but always returns false for comment nodes in phantomjs,
	 * making unit tests difficult. This is fixed byy doing the
	 * contains() check on the node's parentNode instead of
	 * the node itself.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */
	
	exports.inDoc = function (node) {
	  var doc = document.documentElement
	  var parent = node && node.parentNode
	  return doc === node ||
	    doc === parent ||
	    !!(parent && parent.nodeType === 1 && (doc.contains(parent)))
	}
	
	/**
	 * Extract an attribute from a node.
	 *
	 * @param {Node} node
	 * @param {String} attr
	 */
	
	exports.attr = function (node, attr) {
	  attr = config.prefix + attr
	  var val = node.getAttribute(attr)
	  if (val !== null) {
	    node.removeAttribute(attr)
	  }
	  return val
	}
	
	/**
	 * Insert el before target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */
	
	exports.before = function (el, target) {
	  target.parentNode.insertBefore(el, target)
	}
	
	/**
	 * Insert el after target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */
	
	exports.after = function (el, target) {
	  if (target.nextSibling) {
	    exports.before(el, target.nextSibling)
	  } else {
	    target.parentNode.appendChild(el)
	  }
	}
	
	/**
	 * Remove el from DOM
	 *
	 * @param {Element} el
	 */
	
	exports.remove = function (el) {
	  el.parentNode.removeChild(el)
	}
	
	/**
	 * Prepend el to target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */
	
	exports.prepend = function (el, target) {
	  if (target.firstChild) {
	    exports.before(el, target.firstChild)
	  } else {
	    target.appendChild(el)
	  }
	}
	
	/**
	 * Replace target with el
	 *
	 * @param {Element} target
	 * @param {Element} el
	 */
	
	exports.replace = function (target, el) {
	  var parent = target.parentNode
	  if (parent) {
	    parent.replaceChild(el, target)
	  }
	}
	
	/**
	 * Add event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 */
	
	exports.on = function (el, event, cb) {
	  el.addEventListener(event, cb)
	}
	
	/**
	 * Remove event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 */
	
	exports.off = function (el, event, cb) {
	  el.removeEventListener(event, cb)
	}
	
	/**
	 * Add class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {Strong} cls
	 */
	
	exports.addClass = function (el, cls) {
	  if (el.classList) {
	    el.classList.add(cls)
	  } else {
	    var cur = ' ' + (el.getAttribute('class') || '') + ' '
	    if (cur.indexOf(' ' + cls + ' ') < 0) {
	      el.setAttribute('class', (cur + cls).trim())
	    }
	  }
	}
	
	/**
	 * Remove class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {Strong} cls
	 */
	
	exports.removeClass = function (el, cls) {
	  if (el.classList) {
	    el.classList.remove(cls)
	  } else {
	    var cur = ' ' + (el.getAttribute('class') || '') + ' '
	    var tar = ' ' + cls + ' '
	    while (cur.indexOf(tar) >= 0) {
	      cur = cur.replace(tar, ' ')
	    }
	    el.setAttribute('class', cur.trim())
	  }
	}
	
	/**
	 * Extract raw content inside an element into a temporary
	 * container div
	 *
	 * @param {Element} el
	 * @param {Boolean} asFragment
	 * @return {Element}
	 */
	
	exports.extractContent = function (el, asFragment) {
	  var child
	  var rawContent
	  /* istanbul ignore if */
	  if (
	    exports.isTemplate(el) &&
	    el.content instanceof DocumentFragment
	  ) {
	    el = el.content
	  }
	  if (el.hasChildNodes()) {
	    trim(el, el.firstChild)
	    trim(el, el.lastChild)
	    rawContent = asFragment
	      ? document.createDocumentFragment()
	      : document.createElement('div')
	    /* eslint-disable no-cond-assign */
	    while (child = el.firstChild) {
	    /* eslint-enable no-cond-assign */
	      rawContent.appendChild(child)
	    }
	  }
	  return rawContent
	}
	
	function trim (content, node) {
	  if (node && node.nodeType === 3 && !node.data.trim()) {
	    content.removeChild(node)
	  }
	}
	
	/**
	 * Check if an element is a template tag.
	 * Note if the template appears inside an SVG its tagName
	 * will be in lowercase.
	 *
	 * @param {Element} el
	 */
	
	exports.isTemplate = function (el) {
	  return el.tagName &&
	    el.tagName.toLowerCase() === 'template'
	}
	
	/**
	 * Create an "anchor" for performing dom insertion/removals.
	 * This is used in a number of scenarios:
	 * - fragment instance
	 * - v-html
	 * - v-if
	 * - component
	 * - repeat
	 *
	 * @param {String} content
	 * @param {Boolean} persist - IE trashes empty textNodes on
	 *                            cloneNode(true), so in certain
	 *                            cases the anchor needs to be
	 *                            non-empty to be persisted in
	 *                            templates.
	 * @return {Comment|Text}
	 */
	
	exports.createAnchor = function (content, persist) {
	  return config.debug
	    ? document.createComment(content)
	    : document.createTextNode(persist ? ' ' : '')
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(22)))

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var _ = __webpack_require__(20)
	
	/**
	 * Check if an element is a component, if yes return its
	 * component id.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {String|undefined}
	 */
	
	exports.commonTagRE = /^(div|p|span|img|a|br|ul|ol|li|h1|h2|h3|h4|h5|code|pre)$/
	exports.checkComponent = function (el, options) {
	  var tag = el.tagName.toLowerCase()
	  if (tag === 'component') {
	    // dynamic syntax
	    var exp = el.getAttribute('is')
	    el.removeAttribute('is')
	    return exp
	  } else if (
	    !exports.commonTagRE.test(tag) &&
	    _.resolveAsset(options, 'components', tag)
	  ) {
	    return tag
	  /* eslint-disable no-cond-assign */
	  } else if (tag = _.attr(el, 'component')) {
	  /* eslint-enable no-cond-assign */
	    return tag
	  }
	}
	
	/**
	 * Set a prop's initial value on a vm and its data object.
	 * The vm may have inherit:true so we need to make sure
	 * we don't accidentally overwrite parent value.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} value
	 */
	
	exports.initProp = function (vm, prop, value) {
	  if (exports.assertProp(prop, value)) {
	    var key = prop.path
	    if (key in vm) {
	      _.define(vm, key, value, true)
	    } else {
	      vm[key] = value
	    }
	    vm._data[key] = value
	  }
	}
	
	/**
	 * Assert whether a prop is valid.
	 *
	 * @param {Object} prop
	 * @param {*} value
	 */
	
	exports.assertProp = function (prop, value) {
	  // if a prop is not provided and is not required,
	  // skip the check.
	  if (prop.raw === null && !prop.required) {
	    return true
	  }
	  var options = prop.options
	  var type = options.type
	  var valid = true
	  var expectedType
	  if (type) {
	    if (type === String) {
	      expectedType = 'string'
	      valid = typeof value === expectedType
	    } else if (type === Number) {
	      expectedType = 'number'
	      valid = typeof value === 'number'
	    } else if (type === Boolean) {
	      expectedType = 'boolean'
	      valid = typeof value === 'boolean'
	    } else if (type === Function) {
	      expectedType = 'function'
	      valid = typeof value === 'function'
	    } else if (type === Object) {
	      expectedType = 'object'
	      valid = _.isPlainObject(value)
	    } else if (type === Array) {
	      expectedType = 'array'
	      valid = _.isArray(value)
	    } else {
	      valid = value instanceof type
	    }
	  }
	  if (!valid) {
	    process.env.NODE_ENV !== 'production' && _.warn(
	      'Invalid prop: type check failed for ' +
	      prop.path + '="' + prop.raw + '".' +
	      ' Expected ' + formatType(expectedType) +
	      ', got ' + formatValue(value) + '.'
	    )
	    return false
	  }
	  var validator = options.validator
	  if (validator) {
	    if (!validator.call(null, value)) {
	      process.env.NODE_ENV !== 'production' && _.warn(
	        'Invalid prop: custom validator check failed for ' +
	        prop.path + '="' + prop.raw + '"'
	      )
	      return false
	    }
	  }
	  return true
	}
	
	function formatType (val) {
	  return val
	    ? val.charAt(0).toUpperCase() + val.slice(1)
	    : 'custom type'
	}
	
	function formatValue (val) {
	  return Object.prototype.toString.call(val).slice(8, -1)
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(22)))

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Enable debug utilities.
	 */
	
	if (process.env.NODE_ENV !== 'production') {
	
	  var config = __webpack_require__(23)
	  var hasConsole = typeof console !== 'undefined'
	
	  /**
	   * Log a message.
	   *
	   * @param {String} msg
	   */
	
	  exports.log = function (msg) {
	    if (hasConsole && config.debug) {
	      console.log('[Vue info]: ' + msg)
	    }
	  }
	
	  /**
	   * We've got a problem here.
	   *
	   * @param {String} msg
	   */
	
	  exports.warn = function (msg, e) {
	    if (hasConsole && (!config.silent || config.debug)) {
	      console.warn('[Vue warn]: ' + msg)
	      /* istanbul ignore if */
	      if (config.debug) {
	        console.warn((e || new Error('Warning Stack Trace')).stack)
	      }
	    }
	  }
	
	  /**
	   * Assert asset exists
	   */
	
	  exports.assertAsset = function (val, type, id) {
	    /* istanbul ignore if */
	    if (type === 'directive') {
	      if (id === 'with') {
	        exports.warn(
	          'v-with has been deprecated in ^0.12.0. ' +
	          'Use props instead.'
	        )
	        return
	      }
	      if (id === 'events') {
	        exports.warn(
	          'v-events has been deprecated in ^0.12.0. ' +
	          'Pass down methods as callback props instead.'
	        )
	        return
	      }
	    }
	    if (!val) {
	      exports.warn('Failed to resolve ' + type + ': ' + id)
	    }
	  }
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(22)))

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(20)
	var config = __webpack_require__(23)
	
	/**
	 * Expose useful internals
	 */
	
	exports.util = _
	exports.config = config
	exports.nextTick = _.nextTick
	exports.compiler = __webpack_require__(33)
	
	exports.parsers = {
	  path: __webpack_require__(40),
	  text: __webpack_require__(30),
	  template: __webpack_require__(42),
	  directive: __webpack_require__(32),
	  expression: __webpack_require__(39)
	}
	
	/**
	 * Each instance constructor, including Vue, has a unique
	 * cid. This enables us to create wrapped "child
	 * constructors" for prototypal inheritance and cache them.
	 */
	
	exports.cid = 0
	var cid = 1
	
	/**
	 * Class inheritance
	 *
	 * @param {Object} extendOptions
	 */
	
	exports.extend = function (extendOptions) {
	  extendOptions = extendOptions || {}
	  var Super = this
	  var Sub = createClass(
	    extendOptions.name ||
	    Super.options.name ||
	    'VueComponent'
	  )
	  Sub.prototype = Object.create(Super.prototype)
	  Sub.prototype.constructor = Sub
	  Sub.cid = cid++
	  Sub.options = _.mergeOptions(
	    Super.options,
	    extendOptions
	  )
	  Sub['super'] = Super
	  // allow further extension
	  Sub.extend = Super.extend
	  // create asset registers, so extended classes
	  // can have their private assets too.
	  config._assetTypes.forEach(function (type) {
	    Sub[type] = Super[type]
	  })
	  return Sub
	}
	
	/**
	 * A function that returns a sub-class constructor with the
	 * given name. This gives us much nicer output when
	 * logging instances in the console.
	 *
	 * @param {String} name
	 * @return {Function}
	 */
	
	function createClass (name) {
	  return new Function(
	    'return function ' + _.classify(name) +
	    ' (options) { this._init(options) }'
	  )()
	}
	
	/**
	 * Plugin system
	 *
	 * @param {Object} plugin
	 */
	
	exports.use = function (plugin) {
	  // additional parameters
	  var args = _.toArray(arguments, 1)
	  args.unshift(this)
	  if (typeof plugin.install === 'function') {
	    plugin.install.apply(plugin, args)
	  } else {
	    plugin.apply(null, args)
	  }
	  return this
	}
	
	/**
	 * Create asset registration methods with the following
	 * signature:
	 *
	 * @param {String} id
	 * @param {*} definition
	 */
	
	config._assetTypes.forEach(function (type) {
	  exports[type] = function (id, definition) {
	    if (!definition) {
	      return this.options[type + 's'][id]
	    } else {
	      if (
	        type === 'component' &&
	        _.isPlainObject(definition)
	      ) {
	        definition.name = id
	        definition = _.Vue.extend(definition)
	      }
	      this.options[type + 's'][id] = definition
	    }
	  }
	})


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var Cache = __webpack_require__(31)
	var config = __webpack_require__(23)
	var dirParser = __webpack_require__(32)
	var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g
	var cache, tagRE, htmlRE, firstChar, lastChar
	
	/**
	 * Escape a string so it can be used in a RegExp
	 * constructor.
	 *
	 * @param {String} str
	 */
	
	function escapeRegex (str) {
	  return str.replace(regexEscapeRE, '\\$&')
	}
	
	/**
	 * Compile the interpolation tag regex.
	 *
	 * @return {RegExp}
	 */
	
	function compileRegex () {
	  config._delimitersChanged = false
	  var open = config.delimiters[0]
	  var close = config.delimiters[1]
	  firstChar = open.charAt(0)
	  lastChar = close.charAt(close.length - 1)
	  var firstCharRE = escapeRegex(firstChar)
	  var lastCharRE = escapeRegex(lastChar)
	  var openRE = escapeRegex(open)
	  var closeRE = escapeRegex(close)
	  tagRE = new RegExp(
	    firstCharRE + '?' + openRE +
	    '(.+?)' +
	    closeRE + lastCharRE + '?',
	    'g'
	  )
	  htmlRE = new RegExp(
	    '^' + firstCharRE + openRE +
	    '.*' +
	    closeRE + lastCharRE + '$'
	  )
	  // reset cache
	  cache = new Cache(1000)
	}
	
	/**
	 * Parse a template text string into an array of tokens.
	 *
	 * @param {String} text
	 * @return {Array<Object> | null}
	 *               - {String} type
	 *               - {String} value
	 *               - {Boolean} [html]
	 *               - {Boolean} [oneTime]
	 */
	
	exports.parse = function (text) {
	  if (config._delimitersChanged) {
	    compileRegex()
	  }
	  var hit = cache.get(text)
	  if (hit) {
	    return hit
	  }
	  text = text.replace(/\n/g, '')
	  if (!tagRE.test(text)) {
	    return null
	  }
	  var tokens = []
	  var lastIndex = tagRE.lastIndex = 0
	  var match, index, value, first, oneTime, twoWay
	  /* eslint-disable no-cond-assign */
	  while (match = tagRE.exec(text)) {
	  /* eslint-enable no-cond-assign */
	    index = match.index
	    // push text token
	    if (index > lastIndex) {
	      tokens.push({
	        value: text.slice(lastIndex, index)
	      })
	    }
	    // tag token
	    first = match[1].charCodeAt(0)
	    oneTime = first === 42 // *
	    twoWay = first === 64  // @
	    value = oneTime || twoWay
	      ? match[1].slice(1)
	      : match[1]
	    tokens.push({
	      tag: true,
	      value: value.trim(),
	      html: htmlRE.test(match[0]),
	      oneTime: oneTime,
	      twoWay: twoWay
	    })
	    lastIndex = index + match[0].length
	  }
	  if (lastIndex < text.length) {
	    tokens.push({
	      value: text.slice(lastIndex)
	    })
	  }
	  cache.put(text, tokens)
	  return tokens
	}
	
	/**
	 * Format a list of tokens into an expression.
	 * e.g. tokens parsed from 'a {{b}} c' can be serialized
	 * into one single expression as '"a " + b + " c"'.
	 *
	 * @param {Array} tokens
	 * @param {Vue} [vm]
	 * @return {String}
	 */
	
	exports.tokensToExp = function (tokens, vm) {
	  return tokens.length > 1
	    ? tokens.map(function (token) {
	        return formatToken(token, vm)
	      }).join('+')
	    : formatToken(tokens[0], vm, true)
	}
	
	/**
	 * Format a single token.
	 *
	 * @param {Object} token
	 * @param {Vue} [vm]
	 * @param {Boolean} single
	 * @return {String}
	 */
	
	function formatToken (token, vm, single) {
	  return token.tag
	    ? vm && token.oneTime
	      ? '"' + vm.$eval(token.value) + '"'
	      : inlineFilters(token.value, single)
	    : '"' + token.value + '"'
	}
	
	/**
	 * For an attribute with multiple interpolation tags,
	 * e.g. attr="some-{{thing | filter}}", in order to combine
	 * the whole thing into a single watchable expression, we
	 * have to inline those filters. This function does exactly
	 * that. This is a bit hacky but it avoids heavy changes
	 * to directive parser and watcher mechanism.
	 *
	 * @param {String} exp
	 * @param {Boolean} single
	 * @return {String}
	 */
	
	var filterRE = /[^|]\|[^|]/
	function inlineFilters (exp, single) {
	  if (!filterRE.test(exp)) {
	    return single
	      ? exp
	      : '(' + exp + ')'
	  } else {
	    var dir = dirParser.parse(exp)[0]
	    if (!dir.filters) {
	      return '(' + exp + ')'
	    } else {
	      return 'this._applyFilters(' +
	        dir.expression + // value
	        ',null,' +       // oldValue (null for read)
	        JSON.stringify(dir.filters) + // filter descriptors
	        ',false)'        // write?
	    }
	  }
	}


/***/ },
/* 31 */
/***/ function(module, exports) {

	/**
	 * A doubly linked list-based Least Recently Used (LRU)
	 * cache. Will keep most recently used items while
	 * discarding least recently used items when its limit is
	 * reached. This is a bare-bone version of
	 * Rasmus Andersson's js-lru:
	 *
	 *   https://github.com/rsms/js-lru
	 *
	 * @param {Number} limit
	 * @constructor
	 */
	
	function Cache (limit) {
	  this.size = 0
	  this.limit = limit
	  this.head = this.tail = undefined
	  this._keymap = Object.create(null)
	}
	
	var p = Cache.prototype
	
	/**
	 * Put <value> into the cache associated with <key>.
	 * Returns the entry which was removed to make room for
	 * the new entry. Otherwise undefined is returned.
	 * (i.e. if there was enough room already).
	 *
	 * @param {String} key
	 * @param {*} value
	 * @return {Entry|undefined}
	 */
	
	p.put = function (key, value) {
	  var entry = {
	    key: key,
	    value: value
	  }
	  this._keymap[key] = entry
	  if (this.tail) {
	    this.tail.newer = entry
	    entry.older = this.tail
	  } else {
	    this.head = entry
	  }
	  this.tail = entry
	  if (this.size === this.limit) {
	    return this.shift()
	  } else {
	    this.size++
	  }
	}
	
	/**
	 * Purge the least recently used (oldest) entry from the
	 * cache. Returns the removed entry or undefined if the
	 * cache was empty.
	 */
	
	p.shift = function () {
	  var entry = this.head
	  if (entry) {
	    this.head = this.head.newer
	    this.head.older = undefined
	    entry.newer = entry.older = undefined
	    this._keymap[entry.key] = undefined
	  }
	  return entry
	}
	
	/**
	 * Get and register recent use of <key>. Returns the value
	 * associated with <key> or undefined if not in cache.
	 *
	 * @param {String} key
	 * @param {Boolean} returnEntry
	 * @return {Entry|*}
	 */
	
	p.get = function (key, returnEntry) {
	  var entry = this._keymap[key]
	  if (entry === undefined) return
	  if (entry === this.tail) {
	    return returnEntry
	      ? entry
	      : entry.value
	  }
	  // HEAD--------------TAIL
	  //   <.older   .newer>
	  //  <--- add direction --
	  //   A  B  C  <D>  E
	  if (entry.newer) {
	    if (entry === this.head) {
	      this.head = entry.newer
	    }
	    entry.newer.older = entry.older // C <-- E.
	  }
	  if (entry.older) {
	    entry.older.newer = entry.newer // C. --> E
	  }
	  entry.newer = undefined // D --x
	  entry.older = this.tail // D. --> E
	  if (this.tail) {
	    this.tail.newer = entry // E. <-- D
	  }
	  this.tail = entry
	  return returnEntry
	    ? entry
	    : entry.value
	}
	
	module.exports = Cache


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(20)
	var Cache = __webpack_require__(31)
	var cache = new Cache(1000)
	var argRE = /^[^\{\?]+$|^'[^']*'$|^"[^"]*"$/
	var filterTokenRE = /[^\s'"]+|'[^']+'|"[^"]+"/g
	var reservedArgRE = /^in$|^-?\d+/
	
	/**
	 * Parser state
	 */
	
	var str
	var c, i, l
	var inSingle
	var inDouble
	var curly
	var square
	var paren
	var begin
	var argIndex
	var dirs
	var dir
	var lastFilterIndex
	var arg
	
	/**
	 * Push a directive object into the result Array
	 */
	
	function pushDir () {
	  dir.raw = str.slice(begin, i).trim()
	  if (dir.expression === undefined) {
	    dir.expression = str.slice(argIndex, i).trim()
	  } else if (lastFilterIndex !== begin) {
	    pushFilter()
	  }
	  if (i === 0 || dir.expression) {
	    dirs.push(dir)
	  }
	}
	
	/**
	 * Push a filter to the current directive object
	 */
	
	function pushFilter () {
	  var exp = str.slice(lastFilterIndex, i).trim()
	  var filter
	  if (exp) {
	    filter = {}
	    var tokens = exp.match(filterTokenRE)
	    filter.name = tokens[0]
	    if (tokens.length > 1) {
	      filter.args = tokens.slice(1).map(processFilterArg)
	    }
	  }
	  if (filter) {
	    (dir.filters = dir.filters || []).push(filter)
	  }
	  lastFilterIndex = i + 1
	}
	
	/**
	 * Check if an argument is dynamic and strip quotes.
	 *
	 * @param {String} arg
	 * @return {Object}
	 */
	
	function processFilterArg (arg) {
	  var stripped = reservedArgRE.test(arg)
	    ? arg
	    : _.stripQuotes(arg)
	  return {
	    value: stripped || arg,
	    dynamic: !stripped
	  }
	}
	
	/**
	 * Parse a directive string into an Array of AST-like
	 * objects representing directives.
	 *
	 * Example:
	 *
	 * "click: a = a + 1 | uppercase" will yield:
	 * {
	 *   arg: 'click',
	 *   expression: 'a = a + 1',
	 *   filters: [
	 *     { name: 'uppercase', args: null }
	 *   ]
	 * }
	 *
	 * @param {String} str
	 * @return {Array<Object>}
	 */
	
	exports.parse = function (s) {
	
	  var hit = cache.get(s)
	  if (hit) {
	    return hit
	  }
	
	  // reset parser state
	  str = s
	  inSingle = inDouble = false
	  curly = square = paren = begin = argIndex = 0
	  lastFilterIndex = 0
	  dirs = []
	  dir = {}
	  arg = null
	
	  for (i = 0, l = str.length; i < l; i++) {
	    c = str.charCodeAt(i)
	    if (inSingle) {
	      // check single quote
	      if (c === 0x27) inSingle = !inSingle
	    } else if (inDouble) {
	      // check double quote
	      if (c === 0x22) inDouble = !inDouble
	    } else if (
	      c === 0x2C && // comma
	      !paren && !curly && !square
	    ) {
	      // reached the end of a directive
	      pushDir()
	      // reset & skip the comma
	      dir = {}
	      begin = argIndex = lastFilterIndex = i + 1
	    } else if (
	      c === 0x3A && // colon
	      !dir.expression &&
	      !dir.arg
	    ) {
	      // argument
	      arg = str.slice(begin, i).trim()
	      // test for valid argument here
	      // since we may have caught stuff like first half of
	      // an object literal or a ternary expression.
	      if (argRE.test(arg)) {
	        argIndex = i + 1
	        dir.arg = _.stripQuotes(arg) || arg
	      }
	    } else if (
	      c === 0x7C && // pipe
	      str.charCodeAt(i + 1) !== 0x7C &&
	      str.charCodeAt(i - 1) !== 0x7C
	    ) {
	      if (dir.expression === undefined) {
	        // first filter, end of expression
	        lastFilterIndex = i + 1
	        dir.expression = str.slice(argIndex, i).trim()
	      } else {
	        // already has filter
	        pushFilter()
	      }
	    } else {
	      switch (c) {
	        case 0x22: inDouble = true; break // "
	        case 0x27: inSingle = true; break // '
	        case 0x28: paren++; break         // (
	        case 0x29: paren--; break         // )
	        case 0x5B: square++; break        // [
	        case 0x5D: square--; break        // ]
	        case 0x7B: curly++; break         // {
	        case 0x7D: curly--; break         // }
	      }
	    }
	  }
	
	  if (i === 0 || begin !== i) {
	    pushDir()
	  }
	
	  cache.put(s, dirs)
	  return dirs
	}


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(20)
	
	_.extend(exports, __webpack_require__(34))
	_.extend(exports, __webpack_require__(44))


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var _ = __webpack_require__(20)
	var compileProps = __webpack_require__(35)
	var config = __webpack_require__(23)
	var textParser = __webpack_require__(30)
	var dirParser = __webpack_require__(32)
	var templateParser = __webpack_require__(42)
	var resolveAsset = _.resolveAsset
	var componentDef = __webpack_require__(43)
	
	// terminal directives
	var terminalDirectives = [
	  'repeat',
	  'if'
	]
	
	/**
	 * Compile a template and return a reusable composite link
	 * function, which recursively contains more link functions
	 * inside. This top level compile function would normally
	 * be called on instance root nodes, but can also be used
	 * for partial compilation if the partial argument is true.
	 *
	 * The returned composite link function, when called, will
	 * return an unlink function that tearsdown all directives
	 * created during the linking phase.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Object} options
	 * @param {Boolean} partial
	 * @param {Vue} [host] - host vm of transcluded content
	 * @return {Function}
	 */
	
	exports.compile = function (el, options, partial, host) {
	  // link function for the node itself.
	  var nodeLinkFn = partial || !options._asComponent
	    ? compileNode(el, options)
	    : null
	  // link function for the childNodes
	  var childLinkFn =
	    !(nodeLinkFn && nodeLinkFn.terminal) &&
	    el.tagName !== 'SCRIPT' &&
	    el.hasChildNodes()
	      ? compileNodeList(el.childNodes, options)
	      : null
	
	  /**
	   * A composite linker function to be called on a already
	   * compiled piece of DOM, which instantiates all directive
	   * instances.
	   *
	   * @param {Vue} vm
	   * @param {Element|DocumentFragment} el
	   * @return {Function|undefined}
	   */
	
	  return function compositeLinkFn (vm, el) {
	    // cache childNodes before linking parent, fix #657
	    var childNodes = _.toArray(el.childNodes)
	    // link
	    var dirs = linkAndCapture(function () {
	      if (nodeLinkFn) nodeLinkFn(vm, el, host)
	      if (childLinkFn) childLinkFn(vm, childNodes, host)
	    }, vm)
	    return makeUnlinkFn(vm, dirs)
	  }
	}
	
	/**
	 * Apply a linker to a vm/element pair and capture the
	 * directives created during the process.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 */
	
	function linkAndCapture (linker, vm) {
	  var originalDirCount = vm._directives.length
	  linker()
	  return vm._directives.slice(originalDirCount)
	}
	
	/**
	 * Linker functions return an unlink function that
	 * tearsdown all directives instances generated during
	 * the process.
	 *
	 * We create unlink functions with only the necessary
	 * information to avoid retaining additional closures.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Vue} [context]
	 * @param {Array} [contextDirs]
	 * @return {Function}
	 */
	
	function makeUnlinkFn (vm, dirs, context, contextDirs) {
	  return function unlink (destroying) {
	    teardownDirs(vm, dirs, destroying)
	    if (context && contextDirs) {
	      teardownDirs(context, contextDirs)
	    }
	  }
	}
	
	/**
	 * Teardown partial linked directives.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Boolean} destroying
	 */
	
	function teardownDirs (vm, dirs, destroying) {
	  var i = dirs.length
	  while (i--) {
	    dirs[i]._teardown()
	    if (!destroying) {
	      vm._directives.$remove(dirs[i])
	    }
	  }
	}
	
	/**
	 * Compile link props on an instance.
	 *
	 * @param {Vue} vm
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function}
	 */
	
	exports.compileAndLinkProps = function (vm, el, props) {
	  var propsLinkFn = compileProps(el, props)
	  var propDirs = linkAndCapture(function () {
	    propsLinkFn(vm, null)
	  }, vm)
	  return makeUnlinkFn(vm, propDirs)
	}
	
	/**
	 * Compile the root element of an instance.
	 *
	 * 1. attrs on context container (context scope)
	 * 2. attrs on the component template root node, if
	 *    replace:true (child scope)
	 *
	 * If this is a fragment instance, we only need to compile 1.
	 *
	 * This function does compile and link at the same time,
	 * since root linkers can not be reused. It returns the
	 * unlink function for potential context directives on the
	 * container.
	 *
	 * @param {Vue} vm
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function}
	 */
	
	exports.compileAndLinkRoot = function (vm, el, options) {
	  var containerAttrs = options._containerAttrs
	  var replacerAttrs = options._replacerAttrs
	  var contextLinkFn, replacerLinkFn
	
	  // only need to compile other attributes for
	  // non-fragment instances
	  if (el.nodeType !== 11) {
	    // for components, container and replacer need to be
	    // compiled separately and linked in different scopes.
	    if (options._asComponent) {
	      // 2. container attributes
	      if (containerAttrs) {
	        contextLinkFn = compileDirectives(containerAttrs, options)
	      }
	      if (replacerAttrs) {
	        // 3. replacer attributes
	        replacerLinkFn = compileDirectives(replacerAttrs, options)
	      }
	    } else {
	      // non-component, just compile as a normal element.
	      replacerLinkFn = compileDirectives(el.attributes, options)
	    }
	  }
	
	  // link context scope dirs
	  var context = vm._context
	  var contextDirs
	  if (context && contextLinkFn) {
	    contextDirs = linkAndCapture(function () {
	      contextLinkFn(context, el)
	    }, context)
	  }
	
	  // link self
	  var selfDirs = linkAndCapture(function () {
	    if (replacerLinkFn) replacerLinkFn(vm, el)
	  }, vm)
	
	  // return the unlink function that tearsdown context
	  // container directives.
	  return makeUnlinkFn(vm, selfDirs, context, contextDirs)
	}
	
	/**
	 * Compile a node and return a nodeLinkFn based on the
	 * node type.
	 *
	 * @param {Node} node
	 * @param {Object} options
	 * @return {Function|null}
	 */
	
	function compileNode (node, options) {
	  var type = node.nodeType
	  if (type === 1 && node.tagName !== 'SCRIPT') {
	    return compileElement(node, options)
	  } else if (type === 3 && config.interpolate && node.data.trim()) {
	    return compileTextNode(node, options)
	  } else {
	    return null
	  }
	}
	
	/**
	 * Compile an element and return a nodeLinkFn.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|null}
	 */
	
	function compileElement (el, options) {
	  var linkFn
	  var hasAttrs = el.hasAttributes()
	  // check terminal directives (repeat & if)
	  if (hasAttrs) {
	    linkFn = checkTerminalDirectives(el, options)
	  }
	  // check element directives
	  if (!linkFn) {
	    linkFn = checkElementDirectives(el, options)
	  }
	  // check component
	  if (!linkFn) {
	    linkFn = checkComponent(el, options)
	  }
	  // normal directives
	  if (!linkFn && hasAttrs) {
	    linkFn = compileDirectives(el.attributes, options)
	  }
	  // if the element is a textarea, we need to interpolate
	  // its content on initial render.
	  if (el.tagName === 'TEXTAREA') {
	    var realLinkFn = linkFn
	    linkFn = function (vm, el) {
	      el.value = vm.$interpolate(el.value)
	      if (realLinkFn) realLinkFn(vm, el)
	    }
	    linkFn.terminal = true
	  }
	  return linkFn
	}
	
	/**
	 * Compile a textNode and return a nodeLinkFn.
	 *
	 * @param {TextNode} node
	 * @param {Object} options
	 * @return {Function|null} textNodeLinkFn
	 */
	
	function compileTextNode (node, options) {
	  var tokens = textParser.parse(node.data)
	  if (!tokens) {
	    return null
	  }
	  var frag = document.createDocumentFragment()
	  var el, token
	  for (var i = 0, l = tokens.length; i < l; i++) {
	    token = tokens[i]
	    el = token.tag
	      ? processTextToken(token, options)
	      : document.createTextNode(token.value)
	    frag.appendChild(el)
	  }
	  return makeTextNodeLinkFn(tokens, frag, options)
	}
	
	/**
	 * Process a single text token.
	 *
	 * @param {Object} token
	 * @param {Object} options
	 * @return {Node}
	 */
	
	function processTextToken (token, options) {
	  var el
	  if (token.oneTime) {
	    el = document.createTextNode(token.value)
	  } else {
	    if (token.html) {
	      el = document.createComment('v-html')
	      setTokenType('html')
	    } else {
	      // IE will clean up empty textNodes during
	      // frag.cloneNode(true), so we have to give it
	      // something here...
	      el = document.createTextNode(' ')
	      setTokenType('text')
	    }
	  }
	  function setTokenType (type) {
	    token.type = type
	    token.def = resolveAsset(options, 'directives', type)
	    token.descriptor = dirParser.parse(token.value)[0]
	  }
	  return el
	}
	
	/**
	 * Build a function that processes a textNode.
	 *
	 * @param {Array<Object>} tokens
	 * @param {DocumentFragment} frag
	 */
	
	function makeTextNodeLinkFn (tokens, frag) {
	  return function textNodeLinkFn (vm, el) {
	    var fragClone = frag.cloneNode(true)
	    var childNodes = _.toArray(fragClone.childNodes)
	    var token, value, node
	    for (var i = 0, l = tokens.length; i < l; i++) {
	      token = tokens[i]
	      value = token.value
	      if (token.tag) {
	        node = childNodes[i]
	        if (token.oneTime) {
	          value = vm.$eval(value)
	          if (token.html) {
	            _.replace(node, templateParser.parse(value, true))
	          } else {
	            node.data = value
	          }
	        } else {
	          vm._bindDir(token.type, node,
	                      token.descriptor, token.def)
	        }
	      }
	    }
	    _.replace(el, fragClone)
	  }
	}
	
	/**
	 * Compile a node list and return a childLinkFn.
	 *
	 * @param {NodeList} nodeList
	 * @param {Object} options
	 * @return {Function|undefined}
	 */
	
	function compileNodeList (nodeList, options) {
	  var linkFns = []
	  var nodeLinkFn, childLinkFn, node
	  for (var i = 0, l = nodeList.length; i < l; i++) {
	    node = nodeList[i]
	    nodeLinkFn = compileNode(node, options)
	    childLinkFn =
	      !(nodeLinkFn && nodeLinkFn.terminal) &&
	      node.tagName !== 'SCRIPT' &&
	      node.hasChildNodes()
	        ? compileNodeList(node.childNodes, options)
	        : null
	    linkFns.push(nodeLinkFn, childLinkFn)
	  }
	  return linkFns.length
	    ? makeChildLinkFn(linkFns)
	    : null
	}
	
	/**
	 * Make a child link function for a node's childNodes.
	 *
	 * @param {Array<Function>} linkFns
	 * @return {Function} childLinkFn
	 */
	
	function makeChildLinkFn (linkFns) {
	  return function childLinkFn (vm, nodes, host) {
	    var node, nodeLinkFn, childrenLinkFn
	    for (var i = 0, n = 0, l = linkFns.length; i < l; n++) {
	      node = nodes[n]
	      nodeLinkFn = linkFns[i++]
	      childrenLinkFn = linkFns[i++]
	      // cache childNodes before linking parent, fix #657
	      var childNodes = _.toArray(node.childNodes)
	      if (nodeLinkFn) {
	        nodeLinkFn(vm, node, host)
	      }
	      if (childrenLinkFn) {
	        childrenLinkFn(vm, childNodes, host)
	      }
	    }
	  }
	}
	
	/**
	 * Check for element directives (custom elements that should
	 * be resovled as terminal directives).
	 *
	 * @param {Element} el
	 * @param {Object} options
	 */
	
	function checkElementDirectives (el, options) {
	  var tag = el.tagName.toLowerCase()
	  if (_.commonTagRE.test(tag)) return
	  var def = resolveAsset(options, 'elementDirectives', tag)
	  if (def) {
	    return makeTerminalNodeLinkFn(el, tag, '', options, def)
	  }
	}
	
	/**
	 * Check if an element is a component. If yes, return
	 * a component link function.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @param {Boolean} hasAttrs
	 * @return {Function|undefined}
	 */
	
	function checkComponent (el, options, hasAttrs) {
	  var componentId = _.checkComponent(el, options, hasAttrs)
	  if (componentId) {
	    var componentLinkFn = function (vm, el, host) {
	      vm._bindDir('component', el, {
	        expression: componentId
	      }, componentDef, host)
	    }
	    componentLinkFn.terminal = true
	    return componentLinkFn
	  }
	}
	
	/**
	 * Check an element for terminal directives in fixed order.
	 * If it finds one, return a terminal link function.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function} terminalLinkFn
	 */
	
	function checkTerminalDirectives (el, options) {
	  if (_.attr(el, 'pre') !== null) {
	    return skip
	  }
	  var value, dirName
	  for (var i = 0, l = terminalDirectives.length; i < l; i++) {
	    dirName = terminalDirectives[i]
	    if ((value = _.attr(el, dirName)) !== null) {
	      return makeTerminalNodeLinkFn(el, dirName, value, options)
	    }
	  }
	}
	
	function skip () {}
	skip.terminal = true
	
	/**
	 * Build a node link function for a terminal directive.
	 * A terminal link function terminates the current
	 * compilation recursion and handles compilation of the
	 * subtree in the directive.
	 *
	 * @param {Element} el
	 * @param {String} dirName
	 * @param {String} value
	 * @param {Object} options
	 * @param {Object} [def]
	 * @return {Function} terminalLinkFn
	 */
	
	function makeTerminalNodeLinkFn (el, dirName, value, options, def) {
	  var descriptor = dirParser.parse(value)[0]
	  // no need to call resolveAsset since terminal directives
	  // are always internal
	  def = def || options.directives[dirName]
	  var fn = function terminalNodeLinkFn (vm, el, host) {
	    vm._bindDir(dirName, el, descriptor, def, host)
	  }
	  fn.terminal = true
	  return fn
	}
	
	/**
	 * Compile the directives on an element and return a linker.
	 *
	 * @param {Array|NamedNodeMap} attrs
	 * @param {Object} options
	 * @return {Function}
	 */
	
	function compileDirectives (attrs, options) {
	  var i = attrs.length
	  var dirs = []
	  var attr, name, value, dir, dirName, dirDef
	  while (i--) {
	    attr = attrs[i]
	    name = attr.name
	    value = attr.value
	    if (name.indexOf(config.prefix) === 0) {
	      dirName = name.slice(config.prefix.length)
	      dirDef = resolveAsset(options, 'directives', dirName)
	      if (process.env.NODE_ENV !== 'production') {
	        _.assertAsset(dirDef, 'directive', dirName)
	      }
	      if (dirDef) {
	        dirs.push({
	          name: dirName,
	          descriptors: dirParser.parse(value),
	          def: dirDef
	        })
	      }
	    } else if (config.interpolate) {
	      dir = collectAttrDirective(name, value, options)
	      if (dir) {
	        dirs.push(dir)
	      }
	    }
	  }
	  // sort by priority, LOW to HIGH
	  if (dirs.length) {
	    dirs.sort(directiveComparator)
	    return makeNodeLinkFn(dirs)
	  }
	}
	
	/**
	 * Build a link function for all directives on a single node.
	 *
	 * @param {Array} directives
	 * @return {Function} directivesLinkFn
	 */
	
	function makeNodeLinkFn (directives) {
	  return function nodeLinkFn (vm, el, host) {
	    // reverse apply because it's sorted low to high
	    var i = directives.length
	    var dir, j, k
	    while (i--) {
	      dir = directives[i]
	      if (dir._link) {
	        // custom link fn
	        dir._link(vm, el)
	      } else {
	        k = dir.descriptors.length
	        for (j = 0; j < k; j++) {
	          vm._bindDir(dir.name, el,
	            dir.descriptors[j], dir.def, host)
	        }
	      }
	    }
	  }
	}
	
	/**
	 * Check an attribute for potential dynamic bindings,
	 * and return a directive object.
	 *
	 * Special case: class interpolations are translated into
	 * v-class instead v-attr, so that it can work with user
	 * provided v-class bindings.
	 *
	 * @param {String} name
	 * @param {String} value
	 * @param {Object} options
	 * @return {Object}
	 */
	
	function collectAttrDirective (name, value, options) {
	  var tokens = textParser.parse(value)
	  var isClass = name === 'class'
	  if (tokens) {
	    var dirName = isClass ? 'class' : 'attr'
	    var def = options.directives[dirName]
	    var i = tokens.length
	    var allOneTime = true
	    while (i--) {
	      var token = tokens[i]
	      if (token.tag && !token.oneTime) {
	        allOneTime = false
	      }
	    }
	    return {
	      def: def,
	      _link: allOneTime
	        ? function (vm, el) {
	            el.setAttribute(name, vm.$interpolate(value))
	          }
	        : function (vm, el) {
	            var exp = textParser.tokensToExp(tokens, vm)
	            var desc = isClass
	              ? dirParser.parse(exp)[0]
	              : dirParser.parse(name + ':' + exp)[0]
	            if (isClass) {
	              desc._rawClass = value
	            }
	            vm._bindDir(dirName, el, desc, def)
	          }
	    }
	  }
	}
	
	/**
	 * Directive priority sort comparator
	 *
	 * @param {Object} a
	 * @param {Object} b
	 */
	
	function directiveComparator (a, b) {
	  a = a.def.priority || 0
	  b = b.def.priority || 0
	  return a > b ? 1 : -1
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(22)))

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var _ = __webpack_require__(20)
	var textParser = __webpack_require__(30)
	var propDef = __webpack_require__(36)
	var propBindingModes = __webpack_require__(23)._propBindingModes
	
	// regexes
	var identRE = __webpack_require__(40).identRE
	var dataAttrRE = /^data-/
	var settablePathRE = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\[[^\[\]]+\])*$/
	var literalValueRE = /^(true|false)$|^\d.*/
	
	/**
	 * Compile param attributes on a root element and return
	 * a props link function.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Array} propOptions
	 * @return {Function} propsLinkFn
	 */
	
	module.exports = function compileProps (el, propOptions) {
	  var props = []
	  var i = propOptions.length
	  var options, name, attr, value, path, prop, literal, single
	  while (i--) {
	    options = propOptions[i]
	    name = options.name
	    // props could contain dashes, which will be
	    // interpreted as minus calculations by the parser
	    // so we need to camelize the path here
	    path = _.camelize(name.replace(dataAttrRE, ''))
	    if (!identRE.test(path)) {
	      process.env.NODE_ENV !== 'production' && _.warn(
	        'Invalid prop key: "' + name + '". Prop keys ' +
	        'must be valid identifiers.'
	      )
	      continue
	    }
	    attr = _.hyphenate(name)
	    value = el.getAttribute(attr)
	    if (value === null) {
	      attr = 'data-' + attr
	      value = el.getAttribute(attr)
	    }
	    // create a prop descriptor
	    prop = {
	      name: name,
	      raw: value,
	      path: path,
	      options: options,
	      mode: propBindingModes.ONE_WAY
	    }
	    if (value !== null) {
	      // important so that this doesn't get compiled
	      // again as a normal attribute binding
	      el.removeAttribute(attr)
	      var tokens = textParser.parse(value)
	      if (tokens) {
	        prop.dynamic = true
	        prop.parentPath = textParser.tokensToExp(tokens)
	        // check prop binding type.
	        single = tokens.length === 1
	        literal = literalValueRE.test(prop.parentPath)
	        // one time: {{* prop}}
	        if (literal || (single && tokens[0].oneTime)) {
	          prop.mode = propBindingModes.ONE_TIME
	        } else if (
	          !literal &&
	          (single && tokens[0].twoWay)
	        ) {
	          if (settablePathRE.test(prop.parentPath)) {
	            prop.mode = propBindingModes.TWO_WAY
	          } else {
	            process.env.NODE_ENV !== 'production' && _.warn(
	              'Cannot bind two-way prop with non-settable ' +
	              'parent path: ' + prop.parentPath
	            )
	          }
	        }
	        if (
	          process.env.NODE_ENV !== 'production' &&
	          options.twoWay &&
	          prop.mode !== propBindingModes.TWO_WAY
	        ) {
	          _.warn(
	            'Prop "' + name + '" expects a two-way binding type.'
	          )
	        }
	      }
	    } else if (options && options.required) {
	      process.env.NODE_ENV !== 'production' && _.warn(
	        'Missing required prop: ' + name
	      )
	    }
	    props.push(prop)
	  }
	  return makePropsLinkFn(props)
	}
	
	/**
	 * Build a function that applies props to a vm.
	 *
	 * @param {Array} props
	 * @return {Function} propsLinkFn
	 */
	
	function makePropsLinkFn (props) {
	  return function propsLinkFn (vm, el) {
	    // store resolved props info
	    vm._props = {}
	    var i = props.length
	    var prop, path, options, value
	    while (i--) {
	      prop = props[i]
	      path = prop.path
	      vm._props[path] = prop
	      options = prop.options
	      if (prop.raw === null) {
	        // initialize absent prop
	        _.initProp(vm, prop, getDefault(options))
	      } else if (prop.dynamic) {
	        // dynamic prop
	        if (vm._context) {
	          if (prop.mode === propBindingModes.ONE_TIME) {
	            // one time binding
	            value = vm._context.$get(prop.parentPath)
	            _.initProp(vm, prop, value)
	          } else {
	            // dynamic binding
	            vm._bindDir('prop', el, prop, propDef)
	          }
	        } else {
	          process.env.NODE_ENV !== 'production' && _.warn(
	            'Cannot bind dynamic prop on a root instance' +
	            ' with no parent: ' + prop.name + '="' +
	            prop.raw + '"'
	          )
	        }
	      } else {
	        // literal, cast it and just set once
	        var raw = prop.raw
	        value = options.type === Boolean && raw === ''
	          ? true
	          // do not cast emptry string.
	          // _.toNumber casts empty string to 0.
	          : raw.trim()
	            ? _.toBoolean(_.toNumber(raw))
	            : raw
	        _.initProp(vm, prop, value)
	      }
	    }
	  }
	}
	
	/**
	 * Get the default value of a prop.
	 *
	 * @param {Object} options
	 * @return {*}
	 */
	
	function getDefault (options) {
	  // no default, return undefined
	  if (!options.hasOwnProperty('default')) {
	    // absent boolean value defaults to false
	    return options.type === Boolean
	      ? false
	      : undefined
	  }
	  var def = options.default
	  // warn against non-factory defaults for Object & Array
	  if (_.isObject(def)) {
	    process.env.NODE_ENV !== 'production' && _.warn(
	      'Object/Array as default prop values will be shared ' +
	      'across multiple instances. Use a factory function ' +
	      'to return the default value instead.'
	    )
	  }
	  // call factory function for non-Function types
	  return typeof def === 'function' && options.type !== Function
	    ? def()
	    : def
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(22)))

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// NOTE: the prop internal directive is compiled and linked
	// during _initScope(), before the created hook is called.
	// The purpose is to make the initial prop values available
	// inside `created` hooks and `data` functions.
	
	var _ = __webpack_require__(20)
	var Watcher = __webpack_require__(37)
	var bindingModes = __webpack_require__(23)._propBindingModes
	
	module.exports = {
	
	  bind: function () {
	
	    var child = this.vm
	    var parent = child._context
	    // passed in from compiler directly
	    var prop = this._descriptor
	    var childKey = prop.path
	    var parentKey = prop.parentPath
	
	    this.parentWatcher = new Watcher(
	      parent,
	      parentKey,
	      function (val) {
	        if (_.assertProp(prop, val)) {
	          child[childKey] = val
	        }
	      }
	    )
	
	    // set the child initial value.
	    var value = this.parentWatcher.value
	    if (childKey === '$data') {
	      child._data = value
	    } else {
	      _.initProp(child, prop, value)
	    }
	
	    // setup two-way binding
	    if (prop.mode === bindingModes.TWO_WAY) {
	      // important: defer the child watcher creation until
	      // the created hook (after data observation)
	      var self = this
	      child.$once('hook:created', function () {
	        self.childWatcher = new Watcher(
	          child,
	          childKey,
	          function (val) {
	            parent.$set(parentKey, val)
	          }
	        )
	      })
	    }
	  },
	
	  unbind: function () {
	    this.parentWatcher.teardown()
	    if (this.childWatcher) {
	      this.childWatcher.teardown()
	    }
	  }
	}


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var _ = __webpack_require__(20)
	var config = __webpack_require__(23)
	var Dep = __webpack_require__(38)
	var expParser = __webpack_require__(39)
	var batcher = __webpack_require__(41)
	var uid = 0
	
	/**
	 * A watcher parses an expression, collects dependencies,
	 * and fires callback when the expression value changes.
	 * This is used for both the $watch() api and directives.
	 *
	 * @param {Vue} vm
	 * @param {String} expression
	 * @param {Function} cb
	 * @param {Object} options
	 *                 - {Array} filters
	 *                 - {Boolean} twoWay
	 *                 - {Boolean} deep
	 *                 - {Boolean} user
	 *                 - {Boolean} lazy
	 *                 - {Function} [preProcess]
	 * @constructor
	 */
	
	function Watcher (vm, expOrFn, cb, options) {
	  var isFn = typeof expOrFn === 'function'
	  this.vm = vm
	  vm._watchers.push(this)
	  this.expression = isFn ? expOrFn.toString() : expOrFn
	  this.cb = cb
	  this.id = ++uid // uid for batching
	  this.active = true
	  options = options || {}
	  this.deep = !!options.deep
	  this.user = !!options.user
	  this.twoWay = !!options.twoWay
	  this.lazy = !!options.lazy
	  this.dirty = this.lazy
	  this.filters = options.filters
	  this.preProcess = options.preProcess
	  this.deps = []
	  this.newDeps = null
	  // parse expression for getter/setter
	  if (isFn) {
	    this.getter = expOrFn
	    this.setter = undefined
	  } else {
	    var res = expParser.parse(expOrFn, options.twoWay)
	    this.getter = res.get
	    this.setter = res.set
	  }
	  this.value = this.lazy
	    ? undefined
	    : this.get()
	  // state for avoiding false triggers for deep and Array
	  // watchers during vm._digest()
	  this.queued = this.shallow = false
	}
	
	var p = Watcher.prototype
	
	/**
	 * Add a dependency to this directive.
	 *
	 * @param {Dep} dep
	 */
	
	p.addDep = function (dep) {
	  var newDeps = this.newDeps
	  var old = this.deps
	  if (_.indexOf(newDeps, dep) < 0) {
	    newDeps.push(dep)
	    var i = _.indexOf(old, dep)
	    if (i < 0) {
	      dep.addSub(this)
	    } else {
	      old[i] = null
	    }
	  }
	}
	
	/**
	 * Evaluate the getter, and re-collect dependencies.
	 */
	
	p.get = function () {
	  this.beforeGet()
	  var vm = this.vm
	  var value
	  try {
	    value = this.getter.call(vm, vm)
	  } catch (e) {
	    if (
	      process.env.NODE_ENV !== 'production' &&
	      config.warnExpressionErrors
	    ) {
	      _.warn(
	        'Error when evaluating expression "' +
	        this.expression + '". ' +
	        (config.debug
	          ? '' :
	          'Turn on debug mode to see stack trace.'
	        ), e
	      )
	    }
	  }
	  // "touch" every property so they are all tracked as
	  // dependencies for deep watching
	  if (this.deep) {
	    traverse(value)
	  }
	  if (this.preProcess) {
	    value = this.preProcess(value)
	  }
	  if (this.filters) {
	    value = vm._applyFilters(value, null, this.filters, false)
	  }
	  this.afterGet()
	  return value
	}
	
	/**
	 * Set the corresponding value with the setter.
	 *
	 * @param {*} value
	 */
	
	p.set = function (value) {
	  var vm = this.vm
	  if (this.filters) {
	    value = vm._applyFilters(
	      value, this.value, this.filters, true)
	  }
	  try {
	    this.setter.call(vm, vm, value)
	  } catch (e) {
	    if (
	      process.env.NODE_ENV !== 'production' &&
	      config.warnExpressionErrors
	    ) {
	      _.warn(
	        'Error when evaluating setter "' +
	        this.expression + '"', e
	      )
	    }
	  }
	}
	
	/**
	 * Prepare for dependency collection.
	 */
	
	p.beforeGet = function () {
	  Dep.target = this
	  this.newDeps = []
	}
	
	/**
	 * Clean up for dependency collection.
	 */
	
	p.afterGet = function () {
	  Dep.target = null
	  var i = this.deps.length
	  while (i--) {
	    var dep = this.deps[i]
	    if (dep) {
	      dep.removeSub(this)
	    }
	  }
	  this.deps = this.newDeps
	  this.newDeps = null
	}
	
	/**
	 * Subscriber interface.
	 * Will be called when a dependency changes.
	 *
	 * @param {Boolean} shallow
	 */
	
	p.update = function (shallow) {
	  if (this.lazy) {
	    this.dirty = true
	  } else if (!config.async) {
	    this.run()
	  } else {
	    // if queued, only overwrite shallow with non-shallow,
	    // but not the other way around.
	    this.shallow = this.queued
	      ? shallow
	        ? this.shallow
	        : false
	      : !!shallow
	    this.queued = true
	    batcher.push(this)
	  }
	}
	
	/**
	 * Batcher job interface.
	 * Will be called by the batcher.
	 */
	
	p.run = function () {
	  if (this.active) {
	    var value = this.get()
	    if (
	      value !== this.value ||
	      // Deep watchers and Array watchers should fire even
	      // when the value is the same, because the value may
	      // have mutated; but only do so if this is a
	      // non-shallow update (caused by a vm digest).
	      ((_.isArray(value) || this.deep) && !this.shallow)
	    ) {
	      var oldValue = this.value
	      this.value = value
	      this.cb(value, oldValue)
	    }
	    this.queued = this.shallow = false
	  }
	}
	
	/**
	 * Evaluate the value of the watcher.
	 * This only gets called for lazy watchers.
	 */
	
	p.evaluate = function () {
	  // avoid overwriting another watcher that is being
	  // collected.
	  var current = Dep.target
	  this.value = this.get()
	  this.dirty = false
	  Dep.target = current
	}
	
	/**
	 * Depend on all deps collected by this watcher.
	 */
	
	p.depend = function () {
	  var i = this.deps.length
	  while (i--) {
	    this.deps[i].depend()
	  }
	}
	
	/**
	 * Remove self from all dependencies' subcriber list.
	 */
	
	p.teardown = function () {
	  if (this.active) {
	    // remove self from vm's watcher list
	    // we can skip this if the vm if being destroyed
	    // which can improve teardown performance.
	    if (!this.vm._isBeingDestroyed) {
	      this.vm._watchers.$remove(this)
	    }
	    var i = this.deps.length
	    while (i--) {
	      this.deps[i].removeSub(this)
	    }
	    this.active = false
	    this.vm = this.cb = this.value = null
	  }
	}
	
	/**
	 * Recrusively traverse an object to evoke all converted
	 * getters, so that every nested property inside the object
	 * is collected as a "deep" dependency.
	 *
	 * @param {Object} obj
	 */
	
	function traverse (obj) {
	  var key, val, i
	  for (key in obj) {
	    val = obj[key]
	    if (_.isArray(val)) {
	      i = val.length
	      while (i--) traverse(val[i])
	    } else if (_.isObject(val)) {
	      traverse(val)
	    }
	  }
	}
	
	module.exports = Watcher
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(22)))

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(20)
	
	/**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 *
	 * @constructor
	 */
	
	function Dep () {
	  this.subs = []
	}
	
	// the current target watcher being evaluated.
	// this is globally unique because there could be only one
	// watcher being evaluated at any time.
	Dep.target = null
	
	var p = Dep.prototype
	
	/**
	 * Add a directive subscriber.
	 *
	 * @param {Directive} sub
	 */
	
	p.addSub = function (sub) {
	  this.subs.push(sub)
	}
	
	/**
	 * Remove a directive subscriber.
	 *
	 * @param {Directive} sub
	 */
	
	p.removeSub = function (sub) {
	  this.subs.$remove(sub)
	}
	
	/**
	 * Add self as a dependency to the target watcher.
	 */
	
	p.depend = function () {
	  Dep.target.addDep(this)
	}
	
	/**
	 * Notify all subscribers of a new value.
	 */
	
	p.notify = function () {
	  // stablize the subscriber list first
	  var subs = _.toArray(this.subs)
	  for (var i = 0, l = subs.length; i < l; i++) {
	    subs[i].update()
	  }
	}
	
	module.exports = Dep


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var _ = __webpack_require__(20)
	var Path = __webpack_require__(40)
	var Cache = __webpack_require__(31)
	var expressionCache = new Cache(1000)
	
	var allowedKeywords =
	  'Math,Date,this,true,false,null,undefined,Infinity,NaN,' +
	  'isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,' +
	  'encodeURIComponent,parseInt,parseFloat'
	var allowedKeywordsRE =
	  new RegExp('^(' + allowedKeywords.replace(/,/g, '\\b|') + '\\b)')
	
	// keywords that don't make sense inside expressions
	var improperKeywords =
	  'break,case,class,catch,const,continue,debugger,default,' +
	  'delete,do,else,export,extends,finally,for,function,if,' +
	  'import,in,instanceof,let,return,super,switch,throw,try,' +
	  'var,while,with,yield,enum,await,implements,package,' +
	  'proctected,static,interface,private,public'
	var improperKeywordsRE =
	  new RegExp('^(' + improperKeywords.replace(/,/g, '\\b|') + '\\b)')
	
	var wsRE = /\s/g
	var newlineRE = /\n/g
	var saveRE = /[\{,]\s*[\w\$_]+\s*:|('[^']*'|"[^"]*")|new |typeof |void /g
	var restoreRE = /"(\d+)"/g
	var pathTestRE = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/
	var pathReplaceRE = /[^\w$\.]([A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\])*)/g
	var booleanLiteralRE = /^(true|false)$/
	
	/**
	 * Save / Rewrite / Restore
	 *
	 * When rewriting paths found in an expression, it is
	 * possible for the same letter sequences to be found in
	 * strings and Object literal property keys. Therefore we
	 * remove and store these parts in a temporary array, and
	 * restore them after the path rewrite.
	 */
	
	var saved = []
	
	/**
	 * Save replacer
	 *
	 * The save regex can match two possible cases:
	 * 1. An opening object literal
	 * 2. A string
	 * If matched as a plain string, we need to escape its
	 * newlines, since the string needs to be preserved when
	 * generating the function body.
	 *
	 * @param {String} str
	 * @param {String} isString - str if matched as a string
	 * @return {String} - placeholder with index
	 */
	
	function save (str, isString) {
	  var i = saved.length
	  saved[i] = isString
	    ? str.replace(newlineRE, '\\n')
	    : str
	  return '"' + i + '"'
	}
	
	/**
	 * Path rewrite replacer
	 *
	 * @param {String} raw
	 * @return {String}
	 */
	
	function rewrite (raw) {
	  var c = raw.charAt(0)
	  var path = raw.slice(1)
	  if (allowedKeywordsRE.test(path)) {
	    return raw
	  } else {
	    path = path.indexOf('"') > -1
	      ? path.replace(restoreRE, restore)
	      : path
	    return c + 'scope.' + path
	  }
	}
	
	/**
	 * Restore replacer
	 *
	 * @param {String} str
	 * @param {String} i - matched save index
	 * @return {String}
	 */
	
	function restore (str, i) {
	  return saved[i]
	}
	
	/**
	 * Rewrite an expression, prefixing all path accessors with
	 * `scope.` and generate getter/setter functions.
	 *
	 * @param {String} exp
	 * @param {Boolean} needSet
	 * @return {Function}
	 */
	
	function compileExpFns (exp, needSet) {
	  if (improperKeywordsRE.test(exp)) {
	    process.env.NODE_ENV !== 'production' && _.warn(
	      'Avoid using reserved keywords in expression: ' + exp
	    )
	  }
	  // reset state
	  saved.length = 0
	  // save strings and object literal keys
	  var body = exp
	    .replace(saveRE, save)
	    .replace(wsRE, '')
	  // rewrite all paths
	  // pad 1 space here becaue the regex matches 1 extra char
	  body = (' ' + body)
	    .replace(pathReplaceRE, rewrite)
	    .replace(restoreRE, restore)
	  var getter = makeGetter(body)
	  if (getter) {
	    return {
	      get: getter,
	      body: body,
	      set: needSet
	        ? makeSetter(body)
	        : null
	    }
	  }
	}
	
	/**
	 * Compile getter setters for a simple path.
	 *
	 * @param {String} exp
	 * @return {Function}
	 */
	
	function compilePathFns (exp) {
	  var getter, path
	  if (exp.indexOf('[') < 0) {
	    // really simple path
	    path = exp.split('.')
	    path.raw = exp
	    getter = Path.compileGetter(path)
	  } else {
	    // do the real parsing
	    path = Path.parse(exp)
	    getter = path.get
	  }
	  return {
	    get: getter,
	    // always generate setter for simple paths
	    set: function (obj, val) {
	      Path.set(obj, path, val)
	    }
	  }
	}
	
	/**
	 * Build a getter function. Requires eval.
	 *
	 * We isolate the try/catch so it doesn't affect the
	 * optimization of the parse function when it is not called.
	 *
	 * @param {String} body
	 * @return {Function|undefined}
	 */
	
	function makeGetter (body) {
	  try {
	    return new Function('scope', 'return ' + body + ';')
	  } catch (e) {
	    process.env.NODE_ENV !== 'production' && _.warn(
	      'Invalid expression. ' +
	      'Generated function body: ' + body
	    )
	  }
	}
	
	/**
	 * Build a setter function.
	 *
	 * This is only needed in rare situations like "a[b]" where
	 * a settable path requires dynamic evaluation.
	 *
	 * This setter function may throw error when called if the
	 * expression body is not a valid left-hand expression in
	 * assignment.
	 *
	 * @param {String} body
	 * @return {Function|undefined}
	 */
	
	function makeSetter (body) {
	  try {
	    return new Function('scope', 'value', body + '=value;')
	  } catch (e) {
	    process.env.NODE_ENV !== 'production' && _.warn(
	      'Invalid setter function body: ' + body
	    )
	  }
	}
	
	/**
	 * Check for setter existence on a cache hit.
	 *
	 * @param {Function} hit
	 */
	
	function checkSetter (hit) {
	  if (!hit.set) {
	    hit.set = makeSetter(hit.body)
	  }
	}
	
	/**
	 * Parse an expression into re-written getter/setters.
	 *
	 * @param {String} exp
	 * @param {Boolean} needSet
	 * @return {Function}
	 */
	
	exports.parse = function (exp, needSet) {
	  exp = exp.trim()
	  // try cache
	  var hit = expressionCache.get(exp)
	  if (hit) {
	    if (needSet) {
	      checkSetter(hit)
	    }
	    return hit
	  }
	  // we do a simple path check to optimize for them.
	  // the check fails valid paths with unusal whitespaces,
	  // but that's too rare and we don't care.
	  // also skip boolean literals and paths that start with
	  // global "Math"
	  var res = exports.isSimplePath(exp)
	    ? compilePathFns(exp)
	    : compileExpFns(exp, needSet)
	  expressionCache.put(exp, res)
	  return res
	}
	
	/**
	 * Check if an expression is a simple path.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */
	
	exports.isSimplePath = function (exp) {
	  return pathTestRE.test(exp) &&
	    // don't treat true/false as paths
	    !booleanLiteralRE.test(exp) &&
	    // Math constants e.g. Math.PI, Math.E etc.
	    exp.slice(0, 5) !== 'Math.'
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(22)))

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var _ = __webpack_require__(20)
	var Cache = __webpack_require__(31)
	var pathCache = new Cache(1000)
	var identRE = exports.identRE = /^[$_a-zA-Z]+[\w$]*$/
	
	// actions
	var APPEND = 0
	var PUSH = 1
	
	// states
	var BEFORE_PATH = 0
	var IN_PATH = 1
	var BEFORE_IDENT = 2
	var IN_IDENT = 3
	var BEFORE_ELEMENT = 4
	var AFTER_ZERO = 5
	var IN_INDEX = 6
	var IN_SINGLE_QUOTE = 7
	var IN_DOUBLE_QUOTE = 8
	var IN_SUB_PATH = 9
	var AFTER_ELEMENT = 10
	var AFTER_PATH = 11
	var ERROR = 12
	
	var pathStateMachine = []
	
	pathStateMachine[BEFORE_PATH] = {
	  'ws': [BEFORE_PATH],
	  'ident': [IN_IDENT, APPEND],
	  '[': [BEFORE_ELEMENT],
	  'eof': [AFTER_PATH]
	}
	
	pathStateMachine[IN_PATH] = {
	  'ws': [IN_PATH],
	  '.': [BEFORE_IDENT],
	  '[': [BEFORE_ELEMENT],
	  'eof': [AFTER_PATH]
	}
	
	pathStateMachine[BEFORE_IDENT] = {
	  'ws': [BEFORE_IDENT],
	  'ident': [IN_IDENT, APPEND]
	}
	
	pathStateMachine[IN_IDENT] = {
	  'ident': [IN_IDENT, APPEND],
	  '0': [IN_IDENT, APPEND],
	  'number': [IN_IDENT, APPEND],
	  'ws': [IN_PATH, PUSH],
	  '.': [BEFORE_IDENT, PUSH],
	  '[': [BEFORE_ELEMENT, PUSH],
	  'eof': [AFTER_PATH, PUSH]
	}
	
	pathStateMachine[BEFORE_ELEMENT] = {
	  'ws': [BEFORE_ELEMENT],
	  '0': [AFTER_ZERO, APPEND],
	  'number': [IN_INDEX, APPEND],
	  "'": [IN_SINGLE_QUOTE, APPEND, ''],
	  '"': [IN_DOUBLE_QUOTE, APPEND, ''],
	  'ident': [IN_SUB_PATH, APPEND, '*']
	}
	
	pathStateMachine[AFTER_ZERO] = {
	  'ws': [AFTER_ELEMENT, PUSH],
	  ']': [IN_PATH, PUSH]
	}
	
	pathStateMachine[IN_INDEX] = {
	  '0': [IN_INDEX, APPEND],
	  'number': [IN_INDEX, APPEND],
	  'ws': [AFTER_ELEMENT],
	  ']': [IN_PATH, PUSH]
	}
	
	pathStateMachine[IN_SINGLE_QUOTE] = {
	  "'": [AFTER_ELEMENT],
	  'eof': ERROR,
	  'else': [IN_SINGLE_QUOTE, APPEND]
	}
	
	pathStateMachine[IN_DOUBLE_QUOTE] = {
	  '"': [AFTER_ELEMENT],
	  'eof': ERROR,
	  'else': [IN_DOUBLE_QUOTE, APPEND]
	}
	
	pathStateMachine[IN_SUB_PATH] = {
	  'ident': [IN_SUB_PATH, APPEND],
	  '0': [IN_SUB_PATH, APPEND],
	  'number': [IN_SUB_PATH, APPEND],
	  'ws': [AFTER_ELEMENT],
	  ']': [IN_PATH, PUSH]
	}
	
	pathStateMachine[AFTER_ELEMENT] = {
	  'ws': [AFTER_ELEMENT],
	  ']': [IN_PATH, PUSH]
	}
	
	/**
	 * Determine the type of a character in a keypath.
	 *
	 * @param {Char} ch
	 * @return {String} type
	 */
	
	function getPathCharType (ch) {
	  if (ch === undefined) {
	    return 'eof'
	  }
	
	  var code = ch.charCodeAt(0)
	
	  switch (code) {
	    case 0x5B: // [
	    case 0x5D: // ]
	    case 0x2E: // .
	    case 0x22: // "
	    case 0x27: // '
	    case 0x30: // 0
	      return ch
	
	    case 0x5F: // _
	    case 0x24: // $
	      return 'ident'
	
	    case 0x20: // Space
	    case 0x09: // Tab
	    case 0x0A: // Newline
	    case 0x0D: // Return
	    case 0xA0:  // No-break space
	    case 0xFEFF:  // Byte Order Mark
	    case 0x2028:  // Line Separator
	    case 0x2029:  // Paragraph Separator
	      return 'ws'
	  }
	
	  // a-z, A-Z
	  if (
	    (code >= 0x61 && code <= 0x7A) ||
	    (code >= 0x41 && code <= 0x5A)
	  ) {
	    return 'ident'
	  }
	
	  // 1-9
	  if (code >= 0x31 && code <= 0x39) {
	    return 'number'
	  }
	
	  return 'else'
	}
	
	/**
	 * Parse a string path into an array of segments
	 * Todo implement cache
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */
	
	function parsePath (path) {
	  var keys = []
	  var index = -1
	  var mode = BEFORE_PATH
	  var c, newChar, key, type, transition, action, typeMap
	
	  var actions = []
	  actions[PUSH] = function () {
	    if (key === undefined) {
	      return
	    }
	    keys.push(key)
	    key = undefined
	  }
	  actions[APPEND] = function () {
	    if (key === undefined) {
	      key = newChar
	    } else {
	      key += newChar
	    }
	  }
	
	  function maybeUnescapeQuote () {
	    var nextChar = path[index + 1]
	    if ((mode === IN_SINGLE_QUOTE && nextChar === "'") ||
	        (mode === IN_DOUBLE_QUOTE && nextChar === '"')) {
	      index++
	      newChar = nextChar
	      actions[APPEND]()
	      return true
	    }
	  }
	
	  while (mode != null) {
	    index++
	    c = path[index]
	
	    if (c === '\\' && maybeUnescapeQuote()) {
	      continue
	    }
	
	    type = getPathCharType(c)
	    typeMap = pathStateMachine[mode]
	    transition = typeMap[type] || typeMap['else'] || ERROR
	
	    if (transition === ERROR) {
	      return // parse error
	    }
	
	    mode = transition[0]
	    action = actions[transition[1]]
	    if (action) {
	      newChar = transition[2]
	      newChar = newChar === undefined
	        ? c
	        : newChar === '*'
	          ? newChar + c
	          : newChar
	      action()
	    }
	
	    if (mode === AFTER_PATH) {
	      keys.raw = path
	      return keys
	    }
	  }
	}
	
	/**
	 * Format a accessor segment based on its type.
	 *
	 * @param {String} key
	 * @return {Boolean}
	 */
	
	function formatAccessor (key) {
	  if (identRE.test(key)) { // identifier
	    return '.' + key
	  } else if (+key === key >>> 0) { // bracket index
	    return '[' + key + ']'
	  } else if (key.charAt(0) === '*') {
	    return '[o' + formatAccessor(key.slice(1)) + ']'
	  } else { // bracket string
	    return '["' + key.replace(/"/g, '\\"') + '"]'
	  }
	}
	
	/**
	 * Compiles a getter function with a fixed path.
	 * The fixed path getter supresses errors.
	 *
	 * @param {Array} path
	 * @return {Function}
	 */
	
	exports.compileGetter = function (path) {
	  var body = 'return o' + path.map(formatAccessor).join('')
	  return new Function('o', body)
	}
	
	/**
	 * External parse that check for a cache hit first
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */
	
	exports.parse = function (path) {
	  var hit = pathCache.get(path)
	  if (!hit) {
	    hit = parsePath(path)
	    if (hit) {
	      hit.get = exports.compileGetter(hit)
	      pathCache.put(path, hit)
	    }
	  }
	  return hit
	}
	
	/**
	 * Get from an object from a path string
	 *
	 * @param {Object} obj
	 * @param {String} path
	 */
	
	exports.get = function (obj, path) {
	  path = exports.parse(path)
	  if (path) {
	    return path.get(obj)
	  }
	}
	
	/**
	 * Set on an object from a path
	 *
	 * @param {Object} obj
	 * @param {String | Array} path
	 * @param {*} val
	 */
	
	exports.set = function (obj, path, val) {
	  var original = obj
	  if (typeof path === 'string') {
	    path = exports.parse(path)
	  }
	  if (!path || !_.isObject(obj)) {
	    return false
	  }
	  var last, key
	  for (var i = 0, l = path.length; i < l; i++) {
	    last = obj
	    key = path[i]
	    if (key.charAt(0) === '*') {
	      key = original[key.slice(1)]
	    }
	    if (i < l - 1) {
	      obj = obj[key]
	      if (!_.isObject(obj)) {
	        warnNonExistent(path)
	        obj = {}
	        last.$add(key, obj)
	      }
	    } else {
	      if (_.isArray(obj)) {
	        obj.$set(key, val)
	      } else if (key in obj) {
	        obj[key] = val
	      } else {
	        warnNonExistent(path)
	        obj.$add(key, val)
	      }
	    }
	  }
	  return true
	}
	
	function warnNonExistent (path) {
	  process.env.NODE_ENV !== 'production' && _.warn(
	    'You are setting a non-existent path "' + path.raw + '" ' +
	    'on a vm instance. Consider pre-initializing the property ' +
	    'with the "data" option for more reliable reactivity ' +
	    'and better performance.'
	  )
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(22)))

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var _ = __webpack_require__(20)
	var config = __webpack_require__(23)
	
	// we have two separate queues: one for directive updates
	// and one for user watcher registered via $watch().
	// we want to guarantee directive updates to be called
	// before user watchers so that when user watchers are
	// triggered, the DOM would have already been in updated
	// state.
	var queue = []
	var userQueue = []
	var has = {}
	var circular = {}
	var waiting = false
	var internalQueueDepleted = false
	
	/**
	 * Reset the batcher's state.
	 */
	
	function reset () {
	  queue = []
	  userQueue = []
	  has = {}
	  circular = {}
	  waiting = internalQueueDepleted = false
	}
	
	/**
	 * Flush both queues and run the watchers.
	 */
	
	function flush () {
	  run(queue)
	  internalQueueDepleted = true
	  run(userQueue)
	  reset()
	}
	
	/**
	 * Run the watchers in a single queue.
	 *
	 * @param {Array} queue
	 */
	
	function run (queue) {
	  // do not cache length because more watchers might be pushed
	  // as we run existing watchers
	  for (var i = 0; i < queue.length; i++) {
	    var watcher = queue[i]
	    var id = watcher.id
	    has[id] = null
	    watcher.run()
	    // in dev build, check and stop circular updates.
	    if (process.env.NODE_ENV !== 'production' && has[id] != null) {
	      circular[id] = (circular[id] || 0) + 1
	      if (circular[id] > config._maxUpdateCount) {
	        queue.splice(has[id], 1)
	        _.warn(
	          'You may have an infinite update loop for watcher ' +
	          'with expression: ' + watcher.expression
	        )
	      }
	    }
	  }
	}
	
	/**
	 * Push a watcher into the watcher queue.
	 * Jobs with duplicate IDs will be skipped unless it's
	 * pushed when the queue is being flushed.
	 *
	 * @param {Watcher} watcher
	 *   properties:
	 *   - {Number} id
	 *   - {Function} run
	 */
	
	exports.push = function (watcher) {
	  var id = watcher.id
	  if (has[id] == null) {
	    // if an internal watcher is pushed, but the internal
	    // queue is already depleted, we run it immediately.
	    if (internalQueueDepleted && !watcher.user) {
	      watcher.run()
	      return
	    }
	    // push watcher into appropriate queue
	    var q = watcher.user ? userQueue : queue
	    has[id] = q.length
	    q.push(watcher)
	    // queue the flush
	    if (!waiting) {
	      waiting = true
	      _.nextTick(flush)
	    }
	  }
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(22)))

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(20)
	var Cache = __webpack_require__(31)
	var templateCache = new Cache(1000)
	var idSelectorCache = new Cache(1000)
	
	var map = {
	  _default: [0, '', ''],
	  legend: [1, '<fieldset>', '</fieldset>'],
	  tr: [2, '<table><tbody>', '</tbody></table>'],
	  col: [
	    2,
	    '<table><tbody></tbody><colgroup>',
	    '</colgroup></table>'
	  ]
	}
	
	map.td =
	map.th = [
	  3,
	  '<table><tbody><tr>',
	  '</tr></tbody></table>'
	]
	
	map.option =
	map.optgroup = [
	  1,
	  '<select multiple="multiple">',
	  '</select>'
	]
	
	map.thead =
	map.tbody =
	map.colgroup =
	map.caption =
	map.tfoot = [1, '<table>', '</table>']
	
	map.g =
	map.defs =
	map.symbol =
	map.use =
	map.image =
	map.text =
	map.circle =
	map.ellipse =
	map.line =
	map.path =
	map.polygon =
	map.polyline =
	map.rect = [
	  1,
	  '<svg ' +
	    'xmlns="http://www.w3.org/2000/svg" ' +
	    'xmlns:xlink="http://www.w3.org/1999/xlink" ' +
	    'xmlns:ev="http://www.w3.org/2001/xml-events"' +
	    'version="1.1">',
	  '</svg>'
	]
	
	var tagRE = /<([\w:]+)/
	var entityRE = /&\w+;/
	
	/**
	 * Convert a string template to a DocumentFragment.
	 * Determines correct wrapping by tag types. Wrapping
	 * strategy found in jQuery & component/domify.
	 *
	 * @param {String} templateString
	 * @return {DocumentFragment}
	 */
	
	function stringToFragment (templateString) {
	  // try a cache hit first
	  var hit = templateCache.get(templateString)
	  if (hit) {
	    return hit
	  }
	
	  var frag = document.createDocumentFragment()
	  var tagMatch = templateString.match(tagRE)
	  var entityMatch = entityRE.test(templateString)
	
	  if (!tagMatch && !entityMatch) {
	    // text only, return a single text node.
	    frag.appendChild(
	      document.createTextNode(templateString)
	    )
	  } else {
	
	    var tag = tagMatch && tagMatch[1]
	    var wrap = map[tag] || map._default
	    var depth = wrap[0]
	    var prefix = wrap[1]
	    var suffix = wrap[2]
	    var node = document.createElement('div')
	
	    node.innerHTML = prefix + templateString.trim() + suffix
	    while (depth--) {
	      node = node.lastChild
	    }
	
	    var child
	    /* eslint-disable no-cond-assign */
	    while (child = node.firstChild) {
	    /* eslint-enable no-cond-assign */
	      frag.appendChild(child)
	    }
	  }
	
	  templateCache.put(templateString, frag)
	  return frag
	}
	
	/**
	 * Convert a template node to a DocumentFragment.
	 *
	 * @param {Node} node
	 * @return {DocumentFragment}
	 */
	
	function nodeToFragment (node) {
	  // if its a template tag and the browser supports it,
	  // its content is already a document fragment.
	  if (
	    _.isTemplate(node) &&
	    node.content instanceof DocumentFragment
	  ) {
	    return node.content
	  }
	  // script template
	  if (node.tagName === 'SCRIPT') {
	    return stringToFragment(node.textContent)
	  }
	  // normal node, clone it to avoid mutating the original
	  var clone = exports.clone(node)
	  var frag = document.createDocumentFragment()
	  var child
	  /* eslint-disable no-cond-assign */
	  while (child = clone.firstChild) {
	  /* eslint-enable no-cond-assign */
	    frag.appendChild(child)
	  }
	  return frag
	}
	
	// Test for the presence of the Safari template cloning bug
	// https://bugs.webkit.org/show_bug.cgi?id=137755
	var hasBrokenTemplate = _.inBrowser
	  ? (function () {
	      var a = document.createElement('div')
	      a.innerHTML = '<template>1</template>'
	      return !a.cloneNode(true).firstChild.innerHTML
	    })()
	  : false
	
	// Test for IE10/11 textarea placeholder clone bug
	var hasTextareaCloneBug = _.inBrowser
	  ? (function () {
	      var t = document.createElement('textarea')
	      t.placeholder = 't'
	      return t.cloneNode(true).value === 't'
	    })()
	  : false
	
	/**
	 * 1. Deal with Safari cloning nested <template> bug by
	 *    manually cloning all template instances.
	 * 2. Deal with IE10/11 textarea placeholder bug by setting
	 *    the correct value after cloning.
	 *
	 * @param {Element|DocumentFragment} node
	 * @return {Element|DocumentFragment}
	 */
	
	exports.clone = function (node) {
	  var res = node.cloneNode(true)
	  if (!node.querySelectorAll) {
	    return res
	  }
	  var i, original, cloned
	  /* istanbul ignore if */
	  if (hasBrokenTemplate) {
	    original = node.querySelectorAll('template')
	    if (original.length) {
	      cloned = res.querySelectorAll('template')
	      i = cloned.length
	      while (i--) {
	        cloned[i].parentNode.replaceChild(
	          exports.clone(original[i]),
	          cloned[i]
	        )
	      }
	    }
	  }
	  /* istanbul ignore if */
	  if (hasTextareaCloneBug) {
	    if (node.tagName === 'TEXTAREA') {
	      res.value = node.value
	    } else {
	      original = node.querySelectorAll('textarea')
	      if (original.length) {
	        cloned = res.querySelectorAll('textarea')
	        i = cloned.length
	        while (i--) {
	          cloned[i].value = original[i].value
	        }
	      }
	    }
	  }
	  return res
	}
	
	/**
	 * Process the template option and normalizes it into a
	 * a DocumentFragment that can be used as a partial or a
	 * instance template.
	 *
	 * @param {*} template
	 *    Possible values include:
	 *    - DocumentFragment object
	 *    - Node object of type Template
	 *    - id selector: '#some-template-id'
	 *    - template string: '<div><span>{{msg}}</span></div>'
	 * @param {Boolean} clone
	 * @param {Boolean} noSelector
	 * @return {DocumentFragment|undefined}
	 */
	
	exports.parse = function (template, clone, noSelector) {
	  var node, frag
	
	  // if the template is already a document fragment,
	  // do nothing
	  if (template instanceof DocumentFragment) {
	    return clone
	      ? exports.clone(template)
	      : template
	  }
	
	  if (typeof template === 'string') {
	    // id selector
	    if (!noSelector && template.charAt(0) === '#') {
	      // id selector can be cached too
	      frag = idSelectorCache.get(template)
	      if (!frag) {
	        node = document.getElementById(template.slice(1))
	        if (node) {
	          frag = nodeToFragment(node)
	          // save selector to cache
	          idSelectorCache.put(template, frag)
	        }
	      }
	    } else {
	      // normal string template
	      frag = stringToFragment(template)
	    }
	  } else if (template.nodeType) {
	    // a direct node
	    frag = nodeToFragment(template)
	  }
	
	  return frag && clone
	    ? exports.clone(frag)
	    : frag
	}


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var _ = __webpack_require__(20)
	var config = __webpack_require__(23)
	var templateParser = __webpack_require__(42)
	
	module.exports = {
	
	  isLiteral: true,
	
	  /**
	   * Setup. Two possible usages:
	   *
	   * - static:
	   *   v-component="comp"
	   *
	   * - dynamic:
	   *   v-component="{{currentView}}"
	   */
	
	  bind: function () {
	    if (!this.el.__vue__) {
	      // create a ref anchor
	      this.anchor = _.createAnchor('v-component')
	      _.replace(this.el, this.anchor)
	      // check keep-alive options.
	      // If yes, instead of destroying the active vm when
	      // hiding (v-if) or switching (dynamic literal) it,
	      // we simply remove it from the DOM and save it in a
	      // cache object, with its constructor id as the key.
	      this.keepAlive = this._checkParam('keep-alive') != null
	      // wait for event before insertion
	      this.readyEvent = this._checkParam('wait-for')
	      // check ref
	      this.refID = this._checkParam(config.prefix + 'ref')
	      if (this.keepAlive) {
	        this.cache = {}
	      }
	      // check inline-template
	      if (this._checkParam('inline-template') !== null) {
	        // extract inline template as a DocumentFragment
	        this.template = _.extractContent(this.el, true)
	      }
	      // component resolution related state
	      this._pendingCb =
	      this.componentID =
	      this.Component = null
	      // if static, build right now.
	      if (!this._isDynamicLiteral) {
	        this.resolveComponent(this.expression, _.bind(this.initStatic, this))
	      } else {
	        // check dynamic component params
	        this.transMode = this._checkParam('transition-mode')
	      }
	    } else {
	      process.env.NODE_ENV !== 'production' && _.warn(
	        'cannot mount component "' + this.expression + '" ' +
	        'on already mounted element: ' + this.el
	      )
	    }
	  },
	
	  /**
	   * Initialize a static component.
	   */
	
	  initStatic: function () {
	    var child = this.build()
	    var anchor = this.anchor
	    this.setCurrent(child)
	    if (!this.readyEvent) {
	      child.$before(anchor)
	    } else {
	      child.$once(this.readyEvent, function () {
	        child.$before(anchor)
	      })
	    }
	  },
	
	  /**
	   * Public update, called by the watcher in the dynamic
	   * literal scenario, e.g. v-component="{{view}}"
	   */
	
	  update: function (value) {
	    this.setComponent(value)
	  },
	
	  /**
	   * Switch dynamic components. May resolve the component
	   * asynchronously, and perform transition based on
	   * specified transition mode. Accepts a few additional
	   * arguments specifically for vue-router.
	   *
	   * @param {String} value
	   * @param {Object} data
	   * @param {Function} afterBuild
	   * @param {Function} afterTransition
	   */
	
	  setComponent: function (value, data, afterBuild, afterTransition) {
	    this.invalidatePending()
	    if (!value) {
	      // just remove current
	      this.unbuild(true)
	      this.remove(this.childVM, afterTransition)
	      this.unsetCurrent()
	    } else {
	      this.resolveComponent(value, _.bind(function () {
	        this.unbuild(true)
	        var newComponent = this.build(data)
	        /* istanbul ignore if */
	        if (afterBuild) afterBuild(newComponent)
	        var self = this
	        if (this.readyEvent) {
	          newComponent.$once(this.readyEvent, function () {
	            self.transition(newComponent, afterTransition)
	          })
	        } else {
	          this.transition(newComponent, afterTransition)
	        }
	      }, this))
	    }
	  },
	
	  /**
	   * Resolve the component constructor to use when creating
	   * the child vm.
	   */
	
	  resolveComponent: function (id, cb) {
	    var self = this
	    this._pendingCb = _.cancellable(function (component) {
	      self.componentID = id
	      self.Component = component
	      cb()
	    })
	    this.vm._resolveComponent(id, this._pendingCb)
	  },
	
	  /**
	   * When the component changes or unbinds before an async
	   * constructor is resolved, we need to invalidate its
	   * pending callback.
	   */
	
	  invalidatePending: function () {
	    if (this._pendingCb) {
	      this._pendingCb.cancel()
	      this._pendingCb = null
	    }
	  },
	
	  /**
	   * Instantiate/insert a new child vm.
	   * If keep alive and has cached instance, insert that
	   * instance; otherwise build a new one and cache it.
	   *
	   * @param {Object} [data]
	   * @return {Vue} - the created instance
	   */
	
	  build: function (data) {
	    if (this.keepAlive) {
	      var cached = this.cache[this.componentID]
	      if (cached) {
	        return cached
	      }
	    }
	    if (this.Component) {
	      var parent = this._host || this.vm
	      var el = templateParser.clone(this.el)
	      var child = parent.$addChild({
	        el: el,
	        data: data,
	        template: this.template,
	        // if no inline-template, then the compiled
	        // linker can be cached for better performance.
	        _linkerCachable: !this.template,
	        _asComponent: true,
	        _isRouterView: this._isRouterView,
	        _context: this.vm
	      }, this.Component)
	      if (this.keepAlive) {
	        this.cache[this.componentID] = child
	      }
	      return child
	    }
	  },
	
	  /**
	   * Teardown the current child, but defers cleanup so
	   * that we can separate the destroy and removal steps.
	   *
	   * @param {Boolean} defer
	   */
	
	  unbuild: function (defer) {
	    var child = this.childVM
	    if (!child || this.keepAlive) {
	      return
	    }
	    // the sole purpose of `deferCleanup` is so that we can
	    // "deactivate" the vm right now and perform DOM removal
	    // later.
	    child.$destroy(false, defer)
	  },
	
	  /**
	   * Remove current destroyed child and manually do
	   * the cleanup after removal.
	   *
	   * @param {Function} cb
	   */
	
	  remove: function (child, cb) {
	    var keepAlive = this.keepAlive
	    if (child) {
	      child.$remove(function () {
	        if (!keepAlive) child._cleanup()
	        if (cb) cb()
	      })
	    } else if (cb) {
	      cb()
	    }
	  },
	
	  /**
	   * Actually swap the components, depending on the
	   * transition mode. Defaults to simultaneous.
	   *
	   * @param {Vue} target
	   * @param {Function} [cb]
	   */
	
	  transition: function (target, cb) {
	    var self = this
	    var current = this.childVM
	    this.unsetCurrent()
	    this.setCurrent(target)
	    switch (self.transMode) {
	      case 'in-out':
	        target.$before(self.anchor, function () {
	          self.remove(current, cb)
	        })
	        break
	      case 'out-in':
	        self.remove(current, function () {
	          if (!target._isDestroyed) {
	            target.$before(self.anchor, cb)
	          }
	        })
	        break
	      default:
	        self.remove(current)
	        target.$before(self.anchor, cb)
	    }
	  },
	
	  /**
	   * Set childVM and parent ref
	   */
	
	  setCurrent: function (child) {
	    this.childVM = child
	    var refID = child._refID || this.refID
	    if (refID) {
	      this.vm.$[refID] = child
	    }
	  },
	
	  /**
	   * Unset childVM and parent ref
	   */
	
	  unsetCurrent: function () {
	    var child = this.childVM
	    this.childVM = null
	    var refID = (child && child._refID) || this.refID
	    if (refID) {
	      this.vm.$[refID] = null
	    }
	  },
	
	  /**
	   * Unbind.
	   */
	
	  unbind: function () {
	    this.invalidatePending()
	    // Do not defer cleanup when unbinding
	    this.unbuild()
	    this.unsetCurrent()
	    // destroy all keep-alive cached instances
	    if (this.cache) {
	      for (var key in this.cache) {
	        this.cache[key].$destroy()
	      }
	      this.cache = null
	    }
	  }
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(22)))

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var _ = __webpack_require__(20)
	var config = __webpack_require__(23)
	var templateParser = __webpack_require__(42)
	
	/**
	 * Process an element or a DocumentFragment based on a
	 * instance option object. This allows us to transclude
	 * a template node/fragment before the instance is created,
	 * so the processed fragment can then be cloned and reused
	 * in v-repeat.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */
	
	exports.transclude = function (el, options) {
	  // extract container attributes to pass them down
	  // to compiler, because they need to be compiled in
	  // parent scope. we are mutating the options object here
	  // assuming the same object will be used for compile
	  // right after this.
	  if (options) {
	    options._containerAttrs = extractAttrs(el)
	  }
	  // for template tags, what we want is its content as
	  // a documentFragment (for fragment instances)
	  if (_.isTemplate(el)) {
	    el = templateParser.parse(el)
	  }
	  if (options) {
	    if (options._asComponent && !options.template) {
	      options.template = '<content></content>'
	    }
	    if (options.template) {
	      options._content = _.extractContent(el)
	      el = transcludeTemplate(el, options)
	    }
	  }
	  if (el instanceof DocumentFragment) {
	    // anchors for fragment instance
	    // passing in `persist: true` to avoid them being
	    // discarded by IE during template cloning
	    _.prepend(_.createAnchor('v-start', true), el)
	    el.appendChild(_.createAnchor('v-end', true))
	  }
	  return el
	}
	
	/**
	 * Process the template option.
	 * If the replace option is true this will swap the $el.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */
	
	function transcludeTemplate (el, options) {
	  var template = options.template
	  var frag = templateParser.parse(template, true)
	  if (frag) {
	    var replacer = frag.firstChild
	    var tag = replacer.tagName && replacer.tagName.toLowerCase()
	    if (options.replace) {
	      /* istanbul ignore if */
	      if (el === document.body) {
	        process.env.NODE_ENV !== 'production' && _.warn(
	          'You are mounting an instance with a template to ' +
	          '<body>. This will replace <body> entirely. You ' +
	          'should probably use `replace: false` here.'
	        )
	      }
	      // there are many cases where the instance must
	      // become a fragment instance: basically anything that
	      // can create more than 1 root nodes.
	      if (
	        // multi-children template
	        frag.childNodes.length > 1 ||
	        // non-element template
	        replacer.nodeType !== 1 ||
	        // single nested component
	        tag === 'component' ||
	        _.resolveAsset(options, 'components', tag) ||
	        replacer.hasAttribute(config.prefix + 'component') ||
	        // element directive
	        _.resolveAsset(options, 'elementDirectives', tag) ||
	        // repeat block
	        replacer.hasAttribute(config.prefix + 'repeat')
	      ) {
	        return frag
	      } else {
	        options._replacerAttrs = extractAttrs(replacer)
	        mergeAttrs(el, replacer)
	        return replacer
	      }
	    } else {
	      el.appendChild(frag)
	      return el
	    }
	  } else {
	    process.env.NODE_ENV !== 'production' && _.warn(
	      'Invalid template option: ' + template
	    )
	  }
	}
	
	/**
	 * Helper to extract a component container's attributes
	 * into a plain object array.
	 *
	 * @param {Element} el
	 * @return {Array}
	 */
	
	function extractAttrs (el) {
	  if (el.nodeType === 1 && el.hasAttributes()) {
	    return _.toArray(el.attributes)
	  }
	}
	
	/**
	 * Merge the attributes of two elements, and make sure
	 * the class names are merged properly.
	 *
	 * @param {Element} from
	 * @param {Element} to
	 */
	
	function mergeAttrs (from, to) {
	  var attrs = from.attributes
	  var i = attrs.length
	  var name, value
	  while (i--) {
	    name = attrs[i].name
	    value = attrs[i].value
	    if (!to.hasAttribute(name)) {
	      to.setAttribute(name, value)
	    } else if (name === 'class') {
	      value = to.getAttribute(name) + ' ' + value
	      to.setAttribute(name, value)
	    }
	  }
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(22)))

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	// manipulation directives
	exports.text = __webpack_require__(47)
	exports.html = __webpack_require__(48)
	exports.attr = __webpack_require__(49)
	exports.show = __webpack_require__(50)
	exports['class'] = __webpack_require__(52)
	exports.el = __webpack_require__(53)
	exports.ref = __webpack_require__(54)
	exports.cloak = __webpack_require__(55)
	exports.style = __webpack_require__(46)
	exports.transition = __webpack_require__(56)
	
	// event listener directives
	exports.on = __webpack_require__(59)
	exports.model = __webpack_require__(60)
	
	// logic control directives
	exports.repeat = __webpack_require__(65)
	exports['if'] = __webpack_require__(66)
	
	// internal directives that should not be used directly
	// but we still want to expose them for advanced usage.
	exports._component = __webpack_require__(43)
	exports._prop = __webpack_require__(36)


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(20)
	var prefixes = ['-webkit-', '-moz-', '-ms-']
	var camelPrefixes = ['Webkit', 'Moz', 'ms']
	var importantRE = /!important;?$/
	var camelRE = /([a-z])([A-Z])/g
	var testEl = null
	var propCache = {}
	
	module.exports = {
	
	  deep: true,
	
	  update: function (value) {
	    if (this.arg) {
	      this.setProp(this.arg, value)
	    } else {
	      if (typeof value === 'object') {
	        this.objectHandler(value)
	      } else {
	        this.el.style.cssText = value
	      }
	    }
	  },
	
	  objectHandler: function (value) {
	    // cache object styles so that only changed props
	    // are actually updated.
	    var cache = this.cache || (this.cache = {})
	    var prop, val
	    for (prop in cache) {
	      if (!(prop in value)) {
	        this.setProp(prop, null)
	        delete cache[prop]
	      }
	    }
	    for (prop in value) {
	      val = value[prop]
	      if (val !== cache[prop]) {
	        cache[prop] = val
	        this.setProp(prop, val)
	      }
	    }
	  },
	
	  setProp: function (prop, value) {
	    prop = normalize(prop)
	    if (!prop) return // unsupported prop
	    // cast possible numbers/booleans into strings
	    if (value != null) value += ''
	    if (value) {
	      var isImportant = importantRE.test(value)
	        ? 'important'
	        : ''
	      if (isImportant) {
	        value = value.replace(importantRE, '').trim()
	      }
	      this.el.style.setProperty(prop, value, isImportant)
	    } else {
	      this.el.style.removeProperty(prop)
	    }
	  }
	
	}
	
	/**
	 * Normalize a CSS property name.
	 * - cache result
	 * - auto prefix
	 * - camelCase -> dash-case
	 *
	 * @param {String} prop
	 * @return {String}
	 */
	
	function normalize (prop) {
	  if (propCache[prop]) {
	    return propCache[prop]
	  }
	  var res = prefix(prop)
	  propCache[prop] = propCache[res] = res
	  return res
	}
	
	/**
	 * Auto detect the appropriate prefix for a CSS property.
	 * https://gist.github.com/paulirish/523692
	 *
	 * @param {String} prop
	 * @return {String}
	 */
	
	function prefix (prop) {
	  prop = prop.replace(camelRE, '$1-$2').toLowerCase()
	  var camel = _.camelize(prop)
	  var upper = camel.charAt(0).toUpperCase() + camel.slice(1)
	  if (!testEl) {
	    testEl = document.createElement('div')
	  }
	  if (camel in testEl.style) {
	    return prop
	  }
	  var i = prefixes.length
	  var prefixed
	  while (i--) {
	    prefixed = camelPrefixes[i] + upper
	    if (prefixed in testEl.style) {
	      return prefixes[i] + prop
	    }
	  }
	}


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(20)
	
	module.exports = {
	
	  bind: function () {
	    this.attr = this.el.nodeType === 3
	      ? 'data'
	      : 'textContent'
	  },
	
	  update: function (value) {
	    this.el[this.attr] = _.toString(value)
	  }
	}


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(20)
	var templateParser = __webpack_require__(42)
	
	module.exports = {
	
	  bind: function () {
	    // a comment node means this is a binding for
	    // {{{ inline unescaped html }}}
	    if (this.el.nodeType === 8) {
	      // hold nodes
	      this.nodes = []
	      // replace the placeholder with proper anchor
	      this.anchor = _.createAnchor('v-html')
	      _.replace(this.el, this.anchor)
	    }
	  },
	
	  update: function (value) {
	    value = _.toString(value)
	    if (this.nodes) {
	      this.swap(value)
	    } else {
	      this.el.innerHTML = value
	    }
	  },
	
	  swap: function (value) {
	    // remove old nodes
	    var i = this.nodes.length
	    while (i--) {
	      _.remove(this.nodes[i])
	    }
	    // convert new value to a fragment
	    // do not attempt to retrieve from id selector
	    var frag = templateParser.parse(value, true, true)
	    // save a reference to these nodes so we can remove later
	    this.nodes = _.toArray(frag.childNodes)
	    _.before(frag, this.anchor)
	  }
	}


/***/ },
/* 49 */
/***/ function(module, exports) {

	// xlink
	var xlinkNS = 'http://www.w3.org/1999/xlink'
	var xlinkRE = /^xlink:/
	
	module.exports = {
	
	  priority: 850,
	
	  update: function (value) {
	    if (this.arg) {
	      this.setAttr(this.arg, value)
	    } else if (typeof value === 'object') {
	      this.objectHandler(value)
	    }
	  },
	
	  objectHandler: function (value) {
	    // cache object attrs so that only changed attrs
	    // are actually updated.
	    var cache = this.cache || (this.cache = {})
	    var attr, val
	    for (attr in cache) {
	      if (!(attr in value)) {
	        this.setAttr(attr, null)
	        delete cache[attr]
	      }
	    }
	    for (attr in value) {
	      val = value[attr]
	      if (val !== cache[attr]) {
	        cache[attr] = val
	        this.setAttr(attr, val)
	      }
	    }
	  },
	
	  setAttr: function (attr, value) {
	    if (value != null && value !== false) {
	      if (xlinkRE.test(attr)) {
	        this.el.setAttributeNS(xlinkNS, attr, value)
	      } else {
	        this.el.setAttribute(attr, value)
	      }
	    } else {
	      this.el.removeAttribute(attr)
	    }
	    if (attr === 'value' && 'value' in this.el) {
	      this.el.value = value
	    }
	  }
	}


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var transition = __webpack_require__(51)
	
	module.exports = function (value) {
	  var el = this.el
	  transition.apply(el, value ? 1 : -1, function () {
	    el.style.display = value ? '' : 'none'
	  }, this.vm)
	}


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(20)
	
	/**
	 * Append with transition.
	 *
	 * @oaram {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	exports.append = function (el, target, vm, cb) {
	  apply(el, 1, function () {
	    target.appendChild(el)
	  }, vm, cb)
	}
	
	/**
	 * InsertBefore with transition.
	 *
	 * @oaram {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	exports.before = function (el, target, vm, cb) {
	  apply(el, 1, function () {
	    _.before(el, target)
	  }, vm, cb)
	}
	
	/**
	 * Remove with transition.
	 *
	 * @oaram {Element} el
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	exports.remove = function (el, vm, cb) {
	  apply(el, -1, function () {
	    _.remove(el)
	  }, vm, cb)
	}
	
	/**
	 * Remove by appending to another parent with transition.
	 * This is only used in block operations.
	 *
	 * @oaram {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	exports.removeThenAppend = function (el, target, vm, cb) {
	  apply(el, -1, function () {
	    target.appendChild(el)
	  }, vm, cb)
	}
	
	/**
	 * Append the childNodes of a fragment to target.
	 *
	 * @param {DocumentFragment} block
	 * @param {Node} target
	 * @param {Vue} vm
	 */
	
	exports.blockAppend = function (block, target, vm) {
	  var nodes = _.toArray(block.childNodes)
	  for (var i = 0, l = nodes.length; i < l; i++) {
	    exports.before(nodes[i], target, vm)
	  }
	}
	
	/**
	 * Remove a block of nodes between two edge nodes.
	 *
	 * @param {Node} start
	 * @param {Node} end
	 * @param {Vue} vm
	 */
	
	exports.blockRemove = function (start, end, vm) {
	  var node = start.nextSibling
	  var next
	  while (node !== end) {
	    next = node.nextSibling
	    exports.remove(node, vm)
	    node = next
	  }
	}
	
	/**
	 * Apply transitions with an operation callback.
	 *
	 * @oaram {Element} el
	 * @param {Number} direction
	 *                  1: enter
	 *                 -1: leave
	 * @param {Function} op - the actual DOM operation
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	var apply = exports.apply = function (el, direction, op, vm, cb) {
	  var transition = el.__v_trans
	  if (
	    !transition ||
	    // skip if there are no js hooks and CSS transition is
	    // not supported
	    (!transition.hooks && !_.transitionEndEvent) ||
	    // skip transitions for initial compile
	    !vm._isCompiled ||
	    // if the vm is being manipulated by a parent directive
	    // during the parent's compilation phase, skip the
	    // animation.
	    (vm.$parent && !vm.$parent._isCompiled)
	  ) {
	    op()
	    if (cb) cb()
	    return
	  }
	  var action = direction > 0 ? 'enter' : 'leave'
	  transition[action](op, cb)
	}


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(20)
	var addClass = _.addClass
	var removeClass = _.removeClass
	
	module.exports = {
	
	  bind: function () {
	    // interpolations like class="{{abc}}" are converted
	    // to v-class, and we need to remove the raw,
	    // uninterpolated className at binding time.
	    var raw = this._descriptor._rawClass
	    if (raw) {
	      this.prevKeys = raw.trim().split(/\s+/)
	    }
	  },
	
	  update: function (value) {
	    if (this.arg) {
	      // single toggle
	      if (value) {
	        addClass(this.el, this.arg)
	      } else {
	        removeClass(this.el, this.arg)
	      }
	    } else {
	      if (value && typeof value === 'string') {
	        this.handleObject(stringToObject(value))
	      } else if (_.isPlainObject(value)) {
	        this.handleObject(value)
	      } else {
	        this.cleanup()
	      }
	    }
	  },
	
	  handleObject: function (value) {
	    this.cleanup(value)
	    var keys = this.prevKeys = Object.keys(value)
	    for (var i = 0, l = keys.length; i < l; i++) {
	      var key = keys[i]
	      if (value[key]) {
	        addClass(this.el, key)
	      } else {
	        removeClass(this.el, key)
	      }
	    }
	  },
	
	  cleanup: function (value) {
	    if (this.prevKeys) {
	      var i = this.prevKeys.length
	      while (i--) {
	        var key = this.prevKeys[i]
	        if (!value || !value.hasOwnProperty(key)) {
	          removeClass(this.el, key)
	        }
	      }
	    }
	  }
	}
	
	function stringToObject (value) {
	  var res = {}
	  var keys = value.trim().split(/\s+/)
	  var i = keys.length
	  while (i--) {
	    res[keys[i]] = true
	  }
	  return res
	}


/***/ },
/* 53 */
/***/ function(module, exports) {

	module.exports = {
	
	  isLiteral: true,
	
	  bind: function () {
	    this.vm.$$[this.expression] = this.el
	  },
	
	  unbind: function () {
	    delete this.vm.$$[this.expression]
	  }
	}


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var _ = __webpack_require__(20)
	
	module.exports = {
	
	  isLiteral: true,
	
	  bind: function () {
	    var vm = this.el.__vue__
	    if (!vm) {
	      process.env.NODE_ENV !== 'production' && _.warn(
	        'v-ref should only be used on a component root element.'
	      )
	      return
	    }
	    // If we get here, it means this is a `v-ref` on a
	    // child, because parent scope `v-ref` is stripped in
	    // `v-component` already. So we just record our own ref
	    // here - it will overwrite parent ref in `v-component`,
	    // if any.
	    vm._refID = this.expression
	  }
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(22)))

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var config = __webpack_require__(23)
	
	module.exports = {
	  bind: function () {
	    var el = this.el
	    this.vm.$once('hook:compiled', function () {
	      el.removeAttribute(config.prefix + 'cloak')
	    })
	  }
	}


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(20)
	var Transition = __webpack_require__(57)
	
	module.exports = {
	
	  priority: 1000,
	  isLiteral: true,
	
	  bind: function () {
	    if (!this._isDynamicLiteral) {
	      this.update(this.expression)
	    }
	  },
	
	  update: function (id, oldId) {
	    var el = this.el
	    var vm = this.el.__vue__ || this.vm
	    var hooks = _.resolveAsset(vm.$options, 'transitions', id)
	    id = id || 'v'
	    el.__v_trans = new Transition(el, id, hooks, vm)
	    if (oldId) {
	      _.removeClass(el, oldId + '-transition')
	    }
	    _.addClass(el, id + '-transition')
	  }
	}


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(20)
	var queue = __webpack_require__(58)
	var addClass = _.addClass
	var removeClass = _.removeClass
	var transitionEndEvent = _.transitionEndEvent
	var animationEndEvent = _.animationEndEvent
	var transDurationProp = _.transitionProp + 'Duration'
	var animDurationProp = _.animationProp + 'Duration'
	
	var TYPE_TRANSITION = 1
	var TYPE_ANIMATION = 2
	
	/**
	 * A Transition object that encapsulates the state and logic
	 * of the transition.
	 *
	 * @param {Element} el
	 * @param {String} id
	 * @param {Object} hooks
	 * @param {Vue} vm
	 */
	
	function Transition (el, id, hooks, vm) {
	  this.el = el
	  this.enterClass = id + '-enter'
	  this.leaveClass = id + '-leave'
	  this.hooks = hooks
	  this.vm = vm
	  // async state
	  this.pendingCssEvent =
	  this.pendingCssCb =
	  this.cancel =
	  this.pendingJsCb =
	  this.op =
	  this.cb = null
	  this.typeCache = {}
	  // bind
	  var self = this
	  ;['enterNextTick', 'enterDone', 'leaveNextTick', 'leaveDone']
	    .forEach(function (m) {
	      self[m] = _.bind(self[m], self)
	    })
	}
	
	var p = Transition.prototype
	
	/**
	 * Start an entering transition.
	 *
	 * 1. enter transition triggered
	 * 2. call beforeEnter hook
	 * 3. add enter class
	 * 4. insert/show element
	 * 5. call enter hook (with possible explicit js callback)
	 * 6. reflow
	 * 7. based on transition type:
	 *    - transition:
	 *        remove class now, wait for transitionend,
	 *        then done if there's no explicit js callback.
	 *    - animation:
	 *        wait for animationend, remove class,
	 *        then done if there's no explicit js callback.
	 *    - no css transition:
	 *        done now if there's no explicit js callback.
	 * 8. wait for either done or js callback, then call
	 *    afterEnter hook.
	 *
	 * @param {Function} op - insert/show the element
	 * @param {Function} [cb]
	 */
	
	p.enter = function (op, cb) {
	  this.cancelPending()
	  this.callHook('beforeEnter')
	  this.cb = cb
	  addClass(this.el, this.enterClass)
	  op()
	  this.callHookWithCb('enter')
	  this.cancel = this.hooks && this.hooks.enterCancelled
	  queue.push(this.enterNextTick)
	}
	
	/**
	 * The "nextTick" phase of an entering transition, which is
	 * to be pushed into a queue and executed after a reflow so
	 * that removing the class can trigger a CSS transition.
	 */
	
	p.enterNextTick = function () {
	  var type = this.getCssTransitionType(this.enterClass)
	  var enterDone = this.enterDone
	  if (type === TYPE_TRANSITION) {
	    // trigger transition by removing enter class now
	    removeClass(this.el, this.enterClass)
	    this.setupCssCb(transitionEndEvent, enterDone)
	  } else if (type === TYPE_ANIMATION) {
	    this.setupCssCb(animationEndEvent, enterDone)
	  } else if (!this.pendingJsCb) {
	    enterDone()
	  }
	}
	
	/**
	 * The "cleanup" phase of an entering transition.
	 */
	
	p.enterDone = function () {
	  this.cancel = this.pendingJsCb = null
	  removeClass(this.el, this.enterClass)
	  this.callHook('afterEnter')
	  if (this.cb) this.cb()
	}
	
	/**
	 * Start a leaving transition.
	 *
	 * 1. leave transition triggered.
	 * 2. call beforeLeave hook
	 * 3. add leave class (trigger css transition)
	 * 4. call leave hook (with possible explicit js callback)
	 * 5. reflow if no explicit js callback is provided
	 * 6. based on transition type:
	 *    - transition or animation:
	 *        wait for end event, remove class, then done if
	 *        there's no explicit js callback.
	 *    - no css transition:
	 *        done if there's no explicit js callback.
	 * 7. wait for either done or js callback, then call
	 *    afterLeave hook.
	 *
	 * @param {Function} op - remove/hide the element
	 * @param {Function} [cb]
	 */
	
	p.leave = function (op, cb) {
	  this.cancelPending()
	  this.callHook('beforeLeave')
	  this.op = op
	  this.cb = cb
	  addClass(this.el, this.leaveClass)
	  this.callHookWithCb('leave')
	  this.cancel = this.hooks && this.hooks.leaveCancelled
	  // only need to do leaveNextTick if there's no explicit
	  // js callback
	  if (!this.pendingJsCb) {
	    queue.push(this.leaveNextTick)
	  }
	}
	
	/**
	 * The "nextTick" phase of a leaving transition.
	 */
	
	p.leaveNextTick = function () {
	  var type = this.getCssTransitionType(this.leaveClass)
	  if (type) {
	    var event = type === TYPE_TRANSITION
	      ? transitionEndEvent
	      : animationEndEvent
	    this.setupCssCb(event, this.leaveDone)
	  } else {
	    this.leaveDone()
	  }
	}
	
	/**
	 * The "cleanup" phase of a leaving transition.
	 */
	
	p.leaveDone = function () {
	  this.cancel = this.pendingJsCb = null
	  this.op()
	  removeClass(this.el, this.leaveClass)
	  this.callHook('afterLeave')
	  if (this.cb) this.cb()
	}
	
	/**
	 * Cancel any pending callbacks from a previously running
	 * but not finished transition.
	 */
	
	p.cancelPending = function () {
	  this.op = this.cb = null
	  var hasPending = false
	  if (this.pendingCssCb) {
	    hasPending = true
	    _.off(this.el, this.pendingCssEvent, this.pendingCssCb)
	    this.pendingCssEvent = this.pendingCssCb = null
	  }
	  if (this.pendingJsCb) {
	    hasPending = true
	    this.pendingJsCb.cancel()
	    this.pendingJsCb = null
	  }
	  if (hasPending) {
	    removeClass(this.el, this.enterClass)
	    removeClass(this.el, this.leaveClass)
	  }
	  if (this.cancel) {
	    this.cancel.call(this.vm, this.el)
	    this.cancel = null
	  }
	}
	
	/**
	 * Call a user-provided synchronous hook function.
	 *
	 * @param {String} type
	 */
	
	p.callHook = function (type) {
	  if (this.hooks && this.hooks[type]) {
	    this.hooks[type].call(this.vm, this.el)
	  }
	}
	
	/**
	 * Call a user-provided, potentially-async hook function.
	 * We check for the length of arguments to see if the hook
	 * expects a `done` callback. If true, the transition's end
	 * will be determined by when the user calls that callback;
	 * otherwise, the end is determined by the CSS transition or
	 * animation.
	 *
	 * @param {String} type
	 */
	
	p.callHookWithCb = function (type) {
	  var hook = this.hooks && this.hooks[type]
	  if (hook) {
	    if (hook.length > 1) {
	      this.pendingJsCb = _.cancellable(this[type + 'Done'])
	    }
	    hook.call(this.vm, this.el, this.pendingJsCb)
	  }
	}
	
	/**
	 * Get an element's transition type based on the
	 * calculated styles.
	 *
	 * @param {String} className
	 * @return {Number}
	 */
	
	p.getCssTransitionType = function (className) {
	  /* istanbul ignore if */
	  if (
	    !transitionEndEvent ||
	    // skip CSS transitions if page is not visible -
	    // this solves the issue of transitionend events not
	    // firing until the page is visible again.
	    // pageVisibility API is supported in IE10+, same as
	    // CSS transitions.
	    document.hidden ||
	    // explicit js-only transition
	    (this.hooks && this.hooks.css === false)
	  ) {
	    return
	  }
	  var type = this.typeCache[className]
	  if (type) return type
	  var inlineStyles = this.el.style
	  var computedStyles = window.getComputedStyle(this.el)
	  var transDuration =
	    inlineStyles[transDurationProp] ||
	    computedStyles[transDurationProp]
	  if (transDuration && transDuration !== '0s') {
	    type = TYPE_TRANSITION
	  } else {
	    var animDuration =
	      inlineStyles[animDurationProp] ||
	      computedStyles[animDurationProp]
	    if (animDuration && animDuration !== '0s') {
	      type = TYPE_ANIMATION
	    }
	  }
	  if (type) {
	    this.typeCache[className] = type
	  }
	  return type
	}
	
	/**
	 * Setup a CSS transitionend/animationend callback.
	 *
	 * @param {String} event
	 * @param {Function} cb
	 */
	
	p.setupCssCb = function (event, cb) {
	  this.pendingCssEvent = event
	  var self = this
	  var el = this.el
	  var onEnd = this.pendingCssCb = function (e) {
	    if (e.target === el) {
	      _.off(el, event, onEnd)
	      self.pendingCssEvent = self.pendingCssCb = null
	      if (!self.pendingJsCb && cb) {
	        cb()
	      }
	    }
	  }
	  _.on(el, event, onEnd)
	}
	
	module.exports = Transition


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(20)
	var queue = []
	var queued = false
	
	/**
	 * Push a job into the queue.
	 *
	 * @param {Function} job
	 */
	
	exports.push = function (job) {
	  queue.push(job)
	  if (!queued) {
	    queued = true
	    _.nextTick(flush)
	  }
	}
	
	/**
	 * Flush the queue, and do one forced reflow before
	 * triggering transitions.
	 */
	
	function flush () {
	  // Force layout
	  var f = document.documentElement.offsetHeight
	  for (var i = 0; i < queue.length; i++) {
	    queue[i]()
	  }
	  queue = []
	  queued = false
	  // dummy return, so js linters don't complain about
	  // unused variable f
	  return f
	}


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var _ = __webpack_require__(20)
	
	module.exports = {
	
	  acceptStatement: true,
	  priority: 700,
	
	  bind: function () {
	    // deal with iframes
	    if (
	      this.el.tagName === 'IFRAME' &&
	      this.arg !== 'load'
	    ) {
	      var self = this
	      this.iframeBind = function () {
	        _.on(self.el.contentWindow, self.arg, self.handler)
	      }
	      _.on(this.el, 'load', this.iframeBind)
	    }
	  },
	
	  update: function (handler) {
	    if (typeof handler !== 'function') {
	      process.env.NODE_ENV !== 'production' && _.warn(
	        'Directive v-on="' + this.arg + ': ' +
	        this.expression + '" expects a function value, ' +
	        'got ' + handler
	      )
	      return
	    }
	    this.reset()
	    var vm = this.vm
	    this.handler = function (e) {
	      e.targetVM = vm
	      vm.$event = e
	      var res = handler(e)
	      vm.$event = null
	      return res
	    }
	    if (this.iframeBind) {
	      this.iframeBind()
	    } else {
	      _.on(this.el, this.arg, this.handler)
	    }
	  },
	
	  reset: function () {
	    var el = this.iframeBind
	      ? this.el.contentWindow
	      : this.el
	    if (this.handler) {
	      _.off(el, this.arg, this.handler)
	    }
	  },
	
	  unbind: function () {
	    this.reset()
	    _.off(this.el, 'load', this.iframeBind)
	  }
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(22)))

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var _ = __webpack_require__(20)
	
	var handlers = {
	  text: __webpack_require__(61),
	  radio: __webpack_require__(62),
	  select: __webpack_require__(63),
	  checkbox: __webpack_require__(64)
	}
	
	module.exports = {
	
	  priority: 800,
	  twoWay: true,
	  handlers: handlers,
	
	  /**
	   * Possible elements:
	   *   <select>
	   *   <textarea>
	   *   <input type="*">
	   *     - text
	   *     - checkbox
	   *     - radio
	   *     - number
	   *     - TODO: more types may be supplied as a plugin
	   */
	
	  bind: function () {
	    // friendly warning...
	    this.checkFilters()
	    if (this.hasRead && !this.hasWrite) {
	      process.env.NODE_ENV !== 'production' && _.warn(
	        'It seems you are using a read-only filter with ' +
	        'v-model. You might want to use a two-way filter ' +
	        'to ensure correct behavior.'
	      )
	    }
	    var el = this.el
	    var tag = el.tagName
	    var handler
	    if (tag === 'INPUT') {
	      handler = handlers[el.type] || handlers.text
	    } else if (tag === 'SELECT') {
	      handler = handlers.select
	    } else if (tag === 'TEXTAREA') {
	      handler = handlers.text
	    } else {
	      process.env.NODE_ENV !== 'production' && _.warn(
	        'v-model does not support element type: ' + tag
	      )
	      return
	    }
	    handler.bind.call(this)
	    this.update = handler.update
	    this.unbind = handler.unbind
	  },
	
	  /**
	   * Check read/write filter stats.
	   */
	
	  checkFilters: function () {
	    var filters = this.filters
	    if (!filters) return
	    var i = filters.length
	    while (i--) {
	      var filter = _.resolveAsset(this.vm.$options, 'filters', filters[i].name)
	      if (typeof filter === 'function' || filter.read) {
	        this.hasRead = true
	      }
	      if (filter.write) {
	        this.hasWrite = true
	      }
	    }
	  }
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(22)))

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(20)
	
	module.exports = {
	
	  bind: function () {
	    var self = this
	    var el = this.el
	
	    // check params
	    // - lazy: update model on "change" instead of "input"
	    var lazy = this._checkParam('lazy') != null
	    // - number: cast value into number when updating model.
	    var number = this._checkParam('number') != null
	    // - debounce: debounce the input listener
	    var debounce = parseInt(this._checkParam('debounce'), 10)
	
	    // handle composition events.
	    //   http://blog.evanyou.me/2014/01/03/composition-event/
	    // skip this for Android because it handles composition
	    // events quite differently. Android doesn't trigger
	    // composition events for language input methods e.g.
	    // Chinese, but instead triggers them for spelling
	    // suggestions... (see Discussion/#162)
	    var composing = false
	    if (!_.isAndroid) {
	      this.onComposeStart = function () {
	        composing = true
	      }
	      this.onComposeEnd = function () {
	        composing = false
	        // in IE11 the "compositionend" event fires AFTER
	        // the "input" event, so the input handler is blocked
	        // at the end... have to call it here.
	        self.listener()
	      }
	      _.on(el, 'compositionstart', this.onComposeStart)
	      _.on(el, 'compositionend', this.onComposeEnd)
	    }
	
	    function syncToModel () {
	      var val = number
	        ? _.toNumber(el.value)
	        : el.value
	      self.set(val)
	    }
	
	    // if the directive has filters, we need to
	    // record cursor position and restore it after updating
	    // the input with the filtered value.
	    // also force update for type="range" inputs to enable
	    // "lock in range" (see #506)
	    if (this.hasRead || el.type === 'range') {
	      this.listener = function () {
	        if (composing) return
	        var charsOffset
	        // some HTML5 input types throw error here
	        try {
	          // record how many chars from the end of input
	          // the cursor was at
	          charsOffset = el.value.length - el.selectionStart
	        } catch (e) {}
	        // Fix IE10/11 infinite update cycle
	        // https://github.com/yyx990803/vue/issues/592
	        /* istanbul ignore if */
	        if (charsOffset < 0) {
	          return
	        }
	        syncToModel()
	        _.nextTick(function () {
	          // force a value update, because in
	          // certain cases the write filters output the
	          // same result for different input values, and
	          // the Observer set events won't be triggered.
	          var newVal = self._watcher.value
	          self.update(newVal)
	          if (charsOffset != null) {
	            var cursorPos =
	              _.toString(newVal).length - charsOffset
	            el.setSelectionRange(cursorPos, cursorPos)
	          }
	        })
	      }
	    } else {
	      this.listener = function () {
	        if (composing) return
	        syncToModel()
	      }
	    }
	
	    if (debounce) {
	      this.listener = _.debounce(this.listener, debounce)
	    }
	
	    // Now attach the main listener
	
	    this.event = lazy ? 'change' : 'input'
	    // Support jQuery events, since jQuery.trigger() doesn't
	    // trigger native events in some cases and some plugins
	    // rely on $.trigger()
	    //
	    // We want to make sure if a listener is attached using
	    // jQuery, it is also removed with jQuery, that's why
	    // we do the check for each directive instance and
	    // store that check result on itself. This also allows
	    // easier test coverage control by unsetting the global
	    // jQuery variable in tests.
	    this.hasjQuery = typeof jQuery === 'function'
	    if (this.hasjQuery) {
	      jQuery(el).on(this.event, this.listener)
	    } else {
	      _.on(el, this.event, this.listener)
	    }
	
	    // IE9 doesn't fire input event on backspace/del/cut
	    if (!lazy && _.isIE9) {
	      this.onCut = function () {
	        _.nextTick(self.listener)
	      }
	      this.onDel = function (e) {
	        if (e.keyCode === 46 || e.keyCode === 8) {
	          self.listener()
	        }
	      }
	      _.on(el, 'cut', this.onCut)
	      _.on(el, 'keyup', this.onDel)
	    }
	
	    // set initial value if present
	    if (
	      el.hasAttribute('value') ||
	      (el.tagName === 'TEXTAREA' && el.value.trim())
	    ) {
	      this._initValue = number
	        ? _.toNumber(el.value)
	        : el.value
	    }
	  },
	
	  update: function (value) {
	    this.el.value = _.toString(value)
	  },
	
	  unbind: function () {
	    var el = this.el
	    if (this.hasjQuery) {
	      jQuery(el).off(this.event, this.listener)
	    } else {
	      _.off(el, this.event, this.listener)
	    }
	    if (this.onComposeStart) {
	      _.off(el, 'compositionstart', this.onComposeStart)
	      _.off(el, 'compositionend', this.onComposeEnd)
	    }
	    if (this.onCut) {
	      _.off(el, 'cut', this.onCut)
	      _.off(el, 'keyup', this.onDel)
	    }
	  }
	}


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(20)
	
	module.exports = {
	
	  bind: function () {
	    var self = this
	    var el = this.el
	    this.listener = function () {
	      self.set(el.value)
	    }
	    _.on(el, 'change', this.listener)
	    if (el.checked) {
	      this._initValue = el.value
	    }
	  },
	
	  update: function (value) {
	    /* eslint-disable eqeqeq */
	    this.el.checked = value == this.el.value
	    /* eslint-enable eqeqeq */
	  },
	
	  unbind: function () {
	    _.off(this.el, 'change', this.listener)
	  }
	}


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var _ = __webpack_require__(20)
	var Watcher = __webpack_require__(37)
	var dirParser = __webpack_require__(32)
	
	module.exports = {
	
	  bind: function () {
	    var self = this
	    var el = this.el
	    // update DOM using latest value.
	    this.forceUpdate = function () {
	      if (self._watcher) {
	        self.update(self._watcher.get())
	      }
	    }
	    // check options param
	    var optionsParam = this._checkParam('options')
	    if (optionsParam) {
	      initOptions.call(this, optionsParam)
	    }
	    this.number = this._checkParam('number') != null
	    this.multiple = el.hasAttribute('multiple')
	    this.listener = function () {
	      var value = self.multiple
	        ? getMultiValue(el)
	        : el.value
	      value = self.number
	        ? _.isArray(value)
	          ? value.map(_.toNumber)
	          : _.toNumber(value)
	        : value
	      self.set(value)
	    }
	    _.on(el, 'change', this.listener)
	    checkInitialValue.call(this)
	    // All major browsers except Firefox resets
	    // selectedIndex with value -1 to 0 when the element
	    // is appended to a new parent, therefore we have to
	    // force a DOM update whenever that happens...
	    this.vm.$on('hook:attached', this.forceUpdate)
	  },
	
	  update: function (value) {
	    var el = this.el
	    el.selectedIndex = -1
	    var multi = this.multiple && _.isArray(value)
	    var options = el.options
	    var i = options.length
	    var option
	    while (i--) {
	      option = options[i]
	      /* eslint-disable eqeqeq */
	      option.selected = multi
	        ? indexOf(value, option.value) > -1
	        : value == option.value
	      /* eslint-enable eqeqeq */
	    }
	  },
	
	  unbind: function () {
	    _.off(this.el, 'change', this.listener)
	    this.vm.$off('hook:attached', this.forceUpdate)
	    if (this.optionWatcher) {
	      this.optionWatcher.teardown()
	    }
	  }
	
	}
	
	/**
	 * Initialize the option list from the param.
	 *
	 * @param {String} expression
	 */
	
	function initOptions (expression) {
	  var self = this
	  var descriptor = dirParser.parse(expression)[0]
	  function optionUpdateWatcher (value) {
	    if (_.isArray(value)) {
	      self.el.innerHTML = ''
	      buildOptions(self.el, value)
	      self.forceUpdate()
	    } else {
	      process.env.NODE_ENV !== 'production' && _.warn(
	        'Invalid options value for v-model: ' + value
	      )
	    }
	  }
	  this.optionWatcher = new Watcher(
	    this.vm,
	    descriptor.expression,
	    optionUpdateWatcher,
	    {
	      deep: true,
	      filters: descriptor.filters
	    }
	  )
	  // update with initial value
	  optionUpdateWatcher(this.optionWatcher.value)
	}
	
	/**
	 * Build up option elements. IE9 doesn't create options
	 * when setting innerHTML on <select> elements, so we have
	 * to use DOM API here.
	 *
	 * @param {Element} parent - a <select> or an <optgroup>
	 * @param {Array} options
	 */
	
	function buildOptions (parent, options) {
	  var op, el
	  for (var i = 0, l = options.length; i < l; i++) {
	    op = options[i]
	    if (!op.options) {
	      el = document.createElement('option')
	      if (typeof op === 'string') {
	        el.text = el.value = op
	      } else {
	        if (op.value != null) {
	          el.value = op.value
	        }
	        el.text = op.text || op.value || ''
	        if (op.disabled) {
	          el.disabled = true
	        }
	      }
	    } else {
	      el = document.createElement('optgroup')
	      el.label = op.label
	      buildOptions(el, op.options)
	    }
	    parent.appendChild(el)
	  }
	}
	
	/**
	 * Check the initial value for selected options.
	 */
	
	function checkInitialValue () {
	  var initValue
	  var options = this.el.options
	  for (var i = 0, l = options.length; i < l; i++) {
	    if (options[i].hasAttribute('selected')) {
	      if (this.multiple) {
	        (initValue || (initValue = []))
	          .push(options[i].value)
	      } else {
	        initValue = options[i].value
	      }
	    }
	  }
	  if (typeof initValue !== 'undefined') {
	    this._initValue = this.number
	      ? _.toNumber(initValue)
	      : initValue
	  }
	}
	
	/**
	 * Helper to extract a value array for select[multiple]
	 *
	 * @param {SelectElement} el
	 * @return {Array}
	 */
	
	function getMultiValue (el) {
	  return Array.prototype.filter
	    .call(el.options, filterSelected)
	    .map(getOptionValue)
	}
	
	function filterSelected (op) {
	  return op.selected
	}
	
	function getOptionValue (op) {
	  return op.value || op.text
	}
	
	/**
	 * Native Array.indexOf uses strict equal, but in this
	 * case we need to match string/numbers with soft equal.
	 *
	 * @param {Array} arr
	 * @param {*} val
	 */
	
	function indexOf (arr, val) {
	  var i = arr.length
	  while (i--) {
	    /* eslint-disable eqeqeq */
	    if (arr[i] == val) return i
	    /* eslint-enable eqeqeq */
	  }
	  return -1
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(22)))

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(20)
	
	module.exports = {
	
	  bind: function () {
	    var self = this
	    var el = this.el
	    this.listener = function () {
	      self.set(el.checked)
	    }
	    _.on(el, 'change', this.listener)
	    if (el.checked) {
	      this._initValue = el.checked
	    }
	  },
	
	  update: function (value) {
	    this.el.checked = !!value
	  },
	
	  unbind: function () {
	    _.off(this.el, 'change', this.listener)
	  }
	}


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var _ = __webpack_require__(20)
	var config = __webpack_require__(23)
	var isObject = _.isObject
	var isPlainObject = _.isPlainObject
	var textParser = __webpack_require__(30)
	var expParser = __webpack_require__(39)
	var templateParser = __webpack_require__(42)
	var compiler = __webpack_require__(33)
	var uid = 0
	
	// async component resolution states
	var UNRESOLVED = 0
	var PENDING = 1
	var RESOLVED = 2
	var ABORTED = 3
	
	module.exports = {
	
	  /**
	   * Setup.
	   */
	
	  bind: function () {
	    // support for item in array syntax
	    var inMatch = this.expression.match(/(.*) in (.*)/)
	    if (inMatch) {
	      this.arg = inMatch[1]
	      this._watcherExp = inMatch[2]
	    }
	    // uid as a cache identifier
	    this.id = '__v_repeat_' + (++uid)
	
	    // setup anchor nodes
	    this.start = _.createAnchor('v-repeat-start')
	    this.end = _.createAnchor('v-repeat-end')
	    _.replace(this.el, this.end)
	    _.before(this.start, this.end)
	
	    // check if this is a block repeat
	    this.template = _.isTemplate(this.el)
	      ? templateParser.parse(this.el, true)
	      : this.el
	
	    // check for trackby param
	    this.idKey = this._checkParam('track-by')
	    // check for transition stagger
	    var stagger = +this._checkParam('stagger')
	    this.enterStagger = +this._checkParam('enter-stagger') || stagger
	    this.leaveStagger = +this._checkParam('leave-stagger') || stagger
	
	    // check for v-ref/v-el
	    this.refID = this._checkParam(config.prefix + 'ref')
	    this.elID = this._checkParam(config.prefix + 'el')
	
	    // check other directives that need to be handled
	    // at v-repeat level
	    this.checkIf()
	    this.checkComponent()
	
	    // create cache object
	    this.cache = Object.create(null)
	
	    // some helpful tips...
	    /* istanbul ignore if */
	    if (
	      process.env.NODE_ENV !== 'production' &&
	      this.el.tagName === 'OPTION'
	    ) {
	      _.warn(
	        'Don\'t use v-repeat for v-model options; ' +
	        'use the `options` param instead: ' +
	        'http://vuejs.org/guide/forms.html#Dynamic_Select_Options'
	      )
	    }
	  },
	
	  /**
	   * Warn against v-if usage.
	   */
	
	  checkIf: function () {
	    if (_.attr(this.el, 'if') !== null) {
	      process.env.NODE_ENV !== 'production' && _.warn(
	        'Don\'t use v-if with v-repeat. ' +
	        'Use v-show or the "filterBy" filter instead.'
	      )
	    }
	  },
	
	  /**
	   * Check the component constructor to use for repeated
	   * instances. If static we resolve it now, otherwise it
	   * needs to be resolved at build time with actual data.
	   */
	
	  checkComponent: function () {
	    this.componentState = UNRESOLVED
	    var options = this.vm.$options
	    var id = _.checkComponent(this.el, options)
	    if (!id) {
	      // default constructor
	      this.Component = _.Vue
	      // inline repeats should inherit
	      this.inline = true
	      // important: transclude with no options, just
	      // to ensure block start and block end
	      this.template = compiler.transclude(this.template)
	      var copy = _.extend({}, options)
	      copy._asComponent = false
	      this._linkFn = compiler.compile(this.template, copy)
	    } else {
	      this.Component = null
	      this.asComponent = true
	      // check inline-template
	      if (this._checkParam('inline-template') !== null) {
	        // extract inline template as a DocumentFragment
	        this.inlineTemplate = _.extractContent(this.el, true)
	      }
	      var tokens = textParser.parse(id)
	      if (tokens) {
	        // dynamic component to be resolved later
	        var componentExp = textParser.tokensToExp(tokens)
	        this.componentGetter = expParser.parse(componentExp).get
	      } else {
	        // static
	        this.componentId = id
	        this.pendingData = null
	      }
	    }
	  },
	
	  resolveComponent: function () {
	    this.componentState = PENDING
	    this.vm._resolveComponent(this.componentId, _.bind(function (Component) {
	      if (this.componentState === ABORTED) {
	        return
	      }
	      this.Component = Component
	      this.componentState = RESOLVED
	      this.realUpdate(this.pendingData)
	      this.pendingData = null
	    }, this))
	  },
	
	    /**
	   * Resolve a dynamic component to use for an instance.
	   * The tricky part here is that there could be dynamic
	   * components depending on instance data.
	   *
	   * @param {Object} data
	   * @param {Object} meta
	   * @return {Function}
	   */
	
	  resolveDynamicComponent: function (data, meta) {
	    // create a temporary context object and copy data
	    // and meta properties onto it.
	    // use _.define to avoid accidentally overwriting scope
	    // properties.
	    var context = Object.create(this.vm)
	    var key
	    for (key in data) {
	      _.define(context, key, data[key])
	    }
	    for (key in meta) {
	      _.define(context, key, meta[key])
	    }
	    var id = this.componentGetter.call(context, context)
	    var Component = _.resolveAsset(this.vm.$options, 'components', id)
	    if (process.env.NODE_ENV !== 'production') {
	      _.assertAsset(Component, 'component', id)
	    }
	    if (!Component.options) {
	      process.env.NODE_ENV !== 'production' && _.warn(
	        'Async resolution is not supported for v-repeat ' +
	        '+ dynamic component. (component: ' + id + ')'
	      )
	      return _.Vue
	    }
	    return Component
	  },
	
	  /**
	   * Update.
	   * This is called whenever the Array mutates. If we have
	   * a component, we might need to wait for it to resolve
	   * asynchronously.
	   *
	   * @param {Array|Number|String} data
	   */
	
	  update: function (data) {
	    if (this.componentId) {
	      var state = this.componentState
	      if (state === UNRESOLVED) {
	        this.pendingData = data
	        // once resolved, it will call realUpdate
	        this.resolveComponent()
	      } else if (state === PENDING) {
	        this.pendingData = data
	      } else if (state === RESOLVED) {
	        this.realUpdate(data)
	      }
	    } else {
	      this.realUpdate(data)
	    }
	  },
	
	  /**
	   * The real update that actually modifies the DOM.
	   *
	   * @param {Array|Number|String} data
	   */
	
	  realUpdate: function (data) {
	    this.vms = this.diff(data, this.vms)
	    // update v-ref
	    if (this.refID) {
	      this.vm.$[this.refID] = this.converted
	        ? toRefObject(this.vms)
	        : this.vms
	    }
	    if (this.elID) {
	      this.vm.$$[this.elID] = this.vms.map(function (vm) {
	        return vm.$el
	      })
	    }
	  },
	
	  /**
	   * Diff, based on new data and old data, determine the
	   * minimum amount of DOM manipulations needed to make the
	   * DOM reflect the new data Array.
	   *
	   * The algorithm diffs the new data Array by storing a
	   * hidden reference to an owner vm instance on previously
	   * seen data. This allows us to achieve O(n) which is
	   * better than a levenshtein distance based algorithm,
	   * which is O(m * n).
	   *
	   * @param {Array} data
	   * @param {Array} oldVms
	   * @return {Array}
	   */
	
	  diff: function (data, oldVms) {
	    var idKey = this.idKey
	    var converted = this.converted
	    var start = this.start
	    var end = this.end
	    var inDoc = _.inDoc(start)
	    var alias = this.arg
	    var init = !oldVms
	    var vms = new Array(data.length)
	    var obj, raw, vm, i, l, primitive
	    // First pass, go through the new Array and fill up
	    // the new vms array. If a piece of data has a cached
	    // instance for it, we reuse it. Otherwise build a new
	    // instance.
	    for (i = 0, l = data.length; i < l; i++) {
	      obj = data[i]
	      raw = converted ? obj.$value : obj
	      primitive = !isObject(raw)
	      vm = !init && this.getVm(raw, i, converted ? obj.$key : null)
	      if (vm) { // reusable instance
	        vm._reused = true
	        vm.$index = i // update $index
	        // update data for track-by or object repeat,
	        // since in these two cases the data is replaced
	        // rather than mutated.
	        if (idKey || converted || primitive) {
	          if (alias) {
	            vm[alias] = raw
	          } else if (_.isPlainObject(raw)) {
	            vm.$data = raw
	          } else {
	            vm.$value = raw
	          }
	        }
	      } else { // new instance
	        vm = this.build(obj, i, true)
	        vm._reused = false
	      }
	      vms[i] = vm
	      // insert if this is first run
	      if (init) {
	        vm.$before(end)
	      }
	    }
	    // if this is the first run, we're done.
	    if (init) {
	      return vms
	    }
	    // Second pass, go through the old vm instances and
	    // destroy those who are not reused (and remove them
	    // from cache)
	    var removalIndex = 0
	    var totalRemoved = oldVms.length - vms.length
	    for (i = 0, l = oldVms.length; i < l; i++) {
	      vm = oldVms[i]
	      if (!vm._reused) {
	        this.uncacheVm(vm)
	        vm.$destroy(false, true) // defer cleanup until removal
	        this.remove(vm, removalIndex++, totalRemoved, inDoc)
	      }
	    }
	    // final pass, move/insert new instances into the
	    // right place.
	    var targetPrev, prevEl, currentPrev
	    var insertionIndex = 0
	    for (i = 0, l = vms.length; i < l; i++) {
	      vm = vms[i]
	      // this is the vm that we should be after
	      targetPrev = vms[i - 1]
	      prevEl = targetPrev
	        ? targetPrev._staggerCb
	          ? targetPrev._staggerAnchor
	          : targetPrev._fragmentEnd || targetPrev.$el
	        : start
	      if (vm._reused && !vm._staggerCb) {
	        currentPrev = findPrevVm(vm, start, this.id)
	        if (currentPrev !== targetPrev) {
	          this.move(vm, prevEl)
	        }
	      } else {
	        // new instance, or still in stagger.
	        // insert with updated stagger index.
	        this.insert(vm, insertionIndex++, prevEl, inDoc)
	      }
	      vm._reused = false
	    }
	    return vms
	  },
	
	  /**
	   * Build a new instance and cache it.
	   *
	   * @param {Object} data
	   * @param {Number} index
	   * @param {Boolean} needCache
	   */
	
	  build: function (data, index, needCache) {
	    var meta = { $index: index }
	    if (this.converted) {
	      meta.$key = data.$key
	    }
	    var raw = this.converted ? data.$value : data
	    var alias = this.arg
	    if (alias) {
	      data = {}
	      data[alias] = raw
	    } else if (!isPlainObject(raw)) {
	      // non-object values
	      data = {}
	      meta.$value = raw
	    } else {
	      // default
	      data = raw
	    }
	    // resolve constructor
	    var Component = this.Component || this.resolveDynamicComponent(data, meta)
	    var parent = this._host || this.vm
	    var vm = parent.$addChild({
	      el: templateParser.clone(this.template),
	      data: data,
	      inherit: this.inline,
	      template: this.inlineTemplate,
	      // repeater meta, e.g. $index, $key
	      _meta: meta,
	      // mark this as an inline-repeat instance
	      _repeat: this.inline,
	      // is this a component?
	      _asComponent: this.asComponent,
	      // linker cachable if no inline-template
	      _linkerCachable: !this.inlineTemplate && Component !== _.Vue,
	      // pre-compiled linker for simple repeats
	      _linkFn: this._linkFn,
	      // identifier, shows that this vm belongs to this collection
	      _repeatId: this.id,
	      // transclusion content owner
	      _context: this.vm
	    }, Component)
	    // cache instance
	    if (needCache) {
	      this.cacheVm(raw, vm, index, this.converted ? meta.$key : null)
	    }
	    // sync back changes for two-way bindings of primitive values
	    var dir = this
	    if (this.rawType === 'object' && isPrimitive(raw)) {
	      vm.$watch(alias || '$value', function (val) {
	        if (dir.filters) {
	          process.env.NODE_ENV !== 'production' && _.warn(
	            'You seem to be mutating the $value reference of ' +
	            'a v-repeat instance (likely through v-model) ' +
	            'and filtering the v-repeat at the same time. ' +
	            'This will not work properly with an Array of ' +
	            'primitive values. Please use an Array of ' +
	            'Objects instead.'
	          )
	        }
	        dir._withLock(function () {
	          if (dir.converted) {
	            dir.rawValue[vm.$key] = val
	          } else {
	            dir.rawValue.$set(vm.$index, val)
	          }
	        })
	      })
	    }
	    return vm
	  },
	
	  /**
	   * Unbind, teardown everything
	   */
	
	  unbind: function () {
	    this.componentState = ABORTED
	    if (this.refID) {
	      this.vm.$[this.refID] = null
	    }
	    if (this.vms) {
	      var i = this.vms.length
	      var vm
	      while (i--) {
	        vm = this.vms[i]
	        this.uncacheVm(vm)
	        vm.$destroy()
	      }
	    }
	  },
	
	  /**
	   * Cache a vm instance based on its data.
	   *
	   * If the data is an object, we save the vm's reference on
	   * the data object as a hidden property. Otherwise we
	   * cache them in an object and for each primitive value
	   * there is an array in case there are duplicates.
	   *
	   * @param {Object} data
	   * @param {Vue} vm
	   * @param {Number} index
	   * @param {String} [key]
	   */
	
	  cacheVm: function (data, vm, index, key) {
	    var idKey = this.idKey
	    var cache = this.cache
	    var primitive = !isObject(data)
	    var id
	    if (key || idKey || primitive) {
	      id = idKey
	        ? idKey === '$index'
	          ? index
	          : data[idKey]
	        : (key || index)
	      if (!cache[id]) {
	        cache[id] = vm
	      } else if (!primitive && idKey !== '$index') {
	        process.env.NODE_ENV !== 'production' && _.warn(
	          'Duplicate track-by key in v-repeat: ' + id
	        )
	      }
	    } else {
	      id = this.id
	      if (data.hasOwnProperty(id)) {
	        if (data[id] === null) {
	          data[id] = vm
	        } else {
	          process.env.NODE_ENV !== 'production' && _.warn(
	            'Duplicate objects are not supported in v-repeat ' +
	            'when using components or transitions.'
	          )
	        }
	      } else {
	        _.define(data, id, vm)
	      }
	    }
	    vm._raw = data
	  },
	
	  /**
	   * Try to get a cached instance from a piece of data.
	   *
	   * @param {Object} data
	   * @param {Number} index
	   * @param {String} [key]
	   * @return {Vue|undefined}
	   */
	
	  getVm: function (data, index, key) {
	    var idKey = this.idKey
	    var primitive = !isObject(data)
	    if (key || idKey || primitive) {
	      var id = idKey
	        ? idKey === '$index'
	          ? index
	          : data[idKey]
	        : (key || index)
	      return this.cache[id]
	    } else {
	      return data[this.id]
	    }
	  },
	
	  /**
	   * Delete a cached vm instance.
	   *
	   * @param {Vue} vm
	   */
	
	  uncacheVm: function (vm) {
	    var data = vm._raw
	    var idKey = this.idKey
	    var index = vm.$index
	    // fix #948: avoid accidentally fall through to
	    // a parent repeater which happens to have $key.
	    var key = vm.hasOwnProperty('$key') && vm.$key
	    var primitive = !isObject(data)
	    if (idKey || key || primitive) {
	      var id = idKey
	        ? idKey === '$index'
	          ? index
	          : data[idKey]
	        : (key || index)
	      this.cache[id] = null
	    } else {
	      data[this.id] = null
	      vm._raw = null
	    }
	  },
	
	  /**
	   * Insert an instance.
	   *
	   * @param {Vue} vm
	   * @param {Number} index
	   * @param {Node} prevEl
	   * @param {Boolean} inDoc
	   */
	
	  insert: function (vm, index, prevEl, inDoc) {
	    if (vm._staggerCb) {
	      vm._staggerCb.cancel()
	      vm._staggerCb = null
	    }
	    var staggerAmount = this.getStagger(vm, index, null, 'enter')
	    if (inDoc && staggerAmount) {
	      // create an anchor and insert it synchronously,
	      // so that we can resolve the correct order without
	      // worrying about some elements not inserted yet
	      var anchor = vm._staggerAnchor
	      if (!anchor) {
	        anchor = vm._staggerAnchor = _.createAnchor('stagger-anchor')
	        anchor.__vue__ = vm
	      }
	      _.after(anchor, prevEl)
	      var op = vm._staggerCb = _.cancellable(function () {
	        vm._staggerCb = null
	        vm.$before(anchor)
	        _.remove(anchor)
	      })
	      setTimeout(op, staggerAmount)
	    } else {
	      vm.$after(prevEl)
	    }
	  },
	
	  /**
	   * Move an already inserted instance.
	   *
	   * @param {Vue} vm
	   * @param {Node} prevEl
	   */
	
	  move: function (vm, prevEl) {
	    vm.$after(prevEl, null, false)
	  },
	
	  /**
	   * Remove an instance.
	   *
	   * @param {Vue} vm
	   * @param {Number} index
	   * @param {Boolean} inDoc
	   */
	
	  remove: function (vm, index, total, inDoc) {
	    if (vm._staggerCb) {
	      vm._staggerCb.cancel()
	      vm._staggerCb = null
	      // it's not possible for the same vm to be removed
	      // twice, so if we have a pending stagger callback,
	      // it means this vm is queued for enter but removed
	      // before its transition started. Since it is already
	      // destroyed, we can just leave it in detached state.
	      return
	    }
	    var staggerAmount = this.getStagger(vm, index, total, 'leave')
	    if (inDoc && staggerAmount) {
	      var op = vm._staggerCb = _.cancellable(function () {
	        vm._staggerCb = null
	        remove()
	      })
	      setTimeout(op, staggerAmount)
	    } else {
	      remove()
	    }
	    function remove () {
	      vm.$remove(function () {
	        vm._cleanup()
	      })
	    }
	  },
	
	  /**
	   * Get the stagger amount for an insertion/removal.
	   *
	   * @param {Vue} vm
	   * @param {Number} index
	   * @param {String} type
	   * @param {Number} total
	   */
	
	  getStagger: function (vm, index, total, type) {
	    type = type + 'Stagger'
	    var transition = vm.$el.__v_trans
	    var hooks = transition && transition.hooks
	    var hook = hooks && (hooks[type] || hooks.stagger)
	    return hook
	      ? hook.call(vm, index, total)
	      : index * this[type]
	  },
	
	  /**
	   * Pre-process the value before piping it through the
	   * filters, and convert non-Array objects to arrays.
	   *
	   * This function will be bound to this directive instance
	   * and passed into the watcher.
	   *
	   * @param {*} value
	   * @return {Array}
	   * @private
	   */
	
	  _preProcess: function (value) {
	    // regardless of type, store the un-filtered raw value.
	    this.rawValue = value
	    var type = this.rawType = typeof value
	    if (!isPlainObject(value)) {
	      this.converted = false
	      if (type === 'number') {
	        value = range(value)
	      } else if (type === 'string') {
	        value = _.toArray(value)
	      }
	      return value || []
	    } else {
	      // convert plain object to array.
	      var keys = Object.keys(value)
	      var i = keys.length
	      var res = new Array(i)
	      var key
	      while (i--) {
	        key = keys[i]
	        res[i] = {
	          $key: key,
	          $value: value[key]
	        }
	      }
	      this.converted = true
	      return res
	    }
	  }
	}
	
	/**
	 * Helper to find the previous element that is an instance
	 * root node. This is necessary because a destroyed vm's
	 * element could still be lingering in the DOM before its
	 * leaving transition finishes, but its __vue__ reference
	 * should have been removed so we can skip them.
	 *
	 * If this is a block repeat, we want to make sure we only
	 * return vm that is bound to this v-repeat. (see #929)
	 *
	 * @param {Vue} vm
	 * @param {Comment|Text} anchor
	 * @return {Vue}
	 */
	
	function findPrevVm (vm, anchor, id) {
	  var el = vm.$el.previousSibling
	  /* istanbul ignore if */
	  if (!el) return
	  while (
	    (!el.__vue__ || el.__vue__.$options._repeatId !== id) &&
	    el !== anchor
	  ) {
	    el = el.previousSibling
	  }
	  return el.__vue__
	}
	
	/**
	 * Create a range array from given number.
	 *
	 * @param {Number} n
	 * @return {Array}
	 */
	
	function range (n) {
	  var i = -1
	  var ret = new Array(n)
	  while (++i < n) {
	    ret[i] = i
	  }
	  return ret
	}
	
	/**
	 * Convert a vms array to an object ref for v-ref on an
	 * Object value.
	 *
	 * @param {Array} vms
	 * @return {Object}
	 */
	
	function toRefObject (vms) {
	  var ref = {}
	  for (var i = 0, l = vms.length; i < l; i++) {
	    ref[vms[i].$key] = vms[i]
	  }
	  return ref
	}
	
	/**
	 * Check if a value is a primitive one:
	 * String, Number, Boolean, null or undefined.
	 *
	 * @param {*} value
	 * @return {Boolean}
	 */
	
	function isPrimitive (value) {
	  var type = typeof value
	  return value == null ||
	    type === 'string' ||
	    type === 'number' ||
	    type === 'boolean'
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(22)))

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var _ = __webpack_require__(20)
	var compiler = __webpack_require__(33)
	var templateParser = __webpack_require__(42)
	var transition = __webpack_require__(51)
	var Cache = __webpack_require__(31)
	var cache = new Cache(1000)
	
	module.exports = {
	
	  bind: function () {
	    var el = this.el
	    if (!el.__vue__) {
	      this.start = _.createAnchor('v-if-start')
	      this.end = _.createAnchor('v-if-end')
	      _.replace(el, this.end)
	      _.before(this.start, this.end)
	      if (_.isTemplate(el)) {
	        this.template = templateParser.parse(el, true)
	      } else {
	        this.template = document.createDocumentFragment()
	        this.template.appendChild(templateParser.clone(el))
	      }
	      // compile the nested partial
	      var cacheId = (this.vm.constructor.cid || '') + el.outerHTML
	      this.linker = cache.get(cacheId)
	      if (!this.linker) {
	        this.linker = compiler.compile(
	          this.template,
	          this.vm.$options,
	          true, // partial
	          this._host // important
	        )
	        cache.put(cacheId, this.linker)
	      }
	    } else {
	      process.env.NODE_ENV !== 'production' && _.warn(
	        'v-if="' + this.expression + '" cannot be ' +
	        'used on an instance root element.'
	      )
	      this.invalid = true
	    }
	  },
	
	  update: function (value) {
	    if (this.invalid) return
	    if (value) {
	      // avoid duplicate compiles, since update() can be
	      // called with different truthy values
	      if (!this.unlink) {
	        this.link(
	          templateParser.clone(this.template),
	          this.linker
	        )
	      }
	    } else {
	      this.teardown()
	    }
	  },
	
	  link: function (frag, linker) {
	    var vm = this.vm
	    this.unlink = linker(vm, frag)
	    transition.blockAppend(frag, this.end, vm)
	    // call attached for all the child components created
	    // during the compilation
	    if (_.inDoc(vm.$el)) {
	      var children = this.getContainedComponents()
	      if (children) children.forEach(callAttach)
	    }
	  },
	
	  teardown: function () {
	    if (!this.unlink) return
	    // collect children beforehand
	    var children
	    if (_.inDoc(this.vm.$el)) {
	      children = this.getContainedComponents()
	    }
	    transition.blockRemove(this.start, this.end, this.vm)
	    if (children) children.forEach(callDetach)
	    this.unlink()
	    this.unlink = null
	  },
	
	  getContainedComponents: function () {
	    var vm = this.vm
	    var start = this.start.nextSibling
	    var end = this.end
	
	    function contains (c) {
	      var cur = start
	      var next
	      while (next !== end) {
	        next = cur.nextSibling
	        if (
	          cur === c.$el ||
	          cur.contains && cur.contains(c.$el)
	        ) {
	          return true
	        }
	        cur = next
	      }
	      return false
	    }
	
	    return vm.$children.length &&
	      vm.$children.filter(contains)
	  },
	
	  unbind: function () {
	    if (this.unlink) this.unlink()
	  }
	
	}
	
	function callAttach (child) {
	  if (!child._isAttached) {
	    child._callHook('attached')
	  }
	}
	
	function callDetach (child) {
	  if (child._isAttached) {
	    child._callHook('detached')
	  }
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(22)))

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	exports.content = __webpack_require__(68)
	exports.partial = __webpack_require__(69)


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(20)
	var clone = __webpack_require__(42).clone
	
	// This is the elementDirective that handles <content>
	// transclusions. It relies on the raw content of an
	// instance being stored as `$options._content` during
	// the transclude phase.
	
	module.exports = {
	
	  bind: function () {
	    var vm = this.vm
	    var host = vm
	    // we need find the content context, which is the
	    // closest non-inline-repeater instance.
	    while (host.$options._repeat) {
	      host = host.$parent
	    }
	    var raw = host.$options._content
	    var content
	    if (!raw) {
	      this.fallback()
	      return
	    }
	    var context = host._context
	    var selector = this._checkParam('select')
	    if (!selector) {
	      // Default content
	      var self = this
	      var compileDefaultContent = function () {
	        self.compile(
	          extractFragment(raw.childNodes, raw, true),
	          context,
	          vm
	        )
	      }
	      if (!host._isCompiled) {
	        // defer until the end of instance compilation,
	        // because the default outlet must wait until all
	        // other possible outlets with selectors have picked
	        // out their contents.
	        host.$once('hook:compiled', compileDefaultContent)
	      } else {
	        compileDefaultContent()
	      }
	    } else {
	      // select content
	      var nodes = raw.querySelectorAll(selector)
	      if (nodes.length) {
	        content = extractFragment(nodes, raw)
	        if (content.hasChildNodes()) {
	          this.compile(content, context, vm)
	        } else {
	          this.fallback()
	        }
	      } else {
	        this.fallback()
	      }
	    }
	  },
	
	  fallback: function () {
	    this.compile(_.extractContent(this.el, true), this.vm)
	  },
	
	  compile: function (content, context, host) {
	    if (content && context) {
	      this.unlink = context.$compile(content, host)
	    }
	    if (content) {
	      _.replace(this.el, content)
	    } else {
	      _.remove(this.el)
	    }
	  },
	
	  unbind: function () {
	    if (this.unlink) {
	      this.unlink()
	    }
	  }
	}
	
	/**
	 * Extract qualified content nodes from a node list.
	 *
	 * @param {NodeList} nodes
	 * @param {Element} parent
	 * @param {Boolean} main
	 * @return {DocumentFragment}
	 */
	
	function extractFragment (nodes, parent, main) {
	  var frag = document.createDocumentFragment()
	  for (var i = 0, l = nodes.length; i < l; i++) {
	    var node = nodes[i]
	    // if this is the main outlet, we want to skip all
	    // previously selected nodes;
	    // otherwise, we want to mark the node as selected.
	    // clone the node so the original raw content remains
	    // intact. this ensures proper re-compilation in cases
	    // where the outlet is inside a conditional block
	    if (main && !node.__v_selected) {
	      frag.appendChild(clone(node))
	    } else if (!main && node.parentNode === parent) {
	      node.__v_selected = true
	      frag.appendChild(clone(node))
	    }
	  }
	  return frag
	}


/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var _ = __webpack_require__(20)
	var templateParser = __webpack_require__(42)
	var textParser = __webpack_require__(30)
	var compiler = __webpack_require__(33)
	var Cache = __webpack_require__(31)
	var cache = new Cache(1000)
	
	// v-partial reuses logic from v-if
	var vIf = __webpack_require__(66)
	
	module.exports = {
	
	  link: vIf.link,
	  teardown: vIf.teardown,
	  getContainedComponents: vIf.getContainedComponents,
	
	  bind: function () {
	    var el = this.el
	    this.start = _.createAnchor('v-partial-start')
	    this.end = _.createAnchor('v-partial-end')
	    _.replace(el, this.end)
	    _.before(this.start, this.end)
	    var id = el.getAttribute('name')
	    var tokens = textParser.parse(id)
	    if (tokens) {
	      // dynamic partial
	      this.setupDynamic(tokens)
	    } else {
	      // static partial
	      this.insert(id)
	    }
	  },
	
	  setupDynamic: function (tokens) {
	    var self = this
	    var exp = textParser.tokensToExp(tokens)
	    this.unwatch = this.vm.$watch(exp, function (value) {
	      self.teardown()
	      self.insert(value)
	    }, {
	      immediate: true,
	      user: false
	    })
	  },
	
	  insert: function (id) {
	    var partial = _.resolveAsset(this.vm.$options, 'partials', id)
	    if (process.env.NODE_ENV !== 'production') {
	      _.assertAsset(partial, 'partial', id)
	    }
	    if (partial) {
	      var frag = templateParser.parse(partial, true)
	      // cache partials based on constructor id.
	      var cacheId = (this.vm.constructor.cid || '') + partial
	      var linker = this.compile(frag, cacheId)
	      // this is provided by v-if
	      this.link(frag, linker)
	    }
	  },
	
	  compile: function (frag, cacheId) {
	    var hit = cache.get(cacheId)
	    if (hit) return hit
	    var linker = compiler.compile(frag, this.vm.$options, true)
	    cache.put(cacheId, linker)
	    return linker
	  },
	
	  unbind: function () {
	    if (this.unlink) this.unlink()
	    if (this.unwatch) this.unwatch()
	  }
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(22)))

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(20)
	
	/**
	 * Stringify value.
	 *
	 * @param {Number} indent
	 */
	
	exports.json = {
	  read: function (value, indent) {
	    return typeof value === 'string'
	      ? value
	      : JSON.stringify(value, null, Number(indent) || 2)
	  },
	  write: function (value) {
	    try {
	      return JSON.parse(value)
	    } catch (e) {
	      return value
	    }
	  }
	}
	
	/**
	 * 'abc' => 'Abc'
	 */
	
	exports.capitalize = function (value) {
	  if (!value && value !== 0) return ''
	  value = value.toString()
	  return value.charAt(0).toUpperCase() + value.slice(1)
	}
	
	/**
	 * 'abc' => 'ABC'
	 */
	
	exports.uppercase = function (value) {
	  return (value || value === 0)
	    ? value.toString().toUpperCase()
	    : ''
	}
	
	/**
	 * 'AbC' => 'abc'
	 */
	
	exports.lowercase = function (value) {
	  return (value || value === 0)
	    ? value.toString().toLowerCase()
	    : ''
	}
	
	/**
	 * 12345 => $12,345.00
	 *
	 * @param {String} sign
	 */
	
	var digitsRE = /(\d{3})(?=\d)/g
	exports.currency = function (value, currency) {
	  value = parseFloat(value)
	  if (!isFinite(value) || (!value && value !== 0)) return ''
	  currency = currency || '$'
	  var stringified = Math.abs(value).toFixed(2)
	  var _int = stringified.slice(0, -3)
	  var i = _int.length % 3
	  var head = i > 0
	    ? (_int.slice(0, i) + (_int.length > 3 ? ',' : ''))
	    : ''
	  var _float = stringified.slice(-3)
	  var sign = value < 0 ? '-' : ''
	  return currency + sign + head +
	    _int.slice(i).replace(digitsRE, '$1,') +
	    _float
	}
	
	/**
	 * 'item' => 'items'
	 *
	 * @params
	 *  an array of strings corresponding to
	 *  the single, double, triple ... forms of the word to
	 *  be pluralized. When the number to be pluralized
	 *  exceeds the length of the args, it will use the last
	 *  entry in the array.
	 *
	 *  e.g. ['single', 'double', 'triple', 'multiple']
	 */
	
	exports.pluralize = function (value) {
	  var args = _.toArray(arguments, 1)
	  return args.length > 1
	    ? (args[value % 10 - 1] || args[args.length - 1])
	    : (args[0] + (value === 1 ? '' : 's'))
	}
	
	/**
	 * A special filter that takes a handler function,
	 * wraps it so it only gets triggered on specific
	 * keypresses. v-on only.
	 *
	 * @param {String} key
	 */
	
	var keyCodes = {
	  esc: 27,
	  tab: 9,
	  enter: 13,
	  'delete': 46,
	  up: 38,
	  left: 37,
	  right: 39,
	  down: 40
	}
	
	exports.key = function (handler, key) {
	  if (!handler) return
	  var code = keyCodes[key]
	  if (!code) {
	    code = parseInt(key, 10)
	  }
	  return function (e) {
	    if (e.keyCode === code) {
	      return handler.call(this, e)
	    }
	  }
	}
	
	// expose keycode hash
	exports.key.keyCodes = keyCodes
	
	/**
	 * Install special array filters
	 */
	
	_.extend(exports, __webpack_require__(71))


/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(20)
	var Path = __webpack_require__(40)
	
	/**
	 * Filter filter for v-repeat
	 *
	 * @param {String} searchKey
	 * @param {String} [delimiter]
	 * @param {String} dataKey
	 */
	
	exports.filterBy = function (arr, search, delimiter, dataKey) {
	  // allow optional `in` delimiter
	  // because why not
	  if (delimiter && delimiter !== 'in') {
	    dataKey = delimiter
	  }
	  if (search == null) {
	    return arr
	  }
	  // cast to lowercase string
	  search = ('' + search).toLowerCase()
	  return arr.filter(function (item) {
	    return dataKey
	      ? contains(Path.get(item, dataKey), search)
	      : contains(item, search)
	  })
	}
	
	/**
	 * Filter filter for v-repeat
	 *
	 * @param {String} sortKey
	 * @param {String} reverse
	 */
	
	exports.orderBy = function (arr, sortKey, reverse) {
	  if (!sortKey) {
	    return arr
	  }
	  var order = 1
	  if (arguments.length > 2) {
	    if (reverse === '-1') {
	      order = -1
	    } else {
	      order = reverse ? -1 : 1
	    }
	  }
	  // sort on a copy to avoid mutating original array
	  return arr.slice().sort(function (a, b) {
	    if (sortKey !== '$key' && sortKey !== '$value') {
	      if (a && '$value' in a) a = a.$value
	      if (b && '$value' in b) b = b.$value
	    }
	    a = _.isObject(a) ? Path.get(a, sortKey) : a
	    b = _.isObject(b) ? Path.get(b, sortKey) : b
	    return a === b ? 0 : a > b ? order : -order
	  })
	}
	
	/**
	 * String contain helper
	 *
	 * @param {*} val
	 * @param {String} search
	 */
	
	function contains (val, search) {
	  if (_.isPlainObject(val)) {
	    for (var key in val) {
	      if (contains(val[key], search)) {
	        return true
	      }
	    }
	  } else if (_.isArray(val)) {
	    var i = val.length
	    while (i--) {
	      if (contains(val[i], search)) {
	        return true
	      }
	    }
	  } else if (val != null) {
	    return val.toString().toLowerCase().indexOf(search) > -1
	  }
	}


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	var mergeOptions = __webpack_require__(20).mergeOptions
	
	/**
	 * The main init sequence. This is called for every
	 * instance, including ones that are created from extended
	 * constructors.
	 *
	 * @param {Object} options - this options object should be
	 *                           the result of merging class
	 *                           options and the options passed
	 *                           in to the constructor.
	 */
	
	exports._init = function (options) {
	
	  options = options || {}
	
	  this.$el = null
	  this.$parent = options._parent
	  this.$root = options._root || this
	  this.$children = []
	  this.$ = {}           // child vm references
	  this.$$ = {}          // element references
	  this._watchers = []   // all watchers as an array
	  this._directives = [] // all directives
	  this._childCtors = {} // inherit:true constructors
	
	  // a flag to avoid this being observed
	  this._isVue = true
	
	  // events bookkeeping
	  this._events = {}            // registered callbacks
	  this._eventsCount = {}       // for $broadcast optimization
	  this._eventCancelled = false // for event cancellation
	
	  // fragment instance properties
	  this._isFragment = false
	  this._fragmentStart =    // @type {CommentNode}
	  this._fragmentEnd = null // @type {CommentNode}
	
	  // lifecycle state
	  this._isCompiled =
	  this._isDestroyed =
	  this._isReady =
	  this._isAttached =
	  this._isBeingDestroyed = false
	  this._unlinkFn = null
	
	  // context: the scope in which the component was used,
	  // and the scope in which props and contents of this
	  // instance should be compiled in.
	  this._context =
	    options._context ||
	    options._parent
	
	  // push self into parent / transclusion host
	  if (this.$parent) {
	    this.$parent.$children.push(this)
	  }
	
	  // props used in v-repeat diffing
	  this._reused = false
	  this._staggerOp = null
	
	  // merge options.
	  options = this.$options = mergeOptions(
	    this.constructor.options,
	    options,
	    this
	  )
	
	  // initialize data as empty object.
	  // it will be filled up in _initScope().
	  this._data = {}
	
	  // initialize data observation and scope inheritance.
	  this._initScope()
	
	  // setup event system and option events.
	  this._initEvents()
	
	  // call created hook
	  this._callHook('created')
	
	  // if `el` option is passed, start compilation.
	  if (options.el) {
	    this.$mount(options.el)
	  }
	}


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var _ = __webpack_require__(20)
	var inDoc = _.inDoc
	
	/**
	 * Setup the instance's option events & watchers.
	 * If the value is a string, we pull it from the
	 * instance's methods by name.
	 */
	
	exports._initEvents = function () {
	  var options = this.$options
	  registerCallbacks(this, '$on', options.events)
	  registerCallbacks(this, '$watch', options.watch)
	}
	
	/**
	 * Register callbacks for option events and watchers.
	 *
	 * @param {Vue} vm
	 * @param {String} action
	 * @param {Object} hash
	 */
	
	function registerCallbacks (vm, action, hash) {
	  if (!hash) return
	  var handlers, key, i, j
	  for (key in hash) {
	    handlers = hash[key]
	    if (_.isArray(handlers)) {
	      for (i = 0, j = handlers.length; i < j; i++) {
	        register(vm, action, key, handlers[i])
	      }
	    } else {
	      register(vm, action, key, handlers)
	    }
	  }
	}
	
	/**
	 * Helper to register an event/watch callback.
	 *
	 * @param {Vue} vm
	 * @param {String} action
	 * @param {String} key
	 * @param {Function|String|Object} handler
	 * @param {Object} [options]
	 */
	
	function register (vm, action, key, handler, options) {
	  var type = typeof handler
	  if (type === 'function') {
	    vm[action](key, handler, options)
	  } else if (type === 'string') {
	    var methods = vm.$options.methods
	    var method = methods && methods[handler]
	    if (method) {
	      vm[action](key, method, options)
	    } else {
	      process.env.NODE_ENV !== 'production' && _.warn(
	        'Unknown method: "' + handler + '" when ' +
	        'registering callback for ' + action +
	        ': "' + key + '".'
	      )
	    }
	  } else if (handler && type === 'object') {
	    register(vm, action, key, handler.handler, handler)
	  }
	}
	
	/**
	 * Setup recursive attached/detached calls
	 */
	
	exports._initDOMHooks = function () {
	  this.$on('hook:attached', onAttached)
	  this.$on('hook:detached', onDetached)
	}
	
	/**
	 * Callback to recursively call attached hook on children
	 */
	
	function onAttached () {
	  if (!this._isAttached) {
	    this._isAttached = true
	    this.$children.forEach(callAttach)
	  }
	}
	
	/**
	 * Iterator to call attached hook
	 *
	 * @param {Vue} child
	 */
	
	function callAttach (child) {
	  if (!child._isAttached && inDoc(child.$el)) {
	    child._callHook('attached')
	  }
	}
	
	/**
	 * Callback to recursively call detached hook on children
	 */
	
	function onDetached () {
	  if (this._isAttached) {
	    this._isAttached = false
	    this.$children.forEach(callDetach)
	  }
	}
	
	/**
	 * Iterator to call detached hook
	 *
	 * @param {Vue} child
	 */
	
	function callDetach (child) {
	  if (child._isAttached && !inDoc(child.$el)) {
	    child._callHook('detached')
	  }
	}
	
	/**
	 * Trigger all handlers for a hook
	 *
	 * @param {String} hook
	 */
	
	exports._callHook = function (hook) {
	  var handlers = this.$options[hook]
	  if (handlers) {
	    for (var i = 0, j = handlers.length; i < j; i++) {
	      handlers[i].call(this)
	    }
	  }
	  this.$emit('hook:' + hook)
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(22)))

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var _ = __webpack_require__(20)
	var compiler = __webpack_require__(33)
	var Observer = __webpack_require__(75)
	var Dep = __webpack_require__(38)
	var Watcher = __webpack_require__(37)
	
	/**
	 * Setup the scope of an instance, which contains:
	 * - observed data
	 * - computed properties
	 * - user methods
	 * - meta properties
	 */
	
	exports._initScope = function () {
	  this._initProps()
	  this._initMeta()
	  this._initMethods()
	  this._initData()
	  this._initComputed()
	}
	
	/**
	 * Initialize props.
	 */
	
	exports._initProps = function () {
	  var options = this.$options
	  var el = options.el
	  var props = options.props
	  if (props && !el) {
	    process.env.NODE_ENV !== 'production' && _.warn(
	      'Props will not be compiled if no `el` option is ' +
	      'provided at instantiation.'
	    )
	  }
	  // make sure to convert string selectors into element now
	  el = options.el = _.query(el)
	  this._propsUnlinkFn = el && props
	    ? compiler.compileAndLinkProps(
	        this, el, props
	      )
	    : null
	}
	
	/**
	 * Initialize the data.
	 */
	
	exports._initData = function () {
	  var propsData = this._data
	  var optionsDataFn = this.$options.data
	  var optionsData = optionsDataFn && optionsDataFn()
	  if (optionsData) {
	    this._data = optionsData
	    for (var prop in propsData) {
	      if (
	        this._props[prop].raw !== null ||
	        !optionsData.hasOwnProperty(prop)
	      ) {
	        optionsData.$set(prop, propsData[prop])
	      }
	    }
	  }
	  var data = this._data
	  // proxy data on instance
	  var keys = Object.keys(data)
	  var i, key
	  i = keys.length
	  while (i--) {
	    key = keys[i]
	    if (!_.isReserved(key)) {
	      this._proxy(key)
	    }
	  }
	  // observe data
	  Observer.create(data, this)
	}
	
	/**
	 * Swap the isntance's $data. Called in $data's setter.
	 *
	 * @param {Object} newData
	 */
	
	exports._setData = function (newData) {
	  newData = newData || {}
	  var oldData = this._data
	  this._data = newData
	  var keys, key, i
	  // copy props.
	  // this should only happen during a v-repeat of component
	  // that also happens to have compiled props.
	  var props = this.$options.props
	  if (props) {
	    i = props.length
	    while (i--) {
	      key = props[i].name
	      if (key !== '$data' && !newData.hasOwnProperty(key)) {
	        newData.$set(key, oldData[key])
	      }
	    }
	  }
	  // unproxy keys not present in new data
	  keys = Object.keys(oldData)
	  i = keys.length
	  while (i--) {
	    key = keys[i]
	    if (!_.isReserved(key) && !(key in newData)) {
	      this._unproxy(key)
	    }
	  }
	  // proxy keys not already proxied,
	  // and trigger change for changed values
	  keys = Object.keys(newData)
	  i = keys.length
	  while (i--) {
	    key = keys[i]
	    if (!this.hasOwnProperty(key) && !_.isReserved(key)) {
	      // new property
	      this._proxy(key)
	    }
	  }
	  oldData.__ob__.removeVm(this)
	  Observer.create(newData, this)
	  this._digest()
	}
	
	/**
	 * Proxy a property, so that
	 * vm.prop === vm._data.prop
	 *
	 * @param {String} key
	 */
	
	exports._proxy = function (key) {
	  // need to store ref to self here
	  // because these getter/setters might
	  // be called by child instances!
	  var self = this
	  Object.defineProperty(self, key, {
	    configurable: true,
	    enumerable: true,
	    get: function proxyGetter () {
	      return self._data[key]
	    },
	    set: function proxySetter (val) {
	      self._data[key] = val
	    }
	  })
	}
	
	/**
	 * Unproxy a property.
	 *
	 * @param {String} key
	 */
	
	exports._unproxy = function (key) {
	  delete this[key]
	}
	
	/**
	 * Force update on every watcher in scope.
	 */
	
	exports._digest = function () {
	  var i = this._watchers.length
	  while (i--) {
	    this._watchers[i].update(true) // shallow updates
	  }
	  var children = this.$children
	  i = children.length
	  while (i--) {
	    var child = children[i]
	    if (child.$options.inherit) {
	      child._digest()
	    }
	  }
	}
	
	/**
	 * Setup computed properties. They are essentially
	 * special getter/setters
	 */
	
	function noop () {}
	exports._initComputed = function () {
	  var computed = this.$options.computed
	  if (computed) {
	    for (var key in computed) {
	      var userDef = computed[key]
	      var def = {
	        enumerable: true,
	        configurable: true
	      }
	      if (typeof userDef === 'function') {
	        def.get = makeComputedGetter(userDef, this)
	        def.set = noop
	      } else {
	        def.get = userDef.get
	          ? makeComputedGetter(userDef.get, this)
	          : noop
	        def.set = userDef.set
	          ? _.bind(userDef.set, this)
	          : noop
	      }
	      Object.defineProperty(this, key, def)
	    }
	  }
	}
	
	function makeComputedGetter (getter, owner) {
	  var watcher = new Watcher(owner, getter, null, {
	    lazy: true
	  })
	  return function computedGetter () {
	    if (watcher.dirty) {
	      watcher.evaluate()
	    }
	    if (Dep.target) {
	      watcher.depend()
	    }
	    return watcher.value
	  }
	}
	
	/**
	 * Setup instance methods. Methods must be bound to the
	 * instance since they might be called by children
	 * inheriting them.
	 */
	
	exports._initMethods = function () {
	  var methods = this.$options.methods
	  if (methods) {
	    for (var key in methods) {
	      this[key] = _.bind(methods[key], this)
	    }
	  }
	}
	
	/**
	 * Initialize meta information like $index, $key & $value.
	 */
	
	exports._initMeta = function () {
	  var metas = this.$options._meta
	  if (metas) {
	    for (var key in metas) {
	      this._defineMeta(key, metas[key])
	    }
	  }
	}
	
	/**
	 * Define a meta property, e.g $index, $key, $value
	 * which only exists on the vm instance but not in $data.
	 *
	 * @param {String} key
	 * @param {*} value
	 */
	
	exports._defineMeta = function (key, value) {
	  var dep = new Dep()
	  Object.defineProperty(this, key, {
	    enumerable: true,
	    configurable: true,
	    get: function metaGetter () {
	      if (Dep.target) {
	        dep.depend()
	      }
	      return value
	    },
	    set: function metaSetter (val) {
	      if (val !== value) {
	        value = val
	        dep.notify()
	      }
	    }
	  })
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(22)))

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(20)
	var config = __webpack_require__(23)
	var Dep = __webpack_require__(38)
	var arrayMethods = __webpack_require__(76)
	var arrayKeys = Object.getOwnPropertyNames(arrayMethods)
	__webpack_require__(77)
	
	/**
	 * Observer class that are attached to each observed
	 * object. Once attached, the observer converts target
	 * object's property keys into getter/setters that
	 * collect dependencies and dispatches updates.
	 *
	 * @param {Array|Object} value
	 * @constructor
	 */
	
	function Observer (value) {
	  this.value = value
	  this.dep = new Dep()
	  _.define(value, '__ob__', this)
	  if (_.isArray(value)) {
	    var augment = config.proto && _.hasProto
	      ? protoAugment
	      : copyAugment
	    augment(value, arrayMethods, arrayKeys)
	    this.observeArray(value)
	  } else {
	    this.walk(value)
	  }
	}
	
	// Static methods
	
	/**
	 * Attempt to create an observer instance for a value,
	 * returns the new observer if successfully observed,
	 * or the existing observer if the value already has one.
	 *
	 * @param {*} value
	 * @param {Vue} [vm]
	 * @return {Observer|undefined}
	 * @static
	 */
	
	Observer.create = function (value, vm) {
	  var ob
	  if (
	    value &&
	    value.hasOwnProperty('__ob__') &&
	    value.__ob__ instanceof Observer
	  ) {
	    ob = value.__ob__
	  } else if (
	    _.isObject(value) &&
	    !Object.isFrozen(value) &&
	    !value._isVue
	  ) {
	    ob = new Observer(value)
	  }
	  if (ob && vm) {
	    ob.addVm(vm)
	  }
	  return ob
	}
	
	// Instance methods
	
	var p = Observer.prototype
	
	/**
	 * Walk through each property and convert them into
	 * getter/setters. This method should only be called when
	 * value type is Object. Properties prefixed with `$` or `_`
	 * and accessor properties are ignored.
	 *
	 * @param {Object} obj
	 */
	
	p.walk = function (obj) {
	  var keys = Object.keys(obj)
	  var i = keys.length
	  var key, prefix
	  while (i--) {
	    key = keys[i]
	    prefix = key.charCodeAt(0)
	    if (prefix !== 0x24 && prefix !== 0x5F) { // skip $ or _
	      this.convert(key, obj[key])
	    }
	  }
	}
	
	/**
	 * Try to carete an observer for a child value,
	 * and if value is array, link dep to the array.
	 *
	 * @param {*} val
	 * @return {Dep|undefined}
	 */
	
	p.observe = function (val) {
	  return Observer.create(val)
	}
	
	/**
	 * Observe a list of Array items.
	 *
	 * @param {Array} items
	 */
	
	p.observeArray = function (items) {
	  var i = items.length
	  while (i--) {
	    this.observe(items[i])
	  }
	}
	
	/**
	 * Convert a property into getter/setter so we can emit
	 * the events when the property is accessed/changed.
	 *
	 * @param {String} key
	 * @param {*} val
	 */
	
	p.convert = function (key, val) {
	  var ob = this
	  var childOb = ob.observe(val)
	  var dep = new Dep()
	  Object.defineProperty(ob.value, key, {
	    enumerable: true,
	    configurable: true,
	    get: function () {
	      if (Dep.target) {
	        dep.depend()
	        if (childOb) {
	          childOb.dep.depend()
	        }
	        if (_.isArray(val)) {
	          for (var e, i = 0, l = val.length; i < l; i++) {
	            e = val[i]
	            e && e.__ob__ && e.__ob__.dep.depend()
	          }
	        }
	      }
	      return val
	    },
	    set: function (newVal) {
	      if (newVal === val) return
	      val = newVal
	      childOb = ob.observe(newVal)
	      dep.notify()
	    }
	  })
	}
	
	/**
	 * Add an owner vm, so that when $add/$delete mutations
	 * happen we can notify owner vms to proxy the keys and
	 * digest the watchers. This is only called when the object
	 * is observed as an instance's root $data.
	 *
	 * @param {Vue} vm
	 */
	
	p.addVm = function (vm) {
	  (this.vms || (this.vms = [])).push(vm)
	}
	
	/**
	 * Remove an owner vm. This is called when the object is
	 * swapped out as an instance's $data object.
	 *
	 * @param {Vue} vm
	 */
	
	p.removeVm = function (vm) {
	  this.vms.$remove(vm)
	}
	
	// helpers
	
	/**
	 * Augment an target Object or Array by intercepting
	 * the prototype chain using __proto__
	 *
	 * @param {Object|Array} target
	 * @param {Object} proto
	 */
	
	function protoAugment (target, src) {
	  target.__proto__ = src
	}
	
	/**
	 * Augment an target Object or Array by defining
	 * hidden properties.
	 *
	 * @param {Object|Array} target
	 * @param {Object} proto
	 */
	
	function copyAugment (target, src, keys) {
	  var i = keys.length
	  var key
	  while (i--) {
	    key = keys[i]
	    _.define(target, key, src[key])
	  }
	}
	
	module.exports = Observer


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(20)
	var arrayProto = Array.prototype
	var arrayMethods = Object.create(arrayProto)
	
	/**
	 * Intercept mutating methods and emit events
	 */
	
	;[
	  'push',
	  'pop',
	  'shift',
	  'unshift',
	  'splice',
	  'sort',
	  'reverse'
	]
	.forEach(function (method) {
	  // cache original method
	  var original = arrayProto[method]
	  _.define(arrayMethods, method, function mutator () {
	    // avoid leaking arguments:
	    // http://jsperf.com/closure-with-arguments
	    var i = arguments.length
	    var args = new Array(i)
	    while (i--) {
	      args[i] = arguments[i]
	    }
	    var result = original.apply(this, args)
	    var ob = this.__ob__
	    var inserted
	    switch (method) {
	      case 'push':
	        inserted = args
	        break
	      case 'unshift':
	        inserted = args
	        break
	      case 'splice':
	        inserted = args.slice(2)
	        break
	    }
	    if (inserted) ob.observeArray(inserted)
	    // notify change
	    ob.dep.notify()
	    return result
	  })
	})
	
	/**
	 * Swap the element at the given index with a new value
	 * and emits corresponding event.
	 *
	 * @param {Number} index
	 * @param {*} val
	 * @return {*} - replaced element
	 */
	
	_.define(
	  arrayProto,
	  '$set',
	  function $set (index, val) {
	    if (index >= this.length) {
	      this.length = index + 1
	    }
	    return this.splice(index, 1, val)[0]
	  }
	)
	
	/**
	 * Convenience method to remove the element at given index.
	 *
	 * @param {Number} index
	 * @param {*} val
	 */
	
	_.define(
	  arrayProto,
	  '$remove',
	  function $remove (index) {
	    /* istanbul ignore if */
	    if (!this.length) return
	    if (typeof index !== 'number') {
	      index = _.indexOf(this, index)
	    }
	    if (index > -1) {
	      return this.splice(index, 1)
	    }
	  }
	)
	
	module.exports = arrayMethods


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(20)
	var objProto = Object.prototype
	
	/**
	 * Add a new property to an observed object
	 * and emits corresponding event
	 *
	 * @param {String} key
	 * @param {*} val
	 * @public
	 */
	
	_.define(
	  objProto,
	  '$add',
	  function $add (key, val) {
	    if (this.hasOwnProperty(key)) return
	    var ob = this.__ob__
	    if (!ob || _.isReserved(key)) {
	      this[key] = val
	      return
	    }
	    ob.convert(key, val)
	    ob.dep.notify()
	    if (ob.vms) {
	      var i = ob.vms.length
	      while (i--) {
	        var vm = ob.vms[i]
	        vm._proxy(key)
	        vm._digest()
	      }
	    }
	  }
	)
	
	/**
	 * Set a property on an observed object, calling add to
	 * ensure the property is observed.
	 *
	 * @param {String} key
	 * @param {*} val
	 * @public
	 */
	
	_.define(
	  objProto,
	  '$set',
	  function $set (key, val) {
	    this.$add(key, val)
	    this[key] = val
	  }
	)
	
	/**
	 * Deletes a property from an observed object
	 * and emits corresponding event
	 *
	 * @param {String} key
	 * @public
	 */
	
	_.define(
	  objProto,
	  '$delete',
	  function $delete (key) {
	    if (!this.hasOwnProperty(key)) return
	    delete this[key]
	    var ob = this.__ob__
	    if (!ob || _.isReserved(key)) {
	      return
	    }
	    ob.dep.notify()
	    if (ob.vms) {
	      var i = ob.vms.length
	      while (i--) {
	        var vm = ob.vms[i]
	        vm._unproxy(key)
	        vm._digest()
	      }
	    }
	  }
	)


/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(20)
	var Directive = __webpack_require__(79)
	var compiler = __webpack_require__(33)
	
	/**
	 * Transclude, compile and link element.
	 *
	 * If a pre-compiled linker is available, that means the
	 * passed in element will be pre-transcluded and compiled
	 * as well - all we need to do is to call the linker.
	 *
	 * Otherwise we need to call transclude/compile/link here.
	 *
	 * @param {Element} el
	 * @return {Element}
	 */
	
	exports._compile = function (el) {
	  var options = this.$options
	  var host = this._host
	  if (options._linkFn) {
	    // pre-transcluded with linker, just use it
	    this._initElement(el)
	    this._unlinkFn = options._linkFn(this, el, host)
	  } else {
	    // transclude and init element
	    // transclude can potentially replace original
	    // so we need to keep reference; this step also injects
	    // the template and caches the original attributes
	    // on the container node and replacer node.
	    var original = el
	    el = compiler.transclude(el, options)
	    this._initElement(el)
	
	    // root is always compiled per-instance, because
	    // container attrs and props can be different every time.
	    var rootUnlinkFn =
	      compiler.compileAndLinkRoot(this, el, options)
	
	    // compile and link the rest
	    var linker
	    var ctor = this.constructor
	    // component compilation can be cached
	    // as long as it's not using inline-template
	    if (options._linkerCachable) {
	      linker = ctor.linker
	      if (!linker) {
	        linker = ctor.linker = compiler.compile(el, options)
	      }
	    }
	    var contentUnlinkFn = linker
	      ? linker(this, el)
	      : compiler.compile(el, options)(this, el, host)
	
	    this._unlinkFn = function () {
	      rootUnlinkFn()
	      // passing destroying: true to avoid searching and
	      // splicing the directives
	      contentUnlinkFn(true)
	    }
	
	    // finally replace original
	    if (options.replace) {
	      _.replace(original, el)
	    }
	  }
	  return el
	}
	
	/**
	 * Initialize instance element. Called in the public
	 * $mount() method.
	 *
	 * @param {Element} el
	 */
	
	exports._initElement = function (el) {
	  if (el instanceof DocumentFragment) {
	    this._isFragment = true
	    this.$el = this._fragmentStart = el.firstChild
	    this._fragmentEnd = el.lastChild
	    // set persisted text anchors to empty
	    if (this._fragmentStart.nodeType === 3) {
	      this._fragmentStart.data = this._fragmentEnd.data = ''
	    }
	    this._blockFragment = el
	  } else {
	    this.$el = el
	  }
	  this.$el.__vue__ = this
	  this._callHook('beforeCompile')
	}
	
	/**
	 * Create and bind a directive to an element.
	 *
	 * @param {String} name - directive name
	 * @param {Node} node   - target node
	 * @param {Object} desc - parsed directive descriptor
	 * @param {Object} def  - directive definition object
	 * @param {Vue|undefined} host - transclusion host component
	 */
	
	exports._bindDir = function (name, node, desc, def, host) {
	  this._directives.push(
	    new Directive(name, node, this, desc, def, host)
	  )
	}
	
	/**
	 * Teardown an instance, unobserves the data, unbind all the
	 * directives, turn off all the event listeners, etc.
	 *
	 * @param {Boolean} remove - whether to remove the DOM node.
	 * @param {Boolean} deferCleanup - if true, defer cleanup to
	 *                                 be called later
	 */
	
	exports._destroy = function (remove, deferCleanup) {
	  if (this._isBeingDestroyed) {
	    return
	  }
	  this._callHook('beforeDestroy')
	  this._isBeingDestroyed = true
	  var i
	  // remove self from parent. only necessary
	  // if parent is not being destroyed as well.
	  var parent = this.$parent
	  if (parent && !parent._isBeingDestroyed) {
	    parent.$children.$remove(this)
	  }
	  // destroy all children.
	  i = this.$children.length
	  while (i--) {
	    this.$children[i].$destroy()
	  }
	  // teardown props
	  if (this._propsUnlinkFn) {
	    this._propsUnlinkFn()
	  }
	  // teardown all directives. this also tearsdown all
	  // directive-owned watchers.
	  if (this._unlinkFn) {
	    this._unlinkFn()
	  }
	  i = this._watchers.length
	  while (i--) {
	    this._watchers[i].teardown()
	  }
	  // remove reference to self on $el
	  if (this.$el) {
	    this.$el.__vue__ = null
	  }
	  // remove DOM element
	  var self = this
	  if (remove && this.$el) {
	    this.$remove(function () {
	      self._cleanup()
	    })
	  } else if (!deferCleanup) {
	    this._cleanup()
	  }
	}
	
	/**
	 * Clean up to ensure garbage collection.
	 * This is called after the leave transition if there
	 * is any.
	 */
	
	exports._cleanup = function () {
	  // remove reference from data ob
	  // frozen object may not have observer.
	  if (this._data.__ob__) {
	    this._data.__ob__.removeVm(this)
	  }
	  // Clean up references to private properties and other
	  // instances. preserve reference to _data so that proxy
	  // accessors still work. The only potential side effect
	  // here is that mutating the instance after it's destroyed
	  // may affect the state of other components that are still
	  // observing the same object, but that seems to be a
	  // reasonable responsibility for the user rather than
	  // always throwing an error on them.
	  this.$el =
	  this.$parent =
	  this.$root =
	  this.$children =
	  this._watchers =
	  this._directives = null
	  // call the last hook...
	  this._isDestroyed = true
	  this._callHook('destroyed')
	  // turn off all instance listeners.
	  this.$off()
	}


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(20)
	var config = __webpack_require__(23)
	var Watcher = __webpack_require__(37)
	var textParser = __webpack_require__(30)
	var expParser = __webpack_require__(39)
	
	/**
	 * A directive links a DOM element with a piece of data,
	 * which is the result of evaluating an expression.
	 * It registers a watcher with the expression and calls
	 * the DOM update function when a change is triggered.
	 *
	 * @param {String} name
	 * @param {Node} el
	 * @param {Vue} vm
	 * @param {Object} descriptor
	 *                 - {String} expression
	 *                 - {String} [arg]
	 *                 - {Array<Object>} [filters]
	 * @param {Object} def - directive definition object
	 * @param {Vue|undefined} host - transclusion host target
	 * @constructor
	 */
	
	function Directive (name, el, vm, descriptor, def, host) {
	  // public
	  this.name = name
	  this.el = el
	  this.vm = vm
	  // copy descriptor props
	  this.raw = descriptor.raw
	  this.expression = descriptor.expression
	  this.arg = descriptor.arg
	  this.filters = descriptor.filters
	  // private
	  this._descriptor = descriptor
	  this._host = host
	  this._locked = false
	  this._bound = false
	  // init
	  this._bind(def)
	}
	
	var p = Directive.prototype
	
	/**
	 * Initialize the directive, mixin definition properties,
	 * setup the watcher, call definition bind() and update()
	 * if present.
	 *
	 * @param {Object} def
	 */
	
	p._bind = function (def) {
	  if (
	    (this.name !== 'cloak' || this.vm._isCompiled) &&
	    this.el && this.el.removeAttribute
	  ) {
	    this.el.removeAttribute(config.prefix + this.name)
	  }
	  if (typeof def === 'function') {
	    this.update = def
	  } else {
	    _.extend(this, def)
	  }
	  this._watcherExp = this.expression
	  this._checkDynamicLiteral()
	  if (this.bind) {
	    this.bind()
	  }
	  if (this._watcherExp &&
	      (this.update || this.twoWay) &&
	      (!this.isLiteral || this._isDynamicLiteral) &&
	      !this._checkStatement()) {
	    // wrapped updater for context
	    var dir = this
	    var update = this._update = this.update
	      ? function (val, oldVal) {
	          if (!dir._locked) {
	            dir.update(val, oldVal)
	          }
	        }
	      : function () {} // noop if no update is provided
	    // pre-process hook called before the value is piped
	    // through the filters. used in v-repeat.
	    var preProcess = this._preProcess
	      ? _.bind(this._preProcess, this)
	      : null
	    var watcher = this._watcher = new Watcher(
	      this.vm,
	      this._watcherExp,
	      update, // callback
	      {
	        filters: this.filters,
	        twoWay: this.twoWay,
	        deep: this.deep,
	        preProcess: preProcess
	      }
	    )
	    if (this._initValue != null) {
	      watcher.set(this._initValue)
	    } else if (this.update) {
	      this.update(watcher.value)
	    }
	  }
	  this._bound = true
	}
	
	/**
	 * check if this is a dynamic literal binding.
	 *
	 * e.g. v-component="{{currentView}}"
	 */
	
	p._checkDynamicLiteral = function () {
	  var expression = this.expression
	  if (expression && this.isLiteral) {
	    var tokens = textParser.parse(expression)
	    if (tokens) {
	      var exp = textParser.tokensToExp(tokens)
	      this.expression = this.vm.$get(exp)
	      this._watcherExp = exp
	      this._isDynamicLiteral = true
	    }
	  }
	}
	
	/**
	 * Check if the directive is a function caller
	 * and if the expression is a callable one. If both true,
	 * we wrap up the expression and use it as the event
	 * handler.
	 *
	 * e.g. v-on="click: a++"
	 *
	 * @return {Boolean}
	 */
	
	p._checkStatement = function () {
	  var expression = this.expression
	  if (
	    expression && this.acceptStatement &&
	    !expParser.isSimplePath(expression)
	  ) {
	    var fn = expParser.parse(expression).get
	    var vm = this.vm
	    var handler = function () {
	      fn.call(vm, vm)
	    }
	    if (this.filters) {
	      handler = vm._applyFilters(handler, null, this.filters)
	    }
	    this.update(handler)
	    return true
	  }
	}
	
	/**
	 * Check for an attribute directive param, e.g. lazy
	 *
	 * @param {String} name
	 * @return {String}
	 */
	
	p._checkParam = function (name) {
	  var param = this.el.getAttribute(name)
	  if (param !== null) {
	    this.el.removeAttribute(name)
	    param = this.vm.$interpolate(param)
	  }
	  return param
	}
	
	/**
	 * Teardown the watcher and call unbind.
	 */
	
	p._teardown = function () {
	  if (this._bound) {
	    this._bound = false
	    if (this.unbind) {
	      this.unbind()
	    }
	    if (this._watcher) {
	      this._watcher.teardown()
	    }
	    this.vm = this.el = this._watcher = null
	  }
	}
	
	/**
	 * Set the corresponding value with the setter.
	 * This should only be used in two-way directives
	 * e.g. v-model.
	 *
	 * @param {*} value
	 * @public
	 */
	
	p.set = function (value) {
	  if (this.twoWay) {
	    this._withLock(function () {
	      this._watcher.set(value)
	    })
	  }
	}
	
	/**
	 * Execute a function while preventing that function from
	 * triggering updates on this directive instance.
	 *
	 * @param {Function} fn
	 */
	
	p._withLock = function (fn) {
	  var self = this
	  self._locked = true
	  fn.call(self)
	  _.nextTick(function () {
	    self._locked = false
	  })
	}
	
	module.exports = Directive


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var _ = __webpack_require__(20)
	
	/**
	 * Apply a list of filter (descriptors) to a value.
	 * Using plain for loops here because this will be called in
	 * the getter of any watcher with filters so it is very
	 * performance sensitive.
	 *
	 * @param {*} value
	 * @param {*} [oldValue]
	 * @param {Array} filters
	 * @param {Boolean} write
	 * @return {*}
	 */
	
	exports._applyFilters = function (value, oldValue, filters, write) {
	  var filter, fn, args, arg, offset, i, l, j, k
	  for (i = 0, l = filters.length; i < l; i++) {
	    filter = filters[i]
	    fn = _.resolveAsset(this.$options, 'filters', filter.name)
	    if (process.env.NODE_ENV !== 'production') {
	      _.assertAsset(fn, 'filter', filter.name)
	    }
	    if (!fn) continue
	    fn = write ? fn.write : (fn.read || fn)
	    if (typeof fn !== 'function') continue
	    args = write ? [value, oldValue] : [value]
	    offset = write ? 2 : 1
	    if (filter.args) {
	      for (j = 0, k = filter.args.length; j < k; j++) {
	        arg = filter.args[j]
	        args[j + offset] = arg.dynamic
	          ? this.$get(arg.value)
	          : arg.value
	      }
	    }
	    value = fn.apply(this, args)
	  }
	  return value
	}
	
	/**
	 * Resolve a component, depending on whether the component
	 * is defined normally or using an async factory function.
	 * Resolves synchronously if already resolved, otherwise
	 * resolves asynchronously and caches the resolved
	 * constructor on the factory.
	 *
	 * @param {String} id
	 * @param {Function} cb
	 */
	
	exports._resolveComponent = function (id, cb) {
	  var factory = _.resolveAsset(this.$options, 'components', id)
	  if (process.env.NODE_ENV !== 'production') {
	    _.assertAsset(factory, 'component', id)
	  }
	  if (!factory) {
	    return
	  }
	  // async component factory
	  if (!factory.options) {
	    if (factory.resolved) {
	      // cached
	      cb(factory.resolved)
	    } else if (factory.requested) {
	      // pool callbacks
	      factory.pendingCallbacks.push(cb)
	    } else {
	      factory.requested = true
	      var cbs = factory.pendingCallbacks = [cb]
	      factory(function resolve (res) {
	        if (_.isPlainObject(res)) {
	          res = _.Vue.extend(res)
	        }
	        // cache resolved
	        factory.resolved = res
	        // invoke callbacks
	        for (var i = 0, l = cbs.length; i < l; i++) {
	          cbs[i](res)
	        }
	      }, function reject (reason) {
	        process.env.NODE_ENV !== 'production' && _.warn(
	          'Failed to resolve async component: ' + id + '. ' +
	          (reason ? '\nReason: ' + reason : '')
	        )
	      })
	    }
	  } else {
	    // normal component
	    cb(factory)
	  }
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(22)))

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var Watcher = __webpack_require__(37)
	var Path = __webpack_require__(40)
	var textParser = __webpack_require__(30)
	var dirParser = __webpack_require__(32)
	var expParser = __webpack_require__(39)
	var filterRE = /[^|]\|[^|]/
	
	/**
	 * Get the value from an expression on this vm.
	 *
	 * @param {String} exp
	 * @return {*}
	 */
	
	exports.$get = function (exp) {
	  var res = expParser.parse(exp)
	  if (res) {
	    try {
	      return res.get.call(this, this)
	    } catch (e) {}
	  }
	}
	
	/**
	 * Set the value from an expression on this vm.
	 * The expression must be a valid left-hand
	 * expression in an assignment.
	 *
	 * @param {String} exp
	 * @param {*} val
	 */
	
	exports.$set = function (exp, val) {
	  var res = expParser.parse(exp, true)
	  if (res && res.set) {
	    res.set.call(this, this, val)
	  }
	}
	
	/**
	 * Add a property on the VM
	 *
	 * @param {String} key
	 * @param {*} val
	 */
	
	exports.$add = function (key, val) {
	  this._data.$add(key, val)
	}
	
	/**
	 * Delete a property on the VM
	 *
	 * @param {String} key
	 */
	
	exports.$delete = function (key) {
	  this._data.$delete(key)
	}
	
	/**
	 * Watch an expression, trigger callback when its
	 * value changes.
	 *
	 * @param {String} exp
	 * @param {Function} cb
	 * @param {Object} [options]
	 *                 - {Boolean} deep
	 *                 - {Boolean} immediate
	 *                 - {Boolean} user
	 * @return {Function} - unwatchFn
	 */
	
	exports.$watch = function (exp, cb, options) {
	  var vm = this
	  var wrappedCb = function (val, oldVal) {
	    cb.call(vm, val, oldVal)
	  }
	  var watcher = new Watcher(vm, exp, wrappedCb, {
	    deep: options && options.deep,
	    user: !options || options.user !== false
	  })
	  if (options && options.immediate) {
	    wrappedCb(watcher.value)
	  }
	  return function unwatchFn () {
	    watcher.teardown()
	  }
	}
	
	/**
	 * Evaluate a text directive, including filters.
	 *
	 * @param {String} text
	 * @return {String}
	 */
	
	exports.$eval = function (text) {
	  // check for filters.
	  if (filterRE.test(text)) {
	    var dir = dirParser.parse(text)[0]
	    // the filter regex check might give false positive
	    // for pipes inside strings, so it's possible that
	    // we don't get any filters here
	    var val = this.$get(dir.expression)
	    return dir.filters
	      ? this._applyFilters(val, null, dir.filters)
	      : val
	  } else {
	    // no filter
	    return this.$get(text)
	  }
	}
	
	/**
	 * Interpolate a piece of template text.
	 *
	 * @param {String} text
	 * @return {String}
	 */
	
	exports.$interpolate = function (text) {
	  var tokens = textParser.parse(text)
	  var vm = this
	  if (tokens) {
	    return tokens.length === 1
	      ? vm.$eval(tokens[0].value)
	      : tokens.map(function (token) {
	          return token.tag
	            ? vm.$eval(token.value)
	            : token.value
	        }).join('')
	  } else {
	    return text
	  }
	}
	
	/**
	 * Log instance data as a plain JS object
	 * so that it is easier to inspect in console.
	 * This method assumes console is available.
	 *
	 * @param {String} [path]
	 */
	
	exports.$log = function (path) {
	  var data = path
	    ? Path.get(this._data, path)
	    : this._data
	  if (data) {
	    data = JSON.parse(JSON.stringify(data))
	  }
	  console.log(data)
	}


/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(20)
	var transition = __webpack_require__(51)
	
	/**
	 * Convenience on-instance nextTick. The callback is
	 * auto-bound to the instance, and this avoids component
	 * modules having to rely on the global Vue.
	 *
	 * @param {Function} fn
	 */
	
	exports.$nextTick = function (fn) {
	  _.nextTick(fn, this)
	}
	
	/**
	 * Append instance to target
	 *
	 * @param {Node} target
	 * @param {Function} [cb]
	 * @param {Boolean} [withTransition] - defaults to true
	 */
	
	exports.$appendTo = function (target, cb, withTransition) {
	  return insert(
	    this, target, cb, withTransition,
	    append, transition.append
	  )
	}
	
	/**
	 * Prepend instance to target
	 *
	 * @param {Node} target
	 * @param {Function} [cb]
	 * @param {Boolean} [withTransition] - defaults to true
	 */
	
	exports.$prependTo = function (target, cb, withTransition) {
	  target = query(target)
	  if (target.hasChildNodes()) {
	    this.$before(target.firstChild, cb, withTransition)
	  } else {
	    this.$appendTo(target, cb, withTransition)
	  }
	  return this
	}
	
	/**
	 * Insert instance before target
	 *
	 * @param {Node} target
	 * @param {Function} [cb]
	 * @param {Boolean} [withTransition] - defaults to true
	 */
	
	exports.$before = function (target, cb, withTransition) {
	  return insert(
	    this, target, cb, withTransition,
	    before, transition.before
	  )
	}
	
	/**
	 * Insert instance after target
	 *
	 * @param {Node} target
	 * @param {Function} [cb]
	 * @param {Boolean} [withTransition] - defaults to true
	 */
	
	exports.$after = function (target, cb, withTransition) {
	  target = query(target)
	  if (target.nextSibling) {
	    this.$before(target.nextSibling, cb, withTransition)
	  } else {
	    this.$appendTo(target.parentNode, cb, withTransition)
	  }
	  return this
	}
	
	/**
	 * Remove instance from DOM
	 *
	 * @param {Function} [cb]
	 * @param {Boolean} [withTransition] - defaults to true
	 */
	
	exports.$remove = function (cb, withTransition) {
	  if (!this.$el.parentNode) {
	    return cb && cb()
	  }
	  var inDoc = this._isAttached && _.inDoc(this.$el)
	  // if we are not in document, no need to check
	  // for transitions
	  if (!inDoc) withTransition = false
	  var op
	  var self = this
	  var realCb = function () {
	    if (inDoc) self._callHook('detached')
	    if (cb) cb()
	  }
	  if (
	    this._isFragment &&
	    !this._blockFragment.hasChildNodes()
	  ) {
	    op = withTransition === false
	      ? append
	      : transition.removeThenAppend
	    blockOp(this, this._blockFragment, op, realCb)
	  } else {
	    op = withTransition === false
	      ? remove
	      : transition.remove
	    op(this.$el, this, realCb)
	  }
	  return this
	}
	
	/**
	 * Shared DOM insertion function.
	 *
	 * @param {Vue} vm
	 * @param {Element} target
	 * @param {Function} [cb]
	 * @param {Boolean} [withTransition]
	 * @param {Function} op1 - op for non-transition insert
	 * @param {Function} op2 - op for transition insert
	 * @return vm
	 */
	
	function insert (vm, target, cb, withTransition, op1, op2) {
	  target = query(target)
	  var targetIsDetached = !_.inDoc(target)
	  var op = withTransition === false || targetIsDetached
	    ? op1
	    : op2
	  var shouldCallHook =
	    !targetIsDetached &&
	    !vm._isAttached &&
	    !_.inDoc(vm.$el)
	  if (vm._isFragment) {
	    blockOp(vm, target, op, cb)
	  } else {
	    op(vm.$el, target, vm, cb)
	  }
	  if (shouldCallHook) {
	    vm._callHook('attached')
	  }
	  return vm
	}
	
	/**
	 * Execute a transition operation on a fragment instance,
	 * iterating through all its block nodes.
	 *
	 * @param {Vue} vm
	 * @param {Node} target
	 * @param {Function} op
	 * @param {Function} cb
	 */
	
	function blockOp (vm, target, op, cb) {
	  var current = vm._fragmentStart
	  var end = vm._fragmentEnd
	  var next
	  while (next !== end) {
	    next = current.nextSibling
	    op(current, target, vm)
	    current = next
	  }
	  op(end, target, vm, cb)
	}
	
	/**
	 * Check for selectors
	 *
	 * @param {String|Element} el
	 */
	
	function query (el) {
	  return typeof el === 'string'
	    ? document.querySelector(el)
	    : el
	}
	
	/**
	 * Append operation that takes a callback.
	 *
	 * @param {Node} el
	 * @param {Node} target
	 * @param {Vue} vm - unused
	 * @param {Function} [cb]
	 */
	
	function append (el, target, vm, cb) {
	  target.appendChild(el)
	  if (cb) cb()
	}
	
	/**
	 * InsertBefore operation that takes a callback.
	 *
	 * @param {Node} el
	 * @param {Node} target
	 * @param {Vue} vm - unused
	 * @param {Function} [cb]
	 */
	
	function before (el, target, vm, cb) {
	  _.before(el, target)
	  if (cb) cb()
	}
	
	/**
	 * Remove operation that takes a callback.
	 *
	 * @param {Node} el
	 * @param {Vue} vm - unused
	 * @param {Function} [cb]
	 */
	
	function remove (el, vm, cb) {
	  _.remove(el)
	  if (cb) cb()
	}


/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(20)
	
	/**
	 * Listen on the given `event` with `fn`.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 */
	
	exports.$on = function (event, fn) {
	  (this._events[event] || (this._events[event] = []))
	    .push(fn)
	  modifyListenerCount(this, event, 1)
	  return this
	}
	
	/**
	 * Adds an `event` listener that will be invoked a single
	 * time then automatically removed.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 */
	
	exports.$once = function (event, fn) {
	  var self = this
	  function on () {
	    self.$off(event, on)
	    fn.apply(this, arguments)
	  }
	  on.fn = fn
	  this.$on(event, on)
	  return this
	}
	
	/**
	 * Remove the given callback for `event` or all
	 * registered callbacks.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 */
	
	exports.$off = function (event, fn) {
	  var cbs
	  // all
	  if (!arguments.length) {
	    if (this.$parent) {
	      for (event in this._events) {
	        cbs = this._events[event]
	        if (cbs) {
	          modifyListenerCount(this, event, -cbs.length)
	        }
	      }
	    }
	    this._events = {}
	    return this
	  }
	  // specific event
	  cbs = this._events[event]
	  if (!cbs) {
	    return this
	  }
	  if (arguments.length === 1) {
	    modifyListenerCount(this, event, -cbs.length)
	    this._events[event] = null
	    return this
	  }
	  // specific handler
	  var cb
	  var i = cbs.length
	  while (i--) {
	    cb = cbs[i]
	    if (cb === fn || cb.fn === fn) {
	      modifyListenerCount(this, event, -1)
	      cbs.splice(i, 1)
	      break
	    }
	  }
	  return this
	}
	
	/**
	 * Trigger an event on self.
	 *
	 * @param {String} event
	 */
	
	exports.$emit = function (event) {
	  this._eventCancelled = false
	  var cbs = this._events[event]
	  if (cbs) {
	    // avoid leaking arguments:
	    // http://jsperf.com/closure-with-arguments
	    var i = arguments.length - 1
	    var args = new Array(i)
	    while (i--) {
	      args[i] = arguments[i + 1]
	    }
	    i = 0
	    cbs = cbs.length > 1
	      ? _.toArray(cbs)
	      : cbs
	    for (var l = cbs.length; i < l; i++) {
	      if (cbs[i].apply(this, args) === false) {
	        this._eventCancelled = true
	      }
	    }
	  }
	  return this
	}
	
	/**
	 * Recursively broadcast an event to all children instances.
	 *
	 * @param {String} event
	 * @param {...*} additional arguments
	 */
	
	exports.$broadcast = function (event) {
	  // if no child has registered for this event,
	  // then there's no need to broadcast.
	  if (!this._eventsCount[event]) return
	  var children = this.$children
	  for (var i = 0, l = children.length; i < l; i++) {
	    var child = children[i]
	    child.$emit.apply(child, arguments)
	    if (!child._eventCancelled) {
	      child.$broadcast.apply(child, arguments)
	    }
	  }
	  return this
	}
	
	/**
	 * Recursively propagate an event up the parent chain.
	 *
	 * @param {String} event
	 * @param {...*} additional arguments
	 */
	
	exports.$dispatch = function () {
	  var parent = this.$parent
	  while (parent) {
	    parent.$emit.apply(parent, arguments)
	    parent = parent._eventCancelled
	      ? null
	      : parent.$parent
	  }
	  return this
	}
	
	/**
	 * Modify the listener counts on all parents.
	 * This bookkeeping allows $broadcast to return early when
	 * no child has listened to a certain event.
	 *
	 * @param {Vue} vm
	 * @param {String} event
	 * @param {Number} count
	 */
	
	var hookRE = /^hook:/
	function modifyListenerCount (vm, event, count) {
	  var parent = vm.$parent
	  // hooks do not get broadcasted so no need
	  // to do bookkeeping for them
	  if (!parent || !count || hookRE.test(event)) return
	  while (parent) {
	    parent._eventsCount[event] =
	      (parent._eventsCount[event] || 0) + count
	    parent = parent.$parent
	  }
	}


/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(20)
	
	/**
	 * Create a child instance that prototypally inherits
	 * data on parent. To achieve that we create an intermediate
	 * constructor with its prototype pointing to parent.
	 *
	 * @param {Object} opts
	 * @param {Function} [BaseCtor]
	 * @return {Vue}
	 * @public
	 */
	
	exports.$addChild = function (opts, BaseCtor) {
	  BaseCtor = BaseCtor || _.Vue
	  opts = opts || {}
	  var parent = this
	  var ChildVue
	  var inherit = opts.inherit !== undefined
	    ? opts.inherit
	    : BaseCtor.options.inherit
	  if (inherit) {
	    var ctors = parent._childCtors
	    ChildVue = ctors[BaseCtor.cid]
	    if (!ChildVue) {
	      var optionName = BaseCtor.options.name
	      var className = optionName
	        ? _.classify(optionName)
	        : 'VueComponent'
	      ChildVue = new Function(
	        'return function ' + className + ' (options) {' +
	        'this.constructor = ' + className + ';' +
	        'this._init(options) }'
	      )()
	      ChildVue.options = BaseCtor.options
	      ChildVue.linker = BaseCtor.linker
	      // important: transcluded inline repeaters should
	      // inherit from outer scope rather than host
	      ChildVue.prototype = opts._context || this
	      ctors[BaseCtor.cid] = ChildVue
	    }
	  } else {
	    ChildVue = BaseCtor
	  }
	  opts._parent = parent
	  opts._root = parent.$root
	  var child = new ChildVue(opts)
	  return child
	}


/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var _ = __webpack_require__(20)
	var compiler = __webpack_require__(33)
	
	/**
	 * Set instance target element and kick off the compilation
	 * process. The passed in `el` can be a selector string, an
	 * existing Element, or a DocumentFragment (for block
	 * instances).
	 *
	 * @param {Element|DocumentFragment|string} el
	 * @public
	 */
	
	exports.$mount = function (el) {
	  if (this._isCompiled) {
	    process.env.NODE_ENV !== 'production' && _.warn(
	      '$mount() should be called only once.'
	    )
	    return
	  }
	  el = _.query(el)
	  if (!el) {
	    el = document.createElement('div')
	  }
	  this._compile(el)
	  this._isCompiled = true
	  this._callHook('compiled')
	  this._initDOMHooks()
	  if (_.inDoc(this.$el)) {
	    this._callHook('attached')
	    ready.call(this)
	  } else {
	    this.$once('hook:attached', ready)
	  }
	  return this
	}
	
	/**
	 * Mark an instance as ready.
	 */
	
	function ready () {
	  this._isAttached = true
	  this._isReady = true
	  this._callHook('ready')
	}
	
	/**
	 * Teardown the instance, simply delegate to the internal
	 * _destroy.
	 */
	
	exports.$destroy = function (remove, deferCleanup) {
	  this._destroy(remove, deferCleanup)
	}
	
	/**
	 * Partially compile a piece of DOM and return a
	 * decompile function.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Vue} [host]
	 * @return {Function}
	 */
	
	exports.$compile = function (el, host) {
	  return compiler.compile(el, this.$options, true, host)(this, el)
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(22)))

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	
	
	//
	// Generated on Tue Dec 16 2014 12:13:47 GMT+0100 (CET) by Charlie Robbins, Paolo Fragomeni & the Contributors (Using Codesurgeon).
	// Version 1.2.6
	//
	
	(function (exports) {
	
	/*
	 * browser.js: Browser specific functionality for director.
	 *
	 * (C) 2011, Charlie Robbins, Paolo Fragomeni, & the Contributors.
	 * MIT LICENSE
	 *
	 */
	
	var dloc = document.location;
	
	function dlocHashEmpty() {
	  // Non-IE browsers return '' when the address bar shows '#'; Director's logic
	  // assumes both mean empty.
	  return dloc.hash === '' || dloc.hash === '#';
	}
	
	var listener = {
	  mode: 'modern',
	  hash: dloc.hash,
	  history: false,
	
	  check: function () {
	    var h = dloc.hash;
	    if (h != this.hash) {
	      this.hash = h;
	      this.onHashChanged();
	    }
	  },
	
	  fire: function () {
	    if (this.mode === 'modern') {
	      this.history === true ? window.onpopstate() : window.onhashchange();
	    }
	    else {
	      this.onHashChanged();
	    }
	  },
	
	  init: function (fn, history) {
	    var self = this;
	    this.history = history;
	
	    if (!Router.listeners) {
	      Router.listeners = [];
	    }
	
	    function onchange(onChangeEvent) {
	      for (var i = 0, l = Router.listeners.length; i < l; i++) {
	        Router.listeners[i](onChangeEvent);
	      }
	    }
	
	    //note IE8 is being counted as 'modern' because it has the hashchange event
	    if ('onhashchange' in window && (document.documentMode === undefined
	      || document.documentMode > 7)) {
	      // At least for now HTML5 history is available for 'modern' browsers only
	      if (this.history === true) {
	        // There is an old bug in Chrome that causes onpopstate to fire even
	        // upon initial page load. Since the handler is run manually in init(),
	        // this would cause Chrome to run it twise. Currently the only
	        // workaround seems to be to set the handler after the initial page load
	        // http://code.google.com/p/chromium/issues/detail?id=63040
	        setTimeout(function() {
	          window.onpopstate = onchange;
	        }, 500);
	      }
	      else {
	        window.onhashchange = onchange;
	      }
	      this.mode = 'modern';
	    }
	    else {
	      //
	      // IE support, based on a concept by Erik Arvidson ...
	      //
	      var frame = document.createElement('iframe');
	      frame.id = 'state-frame';
	      frame.style.display = 'none';
	      document.body.appendChild(frame);
	      this.writeFrame('');
	
	      if ('onpropertychange' in document && 'attachEvent' in document) {
	        document.attachEvent('onpropertychange', function () {
	          if (event.propertyName === 'location') {
	            self.check();
	          }
	        });
	      }
	
	      window.setInterval(function () { self.check(); }, 50);
	
	      this.onHashChanged = onchange;
	      this.mode = 'legacy';
	    }
	
	    Router.listeners.push(fn);
	
	    return this.mode;
	  },
	
	  destroy: function (fn) {
	    if (!Router || !Router.listeners) {
	      return;
	    }
	
	    var listeners = Router.listeners;
	
	    for (var i = listeners.length - 1; i >= 0; i--) {
	      if (listeners[i] === fn) {
	        listeners.splice(i, 1);
	      }
	    }
	  },
	
	  setHash: function (s) {
	    // Mozilla always adds an entry to the history
	    if (this.mode === 'legacy') {
	      this.writeFrame(s);
	    }
	
	    if (this.history === true) {
	      window.history.pushState({}, document.title, s);
	      // Fire an onpopstate event manually since pushing does not obviously
	      // trigger the pop event.
	      this.fire();
	    } else {
	      dloc.hash = (s[0] === '/') ? s : '/' + s;
	    }
	    return this;
	  },
	
	  writeFrame: function (s) {
	    // IE support...
	    var f = document.getElementById('state-frame');
	    var d = f.contentDocument || f.contentWindow.document;
	    d.open();
	    d.write("<script>_hash = '" + s + "'; onload = parent.listener.syncHash;<script>");
	    d.close();
	  },
	
	  syncHash: function () {
	    // IE support...
	    var s = this._hash;
	    if (s != dloc.hash) {
	      dloc.hash = s;
	    }
	    return this;
	  },
	
	  onHashChanged: function () {}
	};
	
	var Router = exports.Router = function (routes) {
	  if (!(this instanceof Router)) return new Router(routes);
	
	  this.params   = {};
	  this.routes   = {};
	  this.methods  = ['on', 'once', 'after', 'before'];
	  this.scope    = [];
	  this._methods = {};
	
	  this._insert = this.insert;
	  this.insert = this.insertEx;
	
	  this.historySupport = (window.history != null ? window.history.pushState : null) != null
	
	  this.configure();
	  this.mount(routes || {});
	};
	
	Router.prototype.init = function (r) {
	  var self = this
	    , routeTo;
	  this.handler = function(onChangeEvent) {
	    var newURL = onChangeEvent && onChangeEvent.newURL || window.location.hash;
	    var url = self.history === true ? self.getPath() : newURL.replace(/.*#/, '');
	    self.dispatch('on', url.charAt(0) === '/' ? url : '/' + url);
	  };
	
	  listener.init(this.handler, this.history);
	
	  if (this.history === false) {
	    if (dlocHashEmpty() && r) {
	      dloc.hash = r;
	    } else if (!dlocHashEmpty()) {
	      self.dispatch('on', '/' + dloc.hash.replace(/^(#\/|#|\/)/, ''));
	    }
	  }
	  else {
	    if (this.convert_hash_in_init) {
	      // Use hash as route
	      routeTo = dlocHashEmpty() && r ? r : !dlocHashEmpty() ? dloc.hash.replace(/^#/, '') : null;
	      if (routeTo) {
	        window.history.replaceState({}, document.title, routeTo);
	      }
	    }
	    else {
	      // Use canonical url
	      routeTo = this.getPath();
	    }
	
	    // Router has been initialized, but due to the chrome bug it will not
	    // yet actually route HTML5 history state changes. Thus, decide if should route.
	    if (routeTo || this.run_in_init === true) {
	      this.handler();
	    }
	  }
	
	  return this;
	};
	
	Router.prototype.explode = function () {
	  var v = this.history === true ? this.getPath() : dloc.hash;
	  if (v.charAt(1) === '/') { v=v.slice(1) }
	  return v.slice(1, v.length).split("/");
	};
	
	Router.prototype.setRoute = function (i, v, val) {
	  var url = this.explode();
	
	  if (typeof i === 'number' && typeof v === 'string') {
	    url[i] = v;
	  }
	  else if (typeof val === 'string') {
	    url.splice(i, v, s);
	  }
	  else {
	    url = [i];
	  }
	
	  listener.setHash(url.join('/'));
	  return url;
	};
	
	//
	// ### function insertEx(method, path, route, parent)
	// #### @method {string} Method to insert the specific `route`.
	// #### @path {Array} Parsed path to insert the `route` at.
	// #### @route {Array|function} Route handlers to insert.
	// #### @parent {Object} **Optional** Parent "routes" to insert into.
	// insert a callback that will only occur once per the matched route.
	//
	Router.prototype.insertEx = function(method, path, route, parent) {
	  if (method === "once") {
	    method = "on";
	    route = function(route) {
	      var once = false;
	      return function() {
	        if (once) return;
	        once = true;
	        return route.apply(this, arguments);
	      };
	    }(route);
	  }
	  return this._insert(method, path, route, parent);
	};
	
	Router.prototype.getRoute = function (v) {
	  var ret = v;
	
	  if (typeof v === "number") {
	    ret = this.explode()[v];
	  }
	  else if (typeof v === "string"){
	    var h = this.explode();
	    ret = h.indexOf(v);
	  }
	  else {
	    ret = this.explode();
	  }
	
	  return ret;
	};
	
	Router.prototype.destroy = function () {
	  listener.destroy(this.handler);
	  return this;
	};
	
	Router.prototype.getPath = function () {
	  var path = window.location.pathname;
	  if (path.substr(0, 1) !== '/') {
	    path = '/' + path;
	  }
	  return path;
	};
	function _every(arr, iterator) {
	  for (var i = 0; i < arr.length; i += 1) {
	    if (iterator(arr[i], i, arr) === false) {
	      return;
	    }
	  }
	}
	
	function _flatten(arr) {
	  var flat = [];
	  for (var i = 0, n = arr.length; i < n; i++) {
	    flat = flat.concat(arr[i]);
	  }
	  return flat;
	}
	
	function _asyncEverySeries(arr, iterator, callback) {
	  if (!arr.length) {
	    return callback();
	  }
	  var completed = 0;
	  (function iterate() {
	    iterator(arr[completed], function(err) {
	      if (err || err === false) {
	        callback(err);
	        callback = function() {};
	      } else {
	        completed += 1;
	        if (completed === arr.length) {
	          callback();
	        } else {
	          iterate();
	        }
	      }
	    });
	  })();
	}
	
	function paramifyString(str, params, mod) {
	  mod = str;
	  for (var param in params) {
	    if (params.hasOwnProperty(param)) {
	      mod = params[param](str);
	      if (mod !== str) {
	        break;
	      }
	    }
	  }
	  return mod === str ? "([._a-zA-Z0-9-%()]+)" : mod;
	}
	
	function regifyString(str, params) {
	  var matches, last = 0, out = "";
	  while (matches = str.substr(last).match(/[^\w\d\- %@&]*\*[^\w\d\- %@&]*/)) {
	    last = matches.index + matches[0].length;
	    matches[0] = matches[0].replace(/^\*/, "([_.()!\\ %@&a-zA-Z0-9-]+)");
	    out += str.substr(0, matches.index) + matches[0];
	  }
	  str = out += str.substr(last);
	  var captures = str.match(/:([^\/]+)/ig), capture, length;
	  if (captures) {
	    length = captures.length;
	    for (var i = 0; i < length; i++) {
	      capture = captures[i];
	      if (capture.slice(0, 2) === "::") {
	        str = capture.slice(1);
	      } else {
	        str = str.replace(capture, paramifyString(capture, params));
	      }
	    }
	  }
	  return str;
	}
	
	function terminator(routes, delimiter, start, stop) {
	  var last = 0, left = 0, right = 0, start = (start || "(").toString(), stop = (stop || ")").toString(), i;
	  for (i = 0; i < routes.length; i++) {
	    var chunk = routes[i];
	    if (chunk.indexOf(start, last) > chunk.indexOf(stop, last) || ~chunk.indexOf(start, last) && !~chunk.indexOf(stop, last) || !~chunk.indexOf(start, last) && ~chunk.indexOf(stop, last)) {
	      left = chunk.indexOf(start, last);
	      right = chunk.indexOf(stop, last);
	      if (~left && !~right || !~left && ~right) {
	        var tmp = routes.slice(0, (i || 1) + 1).join(delimiter);
	        routes = [ tmp ].concat(routes.slice((i || 1) + 1));
	      }
	      last = (right > left ? right : left) + 1;
	      i = 0;
	    } else {
	      last = 0;
	    }
	  }
	  return routes;
	}
	
	var QUERY_SEPARATOR = /\?.*/;
	
	Router.prototype.configure = function(options) {
	  options = options || {};
	  for (var i = 0; i < this.methods.length; i++) {
	    this._methods[this.methods[i]] = true;
	  }
	  this.recurse = options.recurse || this.recurse || false;
	  this.async = options.async || false;
	  this.delimiter = options.delimiter || "/";
	  this.strict = typeof options.strict === "undefined" ? true : options.strict;
	  this.notfound = options.notfound;
	  this.resource = options.resource;
	  this.history = options.html5history && this.historySupport || false;
	  this.run_in_init = this.history === true && options.run_handler_in_init !== false;
	  this.convert_hash_in_init = this.history === true && options.convert_hash_in_init !== false;
	  this.every = {
	    after: options.after || null,
	    before: options.before || null,
	    on: options.on || null
	  };
	  return this;
	};
	
	Router.prototype.param = function(token, matcher) {
	  if (token[0] !== ":") {
	    token = ":" + token;
	  }
	  var compiled = new RegExp(token, "g");
	  this.params[token] = function(str) {
	    return str.replace(compiled, matcher.source || matcher);
	  };
	  return this;
	};
	
	Router.prototype.on = Router.prototype.route = function(method, path, route) {
	  var self = this;
	  if (!route && typeof path == "function") {
	    route = path;
	    path = method;
	    method = "on";
	  }
	  if (Array.isArray(path)) {
	    return path.forEach(function(p) {
	      self.on(method, p, route);
	    });
	  }
	  if (path.source) {
	    path = path.source.replace(/\\\//ig, "/");
	  }
	  if (Array.isArray(method)) {
	    return method.forEach(function(m) {
	      self.on(m.toLowerCase(), path, route);
	    });
	  }
	  path = path.split(new RegExp(this.delimiter));
	  path = terminator(path, this.delimiter);
	  this.insert(method, this.scope.concat(path), route);
	};
	
	Router.prototype.path = function(path, routesFn) {
	  var self = this, length = this.scope.length;
	  if (path.source) {
	    path = path.source.replace(/\\\//ig, "/");
	  }
	  path = path.split(new RegExp(this.delimiter));
	  path = terminator(path, this.delimiter);
	  this.scope = this.scope.concat(path);
	  routesFn.call(this, this);
	  this.scope.splice(length, path.length);
	};
	
	Router.prototype.dispatch = function(method, path, callback) {
	  var self = this, fns = this.traverse(method, path.replace(QUERY_SEPARATOR, ""), this.routes, ""), invoked = this._invoked, after;
	  this._invoked = true;
	  if (!fns || fns.length === 0) {
	    this.last = [];
	    if (typeof this.notfound === "function") {
	      this.invoke([ this.notfound ], {
	        method: method,
	        path: path
	      }, callback);
	    }
	    return false;
	  }
	  if (this.recurse === "forward") {
	    fns = fns.reverse();
	  }
	  function updateAndInvoke() {
	    self.last = fns.after;
	    self.invoke(self.runlist(fns), self, callback);
	  }
	  after = this.every && this.every.after ? [ this.every.after ].concat(this.last) : [ this.last ];
	  if (after && after.length > 0 && invoked) {
	    if (this.async) {
	      this.invoke(after, this, updateAndInvoke);
	    } else {
	      this.invoke(after, this);
	      updateAndInvoke();
	    }
	    return true;
	  }
	  updateAndInvoke();
	  return true;
	};
	
	Router.prototype.invoke = function(fns, thisArg, callback) {
	  var self = this;
	  var apply;
	  if (this.async) {
	    apply = function(fn, next) {
	      if (Array.isArray(fn)) {
	        return _asyncEverySeries(fn, apply, next);
	      } else if (typeof fn == "function") {
	        fn.apply(thisArg, (fns.captures || []).concat(next));
	      }
	    };
	    _asyncEverySeries(fns, apply, function() {
	      if (callback) {
	        callback.apply(thisArg, arguments);
	      }
	    });
	  } else {
	    apply = function(fn) {
	      if (Array.isArray(fn)) {
	        return _every(fn, apply);
	      } else if (typeof fn === "function") {
	        return fn.apply(thisArg, fns.captures || []);
	      } else if (typeof fn === "string" && self.resource) {
	        self.resource[fn].apply(thisArg, fns.captures || []);
	      }
	    };
	    _every(fns, apply);
	  }
	};
	
	Router.prototype.traverse = function(method, path, routes, regexp, filter) {
	  var fns = [], current, exact, match, next, that;
	  function filterRoutes(routes) {
	    if (!filter) {
	      return routes;
	    }
	    function deepCopy(source) {
	      var result = [];
	      for (var i = 0; i < source.length; i++) {
	        result[i] = Array.isArray(source[i]) ? deepCopy(source[i]) : source[i];
	      }
	      return result;
	    }
	    function applyFilter(fns) {
	      for (var i = fns.length - 1; i >= 0; i--) {
	        if (Array.isArray(fns[i])) {
	          applyFilter(fns[i]);
	          if (fns[i].length === 0) {
	            fns.splice(i, 1);
	          }
	        } else {
	          if (!filter(fns[i])) {
	            fns.splice(i, 1);
	          }
	        }
	      }
	    }
	    var newRoutes = deepCopy(routes);
	    newRoutes.matched = routes.matched;
	    newRoutes.captures = routes.captures;
	    newRoutes.after = routes.after.filter(filter);
	    applyFilter(newRoutes);
	    return newRoutes;
	  }
	  if (path === this.delimiter && routes[method]) {
	    next = [ [ routes.before, routes[method] ].filter(Boolean) ];
	    next.after = [ routes.after ].filter(Boolean);
	    next.matched = true;
	    next.captures = [];
	    return filterRoutes(next);
	  }
	  for (var r in routes) {
	    if (routes.hasOwnProperty(r) && (!this._methods[r] || this._methods[r] && typeof routes[r] === "object" && !Array.isArray(routes[r]))) {
	      current = exact = regexp + this.delimiter + r;
	      if (!this.strict) {
	        exact += "[" + this.delimiter + "]?";
	      }
	      match = path.match(new RegExp("^" + exact));
	      if (!match) {
	        continue;
	      }
	      if (match[0] && match[0] == path && routes[r][method]) {
	        next = [ [ routes[r].before, routes[r][method] ].filter(Boolean) ];
	        next.after = [ routes[r].after ].filter(Boolean);
	        next.matched = true;
	        next.captures = match.slice(1);
	        if (this.recurse && routes === this.routes) {
	          next.push([ routes.before, routes.on ].filter(Boolean));
	          next.after = next.after.concat([ routes.after ].filter(Boolean));
	        }
	        return filterRoutes(next);
	      }
	      next = this.traverse(method, path, routes[r], current);
	      if (next.matched) {
	        if (next.length > 0) {
	          fns = fns.concat(next);
	        }
	        if (this.recurse) {
	          fns.push([ routes[r].before, routes[r].on ].filter(Boolean));
	          next.after = next.after.concat([ routes[r].after ].filter(Boolean));
	          if (routes === this.routes) {
	            fns.push([ routes["before"], routes["on"] ].filter(Boolean));
	            next.after = next.after.concat([ routes["after"] ].filter(Boolean));
	          }
	        }
	        fns.matched = true;
	        fns.captures = next.captures;
	        fns.after = next.after;
	        return filterRoutes(fns);
	      }
	    }
	  }
	  return false;
	};
	
	Router.prototype.insert = function(method, path, route, parent) {
	  var methodType, parentType, isArray, nested, part;
	  path = path.filter(function(p) {
	    return p && p.length > 0;
	  });
	  parent = parent || this.routes;
	  part = path.shift();
	  if (/\:|\*/.test(part) && !/\\d|\\w/.test(part)) {
	    part = regifyString(part, this.params);
	  }
	  if (path.length > 0) {
	    parent[part] = parent[part] || {};
	    return this.insert(method, path, route, parent[part]);
	  }
	  if (!part && !path.length && parent === this.routes) {
	    methodType = typeof parent[method];
	    switch (methodType) {
	     case "function":
	      parent[method] = [ parent[method], route ];
	      return;
	     case "object":
	      parent[method].push(route);
	      return;
	     case "undefined":
	      parent[method] = route;
	      return;
	    }
	    return;
	  }
	  parentType = typeof parent[part];
	  isArray = Array.isArray(parent[part]);
	  if (parent[part] && !isArray && parentType == "object") {
	    methodType = typeof parent[part][method];
	    switch (methodType) {
	     case "function":
	      parent[part][method] = [ parent[part][method], route ];
	      return;
	     case "object":
	      parent[part][method].push(route);
	      return;
	     case "undefined":
	      parent[part][method] = route;
	      return;
	    }
	  } else if (parentType == "undefined") {
	    nested = {};
	    nested[method] = route;
	    parent[part] = nested;
	    return;
	  }
	  throw new Error("Invalid route context: " + parentType);
	};
	
	
	
	Router.prototype.extend = function(methods) {
	  var self = this, len = methods.length, i;
	  function extend(method) {
	    self._methods[method] = true;
	    self[method] = function() {
	      var extra = arguments.length === 1 ? [ method, "" ] : [ method ];
	      self.on.apply(self, extra.concat(Array.prototype.slice.call(arguments)));
	    };
	  }
	  for (i = 0; i < len; i++) {
	    extend(methods[i]);
	  }
	};
	
	Router.prototype.runlist = function(fns) {
	  var runlist = this.every && this.every.before ? [ this.every.before ].concat(_flatten(fns)) : _flatten(fns);
	  if (this.every && this.every.on) {
	    runlist.push(this.every.on);
	  }
	  runlist.captures = fns.captures;
	  runlist.source = fns.source;
	  return runlist;
	};
	
	Router.prototype.mount = function(routes, path) {
	  if (!routes || typeof routes !== "object" || Array.isArray(routes)) {
	    return;
	  }
	  var self = this;
	  path = path || [];
	  if (!Array.isArray(path)) {
	    path = path.split(self.delimiter);
	  }
	  function insertOrMount(route, local) {
	    var rename = route, parts = route.split(self.delimiter), routeType = typeof routes[route], isRoute = parts[0] === "" || !self._methods[parts[0]], event = isRoute ? "on" : rename;
	    if (isRoute) {
	      rename = rename.slice((rename.match(new RegExp("^" + self.delimiter)) || [ "" ])[0].length);
	      parts.shift();
	    }
	    if (isRoute && routeType === "object" && !Array.isArray(routes[route])) {
	      local = local.concat(parts);
	      self.mount(routes[route], local);
	      return;
	    }
	    if (isRoute) {
	      local = local.concat(rename.split(self.delimiter));
	      local = terminator(local, self.delimiter);
	    }
	    self.insert(event, local, routes[route]);
	  }
	  for (var route in routes) {
	    if (routes.hasOwnProperty(route)) {
	      insertOrMount(route, path.slice(0));
	    }
	  }
	};
	
	
	
	}(true ? exports : window));

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _npmZepto = __webpack_require__(88);
	
	var _npmZepto2 = _interopRequireDefault(_npmZepto);
	
	var globalConfig = window.OPTION && window.OPTION.config || {};
	
	var parseKeys = {
	  production: {
	    url: 'https://api.parse.com/1',
	    appId: 'OBhvHWm77KWjcaqExrOouaaMXihA4CtQAB4pzsfz',
	    appKey: 'LYs8VzHUXjuFLssXQmYmbQ2qRSZgNXrqTH7rU44i'
	  },
	  development: {
	    url: 'https://api.parse.com/1',
	    appId: 'OBhvHWm77KWjcaqExrOouaaMXihA4CtQAB4pzsfz',
	    appKey: 'LYs8VzHUXjuFLssXQmYmbQ2qRSZgNXrqTH7rU44i'
	  }
	};
	
	module.exports = _npmZepto2['default'].extend({}, globalConfig, {
	  api: parseKeys[globalConfig.environment || 'development']
	});

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	/* Zepto 1.1.6 - zepto event ajax form ie - zeptojs.com/license */
	
	var Zepto = (function() {
	  var undefined, key, $, classList, emptyArray = [], slice = emptyArray.slice, filter = emptyArray.filter,
	    document = window.document,
	    elementDisplay = {}, classCache = {},
	    cssNumber = { 'column-count': 1, 'columns': 1, 'font-weight': 1, 'line-height': 1,'opacity': 1, 'z-index': 1, 'zoom': 1 },
	    fragmentRE = /^\s*<(\w+|!)[^>]*>/,
	    singleTagRE = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
	    tagExpanderRE = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
	    rootNodeRE = /^(?:body|html)$/i,
	    capitalRE = /([A-Z])/g,
	
	    // special attributes that should be get/set via method calls
	    methodAttributes = ['val', 'css', 'html', 'text', 'data', 'width', 'height', 'offset'],
	
	    adjacencyOperators = [ 'after', 'prepend', 'before', 'append' ],
	    table = document.createElement('table'),
	    tableRow = document.createElement('tr'),
	    containers = {
	      'tr': document.createElement('tbody'),
	      'tbody': table, 'thead': table, 'tfoot': table,
	      'td': tableRow, 'th': tableRow,
	      '*': document.createElement('div')
	    },
	    readyRE = /complete|loaded|interactive/,
	    simpleSelectorRE = /^[\w-]*$/,
	    class2type = {},
	    toString = class2type.toString,
	    zepto = {},
	    camelize, uniq,
	    tempParent = document.createElement('div'),
	    propMap = {
	      'tabindex': 'tabIndex',
	      'readonly': 'readOnly',
	      'for': 'htmlFor',
	      'class': 'className',
	      'maxlength': 'maxLength',
	      'cellspacing': 'cellSpacing',
	      'cellpadding': 'cellPadding',
	      'rowspan': 'rowSpan',
	      'colspan': 'colSpan',
	      'usemap': 'useMap',
	      'frameborder': 'frameBorder',
	      'contenteditable': 'contentEditable'
	    },
	    isArray = Array.isArray ||
	      function(object){ return object instanceof Array }
	
	  zepto.matches = function(element, selector) {
	    if (!selector || !element || element.nodeType !== 1) return false
	    var matchesSelector = element.webkitMatchesSelector || element.mozMatchesSelector ||
	                          element.oMatchesSelector || element.matchesSelector
	    if (matchesSelector) return matchesSelector.call(element, selector)
	    // fall back to performing a selector:
	    var match, parent = element.parentNode, temp = !parent
	    if (temp) (parent = tempParent).appendChild(element)
	    match = ~zepto.qsa(parent, selector).indexOf(element)
	    temp && tempParent.removeChild(element)
	    return match
	  }
	
	  function type(obj) {
	    return obj == null ? String(obj) :
	      class2type[toString.call(obj)] || "object"
	  }
	
	  function isFunction(value) { return type(value) == "function" }
	  function isWindow(obj)     { return obj != null && obj == obj.window }
	  function isDocument(obj)   { return obj != null && obj.nodeType == obj.DOCUMENT_NODE }
	  function isObject(obj)     { return type(obj) == "object" }
	  function isPlainObject(obj) {
	    return isObject(obj) && !isWindow(obj) && Object.getPrototypeOf(obj) == Object.prototype
	  }
	  function likeArray(obj) { return typeof obj.length == 'number' }
	
	  function compact(array) { return filter.call(array, function(item){ return item != null }) }
	  function flatten(array) { return array.length > 0 ? $.fn.concat.apply([], array) : array }
	  camelize = function(str){ return str.replace(/-+(.)?/g, function(match, chr){ return chr ? chr.toUpperCase() : '' }) }
	  function dasherize(str) {
	    return str.replace(/::/g, '/')
	           .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')
	           .replace(/([a-z\d])([A-Z])/g, '$1_$2')
	           .replace(/_/g, '-')
	           .toLowerCase()
	  }
	  uniq = function(array){ return filter.call(array, function(item, idx){ return array.indexOf(item) == idx }) }
	
	  function classRE(name) {
	    return name in classCache ?
	      classCache[name] : (classCache[name] = new RegExp('(^|\\s)' + name + '(\\s|$)'))
	  }
	
	  function maybeAddPx(name, value) {
	    return (typeof value == "number" && !cssNumber[dasherize(name)]) ? value + "px" : value
	  }
	
	  function defaultDisplay(nodeName) {
	    var element, display
	    if (!elementDisplay[nodeName]) {
	      element = document.createElement(nodeName)
	      document.body.appendChild(element)
	      display = getComputedStyle(element, '').getPropertyValue("display")
	      element.parentNode.removeChild(element)
	      display == "none" && (display = "block")
	      elementDisplay[nodeName] = display
	    }
	    return elementDisplay[nodeName]
	  }
	
	  function children(element) {
	    return 'children' in element ?
	      slice.call(element.children) :
	      $.map(element.childNodes, function(node){ if (node.nodeType == 1) return node })
	  }
	
	  // `$.zepto.fragment` takes a html string and an optional tag name
	  // to generate DOM nodes nodes from the given html string.
	  // The generated DOM nodes are returned as an array.
	  // This function can be overriden in plugins for example to make
	  // it compatible with browsers that don't support the DOM fully.
	  zepto.fragment = function(html, name, properties) {
	    var dom, nodes, container
	
	    // A special case optimization for a single tag
	    if (singleTagRE.test(html)) dom = $(document.createElement(RegExp.$1))
	
	    if (!dom) {
	      if (html.replace) html = html.replace(tagExpanderRE, "<$1></$2>")
	      if (name === undefined) name = fragmentRE.test(html) && RegExp.$1
	      if (!(name in containers)) name = '*'
	
	      container = containers[name]
	      container.innerHTML = '' + html
	      dom = $.each(slice.call(container.childNodes), function(){
	        container.removeChild(this)
	      })
	    }
	
	    if (isPlainObject(properties)) {
	      nodes = $(dom)
	      $.each(properties, function(key, value) {
	        if (methodAttributes.indexOf(key) > -1) nodes[key](value)
	        else nodes.attr(key, value)
	      })
	    }
	
	    return dom
	  }
	
	  // `$.zepto.Z` swaps out the prototype of the given `dom` array
	  // of nodes with `$.fn` and thus supplying all the Zepto functions
	  // to the array. Note that `__proto__` is not supported on Internet
	  // Explorer. This method can be overriden in plugins.
	  zepto.Z = function(dom, selector) {
	    dom = dom || []
	    dom.__proto__ = $.fn
	    dom.selector = selector || ''
	    return dom
	  }
	
	  // `$.zepto.isZ` should return `true` if the given object is a Zepto
	  // collection. This method can be overriden in plugins.
	  zepto.isZ = function(object) {
	    return object instanceof zepto.Z
	  }
	
	  // `$.zepto.init` is Zepto's counterpart to jQuery's `$.fn.init` and
	  // takes a CSS selector and an optional context (and handles various
	  // special cases).
	  // This method can be overriden in plugins.
	  zepto.init = function(selector, context) {
	    var dom
	    // If nothing given, return an empty Zepto collection
	    if (!selector) return zepto.Z()
	    // Optimize for string selectors
	    else if (typeof selector == 'string') {
	      selector = selector.trim()
	      // If it's a html fragment, create nodes from it
	      // Note: In both Chrome 21 and Firefox 15, DOM error 12
	      // is thrown if the fragment doesn't begin with <
	      if (selector[0] == '<' && fragmentRE.test(selector))
	        dom = zepto.fragment(selector, RegExp.$1, context), selector = null
	      // If there's a context, create a collection on that context first, and select
	      // nodes from there
	      else if (context !== undefined) return $(context).find(selector)
	      // If it's a CSS selector, use it to select nodes.
	      else dom = zepto.qsa(document, selector)
	    }
	    // If a function is given, call it when the DOM is ready
	    else if (isFunction(selector)) return $(document).ready(selector)
	    // If a Zepto collection is given, just return it
	    else if (zepto.isZ(selector)) return selector
	    else {
	      // normalize array if an array of nodes is given
	      if (isArray(selector)) dom = compact(selector)
	      // Wrap DOM nodes.
	      else if (isObject(selector))
	        dom = [selector], selector = null
	      // If it's a html fragment, create nodes from it
	      else if (fragmentRE.test(selector))
	        dom = zepto.fragment(selector.trim(), RegExp.$1, context), selector = null
	      // If there's a context, create a collection on that context first, and select
	      // nodes from there
	      else if (context !== undefined) return $(context).find(selector)
	      // And last but no least, if it's a CSS selector, use it to select nodes.
	      else dom = zepto.qsa(document, selector)
	    }
	    // create a new Zepto collection from the nodes found
	    return zepto.Z(dom, selector)
	  }
	
	  // `$` will be the base `Zepto` object. When calling this
	  // function just call `$.zepto.init, which makes the implementation
	  // details of selecting nodes and creating Zepto collections
	  // patchable in plugins.
	  $ = function(selector, context){
	    return zepto.init(selector, context)
	  }
	
	  function extend(target, source, deep) {
	    for (key in source)
	      if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
	        if (isPlainObject(source[key]) && !isPlainObject(target[key]))
	          target[key] = {}
	        if (isArray(source[key]) && !isArray(target[key]))
	          target[key] = []
	        extend(target[key], source[key], deep)
	      }
	      else if (source[key] !== undefined) target[key] = source[key]
	  }
	
	  // Copy all but undefined properties from one or more
	  // objects to the `target` object.
	  $.extend = function(target){
	    var deep, args = slice.call(arguments, 1)
	    if (typeof target == 'boolean') {
	      deep = target
	      target = args.shift()
	    }
	    args.forEach(function(arg){ extend(target, arg, deep) })
	    return target
	  }
	
	  // `$.zepto.qsa` is Zepto's CSS selector implementation which
	  // uses `document.querySelectorAll` and optimizes for some special cases, like `#id`.
	  // This method can be overriden in plugins.
	  zepto.qsa = function(element, selector){
	    var found,
	        maybeID = selector[0] == '#',
	        maybeClass = !maybeID && selector[0] == '.',
	        nameOnly = maybeID || maybeClass ? selector.slice(1) : selector, // Ensure that a 1 char tag name still gets checked
	        isSimple = simpleSelectorRE.test(nameOnly)
	    return (isDocument(element) && isSimple && maybeID) ?
	      ( (found = element.getElementById(nameOnly)) ? [found] : [] ) :
	      (element.nodeType !== 1 && element.nodeType !== 9) ? [] :
	      slice.call(
	        isSimple && !maybeID ?
	          maybeClass ? element.getElementsByClassName(nameOnly) : // If it's simple, it could be a class
	          element.getElementsByTagName(selector) : // Or a tag
	          element.querySelectorAll(selector) // Or it's not simple, and we need to query all
	      )
	  }
	
	  function filtered(nodes, selector) {
	    return selector == null ? $(nodes) : $(nodes).filter(selector)
	  }
	
	  $.contains = document.documentElement.contains ?
	    function(parent, node) {
	      return parent !== node && parent.contains(node)
	    } :
	    function(parent, node) {
	      while (node && (node = node.parentNode))
	        if (node === parent) return true
	      return false
	    }
	
	  function funcArg(context, arg, idx, payload) {
	    return isFunction(arg) ? arg.call(context, idx, payload) : arg
	  }
	
	  function setAttribute(node, name, value) {
	    value == null ? node.removeAttribute(name) : node.setAttribute(name, value)
	  }
	
	  // access className property while respecting SVGAnimatedString
	  function className(node, value){
	    var klass = node.className || '',
	        svg   = klass && klass.baseVal !== undefined
	
	    if (value === undefined) return svg ? klass.baseVal : klass
	    svg ? (klass.baseVal = value) : (node.className = value)
	  }
	
	  // "true"  => true
	  // "false" => false
	  // "null"  => null
	  // "42"    => 42
	  // "42.5"  => 42.5
	  // "08"    => "08"
	  // JSON    => parse if valid
	  // String  => self
	  function deserializeValue(value) {
	    try {
	      return value ?
	        value == "true" ||
	        ( value == "false" ? false :
	          value == "null" ? null :
	          +value + "" == value ? +value :
	          /^[\[\{]/.test(value) ? $.parseJSON(value) :
	          value )
	        : value
	    } catch(e) {
	      return value
	    }
	  }
	
	  $.type = type
	  $.isFunction = isFunction
	  $.isWindow = isWindow
	  $.isArray = isArray
	  $.isPlainObject = isPlainObject
	
	  $.isEmptyObject = function(obj) {
	    var name
	    for (name in obj) return false
	    return true
	  }
	
	  $.inArray = function(elem, array, i){
	    return emptyArray.indexOf.call(array, elem, i)
	  }
	
	  $.camelCase = camelize
	  $.trim = function(str) {
	    return str == null ? "" : String.prototype.trim.call(str)
	  }
	
	  // plugin compatibility
	  $.uuid = 0
	  $.support = { }
	  $.expr = { }
	
	  $.map = function(elements, callback){
	    var value, values = [], i, key
	    if (likeArray(elements))
	      for (i = 0; i < elements.length; i++) {
	        value = callback(elements[i], i)
	        if (value != null) values.push(value)
	      }
	    else
	      for (key in elements) {
	        value = callback(elements[key], key)
	        if (value != null) values.push(value)
	      }
	    return flatten(values)
	  }
	
	  $.each = function(elements, callback){
	    var i, key
	    if (likeArray(elements)) {
	      for (i = 0; i < elements.length; i++)
	        if (callback.call(elements[i], i, elements[i]) === false) return elements
	    } else {
	      for (key in elements)
	        if (callback.call(elements[key], key, elements[key]) === false) return elements
	    }
	
	    return elements
	  }
	
	  $.grep = function(elements, callback){
	    return filter.call(elements, callback)
	  }
	
	  if (window.JSON) $.parseJSON = JSON.parse
	
	  // Populate the class2type map
	  $.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
	    class2type[ "[object " + name + "]" ] = name.toLowerCase()
	  })
	
	  // Define methods that will be available on all
	  // Zepto collections
	  $.fn = {
	    // Because a collection acts like an array
	    // copy over these useful array functions.
	    forEach: emptyArray.forEach,
	    reduce: emptyArray.reduce,
	    push: emptyArray.push,
	    sort: emptyArray.sort,
	    indexOf: emptyArray.indexOf,
	    concat: emptyArray.concat,
	
	    // `map` and `slice` in the jQuery API work differently
	    // from their array counterparts
	    map: function(fn){
	      return $($.map(this, function(el, i){ return fn.call(el, i, el) }))
	    },
	    slice: function(){
	      return $(slice.apply(this, arguments))
	    },
	
	    ready: function(callback){
	      // need to check if document.body exists for IE as that browser reports
	      // document ready when it hasn't yet created the body element
	      if (readyRE.test(document.readyState) && document.body) callback($)
	      else document.addEventListener('DOMContentLoaded', function(){ callback($) }, false)
	      return this
	    },
	    get: function(idx){
	      return idx === undefined ? slice.call(this) : this[idx >= 0 ? idx : idx + this.length]
	    },
	    toArray: function(){ return this.get() },
	    size: function(){
	      return this.length
	    },
	    remove: function(){
	      return this.each(function(){
	        if (this.parentNode != null)
	          this.parentNode.removeChild(this)
	      })
	    },
	    each: function(callback){
	      emptyArray.every.call(this, function(el, idx){
	        return callback.call(el, idx, el) !== false
	      })
	      return this
	    },
	    filter: function(selector){
	      if (isFunction(selector)) return this.not(this.not(selector))
	      return $(filter.call(this, function(element){
	        return zepto.matches(element, selector)
	      }))
	    },
	    add: function(selector,context){
	      return $(uniq(this.concat($(selector,context))))
	    },
	    is: function(selector){
	      return this.length > 0 && zepto.matches(this[0], selector)
	    },
	    not: function(selector){
	      var nodes=[]
	      if (isFunction(selector) && selector.call !== undefined)
	        this.each(function(idx){
	          if (!selector.call(this,idx)) nodes.push(this)
	        })
	      else {
	        var excludes = typeof selector == 'string' ? this.filter(selector) :
	          (likeArray(selector) && isFunction(selector.item)) ? slice.call(selector) : $(selector)
	        this.forEach(function(el){
	          if (excludes.indexOf(el) < 0) nodes.push(el)
	        })
	      }
	      return $(nodes)
	    },
	    has: function(selector){
	      return this.filter(function(){
	        return isObject(selector) ?
	          $.contains(this, selector) :
	          $(this).find(selector).size()
	      })
	    },
	    eq: function(idx){
	      return idx === -1 ? this.slice(idx) : this.slice(idx, + idx + 1)
	    },
	    first: function(){
	      var el = this[0]
	      return el && !isObject(el) ? el : $(el)
	    },
	    last: function(){
	      var el = this[this.length - 1]
	      return el && !isObject(el) ? el : $(el)
	    },
	    find: function(selector){
	      var result, $this = this
	      if (!selector) result = $()
	      else if (typeof selector == 'object')
	        result = $(selector).filter(function(){
	          var node = this
	          return emptyArray.some.call($this, function(parent){
	            return $.contains(parent, node)
	          })
	        })
	      else if (this.length == 1) result = $(zepto.qsa(this[0], selector))
	      else result = this.map(function(){ return zepto.qsa(this, selector) })
	      return result
	    },
	    closest: function(selector, context){
	      var node = this[0], collection = false
	      if (typeof selector == 'object') collection = $(selector)
	      while (node && !(collection ? collection.indexOf(node) >= 0 : zepto.matches(node, selector)))
	        node = node !== context && !isDocument(node) && node.parentNode
	      return $(node)
	    },
	    parents: function(selector){
	      var ancestors = [], nodes = this
	      while (nodes.length > 0)
	        nodes = $.map(nodes, function(node){
	          if ((node = node.parentNode) && !isDocument(node) && ancestors.indexOf(node) < 0) {
	            ancestors.push(node)
	            return node
	          }
	        })
	      return filtered(ancestors, selector)
	    },
	    parent: function(selector){
	      return filtered(uniq(this.pluck('parentNode')), selector)
	    },
	    children: function(selector){
	      return filtered(this.map(function(){ return children(this) }), selector)
	    },
	    contents: function() {
	      return this.map(function() { return slice.call(this.childNodes) })
	    },
	    siblings: function(selector){
	      return filtered(this.map(function(i, el){
	        return filter.call(children(el.parentNode), function(child){ return child!==el })
	      }), selector)
	    },
	    empty: function(){
	      return this.each(function(){ this.innerHTML = '' })
	    },
	    // `pluck` is borrowed from Prototype.js
	    pluck: function(property){
	      return $.map(this, function(el){ return el[property] })
	    },
	    show: function(){
	      return this.each(function(){
	        this.style.display == "none" && (this.style.display = '')
	        if (getComputedStyle(this, '').getPropertyValue("display") == "none")
	          this.style.display = defaultDisplay(this.nodeName)
	      })
	    },
	    replaceWith: function(newContent){
	      return this.before(newContent).remove()
	    },
	    wrap: function(structure){
	      var func = isFunction(structure)
	      if (this[0] && !func)
	        var dom   = $(structure).get(0),
	            clone = dom.parentNode || this.length > 1
	
	      return this.each(function(index){
	        $(this).wrapAll(
	          func ? structure.call(this, index) :
	            clone ? dom.cloneNode(true) : dom
	        )
	      })
	    },
	    wrapAll: function(structure){
	      if (this[0]) {
	        $(this[0]).before(structure = $(structure))
	        var children
	        // drill down to the inmost element
	        while ((children = structure.children()).length) structure = children.first()
	        $(structure).append(this)
	      }
	      return this
	    },
	    wrapInner: function(structure){
	      var func = isFunction(structure)
	      return this.each(function(index){
	        var self = $(this), contents = self.contents(),
	            dom  = func ? structure.call(this, index) : structure
	        contents.length ? contents.wrapAll(dom) : self.append(dom)
	      })
	    },
	    unwrap: function(){
	      this.parent().each(function(){
	        $(this).replaceWith($(this).children())
	      })
	      return this
	    },
	    clone: function(){
	      return this.map(function(){ return this.cloneNode(true) })
	    },
	    hide: function(){
	      return this.css("display", "none")
	    },
	    toggle: function(setting){
	      return this.each(function(){
	        var el = $(this)
	        ;(setting === undefined ? el.css("display") == "none" : setting) ? el.show() : el.hide()
	      })
	    },
	    prev: function(selector){ return $(this.pluck('previousElementSibling')).filter(selector || '*') },
	    next: function(selector){ return $(this.pluck('nextElementSibling')).filter(selector || '*') },
	    html: function(html){
	      return 0 in arguments ?
	        this.each(function(idx){
	          var originHtml = this.innerHTML
	          $(this).empty().append( funcArg(this, html, idx, originHtml) )
	        }) :
	        (0 in this ? this[0].innerHTML : null)
	    },
	    text: function(text){
	      return 0 in arguments ?
	        this.each(function(idx){
	          var newText = funcArg(this, text, idx, this.textContent)
	          this.textContent = newText == null ? '' : ''+newText
	        }) :
	        (0 in this ? this[0].textContent : null)
	    },
	    attr: function(name, value){
	      var result
	      return (typeof name == 'string' && !(1 in arguments)) ?
	        (!this.length || this[0].nodeType !== 1 ? undefined :
	          (!(result = this[0].getAttribute(name)) && name in this[0]) ? this[0][name] : result
	        ) :
	        this.each(function(idx){
	          if (this.nodeType !== 1) return
	          if (isObject(name)) for (key in name) setAttribute(this, key, name[key])
	          else setAttribute(this, name, funcArg(this, value, idx, this.getAttribute(name)))
	        })
	    },
	    removeAttr: function(name){
	      return this.each(function(){ this.nodeType === 1 && name.split(' ').forEach(function(attribute){
	        setAttribute(this, attribute)
	      }, this)})
	    },
	    prop: function(name, value){
	      name = propMap[name] || name
	      return (1 in arguments) ?
	        this.each(function(idx){
	          this[name] = funcArg(this, value, idx, this[name])
	        }) :
	        (this[0] && this[0][name])
	    },
	    data: function(name, value){
	      var attrName = 'data-' + name.replace(capitalRE, '-$1').toLowerCase()
	
	      var data = (1 in arguments) ?
	        this.attr(attrName, value) :
	        this.attr(attrName)
	
	      return data !== null ? deserializeValue(data) : undefined
	    },
	    val: function(value){
	      return 0 in arguments ?
	        this.each(function(idx){
	          this.value = funcArg(this, value, idx, this.value)
	        }) :
	        (this[0] && (this[0].multiple ?
	           $(this[0]).find('option').filter(function(){ return this.selected }).pluck('value') :
	           this[0].value)
	        )
	    },
	    offset: function(coordinates){
	      if (coordinates) return this.each(function(index){
	        var $this = $(this),
	            coords = funcArg(this, coordinates, index, $this.offset()),
	            parentOffset = $this.offsetParent().offset(),
	            props = {
	              top:  coords.top  - parentOffset.top,
	              left: coords.left - parentOffset.left
	            }
	
	        if ($this.css('position') == 'static') props['position'] = 'relative'
	        $this.css(props)
	      })
	      if (!this.length) return null
	      var obj = this[0].getBoundingClientRect()
	      return {
	        left: obj.left + window.pageXOffset,
	        top: obj.top + window.pageYOffset,
	        width: Math.round(obj.width),
	        height: Math.round(obj.height)
	      }
	    },
	    css: function(property, value){
	      if (arguments.length < 2) {
	        var computedStyle, element = this[0]
	        if(!element) return
	        computedStyle = getComputedStyle(element, '')
	        if (typeof property == 'string')
	          return element.style[camelize(property)] || computedStyle.getPropertyValue(property)
	        else if (isArray(property)) {
	          var props = {}
	          $.each(property, function(_, prop){
	            props[prop] = (element.style[camelize(prop)] || computedStyle.getPropertyValue(prop))
	          })
	          return props
	        }
	      }
	
	      var css = ''
	      if (type(property) == 'string') {
	        if (!value && value !== 0)
	          this.each(function(){ this.style.removeProperty(dasherize(property)) })
	        else
	          css = dasherize(property) + ":" + maybeAddPx(property, value)
	      } else {
	        for (key in property)
	          if (!property[key] && property[key] !== 0)
	            this.each(function(){ this.style.removeProperty(dasherize(key)) })
	          else
	            css += dasherize(key) + ':' + maybeAddPx(key, property[key]) + ';'
	      }
	
	      return this.each(function(){ this.style.cssText += ';' + css })
	    },
	    index: function(element){
	      return element ? this.indexOf($(element)[0]) : this.parent().children().indexOf(this[0])
	    },
	    hasClass: function(name){
	      if (!name) return false
	      return emptyArray.some.call(this, function(el){
	        return this.test(className(el))
	      }, classRE(name))
	    },
	    addClass: function(name){
	      if (!name) return this
	      return this.each(function(idx){
	        if (!('className' in this)) return
	        classList = []
	        var cls = className(this), newName = funcArg(this, name, idx, cls)
	        newName.split(/\s+/g).forEach(function(klass){
	          if (!$(this).hasClass(klass)) classList.push(klass)
	        }, this)
	        classList.length && className(this, cls + (cls ? " " : "") + classList.join(" "))
	      })
	    },
	    removeClass: function(name){
	      return this.each(function(idx){
	        if (!('className' in this)) return
	        if (name === undefined) return className(this, '')
	        classList = className(this)
	        funcArg(this, name, idx, classList).split(/\s+/g).forEach(function(klass){
	          classList = classList.replace(classRE(klass), " ")
	        })
	        className(this, classList.trim())
	      })
	    },
	    toggleClass: function(name, when){
	      if (!name) return this
	      return this.each(function(idx){
	        var $this = $(this), names = funcArg(this, name, idx, className(this))
	        names.split(/\s+/g).forEach(function(klass){
	          (when === undefined ? !$this.hasClass(klass) : when) ?
	            $this.addClass(klass) : $this.removeClass(klass)
	        })
	      })
	    },
	    scrollTop: function(value){
	      if (!this.length) return
	      var hasScrollTop = 'scrollTop' in this[0]
	      if (value === undefined) return hasScrollTop ? this[0].scrollTop : this[0].pageYOffset
	      return this.each(hasScrollTop ?
	        function(){ this.scrollTop = value } :
	        function(){ this.scrollTo(this.scrollX, value) })
	    },
	    scrollLeft: function(value){
	      if (!this.length) return
	      var hasScrollLeft = 'scrollLeft' in this[0]
	      if (value === undefined) return hasScrollLeft ? this[0].scrollLeft : this[0].pageXOffset
	      return this.each(hasScrollLeft ?
	        function(){ this.scrollLeft = value } :
	        function(){ this.scrollTo(value, this.scrollY) })
	    },
	    position: function() {
	      if (!this.length) return
	
	      var elem = this[0],
	        // Get *real* offsetParent
	        offsetParent = this.offsetParent(),
	        // Get correct offsets
	        offset       = this.offset(),
	        parentOffset = rootNodeRE.test(offsetParent[0].nodeName) ? { top: 0, left: 0 } : offsetParent.offset()
	
	      // Subtract element margins
	      // note: when an element has margin: auto the offsetLeft and marginLeft
	      // are the same in Safari causing offset.left to incorrectly be 0
	      offset.top  -= parseFloat( $(elem).css('margin-top') ) || 0
	      offset.left -= parseFloat( $(elem).css('margin-left') ) || 0
	
	      // Add offsetParent borders
	      parentOffset.top  += parseFloat( $(offsetParent[0]).css('border-top-width') ) || 0
	      parentOffset.left += parseFloat( $(offsetParent[0]).css('border-left-width') ) || 0
	
	      // Subtract the two offsets
	      return {
	        top:  offset.top  - parentOffset.top,
	        left: offset.left - parentOffset.left
	      }
	    },
	    offsetParent: function() {
	      return this.map(function(){
	        var parent = this.offsetParent || document.body
	        while (parent && !rootNodeRE.test(parent.nodeName) && $(parent).css("position") == "static")
	          parent = parent.offsetParent
	        return parent
	      })
	    }
	  }
	
	  // for now
	  $.fn.detach = $.fn.remove
	
	  // Generate the `width` and `height` functions
	  ;['width', 'height'].forEach(function(dimension){
	    var dimensionProperty =
	      dimension.replace(/./, function(m){ return m[0].toUpperCase() })
	
	    $.fn[dimension] = function(value){
	      var offset, el = this[0]
	      if (value === undefined) return isWindow(el) ? el['inner' + dimensionProperty] :
	        isDocument(el) ? el.documentElement['scroll' + dimensionProperty] :
	        (offset = this.offset()) && offset[dimension]
	      else return this.each(function(idx){
	        el = $(this)
	        el.css(dimension, funcArg(this, value, idx, el[dimension]()))
	      })
	    }
	  })
	
	  function traverseNode(node, fun) {
	    fun(node)
	    for (var i = 0, len = node.childNodes.length; i < len; i++)
	      traverseNode(node.childNodes[i], fun)
	  }
	
	  // Generate the `after`, `prepend`, `before`, `append`,
	  // `insertAfter`, `insertBefore`, `appendTo`, and `prependTo` methods.
	  adjacencyOperators.forEach(function(operator, operatorIndex) {
	    var inside = operatorIndex % 2 //=> prepend, append
	
	    $.fn[operator] = function(){
	      // arguments can be nodes, arrays of nodes, Zepto objects and HTML strings
	      var argType, nodes = $.map(arguments, function(arg) {
	            argType = type(arg)
	            return argType == "object" || argType == "array" || arg == null ?
	              arg : zepto.fragment(arg)
	          }),
	          parent, copyByClone = this.length > 1
	      if (nodes.length < 1) return this
	
	      return this.each(function(_, target){
	        parent = inside ? target : target.parentNode
	
	        // convert all methods to a "before" operation
	        target = operatorIndex == 0 ? target.nextSibling :
	                 operatorIndex == 1 ? target.firstChild :
	                 operatorIndex == 2 ? target :
	                 null
	
	        var parentInDocument = $.contains(document.documentElement, parent)
	
	        nodes.forEach(function(node){
	          if (copyByClone) node = node.cloneNode(true)
	          else if (!parent) return $(node).remove()
	
	          parent.insertBefore(node, target)
	          if (parentInDocument) traverseNode(node, function(el){
	            if (el.nodeName != null && el.nodeName.toUpperCase() === 'SCRIPT' &&
	               (!el.type || el.type === 'text/javascript') && !el.src)
	              window['eval'].call(window, el.innerHTML)
	          })
	        })
	      })
	    }
	
	    // after    => insertAfter
	    // prepend  => prependTo
	    // before   => insertBefore
	    // append   => appendTo
	    $.fn[inside ? operator+'To' : 'insert'+(operatorIndex ? 'Before' : 'After')] = function(html){
	      $(html)[operator](this)
	      return this
	    }
	  })
	
	  zepto.Z.prototype = $.fn
	
	  // Export internal API functions in the `$.zepto` namespace
	  zepto.uniq = uniq
	  zepto.deserializeValue = deserializeValue
	  $.zepto = zepto
	
	  return $
	})()
	
	window.Zepto = Zepto
	window.$ === undefined && (window.$ = Zepto)
	
	;(function($){
	  var _zid = 1, undefined,
	      slice = Array.prototype.slice,
	      isFunction = $.isFunction,
	      isString = function(obj){ return typeof obj == 'string' },
	      handlers = {},
	      specialEvents={},
	      focusinSupported = 'onfocusin' in window,
	      focus = { focus: 'focusin', blur: 'focusout' },
	      hover = { mouseenter: 'mouseover', mouseleave: 'mouseout' }
	
	  specialEvents.click = specialEvents.mousedown = specialEvents.mouseup = specialEvents.mousemove = 'MouseEvents'
	
	  function zid(element) {
	    return element._zid || (element._zid = _zid++)
	  }
	  function findHandlers(element, event, fn, selector) {
	    event = parse(event)
	    if (event.ns) var matcher = matcherFor(event.ns)
	    return (handlers[zid(element)] || []).filter(function(handler) {
	      return handler
	        && (!event.e  || handler.e == event.e)
	        && (!event.ns || matcher.test(handler.ns))
	        && (!fn       || zid(handler.fn) === zid(fn))
	        && (!selector || handler.sel == selector)
	    })
	  }
	  function parse(event) {
	    var parts = ('' + event).split('.')
	    return {e: parts[0], ns: parts.slice(1).sort().join(' ')}
	  }
	  function matcherFor(ns) {
	    return new RegExp('(?:^| )' + ns.replace(' ', ' .* ?') + '(?: |$)')
	  }
	
	  function eventCapture(handler, captureSetting) {
	    return handler.del &&
	      (!focusinSupported && (handler.e in focus)) ||
	      !!captureSetting
	  }
	
	  function realEvent(type) {
	    return hover[type] || (focusinSupported && focus[type]) || type
	  }
	
	  function add(element, events, fn, data, selector, delegator, capture){
	    var id = zid(element), set = (handlers[id] || (handlers[id] = []))
	    events.split(/\s/).forEach(function(event){
	      if (event == 'ready') return $(document).ready(fn)
	      var handler   = parse(event)
	      handler.fn    = fn
	      handler.sel   = selector
	      // emulate mouseenter, mouseleave
	      if (handler.e in hover) fn = function(e){
	        var related = e.relatedTarget
	        if (!related || (related !== this && !$.contains(this, related)))
	          return handler.fn.apply(this, arguments)
	      }
	      handler.del   = delegator
	      var callback  = delegator || fn
	      handler.proxy = function(e){
	        e = compatible(e)
	        if (e.isImmediatePropagationStopped()) return
	        e.data = data
	        var result = callback.apply(element, e._args == undefined ? [e] : [e].concat(e._args))
	        if (result === false) e.preventDefault(), e.stopPropagation()
	        return result
	      }
	      handler.i = set.length
	      set.push(handler)
	      if ('addEventListener' in element)
	        element.addEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture))
	    })
	  }
	  function remove(element, events, fn, selector, capture){
	    var id = zid(element)
	    ;(events || '').split(/\s/).forEach(function(event){
	      findHandlers(element, event, fn, selector).forEach(function(handler){
	        delete handlers[id][handler.i]
	      if ('removeEventListener' in element)
	        element.removeEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture))
	      })
	    })
	  }
	
	  $.event = { add: add, remove: remove }
	
	  $.proxy = function(fn, context) {
	    var args = (2 in arguments) && slice.call(arguments, 2)
	    if (isFunction(fn)) {
	      var proxyFn = function(){ return fn.apply(context, args ? args.concat(slice.call(arguments)) : arguments) }
	      proxyFn._zid = zid(fn)
	      return proxyFn
	    } else if (isString(context)) {
	      if (args) {
	        args.unshift(fn[context], fn)
	        return $.proxy.apply(null, args)
	      } else {
	        return $.proxy(fn[context], fn)
	      }
	    } else {
	      throw new TypeError("expected function")
	    }
	  }
	
	  $.fn.bind = function(event, data, callback){
	    return this.on(event, data, callback)
	  }
	  $.fn.unbind = function(event, callback){
	    return this.off(event, callback)
	  }
	  $.fn.one = function(event, selector, data, callback){
	    return this.on(event, selector, data, callback, 1)
	  }
	
	  var returnTrue = function(){return true},
	      returnFalse = function(){return false},
	      ignoreProperties = /^([A-Z]|returnValue$|layer[XY]$)/,
	      eventMethods = {
	        preventDefault: 'isDefaultPrevented',
	        stopImmediatePropagation: 'isImmediatePropagationStopped',
	        stopPropagation: 'isPropagationStopped'
	      }
	
	  function compatible(event, source) {
	    if (source || !event.isDefaultPrevented) {
	      source || (source = event)
	
	      $.each(eventMethods, function(name, predicate) {
	        var sourceMethod = source[name]
	        event[name] = function(){
	          this[predicate] = returnTrue
	          return sourceMethod && sourceMethod.apply(source, arguments)
	        }
	        event[predicate] = returnFalse
	      })
	
	      if (source.defaultPrevented !== undefined ? source.defaultPrevented :
	          'returnValue' in source ? source.returnValue === false :
	          source.getPreventDefault && source.getPreventDefault())
	        event.isDefaultPrevented = returnTrue
	    }
	    return event
	  }
	
	  function createProxy(event) {
	    var key, proxy = { originalEvent: event }
	    for (key in event)
	      if (!ignoreProperties.test(key) && event[key] !== undefined) proxy[key] = event[key]
	
	    return compatible(proxy, event)
	  }
	
	  $.fn.delegate = function(selector, event, callback){
	    return this.on(event, selector, callback)
	  }
	  $.fn.undelegate = function(selector, event, callback){
	    return this.off(event, selector, callback)
	  }
	
	  $.fn.live = function(event, callback){
	    $(document.body).delegate(this.selector, event, callback)
	    return this
	  }
	  $.fn.die = function(event, callback){
	    $(document.body).undelegate(this.selector, event, callback)
	    return this
	  }
	
	  $.fn.on = function(event, selector, data, callback, one){
	    var autoRemove, delegator, $this = this
	    if (event && !isString(event)) {
	      $.each(event, function(type, fn){
	        $this.on(type, selector, data, fn, one)
	      })
	      return $this
	    }
	
	    if (!isString(selector) && !isFunction(callback) && callback !== false)
	      callback = data, data = selector, selector = undefined
	    if (isFunction(data) || data === false)
	      callback = data, data = undefined
	
	    if (callback === false) callback = returnFalse
	
	    return $this.each(function(_, element){
	      if (one) autoRemove = function(e){
	        remove(element, e.type, callback)
	        return callback.apply(this, arguments)
	      }
	
	      if (selector) delegator = function(e){
	        var evt, match = $(e.target).closest(selector, element).get(0)
	        if (match && match !== element) {
	          evt = $.extend(createProxy(e), {currentTarget: match, liveFired: element})
	          return (autoRemove || callback).apply(match, [evt].concat(slice.call(arguments, 1)))
	        }
	      }
	
	      add(element, event, callback, data, selector, delegator || autoRemove)
	    })
	  }
	  $.fn.off = function(event, selector, callback){
	    var $this = this
	    if (event && !isString(event)) {
	      $.each(event, function(type, fn){
	        $this.off(type, selector, fn)
	      })
	      return $this
	    }
	
	    if (!isString(selector) && !isFunction(callback) && callback !== false)
	      callback = selector, selector = undefined
	
	    if (callback === false) callback = returnFalse
	
	    return $this.each(function(){
	      remove(this, event, callback, selector)
	    })
	  }
	
	  $.fn.trigger = function(event, args){
	    event = (isString(event) || $.isPlainObject(event)) ? $.Event(event) : compatible(event)
	    event._args = args
	    return this.each(function(){
	      // handle focus(), blur() by calling them directly
	      if (event.type in focus && typeof this[event.type] == "function") this[event.type]()
	      // items in the collection might not be DOM elements
	      else if ('dispatchEvent' in this) this.dispatchEvent(event)
	      else $(this).triggerHandler(event, args)
	    })
	  }
	
	  // triggers event handlers on current element just as if an event occurred,
	  // doesn't trigger an actual event, doesn't bubble
	  $.fn.triggerHandler = function(event, args){
	    var e, result
	    this.each(function(i, element){
	      e = createProxy(isString(event) ? $.Event(event) : event)
	      e._args = args
	      e.target = element
	      $.each(findHandlers(element, event.type || event), function(i, handler){
	        result = handler.proxy(e)
	        if (e.isImmediatePropagationStopped()) return false
	      })
	    })
	    return result
	  }
	
	  // shortcut methods for `.bind(event, fn)` for each event type
	  ;('focusin focusout focus blur load resize scroll unload click dblclick '+
	  'mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave '+
	  'change select keydown keypress keyup error').split(' ').forEach(function(event) {
	    $.fn[event] = function(callback) {
	      return (0 in arguments) ?
	        this.bind(event, callback) :
	        this.trigger(event)
	    }
	  })
	
	  $.Event = function(type, props) {
	    if (!isString(type)) props = type, type = props.type
	    var event = document.createEvent(specialEvents[type] || 'Events'), bubbles = true
	    if (props) for (var name in props) (name == 'bubbles') ? (bubbles = !!props[name]) : (event[name] = props[name])
	    event.initEvent(type, bubbles, true)
	    return compatible(event)
	  }
	
	})(Zepto)
	
	;(function($){
	  var jsonpID = 0,
	      document = window.document,
	      key,
	      name,
	      rscript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
	      scriptTypeRE = /^(?:text|application)\/javascript/i,
	      xmlTypeRE = /^(?:text|application)\/xml/i,
	      jsonType = 'application/json',
	      htmlType = 'text/html',
	      blankRE = /^\s*$/,
	      originAnchor = document.createElement('a')
	
	  originAnchor.href = window.location.href
	
	  // trigger a custom event and return false if it was cancelled
	  function triggerAndReturn(context, eventName, data) {
	    var event = $.Event(eventName)
	    $(context).trigger(event, data)
	    return !event.isDefaultPrevented()
	  }
	
	  // trigger an Ajax "global" event
	  function triggerGlobal(settings, context, eventName, data) {
	    if (settings.global) return triggerAndReturn(context || document, eventName, data)
	  }
	
	  // Number of active Ajax requests
	  $.active = 0
	
	  function ajaxStart(settings) {
	    if (settings.global && $.active++ === 0) triggerGlobal(settings, null, 'ajaxStart')
	  }
	  function ajaxStop(settings) {
	    if (settings.global && !(--$.active)) triggerGlobal(settings, null, 'ajaxStop')
	  }
	
	  // triggers an extra global event "ajaxBeforeSend" that's like "ajaxSend" but cancelable
	  function ajaxBeforeSend(xhr, settings) {
	    var context = settings.context
	    if (settings.beforeSend.call(context, xhr, settings) === false ||
	        triggerGlobal(settings, context, 'ajaxBeforeSend', [xhr, settings]) === false)
	      return false
	
	    triggerGlobal(settings, context, 'ajaxSend', [xhr, settings])
	  }
	  function ajaxSuccess(data, xhr, settings, deferred) {
	    var context = settings.context, status = 'success'
	    settings.success.call(context, data, status, xhr)
	    if (deferred) deferred.resolveWith(context, [data, status, xhr])
	    triggerGlobal(settings, context, 'ajaxSuccess', [xhr, settings, data])
	    ajaxComplete(status, xhr, settings)
	  }
	  // type: "timeout", "error", "abort", "parsererror"
	  function ajaxError(error, type, xhr, settings, deferred) {
	    var context = settings.context
	    settings.error.call(context, xhr, type, error)
	    if (deferred) deferred.rejectWith(context, [xhr, type, error])
	    triggerGlobal(settings, context, 'ajaxError', [xhr, settings, error || type])
	    ajaxComplete(type, xhr, settings)
	  }
	  // status: "success", "notmodified", "error", "timeout", "abort", "parsererror"
	  function ajaxComplete(status, xhr, settings) {
	    var context = settings.context
	    settings.complete.call(context, xhr, status)
	    triggerGlobal(settings, context, 'ajaxComplete', [xhr, settings])
	    ajaxStop(settings)
	  }
	
	  // Empty function, used as default callback
	  function empty() {}
	
	  $.ajaxJSONP = function(options, deferred){
	    if (!('type' in options)) return $.ajax(options)
	
	    var _callbackName = options.jsonpCallback,
	      callbackName = ($.isFunction(_callbackName) ?
	        _callbackName() : _callbackName) || ('jsonp' + (++jsonpID)),
	      script = document.createElement('script'),
	      originalCallback = window[callbackName],
	      responseData,
	      abort = function(errorType) {
	        $(script).triggerHandler('error', errorType || 'abort')
	      },
	      xhr = { abort: abort }, abortTimeout
	
	    if (deferred) deferred.promise(xhr)
	
	    $(script).on('load error', function(e, errorType){
	      clearTimeout(abortTimeout)
	      $(script).off().remove()
	
	      if (e.type == 'error' || !responseData) {
	        ajaxError(null, errorType || 'error', xhr, options, deferred)
	      } else {
	        ajaxSuccess(responseData[0], xhr, options, deferred)
	      }
	
	      window[callbackName] = originalCallback
	      if (responseData && $.isFunction(originalCallback))
	        originalCallback(responseData[0])
	
	      originalCallback = responseData = undefined
	    })
	
	    if (ajaxBeforeSend(xhr, options) === false) {
	      abort('abort')
	      return xhr
	    }
	
	    window[callbackName] = function(){
	      responseData = arguments
	    }
	
	    script.src = options.url.replace(/\?(.+)=\?/, '?$1=' + callbackName)
	    document.head.appendChild(script)
	
	    if (options.timeout > 0) abortTimeout = setTimeout(function(){
	      abort('timeout')
	    }, options.timeout)
	
	    return xhr
	  }
	
	  $.ajaxSettings = {
	    // Default type of request
	    type: 'GET',
	    // Callback that is executed before request
	    beforeSend: empty,
	    // Callback that is executed if the request succeeds
	    success: empty,
	    // Callback that is executed the the server drops error
	    error: empty,
	    // Callback that is executed on request complete (both: error and success)
	    complete: empty,
	    // The context for the callbacks
	    context: null,
	    // Whether to trigger "global" Ajax events
	    global: true,
	    // Transport
	    xhr: function () {
	      return new window.XMLHttpRequest()
	    },
	    // MIME types mapping
	    // IIS returns Javascript as "application/x-javascript"
	    accepts: {
	      script: 'text/javascript, application/javascript, application/x-javascript',
	      json:   jsonType,
	      xml:    'application/xml, text/xml',
	      html:   htmlType,
	      text:   'text/plain'
	    },
	    // Whether the request is to another domain
	    crossDomain: false,
	    // Default timeout
	    timeout: 0,
	    // Whether data should be serialized to string
	    processData: true,
	    // Whether the browser should be allowed to cache GET responses
	    cache: true
	  }
	
	  function mimeToDataType(mime) {
	    if (mime) mime = mime.split(';', 2)[0]
	    return mime && ( mime == htmlType ? 'html' :
	      mime == jsonType ? 'json' :
	      scriptTypeRE.test(mime) ? 'script' :
	      xmlTypeRE.test(mime) && 'xml' ) || 'text'
	  }
	
	  function appendQuery(url, query) {
	    if (query == '') return url
	    return (url + '&' + query).replace(/[&?]{1,2}/, '?')
	  }
	
	  // serialize payload and append it to the URL for GET requests
	  function serializeData(options) {
	    if (options.processData && options.data && $.type(options.data) != "string")
	      options.data = $.param(options.data, options.traditional)
	    if (options.data && (!options.type || options.type.toUpperCase() == 'GET'))
	      options.url = appendQuery(options.url, options.data), options.data = undefined
	  }
	
	  $.ajax = function(options){
	    var settings = $.extend({}, options || {}),
	        deferred = $.Deferred && $.Deferred(),
	        urlAnchor
	    for (key in $.ajaxSettings) if (settings[key] === undefined) settings[key] = $.ajaxSettings[key]
	
	    ajaxStart(settings)
	
	    if (!settings.crossDomain) {
	      urlAnchor = document.createElement('a')
	      urlAnchor.href = settings.url
	      urlAnchor.href = urlAnchor.href
	      settings.crossDomain = (originAnchor.protocol + '//' + originAnchor.host) !== (urlAnchor.protocol + '//' + urlAnchor.host)
	    }
	
	    if (!settings.url) settings.url = window.location.toString()
	    serializeData(settings)
	
	    var dataType = settings.dataType, hasPlaceholder = /\?.+=\?/.test(settings.url)
	    if (hasPlaceholder) dataType = 'jsonp'
	
	    if (settings.cache === false || (
	         (!options || options.cache !== true) &&
	         ('script' == dataType || 'jsonp' == dataType)
	        ))
	      settings.url = appendQuery(settings.url, '_=' + Date.now())
	
	    if ('jsonp' == dataType) {
	      if (!hasPlaceholder)
	        settings.url = appendQuery(settings.url,
	          settings.jsonp ? (settings.jsonp + '=?') : settings.jsonp === false ? '' : 'callback=?')
	      return $.ajaxJSONP(settings, deferred)
	    }
	
	    var mime = settings.accepts[dataType],
	        headers = { },
	        setHeader = function(name, value) { headers[name.toLowerCase()] = [name, value] },
	        protocol = /^([\w-]+:)\/\//.test(settings.url) ? RegExp.$1 : window.location.protocol,
	        xhr = settings.xhr(),
	        nativeSetHeader = xhr.setRequestHeader,
	        abortTimeout
	
	    if (deferred) deferred.promise(xhr)
	
	    if (!settings.crossDomain) setHeader('X-Requested-With', 'XMLHttpRequest')
	    setHeader('Accept', mime || '*/*')
	    if (mime = settings.mimeType || mime) {
	      if (mime.indexOf(',') > -1) mime = mime.split(',', 2)[0]
	      xhr.overrideMimeType && xhr.overrideMimeType(mime)
	    }
	    if (settings.contentType || (settings.contentType !== false && settings.data && settings.type.toUpperCase() != 'GET'))
	      setHeader('Content-Type', settings.contentType || 'application/x-www-form-urlencoded')
	
	    if (settings.headers) for (name in settings.headers) setHeader(name, settings.headers[name])
	    xhr.setRequestHeader = setHeader
	
	    xhr.onreadystatechange = function(){
	      if (xhr.readyState == 4) {
	        xhr.onreadystatechange = empty
	        clearTimeout(abortTimeout)
	        var result, error = false
	        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304 || (xhr.status == 0 && protocol == 'file:')) {
	          dataType = dataType || mimeToDataType(settings.mimeType || xhr.getResponseHeader('content-type'))
	          result = xhr.responseText
	
	          try {
	            // http://perfectionkills.com/global-eval-what-are-the-options/
	            if (dataType == 'script')    (1,eval)(result)
	            else if (dataType == 'xml')  result = xhr.responseXML
	            else if (dataType == 'json') result = blankRE.test(result) ? null : $.parseJSON(result)
	          } catch (e) { error = e }
	
	          if (error) ajaxError(error, 'parsererror', xhr, settings, deferred)
	          else ajaxSuccess(result, xhr, settings, deferred)
	        } else {
	          ajaxError(xhr.statusText || null, xhr.status ? 'error' : 'abort', xhr, settings, deferred)
	        }
	      }
	    }
	
	    if (ajaxBeforeSend(xhr, settings) === false) {
	      xhr.abort()
	      ajaxError(null, 'abort', xhr, settings, deferred)
	      return xhr
	    }
	
	    if (settings.xhrFields) for (name in settings.xhrFields) xhr[name] = settings.xhrFields[name]
	
	    var async = 'async' in settings ? settings.async : true
	    xhr.open(settings.type, settings.url, async, settings.username, settings.password)
	
	    for (name in headers) nativeSetHeader.apply(xhr, headers[name])
	
	    if (settings.timeout > 0) abortTimeout = setTimeout(function(){
	        xhr.onreadystatechange = empty
	        xhr.abort()
	        ajaxError(null, 'timeout', xhr, settings, deferred)
	      }, settings.timeout)
	
	    // avoid sending empty string (#319)
	    xhr.send(settings.data ? settings.data : null)
	    return xhr
	  }
	
	  // handle optional data/success arguments
	  function parseArguments(url, data, success, dataType) {
	    if ($.isFunction(data)) dataType = success, success = data, data = undefined
	    if (!$.isFunction(success)) dataType = success, success = undefined
	    return {
	      url: url
	    , data: data
	    , success: success
	    , dataType: dataType
	    }
	  }
	
	  $.get = function(/* url, data, success, dataType */){
	    return $.ajax(parseArguments.apply(null, arguments))
	  }
	
	  $.post = function(/* url, data, success, dataType */){
	    var options = parseArguments.apply(null, arguments)
	    options.type = 'POST'
	    return $.ajax(options)
	  }
	
	  $.getJSON = function(/* url, data, success */){
	    var options = parseArguments.apply(null, arguments)
	    options.dataType = 'json'
	    return $.ajax(options)
	  }
	
	  $.fn.load = function(url, data, success){
	    if (!this.length) return this
	    var self = this, parts = url.split(/\s/), selector,
	        options = parseArguments(url, data, success),
	        callback = options.success
	    if (parts.length > 1) options.url = parts[0], selector = parts[1]
	    options.success = function(response){
	      self.html(selector ?
	        $('<div>').html(response.replace(rscript, "")).find(selector)
	        : response)
	      callback && callback.apply(self, arguments)
	    }
	    $.ajax(options)
	    return this
	  }
	
	  var escape = encodeURIComponent
	
	  function serialize(params, obj, traditional, scope){
	    var type, array = $.isArray(obj), hash = $.isPlainObject(obj)
	    $.each(obj, function(key, value) {
	      type = $.type(value)
	      if (scope) key = traditional ? scope :
	        scope + '[' + (hash || type == 'object' || type == 'array' ? key : '') + ']'
	      // handle data in serializeArray() format
	      if (!scope && array) params.add(value.name, value.value)
	      // recurse into nested objects
	      else if (type == "array" || (!traditional && type == "object"))
	        serialize(params, value, traditional, key)
	      else params.add(key, value)
	    })
	  }
	
	  $.param = function(obj, traditional){
	    var params = []
	    params.add = function(key, value) {
	      if ($.isFunction(value)) value = value()
	      if (value == null) value = ""
	      this.push(escape(key) + '=' + escape(value))
	    }
	    serialize(params, obj, traditional)
	    return params.join('&').replace(/%20/g, '+')
	  }
	})(Zepto)
	
	;(function($){
	  $.fn.serializeArray = function() {
	    var name, type, result = [],
	      add = function(value) {
	        if (value.forEach) return value.forEach(add)
	        result.push({ name: name, value: value })
	      }
	    if (this[0]) $.each(this[0].elements, function(_, field){
	      type = field.type, name = field.name
	      if (name && field.nodeName.toLowerCase() != 'fieldset' &&
	        !field.disabled && type != 'submit' && type != 'reset' && type != 'button' && type != 'file' &&
	        ((type != 'radio' && type != 'checkbox') || field.checked))
	          add($(field).val())
	    })
	    return result
	  }
	
	  $.fn.serialize = function(){
	    var result = []
	    this.serializeArray().forEach(function(elm){
	      result.push(encodeURIComponent(elm.name) + '=' + encodeURIComponent(elm.value))
	    })
	    return result.join('&')
	  }
	
	  $.fn.submit = function(callback) {
	    if (0 in arguments) this.bind('submit', callback)
	    else if (this.length) {
	      var event = $.Event('submit')
	      this.eq(0).trigger(event)
	      if (!event.isDefaultPrevented()) this.get(0).submit()
	    }
	    return this
	  }
	
	})(Zepto)
	
	;(function($){
	  // __proto__ doesn't exist on IE<11, so redefine
	  // the Z function to use object extension instead
	  if (!('__proto__' in {})) {
	    $.extend($.zepto, {
	      Z: function(dom, selector){
	        dom = dom || []
	        $.extend(dom, $.fn)
	        dom.selector = selector || ''
	        dom.__Z = true
	        return dom
	      },
	      // this is a kludge but works
	      isZ: function(object){
	        return $.type(object) === 'array' && '__Z' in object
	      }
	    })
	  }
	
	  // getComputedStyle shouldn't freak out when called
	  // without a valid element as argument
	  try {
	    getComputedStyle(undefined)
	  } catch(e) {
	    var nativeGetComputedStyle = getComputedStyle;
	    window.getComputedStyle = function(element){
	      try {
	        return nativeGetComputedStyle(element)
	      } catch(e) {
	        return null
	      }
	    }
	  }
	})(Zepto)
	;
	
	if (true) {
	  module.exports = Zepto;
	}


/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _slideout = __webpack_require__(90);
	
	var _slideout2 = _interopRequireDefault(_slideout);
	
	var _npmZepto = __webpack_require__(88);
	
	var _npmZepto2 = _interopRequireDefault(_npmZepto);
	
	var _config = __webpack_require__(87);
	
	var _config2 = _interopRequireDefault(_config);
	
	exports['default'] = {
	
	  escapeHTML: function escapeHTML(text) {
	    return text.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
	  },
	
	  // filter an item from list by id prop
	  getItemById: function getItemById(items, targetId, idProp) {
	    var results = _npmZepto2['default'].grep(items, function (item) {
	      return item['id' || idProp] === targetId;
	    });
	    return results && results[0] || null;
	  },
	
	  // getSlideOut: (() => {
	  //   // setup slideout at initialization
	  //   var slideout = new Slideout({
	  //     'panel': document.getElementById('main'),
	  //     'menu': document.getElementById('menu'),
	  //     'padding': 256,
	  //     'tolerance': 70
	  //   })
	  //   // add event handler on main to close by click
	  //   $('.component__main').on('click', (e) => {
	  //     if(slideout.isOpen()){
	  //       slideout.close()
	  //     }
	  //   })
	  //   return () => slideout
	  // })(),
	
	  request: function request() {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	    return new Promise(function (resolve, reject) {
	      var headers = options.headers || {};
	      headers['X-Parse-Application-Id'] = _config2['default'].api.appId;
	      headers['X-Parse-REST-API-Key'] = _config2['default'].api.appKey;
	      // TODO
	      // var sessionToken = storage.get('sessionToken')
	      // if (sessionToken) {
	      //   headers['X-Parse-Session-Token'] = sessionToken
	      // }
	      _npmZepto2['default'].ajax({
	        type: 'GET',
	        headers: headers,
	        url: options.url,
	        data: options.data || null,
	        dataType: options.dataType || 'json',
	        cache: options.cache || false,
	        success: resolve,
	        error: reject
	      });
	    });
	  }
	
	};
	module.exports = exports['default'];

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * Module dependencies
	 */
	var decouple = __webpack_require__(91);
	var Emitter = __webpack_require__(92);
	
	/**
	 * Privates
	 */
	var scrollTimeout;
	var scrolling = false;
	var doc = window.document;
	var html = doc.documentElement;
	var msPointerSupported = window.navigator.msPointerEnabled;
	var touch = {
	  'start': msPointerSupported ? 'MSPointerDown' : 'touchstart',
	  'move': msPointerSupported ? 'MSPointerMove' : 'touchmove',
	  'end': msPointerSupported ? 'MSPointerUp' : 'touchend'
	};
	var prefix = (function prefix() {
	  var regex = /^(Webkit|Khtml|Moz|ms|O)(?=[A-Z])/;
	  var styleDeclaration = doc.getElementsByTagName('script')[0].style;
	  for (var prop in styleDeclaration) {
	    if (regex.test(prop)) {
	      return '-' + prop.match(regex)[0].toLowerCase() + '-';
	    }
	  }
	  // Nothing found so far? Webkit does not enumerate over the CSS properties of the style object.
	  // However (prop in style) returns the correct value, so we'll have to test for
	  // the precence of a specific property
	  if ('WebkitOpacity' in styleDeclaration) { return '-webkit-'; }
	  if ('KhtmlOpacity' in styleDeclaration) { return '-khtml-'; }
	  return '';
	}());
	function extend(destination, from) {
	  for (var prop in from) {
	    if (from[prop]) {
	      destination[prop] = from[prop];
	    }
	  }
	  return destination;
	}
	function inherits(child, uber) {
	  child.prototype = extend(child.prototype || {}, uber.prototype);
	}
	
	/**
	 * Slideout constructor
	 */
	function Slideout(options) {
	  options = options || {};
	
	  // Sets default values
	  this._startOffsetX = 0;
	  this._currentOffsetX = 0;
	  this._opening = false;
	  this._moved = false;
	  this._opened = false;
	  this._preventOpen = false;
	  this._touch = options.touch === undefined ? true : options.touch && true;
	
	  // Sets panel
	  this.panel = options.panel;
	  this.menu = options.menu;
	
	  // Sets  classnames
	  this.panel.className += ' slideout-panel';
	  this.menu.className += ' slideout-menu';
	
	  // Sets options
	  this._fx = options.fx || 'ease';
	  this._duration = parseInt(options.duration, 10) || 300;
	  this._tolerance = parseInt(options.tolerance, 10) || 70;
	  this._padding = this._translateTo = parseInt(options.padding, 10) || 256;
	  this._orientation = options.side === 'right' ? -1 : 1;
	  this._translateTo *= this._orientation;
	
	  // Init touch events
	  if (this._touch) {
	    this._initTouchEvents();
	  }
	}
	
	/**
	 * Inherits from Emitter
	 */
	inherits(Slideout, Emitter);
	
	/**
	 * Opens the slideout menu.
	 */
	Slideout.prototype.open = function() {
	  var self = this;
	  this.emit('beforeopen');
	  if (html.className.search('slideout-open') === -1) { html.className += ' slideout-open'; }
	  this._setTransition();
	  this._translateXTo(this._translateTo);
	  this._opened = true;
	  setTimeout(function() {
	    self.panel.style.transition = self.panel.style['-webkit-transition'] = '';
	    self.emit('open');
	  }, this._duration + 50);
	  return this;
	};
	
	/**
	 * Closes slideout menu.
	 */
	Slideout.prototype.close = function() {
	  var self = this;
	  if (!this.isOpen() && !this._opening) { return this; }
	  this.emit('beforeclose');
	  this._setTransition();
	  this._translateXTo(0);
	  this._opened = false;
	  setTimeout(function() {
	    html.className = html.className.replace(/ slideout-open/, '');
	    self.panel.style.transition = self.panel.style['-webkit-transition'] = self.panel.style[prefix + 'transform'] = self.panel.style.transform = '';
	    self.emit('close');
	  }, this._duration + 50);
	  return this;
	};
	
	/**
	 * Toggles (open/close) slideout menu.
	 */
	Slideout.prototype.toggle = function() {
	  return this.isOpen() ? this.close() : this.open();
	};
	
	/**
	 * Returns true if the slideout is currently open, and false if it is closed.
	 */
	Slideout.prototype.isOpen = function() {
	  return this._opened;
	};
	
	/**
	 * Translates panel and updates currentOffset with a given X point
	 */
	Slideout.prototype._translateXTo = function(translateX) {
	  this._currentOffsetX = translateX;
	  this.panel.style[prefix + 'transform'] = this.panel.style.transform = 'translate3d(' + translateX + 'px, 0, 0)';
	};
	
	/**
	 * Set transition properties
	 */
	Slideout.prototype._setTransition = function() {
	  this.panel.style[prefix + 'transition'] = this.panel.style.transition = prefix + 'transform ' + this._duration + 'ms ' + this._fx;
	};
	
	/**
	 * Initializes touch event
	 */
	Slideout.prototype._initTouchEvents = function() {
	  var self = this;
	
	  /**
	   * Decouple scroll event
	   */
	  decouple(doc, 'scroll', function() {
	    if (!self._moved) {
	      clearTimeout(scrollTimeout);
	      scrolling = true;
	      scrollTimeout = setTimeout(function() {
	        scrolling = false;
	      }, 250);
	    }
	  });
	
	  /**
	   * Prevents touchmove event if slideout is moving
	   */
	  doc.addEventListener(touch.move, function(eve) {
	    if (self._moved) {
	      eve.preventDefault();
	    }
	  });
	
	  /**
	   * Resets values on touchstart
	   */
	  this.panel.addEventListener(touch.start, function(eve) {
	
	    if (typeof eve.touches === 'undefined') { return; }
	
	    self._moved = false;
	    self._opening = false;
	    self._startOffsetX = eve.touches[0].pageX;
	    self._preventOpen = (!self.isOpen() && self.menu.clientWidth !== 0);
	  });
	
	  /**
	   * Resets values on touchcancel
	   */
	  this.panel.addEventListener('touchcancel', function() {
	    self._moved = false;
	    self._opening = false;
	  });
	
	  /**
	   * Toggles slideout on touchend
	   */
	  this.panel.addEventListener(touch.end, function() {
	    if (self._moved) {
	      (self._opening && Math.abs(self._currentOffsetX) > self._tolerance) ? self.open() : self.close();
	    }
	    self._moved = false;
	  });
	
	  /**
	   * Translates panel on touchmove
	   */
	  this.panel.addEventListener(touch.move, function(eve) {
	
	    if (scrolling || self._preventOpen || typeof eve.touches === 'undefined') { return; }
	
	    var dif_x = eve.touches[0].clientX - self._startOffsetX;
	    var translateX = self._currentOffsetX = dif_x;
	
	    if (Math.abs(translateX) > self._padding) { return; }
	
	    if (Math.abs(dif_x) > 20) {
	      self._opening = true;
	
	      var oriented_dif_x = dif_x * self._orientation;
	      if (self._opened && oriented_dif_x > 0 || !self._opened && oriented_dif_x < 0) { return; }
	      if (oriented_dif_x <= 0) {
	        translateX = dif_x + self._padding * self._orientation;
	        self._opening = false;
	      }
	
	      if (!self._moved && html.className.search('slideout-open') === -1) {
	        html.className += ' slideout-open';
	      }
	
	      self.panel.style[prefix + 'transform'] = self.panel.style.transform = 'translate3d(' + translateX + 'px, 0, 0)';
	      self.emit('translate', translateX);
	      self._moved = true;
	    }
	
	  });
	
	};
	
	/**
	 * Expose Slideout
	 */
	module.exports = Slideout;


/***/ },
/* 91 */
/***/ function(module, exports) {

	'use strict';
	
	var requestAnimFrame = (function() {
	  return window.requestAnimationFrame ||
	    window.webkitRequestAnimationFrame ||
	    function (callback) {
	      window.setTimeout(callback, 1000 / 60);
	    };
	}());
	
	function decouple(node, event, fn) {
	  var eve,
	      tracking = false;
	
	  function captureEvent(e) {
	    eve = e;
	    track();
	  }
	
	  function track() {
	    if (!tracking) {
	      requestAnimFrame(update);
	      tracking = true;
	    }
	  }
	
	  function update() {
	    fn.call(node, eve);
	    tracking = false;
	  }
	
	  node.addEventListener(event, captureEvent, false);
	}
	
	/**
	 * Expose decouple
	 */
	module.exports = decouple;


/***/ },
/* 92 */
/***/ function(module, exports) {

	"use strict";
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	exports.__esModule = true;
	/**
	 * Creates a new instance of Emitter.
	 * @class
	 * @returns {Object} Returns a new instance of Emitter.
	 * @example
	 * // Creates a new instance of Emitter.
	 * var Emitter = require('emitter');
	 *
	 * var emitter = new Emitter();
	 */
	
	var Emitter = (function () {
	  function Emitter() {
	    _classCallCheck(this, Emitter);
	  }
	
	  /**
	   * Adds a listener to the collection for the specified event.
	   * @memberof! Emitter.prototype
	   * @function
	   * @param {String} event - The event name.
	   * @param {Function} listener - A listener function to add.
	   * @returns {Object} Returns an instance of Emitter.
	   * @example
	   * // Add an event listener to "foo" event.
	   * emitter.on('foo', listener);
	   */
	
	  Emitter.prototype.on = function on(event, listener) {
	    // Use the current collection or create it.
	    this._eventCollection = this._eventCollection || {};
	
	    // Use the current collection of an event or create it.
	    this._eventCollection[event] = this._eventCollection[event] || [];
	
	    // Appends the listener into the collection of the given event
	    this._eventCollection[event].push(listener);
	
	    return this;
	  };
	
	  /**
	   * Adds a listener to the collection for the specified event that will be called only once.
	   * @memberof! Emitter.prototype
	   * @function
	   * @param {String} event - The event name.
	   * @param {Function} listener - A listener function to add.
	   * @returns {Object} Returns an instance of Emitter.
	   * @example
	   * // Will add an event handler to "foo" event once.
	   * emitter.once('foo', listener);
	   */
	
	  Emitter.prototype.once = function once(event, listener) {
	    var self = this;
	
	    function fn() {
	      self.off(event, fn);
	      listener.apply(this, arguments);
	    }
	
	    fn.listener = listener;
	
	    this.on(event, fn);
	
	    return this;
	  };
	
	  /**
	   * Removes a listener from the collection for the specified event.
	   * @memberof! Emitter.prototype
	   * @function
	   * @param {String} event - The event name.
	   * @param {Function} listener - A listener function to remove.
	   * @returns {Object} Returns an instance of Emitter.
	   * @example
	   * // Remove a given listener.
	   * emitter.off('foo', listener);
	   */
	
	  Emitter.prototype.off = function off(event, listener) {
	
	    var listeners = undefined;
	
	    // Defines listeners value.
	    if (!this._eventCollection || !(listeners = this._eventCollection[event])) {
	      return this;
	    }
	
	    listeners.forEach(function (fn, i) {
	      if (fn === listener || fn.listener === listener) {
	        // Removes the given listener.
	        listeners.splice(i, 1);
	      }
	    });
	
	    // Removes an empty event collection.
	    if (listeners.length === 0) {
	      delete this._eventCollection[event];
	    }
	
	    return this;
	  };
	
	  /**
	   * Execute each item in the listener collection in order with the specified data.
	   * @memberof! Emitter.prototype
	   * @function
	   * @param {String} event - The name of the event you want to emit.
	   * @param {...Object} data - Data to pass to the listeners.
	   * @returns {Object} Returns an instance of Emitter.
	   * @example
	   * // Emits the "foo" event with 'param1' and 'param2' as arguments.
	   * emitter.emit('foo', 'param1', 'param2');
	   */
	
	  Emitter.prototype.emit = function emit(event) {
	    var _this = this;
	
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }
	
	    var listeners = undefined;
	
	    // Defines listeners value.
	    if (!this._eventCollection || !(listeners = this._eventCollection[event])) {
	      return this;
	    }
	
	    // Clone listeners
	    listeners = listeners.slice(0);
	
	    listeners.forEach(function (fn) {
	      return fn.apply(_this, args);
	    });
	
	    return this;
	  };
	
	  return Emitter;
	})();
	
	/**
	 * Exports Emitter
	 */
	exports["default"] = Emitter;
	module.exports = exports["default"];

/***/ },
/* 93 */
/***/ function(module, exports) {

	/**
	 * Cache
	 * Store API response cache and temp data
	 */
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = {
	
	  _ref: {
	    // login user info
	    me: null,
	    // callback URL after login success
	    loginCallbackUrl: null,
	    // URL histories to move by back button
	    histories: ['#/'],
	    // current selected detail offer
	    detail: null,
	    // current selected request detail
	    requestDetail: null,
	    // current top & map query conditions
	    queryParams: null
	  },
	
	  set: function set(key, value) {
	    this._ref[key] = value;
	  },
	
	  get: function get(key) {
	    return this._ref[key];
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(95)
	module.exports.template = __webpack_require__(96)


/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _commonConfig = __webpack_require__(87);
	
	var _commonConfig2 = _interopRequireDefault(_commonConfig);
	
	var _commonCache = __webpack_require__(93);
	
	var _commonCache2 = _interopRequireDefault(_commonCache);
	
	var _commonUtil = __webpack_require__(89);
	
	var _commonUtil2 = _interopRequireDefault(_commonUtil);
	
	exports['default'] = {
	
	  data: function data() {
	    return {
	      isLoggedIn: _commonConfig2['default'].isLoggedIn,
	      countryId: 'tokyo',
	      center: {
	        title: ''
	      },
	      left: {
	        label: '',
	        icon: '',
	        callback: null
	      },
	      right: {
	        label: '',
	        icon: '',
	        callback: null
	      }
	    };
	  },
	
	  computed: {
	    leftCallback: function leftCallback() {
	      return this.left.callback || function () {};
	    },
	
	    rightCallback: function rightCallback() {
	      return this.right.callback || function () {};
	    }
	  },
	
	  created: function created() {
	    var _this = this;
	
	    this.$on('onRoute', function (componentId) {
	      _this.updateHeader(componentId);
	    });
	  },
	
	  methods: {
	    iconDefaultLeft: function iconDefaultLeft() {
	      // return {
	      //   icon: 'icon_menu',
	      //   callback: this.toggleMenu
	      // }
	      return {
	        icon: 'icon_logo',
	        callback: function callback() {
	          location.href = '#/';
	        }
	      };
	    },
	
	    backToTop: function backToTop() {
	      return {
	        icon: 'icon_back',
	        callback: function callback() {
	          location.href = '#/';
	        }
	      };
	    },
	
	    iconNone: function iconNone() {
	      return {
	        icon: 'none'
	      };
	    },
	
	    iconMap: function iconMap() {
	      return {
	        icon: 'icon_map',
	        callback: function callback() {
	          location.href = '#/map';
	        }
	      };
	    },
	
	    iconList: function iconList() {
	      return {
	        icon: 'icon_list',
	        callback: function callback() {
	          location.href = '#/';
	        }
	      };
	    },
	
	    // iconDefaultRight() {
	    //   if(config.isLoggedIn) {
	    //     // set login user profile image
	    //     var me = cache.get('me')
	    //     var label = `<img src="${me.imageUrl}"/>`
	    //     return {
	    //       icon: 'icon_profile',
	    //       label: label,
	    //       callback() {
	    //         location.href = '#/mypage/top'
	    //       }
	    //     }
	    //   }else{
	    //     return {
	    //       label: 'Login',
	    //       callback() {
	    //         location.href = '#/login'
	    //       }
	    //     }
	    //   }
	    // },
	
	    updateHeader: function updateHeader(componentId) {
	      var that = this;
	      switch (componentId) {
	        case 'page-login':
	          this.center = { title: 'Login' };
	          this.left = { icon: 'none' };
	          this.right = {
	            icon: 'icon_close',
	            callback: this.back
	          };
	          break;
	        case 'page-top':
	          this.center = { title: 'Tokyo' };
	          this.left = this.iconDefaultLeft();
	          this.right = this.iconMap();
	          break;
	        case 'page-map':
	          this.center = { title: 'Tokyo' };
	          this.left = this.iconDefaultLeft();
	          this.right = this.iconList();
	          break;
	        case 'page-detail':
	          this.center = { title: 'Detail Info' };
	          this.left = this.iconDefaultLeft();
	          this.right = this.iconNone();
	          break;
	        case 'page-wishlist':
	          this.center = { title: 'Wish List' };
	          this.left = this.backToTop();
	          this.right = this.iconNone();
	          break;
	        case 'page-mypage-top':
	          this.center = { title: 'Account' };
	          this.left = this.iconDefaultLeft();
	          // this.left = {
	          //   icon: 'icon_back',
	          //   callback: this.back
	          // }
	          this.right = {
	            label: 'Edit',
	            callback: function callback() {
	              location.href = '#/mypage/edit';
	            }
	          };
	          break;
	        case 'page-mypage-edit':
	          this.center = { title: 'Account' };
	          this.left = {
	            icon: 'icon_back',
	            callback: function callback() {
	              location.href = '#/mypage/top';
	            }
	          };
	          this.right = {
	            label: 'Save',
	            callback: function callback() {
	              that.onSave(componentId);
	            }
	          };
	          break;
	        case 'page-payment-order':
	          this.center = { title: 'Request Ticket' };
	          this.left = {
	            icon: 'icon_back',
	            callback: this.back
	          };
	          this.right = this.iconNone();
	          break;
	        case 'page-payment-success':
	          this.center = { title: 'Thank You' };
	          this.left = this.iconDefaultLeft();
	          this.right = this.iconNone();
	          break;
	        case 'page-request-list':
	          this.center = { title: 'My Bookings' };
	          this.left = {
	            icon: 'icon_back',
	            callback: function callback() {
	              location.href = '#/';
	            }
	          };
	          this.right = this.iconNone();
	          break;
	        case 'page-request-detail':
	          this.center = { title: 'My Bookings' };
	          this.left = {
	            icon: 'icon_back',
	            callback: function callback() {
	              location.href = '#/request/list';
	            }
	          };
	          this.right = this.iconNone();
	          break;
	        default:
	          this.center = {};
	          this.left = this.iconDefaultLeft();
	          this.right = this.iconNone();
	          break;
	      }
	    },
	
	    toggleMenu: function toggleMenu() {
	      _commonUtil2['default'].getSlideOut().toggle();
	    },
	
	    back: function back() {
	      var histories = _commonCache2['default'].get('histories');
	      // remove current url from history
	      histories.pop();
	      var url = histories.pop();
	      // skip login screen for back
	      while (url == '#/login') {
	        url = histories.pop();
	      }
	      location.href = url;
	    },
	
	    onChangeCountry: function onChangeCountry() {
	      this.$dispatch('onChangeCountry', this.countryId);
	    },
	
	    onSave: function onSave(componentId) {
	      this.$dispatch('onSave', componentId);
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 96 */
/***/ function(module, exports) {

	module.exports = "<div class=\"header_wrap\">\n        <a class=\"button_left {{left.icon}}\" v-on=\"click: leftCallback\" v-if=\"left.icon != 'none'\" href=\"javascript:;\">{{{left.label}}}</a>\n        <div class=\"header_title\">\n          <span v-if=\"center.title\" v-text=\"center.title\"></span>\n          <select class=\"select_title\" v-if=\"!center.title\" v-model=\"countryId\">\n            <option value=\"tokyo\">Tokyo</option>\n            <option value=\"singapore\">Singapore</option>\n          </select>\n        </div>\n        <a class=\"button_right {{right.icon}}\" v-on=\"click: rightCallback\" v-if=\"right.icon != 'none'\" href=\"javascript:;\">{{{right.label}}}</a>\n    </div>";

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(98)
	module.exports.template = __webpack_require__(99)


/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _commonConfig = __webpack_require__(87);
	
	var _commonConfig2 = _interopRequireDefault(_commonConfig);
	
	var _commonCache = __webpack_require__(93);
	
	var _commonCache2 = _interopRequireDefault(_commonCache);
	
	var _commonUtil = __webpack_require__(89);
	
	var _commonUtil2 = _interopRequireDefault(_commonUtil);
	
	exports['default'] = {
	  data: function data() {
	    return {
	      me: null,
	      bookings: []
	    };
	  },
	
	  created: function created() {
	    var _this = this;
	
	    this.$on('onRoute', function (componentId) {
	      _this.me = _commonCache2['default'].get('me');
	    });
	  },
	
	  methods: {
	    move: function move(href) {
	      _commonUtil2['default'].getSlideOut().close();
	      location.href = href;
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 99 */
/***/ function(module, exports) {

	module.exports = "<div class=\"nav_logo\">\n    LOGO\n  </div>\n  <div class=\"nav_menu\">\n    <ul>\n      <li v-if=\"me\" class=\"nav_profile\">\n          <a class=\"icon_profile\" v-on=\"click: move('#/mypage/top')\" href=\"javascript:;\">\n            <img v-attr=\"src: me.imageUrl\"/>\n            <span>{{me.name}}</span>\n          </a>\n      </li>\n      <li v-if=\"!me\"><a v-on=\"click: move('#/login')\">Login</a></li>\n      <li><a v-on=\"click: move('#/')\">Explore</a></li>\n      <li><a v-on=\"click: move('#/wishlist')\">Wish List</a></li>\n      <!-- <li><a v-on=\"click: move('#')\">Earn Credit</a><span>$0.00</span></li> -->\n      <!-- <li><a v-on=\"click: move('#')\">Settings</a></li> -->\n      <li>\n        <a v-on=\"click: move('#/request/list')\">My Bookings</a>\n        <div class=\"nav_bookings\">\n          <div v-repeat=\"bookings\"></div>\n        </div>\n      </li>\n      <li v-if=\"me\"><a v-on=\"click: move('#/logout')\">Logout</a></li>\n    </ul>\n  </div>";

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(101)
	module.exports.template = __webpack_require__(102)


/***/ },
/* 101 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = {
	  data: function data() {
	    return {};
	  },
	
	  methods: {}
	};
	module.exports = exports["default"];

/***/ },
/* 102 */
/***/ function(module, exports) {

	module.exports = "<div class=\"footer_wrap\">\n  </div>";

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(104)
	module.exports.template = __webpack_require__(105)


/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _npmZepto = __webpack_require__(88);
	
	var _npmZepto2 = _interopRequireDefault(_npmZepto);
	
	var _commonUtil = __webpack_require__(89);
	
	var _commonUtil2 = _interopRequireDefault(_commonUtil);
	
	var _commonConfig = __webpack_require__(87);
	
	var _commonConfig2 = _interopRequireDefault(_commonConfig);
	
	var _commonCache = __webpack_require__(93);
	
	var _commonCache2 = _interopRequireDefault(_commonCache);
	
	exports['default'] = {
	
	    data: function data() {
	        return {
	            initialized: false,
	            item: {}
	        };
	    },
	
	    created: function created() {
	        // check exisiting item
	        var detail = _commonCache2['default'].get('detail');
	        if (detail) {
	            this.item = detail;
	            this.initialized = true;
	            this.initSwiper();
	        } else {
	            // direct access if item does not exist, load an item
	            this.refresh(this.$root.router.getRoute()[1]);
	        }
	    },
	
	    methods: {
	        refresh: function refresh(id) {
	            var _this = this;
	
	            if (!id) {
	                return;
	            }
	            // initial load
	            var detailDeferred = _commonUtil2['default'].request({
	                // url: "./api/v1/offer/detail/" + id
	                url: _commonConfig2['default'].api.url + '/classes/Offer/' + id
	            });
	            // done both detail and me promises are resolved
	            Promise.all([detailDeferred, this.$root.fetchMe()]).then(function (data) {
	                // for initial router destroyed e.g. direct access to detail page
	                if (!_this.$root) {
	                    return;
	                }
	                var item = data[0] || [],
	                    me = data[1] || { favorites: [] };
	                // set favorited
	                item.favorited = me.favorites.indexOf(item.id) > -1;
	                // store to cache
	                _this.item = item;
	                _commonCache2['default'].set('detail', item);
	                _this.initialized = true;
	                _this.initSwiper();
	            });
	        },
	
	        onClickPayment: function onClickPayment() {
	            location.href = '#/payment/order';
	        },
	
	        favorite: function favorite() {
	            // TODO
	            var favorited = this.item.favorited;
	            if (favorited) {} else {}
	        },
	
	        initSwiper: function initSwiper() {
	            var _this2 = this;
	
	            // TODO: temp to attach after DOM is inserted by initialized flag
	            setTimeout(function () {
	                var $banners = (0, _npmZepto2['default'])(_this2.$el).find('.swiper-container'),
	                    size = $banners.find('li').size();
	                new Swiper($banners, {
	                    wrapperClass: 'swiper-wrapper',
	                    slideClass: 'swiper-slide',
	                    loop: size > 1,
	                    autoplay: 4000,
	                    autoplayDisableOnInteraction: false
	                });
	            }, 25);
	        }
	    }
	};
	module.exports = exports['default'];

	// send unfav

	// send fav

/***/ },
/* 105 */
/***/ function(module, exports) {

	module.exports = "<div class=\"page__detail\">\n    <div v-if=\"initialized\">\n        <div class=\"detail_banner swiper-container\">\n            <ul class=\"swiper-wrapper\">\n                <li v-repeat=\"item.images\" class=\"swiper-slide detail_banner_bg\" v-style=\"background-image: 'url(' + url + ')'\"></li>\n            </ul>\n        </div>\n        <div class=\"detail_summary\">\n            <div class=\"detail_title\">{{item.name}}</div>\n            <div class=\"detail_table\">\n                <div class=\"detail_middle\">\n                    <div class=\"detail_categories\">\n                        <span>{{item.type | type}}</span>\n                    </div>\n                    <div class=\"detail_area\">{{item.address.city}}</div>\n                </div>\n                <div class=\"detail_right\">\n                <div class=\"detail_favorite\" v-class=\"icon_favorite: favorited, icon_favorite_blank: !favorited\" v-on=\"click: favorite\"></div>\n                    <div class=\"detail_price\">{{item.price | price}}</div>\n                </div>\n            </div>\n        </div>\n        <div class=\"detail_main\">\n            <h5>About this place</h5>\n            <div>\n                <p>Hours: {{item.availability}}</p>\n            </div>\n            <div class=\"detail_location\">\n                <div class=\"detail_location_icon\"></div>\n                <div class=\"detail_location_content\">\n                    <div class=\"detail_location_title\">{{item.address.state}}</div>\n                    <div class=\"detail_location_address\">{{item.address | address}}</div>\n                    <div class=\"detail_location_right\">\n                        <span>Open with Google Map</span>\n                    </div>\n                </div>\n            </div>\n            <p class=\"detail_description\">{{{item.description}}}</p>\n        </div>\n        <div class=\"detail_footer\">\n            <div class=\"detail_btn btn_large\" v-on=\"click: onClickPayment\">GET TICKET {{item.price | price}}</div>\n        </div>\n    </div>\n  </div>";

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(107)
	module.exports.template = __webpack_require__(108)


/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _commonConfig = __webpack_require__(87);
	
	var _commonConfig2 = _interopRequireDefault(_commonConfig);
	
	var _commonCache = __webpack_require__(93);
	
	var _commonCache2 = _interopRequireDefault(_commonCache);
	
	exports['default'] = {
	  data: function data() {
	    return {
	      username: '',
	      email: ''
	    };
	  },
	
	  components: {},
	
	  created: function created() {},
	
	  methods: {
	    onClickLogin: function onClickLogin() {
	      // TODO: temp callback
	      _commonConfig2['default'].isLoggedIn = true;
	      // TODO: call API
	      this.$root.fetchMe().then(function () {
	        // TODO: set sessionToken
	        location.href = _commonCache2['default'].get('loginCallbackUrl') || '#/';
	      }, function () {
	        _commonConfig2['default'].isLoggedIn = false;
	      });
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 108 */
/***/ function(module, exports) {

	module.exports = "<div class=\"page__login\">\n    <div class=\"login_titleWrap\">\n      <h2 class=\"login_title\">Join Booked</h2>\n      <div>and never miss the best things to do for your trip.</div>\n    </div>\n    <div class=\"login_content\">\n      <div class=\"login_description\">\n      We will never post anything without your permission\n      </div>\n      <div class=\"login_btnWrap\">\n        <div>\n          <a class=\"BookedBtn\" v-on=\"click: onClickLogin\">\n            <div class=\"BookedBtnLabel\">Login</div>\n          </a>\n        </div>\n        <div>\n          <a class=\"FbBtn\" v-on=\"click: onClickLogin\">\n             <div class=\"FbBtnLabel\">Login with Facebook</div>\n          </a>\n        </div>\n      <div>\n    </div>\n  </div>\n</template>";

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(110)
	module.exports.template = __webpack_require__(111)


/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _commonConfig = __webpack_require__(87);
	
	var _commonConfig2 = _interopRequireDefault(_commonConfig);
	
	var _commonCache = __webpack_require__(93);
	
	var _commonCache2 = _interopRequireDefault(_commonCache);
	
	exports['default'] = {
	    data: function data() {
	        return {};
	    },
	
	    created: function created() {
	        // TODO: use API to logout
	        _commonCache2['default'].set('me', null);
	        _commonConfig2['default'].isLoggedIn = false;
	        // redirect to top
	        location.href = '#/';
	    }
	};
	module.exports = exports['default'];

/***/ },
/* 111 */
/***/ function(module, exports) {

	module.exports = "<div class=\"page__logout\"></div>";

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(113)
	module.exports.template = __webpack_require__(124)


/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _npmZepto = __webpack_require__(88);
	
	var _npmZepto2 = _interopRequireDefault(_npmZepto);
	
	var _commonUtil = __webpack_require__(89);
	
	var _commonUtil2 = _interopRequireDefault(_commonUtil);
	
	var _commonConfig = __webpack_require__(87);
	
	var _commonConfig2 = _interopRequireDefault(_commonConfig);
	
	var _commonCache = __webpack_require__(93);
	
	var _commonCache2 = _interopRequireDefault(_commonCache);
	
	var _componentsCategoriesVue = __webpack_require__(114);
	
	var _componentsCategoriesVue2 = _interopRequireDefault(_componentsCategoriesVue);
	
	var _componentsCardVue = __webpack_require__(119);
	
	var _componentsCardVue2 = _interopRequireDefault(_componentsCardVue);
	
	exports['default'] = {
	  data: function data() {
	    return {
	      loading: false,
	      items: [],
	      queryParams: {
	        filter: '',
	        order: 'popular'
	      }
	    };
	  },
	
	  components: {
	    'component-categories': _componentsCategoriesVue2['default'],
	    'component-card': _componentsCardVue2['default']
	  },
	
	  created: function created() {
	    // TODO: handle initial query params
	    this.restoreQueryParams();
	    // listening events
	    this.attachEvents();
	    // initial load
	    this.refresh();
	  },
	
	  methods: {
	    attachEvents: function attachEvents() {
	      this.$on('onSelectCard', this.onSelectCard.bind(this));
	      this.$on('onSelectType', this.onSelectType.bind(this));
	    },
	
	    restoreQueryParams: function restoreQueryParams() {
	      // restore queryParams
	      var _cache = _commonCache2['default'].get('queryParams');
	      if (_cache) {
	        this.queryParams = _cache;
	      }
	    },
	
	    refresh: function refresh() {
	      var _this = this;
	
	      var params = {
	        limit: 50,
	        order: '-createdAt'
	      };
	
	      // if (skip) {
	      //   params.skip = skip
	      // }
	
	      if (this.queryParams.filter) {
	        params.where = { type: this.queryParams.filter };
	      }
	
	      // list promise
	      var listDeferred = _commonUtil2['default'].request({
	        // url: './api/v1/offer/list'
	        url: _commonConfig2['default'].api.url + '/classes/Offer',
	        data: params
	      });
	
	      this.loading = true;
	      // done both list and me promises are resolved
	      Promise.all([listDeferred, this.$root.fetchMe()]).then(function (data) {
	        // for initial router destroyed e.g. direct access to detail page
	        if (!_this.$root) {
	          return;
	        }
	        // store to cache
	        var items = data[0] && data[0].results || [],
	            me = data[1] || { favorites: [] };
	        // set favorited
	        items.forEach(function (item) {
	          item.favorited = me.favorites.indexOf(item.id) > -1;
	        });
	        _this.items = items;
	        _this.loading = false;
	        // broadcast load events
	        _this.$emit('onLoadCompleted');
	        _this.$broadcast('onLoadCompleted');
	      });
	    },
	
	    onSelectCard: function onSelectCard(id) {
	      // set to response cache
	      _commonCache2['default'].set('detail', _commonUtil2['default'].getItemById(this.items, id));
	      location.href = '#/detail/' + id;
	    },
	
	    onSelectType: function onSelectType(id) {
	      // toggle
	      if (this.queryParams.filter === id) {
	        this.queryParams.filter = '';
	      } else {
	        this.queryParams.filter = id;
	      }
	      // store cache to refer from map component
	      _commonCache2['default'].set('queryParams', this.queryParams);
	      this.refresh();
	    },
	
	    onChangeOrder: function onChangeOrder() {
	      console.log('order by: ' + this.queryParams.order);
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(115)
	module.exports.template = __webpack_require__(118)


/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _libSwiperJquery = __webpack_require__(116);
	
	var _libSwiperJquery2 = _interopRequireDefault(_libSwiperJquery);
	
	var _controllersConstants = __webpack_require__(117);
	
	var _controllersConstants2 = _interopRequireDefault(_controllersConstants);
	
	exports['default'] = {
	
	  props: ['selectedType'],
	
	  data: function data() {
	    return {
	      types: _controllersConstants2['default'].Types
	    };
	  },
	
	  created: function created() {
	    this.$on('onLoadCompleted', this.initialize.bind(this));
	  },
	
	  methods: {
	
	    initialize: function initialize() {
	      // free horizontal scroll
	      new _libSwiperJquery2['default'](this.$el, {
	        freeMode: true,
	        freeModeMomentumBounce: false,
	        freeModeMomentumRatio: 0.6,
	        wrapperClass: 'swiper-wrapper',
	        slideClass: 'swiper-slide',
	        slidesPerView: 'auto'
	      });
	    },
	
	    onClickType: function onClickType(type) {
	      this.$dispatch('onSelectType', type);
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Swiper 3.0.4
	 * Most modern mobile touch slider and framework with hardware accelerated transitions
	 * 
	 * http://www.idangero.us/swiper/
	 * 
	 * Copyright 2015, Vladimir Kharlampidi
	 * The iDangero.us
	 * http://www.idangero.us/
	 * 
	 * Licensed under MIT
	 * 
	 * Released on: March 6, 2015
	 */'use strict';(function(){'use strict'; /*===========================
	    Swiper
	    ===========================*/window.Swiper = function(container,params){var defaults={direction:'horizontal',touchEventsTarget:'container',initialSlide:0,speed:300, // autoplay
	autoplay:false,autoplayDisableOnInteraction:true, // Free mode
	freeMode:false,freeModeMomentum:true,freeModeMomentumRatio:1,freeModeMomentumBounce:true,freeModeMomentumBounceRatio:1, // Effects
	effect:'slide', // 'slide' or 'fade' or 'cube' or 'coverflow'
	// coverflow: {
	//     rotate: 50,
	//     stretch: 0,
	//     depth: 100,
	//     modifier: 1,
	//     slideShadows : true
	// },
	// cube: {
	//     slideShadows: true,
	//     shadow: true,
	//     shadowOffset: 20,
	//     shadowScale: 0.94
	// },
	// fade: {
	//     crossFade: false
	// },
	// Parallax
	parallax:false, // Scrollbar
	scrollbar:null,scrollbarHide:true, // Keyboard Mousewheel
	keyboardControl:false,mousewheelControl:false,mousewheelForceToAxis:false, // Hash Navigation
	hashnav:false, // Slides grid
	spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:'column',slidesPerGroup:1,centeredSlides:false, // Touches
	touchRatio:1,touchAngle:45,simulateTouch:true,shortSwipes:true,longSwipes:true,longSwipesRatio:0.5,longSwipesMs:300,followFinger:true,onlyExternal:false,threshold:0,touchMoveStopPropagation:true, // Pagination
	// pagination: null,
	// paginationClickable: false,
	// paginationHide: false,
	// paginationBulletRender: null,
	// Resistance
	resistance:true,resistanceRatio:0.85, // Next/prev buttons
	// nextButton: null,
	// prevButton: null,
	// Progress
	watchSlidesProgress:false,watchSlidesVisibility:false, // Cursor
	grabCursor:false, // Clicks
	preventClicks:true,preventClicksPropagation:true,slideToClickedSlide:false, // Lazy Loading
	lazyLoading:false,lazyLoadingInPrevNext:false,lazyLoadingOnTransitionStart:false,lazyLoadingSrcConverter:null, // Images
	preloadImages:true,updateOnImagesReady:true, // loop
	loop:false,loopAdditionalSlides:0,loopedSlides:null, // Control
	control:undefined,controlInverse:false, // Swiping/no swiping
	allowSwipeToPrev:true,allowSwipeToNext:true,swipeHandler:null, //'.swipe-handler',
	noSwiping:true,noSwipingClass:'swiper-no-swiping', // NS
	slideClass:'swiper-slide',slideActiveClass:'swiper-slide-active',slideVisibleClass:'swiper-slide-visible',slideDuplicateClass:'swiper-slide-duplicate',slideNextClass:'swiper-slide-next',slidePrevClass:'swiper-slide-prev',wrapperClass:'swiper-wrapper', // bulletClass: 'swiper-pagination-bullet',
	// bulletActiveClass: 'swiper-pagination-bullet-active',
	// buttonDisabledClass: 'swiper-button-disabled',
	// paginationHiddenClass: 'swiper-pagination-hidden',
	// Observer
	observer:false,observeParents:false, // Callbacks
	runCallbacksOnInit:true /*
	            Callbacks:
	            onInit: function (swiper)
	            onDestroy: function (swiper)
	            onClick: function (swiper, e) 
	            onTap: function (swiper, e) 
	            onDoubleTap: function (swiper, e) 
	            onSliderMove: function (swiper, e) 
	            onSlideChangeStart: function (swiper) 
	            onSlideChangeEnd: function (swiper) 
	            onTransitionStart: function (swiper) 
	            onTransitionEnd: function (swiper) 
	            onImagesReady: function (swiper) 
	            onProgress: function (swiper, progress) 
	            onTouchStart: function (swiper, e) 
	            onTouchMove: function (swiper, e) 
	            onTouchMoveOpposite: function (swiper, e) 
	            onTouchEnd: function (swiper, e) 
	            onReachBeginning: function (swiper) 
	            onReachEnd: function (swiper) 
	            onSetTransition: function (swiper, duration) 
	            onSetTranslate: function (swiper, translate) 
	            onAutoplayStart: function (swiper)
	            onAutoplayStop: function (swiper),
	            onLazyImageLoad: function (swiper, slide, image)
	            onLazyImageReady: function (swiper, slide, image)
	            */};params = params || {};for(var def in defaults) {if(typeof params[def] === 'undefined'){params[def] = defaults[def];}else if(typeof params[def] === 'object'){for(var deepDef in defaults[def]) {if(typeof params[def][deepDef] === 'undefined'){params[def][deepDef] = defaults[def][deepDef];}}}} // Swiper
	var s=this; // Params
	s.params = params; /*=========================
	          Dom Library and plugins
	          ===========================*/var $;if(typeof Dom7 === 'undefined'){$ = window.Dom7 || window.Zepto || window.jQuery;}else {$ = Dom7;}if(!$)return; /*=========================
	          Preparation - Define Container, Wrapper and Pagination
	          ===========================*/s.container = $(container);if(s.container.length === 0)return;if(s.container.length > 1){s.container.each(function(){new Swiper(this,params);});return;} // Save instance in container HTML Element and in data
	s.container[0].swiper = s;s.container.data('swiper',s);s.container.addClass('swiper-container-' + s.params.direction);if(s.params.freeMode){s.container.addClass('swiper-container-free-mode');} // Enable slides progress when required
	if(s.params.parallax || s.params.watchSlidesVisibility){s.params.watchSlidesProgress = true;} // Coverflow / 3D
	if(['cube','coverflow'].indexOf(s.params.effect) >= 0){if(s.support.transforms3d){s.params.watchSlidesProgress = true;s.container.addClass('swiper-container-3d');}else {s.params.effect = 'slide';}}if(s.params.effect !== 'slide'){s.container.addClass('swiper-container-' + s.params.effect);}if(s.params.effect === 'cube'){s.params.resistanceRatio = 0;s.params.slidesPerView = 1;s.params.slidesPerColumn = 1;s.params.slidesPerGroup = 1;s.params.centeredSlides = false;s.params.spaceBetween = 0;}if(s.params.effect === 'fade'){s.params.watchSlidesProgress = true;s.params.spaceBetween = 0;} // Grab Cursor
	if(s.params.grabCursor && s.support.touch){s.params.grabCursor = false;} // Wrapper
	s.wrapper = s.container.children('.' + s.params.wrapperClass); // Pagination
	if(s.params.pagination){s.paginationContainer = $(s.params.pagination);if(s.params.paginationClickable){s.paginationContainer.addClass('swiper-pagination-clickable');}} // Is Horizontal
	function isH(){return s.params.direction === 'horizontal';} // RTL
	s.rtl = isH() && (s.container[0].dir.toLowerCase() === 'rtl' || s.container.css('direction') === 'rtl');if(s.rtl)s.container.addClass('swiper-container-rtl'); // Wrong RTL support
	if(s.rtl){s.wrongRTL = s.wrapper.css('display') === '-webkit-box';} // Translate
	s.translate = 0; // Progress
	s.progress = 0; // Velocity
	s.velocity = 0; // Locks, unlocks
	s.lockSwipeToNext = function(){s.params.allowSwipeToNext = false;};s.lockSwipeToPrev = function(){s.params.allowSwipeToPrev = false;};s.lockSwipes = function(){s.params.allowSwipeToNext = s.params.allowSwipeToPrev = false;};s.unlockSwipeToNext = function(){s.params.allowSwipeToNext = true;};s.unlockSwipeToPrev = function(){s.params.allowSwipeToPrev = true;};s.unlockSwipes = function(){s.params.allowSwipeToNext = s.params.allowSwipeToPrev = true;}; // Columns
	if(s.params.slidesPerColumn > 1){s.container.addClass('swiper-container-multirow');} /*=========================
	          Set grab cursor
	          ===========================*/if(s.params.grabCursor){s.container[0].style.cursor = 'move';s.container[0].style.cursor = '-webkit-grab';s.container[0].style.cursor = '-moz-grab';s.container[0].style.cursor = 'grab';} /*=========================
	          Update on Images Ready
	          ===========================*/s.imagesToLoad = [];s.imagesLoaded = 0;s.loadImage = function(imgElement,src,checkForComplete,callback){var image;function onReady(){if(callback)callback();}if(!imgElement.complete || !checkForComplete){if(src){image = new Image();image.onload = onReady;image.onerror = onReady;image.src = src;}else {onReady();}}else { //image already loaded...
	onReady();}};s.preloadImages = function(){s.imagesToLoad = s.container.find('img');function _onReady(){if(typeof s === 'undefined' || s === null)return;if(s.imagesLoaded !== undefined)s.imagesLoaded++;if(s.imagesLoaded === s.imagesToLoad.length){if(s.params.updateOnImagesReady)s.update();if(s.params.onImagesReady)s.params.onImagesReady(s);}}for(var i=0;i < s.imagesToLoad.length;i++) {s.loadImage(s.imagesToLoad[i],s.imagesToLoad[i].currentSrc || s.imagesToLoad[i].getAttribute('src'),true,_onReady);}}; /*=========================
	          Autoplay
	          ===========================*/s.autoplayTimeoutId = undefined;s.autoplaying = false;s.autoplayPaused = false;function autoplay(){s.autoplayTimeoutId = setTimeout(function(){if(s.params.loop){s.fixLoop();s._slideNext();}else {if(!s.isEnd){s._slideNext();}else {if(!params.autoplayStopOnLast){s._slideTo(0);}else {s.stopAutoplay();}}}},s.params.autoplay);}s.startAutoplay = function(){if(typeof s.autoplayTimeoutId !== 'undefined')return false;if(!s.params.autoplay)return false;if(s.autoplaying)return false;s.autoplaying = true;if(s.params.onAutoplayStart)s.params.onAutoplayStart(s);autoplay();};s.stopAutoplay = function(internal){if(!s.autoplayTimeoutId)return;if(s.autoplayTimeoutId)clearTimeout(s.autoplayTimeoutId);s.autoplaying = false;s.autoplayTimeoutId = undefined;if(s.params.onAutoplayStop)s.params.onAutoplayStop(s);};s.pauseAutoplay = function(speed){if(s.autoplayPaused)return;if(s.autoplayTimeoutId)clearTimeout(s.autoplayTimeoutId);s.autoplayPaused = true;if(speed === 0){s.autoplayPaused = false;autoplay();}else {s.wrapper.transitionEnd(function(){s.autoplayPaused = false;if(!s.autoplaying){s.stopAutoplay();}else {autoplay();}});}}; /*=========================
	          Min/Max Translate
	          ===========================*/s.minTranslate = function(){return -s.snapGrid[0];};s.maxTranslate = function(){return -s.snapGrid[s.snapGrid.length - 1];}; /*=========================
	          Slider/slides sizes
	          ===========================*/s.updateContainerSize = function(){s.width = s.container[0].clientWidth;s.height = s.container[0].clientHeight;s.size = isH()?s.width:s.height;};s.updateSlidesSize = function(){s.slides = s.wrapper.children('.' + s.params.slideClass);s.snapGrid = [];s.slidesGrid = [];s.slidesSizesGrid = [];var spaceBetween=s.params.spaceBetween,slidePosition=0,i,prevSlideSize=0,index=0;if(typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0){spaceBetween = parseFloat(spaceBetween.replace('%','')) / 100 * s.size;}s.virtualWidth = -spaceBetween; // reset margins
	if(s.rtl)s.slides.css({marginLeft:'',marginTop:''});else s.slides.css({marginRight:'',marginBottom:''});var slidesNumberEvenToRows;if(s.params.slidesPerColumn > 1){if(Math.floor(s.slides.length / s.params.slidesPerColumn) === s.slides.length / s.params.slidesPerColumn){slidesNumberEvenToRows = s.slides.length;}else {slidesNumberEvenToRows = Math.ceil(s.slides.length / s.params.slidesPerColumn) * s.params.slidesPerColumn;}} // Calc slides
	var slideSize;for(i = 0;i < s.slides.length;i++) {slideSize = 0;var slide=s.slides.eq(i);if(s.params.slidesPerColumn > 1){ // Set slides order
	var newSlideOrderIndex;var column,row;var slidesPerColumn=s.params.slidesPerColumn;var slidesPerRow;if(s.params.slidesPerColumnFill === 'column'){column = Math.floor(i / slidesPerColumn);row = i - column * slidesPerColumn;newSlideOrderIndex = column + row * slidesNumberEvenToRows / slidesPerColumn;slide.css({'-webkit-box-ordinal-group':newSlideOrderIndex,'-moz-box-ordinal-group':newSlideOrderIndex,'-ms-flex-order':newSlideOrderIndex,'-webkit-order':newSlideOrderIndex,'order':newSlideOrderIndex});}else {slidesPerRow = slidesNumberEvenToRows / slidesPerColumn;row = Math.floor(i / slidesPerRow);column = i - row * slidesPerRow;}slide.css({'margin-top':row !== 0 && s.params.spaceBetween && s.params.spaceBetween + 'px'}).attr('data-swiper-column',column).attr('data-swiper-row',row);}if(slide.css('display') === 'none')continue;if(s.params.slidesPerView === 'auto'){slideSize = isH()?slide.outerWidth(true):slide.outerHeight(true);}else {slideSize = (s.size - (s.params.slidesPerView - 1) * spaceBetween) / s.params.slidesPerView;if(isH()){s.slides[i].style.width = slideSize + 'px';}else {s.slides[i].style.height = slideSize + 'px';}}s.slides[i].swiperSlideSize = slideSize;s.slidesSizesGrid.push(slideSize);if(s.params.centeredSlides){slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;if(i === 0)slidePosition = slidePosition - s.size / 2 - spaceBetween;if(Math.abs(slidePosition) < 1 / 1000)slidePosition = 0;if(index % s.params.slidesPerGroup === 0)s.snapGrid.push(slidePosition);s.slidesGrid.push(slidePosition);}else {if(index % s.params.slidesPerGroup === 0)s.snapGrid.push(slidePosition);s.slidesGrid.push(slidePosition);slidePosition = slidePosition + slideSize + spaceBetween;}s.virtualWidth += slideSize + spaceBetween;prevSlideSize = slideSize;index++;}s.virtualWidth = Math.max(s.virtualWidth,s.size);var newSlidesGrid;if(s.rtl && s.wrongRTL && (s.params.effect === 'slide' || s.params.effect === 'coverflow')){s.wrapper.css({width:s.virtualWidth + s.params.spaceBetween + 'px'});}if(s.params.slidesPerColumn > 1){s.virtualWidth = (slideSize + s.params.spaceBetween) * slidesNumberEvenToRows;s.virtualWidth = Math.ceil(s.virtualWidth / s.params.slidesPerColumn) - s.params.spaceBetween;s.wrapper.css({width:s.virtualWidth + s.params.spaceBetween + 'px'});if(s.params.centeredSlides){newSlidesGrid = [];for(i = 0;i < s.snapGrid.length;i++) {if(s.snapGrid[i] < s.virtualWidth + s.snapGrid[0])newSlidesGrid.push(s.snapGrid[i]);}s.snapGrid = newSlidesGrid;}} // Remove last grid elements depending on width
	if(!s.params.centeredSlides){newSlidesGrid = [];for(i = 0;i < s.snapGrid.length;i++) {if(s.snapGrid[i] <= s.virtualWidth - s.size){newSlidesGrid.push(s.snapGrid[i]);}}s.snapGrid = newSlidesGrid;if(Math.floor(s.virtualWidth - s.size) > Math.floor(s.snapGrid[s.snapGrid.length - 1])){s.snapGrid.push(s.virtualWidth - s.size);}}if(s.snapGrid.length === 0)s.snapGrid = [0];if(s.params.spaceBetween !== 0){if(isH()){if(s.rtl)s.slides.css({marginLeft:spaceBetween + 'px'});else s.slides.css({marginRight:spaceBetween + 'px'});}else s.slides.css({marginBottom:spaceBetween + 'px'});}if(s.params.watchSlidesProgress){s.updateSlidesOffset();}};s.updateSlidesOffset = function(){for(var i=0;i < s.slides.length;i++) {s.slides[i].swiperSlideOffset = isH()?s.slides[i].offsetLeft:s.slides[i].offsetTop;}}; /*=========================
	          Slider/slides progress
	          ===========================*/s.updateSlidesProgress = function(translate){if(typeof translate === 'undefined'){translate = s.translate || 0;}if(s.slides.length === 0)return;if(typeof s.slides[0].swiperSlideOffset === 'undefined')s.updateSlidesOffset();var offsetCenter=s.params.centeredSlides?-translate + s.size / 2:-translate;if(s.rtl)offsetCenter = s.params.centeredSlides?translate - s.size / 2:translate; // Visible Slides
	var containerBox=s.container[0].getBoundingClientRect();var sideBefore=isH()?'left':'top';var sideAfter=isH()?'right':'bottom';s.slides.removeClass(s.params.slideVisibleClass);for(var i=0;i < s.slides.length;i++) {var slide=s.slides[i];var slideCenterOffset=s.params.centeredSlides === true?slide.swiperSlideSize / 2:0;var slideProgress=(offsetCenter - slide.swiperSlideOffset - slideCenterOffset) / (slide.swiperSlideSize + s.params.spaceBetween);if(s.params.watchSlidesVisibility){var slideBefore=-(offsetCenter - slide.swiperSlideOffset - slideCenterOffset);var slideAfter=slideBefore + s.slidesSizesGrid[i];var isVisible=slideBefore >= 0 && slideBefore < s.size || slideAfter > 0 && slideAfter <= s.size || slideBefore <= 0 && slideAfter >= s.size;if(isVisible){}}slide.progress = s.rtl?-slideProgress:slideProgress;}};s.updateProgress = function(translate){if(typeof translate === 'undefined'){translate = s.translate || 0;}var translatesDiff=s.maxTranslate() - s.minTranslate();if(translatesDiff === 0){s.progress = 0;s.isBeginning = s.isEnd = true;}else {s.progress = (translate - s.minTranslate()) / translatesDiff;s.isBeginning = s.progress <= 0;s.isEnd = s.progress >= 1;}if(s.isBeginning && s.params.onReachBeginning)s.params.onReachBeginning(s);if(s.isEnd && s.params.onReachEnd)s.params.onReachEnd(s);if(s.params.watchSlidesProgress)s.updateSlidesProgress(translate);if(s.params.onProgress)s.params.onProgress(s,s.progress);};s.updateActiveIndex = function(){var translate=s.rtl?s.translate:-s.translate;var newActiveIndex,i,snapIndex;for(i = 0;i < s.slidesGrid.length;i++) {if(typeof s.slidesGrid[i + 1] !== 'undefined'){if(translate >= s.slidesGrid[i] && translate < s.slidesGrid[i + 1] - (s.slidesGrid[i + 1] - s.slidesGrid[i]) / 2){newActiveIndex = i;}else if(translate >= s.slidesGrid[i] && translate < s.slidesGrid[i + 1]){newActiveIndex = i + 1;}}else {if(translate >= s.slidesGrid[i]){newActiveIndex = i;}}} // Normalize slideIndex
	if(newActiveIndex < 0 || typeof newActiveIndex === 'undefined')newActiveIndex = 0; // for (i = 0; i < s.slidesGrid.length; i++) {
	// if (- translate >= s.slidesGrid[i]) {
	// newActiveIndex = i;
	// }
	// }
	snapIndex = Math.floor(newActiveIndex / s.params.slidesPerGroup);if(snapIndex >= s.snapGrid.length)snapIndex = s.snapGrid.length - 1;if(newActiveIndex === s.activeIndex){return;}s.snapIndex = snapIndex;s.previousIndex = s.activeIndex;s.activeIndex = newActiveIndex;s.updateClasses();}; /*=========================
	          Classes
	          ===========================*/s.updateClasses = function(){s.slides.removeClass(s.params.slideActiveClass + ' ' + s.params.slideNextClass + ' ' + s.params.slidePrevClass);var activeSlide=s.slides.eq(s.activeIndex); // Active classes
	activeSlide.addClass(s.params.slideActiveClass);activeSlide.next('.' + s.params.slideClass).addClass(s.params.slideNextClass);activeSlide.prev('.' + s.params.slideClass).addClass(s.params.slidePrevClass); // Pagination
	if(s.bullets && s.bullets.length > 0){s.bullets.removeClass(s.params.bulletActiveClass);var bulletIndex;if(s.params.loop){bulletIndex = s.activeIndex - s.loopedSlides;if(bulletIndex > s.slides.length - 1 - s.loopedSlides * 2){bulletIndex = bulletIndex - (s.slides.length - s.loopedSlides * 2);}}else {if(typeof s.snapIndex !== 'undefined'){bulletIndex = s.snapIndex;}else {bulletIndex = s.activeIndex || 0;}}s.bullets.eq(bulletIndex).addClass(s.params.bulletActiveClass);} // Next/active buttons
	if(!s.params.loop){}}; /*=========================
	          Pagination
	          ===========================*/ // s.updatePagination = function () {
	//     if (!s.params.pagination) return;
	//     if (s.paginationContainer && s.paginationContainer.length > 0) {
	//         var bulletsHTML = '';
	//         var numberOfBullets = s.params.loop ? s.slides.length - s.loopedSlides * 2 : s.snapGrid.length;
	//         for (var i = 0; i < numberOfBullets; i++) {
	//             if (s.params.paginationBulletRender) {
	//                 bulletsHTML += s.params.paginationBulletRender(i, s.params.bulletClass);
	//             }
	//             else {
	//                 bulletsHTML += '<span class="' + s.params.bulletClass + '"></span>';
	//             }
	//         }
	//         s.paginationContainer.html(bulletsHTML);
	//         s.bullets = s.paginationContainer.find('.' + s.params.bulletClass);
	//     }
	// };
	/*=========================
	          Common update method
	          ===========================*/s.update = function(updateTranslate){s.updateContainerSize();s.updateSlidesSize();s.updateProgress(); // s.updatePagination();
	s.updateClasses();if(s.params.scrollbar && s.scrollbar){s.scrollbar.set();}function forceSetTranslate(){newTranslate = Math.min(Math.max(s.translate,s.maxTranslate()),s.minTranslate());s.setWrapperTranslate(newTranslate);s.updateActiveIndex();s.updateClasses();}if(updateTranslate){var translated,newTranslate;if(s.params.freeMode){forceSetTranslate();}else {if(s.params.slidesPerView === 'auto' && s.isEnd && !s.params.centeredSlides){translated = s.slideTo(s.slides.length - 1,0,false,true);}else {translated = s.slideTo(s.activeIndex,0,false,true);}if(!translated){forceSetTranslate();}}}}; /*=========================
	          Resize Handler
	          ===========================*/s.onResize = function(){}; /*=========================
	          Events
	          ===========================*/ //Define Touch Events
	var desktopEvents=['mousedown','mousemove','mouseup'];if(window.navigator.pointerEnabled)desktopEvents = ['pointerdown','pointermove','pointerup'];else if(window.navigator.msPointerEnabled)desktopEvents = ['MSPointerDown','MSPointerMove','MSPointerUp'];s.touchEvents = {start:s.support.touch || !s.params.simulateTouch?'touchstart':desktopEvents[0],move:s.support.touch || !s.params.simulateTouch?'touchmove':desktopEvents[1],end:s.support.touch || !s.params.simulateTouch?'touchend':desktopEvents[2]}; // WP8 Touch Events Fix
	if(window.navigator.pointerEnabled || window.navigator.msPointerEnabled){(s.params.touchEventsTarget === 'container'?s.container:s.wrapper).addClass('swiper-wp8-' + s.params.direction);} // Attach/detach events
	s.events = function(detach){var actionDom=detach?'off':'on';var action=detach?'removeEventListener':'addEventListener';var touchEventsTarget=s.params.touchEventsTarget === 'container'?s.container[0]:s.wrapper[0];var target=s.support.touch?touchEventsTarget:document;var moveCapture=s.params.nested?true:false; //Touch Events
	if(s.browser.ie){touchEventsTarget[action](s.touchEvents.start,s.onTouchStart,false);target[action](s.touchEvents.move,s.onTouchMove,moveCapture);target[action](s.touchEvents.end,s.onTouchEnd,false);}else {if(s.support.touch){touchEventsTarget[action](s.touchEvents.start,s.onTouchStart,false);touchEventsTarget[action](s.touchEvents.move,s.onTouchMove,moveCapture);touchEventsTarget[action](s.touchEvents.end,s.onTouchEnd,false);}if(params.simulateTouch && !s.device.ios && !s.device.android){touchEventsTarget[action]('mousedown',s.onTouchStart,false);target[action]('mousemove',s.onTouchMove,moveCapture);target[action]('mouseup',s.onTouchEnd,false);}}window[action]('resize',s.onResize); // Next, Prev, Index
	// if (s.params.nextButton) $(s.params.nextButton)[actionDom]('click', s.onClickNext);
	// if (s.params.prevButton) $(s.params.prevButton)[actionDom]('click', s.onClickPrev);
	// if (s.params.pagination && s.params.paginationClickable) {
	//     $(s.paginationContainer)[actionDom]('click', '.' + s.params.bulletClass, s.onClickIndex);
	// }
	// Prevent Links Clicks
	if(s.params.preventClicks || s.params.preventClicksPropagation)touchEventsTarget[action]('click',s.preventClicks,true);};s.attachEvents = function(detach){s.events();};s.detachEvents = function(){s.events(true);}; /*=========================
	          Handle Clicks
	          ===========================*/ // Prevent Clicks
	s.allowClick = true;s.preventClicks = function(e){if(!s.allowClick){if(s.params.preventClicks)e.preventDefault();if(s.params.preventClicksPropagation){e.stopPropagation();e.stopImmediatePropagation();}}}; // Clicks
	s.onClickNext = function(e){e.preventDefault();s.slideNext();};s.onClickPrev = function(e){e.preventDefault();s.slidePrev();};s.onClickIndex = function(e){e.preventDefault();var index=$(this).index() * s.params.slidesPerGroup;if(s.params.loop)index = index + s.loopedSlides;s.slideTo(index);}; /*=========================
	          Handle Touches
	          ===========================*/function findElementInEvent(e,selector){var el=$(e.target);if(!el.is(selector)){if(typeof selector === 'string'){el = el.parents(selector);}else if(selector.nodeType){var found;el.parents().each(function(index,_el){if(_el === selector)found = selector;});if(!found)return undefined;else return selector;}}if(el.length === 0){return undefined;}return el[0];}s.updateClickedSlide = function(e){var slide=findElementInEvent(e,'.' + s.params.slideClass);if(slide){s.clickedSlide = slide;s.clickedIndex = $(slide).index();}else {s.clickedSlide = undefined;s.clickedIndex = undefined;return;}if(s.params.slideToClickedSlide && s.clickedIndex !== undefined && s.clickedIndex !== s.activeIndex){var slideToIndex=s.clickedIndex,realIndex;if(s.params.loop){realIndex = $(s.clickedSlide).attr('data-swiper-slide-index');if(slideToIndex > s.slides.length - s.params.slidesPerView){s.fixLoop();slideToIndex = s.wrapper.children('.' + s.params.slideClass + '[data-swiper-slide-index="' + realIndex + '"]').eq(0).index();setTimeout(function(){s.slideTo(slideToIndex);},0);}else if(slideToIndex < s.params.slidesPerView - 1){s.fixLoop();var duplicatedSlides=s.wrapper.children('.' + s.params.slideClass + '[data-swiper-slide-index="' + realIndex + '"]');slideToIndex = duplicatedSlides.eq(duplicatedSlides.length - 1).index();setTimeout(function(){s.slideTo(slideToIndex);},0);}else {s.slideTo(slideToIndex);}}else {s.slideTo(slideToIndex);}}};var isTouched,isMoved,touchStartTime,isScrolling,currentTranslate,startTranslate,allowThresholdMove, // Form elements to match
	formElements='input, select, textarea, button', // Last click time
	lastClickTime=Date.now(),clickTimeout, //Velocities
	velocities=[],allowMomentumBounce; // Animating Flag
	s.animating = false; // Touches information
	s.touches = {startX:0,startY:0,currentX:0,currentY:0,diff:0}; // Touch handlers
	var isTouchEvent;s.onTouchStart = function(e){if(e.originalEvent)e = e.originalEvent;isTouchEvent = e.type === 'touchstart';if(!isTouchEvent && 'which' in e && e.which === 3)return;if(s.params.noSwiping && findElementInEvent(e,'.' + s.params.noSwipingClass)){s.allowClick = true;return;}if(s.params.swipeHandler){if(!findElementInEvent(e,s.params.swipeHandler))return;}isTouched = true;isMoved = false;isScrolling = undefined;s.touches.startX = s.touches.currentX = e.type === 'touchstart'?e.targetTouches[0].pageX:e.pageX;s.touches.startY = s.touches.currentY = e.type === 'touchstart'?e.targetTouches[0].pageY:e.pageY;touchStartTime = Date.now();s.allowClick = true;s.updateContainerSize();s.swipeDirection = undefined;if(s.params.threshold > 0)allowThresholdMove = false;if(e.type !== 'touchstart'){var preventDefault=true;if($(e.target).is(formElements))preventDefault = false;if(document.activeElement && $(document.activeElement).is(formElements)){document.activeElement.blur();}if(preventDefault){e.preventDefault();}}if(s.params.onTouchStart)s.params.onTouchStart(s,e);};s.onTouchMove = function(e){if(e.originalEvent)e = e.originalEvent;if(isTouchEvent && e.type === 'mousemove')return;if(e.preventedByNestedSwiper)return;if(s.params.onlyExternal){isMoved = true;s.allowClick = false;return;}if(isTouchEvent && document.activeElement){if(e.target === document.activeElement && $(e.target).is(formElements)){isMoved = true;s.allowClick = false;return;}}if(s.params.onTouchMove)s.params.onTouchMove(s,e);s.allowClick = false;if(e.targetTouches && e.targetTouches.length > 1)return;s.touches.currentX = e.type === 'touchmove'?e.targetTouches[0].pageX:e.pageX;s.touches.currentY = e.type === 'touchmove'?e.targetTouches[0].pageY:e.pageY;if(typeof isScrolling === 'undefined'){var touchAngle=Math.atan2(Math.abs(s.touches.currentY - s.touches.startY),Math.abs(s.touches.currentX - s.touches.startX)) * 180 / Math.PI;isScrolling = isH()?touchAngle > s.params.touchAngle:90 - touchAngle > s.params.touchAngle; // isScrolling = !!(isScrolling || Math.abs(touchesCurrent.y - touchesStart.y) > Math.abs(touchesCurrent.x - touchesStart.x));
	}if(isScrolling && s.params.onTouchMoveOpposite){s.params.onTouchMoveOpposite(s,e);}if(!isTouched)return;if(isScrolling){isTouched = false;return;}if(s.params.onSliderMove)s.params.onSliderMove(s,e);e.preventDefault();if(s.params.touchMoveStopPropagation && !s.params.nested){e.stopPropagation();}if(!isMoved){if(params.loop){s.fixLoop();}startTranslate = s.params.effect === 'cube'?(s.rtl?-s.translate:s.translate) || 0:s.getWrapperTranslate();s.setWrapperTransition(0);if(s.animating){s.wrapper.trigger('webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd');}if(s.params.autoplay && s.autoplaying){if(s.params.autoplayDisableOnInteraction){s.stopAutoplay();}else {s.pauseAutoplay();}}allowMomentumBounce = false; //Grab Cursor
	if(s.params.grabCursor){s.container[0].style.cursor = 'move';s.container[0].style.cursor = '-webkit-grabbing';s.container[0].style.cursor = '-moz-grabbin';s.container[0].style.cursor = 'grabbing';}}isMoved = true;var diff=s.touches.diff = isH()?s.touches.currentX - s.touches.startX:s.touches.currentY - s.touches.startY;diff = diff * s.params.touchRatio;if(s.rtl)diff = -diff;s.swipeDirection = diff > 0?'prev':'next';currentTranslate = diff + startTranslate;var disableParentSwiper=true;if(diff > 0 && currentTranslate > s.minTranslate()){disableParentSwiper = false;if(s.params.resistance)currentTranslate = s.minTranslate() - 1 + Math.pow(-s.minTranslate() + startTranslate + diff,s.params.resistanceRatio);}else if(diff < 0 && currentTranslate < s.maxTranslate()){disableParentSwiper = false;if(s.params.resistance)currentTranslate = s.maxTranslate() + 1 - Math.pow(s.maxTranslate() - startTranslate - diff,s.params.resistanceRatio);}if(disableParentSwiper){e.preventedByNestedSwiper = true;} // Directions locks
	if(!s.params.allowSwipeToNext && s.swipeDirection === 'next' && currentTranslate < startTranslate){currentTranslate = startTranslate;}if(!s.params.allowSwipeToPrev && s.swipeDirection === 'prev' && currentTranslate > startTranslate){currentTranslate = startTranslate;}if(!s.params.followFinger)return; // Threshold
	if(s.params.threshold > 0){if(Math.abs(diff) > s.params.threshold || allowThresholdMove){if(!allowThresholdMove){allowThresholdMove = true;s.touches.startX = s.touches.currentX;s.touches.startY = s.touches.currentY;currentTranslate = startTranslate;s.touches.diff = isH()?s.touches.currentX - s.touches.startX:s.touches.currentY - s.touches.startY;return;}}else {currentTranslate = startTranslate;return;}} // Update active index in free mode
	if(s.params.freeMode || s.params.watchSlidesProgress){s.updateActiveIndex();}if(s.params.freeMode){ //Velocity
	if(velocities.length === 0){velocities.push({position:s.touches[isH()?'startX':'startY'],time:touchStartTime});}velocities.push({position:s.touches[isH()?'currentX':'currentY'],time:new Date().getTime()});} // Update progress
	s.updateProgress(currentTranslate); // Update translate
	s.setWrapperTranslate(currentTranslate);};s.onTouchEnd = function(e){if(e.originalEvent)e = e.originalEvent;if(s.params.onTouchEnd)s.params.onTouchEnd(s,e);if(!isTouched)return; //Return Grab Cursor
	if(s.params.grabCursor && isMoved && isTouched){s.container[0].style.cursor = 'move';s.container[0].style.cursor = '-webkit-grab';s.container[0].style.cursor = '-moz-grab';s.container[0].style.cursor = 'grab';} // Time diff
	var touchEndTime=Date.now();var timeDiff=touchEndTime - touchStartTime; // Tap, doubleTap, Click
	if(s.allowClick){s.updateClickedSlide(e);if(s.params.onTap)s.params.onTap(s,e);if(timeDiff < 300 && touchEndTime - lastClickTime > 300){if(clickTimeout)clearTimeout(clickTimeout);clickTimeout = setTimeout(function(){if(!s)return; // if (s.params.paginationHide && s.paginationContainer.length > 0 && !$(e.target).hasClass(s.params.bulletClass)) {
	//     s.paginationContainer.toggleClass(s.params.paginationHiddenClass);
	// }
	if(s.params.onClick)s.params.onClick(s,e);},300);}if(timeDiff < 300 && touchEndTime - lastClickTime < 300){if(clickTimeout)clearTimeout(clickTimeout);if(s.params.onDoubleTap){s.params.onDoubleTap(s,e);}}}lastClickTime = Date.now();setTimeout(function(){if(s && s.allowClick)s.allowClick = true;},0);if(!isTouched || !isMoved || !s.swipeDirection || s.touches.diff === 0 || currentTranslate === startTranslate){isTouched = isMoved = false;return;}isTouched = isMoved = false;var currentPos;if(s.params.followFinger){currentPos = s.rtl?s.translate:-s.translate;}else {currentPos = -currentTranslate;}if(s.params.freeMode){if(currentPos < -s.minTranslate()){s.slideTo(s.activeIndex);return;}else if(currentPos > -s.maxTranslate()){s.slideTo(s.slides.length - 1);return;}if(s.params.freeModeMomentum){if(velocities.length > 1){var lastMoveEvent=velocities.pop(),velocityEvent=velocities.pop();var distance=lastMoveEvent.position - velocityEvent.position;var time=lastMoveEvent.time - velocityEvent.time;s.velocity = distance / time;s.velocity = s.velocity / 2;if(Math.abs(s.velocity) < 0.02){s.velocity = 0;} // this implies that the user stopped moving a finger then released.
	// There would be no events with distance zero, so the last event is stale.
	if(time > 150 || new Date().getTime() - lastMoveEvent.time > 300){s.velocity = 0;}}else {s.velocity = 0;}velocities.length = 0;var momentumDuration=1000 * s.params.freeModeMomentumRatio;var momentumDistance=s.velocity * momentumDuration;var newPosition=s.translate + momentumDistance;if(s.rtl)newPosition = -newPosition;var doBounce=false;var afterBouncePosition;var bounceAmount=Math.abs(s.velocity) * 20 * s.params.freeModeMomentumBounceRatio;if(newPosition < s.maxTranslate()){if(s.params.freeModeMomentumBounce){if(newPosition + s.maxTranslate() < -bounceAmount){newPosition = s.maxTranslate() - bounceAmount;}afterBouncePosition = s.maxTranslate();doBounce = true;allowMomentumBounce = true;}else {newPosition = s.maxTranslate();}}if(newPosition > s.minTranslate()){if(s.params.freeModeMomentumBounce){if(newPosition - s.minTranslate() > bounceAmount){newPosition = s.minTranslate() + bounceAmount;}afterBouncePosition = s.minTranslate();doBounce = true;allowMomentumBounce = true;}else {newPosition = s.minTranslate();}} //Fix duration
	if(s.velocity !== 0){if(s.rtl){momentumDuration = Math.abs((-newPosition - s.translate) / s.velocity);}else {momentumDuration = Math.abs((newPosition - s.translate) / s.velocity);}}if(s.params.freeModeMomentumBounce && doBounce){s.updateProgress(afterBouncePosition);s.setWrapperTransition(momentumDuration);s.setWrapperTranslate(newPosition);s.onTransitionStart();s.animating = true;s.wrapper.transitionEnd(function(){if(!allowMomentumBounce)return;if(s.params.onMomentumBounce)s.params.onMomentumBounce(s);s.setWrapperTransition(s.params.speed);s.setWrapperTranslate(afterBouncePosition);s.wrapper.transitionEnd(function(){s.onTransitionEnd();});});}else if(s.velocity){s.updateProgress(newPosition);s.setWrapperTransition(momentumDuration);s.setWrapperTranslate(newPosition);s.onTransitionStart();if(!s.animating){s.animating = true;s.wrapper.transitionEnd(function(){s.onTransitionEnd();});}}else {s.updateProgress(newPosition);}s.updateActiveIndex();}if(!s.params.freeModeMomentum || timeDiff >= s.params.longSwipesMs){s.updateProgress();s.updateActiveIndex();}return;} // Find current slide
	var i,stopIndex=0,groupSize=s.slidesSizesGrid[0];for(i = 0;i < s.slidesGrid.length;i += s.params.slidesPerGroup) {if(typeof s.slidesGrid[i + s.params.slidesPerGroup] !== 'undefined'){if(currentPos >= s.slidesGrid[i] && currentPos < s.slidesGrid[i + s.params.slidesPerGroup]){stopIndex = i;groupSize = s.slidesGrid[i + s.params.slidesPerGroup] - s.slidesGrid[i];}}else {if(currentPos >= s.slidesGrid[i]){stopIndex = i;groupSize = s.slidesGrid[s.slidesGrid.length - 1] - s.slidesGrid[s.slidesGrid.length - 2];}}} // Find current slide size
	var ratio=(currentPos - s.slidesGrid[stopIndex]) / groupSize;if(timeDiff > s.params.longSwipesMs){ // Long touches
	if(!s.params.longSwipes){s.slideTo(s.activeIndex);return;}if(s.swipeDirection === 'next'){if(ratio >= s.params.longSwipesRatio)s.slideTo(stopIndex + s.params.slidesPerGroup);else s.slideTo(stopIndex);}if(s.swipeDirection === 'prev'){if(ratio > 1 - s.params.longSwipesRatio)s.slideTo(stopIndex + s.params.slidesPerGroup);else s.slideTo(stopIndex);}}else { // Short swipes
	if(!s.params.shortSwipes){s.slideTo(s.activeIndex);return;}if(s.swipeDirection === 'next'){s.slideTo(stopIndex + s.params.slidesPerGroup);}if(s.swipeDirection === 'prev'){s.slideTo(stopIndex);}}}; /*=========================
	          Transitions
	          ===========================*/s._slideTo = function(slideIndex,speed){return s.slideTo(slideIndex,speed,true,true);};s.slideTo = function(slideIndex,speed,runCallbacks,internal){if(typeof runCallbacks === 'undefined')runCallbacks = true;if(typeof slideIndex === 'undefined')slideIndex = 0;if(slideIndex < 0)slideIndex = 0;s.snapIndex = Math.floor(slideIndex / s.params.slidesPerGroup);if(s.snapIndex >= s.snapGrid.length)s.snapIndex = s.snapGrid.length - 1;var translate=-s.snapGrid[s.snapIndex]; // Stop autoplay
	if(s.params.autoplay && s.autoplaying){if(internal || !s.params.autoplayDisableOnInteraction){s.pauseAutoplay(speed);}else {s.stopAutoplay();}} // Update progress
	s.updateProgress(translate); // Normalize slideIndex
	for(var i=0;i < s.slidesGrid.length;i++) {if(-translate >= s.slidesGrid[i]){slideIndex = i;}}if(typeof speed === 'undefined')speed = s.params.speed;s.previousIndex = s.activeIndex || 0;s.activeIndex = slideIndex;if(translate === s.translate){s.updateClasses();return false;}s.onTransitionStart(runCallbacks);var translateX=isH()?translate:0,translateY=isH()?0:translate;if(speed === 0){s.setWrapperTransition(0);s.setWrapperTranslate(translate);s.onTransitionEnd(runCallbacks);}else {s.setWrapperTransition(speed);s.setWrapperTranslate(translate);if(!s.animating){s.animating = true;s.wrapper.transitionEnd(function(){s.onTransitionEnd(runCallbacks);});}}s.updateClasses();return true;};s.onTransitionStart = function(runCallbacks){if(typeof runCallbacks === 'undefined')runCallbacks = true;if(s.lazy)s.lazy.onTransitionStart();if(runCallbacks){if(s.params.onTransitionStart)s.params.onTransitionStart(s);if(s.params.onSlideChangeStart && s.activeIndex !== s.previousIndex)s.params.onSlideChangeStart(s);}};s.onTransitionEnd = function(runCallbacks){s.animating = false;s.setWrapperTransition(0);if(typeof runCallbacks === 'undefined')runCallbacks = true;if(s.lazy)s.lazy.onTransitionEnd();if(runCallbacks){if(s.params.onTransitionEnd)s.params.onTransitionEnd(s);if(s.params.onSlideChangeEnd && s.activeIndex !== s.previousIndex)s.params.onSlideChangeEnd(s);}};s.slideNext = function(runCallbacks,speed,internal){if(s.params.loop){if(s.animating)return false;s.fixLoop();var clientLeft=s.container[0].clientLeft;return s.slideTo(s.activeIndex + s.params.slidesPerGroup,speed,runCallbacks,internal);}else return s.slideTo(s.activeIndex + s.params.slidesPerGroup,speed,runCallbacks,internal);};s._slideNext = function(speed){return s.slideNext(true,speed,true);};s.slidePrev = function(runCallbacks,speed,internal){if(s.params.loop){if(s.animating)return false;s.fixLoop();var clientLeft=s.container[0].clientLeft;return s.slideTo(s.activeIndex - 1,speed,runCallbacks,internal);}else return s.slideTo(s.activeIndex - 1,speed,runCallbacks,internal);};s._slidePrev = function(speed){return s.slidePrev(true,speed,true);};s.slideReset = function(runCallbacks,speed,internal){return s.slideTo(s.activeIndex,speed,runCallbacks);}; /*=========================
	          Translate/transition helpers
	          ===========================*/s.setWrapperTransition = function(duration,byController){s.wrapper.transition(duration);if(s.params.onSetTransition)s.params.onSetTransition(s,duration);if(s.params.effect !== 'slide' && s.effects[s.params.effect]){s.effects[s.params.effect].setTransition(duration);}if(s.params.parallax && s.parallax){s.parallax.setTransition(duration);}if(s.params.scrollbar && s.scrollbar){s.scrollbar.setTransition(duration);}if(s.params.control && s.controller){s.controller.setTransition(duration,byController);}};s.setWrapperTranslate = function(translate,updateActiveIndex,byController){var x=0,y=0,z=0;if(isH()){x = s.rtl?-translate:translate;}else {y = translate;}if(s.support.transforms3d)s.wrapper.transform('translate3d(' + x + 'px, ' + y + 'px, ' + z + 'px)');else s.wrapper.transform('translate(' + x + 'px, ' + y + 'px)');s.translate = isH()?x:y;if(updateActiveIndex)s.updateActiveIndex();if(s.params.effect !== 'slide' && s.effects[s.params.effect]){s.effects[s.params.effect].setTranslate(s.translate);}if(s.params.parallax && s.parallax){s.parallax.setTranslate(s.translate);}if(s.params.scrollbar && s.scrollbar){s.scrollbar.setTranslate(s.translate);}if(s.params.control && s.controller){s.controller.setTranslate(s.translate,byController);}if(s.params.hashnav && s.hashnav){s.hashnav.setHash();}if(s.params.onSetTranslate)s.params.onSetTranslate(s,s.translate);};s.getTranslate = function(el,axis){var matrix,curTransform,curStyle,transformMatrix; // automatic axis detection
	if(typeof axis === 'undefined'){axis = 'x';}curStyle = window.getComputedStyle(el,null);if(window.WebKitCSSMatrix){ // Some old versions of Webkit choke when 'none' is passed; pass
	// empty string instead in this case
	transformMatrix = new WebKitCSSMatrix(curStyle.webkitTransform === 'none'?'':curStyle.webkitTransform);}else {transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(','matrix(1, 0, 0, 1,');matrix = transformMatrix.toString().split(',');}if(axis === 'x'){ //Latest Chrome and webkits Fix
	if(window.WebKitCSSMatrix)curTransform = transformMatrix.m41; //Crazy IE10 Matrix
	else if(matrix.length === 16)curTransform = parseFloat(matrix[12]); //Normal Browsers
	else curTransform = parseFloat(matrix[4]);}if(axis === 'y'){ //Latest Chrome and webkits Fix
	if(window.WebKitCSSMatrix)curTransform = transformMatrix.m42; //Crazy IE10 Matrix
	else if(matrix.length === 16)curTransform = parseFloat(matrix[13]); //Normal Browsers
	else curTransform = parseFloat(matrix[5]);}if(s.rtl && curTransform)curTransform = -curTransform;return curTransform || 0;};s.getWrapperTranslate = function(axis){if(typeof axis === 'undefined'){axis = isH()?'x':'y';}return s.getTranslate(s.wrapper[0],axis);}; /*=========================
	          Observer
	          ===========================*/s.observers = [];function initObserver(target,options){options = options || {}; // create an observer instance
	var ObserverFunc=window.MutationObserver || window.WebkitMutationObserver;var observer=new ObserverFunc(function(mutations){mutations.forEach(function(mutation){s.onResize();if(s.params.onObserverUpdate)s.params.onObserverUpdate(s,mutation);});});observer.observe(target,{attributes:typeof options.attributes === 'undefined'?true:options.attributes,childList:typeof options.childList === 'undefined'?true:options.childList,characterData:typeof options.characterData === 'undefined'?true:options.characterData});s.observers.push(observer);}s.initObservers = function(){if(s.params.observeParents){var containerParents=s.container.parents();for(var i=0;i < containerParents.length;i++) {initObserver(containerParents[i]);}} // Observe container
	initObserver(s.container[0],{childList:false}); // Observe wrapper
	initObserver(s.wrapper[0],{attributes:false});};s.disconnectObservers = function(){for(var i=0;i < s.observers.length;i++) {s.observers[i].disconnect();}s.observers = [];}; /*=========================
	          Loop
	          ===========================*/ // Create looped slides
	s.createLoop = function(){ // Remove duplicated slides
	s.wrapper.children('.' + s.params.slideClass + '.' + s.params.slideDuplicateClass).remove();var slides=s.wrapper.children('.' + s.params.slideClass);s.loopedSlides = parseInt(s.params.loopedSlides || s.params.slidesPerView,10);s.loopedSlides = s.loopedSlides + s.params.loopAdditionalSlides;if(s.loopedSlides > slides.length){s.loopedSlides = slides.length;}var prependSlides=[],appendSlides=[],i;slides.each(function(index,el){var slide=$(this);if(index < s.loopedSlides)appendSlides.push(el);if(index < slides.length && index >= slides.length - s.loopedSlides)prependSlides.push(el);slide.attr('data-swiper-slide-index',index);});for(i = 0;i < appendSlides.length;i++) {s.wrapper.append($(appendSlides[i].cloneNode(true)).addClass(s.params.slideDuplicateClass));}for(i = prependSlides.length - 1;i >= 0;i--) {s.wrapper.prepend($(prependSlides[i].cloneNode(true)).addClass(s.params.slideDuplicateClass));}};s.destroyLoop = function(){s.wrapper.children('.' + s.params.slideClass + '.' + s.params.slideDuplicateClass).remove();};s.fixLoop = function(){var newIndex; //Fix For Negative Oversliding
	if(s.activeIndex < s.loopedSlides){newIndex = s.slides.length - s.loopedSlides * 3 + s.activeIndex;newIndex = newIndex + s.loopedSlides;s.slideTo(newIndex,0,false,true);} //Fix For Positive Oversliding
	else if(s.params.slidesPerView === 'auto' && s.activeIndex >= s.loopedSlides * 2 || s.activeIndex > s.slides.length - s.params.slidesPerView * 2){newIndex = -s.slides.length + s.activeIndex + s.loopedSlides;newIndex = newIndex + s.loopedSlides;s.slideTo(newIndex,0,false,true);}}; /*=========================
	          Append/Prepend/Remove Slides
	          ===========================*/s.appendSlide = function(slides){if(s.params.loop){s.destroyLoop();}if(typeof slides === 'object' && slides.length){for(var i=0;i < slides.length;i++) {if(slides[i])s.wrapper.append(slides[i]);}}else {s.wrapper.append(slides);}if(s.params.loop){s.createLoop();}if(!(s.params.observer && s.support.observer)){s.update(true);}};s.prependSlide = function(slides){if(s.params.loop){s.destroyLoop();}var newActiveIndex=s.activeIndex + 1;if(typeof slides === 'object' && slides.length){for(var i=0;i < slides.length;i++) {if(slides[i])s.wrapper.prepend(slides[i]);}newActiveIndex = s.activeIndex + slides.length;}else {s.wrapper.prepend(slides);}if(s.params.loop){s.createLoop();}if(!(s.params.observer && s.support.observer)){s.update(true);}s.slideTo(newActiveIndex,0,false);}; // s.removeSlide = function (slidesIndexes) {
	//     if (s.params.loop) {
	//         s.destroyLoop();
	//     }
	//     var newActiveIndex = s.activeIndex,
	//         indexToRemove;
	//     if (typeof slidesIndexes === 'object' && slidesIndexes.length) {
	//         for (var i = 0; i < slidesIndexes.length; i++) {
	//             indexToRemove = slidesIndexes[i];
	//             if (s.slides[indexToRemove]) s.slides.eq(indexToRemove).remove();
	//             if (indexToRemove < newActiveIndex) newActiveIndex--;
	//         }
	//         newActiveIndex = Math.max(newActiveIndex, 0);
	//     }
	//     else {
	//         indexToRemove = slidesIndexes;
	//         if (s.slides[indexToRemove]) s.slides.eq(indexToRemove).remove();
	//         if (indexToRemove < newActiveIndex) newActiveIndex--;
	//         newActiveIndex = Math.max(newActiveIndex, 0);
	//     }
	//     if (!(s.params.observer && s.support.observer)) {
	//         s.update(true);
	//     }
	//     s.slideTo(newActiveIndex, 0, false);
	// };
	// s.removeAllSlides = function () {
	//     var slidesIndexes = [];
	//     for (var i = 0; i < s.slides.length; i++) {
	//         slidesIndexes.push(i);
	//     }
	//     s.removeSlide(slidesIndexes);
	// };
	/*=========================
	          Effects
	          ===========================*/s.effects = {}; /*=========================
	          Images Lazy Loading
	          ===========================*/s.lazy = {initialImageLoaded:false,loadImageInSlide:function loadImageInSlide(index){if(typeof index === 'undefined')return;if(s.slides.length === 0)return;var slide=s.slides.eq(index);var img=slide.find('img.swiper-lazy:not(.swiper-lazy-loaded):not(.swiper-lazy-loading)');if(img.length === 0)return;img.each(function(){var _img=$(this);_img.addClass('swiper-lazy-loading');var src=_img.attr('data-src');s.loadImage(_img[0],src,false,function(){ // PATCH: callback to set src by own logic
	if(s.params.lazyLoadingSrcConverter){src = s.params.lazyLoadingSrcConverter(src,_img);}_img.attr('src',src);_img.removeAttr('data-src');_img.addClass('swiper-lazy-loaded').removeClass('swiper-lazy-loading');slide.find('.swiper-lazy-preloader, .preloader').remove();if(s.params.onLazyImageLoaded){s.params.onLazyImageLoaded(s,slide[0],_img[0]);}});if(s.params.onLazyImageLoad){s.params.onLazyImageLoad(s,slide[0],_img[0]);}});},load:function load(){if(s.params.watchSlidesVisibility){s.wrapper.children('.' + s.params.slideVisibleClass).each(function(){s.lazy.loadImageInSlide($(this).index());});}else {if(s.params.slidesPerView > 1){for(var i=s.activeIndex;i < s.activeIndex + s.params.slidesPerView;i++) {if(s.slides[i])s.lazy.loadImageInSlide(i);}}else {s.lazy.loadImageInSlide(s.activeIndex);}}if(s.params.lazyLoadingInPrevNext){var nextSlide=s.wrapper.children('.' + s.params.slideNextClass);if(nextSlide.length > 0)s.lazy.loadImageInSlide(nextSlide.index());var prevSlide=s.wrapper.children('.' + s.params.slidePrevClass);if(prevSlide.length > 0)s.loadImageInSlide(prevSlide.index());}},onTransitionStart:function onTransitionStart(){if(s.params.lazyLoading){if(s.params.lazyLoadingOnTransitionStart || !s.params.lazyLoadingOnTransitionStart && !s.lazy.initialImageLoaded){s.lazy.initialImageLoaded = true;s.lazy.load();}}},onTransitionEnd:function onTransitionEnd(){if(s.params.lazyLoading && !s.params.lazyLoadingOnTransitionStart){s.lazy.load();}}}; /*=========================
	          Scrollbar
	          ===========================*/s.scrollbar = {}; /*=========================
	          Controller
	          ===========================*/s.controller = {setTranslate:function setTranslate(translate,byController){var controlled=s.params.control;var multiplier,controlledTranslate;if(s.isArray(controlled)){for(var i=0;i < controlled.length;i++) {if(controlled[i] !== byController && controlled[i] instanceof Swiper){translate = controlled[i].rtl && controlled[i].params.direction === 'horizontal'?-s.translate:s.translate;multiplier = (controlled[i].maxTranslate() - controlled[i].minTranslate()) / (s.maxTranslate() - s.minTranslate());controlledTranslate = (translate - s.minTranslate()) * multiplier + controlled[i].minTranslate();if(s.params.controlInverse){controlledTranslate = controlled[i].maxTranslate() - controlledTranslate;}controlled[i].updateProgress(controlledTranslate);controlled[i].setWrapperTranslate(controlledTranslate,false,s);controlled[i].updateActiveIndex();}}}else if(controlled instanceof Swiper && byController !== controlled){translate = controlled.rtl && controlled.params.direction === 'horizontal'?-s.translate:s.translate;multiplier = (controlled.maxTranslate() - controlled.minTranslate()) / (s.maxTranslate() - s.minTranslate());controlledTranslate = (translate - s.minTranslate()) * multiplier + controlled.minTranslate();if(s.params.controlInverse){controlledTranslate = controlled.maxTranslate() - controlledTranslate;}controlled.updateProgress(controlledTranslate);controlled.setWrapperTranslate(controlledTranslate,false,s);controlled.updateActiveIndex();}},setTransition:function setTransition(duration,byController){var controlled=s.params.control;if(s.isArray(controlled)){for(var i=0;i < controlled.length;i++) {if(controlled[i] !== byController && controlled[i] instanceof Swiper){controlled[i].setWrapperTransition(duration,s);}}}else if(controlled instanceof Swiper && byController !== controlled){controlled.setWrapperTransition(duration,s);}}}; /*=========================
	          Hash Navigation
	          ===========================*/s.hashnav = {init:function init(){if(!s.params.hashnav)return;s.hashnav.initialized = true;var hash=document.location.hash.replace('#','');if(!hash)return;var speed=0;for(var i=0,length=s.slides.length;i < length;i++) {var slide=s.slides.eq(i);var slideHash=slide.attr('data-hash');if(slideHash === hash && !slide.hasClass(s.params.slideDuplicateClass)){var index=slide.index();s.slideTo(index,speed,s.params.runCallbacksOnInit,true);}}},setHash:function setHash(){if(!s.hashnav.initialized || !s.params.hashnav)return;document.location.hash = s.slides.eq(s.activeIndex).attr('data-hash') || '';}}; /*=========================
	          Keyboard Control
	          ===========================*/function handleKeyboard(e){if(e.originalEvent)e = e.originalEvent; //jquery fix
	var kc=e.keyCode || e.charCode;if(e.shiftKey || e.altKey || e.ctrlKey || e.metaKey){return;}if(document.activeElement && document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === 'input' || document.activeElement.nodeName.toLowerCase() === 'textarea')){return;}if(kc === 37 || kc === 39 || kc === 38 || kc === 40){var inView=false; //Check that swiper should be inside of visible area of window
	if(s.container.parents('.swiper-slide').length > 0 && s.container.parents('.swiper-slide-active').length === 0){return;}var windowScroll={left:window.pageXOffset,top:window.pageYOffset};var windowWidth=window.innerWidth;var windowHeight=window.innerHeight;var swiperOffset=s.container.offset();var swiperCoord=[[swiperOffset.left,swiperOffset.top],[swiperOffset.left + s.width,swiperOffset.top],[swiperOffset.left,swiperOffset.top + s.height],[swiperOffset.left + s.width,swiperOffset.top + s.height]];for(var i=0;i < swiperCoord.length;i++) {var point=swiperCoord[i];if(point[0] >= windowScroll.left && point[0] <= windowScroll.left + windowWidth && point[1] >= windowScroll.top && point[1] <= windowScroll.top + windowHeight){inView = true;}}if(!inView)return;}if(isH()){if(kc === 37 || kc === 39){if(e.preventDefault)e.preventDefault();else e.returnValue = false;}if(kc === 39)s.slideNext();if(kc === 37)s.slidePrev();}else {if(kc === 38 || kc === 40){if(e.preventDefault)e.preventDefault();else e.returnValue = false;}if(kc === 40)s.slideNext();if(kc === 38)s.slidePrev();}}s.disableKeyboardControl = function(){$(document).off('keydown',handleKeyboard);};s.enableKeyboardControl = function(){$(document).on('keydown',handleKeyboard);}; /*=========================
	          Mousewheel Control
	          ===========================*/ // s._wheelEvent = false;
	// s._lastWheelScrollTime = (new Date()).getTime();
	// if (s.params.mousewheelControl) {
	//     if (document.onmousewheel !== undefined) {
	//         s._wheelEvent = 'mousewheel';
	//     }
	//     if (!s._wheelEvent) {
	//         try {
	//             new WheelEvent('wheel');
	//             s._wheelEvent = 'wheel';
	//         } catch (e) {}
	//     }
	//     if (!s._wheelEvent) {
	//         s._wheelEvent = 'DOMMouseScroll';
	//     }
	// }
	// function handleMousewheel(e) {
	//     if (e.originalEvent) e = e.originalEvent; //jquery fix
	//     var we = s._wheelEvent;
	//     var delta = 0;
	//     //Opera & IE
	//     if (e.detail) delta = -e.detail;
	//     //WebKits
	//     else if (we === 'mousewheel') {
	//         if (s.params.mousewheelForceToAxis) {
	//             if (isH()) {
	//                 if (Math.abs(e.wheelDeltaX) > Math.abs(e.wheelDeltaY)) delta = e.wheelDeltaX;
	//                 else return;
	//             }
	//             else {
	//                 if (Math.abs(e.wheelDeltaY) > Math.abs(e.wheelDeltaX)) delta = e.wheelDeltaY;
	//                 else return;
	//             }
	//         }
	//         else {
	//             delta = e.wheelDelta;
	//         }
	//     }
	//     //Old FireFox
	//     else if (we === 'DOMMouseScroll') delta = -e.detail;
	//     //New FireFox
	//     else if (we === 'wheel') {
	//         if (s.params.mousewheelForceToAxis) {
	//             if (isH()) {
	//                 if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) delta = -e.deltaX;
	//                 else return;
	//             }
	//             else {
	//                 if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) delta = -e.deltaY;
	//                 else return;
	//             }
	//         }
	//         else {
	//             delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? - e.deltaX : - e.deltaY;
	//         }
	//     }
	//     if (!s.params.freeMode) {
	//         if ((new Date()).getTime() - s._lastWheelScrollTime > 60) {
	//             if (delta < 0) s.slideNext();
	//             else s.slidePrev();
	//         }
	//         s._lastWheelScrollTime = (new Date()).getTime();
	//     }
	//     else {
	//         //Freemode or scrollContainer:
	//         var position = s.getWrapperTranslate() + delta;
	//         if (position > 0) position = 0;
	//         if (position < s.maxTranslate()) position = s.maxTranslate();
	//         s.setWrapperTransition(0);
	//         s.setWrapperTranslate(position);
	//         s.updateProgress();
	//         s.updateActiveIndex();
	//         // Return page scroll on edge positions
	//         if (position === 0 || position === s.maxTranslate()) return;
	//     }
	//     if (s.params.autoplay) s.stopAutoplay();
	//     if (e.preventDefault) e.preventDefault();
	//     else e.returnValue = false;
	//     return false;
	// }
	// s.disableMousewheelControl = function () {
	//     if (!s._wheelEvent) return false;
	//     s.container.off(s._wheelEvent, handleMousewheel);
	//     return true;
	// };
	// s.enableMousewheelControl = function () {
	//     if (!s._wheelEvent) return false;
	//     s.container.on(s._wheelEvent, handleMousewheel);
	//     return true;
	// };
	/*=========================
	          Parallax
	          ===========================*/ // function setParallaxTransform(el, progress) {
	//     el = $(el);
	//     var p, pX, pY, tX, tY;
	//     p = el.attr('data-swiper-parallax');
	//     pX = el.attr('data-swiper-parallax-x');
	//     pY = el.attr('data-swiper-parallax-y');
	//     if (!pX && !pY && p) {
	//         if (isH()) {
	//             pX = p;
	//             pY = '0';
	//         }
	//         else {
	//             pY = p;
	//             pX = '0';
	//         }
	//     }
	//     else {
	//         if (pX) pX = pX;
	//         else pX = '0';
	//         if (pY) pY = pY;
	//         else pY = '0';
	//     }
	//     if ((pX).indexOf('%') >= 0) {
	//         pX = parseInt(pX, 10) * progress + '%';
	//     }
	//     else {
	//         pX = pX * progress + 'px' ;
	//     }
	//     if ((pY).indexOf('%') >= 0) {
	//         pY = parseInt(pY, 10) * progress + '%';
	//     }
	//     else {
	//         pY = pY * progress + 'px' ;
	//     }
	//     tX = pX;
	//     tY = pY;
	//     el.transform('translate3d(' + tX + ', ' + tY + ',0px)');
	// }   
	// s.parallax = {
	//     setTranslate: function () {
	//         s.container.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function(){
	//             setParallaxTransform(this, s.progress);
	//         });
	//         s.slides.each(function () {
	//             var slide = $(this);
	//             slide.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function () {
	//                 var progress = Math.min(Math.max(slide[0].progress, -1), 1);
	//                 setParallaxTransform(this, progress);
	//             });
	//         });
	//     },
	//     setTransition: function (duration) {
	//         if (typeof duration === 'undefined') duration = s.params.speed;
	//         s.container.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function(){
	//             var el = $(this);
	//             var parallaxDuration = parseInt(el.attr('data-swiper-parallax-duration'), 10) || duration;
	//             if (duration === 0) parallaxDuration = 0;
	//             el.transition(parallaxDuration);
	//         });
	//     }
	// };
	/*=========================
	          Init/Destroy
	          ===========================*/s.init = function(){if(s.params.loop)s.createLoop();s.updateContainerSize();s.updateSlidesSize(); // s.updatePagination();
	if(s.params.scrollbar && s.scrollbar){s.scrollbar.set();}if(s.params.effect !== 'slide' && s.effects[s.params.effect]){if(!s.params.loop)s.updateProgress();s.effects[s.params.effect].setTranslate();}if(s.params.loop){s.slideTo(s.params.initialSlide + s.loopedSlides,0,s.params.runCallbacksOnInit);}else {s.slideTo(s.params.initialSlide,0,s.params.runCallbacksOnInit);if(s.params.initialSlide === 0){if(s.parallax && s.params.parallax)s.parallax.setTranslate();if(s.lazy && s.params.lazyLoading)s.lazy.load();}}s.attachEvents();if(s.params.observer && s.support.observer){s.initObservers();}if(s.params.preloadImages && !s.params.lazyLoading){s.preloadImages();}if(s.params.autoplay){s.startAutoplay();}if(s.params.keyboardControl){if(s.enableKeyboardControl)s.enableKeyboardControl();}if(s.params.mousewheelControl){if(s.enableMousewheelControl)s.enableMousewheelControl();}if(s.params.hashnav){if(s.hashnav)s.hashnav.init();}if(s.params.onInit)s.params.onInit(s);}; // Destroy
	s.destroy = function(deleteInstance){s.detachEvents();s.disconnectObservers();if(s.params.keyboardControl){if(s.disableKeyboardControl)s.disableKeyboardControl();}if(s.params.mousewheelControl){if(s.disableMousewheelControl)s.disableMousewheelControl();}if(s.params.onDestroy)s.params.onDestroy();if(deleteInstance !== false)s = null;};s.init(); // Return swiper instance
	return s;}; /*==================================================
	        Prototype
	    ====================================================*/Swiper.prototype = {isSafari:(function(){var ua=navigator.userAgent.toLowerCase();return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;})(),isUiWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),isArray:function isArray(arr){return Object.prototype.toString.apply(arr) === '[object Array]';}, /*==================================================
	        Browser
	        ====================================================*/browser:{ie:window.navigator.pointerEnabled || window.navigator.msPointerEnabled}, /*==================================================
	        Devices
	        ====================================================*/device:(function(){var ua=navigator.userAgent;var android=ua.match(/(Android);?[\s\/]+([\d.]+)?/);var ipad=ua.match(/(iPad).*OS\s([\d_]+)/);var ipod=ua.match(/(iPod)(.*OS\s([\d_]+))?/);var iphone=!ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/);return {ios:ipad || iphone || ipad,android:android};})(), /*==================================================
	        Feature Detection
	        ====================================================*/support:{touch:window.Modernizr && Modernizr.touch === true || (function(){return !!('ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch);})(),transforms3d:window.Modernizr && Modernizr.csstransforms3d === true || (function(){var div=document.createElement('div').style;return 'webkitPerspective' in div || 'MozPerspective' in div || 'OPerspective' in div || 'MsPerspective' in div || 'perspective' in div;})(),flexbox:(function(){var div=document.createElement('div').style;var styles='WebkitBox msFlexbox MsFlexbox WebkitFlex MozBox flex'.split(' ');for(var i=0;i < styles.length;i++) {if(styles[i] in div)return true;}})(),observer:(function(){return 'MutationObserver' in window || 'WebkitMutationObserver' in window;})()}}; /*===========================
	    Add .swiper plugin from Dom libraries
	    ===========================*/var swiperDomPlugins=['jQuery','Zepto','Dom7'];function addLibraryPlugin(lib){lib.fn.swiper = function(params){var firstInstance;lib(this).each(function(){var s=new Swiper(this,params);if(!firstInstance)firstInstance = s;});return firstInstance;};}for(var i=0;i < swiperDomPlugins.length;i++) {if(window[swiperDomPlugins[i]]){addLibraryPlugin(window[swiperDomPlugins[i]]);}} // Required DOM Plugins
	var domLib;if(typeof Dom7 === 'undefined'){domLib = window.Dom7 || window.Zepto || window.jQuery;}else {domLib = Dom7;}if(domLib){if(!('transitionEnd' in domLib.fn)){domLib.fn.transitionEnd = function(callback){var events=['webkitTransitionEnd','transitionend','oTransitionEnd','MSTransitionEnd','msTransitionEnd'],i,j,dom=this;function fireCallBack(e){ /*jshint validthis:true */if(e.target !== this)return;callback.call(this,e);for(i = 0;i < events.length;i++) {dom.off(events[i],fireCallBack);}}if(callback){for(i = 0;i < events.length;i++) {dom.on(events[i],fireCallBack);}}return this;};}if(!('transform' in domLib.fn)){domLib.fn.transform = function(transform){for(var i=0;i < this.length;i++) {var elStyle=this[i].style;elStyle.webkitTransform = elStyle.MsTransform = elStyle.msTransform = elStyle.MozTransform = elStyle.OTransform = elStyle.transform = transform;}return this;};}if(!('transition' in domLib.fn)){domLib.fn.transition = function(duration){if(typeof duration !== 'string'){duration = duration + 'ms';}for(var i=0;i < this.length;i++) {var elStyle=this[i].style;elStyle.webkitTransitionDuration = elStyle.MsTransitionDuration = elStyle.msTransitionDuration = elStyle.MozTransitionDuration = elStyle.OTransitionDuration = elStyle.transitionDuration = duration;}return this;};}}})(); /*===========================
	Swiper AMD Export
	===========================*/if(true){module.exports = Swiper;}else if(typeof define === 'function' && define.amd){define([],function(){'use strict';return Swiper;});} // PATCH: do not show at initialization
	// s.slides.eq(i).addClass(s.params.slideVisibleClass);
	// if (s.params.prevButton) {
	//     if (s.isBeginning) $(s.params.prevButton).addClass(s.params.buttonDisabledClass);
	//     else $(s.params.prevButton).removeClass(s.params.buttonDisabledClass);
	// }
	// if (s.params.nextButton) {
	//     if (s.isEnd) $(s.params.nextButton).addClass(s.params.buttonDisabledClass);
	//     else $(s.params.nextButton).removeClass(s.params.buttonDisabledClass);
	// }
	// s.updateContainerSize();
	// s.updateSlidesSize();
	// s.updateProgress();
	// if (s.params.slidesPerView === 'auto' || s.params.freeMode) s.updatePagination();
	// if (s.params.scrollbar && s.scrollbar) {
	//     s.scrollbar.set();
	// }
	// if (s.params.freeMode) {
	//     var newTranslate = Math.min(Math.max(s.translate, s.maxTranslate()), s.minTranslate());
	//     s.setWrapperTranslate(newTranslate);
	//     s.updateActiveIndex();
	//     s.updateClasses();
	// }
	// else {
	//     s.updateClasses();
	//     if (s.params.slidesPerView === 'auto' && s.isEnd && !s.params.centeredSlides) {
	//         s.slideTo(s.slides.length - 1, 0, false, true);
	//     }
	//     else {
	//         s.slideTo(s.activeIndex, 0, false, true);
	//     }
	// }
	// fade: {
	//     setTranslate: function () {
	//         for (var i = 0; i < s.slides.length; i++) {
	//             var slide = s.slides.eq(i);
	//             var offset = slide[0].swiperSlideOffset;
	//             var tx = -offset - s.translate;
	//             var ty = 0;
	//             if (!isH()) {
	//                 ty = tx;
	//                 tx = 0;
	//             }
	//             var slideOpacity = s.params.fade.crossFade ?
	//                     Math.max(1 - Math.abs(slide[0].progress), 0) :
	//                     1 + Math.min(Math.max(slide[0].progress, -1), 0);
	//             slide
	//                 .css({
	//                     opacity: slideOpacity
	//                 })
	//                 .transform('translate3d(' + tx + 'px, ' + ty + 'px, 0px)');
	//         }
	//     },
	//     setTransition: function (duration) {
	//         s.slides.transition(duration);
	//     }
	// },
	// cube: {
	//     setTranslate: function () {
	//         var wrapperRotate = 0, cubeShadow;
	//         if (s.params.cube.shadow) {
	//             if (isH()) {
	//                 cubeShadow = s.wrapper.find('.swiper-cube-shadow');
	//                 if (cubeShadow.length === 0) {
	//                     cubeShadow = $('<div class="swiper-cube-shadow"></div>');
	//                     s.wrapper.append(cubeShadow);
	//                 }
	//                 cubeShadow.css({height: s.width + 'px'});
	//             }
	//             else {
	//                 cubeShadow = s.container.find('.swiper-cube-shadow');
	//                 if (cubeShadow.length === 0) {
	//                     cubeShadow = $('<div class="swiper-cube-shadow"></div>');
	//                     s.container.append(cubeShadow);
	//                 }
	//             }
	//         }
	//         for (var i = 0; i < s.slides.length; i++) {
	//             var slide = s.slides.eq(i);
	//             var slideAngle = i * 90;
	//             var round = Math.floor(slideAngle / 360);
	//             if (s.rtl) {
	//                 slideAngle = -slideAngle;
	//                 round = Math.floor(-slideAngle / 360);
	//             }
	//             var progress = Math.max(Math.min(slide[0].progress, 1), -1);
	//             var tx = 0, ty = 0, tz = 0;
	//             if (i % 4 === 0) {
	//                 tx = - round * 4 * s.size;
	//                 tz = 0;
	//             }
	//             else if ((i - 1) % 4 === 0) {
	//                 tx = 0;
	//                 tz = - round * 4 * s.size;
	//             }
	//             else if ((i - 2) % 4 === 0) {
	//                 tx = s.size + round * 4 * s.size;
	//                 tz = s.size;
	//             }
	//             else if ((i - 3) % 4 === 0) {
	//                 tx = - s.size;
	//                 tz = 3 * s.size + s.size * 4 * round;
	//             }
	//             if (s.rtl) {
	//                 tx = -tx;
	//             }
	//             if (!isH()) {
	//                 ty = tx;
	//                 tx = 0;
	//             }
	//             var transform = 'rotateX(' + (isH() ? 0 : -slideAngle) + 'deg) rotateY(' + (isH() ? slideAngle : 0) + 'deg) translate3d(' + tx + 'px, ' + ty + 'px, ' + tz + 'px)';
	//             if (progress <= 1 && progress > -1) {
	//                 wrapperRotate = i * 90 + progress * 90;
	//                 if (s.rtl) wrapperRotate = -i * 90 - progress * 90;
	//             }
	//             slide.transform(transform);
	//             if (s.params.cube.slideShadows) {
	//                 //Set shadows
	//                 var shadowBefore = isH() ? slide.find('.swiper-slide-shadow-left') : slide.find('.swiper-slide-shadow-top');
	//                 var shadowAfter = isH() ? slide.find('.swiper-slide-shadow-right') : slide.find('.swiper-slide-shadow-bottom');
	//                 if (shadowBefore.length === 0) {
	//                     shadowBefore = $('<div class="swiper-slide-shadow-' + (isH() ? 'left' : 'top') + '"></div>');
	//                     slide.append(shadowBefore);
	//                 }
	//                 if (shadowAfter.length === 0) {
	//                     shadowAfter = $('<div class="swiper-slide-shadow-' + (isH() ? 'right' : 'bottom') + '"></div>');
	//                     slide.append(shadowAfter);
	//                 }
	//                 var shadowOpacity = slide[0].progress;
	//                 if (shadowBefore.length) shadowBefore[0].style.opacity = -slide[0].progress;
	//                 if (shadowAfter.length) shadowAfter[0].style.opacity = slide[0].progress;
	//             }
	//         }
	//         s.wrapper.css({
	//             '-webkit-transform-origin': '50% 50% -' + (s.size / 2) + 'px',
	//             '-moz-transform-origin': '50% 50% -' + (s.size / 2) + 'px',
	//             '-ms-transform-origin': '50% 50% -' + (s.size / 2) + 'px',
	//             'transform-origin': '50% 50% -' + (s.size / 2) + 'px'
	//         });
	//         if (s.params.cube.shadow) {
	//             if (isH()) {
	//                 cubeShadow.transform('translate3d(0px, ' + (s.width / 2 + s.params.cube.shadowOffset) + 'px, ' + (-s.width / 2) + 'px) rotateX(90deg) rotateZ(0deg) scale(' + (s.params.cube.shadowScale) + ')');
	//             }
	//             else {
	//                 var shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
	//                 var multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
	//                 var scale1 = s.params.cube.shadowScale,
	//                     scale2 = s.params.cube.shadowScale / multiplier,
	//                     offset = s.params.cube.shadowOffset;
	//                 cubeShadow.transform('scale3d(' + scale1 + ', 1, ' + scale2 + ') translate3d(0px, ' + (s.height / 2 + offset) + 'px, ' + (-s.height / 2 / scale2) + 'px) rotateX(-90deg)');
	//             }
	//         }
	//         var zFactor = (s.isSafari || s.isUiWebView) ? (-s.size / 2) : 0;
	//         s.wrapper.transform('translate3d(0px,0,' + zFactor + 'px) rotateX(' + (isH() ? 0 : wrapperRotate) + 'deg) rotateY(' + (isH() ? -wrapperRotate : 0) + 'deg)');
	//     },
	//     setTransition: function (duration) {
	//         s.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
	//         if (s.params.cube.shadow && !isH()) {
	//             s.container.find('.swiper-cube-shadow').transition(duration);
	//         }
	//     }
	// },
	// coverflow: {
	//     setTranslate: function () {
	//         var transform = s.translate;
	//         var center = isH() ? -transform + s.width / 2 : -transform + s.height / 2;
	//         var rotate = isH() ? s.params.coverflow.rotate: -s.params.coverflow.rotate;
	//         var translate = s.params.coverflow.depth;
	//         //Each slide offset from center
	//         for (var i = 0, length = s.slides.length; i < length; i++) {
	//             var slide = s.slides.eq(i);
	//             var slideSize = s.slidesSizesGrid[i];
	//             var slideOffset = slide[0].swiperSlideOffset;
	//             var offsetMultiplier = (center - slideOffset - slideSize / 2) / slideSize * s.params.coverflow.modifier;
	//             var rotateY = isH() ? rotate * offsetMultiplier : 0;
	//             var rotateX = isH() ? 0 : rotate * offsetMultiplier;
	//             // var rotateZ = 0
	//             var translateZ = -translate * Math.abs(offsetMultiplier);
	//             var translateY = isH() ? 0 : s.params.coverflow.stretch * (offsetMultiplier);
	//             var translateX = isH() ? s.params.coverflow.stretch * (offsetMultiplier) : 0;
	//             //Fix for ultra small values
	//             if (Math.abs(translateX) < 0.001) translateX = 0;
	//             if (Math.abs(translateY) < 0.001) translateY = 0;
	//             if (Math.abs(translateZ) < 0.001) translateZ = 0;
	//             if (Math.abs(rotateY) < 0.001) rotateY = 0;
	//             if (Math.abs(rotateX) < 0.001) rotateX = 0;
	//             var slideTransform = 'translate3d(' + translateX + 'px,' + translateY + 'px,' + translateZ + 'px)  rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';
	//             slide.transform(slideTransform);
	//             slide[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
	//             if (s.params.coverflow.slideShadows) {
	//                 //Set shadows
	//                 var shadowBefore = isH() ? slide.find('.swiper-slide-shadow-left') : slide.find('.swiper-slide-shadow-top');
	//                 var shadowAfter = isH() ? slide.find('.swiper-slide-shadow-right') : slide.find('.swiper-slide-shadow-bottom');
	//                 if (shadowBefore.length === 0) {
	//                     shadowBefore = $('<div class="swiper-slide-shadow-' + (isH() ? 'left' : 'top') + '"></div>');
	//                     slide.append(shadowBefore);
	//                 }
	//                 if (shadowAfter.length === 0) {
	//                     shadowAfter = $('<div class="swiper-slide-shadow-' + (isH() ? 'right' : 'bottom') + '"></div>');
	//                     slide.append(shadowAfter);
	//                 }
	//                 if (shadowBefore.length) shadowBefore[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
	//                 if (shadowAfter.length) shadowAfter[0].style.opacity = (-offsetMultiplier) > 0 ? -offsetMultiplier : 0;
	//             }
	//         }
	//         //Set correct perspective for IE10
	//         if (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) {
	//             var ws = s.wrapper.style;
	//             ws.perspectiveOrigin = center + 'px 50%';
	//         }
	//     },
	//     setTransition: function (duration) {
	//         s.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
	//     }
	// }
	// set: function () {
	//     if (!s.params.scrollbar) return;
	//     var sb = s.scrollbar;
	//     sb.track = $(s.params.scrollbar);
	//     sb.drag = sb.track.find('.swiper-scrollbar-drag');
	//     if (sb.drag.length === 0) {
	//         sb.drag = $('<div class="swiper-scrollbar-drag"></div>');
	//         sb.track.append(sb.drag);
	//     }
	//     sb.drag[0].style.width = '';
	//     sb.drag[0].style.height = '';
	//     sb.trackSize = isH() ? sb.track[0].offsetWidth : sb.track[0].offsetHeight;
	//     sb.divider = s.size / s.virtualWidth;
	//     sb.moveDivider = sb.divider * (sb.trackSize / s.size);
	//     sb.dragSize = sb.trackSize * sb.divider;
	//     if (isH()) {
	//         sb.drag[0].style.width = sb.dragSize + 'px';
	//     }
	//     else {
	//         sb.drag[0].style.height = sb.dragSize + 'px';
	//     }
	//     if (sb.divider >= 1) {
	//         sb.track[0].style.display = 'none';
	//     }
	//     else {
	//         sb.track[0].style.display = '';
	//     }
	//     if (s.params.scrollbarHide) {
	//         sb.track[0].style.opacity = 0;
	//     }
	// },
	// setTranslate: function () {
	//     if (!s.params.scrollbar) return;
	//     var diff;
	//     var sb = s.scrollbar;
	//     var translate = s.translate || 0;
	//     var newPos;
	//     var newSize = sb.dragSize;
	//     newPos = (sb.trackSize - sb.dragSize) * s.progress;
	//     if (s.rtl && isH()) {
	//         newPos = -newPos;
	//         if (newPos > 0) {
	//             newSize = sb.dragSize - newPos;
	//             newPos = 0;
	//         }
	//         else if (-newPos + sb.dragSize > sb.trackSize) {
	//             newSize = sb.trackSize + newPos;
	//         }
	//     }
	//     else {
	//         if (newPos < 0) {
	//             newSize = sb.dragSize + newPos;
	//             newPos = 0;
	//         }
	//         else if (newPos + sb.dragSize > sb.trackSize) {
	//             newSize = sb.trackSize - newPos;
	//         }
	//     }
	//     if (isH()) {
	//         sb.drag.transform('translate3d(' + (newPos) + 'px, 0, 0)');
	//         sb.drag[0].style.width = newSize + 'px';
	//     }
	//     else {
	//         sb.drag.transform('translate3d(0px, ' + (newPos) + 'px, 0)');
	//         sb.drag[0].style.height = newSize + 'px';
	//     }
	//     if (s.params.scrollbarHide) {
	//         clearTimeout(sb.timeout);
	//         sb.track[0].style.opacity = 1;
	//         sb.timeout = setTimeout(function () {
	//             sb.track[0].style.opacity = 0;
	//             sb.track.transition(400);
	//         }, 1000);
	//     }
	// },
	// setTransition: function (duration) {
	//     if (!s.params.scrollbar) return;
	//     s.scrollbar.drag.transition(duration);
	// }

/***/ },
/* 117 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = {
	  Types: [{
	    id: 'food-and-drinks',
	    label: 'Food & Drinks'
	  }, {
	    id: 'shows',
	    label: 'Shows'
	  }, {
	    id: 'luxury',
	    label: 'Luxury'
	  }, {
	    id: 'wifi-and-transport',
	    label: 'Wifi & Transport'
	  }, {
	    id: 'theme-parks',
	    label: 'Theme Parks'
	  }, {
	    id: 'outdoor',
	    label: 'Outdoor'
	  }]
	
	};

/***/ },
/* 118 */
/***/ function(module, exports) {

	module.exports = "<div class=\"component__categories swiper-container\">\n        <ul class=\"swiper-wrapper\">\n            <li class=\"swiper-slide\" v-repeat=\"types\" v-class=\"selected: selectedType == id\"><a href=\"javascript:;\" v-on=\"click: onClickType(id)\">{{label}}</a></li>\n        </ul>\n    </div>";

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(120)
	module.exports.template = __webpack_require__(123)


/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _filtersFilter = __webpack_require__(121);
	
	var _filtersFilter2 = _interopRequireDefault(_filtersFilter);
	
	exports['default'] = {
	    data: function data() {
	        return {
	            objectId: '',
	            name: '',
	            description: '',
	            address: {
	                city: '',
	                country: '',
	                line1: '',
	                line2: '',
	                region: '',
	                state: '',
	                zip: ''
	            },
	            type: '',
	            defaultImageIndex: null,
	            images: [],
	            price: {
	                amount: 0,
	                currency: '',
	                unit: ''
	            },
	            reservationDetails: '',
	            reservationPhone: '',
	            reservationUrl: '',
	            favorited: false
	        };
	    },
	
	    computed: {
	        dislayImageUrl: function dislayImageUrl() {
	            return _filtersFilter2['default'].dislayImageUrl(this);
	        }
	    },
	
	    methods: {
	        onClickItem: function onClickItem() {
	            this.$dispatch('onSelectCard', this.objectId);
	        },
	
	        favorite: function favorite(e) {
	            // TODO
	            var favorited = this.favorited;
	            if (favorited) {} else {}
	            e.stopPropagation();
	            return false;
	        }
	    }
	};
	module.exports = exports['default'];

	// send unfav

	// send fav

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _vue = __webpack_require__(19);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _controllersFilter = __webpack_require__(122);
	
	var _controllersFilter2 = _interopRequireDefault(_controllersFilter);
	
	_vue2['default'].filter('price', _controllersFilter2['default'].price);
	_vue2['default'].filter('address', _controllersFilter2['default'].address);
	_vue2['default'].filter('type', _controllersFilter2['default'].type);
	_vue2['default'].filter('dislayImageUrl', _controllersFilter2['default'].dislayImageUrl);
	
	exports['default'] = _controllersFilter2['default'];
	module.exports = exports['default'];

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var constants = __webpack_require__(117);
	
	module.exports = {
	
	    price: function price(_price) {
	        if (!_price.amount) {
	            return 'Free';
	        } else {
	            return _price.unit + _price.amount;
	        }
	    },
	
	    address: function address(_address) {
	        return [_address.line1, _address.line2, _address.city, _address.region].join(' ');
	    },
	
	    type: function type(_type) {
	        var matched = _type;
	        constants.Types.forEach(function (obj) {
	            if (obj.id === _type) {
	                matched = obj.label;
	            }
	        });
	        return matched;
	    },
	
	    dislayImageUrl: function dislayImageUrl(item) {
	        var image = item.images && item.images.length && item.images[item.defaultImageIndex || 0];
	        return image && image.url || '/img/no_image.png';
	    }
	
	};

/***/ },
/* 123 */
/***/ function(module, exports) {

	module.exports = "<a v-on=\"click: onClickItem\" href=\"javascript:;\" class=\"component__card\">\n        <div class=\"card_bg\" v-style=\"background-image: 'url(' + dislayImageUrl + ')'\">\n            <div class=\"card_wrap\">\n                <div class=\"card_main\">\n                    <div class=\"card_middle\">\n                        <div class=\"card_title\">{{name}}</div>\n                        <div class=\"card_categories\">\n                            <span>{{type | type}}</span>\n                        </div>\n                        <div class=\"card_area\">{{address.city}}</div>\n                    </div>\n                    <div class=\"card_right\">\n                        <div class=\"card_favorite\" v-class=\"icon_favorite: favorited, icon_favorite_blank: !favorited\" v-on=\"click: favorite\"></div>\n                        <div class=\"card_price\">{{price | price}}</div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </a>";

/***/ },
/* 124 */
/***/ function(module, exports) {

	module.exports = "<div class=\"page__top\">\n      <div class=\"top_nav\">\n        <component-categories selected-type=\"{{queryParams.filter}}\"></component-categories>\n      </div>\n      <div class=\"top_filter\">\n          <select class=\"select_large\" v-on=\"change: onChangeOrder\" v-model=\"queryParams.order\">\n            <option value=\"popular\">Popular</option>\n            <option value=\"price\">Price</option>\n            <option value=\"time\">Limited Time Offer</option>\n          </select>\n      </div>\n      <div class=\"top_main\" v-if=\"!loading\">\n        <component-card v-repeat=\"items\"></component-card>\n      </div>\n      <div v-if=\"loading\">\n        Loading...\n      </div>\n  </div>";

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(126)
	module.exports.template = __webpack_require__(128)


/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _npmZepto = __webpack_require__(88);
	
	var _npmZepto2 = _interopRequireDefault(_npmZepto);
	
	var _commonUtil = __webpack_require__(89);
	
	var _commonUtil2 = _interopRequireDefault(_commonUtil);
	
	var _commonConfig = __webpack_require__(87);
	
	var _commonConfig2 = _interopRequireDefault(_commonConfig);
	
	var _commonCache = __webpack_require__(93);
	
	var _commonCache2 = _interopRequireDefault(_commonCache);
	
	var _commonMapUtil = __webpack_require__(127);
	
	var _commonMapUtil2 = _interopRequireDefault(_commonMapUtil);
	
	var _componentsCategoriesVue = __webpack_require__(114);
	
	var _componentsCategoriesVue2 = _interopRequireDefault(_componentsCategoriesVue);
	
	var _pagesTopVue = __webpack_require__(112);
	
	var _pagesTopVue2 = _interopRequireDefault(_pagesTopVue);
	
	// extend pageTop
	var Component = {
	  data: function data() {
	    return {
	      items: [],
	      queryParams: {
	        filter: '',
	        order: 'popular'
	      },
	      initPos: { lat: 35.658517, lng: 139.701334 }
	    };
	  },
	
	  components: {
	    'component-categories': _componentsCategoriesVue2['default']
	  },
	
	  created: function created() {
	    // TODO: handle initial query params
	    this.restoreQueryParams();
	    // listening events
	    this.attachEvents();
	    // initial load
	    this.refresh();
	  },
	
	  ready: function ready() {
	    this.initMap();
	  },
	
	  methods: {
	    attachEvents: function attachEvents() {
	      this.$on('onSelectMap', this.onSelectMap.bind(this));
	      this.$on('onSelectType', this.onSelectType.bind(this));
	      this.$on('onLoadCompleted', this.onLoadCompleted.bind(this));
	    },
	
	    onSelectMap: function onSelectMap(id) {
	      // set to response cache
	      _commonCache2['default'].set('detail', _commonUtil2['default'].getItemById(this.items, id));
	      location.href = '#/detail/' + id;
	    },
	
	    initMap: function initMap() {
	      // temp to set map height
	      var mapNode = document.getElementById('map_canvas'),
	          headerH = 44,
	          navH = 48,
	          filterH = 32;
	
	      (0, _npmZepto2['default'])(mapNode).height((0, _npmZepto2['default'])(window).height() - (headerH + navH + filterH));
	
	      // TODO: get current location
	      this._map = _commonMapUtil2['default'].create(mapNode, {
	        lat: this.initPos.lat,
	        lng: this.initPos.lng,
	        zoom: 12
	      });
	    },
	
	    onLoadCompleted: function onLoadCompleted() {
	      var _this = this;
	
	      var that = this;
	      // clear existing markers
	      this._map.clearMarkers();
	      // add new markers
	      this.items.forEach(function (item, i) {
	        _this._map.addMaker({
	          id: item.objectId,
	          lat: item.location.latitude,
	          lng: item.location.longitude,
	          onClickMarker: function onClickMarker() {
	            that.onSelectCard(item.objectId);
	          }
	        });
	      });
	    }
	  }
	};
	// TODO: temp extend implementation for methos
	Component.methods = _npmZepto2['default'].extend({}, _pagesTopVue2['default'].methods, Component.methods);
	Component.computed = _npmZepto2['default'].extend({}, _pagesTopVue2['default'].computed, Component.computed);
	exports['default'] = _npmZepto2['default'].extend({}, _pagesTopVue2['default'], Component);
	module.exports = exports['default'];

/***/ },
/* 127 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var Map = (function () {
	    function Map(map) {
	        _classCallCheck(this, Map);
	
	        // constants
	        this._markerSize = 36;
	        this._displayedIds = [];
	        this._markers = [];
	        this._map = map;
	    }
	
	    _createClass(Map, [{
	        key: 'addMaker',
	        value: function addMaker() {
	            var opt = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	            var id = opt.id,
	                lat = opt.lat,
	                lng = opt.lng,
	                onClickMarker = opt.onClickMarker;
	            // dup check
	            if (this._displayedIds.indexOf(id) !== -1) {
	                return;
	            }
	            var ms = this._markerSize,
	                gLatLng = new google.maps.LatLng(lat, lng);
	
	            // TODO: use custom marker to show title and image?
	            var marker = new google.maps.Marker({
	                position: gLatLng,
	                map: this._map
	            });
	            if (onClickMarker) {
	                google.maps.event.addListener(marker, 'click', onClickMarker);
	            }
	            this._markers.push(marker);
	            this._displayedIds.push(id);
	        }
	    }, {
	        key: 'clearMarkers',
	        value: function clearMarkers() {
	            this._displayedIds = [];
	            this._markers.forEach(function (marker, i) {
	                marker.setMap(null);
	            });
	            this._markers = [];
	        }
	    }]);
	
	    return Map;
	})();
	
	exports['default'] = {
	
	    newInstance: function newInstance(map) {
	        return new Map(map);
	    },
	
	    create: function create(mapNode) {
	        var opt = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	        var MY_MAPTYPE_ID = 'Booked_style',
	            lat = opt.lat,
	            lng = opt.lng,
	            zoom = opt.zoom;
	
	        var map = new google.maps.Map(mapNode, {
	            center: new google.maps.LatLng(lat, lng),
	            zoom: zoom || 12,
	            // mapTypeId: google.maps.MapTypeId.ROADMAP,
	            mapTypeId: MY_MAPTYPE_ID,
	            mapTypeControl: false,
	            panControl: true,
	            panControlOptions: {
	                position: google.maps.ControlPosition.TOP_RIGHT
	            },
	            zoomControl: true,
	            zoomControlOptions: {
	                style: google.maps.ZoomControlStyle.LARGE,
	                position: google.maps.ControlPosition.TOP_RIGHT
	            },
	            scaleControl: true,
	            streetViewControl: true,
	            streetViewControlOptions: {
	                position: google.maps.ControlPosition.TOP_RIGHT
	            }
	        });
	
	        var customMapType = new google.maps.StyledMapType([{
	            'stylers': [{ 'hue': '#0069b2' }, { 'saturation': -70 }],
	            'elementType': 'all',
	            'featureType': 'all'
	        }, {
	            'featureType': 'poi',
	            'elementType': 'labels',
	            'stylers': [{ 'visibility': 'off' }]
	        }], {
	            'name': 'Start Map'
	        });
	        map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
	
	        return this.newInstance(map);
	    }
	};
	module.exports = exports['default'];

/***/ },
/* 128 */
/***/ function(module, exports) {

	module.exports = "<div class=\"page__top\">\n      <!-- <div class=\"top_title\"></div> -->\n      <div class=\"top_nav\">\n        <component-categories selected-type=\"{{queryParams.filter}}\"></component-categories>\n      </div>\n      <div class=\"top_filter\">\n          <select class=\"select_large\" v-on=\"change: onChangeOrder\" v-model=\"queryParams.order\">\n            <option value=\"popular\">Popular</option>\n            <option value=\"price\">Price</option>\n            <option value=\"time\">Limited Time Offer</option>\n          </select>\n      </div>\n      <div class=\"top_map\">\n        <div id=\"map_canvas\"></div>\n      </div>\n  </div>";

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(130)
	module.exports.template = __webpack_require__(131)


/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _commonConfig = __webpack_require__(87);
	
	var _commonConfig2 = _interopRequireDefault(_commonConfig);
	
	var _commonUtil = __webpack_require__(89);
	
	var _commonUtil2 = _interopRequireDefault(_commonUtil);
	
	var _commonCache = __webpack_require__(93);
	
	var _commonCache2 = _interopRequireDefault(_commonCache);
	
	var _componentsCardVue = __webpack_require__(119);
	
	var _componentsCardVue2 = _interopRequireDefault(_componentsCardVue);
	
	exports['default'] = {
	  data: function data() {
	    return {
	      items: []
	    };
	  },
	
	  components: {
	    'component-card': _componentsCardVue2['default']
	  },
	
	  created: function created() {
	    // listening events
	    this.$on('onSelectCard', this.onSelectCard.bind(this));
	    this.refresh();
	  },
	
	  methods: {
	    refresh: function refresh() {
	      var _this = this;
	
	      // TODO: disscuss need wishlist API? or client filter or get list with favorited states only
	      // util.request({
	      //     url: './api/v1/wishlist'
	      // }).then((data) => {
	      //   this.items = data
	      // })
	      // TODO: temp
	      _commonUtil2['default'].request({
	        url: './api/v1/offer/list'
	      }).then(function (data) {
	        _this.items = data;
	      });
	    },
	
	    onSelectCard: function onSelectCard(id) {
	      // set to response cache
	      _commonCache2['default'].set('detail', _commonUtil2['default'].getItemById(this.items, id));
	      location.href = '#/detail/' + id;
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 131 */
/***/ function(module, exports) {

	module.exports = "<div class=\"page__wishlist\">\n      <component-card v-repeat=\"items\"></component-card>\n  </div>";

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(133)
	module.exports.template = __webpack_require__(134)


/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _commonCache = __webpack_require__(93);
	
	var _commonCache2 = _interopRequireDefault(_commonCache);
	
	exports['default'] = {
	  data: function data() {
	    return {
	      me: {}
	    };
	  },
	
	  components: {},
	
	  created: function created() {
	    this.me = _commonCache2['default'].get('me');
	  },
	
	  methods: {}
	};
	module.exports = exports['default'];

/***/ },
/* 134 */
/***/ function(module, exports) {

	module.exports = "<div class=\"page__mypage\">\n    <div class=\"mypage_head\">\n      <span class=\"icon_profile icon_large\"><img v-attr=\"src: me.imageUrl\"></span>\n      <div class=\"mypage_name\">\n        <span>{{me.name}}</span>\n      </div>\n    </div>\n    <div class=\"mypage_table\">\n        <dl>\n            <dt>Email</dt><dd>{{me.email}}</dd>\n        </dl>\n    </div>\n  </div>";

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(136)
	module.exports.template = __webpack_require__(137)


/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _commonCache = __webpack_require__(93);
	
	var _commonCache2 = _interopRequireDefault(_commonCache);
	
	exports['default'] = {
	  data: function data() {
	    return {};
	  },
	
	  components: {},
	
	  created: function created() {
	    this.me = _commonCache2['default'].get('me');
	    this.$on('onSave:page-mypage-edit', function () {
	      alert('saved');
	      // TODO: validation
	
	      // TODO: update info via POST API
	
	      // move back to mypage
	      location.href = '#/mypage/top';
	    });
	  },
	
	  methods: {}
	};
	module.exports = exports['default'];

/***/ },
/* 137 */
/***/ function(module, exports) {

	module.exports = "<div class=\"page__mypage isEdit\">\n    <div class=\"mypage_head\">\n      <span class=\"icon_profile icon_large\"><img v-attr=\"src: me.imageUrl\"></span>\n      <div class=\"mypage_name\">\n        <input type=\"text\" v-model=\"me.name\">\n      </div>\n    </div>\n    <div class=\"mypage_table\">\n        <dl>\n            <dt>Email</dt><dd><input type=\"text\" v-model=\"me.email\"></dd>\n        </dl>\n    </div>\n  </div>";

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(139)
	module.exports.template = __webpack_require__(140)


/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _commonCache = __webpack_require__(93);
	
	var _commonCache2 = _interopRequireDefault(_commonCache);
	
	exports['default'] = {
	  data: function data() {
	    return {
	      item: {}
	    };
	  },
	
	  components: {},
	
	  created: function created() {
	    this.item = _commonCache2['default'].get('detail');
	  },
	
	  methods: {
	
	    onClickSubmit: function onClickSubmit() {
	      if (window.confirm('Are you sure you want to requests the order?')) {
	        // TODO: open 3rd party payment sdk
	
	        // specify callback
	        location.href = '#/payment/success';
	      }
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 140 */
/***/ function(module, exports) {

	module.exports = "<div class=\"page__payment\">\n      <div class=\"detail_banner\">\n          <div class=\"detail_banner_bg\" v-style=\"background-image: 'url(' + item.imageUrl + ')'\"></div>\n      </div>\n      <div class=\"detail_summary\">\n          <div class=\"detail_title\">{{item.title}}</div>\n      </div>\n      <div class=\"detail_main\">\n        <h3>Ticket Order</h3>\n        <div>\n        ...\n        </div>\n      </div>\n      <div class=\"detail_footer\">\n        <div class=\"btn_large\" v-on=\"click: onClickSubmit\">Submit</div>\n      </div>\n  </div>";

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(142)
	module.exports.template = __webpack_require__(143)


/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _commonCache = __webpack_require__(93);
	
	var _commonCache2 = _interopRequireDefault(_commonCache);
	
	exports['default'] = {
	  data: function data() {
	    return {
	      item: null
	    };
	  },
	
	  components: {},
	
	  created: function created() {
	    var detail = _commonCache2['default'].get('detail');
	    if (detail) {
	      this.item = detail;
	    }
	  },
	
	  methods: {
	    onClickDone: function onClickDone() {
	      location.href = '#/';
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 143 */
/***/ function(module, exports) {

	module.exports = "<div class=\"page__payment\">\n      <div class=\"detail_banner\">\n          <div class=\"detail_banner_bg\" v-style=\"background-image: 'url(' + item.imageUrl + ')'\"></div>\n      </div>\n      <div class=\"detail_summary\">\n          <div>GOINGT TO:</div>\n          <div class=\"detail_title\">{{item.title}}</div>\n      </div>\n      <div class=\"detail_main\">\n        <h3>Date info</h3>\n        <div>\n        ...\n        </div>\n        <h3>Thank you for your request! We'll get in touch with you soon!</h3>\n      </div>\n      <div class=\"detail_footer\">\n          <div class=\"detail_btn btn_large\" v-on=\"click: onClickDone\">Back to Top</div>\n      </div>\n  </div>";

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(145)
	module.exports.template = __webpack_require__(146)


/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _commonConfig = __webpack_require__(87);
	
	var _commonConfig2 = _interopRequireDefault(_commonConfig);
	
	var _commonUtil = __webpack_require__(89);
	
	var _commonUtil2 = _interopRequireDefault(_commonUtil);
	
	var _commonCache = __webpack_require__(93);
	
	var _commonCache2 = _interopRequireDefault(_commonCache);
	
	exports['default'] = {
	  data: function data() {
	    return {
	      items: []
	    };
	  },
	
	  components: {},
	
	  created: function created() {
	    this.refresh();
	  },
	
	  methods: {
	    refresh: function refresh() {
	      var _this = this;
	
	      _commonUtil2['default'].request({
	        url: './api/v1/request/list'
	      }).then(function (data) {
	        _this.items = data;
	      });
	    },
	
	    onClickItem: function onClickItem(id) {
	      // store to cache
	      _commonCache2['default'].set('requestDetail', _commonUtil2['default'].getItemById(this.items, id));
	      location.href = '#/request/detail/' + id;
	    }
	
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 146 */
/***/ function(module, exports) {

	module.exports = "<div class=\"page__request\">\n      <ul>\n        <li v-repeat=\"items\" class=\"request_list_item request_list_bg\" v-style=\"background-image: 'url(' + imageUrl + ')'\">\n          <a v-on=\"click: onClickItem(id)\">\n            <h3>{{title}}</h3>\n            <div>{{price}}</div>\n            <div>{{date}}</div>\n          </a>\n        </li>\n      </ul>\n  </div>";

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(148)
	module.exports.template = __webpack_require__(149)


/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _commonCache = __webpack_require__(93);
	
	var _commonCache2 = _interopRequireDefault(_commonCache);
	
	exports['default'] = {
	    data: function data() {
	        return {
	            item: {}
	        };
	    },
	
	    components: {},
	
	    created: function created() {
	        // check exisiting item
	        var detail = _commonCache2['default'].get('requestDetail');
	        if (detail) {
	            this.item = detail;
	        }
	    },
	
	    methods: {}
	};
	module.exports = exports['default'];

/***/ },
/* 149 */
/***/ function(module, exports) {

	module.exports = "<div class=\"page__request\">\n      <div class=\"request_detail_banner\">\n          <div class=\"request_detail_banner_bg\" v-style=\"background-image: 'url(' + item.offer.imageUrl + ')'\"></div>\n      </div>\n      <div class=\"request_detail_summary\">\n          <div class=\"request_detail_title\">{{item.offer.name}}</div>\n          <div class=\"request_detail_table\">\n              <div class=\"request_detail_middle\">\n                  <div class=\"request_detail_categories\">\n                      <span>{{item.offer.type | type}</span>\n                  </div>\n                  <div class=\"request_detail_area\">{{item.offer.address.city}}</div>\n              </div>\n              <div class=\"request_detail_right\">\n                  <div class=\"request_detail_price\">{{item.offer.price | price}}</div>\n              </div>\n          </div>\n      </div>\n      <div class=\"request_detail_main\">\n          <h5>About this place</h5>\n          <div>\n              <p>Hours: {{item.offer.availability}}</p>\n          </div>\n          <div class=\"request_detail_location\">\n              <div class=\"request_detail_location_icon\"></div>\n              <div class=\"request_detail_location_content\">\n                  <div class=\"request_detail_location_title\">{{item.offer.location.name}}</div>\n                  <div class=\"request_detail_location_address\">{{item.offer.location.address}}</div>\n                  <div class=\"request_detail_location_right\">\n                      <span>Open with Google Map</span>\n                  </div>\n              </div>\n          </div>\n          <p class=\"request_detail_description\">{{{item.offer.description}}}</p>\n      </div>\n  </div>";

/***/ },
/* 150 */
/***/ function(module, exports) {

	"use strict";
	
	(function ($) {
	  ["Left", "Top"].forEach(function (name, i) {
	    var method = "scroll" + name;
	
	    function isWindow(obj) {
	      return obj && typeof obj === "object" && "setInterval" in obj;
	    }
	
	    function getWindow(elem) {
	      return isWindow(elem) ? elem : elem.nodeType === 9 ? elem.defaultView || elem.parentWindow : false;
	    }
	
	    $.fn[method] = function (val) {
	      var elem, win;
	
	      if (val === undefined) {
	
	        elem = this[0];
	
	        if (!elem) {
	          return null;
	        }
	
	        win = getWindow(elem);
	
	        // Return the scroll offset
	        return win ? "pageXOffset" in win ? win[i ? "pageYOffset" : "pageXOffset"] : win.document.documentElement[method] || win.document.body[method] : elem[method];
	      }
	
	      // Set the scroll offset
	      this.each(function () {
	        win = getWindow(this);
	
	        if (win) {
	          var xCoord = !i ? val : $(win).scrollLeft();
	          var yCoord = i ? val : $(win).scrollTop();
	          win.scrollTo(xCoord, yCoord);
	        } else {
	          this[method] = val;
	        }
	      });
	    };
	  });
	
	  // Used by colorslider.js
	  ["width", "height"].forEach(function (dimension) {
	    var offset,
	        Dimension = dimension.replace(/./, function (m) {
	      return m[0].toUpperCase();
	    });
	    $.fn["outer" + Dimension] = function (margin) {
	      var elem = this;
	      if (elem) {
	        var size = elem[dimension]();
	        var sides = { "width": ["left", "right"], "height": ["top", "bottom"] };
	        sides[dimension].forEach(function (side) {
	          if (margin) size += parseInt(elem.css("margin-" + side), 10);
	        });
	        return size;
	      } else {
	        return null;
	      }
	    };
	  });
	})(Zepto);

/***/ }
/******/ ]);