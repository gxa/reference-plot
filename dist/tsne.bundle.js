var tsne =
webpackJsonp_name_([0],[
/* 0 */,
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(79);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 13 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(163),
    getValue = __webpack_require__(187);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(33),
    getRawTag = __webpack_require__(184),
    objectToString = __webpack_require__(211);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 25 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(197),
    listCacheDelete = __webpack_require__(198),
    listCacheGet = __webpack_require__(199),
    listCacheHas = __webpack_require__(200),
    listCacheSet = __webpack_require__(201);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(12);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(84);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(194);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(16);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(51);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(16),
    root = __webpack_require__(12);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(202),
    mapCacheDelete = __webpack_require__(203),
    mapCacheGet = __webpack_require__(204),
    mapCacheHas = __webpack_require__(205),
    mapCacheSet = __webpack_require__(206);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(13),
    isSymbol = __webpack_require__(51);

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),
/* 49 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),
/* 50 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(24),
    isObjectLike = __webpack_require__(25);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(149),
    baseKeys = __webpack_require__(166),
    isArrayLike = __webpack_require__(86);

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(32),
    stackClear = __webpack_require__(216),
    stackDelete = __webpack_require__(217),
    stackGet = __webpack_require__(218),
    stackHas = __webpack_require__(219),
    stackSet = __webpack_require__(220);

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(77),
    toKey = __webpack_require__(37);

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__(161),
    isObjectLike = __webpack_require__(25);

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(13),
    isKey = __webpack_require__(48),
    stringToPath = __webpack_require__(221),
    toString = __webpack_require__(230);

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(144),
    arraySome = __webpack_require__(152),
    cacheHas = __webpack_require__(174);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(318)))

/***/ }),
/* 80 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(50);

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;


/***/ }),
/* 82 */
/***/ (function(module, exports) {

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;


/***/ }),
/* 83 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),
/* 84 */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(160),
    isObjectLike = __webpack_require__(25);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(88),
    isLength = __webpack_require__(49);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(12),
    stubFalse = __webpack_require__(229);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(119)(module)))

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(24),
    isObject = __webpack_require__(50);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(164),
    baseUnary = __webpack_require__(173),
    nodeUtil = __webpack_require__(210);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.render = exports.default = undefined;

var _react = __webpack_require__(23);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(70);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _TSNEPlotContainer = __webpack_require__(123);

var _TSNEPlotContainer2 = _interopRequireDefault(_TSNEPlotContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var render = function render(options, container) {
    _reactDom2.default.render(_react2.default.createElement(_TSNEPlotContainer2.default, options), document.getElementById(container));
};

exports.default = _TSNEPlotContainer2.default;
exports.render = render;

/***/ }),
/* 121 */
/***/ (function(module, exports) {

(function(self) {
  'use strict';

  if (self.fetch) {
    return
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob()
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ]

    var isDataView = function(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj)
    }

    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name)
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value)
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift()
        return {done: value === undefined, value: value}
      }
    }

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      }
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {}

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value)
      }, this)
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1])
      }, this)
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name])
      }, this)
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name)
    value = normalizeValue(value)
    var oldValue = this.map[name]
    this.map[name] = oldValue ? oldValue+','+value : value
  }

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)]
  }

  Headers.prototype.get = function(name) {
    name = normalizeName(name)
    return this.has(name) ? this.map[name] : null
  }

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  }

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value)
  }

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this)
      }
    }
  }

  Headers.prototype.keys = function() {
    var items = []
    this.forEach(function(value, name) { items.push(name) })
    return iteratorFor(items)
  }

  Headers.prototype.values = function() {
    var items = []
    this.forEach(function(value) { items.push(value) })
    return iteratorFor(items)
  }

  Headers.prototype.entries = function() {
    var items = []
    this.forEach(function(value, name) { items.push([name, value]) })
    return iteratorFor(items)
  }

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result)
      }
      reader.onerror = function() {
        reject(reader.error)
      }
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsArrayBuffer(blob)
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsText(blob)
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf)
    var chars = new Array(view.length)

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i])
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength)
      view.set(new Uint8Array(buf))
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false

    this._initBody = function(body) {
      this._bodyInit = body
      if (!body) {
        this._bodyText = ''
      } else if (typeof body === 'string') {
        this._bodyText = body
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString()
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer)
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer])
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body)
      } else {
        throw new Error('unsupported BodyInit type')
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8')
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type)
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
        }
      }
    }

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this)
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      }

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      }
    }

    this.text = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    }

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      }
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    }

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

  function normalizeMethod(method) {
    var upcased = method.toUpperCase()
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(input, options) {
    options = options || {}
    var body = options.body

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url
      this.credentials = input.credentials
      if (!options.headers) {
        this.headers = new Headers(input.headers)
      }
      this.method = input.method
      this.mode = input.mode
      if (!body && input._bodyInit != null) {
        body = input._bodyInit
        input.bodyUsed = true
      }
    } else {
      this.url = String(input)
    }

    this.credentials = options.credentials || this.credentials || 'omit'
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers)
    }
    this.method = normalizeMethod(options.method || this.method || 'GET')
    this.mode = options.mode || this.mode || null
    this.referrer = null

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body)
  }

  Request.prototype.clone = function() {
    return new Request(this, { body: this._bodyInit })
  }

  function decode(body) {
    var form = new FormData()
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers()
    rawHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':')
      var key = parts.shift().trim()
      if (key) {
        var value = parts.join(':').trim()
        headers.append(key, value)
      }
    })
    return headers
  }

  Body.call(Request.prototype)

  function Response(bodyInit, options) {
    if (!options) {
      options = {}
    }

    this.type = 'default'
    this.status = 'status' in options ? options.status : 200
    this.ok = this.status >= 200 && this.status < 300
    this.statusText = 'statusText' in options ? options.statusText : 'OK'
    this.headers = new Headers(options.headers)
    this.url = options.url || ''
    this._initBody(bodyInit)
  }

  Body.call(Response.prototype)

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  }

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''})
    response.type = 'error'
    return response
  }

  var redirectStatuses = [301, 302, 303, 307, 308]

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  }

  self.Headers = Headers
  self.Request = Request
  self.Response = Response

  self.fetch = function(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init)
      var xhr = new XMLHttpRequest()

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        }
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
        var body = 'response' in xhr ? xhr.response : xhr.responseText
        resolve(new Response(body, options))
      }

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.open(request.method, request.url, true)

      if (request.credentials === 'include') {
        xhr.withCredentials = true
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob'
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
    })
  }
  self.fetch.polyfill = true
})(typeof self !== 'undefined' ? self : this);


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(23);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(45);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactHighcharts = __webpack_require__(304);

var _reactHighcharts2 = _interopRequireDefault(_reactHighcharts);

var _reactAddonsShallowCompare = __webpack_require__(233);

var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var baseOptions = {
    credits: {
        enabled: false
    },
    chart: {
        type: 'scatter',
        zoomType: 'xy',
        borderWidth: 2,
        borderColor: '#30426A'
    },
    title: {
        text: ''
    },
    tooltip: {
        formatter: function formatter() {
            return '<b>' + undefined.point.name + '</b>';
        }
    },
    xAxis: {
        title: {
            enabled: true,
            text: 'X'
        }
    },
    yAxis: {
        title: {
            text: 'Y'
        }
    },
    legend: {
        layout: 'vertical',
        floating: false,
        align: 'right',
        verticalAlign: 'middle'
    },
    plotOptions: {
        scatter: {
            turboThreshold: 0,
            marker: {
                lineWidth: 1,
                lineColor: 'black'
            }
        },
        series: {
            color: 'grey'
        }
    }
};

var ScatterPlot = function (_React$Component) {
    _inherits(ScatterPlot, _React$Component);

    function ScatterPlot(props) {
        _classCallCheck(this, ScatterPlot);

        return _possibleConstructorReturn(this, (ScatterPlot.__proto__ || Object.getPrototypeOf(ScatterPlot)).call(this, props));
    }

    _createClass(ScatterPlot, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            return (0, _reactAddonsShallowCompare2.default)(this, nextProps, nextState);
        }
    }, {
        key: 'render',
        value: function render() {
            var config = Object.assign({}, baseOptions, this.props.options, { series: this.props.dataset });

            return _react2.default.createElement(_reactHighcharts2.default, {
                config: config,
                ref: 'chart' });
        }
    }]);

    return ScatterPlot;
}(_react2.default.Component);

ScatterPlot.propTypes = {
    dataset: _propTypes2.default.array.isRequired,
    options: _propTypes2.default.object.isRequired
};

exports.default = ScatterPlot;

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(23);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(45);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ScatterPlot = __webpack_require__(122);

var _ScatterPlot2 = _interopRequireDefault(_ScatterPlot);

var _groupBy2 = __webpack_require__(223);

var _groupBy3 = _interopRequireDefault(_groupBy2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var referencePlotOptions = {
    chart: {
        width: 520,
        type: "scatter",
        zoomType: "xy",
        borderWidth: 2,
        borderColor: "#30426A"
    },
    xAxis: {
        title: {
            text: "Latent Variable 1"
        }
    },
    yAxis: {
        title: {
            text: "Latent Variable 2"
        }
    },
    title: {
        text: "Single Cells - t-SNE based on expression similarity"
    },
    tooltip: {
        formatter: function formatter() {
            return '<b>' + this.point.label + '</b>';
        }
    }
};

var getSeriesMap = function getSeriesMap(clustersData, clustersChosen) {
    return new Map(clustersData[clustersChosen] || []);
};

var colors = ['red', '#7cb5ec', '#90ed7d', '#f7a35c', '#8085e9', '#f15c80', '#e4d354', '#2b908f', '#f45b5b', '#91e8e1'];

var getDataSeries = function getDataSeries(m) {
    var seriesGroups = (0, _groupBy3.default)(__webpack_require__(319), function (point) {
        return m.get(point.label);
    });
    var result = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = Object.keys(seriesGroups)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var ix = _step.value;

            result[ix] = {
                name: "Cluster " + ix,
                color: colors[ix],
                data: seriesGroups[ix]
            };
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return result;
};

var TSNEPlotContainer = function (_React$Component) {
    _inherits(TSNEPlotContainer, _React$Component);

    function TSNEPlotContainer(props) {
        _classCallCheck(this, TSNEPlotContainer);

        return _possibleConstructorReturn(this, (TSNEPlotContainer.__proto__ || Object.getPrototypeOf(TSNEPlotContainer)).call(this, props));
    }

    _createClass(TSNEPlotContainer, [{
        key: 'render',
        value: function render() {
            var clusterOptions = Object.keys(this.props.clustersData).sort().map(function (name, ix) {
                return _react2.default.createElement(
                    'option',
                    { key: ix, value: name },
                    name
                );
            });

            var clusterSelected = this.props.clusterId ? this.props.clusterId : Object.keys(this.props.clustersData)[0];

            return _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                    'div',
                    { className: 'columns small-5' },
                    _react2.default.createElement(
                        'label',
                        null,
                        'Clustering: ',
                        this.props.clusterId
                    ),
                    _react2.default.createElement(
                        'select',
                        { value: clusterSelected, onChange: this.props.handleOptionsChange },
                        clusterOptions
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'columns small-12' },
                    _react2.default.createElement(_ScatterPlot2.default, { dataset: getDataSeries(getSeriesMap(this.props.clustersData, clusterSelected)),
                        options: referencePlotOptions
                    })
                )
            );
        }
    }]);

    return TSNEPlotContainer;
}(_react2.default.Component);

TSNEPlotContainer.propTypes = {
    clustersData: _propTypes2.default.object.isRequired,
    clusterId: _propTypes2.default.string,
    handleOptionsChange: _propTypes2.default.func.isRequired
};

exports.default = TSNEPlotContainer;

/***/ }),
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */
/***/ (function(module, exports) {

/*
 Highcharts JS v4.2.7 (2016-09-21)

 (c) 2009-2016 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(D,ea){typeof module==="object"&&module.exports?module.exports=D.document?ea(D):ea:D.Highcharts=ea(D)})(typeof window!=="undefined"?window:this,function(D){function ea(a,b){var c="Highcharts error #"+a+": www.highcharts.com/errors/"+a;if(b)throw Error(c);D.console&&console.log(c)}function tb(a,b,c){this.options=b;this.elem=a;this.prop=c}function E(){var a,b=arguments,c,d={},e=function(a,b){var c,d;typeof a!=="object"&&(a={});for(d in b)b.hasOwnProperty(d)&&(c=b[d],a[d]=u.isObject(c,!0)&&
d!=="renderTo"&&typeof c.nodeType!=="number"?e(a[d]||{},c):b[d]);return a};b[0]===!0&&(d=b[1],b=Array.prototype.slice.call(b,2));c=b.length;for(a=0;a<c;a++)d=e(d,b[a]);return d}function B(a,b){return parseInt(a,b||10)}function ya(a){return typeof a==="string"}function za(a){a=Object.prototype.toString.call(a);return a==="[object Array]"||a==="[object Array Iterator]"}function ra(a,b){for(var c=a.length;c--;)if(a[c]===b){a.splice(c,1);break}}function s(a){return a!==z&&a!==null}function O(a,b,c){var d,
e;if(ya(b))s(c)?a.setAttribute(b,c):a&&a.getAttribute&&(e=a.getAttribute(b));else if(s(b)&&ba(b))for(d in b)a.setAttribute(d,b[d]);return e}function ua(a){return za(a)?a:[a]}function Sa(a,b,c){if(b)return setTimeout(a,b,c);a.call(0,c)}function M(a,b){if(Aa&&!fa&&b&&b.opacity!==z)b.filter="alpha(opacity="+b.opacity*100+")";x(a.style,b)}function ca(a,b,c,d,e){a=y.createElement(a);b&&x(a,b);e&&M(a,{padding:0,border:"none",margin:0});c&&M(a,c);d&&d.appendChild(a);return a}function sa(a,b){var c=function(){};
c.prototype=new a;x(c.prototype,b);return c}function Ga(a,b,c){return Array((b||2)+1-String(a).length).join(c||0)+a}function ab(a){return(bb&&bb(a)||ub||0)*6E4}function Na(a,b){for(var c="{",d=!1,e,f,g,h,i,j=[];(c=a.indexOf(c))!==-1;){e=a.slice(0,c);if(d){f=e.split(":");g=f.shift().split(".");i=g.length;e=b;for(h=0;h<i;h++)e=e[g[h]];if(f.length)f=f.join(":"),g=/\.([0-9])/,h=T.lang,i=void 0,/f$/.test(f)?(i=(i=f.match(g))?i[1]:-1,e!==null&&(e=u.numberFormat(e,i,h.decimalPoint,f.indexOf(",")>-1?h.thousandsSep:
""))):e=Ta(f,e)}j.push(e);a=a.slice(c+1);c=(d=!d)?"}":"{"}j.push(a);return j.join("")}function vb(a){return Z.pow(10,V(Z.log(a)/Z.LN10))}function wb(a,b,c,d,e){var f,g=a,c=p(c,1);f=a/c;b||(b=[1,2,2.5,5,10],d===!1&&(c===1?b=[1,2,5,10]:c<=0.1&&(b=[1/c])));for(d=0;d<b.length;d++)if(g=b[d],e&&g*c>=a||!e&&f<=(b[d]+(b[d+1]||b[d]))/2)break;g*=c;return g}function kb(a,b){var c=a.length,d,e;for(e=0;e<c;e++)a[e].safeI=e;a.sort(function(a,c){d=b(a,c);return d===0?a.safeI-c.safeI:d});for(e=0;e<c;e++)delete a[e].safeI}
function Oa(a){for(var b=a.length,c=a[0];b--;)a[b]<c&&(c=a[b]);return c}function Ha(a){for(var b=a.length,c=a[0];b--;)a[b]>c&&(c=a[b]);return c}function Ua(a,b){for(var c in a)a[c]&&a[c]!==b&&a[c].destroy&&a[c].destroy(),delete a[c]}function Va(a){lb||(lb=ca(Pa));a&&lb.appendChild(a);lb.innerHTML=""}function $(a,b){return parseFloat(a.toPrecision(b||14))}function cb(a,b){b.renderer.globalAnimation=p(a,b.animation)}function Wa(a){return ba(a)?E(a):{duration:a?500:0}}function Hb(){var a=T.global,b=
a.useUTC,c=b?"getUTC":"get",d=b?"setUTC":"set";ma=a.Date||D.Date;ub=b&&a.timezoneOffset;bb=b&&a.getTimezoneOffset;mb=function(a,c,d,h,i,j){var k;b?(k=ma.UTC.apply(0,arguments),k+=ab(k)):k=(new ma(a,c,p(d,1),p(h,0),p(i,0),p(j,0))).getTime();return k};xb=c+"Minutes";yb=c+"Hours";zb=c+"Day";Xa=c+"Date";db=c+"Month";eb=c+"FullYear";Ib=d+"Milliseconds";Jb=d+"Seconds";Kb=d+"Minutes";Lb=d+"Hours";nb=d+"Date";Ab=d+"Month";Bb=d+"FullYear"}function na(a){if(!(this instanceof na))return new na(a);this.init(a)}
function J(){}function Ya(a,b,c,d){this.axis=a;this.pos=b;this.type=c||"";this.isNew=!0;!c&&!d&&this.addLabel()}function Mb(a,b,c,d,e){var f=a.chart.inverted;this.axis=a;this.isNegative=c;this.options=b;this.x=d;this.total=null;this.points={};this.stack=e;this.rightCliff=this.leftCliff=0;this.alignOptions={align:b.align||(f?c?"left":"right":"center"),verticalAlign:b.verticalAlign||(f?"middle":c?"bottom":"top"),y:p(b.y,f?4:c?14:-6),x:p(b.x,f?c?-6:6:0)};this.textAlign=b.textAlign||(f?c?"right":"left":
"center")}var z,y=D.document,Z=Math,C=Z.round,V=Z.floor,va=Z.ceil,t=Z.max,F=Z.min,Q=Z.abs,W=Z.cos,da=Z.sin,ta=Z.PI,ka=ta*2/360,Ba=D.navigator&&D.navigator.userAgent||"",Nb=D.opera,Aa=/(msie|trident|edge)/i.test(Ba)&&!Nb,ob=y&&y.documentMode===8,pb=!Aa&&/AppleWebKit/.test(Ba),Qa=/Firefox/.test(Ba),Ob=/(Mobile|Android|Windows Phone)/.test(Ba),Ia="http://www.w3.org/2000/svg",fa=y&&y.createElementNS&&!!y.createElementNS(Ia,"svg").createSVGRect,Sb=Qa&&parseInt(Ba.split("Firefox/")[1],10)<4,la=y&&!fa&&
!Aa&&!!y.createElement("canvas").getContext,fb,gb,Pb={},Cb=0,lb,T,Ta,G,Ca=function(){},U=[],hb=0,Pa="div",X="M",S="L",Tb=/[0-9]/g,qb=["plotTop","marginRight","marginBottom","plotLeft"],ma,mb,ub,bb,xb,yb,zb,Xa,db,eb,Ib,Jb,Kb,Lb,nb,Ab,Bb,L={},u;u=D.Highcharts?ea(16,!0):{win:D};u.seriesTypes=L;var Ja=[],oa,pa,q,Da,Db,Ea,N,Y,H,Za,Ka;tb.prototype={dSetter:function(){var a=this.paths[0],b=this.paths[1],c=[],d=this.now,e=a.length,f;if(d===1)c=this.toD;else if(e===b.length&&d<1)for(;e--;)f=parseFloat(a[e]),
c[e]=isNaN(f)?a[e]:d*parseFloat(b[e]-f)+f;else c=b;this.elem.attr("d",c)},update:function(){var a=this.elem,b=this.prop,c=this.now,d=this.options.step;if(this[b+"Setter"])this[b+"Setter"]();else a.attr?a.element&&a.attr(b,c):a.style[b]=c+this.unit;d&&d.call(a,c,this)},run:function(a,b,c){var d=this,e=function(a){return e.stopped?!1:d.step(a)},f;this.startTime=+new ma;this.start=a;this.end=b;this.unit=c;this.now=this.start;this.pos=0;e.elem=this.elem;if(e()&&Ja.push(e)===1)e.timerId=setInterval(function(){for(f=
0;f<Ja.length;f++)Ja[f]()||Ja.splice(f--,1);Ja.length||clearInterval(e.timerId)},13)},step:function(a){var b=+new ma,c,d=this.options;c=this.elem;var e=d.complete,f=d.duration,g=d.curAnim,h;if(c.attr&&!c.element)c=!1;else if(a||b>=f+this.startTime){this.now=this.end;this.pos=1;this.update();a=g[this.prop]=!0;for(h in g)g[h]!==!0&&(a=!1);a&&e&&e.call(c);c=!1}else this.pos=d.easing((b-this.startTime)/f),this.now=this.start+(this.end-this.start)*this.pos,this.update(),c=!0;return c},initPath:function(a,
b,c){function d(a){for(n=a.length;n--;)(a[n]===X||a[n]===S)&&a.splice(n+1,0,a[n+1],a[n+2],a[n+1],a[n+2])}function e(a,b){for(;a.length<l;){a[0]=b[l-a.length];var c=a.slice(0,k);[].splice.apply(a,[0,0].concat(c));o&&(c=a.slice(a.length-k),[].splice.apply(a,[a.length,0].concat(c)),n--)}a[0]="M"}function f(a,b){for(var c=(l-a.length)/k;c>0&&c--;)m=a.slice().splice(a.length/A-k,k*A),m[0]=b[l-k-c*k],j&&(m[k-6]=m[k-2],m[k-5]=m[k-1]),[].splice.apply(a,[a.length/A,0].concat(m)),o&&c--}var b=b||"",g,h=a.startX,
i=a.endX,j=b.indexOf("C")>-1,k=j?7:3,l,m,n,b=b.split(" "),c=c.slice(),o=a.isArea,A=o?2:1,r;j&&(d(b),d(c));if(h&&i){for(n=0;n<h.length;n++)if(h[n]===i[0]){g=n;break}else if(h[0]===i[i.length-h.length+n]){g=n;r=!0;break}g===void 0&&(b=[])}b.length&&u.isNumber(g)&&(l=c.length+g*A*k,r?(e(b,c),f(c,b)):(e(c,b),f(b,c)));return[b,c]}};var x=u.extend=function(a,b){var c;a||(a={});for(c in b)a[c]=b[c];return a},ba=u.isObject=function(a,b){return a&&typeof a==="object"&&(!b||!za(a))},I=u.isNumber=function(a){return typeof a===
"number"&&!isNaN(a)},p=u.pick=function(){var a=arguments,b,c,d=a.length;for(b=0;b<d;b++)if(c=a[b],c!==z&&c!==null)return c},ib=u.wrap=function(a,b,c){var d=a[b];a[b]=function(){var a=Array.prototype.slice.call(arguments);a.unshift(d);return c.apply(this,a)}};Ta=function(a,b,c){if(!s(b)||isNaN(b))return T.lang.invalidDate||"";var a=p(a,"%Y-%m-%d %H:%M:%S"),d=new ma(b-ab(b)),e,f=d[yb](),g=d[zb](),h=d[Xa](),i=d[db](),j=d[eb](),k=T.lang,l=k.weekdays,m=k.shortWeekdays,d=x({a:m?m[g]:l[g].substr(0,3),A:l[g],
d:Ga(h),e:Ga(h,2," "),w:g,b:k.shortMonths[i],B:k.months[i],m:Ga(i+1),y:j.toString().substr(2,2),Y:j,H:Ga(f),k:f,I:Ga(f%12||12),l:f%12||12,M:Ga(d[xb]()),p:f<12?"AM":"PM",P:f<12?"am":"pm",S:Ga(d.getSeconds()),L:Ga(C(b%1E3),3)},u.dateFormats);for(e in d)for(;a.indexOf("%"+e)!==-1;)a=a.replace("%"+e,typeof d[e]==="function"?d[e](b):d[e]);return c?a.substr(0,1).toUpperCase()+a.substr(1):a};G={millisecond:1,second:1E3,minute:6E4,hour:36E5,day:864E5,week:6048E5,month:24192E5,year:314496E5};u.numberFormat=
function(a,b,c,d){var a=+a||0,b=+b,e=T.lang,f=(a.toString().split(".")[1]||"").length,g,h,i=Math.abs(a);b===-1?b=Math.min(f,20):I(b)||(b=2);g=String(B(i.toFixed(b)));h=g.length>3?g.length%3:0;c=p(c,e.decimalPoint);d=p(d,e.thousandsSep);a=a<0?"-":"";a+=h?g.substr(0,h)+d:"";a+=g.substr(h).replace(/(\d{3})(?=\d)/g,"$1"+d);b&&(d=Math.abs(i-g+Math.pow(10,-Math.max(b,f)-1)),a+=c+d.toFixed(b).slice(2));return a};Math.easeInOutSine=function(a){return-0.5*(Math.cos(Math.PI*a)-1)};oa=function(a,b){var c;if(b===
"width")return Math.min(a.offsetWidth,a.scrollWidth)-oa(a,"padding-left")-oa(a,"padding-right");else if(b==="height")return Math.min(a.offsetHeight,a.scrollHeight)-oa(a,"padding-top")-oa(a,"padding-bottom");return(c=D.getComputedStyle(a,void 0))&&B(c.getPropertyValue(b))};pa=function(a,b){return b.indexOf?b.indexOf(a):[].indexOf.call(b,a)};Da=function(a,b){return[].filter.call(a,b)};Ea=function(a,b){for(var c=[],d=0,e=a.length;d<e;d++)c[d]=b.call(a[d],a[d],d,a);return c};Db=function(a){var b=y.documentElement,
a=a.getBoundingClientRect();return{top:a.top+(D.pageYOffset||b.scrollTop)-(b.clientTop||0),left:a.left+(D.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}};Ka=function(a){for(var b=Ja.length;b--;)if(Ja[b].elem===a)Ja[b].stopped=!0};q=function(a,b){return Array.prototype.forEach.call(a,b)};N=function(a,b,c){function d(b){b.target=b.srcElement||D;c.call(a,b)}var e=a.hcEvents=a.hcEvents||{};if(a.addEventListener)a.addEventListener(b,c,!1);else if(a.attachEvent){if(!a.hcEventsIE)a.hcEventsIE={};a.hcEventsIE[c.toString()]=
d;a.attachEvent("on"+b,d)}e[b]||(e[b]=[]);e[b].push(c)};Y=function(a,b,c){function d(b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.attachEvent&&(c=a.hcEventsIE[c.toString()],a.detachEvent("on"+b,c))}function e(){var c,e,f;if(a.nodeName)for(f in b?(c={},c[b]=!0):c=g,c)if(g[f])for(e=g[f].length;e--;)d(f,g[f][e])}var f,g=a.hcEvents,h;if(g)b?(f=g[b]||[],c?(h=pa(c,f),h>-1&&(f.splice(h,1),g[b]=f),d(b,c)):(e(),g[b]=[])):(e(),a.hcEvents={})};H=function(a,b,c,d){var e;e=a.hcEvents;var f,g,c=c||
{};if(y.createEvent&&(a.dispatchEvent||a.fireEvent))e=y.createEvent("Events"),e.initEvent(b,!0,!0),e.target=a,x(e,c),a.dispatchEvent?a.dispatchEvent(e):a.fireEvent(b,e);else if(e){e=e[b]||[];f=e.length;if(!c.preventDefault)c.preventDefault=function(){c.defaultPrevented=!0};c.target=a;if(!c.type)c.type=b;for(b=0;b<f;b++)(g=e[b])&&g.call(a,c)===!1&&c.preventDefault()}d&&!c.defaultPrevented&&d(c)};Za=function(a,b,c){var d,e="",f,g,h;ba(c)||(d=arguments,c={duration:d[2],easing:d[3],complete:d[4]});if(!I(c.duration))c.duration=
400;c.easing=typeof c.easing==="function"?c.easing:Math[c.easing]||Math.easeInOutSine;c.curAnim=E(b);for(h in b)g=new tb(a,c,h),f=null,h==="d"?(g.paths=g.initPath(a,a.d,b.d),g.toD=b.d,d=0,f=1):a.attr?d=a.attr(h):(d=parseFloat(oa(a,h))||0,h!=="opacity"&&(e="px")),f||(f=b[h]),f.match&&f.match("px")&&(f=f.replace(/px/g,"")),g.run(d,f,e)};if(D.jQuery)D.jQuery.fn.highcharts=function(){var a=[].slice.call(arguments);if(this[0])return a[0]?(new (u[ya(a[0])?a.shift():"Chart"])(this[0],a[0],a[1]),this):U[O(this[0],
"data-highcharts-chart")]};y&&!y.defaultView&&(oa=function(a,b){var c;c={width:"clientWidth",height:"clientHeight"}[b];if(a.style[b])return B(a.style[b]);b==="opacity"&&(b="filter");if(c)return a.style.zoom=1,Math.max(a[c]-2*oa(a,"padding"),0);c=a.currentStyle[b.replace(/\-(\w)/g,function(a,b){return b.toUpperCase()})];b==="filter"&&(c=c.replace(/alpha\(opacity=([0-9]+)\)/,function(a,b){return b/100}));return c===""?1:B(c)});Array.prototype.forEach||(q=function(a,b){for(var c=0,d=a.length;c<d;c++)if(b.call(a[c],
a[c],c,a)===!1)return c});Array.prototype.indexOf||(pa=function(a,b){var c,d=0;if(b)for(c=b.length;d<c;d++)if(b[d]===a)return d;return-1});Array.prototype.filter||(Da=function(a,b){for(var c=[],d=0,e=a.length;d<e;d++)b(a[d],d)&&c.push(a[d]);return c});u.Fx=tb;u.inArray=pa;u.each=q;u.grep=Da;u.offset=Db;u.map=Ea;u.addEvent=N;u.removeEvent=Y;u.fireEvent=H;u.animate=Za;u.animObject=Wa;u.stop=Ka;T={colors:"#7cb5ec,#434348,#90ed7d,#f7a35c,#8085e9,#f15c80,#e4d354,#2b908f,#f45b5b,#91e8e1".split(","),symbols:["circle",
"diamond","square","triangle","triangle-down"],lang:{loading:"Loading...",months:"January,February,March,April,May,June,July,August,September,October,November,December".split(","),shortMonths:"Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),weekdays:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),decimalPoint:".",numericSymbols:"k,M,G,T,P,E".split(","),resetZoom:"Reset zoom",resetZoomTitle:"Reset zoom level 1:1",thousandsSep:" "},global:{useUTC:!0,canvasToolsURL:"http://code.highcharts.com/modules/canvas-tools.js",
VMLRadialGradientURL:"http://code.highcharts.com/4.2.7/gfx/vml-radial-gradient.png"},chart:{borderColor:"#4572A7",borderRadius:0,defaultSeriesType:"line",ignoreHiddenSeries:!0,spacing:[10,10,15,10],backgroundColor:"#FFFFFF",plotBorderColor:"#C0C0C0",resetZoomButton:{theme:{zIndex:20},position:{align:"right",x:-10,y:10}},width:null,height:null},title:{text:"Chart title",align:"center",margin:15,style:{color:"#333333",fontSize:"18px"},widthAdjust:-44},subtitle:{text:"",align:"center",style:{color:"#555555"},
widthAdjust:-44},plotOptions:{line:{allowPointSelect:!1,showCheckbox:!1,animation:{duration:1E3},events:{},lineWidth:2,marker:{lineWidth:0,radius:4,lineColor:"#FFFFFF",states:{hover:{enabled:!0,lineWidthPlus:1,radiusPlus:2},select:{fillColor:"#FFFFFF",lineColor:"#000000",lineWidth:2}}},point:{events:{}},dataLabels:{align:"center",formatter:function(){return this.y===null?"":u.numberFormat(this.y,-1)},style:{color:"contrast",fontSize:"11px",fontWeight:"bold",textShadow:"0 0 6px contrast, 0 0 3px contrast"},
verticalAlign:"bottom",x:0,y:0,padding:5},cropThreshold:300,pointRange:0,softThreshold:!0,states:{hover:{lineWidthPlus:1,marker:{},halo:{size:10,opacity:0.25}},select:{marker:{}}},stickyTracking:!0,turboThreshold:1E3}},labels:{style:{position:"absolute",color:"#3E576F"}},legend:{enabled:!0,align:"center",layout:"horizontal",labelFormatter:function(){return this.name},borderColor:"#909090",borderRadius:0,navigation:{activeColor:"#274b6d",inactiveColor:"#CCC"},shadow:!1,itemStyle:{color:"#333333",fontSize:"12px",
fontWeight:"bold"},itemHoverStyle:{color:"#000"},itemHiddenStyle:{color:"#CCC"},itemCheckboxStyle:{position:"absolute",width:"13px",height:"13px"},symbolPadding:5,verticalAlign:"bottom",x:0,y:0,title:{style:{fontWeight:"bold"}}},loading:{labelStyle:{fontWeight:"bold",position:"relative",top:"45%"},style:{position:"absolute",backgroundColor:"white",opacity:0.5,textAlign:"center"}},tooltip:{enabled:!0,animation:fa,backgroundColor:"rgba(249, 249, 249, .85)",borderWidth:1,borderRadius:3,dateTimeLabelFormats:{millisecond:"%A, %b %e, %H:%M:%S.%L",
second:"%A, %b %e, %H:%M:%S",minute:"%A, %b %e, %H:%M",hour:"%A, %b %e, %H:%M",day:"%A, %b %e, %Y",week:"Week from %A, %b %e, %Y",month:"%B %Y",year:"%Y"},footerFormat:"",headerFormat:'<span style="font-size: 10px">{point.key}</span><br/>',pointFormat:'<span style="color:{point.color}">\u25cf</span> {series.name}: <b>{point.y}</b><br/>',shadow:!0,snap:Ob?25:10,style:{color:"#333333",cursor:"default",fontSize:"12px",padding:"8px",pointerEvents:"none",whiteSpace:"nowrap"}},credits:{enabled:!0,text:"Highcharts.com",
href:"http://www.highcharts.com",position:{align:"right",x:-10,verticalAlign:"bottom",y:-5},style:{cursor:"pointer",color:"#909090",fontSize:"9px"}}};var ga=T.plotOptions,ha=ga.line;Hb();na.prototype={parsers:[{regex:/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,parse:function(a){return[B(a[1]),B(a[2]),B(a[3]),parseFloat(a[4],10)]}},{regex:/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/,parse:function(a){return[B(a[1],16),B(a[2],16),B(a[3],16),
1]}},{regex:/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,parse:function(a){return[B(a[1]),B(a[2]),B(a[3]),1]}}],init:function(a){var b,c,d,e;if((this.input=a)&&a.stops)this.stops=Ea(a.stops,function(a){return new na(a[1])});else for(d=this.parsers.length;d--&&!c;)e=this.parsers[d],(b=e.regex.exec(a))&&(c=e.parse(b));this.rgba=c||[]},get:function(a){var b=this.input,c=this.rgba,d;this.stops?(d=E(b),d.stops=[].concat(d.stops),q(this.stops,function(b,c){d.stops[c]=[d.stops[c][0],
b.get(a)]})):d=c&&I(c[0])?a==="rgb"||!a&&c[3]===1?"rgb("+c[0]+","+c[1]+","+c[2]+")":a==="a"?c[3]:"rgba("+c.join(",")+")":b;return d},brighten:function(a){var b,c=this.rgba;if(this.stops)q(this.stops,function(b){b.brighten(a)});else if(I(a)&&a!==0)for(b=0;b<3;b++)c[b]+=B(a*255),c[b]<0&&(c[b]=0),c[b]>255&&(c[b]=255);return this},setOpacity:function(a){this.rgba[3]=a;return this}};J.prototype={opacity:1,textProps:"direction,fontSize,fontWeight,fontFamily,fontStyle,color,lineHeight,width,textDecoration,textOverflow,textShadow".split(","),
init:function(a,b){this.element=b==="span"?ca(b):y.createElementNS(Ia,b);this.renderer=a},animate:function(a,b,c){b=p(b,this.renderer.globalAnimation,!0);Ka(this);if(b){if(c)b.complete=c;Za(this,a,b)}else this.attr(a,null,c);return this},colorGradient:function(a,b,c){var d=this.renderer,e,f,g,h,i,j,k,l,m,n,o,A=[],r;a.linearGradient?f="linearGradient":a.radialGradient&&(f="radialGradient");if(f){g=a[f];i=d.gradients;k=a.stops;n=c.radialReference;za(g)&&(a[f]=g={x1:g[0],y1:g[1],x2:g[2],y2:g[3],gradientUnits:"userSpaceOnUse"});
f==="radialGradient"&&n&&!s(g.gradientUnits)&&(h=g,g=E(g,d.getRadialAttr(n,h),{gradientUnits:"userSpaceOnUse"}));for(o in g)o!=="id"&&A.push(o,g[o]);for(o in k)A.push(k[o]);A=A.join(",");i[A]?n=i[A].attr("id"):(g.id=n="highcharts-"+Cb++,i[A]=j=d.createElement(f).attr(g).add(d.defs),j.radAttr=h,j.stops=[],q(k,function(a){a[1].indexOf("rgba")===0?(e=na(a[1]),l=e.get("rgb"),m=e.get("a")):(l=a[1],m=1);a=d.createElement("stop").attr({offset:a[0],"stop-color":l,"stop-opacity":m}).add(j);j.stops.push(a)}));
r="url("+d.url+"#"+n+")";c.setAttribute(b,r);c.gradient=A;a.toString=function(){return r}}},applyTextShadow:function(a){var b=this.element,c,d=a.indexOf("contrast")!==-1,e={},f=this.renderer.forExport,g=f||b.style.textShadow!==z&&!Aa;if(d)e.textShadow=a=a.replace(/contrast/g,this.renderer.getContrast(b.style.fill));if(pb||f)e.textRendering="geometricPrecision";g?this.css(e):(this.fakeTS=!0,this.ySetter=this.xSetter,c=[].slice.call(b.getElementsByTagName("tspan")),q(a.split(/\s?,\s?/g),function(a){var d=
b.firstChild,e,f,a=a.split(" ");e=a[a.length-1];(f=a[a.length-2])&&q(c,function(a,c){var g;c===0&&(a.setAttribute("x",b.getAttribute("x")),c=b.getAttribute("y"),a.setAttribute("y",c||0),c===null&&b.setAttribute("y",0));g=a.cloneNode(1);O(g,{"class":"highcharts-text-shadow",fill:e,stroke:e,"stroke-opacity":1/t(B(f),3),"stroke-width":f,"stroke-linejoin":"round"});b.insertBefore(g,d)})}))},attr:function(a,b,c){var d,e=this.element,f,g=this,h;typeof a==="string"&&b!==z&&(d=a,a={},a[d]=b);if(typeof a===
"string")g=(this[a+"Getter"]||this._defaultGetter).call(this,a,e);else{for(d in a){b=a[d];h=!1;this.symbolName&&/^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)/.test(d)&&(f||(this.symbolAttr(a),f=!0),h=!0);if(this.rotation&&(d==="x"||d==="y"))this.doTransform=!0;h||(h=this[d+"Setter"]||this._defaultSetter,h.call(this,b,d,e),this.shadows&&/^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(d)&&this.updateShadows(d,b,h))}if(this.doTransform)this.updateTransform(),this.doTransform=!1}c&&
c();return g},updateShadows:function(a,b,c){for(var d=this.shadows,e=d.length;e--;)c.call(d[e],a==="height"?Math.max(b-(d[e].cutHeight||0),0):a==="d"?this.d:b,a,d[e])},addClass:function(a){var b=this.element,c=O(b,"class")||"";c.indexOf(a)===-1&&O(b,"class",c+" "+a);return this},symbolAttr:function(a){var b=this;q("x,y,r,start,end,width,height,innerR,anchorX,anchorY".split(","),function(c){b[c]=p(a[c],b[c])});b.attr({d:b.renderer.symbols[b.symbolName](b.x,b.y,b.width,b.height,b)})},clip:function(a){return this.attr("clip-path",
a?"url("+this.renderer.url+"#"+a.id+")":"none")},crisp:function(a){var b,c={},d,e=this.strokeWidth||0;d=C(e)%2/2;a.x=V(a.x||this.x||0)+d;a.y=V(a.y||this.y||0)+d;a.width=V((a.width||this.width||0)-2*d);a.height=V((a.height||this.height||0)-2*d);a.strokeWidth=e;for(b in a)this[b]!==a[b]&&(this[b]=c[b]=a[b]);return c},css:function(a){var b=this.styles,c={},d=this.element,e,f,g="";e=!b;if(a&&a.color)a.fill=a.color;if(b)for(f in a)a[f]!==b[f]&&(c[f]=a[f],e=!0);if(e){e=this.textWidth=a&&a.width&&d.nodeName.toLowerCase()===
"text"&&B(a.width)||this.textWidth;b&&(a=x(b,c));this.styles=a;e&&(la||!fa&&this.renderer.forExport)&&delete a.width;if(Aa&&!fa)M(this.element,a);else{b=function(a,b){return"-"+b.toLowerCase()};for(f in a)g+=f.replace(/([A-Z])/g,b)+":"+a[f]+";";O(d,"style",g)}e&&this.added&&this.renderer.buildText(this)}return this},on:function(a,b){var c=this,d=c.element;gb&&a==="click"?(d.ontouchstart=function(a){c.touchEventFired=ma.now();a.preventDefault();b.call(d,a)},d.onclick=function(a){(Ba.indexOf("Android")===
-1||ma.now()-(c.touchEventFired||0)>1100)&&b.call(d,a)}):d["on"+a]=b;return this},setRadialReference:function(a){var b=this.renderer.gradients[this.element.gradient];this.element.radialReference=a;b&&b.radAttr&&b.animate(this.renderer.getRadialAttr(a,b.radAttr));return this},translate:function(a,b){return this.attr({translateX:a,translateY:b})},invert:function(){this.inverted=!0;this.updateTransform();return this},updateTransform:function(){var a=this.translateX||0,b=this.translateY||0,c=this.scaleX,
d=this.scaleY,e=this.inverted,f=this.rotation,g=this.element;e&&(a+=this.attr("width"),b+=this.attr("height"));a=["translate("+a+","+b+")"];e?a.push("rotate(90) scale(-1,1)"):f&&a.push("rotate("+f+" "+(g.getAttribute("x")||0)+" "+(g.getAttribute("y")||0)+")");(s(c)||s(d))&&a.push("scale("+p(c,1)+" "+p(d,1)+")");a.length&&g.setAttribute("transform",a.join(" "))},toFront:function(){var a=this.element;a.parentNode.appendChild(a);return this},align:function(a,b,c){var d,e,f,g,h={};e=this.renderer;f=e.alignedObjects;
if(a){if(this.alignOptions=a,this.alignByTranslate=b,!c||ya(c))this.alignTo=d=c||"renderer",ra(f,this),f.push(this),c=null}else a=this.alignOptions,b=this.alignByTranslate,d=this.alignTo;c=p(c,e[d],e);d=a.align;e=a.verticalAlign;f=(c.x||0)+(a.x||0);g=(c.y||0)+(a.y||0);if(d==="right"||d==="center")f+=(c.width-(a.width||0))/{right:1,center:2}[d];h[b?"translateX":"x"]=C(f);if(e==="bottom"||e==="middle")g+=(c.height-(a.height||0))/({bottom:1,middle:2}[e]||1);h[b?"translateY":"y"]=C(g);this[this.placed?
"animate":"attr"](h);this.placed=!0;this.alignAttr=h;return this},getBBox:function(a,b){var c,d=this.renderer,e,f,g,h=this.element,i=this.styles;e=this.textStr;var j,k=h.style,l,m=d.cache,n=d.cacheKeys,o;f=p(b,this.rotation);g=f*ka;e!==z&&(o=e.toString().replace(Tb,"0")+["",f||0,i&&i.fontSize,h.style.width].join(","));o&&!a&&(c=m[o]);if(!c){if(h.namespaceURI===Ia||d.forExport){try{l=this.fakeTS&&function(a){q(h.querySelectorAll(".highcharts-text-shadow"),function(b){b.style.display=a})},Qa&&k.textShadow?
(j=k.textShadow,k.textShadow=""):l&&l("none"),c=h.getBBox?x({},h.getBBox()):{width:h.offsetWidth,height:h.offsetHeight},j?k.textShadow=j:l&&l("")}catch(A){}if(!c||c.width<0)c={width:0,height:0}}else c=this.htmlGetBBox();if(d.isSVG){d=c.width;e=c.height;if(Aa&&i&&i.fontSize==="11px"&&e.toPrecision(3)==="16.9")c.height=e=14;if(f)c.width=Q(e*da(g))+Q(d*W(g)),c.height=Q(e*W(g))+Q(d*da(g))}if(o&&c.height>0){for(;n.length>250;)delete m[n.shift()];m[o]||n.push(o);m[o]=c}}return c},show:function(a){return this.attr({visibility:a?
"inherit":"visible"})},hide:function(){return this.attr({visibility:"hidden"})},fadeOut:function(a){var b=this;b.animate({opacity:0},{duration:a||150,complete:function(){b.attr({y:-9999})}})},add:function(a){var b=this.renderer,c=this.element,d;if(a)this.parentGroup=a;this.parentInverted=a&&a.inverted;this.textStr!==void 0&&b.buildText(this);this.added=!0;if(!a||a.handleZ||this.zIndex)d=this.zIndexSetter();d||(a?a.element:b.box).appendChild(c);if(this.onAdd)this.onAdd();return this},safeRemoveChild:function(a){var b=
a.parentNode;b&&b.removeChild(a)},destroy:function(){var a=this,b=a.element||{},c=a.shadows,d=a.renderer.isSVG&&b.nodeName==="SPAN"&&a.parentGroup,e,f;b.onclick=b.onmouseout=b.onmouseover=b.onmousemove=b.point=null;Ka(a);if(a.clipPath)a.clipPath=a.clipPath.destroy();if(a.stops){for(f=0;f<a.stops.length;f++)a.stops[f]=a.stops[f].destroy();a.stops=null}a.safeRemoveChild(b);for(c&&q(c,function(b){a.safeRemoveChild(b)});d&&d.div&&d.div.childNodes.length===0;)b=d.parentGroup,a.safeRemoveChild(d.div),delete d.div,
d=b;a.alignTo&&ra(a.renderer.alignedObjects,a);for(e in a)delete a[e];return null},shadow:function(a,b,c){var d=[],e,f,g=this.element,h,i,j,k;if(a){i=p(a.width,3);j=(a.opacity||0.15)/i;k=this.parentInverted?"(-1,-1)":"("+p(a.offsetX,1)+", "+p(a.offsetY,1)+")";for(e=1;e<=i;e++){f=g.cloneNode(0);h=i*2+1-2*e;O(f,{isShadow:"true",stroke:a.color||"black","stroke-opacity":j*e,"stroke-width":h,transform:"translate"+k,fill:"none"});if(c)O(f,"height",t(O(f,"height")-h,0)),f.cutHeight=h;b?b.element.appendChild(f):
g.parentNode.insertBefore(f,g);d.push(f)}this.shadows=d}return this},xGetter:function(a){this.element.nodeName==="circle"&&(a={x:"cx",y:"cy"}[a]||a);return this._defaultGetter(a)},_defaultGetter:function(a){a=p(this[a],this.element?this.element.getAttribute(a):null,0);/^[\-0-9\.]+$/.test(a)&&(a=parseFloat(a));return a},dSetter:function(a,b,c){a&&a.join&&(a=a.join(" "));/(NaN| {2}|^$)/.test(a)&&(a="M 0 0");c.setAttribute(b,a);this[b]=a},dashstyleSetter:function(a){var b,c=this["stroke-width"];c===
"inherit"&&(c=1);if(a=a&&a.toLowerCase()){a=a.replace("shortdashdotdot","3,1,1,1,1,1,").replace("shortdashdot","3,1,1,1").replace("shortdot","1,1,").replace("shortdash","3,1,").replace("longdash","8,3,").replace(/dot/g,"1,3,").replace("dash","4,3,").replace(/,$/,"").split(",");for(b=a.length;b--;)a[b]=B(a[b])*c;a=a.join(",").replace(/NaN/g,"none");this.element.setAttribute("stroke-dasharray",a)}},alignSetter:function(a){this.element.setAttribute("text-anchor",{left:"start",center:"middle",right:"end"}[a])},
titleSetter:function(a){var b=this.element.getElementsByTagName("title")[0];b||(b=y.createElementNS(Ia,"title"),this.element.appendChild(b));b.firstChild&&b.removeChild(b.firstChild);b.appendChild(y.createTextNode(String(p(a),"").replace(/<[^>]*>/g,"")))},textSetter:function(a){if(a!==this.textStr)delete this.bBox,this.textStr=a,this.added&&this.renderer.buildText(this)},fillSetter:function(a,b,c){typeof a==="string"?c.setAttribute(b,a):a&&this.colorGradient(a,b,c)},visibilitySetter:function(a,b,
c){a==="inherit"?c.removeAttribute(b):c.setAttribute(b,a)},zIndexSetter:function(a,b){var c=this.renderer,d=this.parentGroup,c=(d||c).element||c.box,e,f,g=this.element,h;e=this.added;var i;if(s(a))g.zIndex=a,a=+a,this[b]===a&&(e=!1),this[b]=a;if(e){if((a=this.zIndex)&&d)d.handleZ=!0;d=c.childNodes;for(i=0;i<d.length&&!h;i++)if(e=d[i],f=e.zIndex,e!==g&&(B(f)>a||!s(a)&&s(f)))c.insertBefore(g,e),h=!0;h||c.appendChild(g)}return h},_defaultSetter:function(a,b,c){c.setAttribute(b,a)}};J.prototype.yGetter=
J.prototype.xGetter;J.prototype.translateXSetter=J.prototype.translateYSetter=J.prototype.rotationSetter=J.prototype.verticalAlignSetter=J.prototype.scaleXSetter=J.prototype.scaleYSetter=function(a,b){this[b]=a;this.doTransform=!0};J.prototype.opacitySetter=J.prototype.displaySetter=function(a,b,c){this[b]=a;c.setAttribute(b,a)};J.prototype["stroke-widthSetter"]=J.prototype.strokeSetter=function(a,b,c){this[b]=a;if(this.stroke&&this["stroke-width"])this.strokeWidth=this["stroke-width"],J.prototype.fillSetter.call(this,
this.stroke,"stroke",c),c.setAttribute("stroke-width",this["stroke-width"]),this.hasStroke=!0;else if(b==="stroke-width"&&a===0&&this.hasStroke)c.removeAttribute("stroke"),this.hasStroke=!1};var Fa=function(){this.init.apply(this,arguments)};Fa.prototype={Element:J,init:function(a,b,c,d,e,f){var g,d=this.createElement("svg").attr({version:"1.1"}).css(this.getStyle(d));g=d.element;a.appendChild(g);a.innerHTML.indexOf("xmlns")===-1&&O(g,"xmlns",Ia);this.isSVG=!0;this.box=g;this.boxWrapper=d;this.alignedObjects=
[];this.url=(Qa||pb)&&y.getElementsByTagName("base").length?D.location.href.replace(/#.*?$/,"").replace(/([\('\)])/g,"\\$1").replace(/ /g,"%20"):"";this.createElement("desc").add().element.appendChild(y.createTextNode("Created with Highcharts 4.2.7"));this.defs=this.createElement("defs").add();this.allowHTML=f;this.forExport=e;this.gradients={};this.cache={};this.cacheKeys=[];this.imgCount=0;this.setSize(b,c,!1);var h;if(Qa&&a.getBoundingClientRect)this.subPixelFix=b=function(){M(a,{left:0,top:0});
h=a.getBoundingClientRect();M(a,{left:va(h.left)-h.left+"px",top:va(h.top)-h.top+"px"})},b(),N(D,"resize",b)},getStyle:function(a){return this.style=x({fontFamily:'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',fontSize:"12px"},a)},isHidden:function(){return!this.boxWrapper.getBBox().width},destroy:function(){var a=this.defs;this.box=null;this.boxWrapper=this.boxWrapper.destroy();Ua(this.gradients||{});this.gradients=null;if(a)this.defs=a.destroy();this.subPixelFix&&Y(D,"resize",
this.subPixelFix);return this.alignedObjects=null},createElement:function(a){var b=new this.Element;b.init(this,a);return b},draw:function(){},getRadialAttr:function(a,b){return{cx:a[0]-a[2]/2+b.cx*a[2],cy:a[1]-a[2]/2+b.cy*a[2],r:b.r*a[2]}},buildText:function(a){for(var b=a.element,c=this,d=c.forExport,e=p(a.textStr,"").toString(),f=e.indexOf("<")!==-1,g=b.childNodes,h,i,j,k=O(b,"x"),l=a.styles,m=a.textWidth,n=l&&l.lineHeight,o=l&&l.textShadow,A=l&&l.textOverflow==="ellipsis",r=g.length,K=m&&!a.added&&
this.box,w=function(a){return n?B(n):c.fontMetrics(/(px|em)$/.test(a&&a.style.fontSize)?a.style.fontSize:l&&l.fontSize||c.style.fontSize||12,a).h},v=function(a){return a.replace(/&lt;/g,"<").replace(/&gt;/g,">")};r--;)b.removeChild(g[r]);!f&&!o&&!A&&!m&&e.indexOf(" ")===-1?b.appendChild(y.createTextNode(v(e))):(h=/<.*style="([^"]+)".*>/,i=/<.*href="(http[^"]+)".*>/,K&&K.appendChild(b),e=f?e.replace(/<(b|strong)>/g,'<span style="font-weight:bold">').replace(/<(i|em)>/g,'<span style="font-style:italic">').replace(/<a/g,
"<span").replace(/<\/(b|strong|i|em|a)>/g,"</span>").split(/<br.*?>/g):[e],e=Da(e,function(a){return a!==""}),q(e,function(e,f){var g,n=0,e=e.replace(/^\s+|\s+$/g,"").replace(/<span/g,"|||<span").replace(/<\/span>/g,"</span>|||");g=e.split("|||");q(g,function(e){if(e!==""||g.length===1){var o={},r=y.createElementNS(Ia,"tspan"),p;h.test(e)&&(p=e.match(h)[1].replace(/(;| |^)color([ :])/,"$1fill$2"),O(r,"style",p));i.test(e)&&!d&&(O(r,"onclick",'location.href="'+e.match(i)[1]+'"'),M(r,{cursor:"pointer"}));
e=v(e.replace(/<(.|\n)*?>/g,"")||" ");if(e!==" "){r.appendChild(y.createTextNode(e));if(n)o.dx=0;else if(f&&k!==null)o.x=k;O(r,o);b.appendChild(r);!n&&f&&(!fa&&d&&M(r,{display:"block"}),O(r,"dy",w(r)));if(m){for(var o=e.replace(/([^\^])-/g,"$1- ").split(" "),q=l.whiteSpace==="nowrap",K=g.length>1||f||o.length>1&&!q,Ra,s,La=[],t=w(r),x=1,C=a.rotation,u=e,z=u.length;(K||A)&&(o.length||La.length);)a.rotation=0,Ra=a.getBBox(!0),s=Ra.width,!fa&&c.forExport&&(s=c.measureSpanWidth(r.firstChild.data,a.styles)),
Ra=s>m,j===void 0&&(j=Ra),A&&j?(z/=2,u===""||!Ra&&z<0.5?o=[]:(u=e.substring(0,u.length+(Ra?-1:1)*va(z)),o=[u+(m>3?"\u2026":"")],r.removeChild(r.firstChild))):!Ra||o.length===1?(o=La,La=[],o.length&&!q&&(x++,r=y.createElementNS(Ia,"tspan"),O(r,{dy:t,x:k}),p&&O(r,"style",p),b.appendChild(r)),s>m&&(m=s)):(r.removeChild(r.firstChild),La.unshift(o.pop())),o.length&&r.appendChild(y.createTextNode(o.join(" ").replace(/- /g,"-")));a.rotation=C}n++}}})}),j&&a.attr("title",a.textStr),K&&K.removeChild(b),o&&
a.applyTextShadow&&a.applyTextShadow(o))},getContrast:function(a){a=na(a).rgba;return a[0]+a[1]+a[2]>384?"#000000":"#FFFFFF"},button:function(a,b,c,d,e,f,g,h,i){var j=this.label(a,b,c,i,null,null,null,null,"button"),k=0,l,m,n,o,A,r,a={x1:0,y1:0,x2:0,y2:1},e=E({"stroke-width":1,stroke:"#CCCCCC",fill:{linearGradient:a,stops:[[0,"#FEFEFE"],[1,"#F6F6F6"]]},r:2,padding:5,style:{color:"black"}},e);n=e.style;delete e.style;f=E(e,{stroke:"#68A",fill:{linearGradient:a,stops:[[0,"#FFF"],[1,"#ACF"]]}},f);o=
f.style;delete f.style;g=E(e,{stroke:"#68A",fill:{linearGradient:a,stops:[[0,"#9BD"],[1,"#CDF"]]}},g);A=g.style;delete g.style;h=E(e,{style:{color:"#CCC"}},h);r=h.style;delete h.style;N(j.element,Aa?"mouseover":"mouseenter",function(){k!==3&&j.attr(f).css(o)});N(j.element,Aa?"mouseout":"mouseleave",function(){k!==3&&(l=[e,f,g][k],m=[n,o,A][k],j.attr(l).css(m))});j.setState=function(a){(j.state=k=a)?a===2?j.attr(g).css(A):a===3&&j.attr(h).css(r):j.attr(e).css(n)};return j.on("click",function(a){k!==
3&&d.call(j,a)}).attr(e).css(x({cursor:"default"},n))},crispLine:function(a,b){a[1]===a[4]&&(a[1]=a[4]=C(a[1])-b%2/2);a[2]===a[5]&&(a[2]=a[5]=C(a[2])+b%2/2);return a},path:function(a){var b={fill:"none"};za(a)?b.d=a:ba(a)&&x(b,a);return this.createElement("path").attr(b)},circle:function(a,b,c){a=ba(a)?a:{x:a,y:b,r:c};b=this.createElement("circle");b.xSetter=b.ySetter=function(a,b,c){c.setAttribute("c"+b,a)};return b.attr(a)},arc:function(a,b,c,d,e,f){if(ba(a))b=a.y,c=a.r,d=a.innerR,e=a.start,f=a.end,
a=a.x;a=this.symbol("arc",a||0,b||0,c||0,c||0,{innerR:d||0,start:e||0,end:f||0});a.r=c;return a},rect:function(a,b,c,d,e,f){var e=ba(a)?a.r:e,g=this.createElement("rect"),a=ba(a)?a:a===z?{}:{x:a,y:b,width:t(c,0),height:t(d,0)};if(f!==z)g.strokeWidth=f,a=g.crisp(a);if(e)a.r=e;g.rSetter=function(a,b,c){O(c,{rx:a,ry:a})};return g.attr(a)},setSize:function(a,b,c){var d=this.alignedObjects,e=d.length;this.width=a;this.height=b;for(this.boxWrapper[p(c,!0)?"animate":"attr"]({width:a,height:b});e--;)d[e].align()},
g:function(a){var b=this.createElement("g");return s(a)?b.attr({"class":"highcharts-"+a}):b},image:function(a,b,c,d,e){var f={preserveAspectRatio:"none"};arguments.length>1&&x(f,{x:b,y:c,width:d,height:e});f=this.createElement("image").attr(f);f.element.setAttributeNS?f.element.setAttributeNS("http://www.w3.org/1999/xlink","href",a):f.element.setAttribute("hc-svg-href",a);return f},symbol:function(a,b,c,d,e,f){var g=this,h,i=this.symbols[a],i=i&&i(C(b),C(c),d,e,f),j=/^url\((.*?)\)$/,k,l;if(i)h=this.path(i),
x(h,{symbolName:a,x:b,y:c,width:d,height:e}),f&&x(h,f);else if(j.test(a))l=function(a,b){a.element&&(a.attr({width:b[0],height:b[1]}),a.alignByTranslate||a.translate(C((d-b[0])/2),C((e-b[1])/2)))},k=a.match(j)[1],a=Pb[k]||f&&f.width&&f.height&&[f.width,f.height],h=this.image(k).attr({x:b,y:c}),h.isImg=!0,a?l(h,a):(h.attr({width:0,height:0}),ca("img",{onload:function(){var a=U[g.chartIndex];this.width===0&&(M(this,{position:"absolute",top:"-999em"}),y.body.appendChild(this));l(h,Pb[k]=[this.width,
this.height]);this.parentNode&&this.parentNode.removeChild(this);g.imgCount--;if(!g.imgCount&&a&&a.onload)a.onload()},src:k}),this.imgCount++);return h},symbols:{circle:function(a,b,c,d){var e=0.166*c;return[X,a+c/2,b,"C",a+c+e,b,a+c+e,b+d,a+c/2,b+d,"C",a-e,b+d,a-e,b,a+c/2,b,"Z"]},square:function(a,b,c,d){return[X,a,b,S,a+c,b,a+c,b+d,a,b+d,"Z"]},triangle:function(a,b,c,d){return[X,a+c/2,b,S,a+c,b+d,a,b+d,"Z"]},"triangle-down":function(a,b,c,d){return[X,a,b,S,a+c,b,a+c/2,b+d,"Z"]},diamond:function(a,
b,c,d){return[X,a+c/2,b,S,a+c,b+d/2,a+c/2,b+d,a,b+d/2,"Z"]},arc:function(a,b,c,d,e){var f=e.start,c=e.r||c||d,g=e.end-0.001,d=e.innerR,h=e.open,i=W(f),j=da(f),k=W(g),g=da(g),e=e.end-f<ta?0:1;return[X,a+c*i,b+c*j,"A",c,c,0,e,1,a+c*k,b+c*g,h?X:S,a+d*k,b+d*g,"A",d,d,0,e,0,a+d*i,b+d*j,h?"":"Z"]},callout:function(a,b,c,d,e){var f=F(e&&e.r||0,c,d),g=f+6,h=e&&e.anchorX,e=e&&e.anchorY,i;i=["M",a+f,b,"L",a+c-f,b,"C",a+c,b,a+c,b,a+c,b+f,"L",a+c,b+d-f,"C",a+c,b+d,a+c,b+d,a+c-f,b+d,"L",a+f,b+d,"C",a,b+d,a,b+
d,a,b+d-f,"L",a,b+f,"C",a,b,a,b,a+f,b];h&&h>c&&e>b+g&&e<b+d-g?i.splice(13,3,"L",a+c,e-6,a+c+6,e,a+c,e+6,a+c,b+d-f):h&&h<0&&e>b+g&&e<b+d-g?i.splice(33,3,"L",a,e+6,a-6,e,a,e-6,a,b+f):e&&e>d&&h>a+g&&h<a+c-g?i.splice(23,3,"L",h+6,b+d,h,b+d+6,h-6,b+d,a+f,b+d):e&&e<0&&h>a+g&&h<a+c-g&&i.splice(3,3,"L",h-6,b,h,b-6,h+6,b,c-f,b);return i}},clipRect:function(a,b,c,d){var e="highcharts-"+Cb++,f=this.createElement("clipPath").attr({id:e}).add(this.defs),a=this.rect(a,b,c,d,0).add(f);a.id=e;a.clipPath=f;a.count=
0;return a},text:function(a,b,c,d){var e=la||!fa&&this.forExport,f={};if(d&&(this.allowHTML||!this.forExport))return this.html(a,b,c);f.x=Math.round(b||0);if(c)f.y=Math.round(c);if(a||a===0)f.text=a;a=this.createElement("text").attr(f);e&&a.css({position:"absolute"});if(!d)a.xSetter=function(a,b,c){var d=c.getElementsByTagName("tspan"),e,f=c.getAttribute(b),m;for(m=0;m<d.length;m++)e=d[m],e.getAttribute(b)===f&&e.setAttribute(b,a);c.setAttribute(b,a)};return a},fontMetrics:function(a,b){var c,d,a=
a||this.style.fontSize;!a&&b&&D.getComputedStyle&&(b=b.element||b,a=(c=D.getComputedStyle(b,""))&&c.fontSize);a=/px/.test(a)?B(a):/em/.test(a)?parseFloat(a)*12:12;c=a<24?a+3:C(a*1.2);d=C(c*0.8);return{h:c,b:d,f:a}},rotCorr:function(a,b,c){var d=a;b&&c&&(d=t(d*W(b*ka),4));return{x:-a/3*da(b*ka),y:d}},label:function(a,b,c,d,e,f,g,h,i){var j=this,k=j.g(i),l=j.text("",0,0,g).attr({zIndex:1}),m,n,o=0,A=3,r=0,p,w,v,La,rb=0,aa={},t,u=/^url\((.*?)\)$/.test(d),y=u,F,D,B;F=function(){var a,b;a=l.element.style;
n=(p===void 0||w===void 0||k.styles.textAlign)&&s(l.textStr)&&l.getBBox();k.width=(p||n.width||0)+2*A+r;k.height=(w||n.height||0)+2*A;t=A+j.fontMetrics(a&&a.fontSize,l).b;if(y){if(!m)a=rb,b=(h?-t:0)+rb,k.box=m=j.symbols[d]||u?j.symbol(d,a,b,k.width,k.height,aa):j.rect(a,b,k.width,k.height,0,aa["stroke-width"]),m.isImg||m.attr("fill","none"),m.add(k);m.isImg||m.attr(x({width:C(k.width),height:C(k.height)},aa));aa=null}};D=function(){var a=k.styles,a=a&&a.textAlign,b=r+A,c;c=h?0:t;if(s(p)&&n&&(a===
"center"||a==="right"))b+={center:0.5,right:1}[a]*(p-n.width);if(b!==l.x||c!==l.y)l.attr("x",b),c!==z&&l.attr("y",c);l.x=b;l.y=c};B=function(a,b){m?m.attr(a,b):aa[a]=b};k.onAdd=function(){l.add(k);k.attr({text:a||a===0?a:"",x:b,y:c});m&&s(e)&&k.attr({anchorX:e,anchorY:f})};k.widthSetter=function(a){p=a};k.heightSetter=function(a){w=a};k.paddingSetter=function(a){if(s(a)&&a!==A)A=k.padding=a,D()};k.paddingLeftSetter=function(a){s(a)&&a!==r&&(r=a,D())};k.alignSetter=function(a){a={left:0,center:0.5,
right:1}[a];a!==o&&(o=a,n&&k.attr({x:v}))};k.textSetter=function(a){a!==z&&l.textSetter(a);F();D()};k["stroke-widthSetter"]=function(a,b){a&&(y=!0);rb=a%2/2;B(b,a)};k.strokeSetter=k.fillSetter=k.rSetter=function(a,b){b==="fill"&&a&&(y=!0);B(b,a)};k.anchorXSetter=function(a,b){e=a;B(b,C(a)-rb-v)};k.anchorYSetter=function(a,b){f=a;B(b,a-La)};k.xSetter=function(a){k.x=a;o&&(a-=o*((p||n.width)+2*A));v=C(a);k.attr("translateX",v)};k.ySetter=function(a){La=k.y=C(a);k.attr("translateY",La)};var G=k.css;
return x(k,{css:function(a){if(a){var b={},a=E(a);q(k.textProps,function(c){a[c]!==z&&(b[c]=a[c],delete a[c])});l.css(b)}return G.call(k,a)},getBBox:function(){return{width:n.width+2*A,height:n.height+2*A,x:n.x-A,y:n.y-A}},shadow:function(a){m&&m.shadow(a);return k},destroy:function(){Y(k.element,"mouseenter");Y(k.element,"mouseleave");l&&(l=l.destroy());m&&(m=m.destroy());J.prototype.destroy.call(k);k=j=F=D=B=null}})}};fb=Fa;x(J.prototype,{htmlCss:function(a){var b=this.element;if(b=a&&b.tagName===
"SPAN"&&a.width)delete a.width,this.textWidth=b,this.updateTransform();if(a&&a.textOverflow==="ellipsis")a.whiteSpace="nowrap",a.overflow="hidden";this.styles=x(this.styles,a);M(this.element,a);return this},htmlGetBBox:function(){var a=this.element;if(a.nodeName==="text")a.style.position="absolute";return{x:a.offsetLeft,y:a.offsetTop,width:a.offsetWidth,height:a.offsetHeight}},htmlUpdateTransform:function(){if(this.added){var a=this.renderer,b=this.element,c=this.translateX||0,d=this.translateY||
0,e=this.x||0,f=this.y||0,g=this.textAlign||"left",h={left:0,center:0.5,right:1}[g],i=this.shadows,j=this.styles;M(b,{marginLeft:c,marginTop:d});i&&q(i,function(a){M(a,{marginLeft:c+1,marginTop:d+1})});this.inverted&&q(b.childNodes,function(c){a.invertChild(c,b)});if(b.tagName==="SPAN"){var i=this.rotation,k=B(this.textWidth),l=j&&j.whiteSpace,m=[i,g,b.innerHTML,this.textWidth,this.textAlign].join(",");if(m!==this.cTT){j=a.fontMetrics(b.style.fontSize).b;s(i)&&this.setSpanRotation(i,h,j);M(b,{width:"",
whiteSpace:l||"nowrap"});if(b.offsetWidth>k&&/[ \-]/.test(b.textContent||b.innerText))M(b,{width:k+"px",display:"block",whiteSpace:l||"normal"});this.getSpanCorrection(b.offsetWidth,j,h,i,g)}M(b,{left:e+(this.xCorr||0)+"px",top:f+(this.yCorr||0)+"px"});if(pb)j=b.offsetHeight;this.cTT=m}}else this.alignOnAdd=!0},setSpanRotation:function(a,b,c){var d={},e=Aa?"-ms-transform":pb?"-webkit-transform":Qa?"MozTransform":Nb?"-o-transform":"";d[e]=d.transform="rotate("+a+"deg)";d[e+(Qa?"Origin":"-origin")]=
d.transformOrigin=b*100+"% "+c+"px";M(this.element,d)},getSpanCorrection:function(a,b,c){this.xCorr=-a*c;this.yCorr=-b}});x(Fa.prototype,{html:function(a,b,c){var d=this.createElement("span"),e=d.element,f=d.renderer,g=f.isSVG,h=function(a,b){q(["display","opacity","visibility"],function(c){ib(a,c+"Setter",function(a,c,d,e){a.call(this,c,d,e);b[d]=c})})};d.textSetter=function(a){a!==e.innerHTML&&delete this.bBox;e.innerHTML=this.textStr=a;d.htmlUpdateTransform()};g&&h(d,d.element.style);d.xSetter=
d.ySetter=d.alignSetter=d.rotationSetter=function(a,b){b==="align"&&(b="textAlign");d[b]=a;d.htmlUpdateTransform()};d.attr({text:a,x:C(b),y:C(c)}).css({position:"absolute",fontFamily:this.style.fontFamily,fontSize:this.style.fontSize});e.style.whiteSpace="nowrap";d.css=d.htmlCss;if(g)d.add=function(a){var b,c=f.box.parentNode,g=[];if(this.parentGroup=a){if(b=a.div,!b){for(;a;)g.push(a),a=a.parentGroup;q(g.reverse(),function(a){var d,e=O(a.element,"class");e&&(e={className:e});b=a.div=a.div||ca(Pa,
e,{position:"absolute",left:(a.translateX||0)+"px",top:(a.translateY||0)+"px",display:a.display,opacity:a.opacity,pointerEvents:a.styles&&a.styles.pointerEvents},b||c);d=b.style;x(a,{translateXSetter:function(b,c){d.left=b+"px";a[c]=b;a.doTransform=!0},translateYSetter:function(b,c){d.top=b+"px";a[c]=b;a.doTransform=!0}});h(a,d)})}}else b=c;b.appendChild(e);d.added=!0;d.alignOnAdd&&d.htmlUpdateTransform();return d};return d}});var P;if(!fa&&!la){P={init:function(a,b){var c=["<",b,' filled="f" stroked="f"'],
d=["position: ","absolute",";"],e=b===Pa;(b==="shape"||e)&&d.push("left:0;top:0;width:1px;height:1px;");d.push("visibility: ",e?"hidden":"visible");c.push(' style="',d.join(""),'"/>');if(b)c=e||b==="span"||b==="img"?c.join(""):a.prepVML(c),this.element=ca(c);this.renderer=a},add:function(a){var b=this.renderer,c=this.element,d=b.box,e=a&&a.inverted,d=a?a.element||a:d;if(a)this.parentGroup=a;e&&b.invertChild(c,d);d.appendChild(c);this.added=!0;this.alignOnAdd&&!this.deferUpdateTransform&&this.updateTransform();
if(this.onAdd)this.onAdd();return this},updateTransform:J.prototype.htmlUpdateTransform,setSpanRotation:function(){var a=this.rotation,b=W(a*ka),c=da(a*ka);M(this.element,{filter:a?["progid:DXImageTransform.Microsoft.Matrix(M11=",b,", M12=",-c,", M21=",c,", M22=",b,", sizingMethod='auto expand')"].join(""):"none"})},getSpanCorrection:function(a,b,c,d,e){var f=d?W(d*ka):1,g=d?da(d*ka):0,h=p(this.elemHeight,this.element.offsetHeight),i;this.xCorr=f<0&&-a;this.yCorr=g<0&&-h;i=f*g<0;this.xCorr+=g*b*(i?
1-c:c);this.yCorr-=f*b*(d?i?c:1-c:1);e&&e!=="left"&&(this.xCorr-=a*c*(f<0?-1:1),d&&(this.yCorr-=h*c*(g<0?-1:1)),M(this.element,{textAlign:e}))},pathToVML:function(a){for(var b=a.length,c=[];b--;)if(I(a[b]))c[b]=C(a[b]*10)-5;else if(a[b]==="Z")c[b]="x";else if(c[b]=a[b],a.isArc&&(a[b]==="wa"||a[b]==="at"))c[b+5]===c[b+7]&&(c[b+7]+=a[b+7]>a[b+5]?1:-1),c[b+6]===c[b+8]&&(c[b+8]+=a[b+8]>a[b+6]?1:-1);return c.join(" ")||"x"},clip:function(a){var b=this,c;a?(c=a.members,ra(c,b),c.push(b),b.destroyClip=function(){ra(c,
b)},a=a.getCSS(b)):(b.destroyClip&&b.destroyClip(),a={clip:ob?"inherit":"rect(auto)"});return b.css(a)},css:J.prototype.htmlCss,safeRemoveChild:function(a){a.parentNode&&Va(a)},destroy:function(){this.destroyClip&&this.destroyClip();return J.prototype.destroy.apply(this)},on:function(a,b){this.element["on"+a]=function(){var a=D.event;a.target=a.srcElement;b(a)};return this},cutOffPath:function(a,b){var c,a=a.split(/[ ,]/);c=a.length;if(c===9||c===11)a[c-4]=a[c-2]=B(a[c-2])-10*b;return a.join(" ")},
shadow:function(a,b,c){var d=[],e,f=this.element,g=this.renderer,h,i=f.style,j,k=f.path,l,m,n,o;k&&typeof k.value!=="string"&&(k="x");m=k;if(a){n=p(a.width,3);o=(a.opacity||0.15)/n;for(e=1;e<=3;e++){l=n*2+1-2*e;c&&(m=this.cutOffPath(k.value,l+0.5));j=['<shape isShadow="true" strokeweight="',l,'" filled="false" path="',m,'" coordsize="10 10" style="',f.style.cssText,'" />'];h=ca(g.prepVML(j),null,{left:B(i.left)+p(a.offsetX,1),top:B(i.top)+p(a.offsetY,1)});if(c)h.cutOff=l+1;j=['<stroke color="',a.color||
"black",'" opacity="',o*e,'"/>'];ca(g.prepVML(j),null,null,h);b?b.element.appendChild(h):f.parentNode.insertBefore(h,f);d.push(h)}this.shadows=d}return this},updateShadows:Ca,setAttr:function(a,b){ob?this.element[a]=b:this.element.setAttribute(a,b)},classSetter:function(a){this.element.className=a},dashstyleSetter:function(a,b,c){(c.getElementsByTagName("stroke")[0]||ca(this.renderer.prepVML(["<stroke/>"]),null,null,c))[b]=a||"solid";this[b]=a},dSetter:function(a,b,c){var d=this.shadows,a=a||[];this.d=
a.join&&a.join(" ");c.path=a=this.pathToVML(a);if(d)for(c=d.length;c--;)d[c].path=d[c].cutOff?this.cutOffPath(a,d[c].cutOff):a;this.setAttr(b,a)},fillSetter:function(a,b,c){var d=c.nodeName;if(d==="SPAN")c.style.color=a;else if(d!=="IMG")c.filled=a!=="none",this.setAttr("fillcolor",this.renderer.color(a,c,b,this))},"fill-opacitySetter":function(a,b,c){ca(this.renderer.prepVML(["<",b.split("-")[0],' opacity="',a,'"/>']),null,null,c)},opacitySetter:Ca,rotationSetter:function(a,b,c){c=c.style;this[b]=
c[b]=a;c.left=-C(da(a*ka)+1)+"px";c.top=C(W(a*ka))+"px"},strokeSetter:function(a,b,c){this.setAttr("strokecolor",this.renderer.color(a,c,b,this))},"stroke-widthSetter":function(a,b,c){c.stroked=!!a;this[b]=a;I(a)&&(a+="px");this.setAttr("strokeweight",a)},titleSetter:function(a,b){this.setAttr(b,a)},visibilitySetter:function(a,b,c){a==="inherit"&&(a="visible");this.shadows&&q(this.shadows,function(c){c.style[b]=a});c.nodeName==="DIV"&&(a=a==="hidden"?"-999em":0,ob||(c.style[b]=a?"visible":"hidden"),
b="top");c.style[b]=a},displaySetter:function(a,b,c){c.style[b]=a},xSetter:function(a,b,c){this[b]=a;b==="x"?b="left":b==="y"&&(b="top");this.updateClipping?(this[b]=a,this.updateClipping()):c.style[b]=a},zIndexSetter:function(a,b,c){c.style[b]=a}};P["stroke-opacitySetter"]=P["fill-opacitySetter"];u.VMLElement=P=sa(J,P);P.prototype.ySetter=P.prototype.widthSetter=P.prototype.heightSetter=P.prototype.xSetter;var Eb={Element:P,isIE8:Ba.indexOf("MSIE 8.0")>-1,init:function(a,b,c,d){var e;this.alignedObjects=
[];d=this.createElement(Pa).css(x(this.getStyle(d),{position:"relative"}));e=d.element;a.appendChild(d.element);this.isVML=!0;this.box=e;this.boxWrapper=d;this.gradients={};this.cache={};this.cacheKeys=[];this.imgCount=0;this.setSize(b,c,!1);if(!y.namespaces.hcv){y.namespaces.add("hcv","urn:schemas-microsoft-com:vml");try{y.createStyleSheet().cssText="hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "}catch(f){y.styleSheets[0].cssText+="hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "}}},
isHidden:function(){return!this.box.offsetWidth},clipRect:function(a,b,c,d){var e=this.createElement(),f=ba(a);return x(e,{members:[],count:0,left:(f?a.x:a)+1,top:(f?a.y:b)+1,width:(f?a.width:c)-1,height:(f?a.height:d)-1,getCSS:function(a){var b=a.element,c=b.nodeName,a=a.inverted,d=this.top-(c==="shape"?b.offsetTop:0),e=this.left,b=e+this.width,f=d+this.height,d={clip:"rect("+C(a?e:d)+"px,"+C(a?f:b)+"px,"+C(a?b:f)+"px,"+C(a?d:e)+"px)"};!a&&ob&&c==="DIV"&&x(d,{width:b+"px",height:f+"px"});return d},
updateClipping:function(){q(e.members,function(a){a.element&&a.css(e.getCSS(a))})}})},color:function(a,b,c,d){var e=this,f,g=/^rgba/,h,i,j="none";a&&a.linearGradient?i="gradient":a&&a.radialGradient&&(i="pattern");if(i){var k,l,m=a.linearGradient||a.radialGradient,n,o,A,r,p,w="",a=a.stops,v,s=[],t=function(){h=['<fill colors="'+s.join(",")+'" opacity="',A,'" o:opacity2="',o,'" type="',i,'" ',w,'focus="100%" method="any" />'];ca(e.prepVML(h),null,null,b)};n=a[0];v=a[a.length-1];n[0]>0&&a.unshift([0,
n[1]]);v[0]<1&&a.push([1,v[1]]);q(a,function(a,b){g.test(a[1])?(f=na(a[1]),k=f.get("rgb"),l=f.get("a")):(k=a[1],l=1);s.push(a[0]*100+"% "+k);b?(A=l,r=k):(o=l,p=k)});if(c==="fill")if(i==="gradient")c=m.x1||m[0]||0,a=m.y1||m[1]||0,n=m.x2||m[2]||0,m=m.y2||m[3]||0,w='angle="'+(90-Z.atan((m-a)/(n-c))*180/ta)+'"',t();else{var j=m.r,aa=j*2,x=j*2,u=m.cx,C=m.cy,z=b.radialReference,y,j=function(){z&&(y=d.getBBox(),u+=(z[0]-y.x)/y.width-0.5,C+=(z[1]-y.y)/y.height-0.5,aa*=z[2]/y.width,x*=z[2]/y.height);w='src="'+
T.global.VMLRadialGradientURL+'" size="'+aa+","+x+'" origin="0.5,0.5" position="'+u+","+C+'" color2="'+p+'" ';t()};d.added?j():d.onAdd=j;j=r}else j=k}else if(g.test(a)&&b.tagName!=="IMG")f=na(a),d[c+"-opacitySetter"](f.get("a"),c,b),j=f.get("rgb");else{j=b.getElementsByTagName(c);if(j.length)j[0].opacity=1,j[0].type="solid";j=a}return j},prepVML:function(a){var b=this.isIE8,a=a.join("");b?(a=a.replace("/>",' xmlns="urn:schemas-microsoft-com:vml" />'),a=a.indexOf('style="')===-1?a.replace("/>",' style="display:inline-block;behavior:url(#default#VML);" />'):
a.replace('style="','style="display:inline-block;behavior:url(#default#VML);')):a=a.replace("<","<hcv:");return a},text:Fa.prototype.html,path:function(a){var b={coordsize:"10 10"};za(a)?b.d=a:ba(a)&&x(b,a);return this.createElement("shape").attr(b)},circle:function(a,b,c){var d=this.symbol("circle");if(ba(a))c=a.r,b=a.y,a=a.x;d.isCircle=!0;d.r=c;return d.attr({x:a,y:b})},g:function(a){var b;a&&(b={className:"highcharts-"+a,"class":"highcharts-"+a});return this.createElement(Pa).attr(b)},image:function(a,
b,c,d,e){var f=this.createElement("img").attr({src:a});arguments.length>1&&f.attr({x:b,y:c,width:d,height:e});return f},createElement:function(a){return a==="rect"?this.symbol(a):Fa.prototype.createElement.call(this,a)},invertChild:function(a,b){var c=this,d=b.style,e=a.tagName==="IMG"&&a.style;M(a,{flip:"x",left:B(d.width)-(e?B(e.top):1),top:B(d.height)-(e?B(e.left):1),rotation:-90});q(a.childNodes,function(b){c.invertChild(b,a)})},symbols:{arc:function(a,b,c,d,e){var f=e.start,g=e.end,h=e.r||c||
d,c=e.innerR,d=W(f),i=da(f),j=W(g),k=da(g);if(g-f===0)return["x"];f=["wa",a-h,b-h,a+h,b+h,a+h*d,b+h*i,a+h*j,b+h*k];e.open&&!c&&f.push("e",X,a,b);f.push("at",a-c,b-c,a+c,b+c,a+c*j,b+c*k,a+c*d,b+c*i,"x","e");f.isArc=!0;return f},circle:function(a,b,c,d,e){e&&(c=d=2*e.r);e&&e.isCircle&&(a-=c/2,b-=d/2);return["wa",a,b,a+c,b+d,a+c,b+d/2,a+c,b+d/2,"e"]},rect:function(a,b,c,d,e){return Fa.prototype.symbols[!s(e)||!e.r?"square":"callout"].call(0,a,b,c,d,e)}}};u.VMLRenderer=P=function(){this.init.apply(this,
arguments)};P.prototype=E(Fa.prototype,Eb);fb=P}Fa.prototype.measureSpanWidth=function(a,b){var c=y.createElement("span"),d;d=y.createTextNode(a);c.appendChild(d);M(c,b);this.box.appendChild(c);d=c.offsetWidth;Va(c);return d};var Qb;if(la)u.CanVGRenderer=P=function(){Ia="http://www.w3.org/1999/xhtml"},P.prototype.symbols={},Qb=function(){function a(){var a=b.length,d;for(d=0;d<a;d++)b[d]();b=[]}var b=[];return{push:function(c,d){if(b.length===0){var e=y.getElementsByTagName("head")[0],f=y.createElement("script");
f.type="text/javascript";f.src=d;f.onload=a;e.appendChild(f)}b.push(c)}}}(),fb=P;Ya.prototype={addLabel:function(){var a=this.axis,b=a.options,c=a.chart,d=a.categories,e=a.names,f=this.pos,g=b.labels,h=a.tickPositions,i=f===h[0],j=f===h[h.length-1],e=d?p(d[f],e[f],f):f,d=this.label,h=h.info,k;a.isDatetimeAxis&&h&&(k=b.dateTimeLabelFormats[h.higherRanks[f]||h.unitName]);this.isFirst=i;this.isLast=j;b=a.labelFormatter.call({axis:a,chart:c,isFirst:i,isLast:j,dateTimeLabelFormat:k,value:a.isLog?$(a.lin2log(e)):
e});s(d)?d&&d.attr({text:b}):(this.labelLength=(this.label=d=s(b)&&g.enabled?c.renderer.text(b,0,0,g.useHTML).css(E(g.style)).add(a.labelGroup):null)&&d.getBBox().width,this.rotation=0)},getLabelSize:function(){return this.label?this.label.getBBox()[this.axis.horiz?"height":"width"]:0},handleOverflow:function(a){var b=this.axis,c=a.x,d=b.chart.chartWidth,e=b.chart.spacing,f=p(b.labelLeft,F(b.pos,e[3])),e=p(b.labelRight,t(b.pos+b.len,d-e[1])),g=this.label,h=this.rotation,i={left:0,center:0.5,right:1}[b.labelAlign],
j=g.getBBox().width,k=b.getSlotWidth(),l=k,m=1,n,o={};if(h)h<0&&c-i*j<f?n=C(c/W(h*ka)-f):h>0&&c+i*j>e&&(n=C((d-c)/W(h*ka)));else if(d=c+(1-i)*j,c-i*j<f?l=a.x+l*(1-i)-f:d>e&&(l=e-a.x+l*i,m=-1),l=F(k,l),l<k&&b.labelAlign==="center"&&(a.x+=m*(k-l-i*(k-F(j,l)))),j>l||b.autoRotation&&g.styles.width)n=l;if(n){o.width=n;if(!b.options.labels.style.textOverflow)o.textOverflow="ellipsis";g.css(o)}},getPosition:function(a,b,c,d){var e=this.axis,f=e.chart,g=d&&f.oldChartHeight||f.chartHeight;return{x:a?e.translate(b+
c,null,null,d)+e.transB:e.left+e.offset+(e.opposite?(d&&f.oldChartWidth||f.chartWidth)-e.right-e.left:0),y:a?g-e.bottom+e.offset-(e.opposite?e.height:0):g-e.translate(b+c,null,null,d)-e.transB}},getLabelPosition:function(a,b,c,d,e,f,g,h){var i=this.axis,j=i.transA,k=i.reversed,l=i.staggerLines,m=i.tickRotCorr||{x:0,y:0},n=e.y;s(n)||(n=i.side===0?c.rotation?-8:-c.getBBox().height:i.side===2?m.y+8:W(c.rotation*ka)*(m.y-c.getBBox(!1,0).height/2));a=a+e.x+m.x-(f&&d?f*j*(k?-1:1):0);b=b+n-(f&&!d?f*j*(k?
1:-1):0);l&&(c=g/(h||1)%l,i.opposite&&(c=l-c-1),b+=c*(i.labelOffset/l));return{x:a,y:C(b)}},getMarkPath:function(a,b,c,d,e,f){return f.crispLine([X,a,b,S,a+(e?0:-c),b+(e?c:0)],d)},render:function(a,b,c){var d=this.axis,e=d.options,f=d.chart.renderer,g=d.horiz,h=this.type,i=this.label,j=this.pos,k=e.labels,l=this.gridLine,m=h?h+"Grid":"grid",n=h?h+"Tick":"tick",o=e[m+"LineWidth"],A=e[m+"LineColor"],r=e[m+"LineDashStyle"],m=d.tickSize(n),n=e[n+"Color"],q=this.mark,w=k.step,v=!0,s=d.tickmarkOffset,t=
this.getPosition(g,j,s,b),aa=t.x,t=t.y,x=g&&aa===d.pos+d.len||!g&&t===d.pos?-1:1,c=p(c,1);this.isActive=!0;if(o){j=d.getPlotLinePath(j+s,o*x,b,!0);if(l===z){l={stroke:A,"stroke-width":o};if(r)l.dashstyle=r;if(!h)l.zIndex=1;if(b)l.opacity=0;this.gridLine=l=o?f.path(j).attr(l).add(d.gridGroup):null}if(!b&&l&&j)l[this.isNew?"attr":"animate"]({d:j,opacity:c})}if(m)d.opposite&&(m[0]=-m[0]),h=this.getMarkPath(aa,t,m[0],m[1]*x,g,f),q?q.animate({d:h,opacity:c}):this.mark=f.path(h).attr({stroke:n,"stroke-width":m[1],
opacity:c}).add(d.axisGroup);if(i&&I(aa))i.xy=t=this.getLabelPosition(aa,t,i,g,k,s,a,w),this.isFirst&&!this.isLast&&!p(e.showFirstLabel,1)||this.isLast&&!this.isFirst&&!p(e.showLastLabel,1)?v=!1:g&&!d.isRadial&&!k.step&&!k.rotation&&!b&&c!==0&&this.handleOverflow(t),w&&a%w&&(v=!1),v&&I(t.y)?(t.opacity=c,i[this.isNew?"attr":"animate"](t)):(Ka(i),i.attr("y",-9999)),this.isNew=!1},destroy:function(){Ua(this,this.axis)}};u.PlotLineOrBand=function(a,b){this.axis=a;if(b)this.options=b,this.id=b.id};u.PlotLineOrBand.prototype=
{render:function(){var a=this,b=a.axis,c=b.horiz,d=a.options,e=d.label,f=a.label,g=d.width,h=d.to,i=d.from,j=s(i)&&s(h),k=d.value,l=d.dashStyle,m=a.svgElem,n=[],o,A=d.color,r=p(d.zIndex,0),q=d.events,w={},v=b.chart.renderer,n=b.log2lin;b.isLog&&(i=n(i),h=n(h),k=n(k));if(g){if(n=b.getPlotLinePath(k,g),w={stroke:A,"stroke-width":g},l)w.dashstyle=l}else if(j){n=b.getPlotBandPath(i,h,d);if(A)w.fill=A;if(d.borderWidth)w.stroke=d.borderColor,w["stroke-width"]=d.borderWidth}else return;w.zIndex=r;if(m)if(n)m.show(),
m.animate({d:n});else{if(m.hide(),f)a.label=f=f.destroy()}else if(n&&n.length&&(a.svgElem=m=v.path(n).attr(w).add(),q))for(o in d=function(b){m.on(b,function(c){q[b].apply(a,[c])})},q)d(o);e&&s(e.text)&&n&&n.length&&b.width>0&&b.height>0&&!n.flat?(e=E({align:c&&j&&"center",x:c?!j&&4:10,verticalAlign:!c&&j&&"middle",y:c?j?16:10:j?6:-4,rotation:c&&!j&&90},e),this.renderLabel(e,n,j,r)):f&&f.hide();return a},renderLabel:function(a,b,c,d){var e=this.label,f=this.axis.chart.renderer;if(!e)e={align:a.textAlign||
a.align,rotation:a.rotation},e.zIndex=d,this.label=e=f.text(a.text,0,0,a.useHTML).attr(e).css(a.style).add();d=[b[1],b[4],c?b[6]:b[1]];b=[b[2],b[5],c?b[7]:b[2]];c=Oa(d);f=Oa(b);e.align(a,!1,{x:c,y:f,width:Ha(d)-c,height:Ha(b)-f});e.show()},destroy:function(){ra(this.axis.plotLinesAndBands,this);delete this.axis;Ua(this)}};var ia=u.Axis=function(){this.init.apply(this,arguments)};ia.prototype={defaultOptions:{dateTimeLabelFormats:{millisecond:"%H:%M:%S.%L",second:"%H:%M:%S",minute:"%H:%M",hour:"%H:%M",
day:"%e. %b",week:"%e. %b",month:"%b '%y",year:"%Y"},endOnTick:!1,gridLineColor:"#D8D8D8",labels:{enabled:!0,style:{color:"#606060",cursor:"default",fontSize:"11px"},x:0},lineColor:"#C0D0E0",lineWidth:1,minPadding:0.01,maxPadding:0.01,minorGridLineColor:"#E0E0E0",minorGridLineWidth:1,minorTickColor:"#A0A0A0",minorTickLength:2,minorTickPosition:"outside",startOfWeek:1,startOnTick:!1,tickColor:"#C0D0E0",tickLength:10,tickmarkPlacement:"between",tickPixelInterval:100,tickPosition:"outside",title:{align:"middle",
style:{color:"#707070"}},type:"linear"},defaultYAxisOptions:{endOnTick:!0,gridLineWidth:1,tickPixelInterval:72,showLastLabel:!0,labels:{x:-8},lineWidth:0,maxPadding:0.05,minPadding:0.05,startOnTick:!0,title:{rotation:270,text:"Values"},stackLabels:{enabled:!1,formatter:function(){return u.numberFormat(this.total,-1)},style:E(ga.line.dataLabels.style,{color:"#000000"})}},defaultLeftAxisOptions:{labels:{x:-15},title:{rotation:270}},defaultRightAxisOptions:{labels:{x:15},title:{rotation:90}},defaultBottomAxisOptions:{labels:{autoRotation:[-45],
x:0},title:{rotation:0}},defaultTopAxisOptions:{labels:{autoRotation:[-45],x:0},title:{rotation:0}},init:function(a,b){var c=b.isX;this.chart=a;this.horiz=a.inverted?!c:c;this.isXAxis=c;this.coll=this.coll||(c?"xAxis":"yAxis");this.opposite=b.opposite;this.side=b.side||(this.horiz?this.opposite?0:2:this.opposite?1:3);this.setOptions(b);var d=this.options,e=d.type;this.labelFormatter=d.labels.formatter||this.defaultLabelFormatter;this.userOptions=b;this.minPixelPadding=0;this.reversed=d.reversed;this.visible=
d.visible!==!1;this.zoomEnabled=d.zoomEnabled!==!1;this.hasNames=e==="category"||d.categories===!0;this.categories=d.categories||this.hasNames;this.names=this.names||[];this.isLog=e==="logarithmic";this.isDatetimeAxis=e==="datetime";this.isLinked=s(d.linkedTo);this.ticks={};this.labelEdge=[];this.minorTicks={};this.plotLinesAndBands=[];this.alternateBands={};this.len=0;this.minRange=this.userMinRange=d.minRange||d.maxZoom;this.range=d.range;this.offset=d.offset||0;this.stacks={};this.oldStacks={};
this.stacksTouched=0;this.min=this.max=null;this.crosshair=p(d.crosshair,ua(a.options.tooltip.crosshairs)[c?0:1],!1);var f,d=this.options.events;pa(this,a.axes)===-1&&(c?a.axes.splice(a.xAxis.length,0,this):a.axes.push(this),a[this.coll].push(this));this.series=this.series||[];if(a.inverted&&c&&this.reversed===z)this.reversed=!0;this.removePlotLine=this.removePlotBand=this.removePlotBandOrLine;for(f in d)N(this,f,d[f]);if(this.isLog)this.val2lin=this.log2lin,this.lin2val=this.lin2log},setOptions:function(a){this.options=
E(this.defaultOptions,this.coll==="yAxis"&&this.defaultYAxisOptions,[this.defaultTopAxisOptions,this.defaultRightAxisOptions,this.defaultBottomAxisOptions,this.defaultLeftAxisOptions][this.side],E(T[this.coll],a))},defaultLabelFormatter:function(){var a=this.axis,b=this.value,c=a.categories,d=this.dateTimeLabelFormat,e=T.lang.numericSymbols,f=e&&e.length,g,h=a.options.labels.format,a=a.isLog?b:a.tickInterval;if(h)g=Na(h,this);else if(c)g=b;else if(d)g=Ta(d,b);else if(f&&a>=1E3)for(;f--&&g===z;)c=
Math.pow(1E3,f+1),a>=c&&b*10%c===0&&e[f]!==null&&b!==0&&(g=u.numberFormat(b/c,-1)+e[f]);g===z&&(g=Q(b)>=1E4?u.numberFormat(b,-1):u.numberFormat(b,-1,z,""));return g},getSeriesExtremes:function(){var a=this,b=a.chart;a.hasVisibleSeries=!1;a.dataMin=a.dataMax=a.threshold=null;a.softThreshold=!a.isXAxis;a.buildStacks&&a.buildStacks();q(a.series,function(c){if(c.visible||!b.options.chart.ignoreHiddenSeries){var d=c.options,e=d.threshold,f;a.hasVisibleSeries=!0;a.isLog&&e<=0&&(e=null);if(a.isXAxis){if(d=
c.xData,d.length)c=Oa(d),!I(c)&&!(c instanceof ma)&&(d=Da(d,function(a){return I(a)}),c=Oa(d)),a.dataMin=F(p(a.dataMin,d[0]),c),a.dataMax=t(p(a.dataMax,d[0]),Ha(d))}else{c.getExtremes();f=c.dataMax;c=c.dataMin;if(s(c)&&s(f))a.dataMin=F(p(a.dataMin,c),c),a.dataMax=t(p(a.dataMax,f),f);if(s(e))a.threshold=e;if(!d.softThreshold||a.isLog)a.softThreshold=!1}}})},translate:function(a,b,c,d,e,f){var g=this.linkedParent||this,h=1,i=0,j=d?g.oldTransA:g.transA,d=d?g.oldMin:g.min,k=g.minPixelPadding,e=(g.isOrdinal||
g.isBroken||g.isLog&&e)&&g.lin2val;if(!j)j=g.transA;if(c)h*=-1,i=g.len;g.reversed&&(h*=-1,i-=h*(g.sector||g.len));b?(a=a*h+i,a-=k,a=a/j+d,e&&(a=g.lin2val(a))):(e&&(a=g.val2lin(a)),f==="between"&&(f=0.5),a=h*(a-d)*j+i+h*k+(I(f)?j*f*g.pointRange:0));return a},toPixels:function(a,b){return this.translate(a,!1,!this.horiz,null,!0)+(b?0:this.pos)},toValue:function(a,b){return this.translate(a-(b?0:this.pos),!0,!this.horiz,null,!0)},getPlotLinePath:function(a,b,c,d,e){var f=this.chart,g=this.left,h=this.top,
i,j,k=c&&f.oldChartHeight||f.chartHeight,l=c&&f.oldChartWidth||f.chartWidth,m;i=this.transB;var n=function(a,b,c){if(a<b||a>c)d?a=F(t(b,a),c):m=!0;return a},e=p(e,this.translate(a,null,null,c)),a=c=C(e+i);i=j=C(k-e-i);I(e)?this.horiz?(i=h,j=k-this.bottom,a=c=n(a,g,g+this.width)):(a=g,c=l-this.right,i=j=n(i,h,h+this.height)):m=!0;return m&&!d?null:f.renderer.crispLine([X,a,i,S,c,j],b||1)},getLinearTickPositions:function(a,b,c){var d,e=$(V(b/a)*a),f=$(va(c/a)*a),g=[];if(b===c&&I(b))return[b];for(b=
e;b<=f;){g.push(b);b=$(b+a);if(b===d)break;d=b}return g},getMinorTickPositions:function(){var a=this.options,b=this.tickPositions,c=this.minorTickInterval,d=[],e,f=this.pointRangePadding||0;e=this.min-f;var f=this.max+f,g=f-e;if(g&&g/c<this.len/3)if(this.isLog){f=b.length;for(e=1;e<f;e++)d=d.concat(this.getLogTickPositions(c,b[e-1],b[e],!0))}else if(this.isDatetimeAxis&&a.minorTickInterval==="auto")d=d.concat(this.getTimeTicks(this.normalizeTimeTickInterval(c),e,f,a.startOfWeek));else for(b=e+(b[0]-
e)%c;b<=f;b+=c)d.push(b);d.length!==0&&this.trimTicks(d,a.startOnTick,a.endOnTick);return d},adjustForMinRange:function(){var a=this.options,b=this.min,c=this.max,d,e=this.dataMax-this.dataMin>=this.minRange,f,g,h,i,j,k;if(this.isXAxis&&this.minRange===z&&!this.isLog)s(a.min)||s(a.max)?this.minRange=null:(q(this.series,function(a){i=a.xData;for(g=j=a.xIncrement?1:i.length-1;g>0;g--)if(h=i[g]-i[g-1],f===z||h<f)f=h}),this.minRange=F(f*5,this.dataMax-this.dataMin));if(c-b<this.minRange)k=this.minRange,
d=(k-c+b)/2,d=[b-d,p(a.min,b-d)],e&&(d[2]=this.isLog?this.log2lin(this.dataMin):this.dataMin),b=Ha(d),c=[b+k,p(a.max,b+k)],e&&(c[2]=this.isLog?this.log2lin(this.dataMax):this.dataMax),c=Oa(c),c-b<k&&(d[0]=c-k,d[1]=p(a.min,c-k),b=Ha(d));this.min=b;this.max=c},getClosest:function(){var a;this.categories?a=1:q(this.series,function(b){var c=b.closestPointRange;!b.noSharedTooltip&&s(c)&&(a=s(a)?F(a,c):c)});return a},nameToX:function(a){var b=za(this.categories),c=b?this.categories:this.names,d=a.options.x,
e;a.series.requireSorting=!1;s(d)||(d=this.options.nameToX===!1?a.series.autoIncrement():pa(a.name,c));if(d===-1){if(!b)e=c.length}else e=d;this.names[e]=a.name;return e},updateNames:function(){var a=this;if(this.names.length>0)this.names.length=0,this.minRange=void 0,q(this.series||[],function(b){b.processedXData||(b.processData(),b.generatePoints());q(b.points,function(c,d){var e;if(c.options&&c.options.x===void 0&&(e=a.nameToX(c),e!==c.x))c.x=e,b.xData[d]=e})})},setAxisTranslation:function(a){var b=
this,c=b.max-b.min,d=b.axisPointRange||0,e,f=0,g=0,h=b.linkedParent,i=!!b.categories,j=b.transA,k=b.isXAxis;if(k||i||d)if(h?(f=h.minPointOffset,g=h.pointRangePadding):(e=b.getClosest(),q(b.series,function(a){var c=i?1:k?p(a.options.pointRange,e,0):b.axisPointRange||0,a=a.options.pointPlacement;d=t(d,c);b.single||(f=t(f,ya(a)?0:c/2),g=t(g,a==="on"?0:c))})),h=b.ordinalSlope&&e?b.ordinalSlope/e:1,b.minPointOffset=f*=h,b.pointRangePadding=g*=h,b.pointRange=F(d,c),k)b.closestPointRange=e;if(a)b.oldTransA=
j;b.translationSlope=b.transA=j=b.len/(c+g||1);b.transB=b.horiz?b.left:b.bottom;b.minPixelPadding=j*f},minFromRange:function(){return this.max-this.range},setTickInterval:function(a){var b=this,c=b.chart,d=b.options,e=b.isLog,f=b.log2lin,g=b.isDatetimeAxis,h=b.isXAxis,i=b.isLinked,j=d.maxPadding,k=d.minPadding,l=d.tickInterval,m=d.tickPixelInterval,n=b.categories,o=b.threshold,A=b.softThreshold,r,K,w,v;!g&&!n&&!i&&this.getTickAmount();w=p(b.userMin,d.min);v=p(b.userMax,d.max);i?(b.linkedParent=c[b.coll][d.linkedTo],
c=b.linkedParent.getExtremes(),b.min=p(c.min,c.dataMin),b.max=p(c.max,c.dataMax),d.type!==b.linkedParent.options.type&&ea(11,1)):(!A&&s(o)&&(b.dataMin>=o?(r=o,k=0):b.dataMax<=o&&(K=o,j=0)),b.min=p(w,r,b.dataMin),b.max=p(v,K,b.dataMax));if(e)!a&&F(b.min,p(b.dataMin,b.min))<=0&&ea(10,1),b.min=$(f(b.min),15),b.max=$(f(b.max),15);if(b.range&&s(b.max))b.userMin=b.min=w=t(b.min,b.minFromRange()),b.userMax=v=b.max,b.range=null;H(b,"foundExtremes");b.beforePadding&&b.beforePadding();b.adjustForMinRange();
if(!n&&!b.axisPointRange&&!b.usePercentage&&!i&&s(b.min)&&s(b.max)&&(f=b.max-b.min))!s(w)&&k&&(b.min-=f*k),!s(v)&&j&&(b.max+=f*j);if(I(d.floor))b.min=t(b.min,d.floor);if(I(d.ceiling))b.max=F(b.max,d.ceiling);if(A&&s(b.dataMin))if(o=o||0,!s(w)&&b.min<o&&b.dataMin>=o)b.min=o;else if(!s(v)&&b.max>o&&b.dataMax<=o)b.max=o;b.tickInterval=b.min===b.max||b.min===void 0||b.max===void 0?1:i&&!l&&m===b.linkedParent.options.tickPixelInterval?l=b.linkedParent.tickInterval:p(l,this.tickAmount?(b.max-b.min)/t(this.tickAmount-
1,1):void 0,n?1:(b.max-b.min)*m/t(b.len,m));h&&!a&&q(b.series,function(a){a.processData(b.min!==b.oldMin||b.max!==b.oldMax)});b.setAxisTranslation(!0);b.beforeSetTickPositions&&b.beforeSetTickPositions();if(b.postProcessTickInterval)b.tickInterval=b.postProcessTickInterval(b.tickInterval);if(b.pointRange&&!l)b.tickInterval=t(b.pointRange,b.tickInterval);a=p(d.minTickInterval,b.isDatetimeAxis&&b.closestPointRange);if(!l&&b.tickInterval<a)b.tickInterval=a;if(!g&&!e&&!l)b.tickInterval=wb(b.tickInterval,
null,vb(b.tickInterval),p(d.allowDecimals,!(b.tickInterval>0.5&&b.tickInterval<5&&b.max>1E3&&b.max<9999)),!!this.tickAmount);if(!this.tickAmount)b.tickInterval=b.unsquish();this.setTickPositions()},setTickPositions:function(){var a=this.options,b,c=a.tickPositions,d=a.tickPositioner,e=a.startOnTick,f=a.endOnTick,g;this.tickmarkOffset=this.categories&&a.tickmarkPlacement==="between"&&this.tickInterval===1?0.5:0;this.minorTickInterval=a.minorTickInterval==="auto"&&this.tickInterval?this.tickInterval/
5:a.minorTickInterval;this.tickPositions=b=c&&c.slice();if(!b&&(b=this.isDatetimeAxis?this.getTimeTicks(this.normalizeTimeTickInterval(this.tickInterval,a.units),this.min,this.max,a.startOfWeek,this.ordinalPositions,this.closestPointRange,!0):this.isLog?this.getLogTickPositions(this.tickInterval,this.min,this.max):this.getLinearTickPositions(this.tickInterval,this.min,this.max),b.length>this.len&&(b=[b[0],b.pop()]),this.tickPositions=b,d&&(d=d.apply(this,[this.min,this.max]))))this.tickPositions=
b=d;if(!this.isLinked)this.trimTicks(b,e,f),this.min===this.max&&s(this.min)&&!this.tickAmount&&(g=!0,this.min-=0.5,this.max+=0.5),this.single=g,!c&&!d&&this.adjustTickAmount()},trimTicks:function(a,b,c){var d=a[0],e=a[a.length-1],f=this.minPointOffset||0;if(b)this.min=d;else for(;this.min-f>a[0];)a.shift();if(c)this.max=e;else for(;this.max+f<a[a.length-1];)a.pop();a.length===0&&s(d)&&a.push((e+d)/2)},alignToOthers:function(){var a={},b,c=this.options;this.chart.options.chart.alignTicks!==!1&&c.alignTicks!==
!1&&q(this.chart[this.coll],function(c){var e=c.options,e=[c.horiz?e.left:e.top,e.width,e.height,e.pane].join(",");c.series.length&&(a[e]?b=!0:a[e]=1)});return b},getTickAmount:function(){var a=this.options,b=a.tickAmount,c=a.tickPixelInterval;!s(a.tickInterval)&&this.len<c&&!this.isRadial&&!this.isLog&&a.startOnTick&&a.endOnTick&&(b=2);!b&&this.alignToOthers()&&(b=va(this.len/c)+1);if(b<4)this.finalTickAmt=b,b=5;this.tickAmount=b},adjustTickAmount:function(){var a=this.tickInterval,b=this.tickPositions,
c=this.tickAmount,d=this.finalTickAmt,e=b&&b.length;if(e<c){for(;b.length<c;)b.push($(b[b.length-1]+a));this.transA*=(e-1)/(c-1);this.max=b[b.length-1]}else e>c&&(this.tickInterval*=2,this.setTickPositions());if(s(d)){for(a=c=b.length;a--;)(d===3&&a%2===1||d<=2&&a>0&&a<c-1)&&b.splice(a,1);this.finalTickAmt=z}},setScale:function(){var a,b;this.oldMin=this.min;this.oldMax=this.max;this.oldAxisLength=this.len;this.setAxisSize();b=this.len!==this.oldAxisLength;q(this.series,function(b){if(b.isDirtyData||
b.isDirty||b.xAxis.isDirty)a=!0});if(b||a||this.isLinked||this.forceRedraw||this.userMin!==this.oldUserMin||this.userMax!==this.oldUserMax||this.alignToOthers()){if(this.resetStacks&&this.resetStacks(),this.forceRedraw=!1,this.getSeriesExtremes(),this.setTickInterval(),this.oldUserMin=this.userMin,this.oldUserMax=this.userMax,!this.isDirty)this.isDirty=b||this.min!==this.oldMin||this.max!==this.oldMax}else this.cleanStacks&&this.cleanStacks()},setExtremes:function(a,b,c,d,e){var f=this,g=f.chart,
c=p(c,!0);q(f.series,function(a){delete a.kdTree});e=x(e,{min:a,max:b});H(f,"setExtremes",e,function(){f.userMin=a;f.userMax=b;f.eventArgs=e;c&&g.redraw(d)})},zoom:function(a,b){var c=this.dataMin,d=this.dataMax,e=this.options,f=F(c,p(e.min,c)),e=t(d,p(e.max,d));this.allowZoomOutside||(s(c)&&a<=f&&(a=f),s(d)&&b>=e&&(b=e));this.displayBtn=a!==z||b!==z;this.setExtremes(a,b,!1,z,{trigger:"zoom"});return!0},setAxisSize:function(){var a=this.chart,b=this.options,c=b.offsetLeft||0,d=this.horiz,e=p(b.width,
a.plotWidth-c+(b.offsetRight||0)),f=p(b.height,a.plotHeight),g=p(b.top,a.plotTop),b=p(b.left,a.plotLeft+c),c=/%$/;c.test(f)&&(f=Math.round(parseFloat(f)/100*a.plotHeight));c.test(g)&&(g=Math.round(parseFloat(g)/100*a.plotHeight+a.plotTop));this.left=b;this.top=g;this.width=e;this.height=f;this.bottom=a.chartHeight-f-g;this.right=a.chartWidth-e-b;this.len=t(d?e:f,0);this.pos=d?b:g},getExtremes:function(){var a=this.isLog,b=this.lin2log;return{min:a?$(b(this.min)):this.min,max:a?$(b(this.max)):this.max,
dataMin:this.dataMin,dataMax:this.dataMax,userMin:this.userMin,userMax:this.userMax}},getThreshold:function(a){var b=this.isLog,c=this.lin2log,d=b?c(this.min):this.min,b=b?c(this.max):this.max;a===null?a=d:d>a?a=d:b<a&&(a=b);return this.translate(a,0,1,0,1)},autoLabelAlign:function(a){a=(p(a,0)-this.side*90+720)%360;return a>15&&a<165?"right":a>195&&a<345?"left":"center"},tickSize:function(a){var b=this.options,c=b[a+"Length"],d=p(b[a+"Width"],a==="tick"&&this.isXAxis?1:0);if(d&&c)return b[a+"Position"]===
"inside"&&(c=-c),[c,d]},labelMetrics:function(){return this.chart.renderer.fontMetrics(this.options.labels.style.fontSize,this.ticks[0]&&this.ticks[0].label)},unsquish:function(){var a=this.options.labels,b=this.horiz,c=this.tickInterval,d=c,e=this.len/(((this.categories?1:0)+this.max-this.min)/c),f,g=a.rotation,h=this.labelMetrics(),i,j=Number.MAX_VALUE,k,l=function(a){a/=e||1;a=a>1?va(a):1;return a*c};b?(k=!a.staggerLines&&!a.step&&(s(g)?[g]:e<p(a.autoRotationLimit,80)&&a.autoRotation))&&q(k,function(a){var b;
if(a===g||a&&a>=-90&&a<=90)i=l(Q(h.h/da(ka*a))),b=i+Q(a/360),b<j&&(j=b,f=a,d=i)}):a.step||(d=l(h.h));this.autoRotation=k;this.labelRotation=p(f,g);return d},getSlotWidth:function(){var a=this.chart,b=this.horiz,c=this.options.labels,d=Math.max(this.tickPositions.length-(this.categories?0:1),1),e=a.margin[3];return b&&(c.step||0)<2&&!c.rotation&&(this.staggerLines||1)*a.plotWidth/d||!b&&(e&&e-a.spacing[3]||a.chartWidth*0.33)},renderUnsquish:function(){var a=this.chart,b=a.renderer,c=this.tickPositions,
d=this.ticks,e=this.options.labels,f=this.horiz,g=this.getSlotWidth(),h=t(1,C(g-2*(e.padding||5))),i={},j=this.labelMetrics(),k=e.style.textOverflow,l,m=0,n,o;if(!ya(e.rotation))i.rotation=e.rotation||0;q(c,function(a){if((a=d[a])&&a.labelLength>m)m=a.labelLength});this.maxLabelLength=m;if(this.autoRotation)m>h&&m>j.h?i.rotation=this.labelRotation:this.labelRotation=0;else if(g&&(l={width:h+"px"},!k)){l.textOverflow="clip";for(n=c.length;!f&&n--;)if(o=c[n],h=d[o].label)if(h.styles.textOverflow===
"ellipsis"?h.css({textOverflow:"clip"}):d[o].labelLength>g&&h.css({width:g+"px"}),h.getBBox().height>this.len/c.length-(j.h-j.f))h.specCss={textOverflow:"ellipsis"}}if(i.rotation&&(l={width:(m>a.chartHeight*0.5?a.chartHeight*0.33:a.chartHeight)+"px"},!k))l.textOverflow="ellipsis";if(this.labelAlign=e.align||this.autoLabelAlign(this.labelRotation))i.align=this.labelAlign;q(c,function(a){var b=(a=d[a])&&a.label;if(b)b.attr(i),l&&b.css(E(l,b.specCss)),delete b.specCss,a.rotation=i.rotation});this.tickRotCorr=
b.rotCorr(j.b,this.labelRotation||0,this.side!==0)},hasData:function(){return this.hasVisibleSeries||s(this.min)&&s(this.max)&&!!this.tickPositions},getOffset:function(){var a=this,b=a.chart,c=b.renderer,d=a.options,e=a.tickPositions,f=a.ticks,g=a.horiz,h=a.side,i=b.inverted?[1,0,3,2][h]:h,j,k,l=0,m,n=0,o=d.title,A=d.labels,r=0,K=a.opposite,w=b.axisOffset,b=b.clipOffset,v=[-1,1,1,-1][h],x,u=a.axisParent,aa=this.tickSize("tick");j=a.hasData();a.showAxis=k=j||p(d.showEmpty,!0);a.staggerLines=a.horiz&&
A.staggerLines;if(!a.axisGroup)a.gridGroup=c.g("grid").attr({zIndex:d.gridZIndex||1}).add(u),a.axisGroup=c.g("axis").attr({zIndex:d.zIndex||2}).add(u),a.labelGroup=c.g("axis-labels").attr({zIndex:A.zIndex||7}).addClass("highcharts-"+a.coll.toLowerCase()+"-labels").add(u);if(j||a.isLinked){if(q(e,function(b){f[b]?f[b].addLabel():f[b]=new Ya(a,b)}),a.renderUnsquish(),A.reserveSpace!==!1&&(h===0||h===2||{1:"left",3:"right"}[h]===a.labelAlign||a.labelAlign==="center")&&q(e,function(a){r=t(f[a].getLabelSize(),
r)}),a.staggerLines)r*=a.staggerLines,a.labelOffset=r*(a.opposite?-1:1)}else for(x in f)f[x].destroy(),delete f[x];if(o&&o.text&&o.enabled!==!1){if(!a.axisTitle)(x=o.textAlign)||(x=(g?{low:"left",middle:"center",high:"right"}:{low:K?"right":"left",middle:"center",high:K?"left":"right"})[o.align]),a.axisTitle=c.text(o.text,0,0,o.useHTML).attr({zIndex:7,rotation:o.rotation||0,align:x}).addClass("highcharts-"+this.coll.toLowerCase()+"-title").css(o.style).add(a.axisGroup),a.axisTitle.isNew=!0;if(k)l=
a.axisTitle.getBBox()[g?"height":"width"],m=o.offset,n=s(m)?0:p(o.margin,g?5:10);a.axisTitle[k?"show":"hide"](!0)}a.offset=v*p(d.offset,w[h]);a.tickRotCorr=a.tickRotCorr||{x:0,y:0};c=h===0?-a.labelMetrics().h:h===2?a.tickRotCorr.y:0;n=Math.abs(r)+n;r&&(n-=c,n+=v*(g?p(A.y,a.tickRotCorr.y+v*8):A.x));a.axisTitleMargin=p(m,n);w[h]=t(w[h],a.axisTitleMargin+l+v*a.offset,n,j&&e.length&&aa?aa[0]:0);d=d.offset?0:V(d.lineWidth/2)*2;b[i]=t(b[i],d)},getLinePath:function(a){var b=this.chart,c=this.opposite,d=
this.offset,e=this.horiz,f=this.left+(c?this.width:0)+d,d=b.chartHeight-this.bottom-(c?this.height:0)+d;c&&(a*=-1);return b.renderer.crispLine([X,e?this.left:f,e?d:this.top,S,e?b.chartWidth-this.right:f,e?d:b.chartHeight-this.bottom],a)},getTitlePosition:function(){var a=this.horiz,b=this.left,c=this.top,d=this.len,e=this.options.title,f=a?b:c,g=this.opposite,h=this.offset,i=e.x||0,j=e.y||0,k=this.chart.renderer.fontMetrics(e.style.fontSize).f,d={low:f+(a?0:d),middle:f+d/2,high:f+(a?d:0)}[e.align],
b=(a?c+this.height:b)+(a?1:-1)*(g?-1:1)*this.axisTitleMargin+(this.side===2?k:0);return{x:a?d+i:b+(g?this.width:0)+h+i,y:a?b+j-(g?this.height:0)+h:d+j}},render:function(){var a=this,b=a.chart,c=b.renderer,d=a.options,e=a.isLog,f=a.lin2log,g=a.isLinked,h=a.tickPositions,i=a.axisTitle,j=a.ticks,k=a.minorTicks,l=a.alternateBands,m=d.stackLabels,n=d.alternateGridColor,o=a.tickmarkOffset,A=d.lineWidth,r,p=b.hasRendered&&I(a.oldMin),w=a.showAxis,v=Wa(c.globalAnimation),s,t;a.labelEdge.length=0;a.overlap=
!1;q([j,k,l],function(a){for(var b in a)a[b].isActive=!1});if(a.hasData()||g){a.minorTickInterval&&!a.categories&&q(a.getMinorTickPositions(),function(b){k[b]||(k[b]=new Ya(a,b,"minor"));p&&k[b].isNew&&k[b].render(null,!0);k[b].render(null,!1,1)});if(h.length&&(q(h,function(b,c){if(!g||b>=a.min&&b<=a.max)j[b]||(j[b]=new Ya(a,b)),p&&j[b].isNew&&j[b].render(c,!0,0.1),j[b].render(c)}),o&&(a.min===0||a.single)))j[-1]||(j[-1]=new Ya(a,-1,null,!0)),j[-1].render(-1);n&&q(h,function(c,d){t=h[d+1]!==z?h[d+
1]+o:a.max-o;if(d%2===0&&c<a.max&&t<=a.max+(b.polar?-o:o))l[c]||(l[c]=new u.PlotLineOrBand(a)),s=c+o,l[c].options={from:e?f(s):s,to:e?f(t):t,color:n},l[c].render(),l[c].isActive=!0});if(!a._addedPlotLB)q((d.plotLines||[]).concat(d.plotBands||[]),function(b){a.addPlotBandOrLine(b)}),a._addedPlotLB=!0}q([j,k,l],function(a){var c,d,e=[],f=v.duration;for(c in a)if(!a[c].isActive)a[c].render(c,!1,0),a[c].isActive=!1,e.push(c);Sa(function(){for(d=e.length;d--;)a[e[d]]&&!a[e[d]].isActive&&(a[e[d]].destroy(),
delete a[e[d]])},a===l||!b.hasRendered||!f?0:f)});if(A)r=a.getLinePath(A),a.axisLine?a.axisLine.animate({d:r}):a.axisLine=c.path(r).attr({stroke:d.lineColor,"stroke-width":A,zIndex:7}).add(a.axisGroup),a.axisLine[w?"show":"hide"](!0);if(i&&w)i[i.isNew?"attr":"animate"](a.getTitlePosition()),i.isNew=!1;m&&m.enabled&&a.renderStackTotals();a.isDirty=!1},redraw:function(){this.visible&&(this.render(),q(this.plotLinesAndBands,function(a){a.render()}));q(this.series,function(a){a.isDirty=!0})},destroy:function(a){var b=
this,c=b.stacks,d,e=b.plotLinesAndBands;a||Y(b);for(d in c)Ua(c[d]),c[d]=null;q([b.ticks,b.minorTicks,b.alternateBands],function(a){Ua(a)});for(a=e.length;a--;)e[a].destroy();q("stackTotalGroup,axisLine,axisTitle,axisGroup,gridGroup,labelGroup,cross".split(","),function(a){b[a]&&(b[a]=b[a].destroy())});this._addedPlotLB=this.chart._labelPanes=this.ordinalSlope=void 0},drawCrosshair:function(a,b){var c,d=this.crosshair,e,f;a||(a=this.cross&&this.cross.e);if(!this.crosshair||(s(b)||!p(d.snap,!0))===
!1)this.hideCrosshair();else if(p(d.snap,!0)?s(b)&&(c=this.isXAxis?b.plotX:this.len-b.plotY):c=this.horiz?a.chartX-this.pos:this.len-a.chartY+this.pos,c=this.isRadial?this.getPlotLinePath(this.isXAxis?b.x:p(b.stackY,b.y))||null:this.getPlotLinePath(null,null,null,null,c)||null,c===null)this.hideCrosshair();else{e=this.categories&&!this.isRadial;f=p(d.width,e?this.transA:1);if(this.cross)this.cross.attr({d:c,visibility:"visible","stroke-width":f});else{e={"pointer-events":"none","stroke-width":f,stroke:d.color||
(e?"rgba(155,200,255,0.2)":"#C0C0C0"),zIndex:p(d.zIndex,2)};if(d.dashStyle)e.dashstyle=d.dashStyle;this.cross=this.chart.renderer.path(c).attr(e).add()}this.cross.e=a}},hideCrosshair:function(){this.cross&&this.cross.hide()}};x(ia.prototype,{getPlotBandPath:function(a,b){var c=this.getPlotLinePath(b,null,null,!0),d=this.getPlotLinePath(a,null,null,!0);d&&c?(d.flat=d.toString()===c.toString(),d.push(c[4],c[5],c[1],c[2])):d=null;return d},addPlotBand:function(a){return this.addPlotBandOrLine(a,"plotBands")},
addPlotLine:function(a){return this.addPlotBandOrLine(a,"plotLines")},addPlotBandOrLine:function(a,b){var c=(new u.PlotLineOrBand(this,a)).render(),d=this.userOptions;c&&(b&&(d[b]=d[b]||[],d[b].push(a)),this.plotLinesAndBands.push(c));return c},removePlotBandOrLine:function(a){for(var b=this.plotLinesAndBands,c=this.options,d=this.userOptions,e=b.length;e--;)b[e].id===a&&b[e].destroy();q([c.plotLines||[],d.plotLines||[],c.plotBands||[],d.plotBands||[]],function(b){for(e=b.length;e--;)b[e].id===a&&
ra(b,b[e])})}});ia.prototype.getTimeTicks=function(a,b,c,d){var e=[],f={},g=T.global.useUTC,h,i=new ma(b-ab(b)),j=a.unitRange,k=a.count;if(s(b)){i[Ib](j>=G.second?0:k*V(i.getMilliseconds()/k));if(j>=G.second)i[Jb](j>=G.minute?0:k*V(i.getSeconds()/k));if(j>=G.minute)i[Kb](j>=G.hour?0:k*V(i[xb]()/k));if(j>=G.hour)i[Lb](j>=G.day?0:k*V(i[yb]()/k));if(j>=G.day)i[nb](j>=G.month?1:k*V(i[Xa]()/k));j>=G.month&&(i[Ab](j>=G.year?0:k*V(i[db]()/k)),h=i[eb]());j>=G.year&&(h-=h%k,i[Bb](h));if(j===G.week)i[nb](i[Xa]()-
i[zb]()+p(d,1));b=1;if(ub||bb)i=i.getTime(),i=new ma(i+ab(i));h=i[eb]();for(var d=i.getTime(),l=i[db](),m=i[Xa](),n=!g||!!bb,o=(G.day+(g?ab(i):i.getTimezoneOffset()*6E4))%G.day;d<c;)e.push(d),j===G.year?d=mb(h+b*k,0):j===G.month?d=mb(h,l+b*k):n&&(j===G.day||j===G.week)?d=mb(h,l,m+b*k*(j===G.day?1:7)):d+=j*k,b++;e.push(d);q(Da(e,function(a){return j<=G.hour&&a%G.day===o}),function(a){f[a]="day"})}e.info=x(a,{higherRanks:f,totalRange:j*k});return e};ia.prototype.normalizeTimeTickInterval=function(a,
b){var c=b||[["millisecond",[1,2,5,10,20,25,50,100,200,500]],["second",[1,2,5,10,15,30]],["minute",[1,2,5,10,15,30]],["hour",[1,2,3,4,6,8,12]],["day",[1,2]],["week",[1,2]],["month",[1,2,3,4,6]],["year",null]],d=c[c.length-1],e=G[d[0]],f=d[1],g;for(g=0;g<c.length;g++)if(d=c[g],e=G[d[0]],f=d[1],c[g+1]&&a<=(e*f[f.length-1]+G[c[g+1][0]])/2)break;e===G.year&&a<5*e&&(f=[1,2,5]);c=wb(a/e,f,d[0]==="year"?t(vb(a/e),1):1);return{unitRange:e,count:c,unitName:d[0]}};ia.prototype.getLogTickPositions=function(a,
b,c,d){var e=this.options,f=this.len,g=this.lin2log,h=this.log2lin,i=[];if(!d)this._minorAutoInterval=null;if(a>=0.5)a=C(a),i=this.getLinearTickPositions(a,b,c);else if(a>=0.08)for(var f=V(b),j,k,l,m,n,e=a>0.3?[1,2,4]:a>0.15?[1,2,4,6,8]:[1,2,3,4,5,6,7,8,9];f<c+1&&!n;f++){k=e.length;for(j=0;j<k&&!n;j++)l=h(g(f)*e[j]),l>b&&(!d||m<=c)&&m!==z&&i.push(m),m>c&&(n=!0),m=l}else if(b=g(b),c=g(c),a=e[d?"minorTickInterval":"tickInterval"],a=p(a==="auto"?null:a,this._minorAutoInterval,(c-b)*(e.tickPixelInterval/
(d?5:1))/((d?f/this.tickPositions.length:f)||1)),a=wb(a,null,vb(a)),i=Ea(this.getLinearTickPositions(a,b,c),h),!d)this._minorAutoInterval=a/5;if(!d)this.tickInterval=a;return i};ia.prototype.log2lin=function(a){return Z.log(a)/Z.LN10};ia.prototype.lin2log=function(a){return Z.pow(10,a)};var Rb=u.Tooltip=function(){this.init.apply(this,arguments)};Rb.prototype={init:function(a,b){var c=b.borderWidth,d=b.style,e=B(d.padding);this.chart=a;this.options=b;this.crosshairs=[];this.now={x:0,y:0};this.isHidden=
!0;this.label=a.renderer.label("",0,0,b.shape||"callout",null,null,b.useHTML,null,"tooltip").attr({padding:e,fill:b.backgroundColor,"stroke-width":c,r:b.borderRadius,zIndex:8,display:"none"}).css(d).css({padding:0}).add();la||this.label.shadow(b.shadow);this.shared=b.shared},destroy:function(){if(this.label)this.label=this.label.destroy();clearTimeout(this.hideTimer);clearTimeout(this.tooltipTimeout)},move:function(a,b,c,d){var e=this,f=e.now,g=e.options.animation!==!1&&!e.isHidden&&(Q(a-f.x)>1||
Q(b-f.y)>1),h=e.followPointer||e.len>1;x(f,{x:g?(2*f.x+a)/3:a,y:g?(f.y+b)/2:b,anchorX:h?z:g?(2*f.anchorX+c)/3:c,anchorY:h?z:g?(f.anchorY+d)/2:d});e.label.attr(f);if(g)clearTimeout(this.tooltipTimeout),this.tooltipTimeout=setTimeout(function(){e&&e.move(a,b,c,d)},32)},hide:function(a){var b=this;clearTimeout(this.hideTimer);a=p(a,this.options.hideDelay,500);if(!this.isHidden)this.hideTimer=Sa(function(){b.label[a?"fadeOut":"hide"]();b.isHidden=!0},a)},getAnchor:function(a,b){var c,d=this.chart,e=d.inverted,
f=d.plotTop,g=d.plotLeft,h=0,i=0,j,k,a=ua(a);c=a[0].tooltipPos;this.followPointer&&b&&(b.chartX===z&&(b=d.pointer.normalize(b)),c=[b.chartX-d.plotLeft,b.chartY-f]);c||(q(a,function(a){j=a.series.yAxis;k=a.series.xAxis;h+=a.plotX+(!e&&k?k.left-g:0);i+=(a.plotLow?(a.plotLow+a.plotHigh)/2:a.plotY)+(!e&&j?j.top-f:0)}),h/=a.length,i/=a.length,c=[e?d.plotWidth-i:h,this.shared&&!e&&a.length>1&&b?b.chartY-f:e?d.plotHeight-h:i]);return Ea(c,C)},getPosition:function(a,b,c){var d=this.chart,e=this.distance,
f={},g=c.h||0,h,i=["y",d.chartHeight,b,c.plotY+d.plotTop,d.plotTop,d.plotTop+d.plotHeight],j=["x",d.chartWidth,a,c.plotX+d.plotLeft,d.plotLeft,d.plotLeft+d.plotWidth],k=!this.followPointer&&p(c.ttBelow,!d.inverted===!!c.negative),l=function(a,b,c,d,h,i){var j=c<d-e,m=d+e+c<b,l=d-e-c;d+=e;if(k&&m)f[a]=d;else if(!k&&j)f[a]=l;else if(j)f[a]=F(i-c,l-g<0?l:l-g);else if(m)f[a]=t(h,d+g+c>b?d:d+g);else return!1},m=function(a,b,c,d){var g;d<e||d>b-e?g=!1:f[a]=d<c/2?1:d>b-c/2?b-c-2:d-c/2;return g},n=function(a){var b=
i;i=j;j=b;h=a},o=function(){l.apply(0,i)!==!1?m.apply(0,j)===!1&&!h&&(n(!0),o()):h?f.x=f.y=0:(n(!0),o())};(d.inverted||this.len>1)&&n();o();return f},defaultFormatter:function(a){var b=this.points||ua(this),c;c=[a.tooltipFooterHeaderFormatter(b[0])];c=c.concat(a.bodyFormatter(b));c.push(a.tooltipFooterHeaderFormatter(b[0],!0));return c.join("")},refresh:function(a,b){var c=this.chart,d=this.label,e=this.options,f,g,h,i={},j,k=[];j=e.formatter||this.defaultFormatter;var i=c.hoverPoints,l,m=this.shared;
clearTimeout(this.hideTimer);this.followPointer=ua(a)[0].series.tooltipOptions.followPointer;h=this.getAnchor(a,b);f=h[0];g=h[1];m&&(!a.series||!a.series.noSharedTooltip)?(c.hoverPoints=a,i&&q(i,function(a){a.setState()}),q(a,function(a){a.setState("hover");k.push(a.getLabelConfig())}),i={x:a[0].category,y:a[0].y},i.points=k,this.len=k.length,a=a[0]):i=a.getLabelConfig();j=j.call(i,this);i=a.series;this.distance=p(i.tooltipOptions.distance,16);j===!1?this.hide():(this.isHidden&&(Ka(d),d.attr({opacity:1,
display:"block"}).show()),d.attr({text:j}),l=e.borderColor||a.color||i.color||"#606060",d.attr({stroke:l}),this.updatePosition({plotX:f,plotY:g,negative:a.negative,ttBelow:a.ttBelow,h:h[2]||0}),this.isHidden=!1);H(c,"tooltipRefresh",{text:j,x:f+c.plotLeft,y:g+c.plotTop,borderColor:l})},updatePosition:function(a){var b=this.chart,c=this.label,c=(this.options.positioner||this.getPosition).call(this,c.width,c.height,a);this.move(C(c.x),C(c.y||0),a.plotX+b.plotLeft,a.plotY+b.plotTop)},getXDateFormat:function(a,
b,c){var d,b=b.dateTimeLabelFormats,e=c&&c.closestPointRange,f,g={millisecond:15,second:12,minute:9,hour:6,day:3},h,i="millisecond";if(e){h=Ta("%m-%d %H:%M:%S.%L",a.x);for(f in G){if(e===G.week&&+Ta("%w",a.x)===c.options.startOfWeek&&h.substr(6)==="00:00:00.000"){f="week";break}if(G[f]>e){f=i;break}if(g[f]&&h.substr(g[f])!=="01-01 00:00:00.000".substr(g[f]))break;f!=="week"&&(i=f)}f&&(d=b[f])}else d=b.day;return d||b.year},tooltipFooterHeaderFormatter:function(a,b){var c=b?"footer":"header",d=a.series,
e=d.tooltipOptions,f=e.xDateFormat,g=d.xAxis,h=g&&g.options.type==="datetime"&&I(a.key),c=e[c+"Format"];h&&!f&&(f=this.getXDateFormat(a,e,g));h&&f&&(c=c.replace("{point.key}","{point.key:"+f+"}"));return Na(c,{point:a,series:d})},bodyFormatter:function(a){return Ea(a,function(a){var c=a.series.tooltipOptions;return(c.pointFormatter||a.point.tooltipFormatter).call(a.point,c.pointFormat)})}};var ja;gb=y&&y.documentElement.ontouchstart!==z;var $a=u.Pointer=function(a,b){this.init(a,b)};$a.prototype=
{init:function(a,b){var c=b.chart,d=c.events,e=la?"":c.zoomType,c=a.inverted,f;this.options=b;this.chart=a;this.zoomX=f=/x/.test(e);this.zoomY=e=/y/.test(e);this.zoomHor=f&&!c||e&&c;this.zoomVert=e&&!c||f&&c;this.hasZoom=f||e;this.runChartClick=d&&!!d.click;this.pinchDown=[];this.lastValidTouch={};if(u.Tooltip&&b.tooltip.enabled)a.tooltip=new Rb(a,b.tooltip),this.followTouchMove=p(b.tooltip.followTouchMove,!0);this.setDOMEvents()},normalize:function(a,b){var c,d,a=a||D.event;if(!a.target)a.target=
a.srcElement;d=a.touches?a.touches.length?a.touches.item(0):a.changedTouches[0]:a;if(!b)this.chartPosition=b=Db(this.chart.container);d.pageX===z?(c=t(a.x,a.clientX-b.left),d=a.y):(c=d.pageX-b.left,d=d.pageY-b.top);return x(a,{chartX:C(c),chartY:C(d)})},getCoordinates:function(a){var b={xAxis:[],yAxis:[]};q(this.chart.axes,function(c){b[c.isXAxis?"xAxis":"yAxis"].push({axis:c,value:c.toValue(a[c.horiz?"chartX":"chartY"])})});return b},runPointActions:function(a){var b=this.chart,c=b.series,d=b.tooltip,
e=d?d.shared:!1,f=!0,g=b.hoverPoint,h=b.hoverSeries,i,j,k,l=[],m;if(!e&&!h)for(i=0;i<c.length;i++)if(c[i].directTouch||!c[i].options.stickyTracking)c=[];h&&(e?h.noSharedTooltip:h.directTouch)&&g?l=[g]:(!e&&h&&!h.options.stickyTracking&&(c=[h]),q(c,function(b){j=b.noSharedTooltip&&e;k=!e&&b.directTouch;b.visible&&!j&&!k&&p(b.options.enableMouseTracking,!0)&&(m=b.searchPoint(a,!j&&b.kdDimensions===1))&&m.series&&l.push(m)}),l.sort(function(a,b){var c=a.distX-b.distX,d=a.dist-b.dist,e=a.series.group.zIndex>
b.series.group.zIndex?-1:1;return c!==0?c:d!==0?d:e}));if(e)for(i=l.length;i--;)(l[i].clientX!==l[0].clientX||l[i].series.noSharedTooltip)&&l.splice(i,1);if(l[0]&&(l[0]!==this.hoverPoint||d&&d.isHidden)){if(e&&!l[0].series.noSharedTooltip){for(i=0;i>=0;i--)l[i].onMouseOver(a,l[i]!==(h&&h.directTouch&&g||l[0]));if(h&&h.directTouch&&g&&g!==l[0])g.onMouseOver(a,!1);l.length&&d&&d.refresh(l.sort(function(a,b){return a.series.index-b.series.index}),a)}else if(d&&d.refresh(l[0],a),!h||!h.directTouch)l[0].onMouseOver(a);
this.prevKDPoint=l[0];f=!1}f&&(c=h&&h.tooltipOptions.followPointer,d&&c&&!d.isHidden&&(c=d.getAnchor([{}],a),d.updatePosition({plotX:c[0],plotY:c[1]})));if(!this._onDocumentMouseMove)this._onDocumentMouseMove=function(a){if(U[ja])U[ja].pointer.onDocumentMouseMove(a)},N(y,"mousemove",this._onDocumentMouseMove);q(e?l:[p(g,l[0])],function(c){q(b.axes,function(b){(!c||c.series&&c.series[b.coll]===b)&&b.drawCrosshair(a,c)})})},reset:function(a,b){var c=this.chart,d=c.hoverSeries,e=c.hoverPoint,f=c.hoverPoints,
g=c.tooltip,h=g&&g.shared?f:e;a&&h&&q(ua(h),function(b){b.series.isCartesian&&b.plotX===void 0&&(a=!1)});if(a)g&&h&&(g.refresh(h),e&&(e.setState(e.state,!0),q(c.axes,function(a){a.crosshair&&a.drawCrosshair(null,e)})));else{if(e)e.onMouseOut();f&&q(f,function(a){a.setState()});if(d)d.onMouseOut();g&&g.hide(b);if(this._onDocumentMouseMove)Y(y,"mousemove",this._onDocumentMouseMove),this._onDocumentMouseMove=null;q(c.axes,function(a){a.hideCrosshair()});this.hoverX=this.prevKDPoint=c.hoverPoints=c.hoverPoint=
null}},scaleGroups:function(a,b){var c=this.chart,d;q(c.series,function(e){d=a||e.getPlotBox();e.xAxis&&e.xAxis.zoomEnabled&&(e.group.attr(d),e.markerGroup&&(e.markerGroup.attr(d),e.markerGroup.clip(b?c.clipRect:null)),e.dataLabelsGroup&&e.dataLabelsGroup.attr(d))});c.clipRect.attr(b||c.clipBox)},dragStart:function(a){var b=this.chart;b.mouseIsDown=a.type;b.cancelClick=!1;b.mouseDownX=this.mouseDownX=a.chartX;b.mouseDownY=this.mouseDownY=a.chartY},drag:function(a){var b=this.chart,c=b.options.chart,
d=a.chartX,e=a.chartY,f=this.zoomHor,g=this.zoomVert,h=b.plotLeft,i=b.plotTop,j=b.plotWidth,k=b.plotHeight,l,m=this.selectionMarker,n=this.mouseDownX,o=this.mouseDownY,p=c.panKey&&a[c.panKey+"Key"];if(!m||!m.touch)if(d<h?d=h:d>h+j&&(d=h+j),e<i?e=i:e>i+k&&(e=i+k),this.hasDragged=Math.sqrt(Math.pow(n-d,2)+Math.pow(o-e,2)),this.hasDragged>10){l=b.isInsidePlot(n-h,o-i);if(b.hasCartesianSeries&&(this.zoomX||this.zoomY)&&l&&!p&&!m)this.selectionMarker=m=b.renderer.rect(h,i,f?1:j,g?1:k,0).attr({fill:c.selectionMarkerFill||
"rgba(69,114,167,0.25)",zIndex:7}).add();m&&f&&(d-=n,m.attr({width:Q(d),x:(d>0?0:d)+n}));m&&g&&(d=e-o,m.attr({height:Q(d),y:(d>0?0:d)+o}));l&&!m&&c.panning&&b.pan(a,c.panning)}},drop:function(a){var b=this,c=this.chart,d=this.hasPinched;if(this.selectionMarker){var e={originalEvent:a,xAxis:[],yAxis:[]},f=this.selectionMarker,g=f.attr?f.attr("x"):f.x,h=f.attr?f.attr("y"):f.y,i=f.attr?f.attr("width"):f.width,j=f.attr?f.attr("height"):f.height,k;if(this.hasDragged||d)q(c.axes,function(c){if(c.zoomEnabled&&
s(c.min)&&(d||b[{xAxis:"zoomX",yAxis:"zoomY"}[c.coll]])){var f=c.horiz,n=a.type==="touchend"?c.minPixelPadding:0,o=c.toValue((f?g:h)+n),f=c.toValue((f?g+i:h+j)-n);e[c.coll].push({axis:c,min:F(o,f),max:t(o,f)});k=!0}}),k&&H(c,"selection",e,function(a){c.zoom(x(a,d?{animation:!1}:null))});this.selectionMarker=this.selectionMarker.destroy();d&&this.scaleGroups()}if(c)M(c.container,{cursor:c._cursor}),c.cancelClick=this.hasDragged>10,c.mouseIsDown=this.hasDragged=this.hasPinched=!1,this.pinchDown=[]},
onContainerMouseDown:function(a){a=this.normalize(a);a.preventDefault&&a.preventDefault();this.dragStart(a)},onDocumentMouseUp:function(a){U[ja]&&U[ja].pointer.drop(a)},onDocumentMouseMove:function(a){var b=this.chart,c=this.chartPosition,a=this.normalize(a,c);c&&!this.inClass(a.target,"highcharts-tracker")&&!b.isInsidePlot(a.chartX-b.plotLeft,a.chartY-b.plotTop)&&this.reset()},onContainerMouseLeave:function(a){var b=U[ja];if(b&&(a.relatedTarget||a.toElement))b.pointer.reset(),b.pointer.chartPosition=
null},onContainerMouseMove:function(a){var b=this.chart;if(!s(ja)||!U[ja]||!U[ja].mouseIsDown)ja=b.index;a=this.normalize(a);a.returnValue=!1;b.mouseIsDown==="mousedown"&&this.drag(a);(this.inClass(a.target,"highcharts-tracker")||b.isInsidePlot(a.chartX-b.plotLeft,a.chartY-b.plotTop))&&!b.openMenu&&this.runPointActions(a)},inClass:function(a,b){for(var c;a;){if(c=O(a,"class")){if(c.indexOf(b)!==-1)return!0;if(c.indexOf("highcharts-container")!==-1)return!1}a=a.parentNode}},onTrackerMouseOut:function(a){var b=
this.chart.hoverSeries,a=a.relatedTarget||a.toElement;if(b&&a&&!b.options.stickyTracking&&!this.inClass(a,"highcharts-tooltip")&&!this.inClass(a,"highcharts-series-"+b.index))b.onMouseOut()},onContainerClick:function(a){var b=this.chart,c=b.hoverPoint,d=b.plotLeft,e=b.plotTop,a=this.normalize(a);b.cancelClick||(c&&this.inClass(a.target,"highcharts-tracker")?(H(c.series,"click",x(a,{point:c})),b.hoverPoint&&c.firePointEvent("click",a)):(x(a,this.getCoordinates(a)),b.isInsidePlot(a.chartX-d,a.chartY-
e)&&H(b,"click",a)))},setDOMEvents:function(){var a=this,b=a.chart.container;b.onmousedown=function(b){a.onContainerMouseDown(b)};b.onmousemove=function(b){a.onContainerMouseMove(b)};b.onclick=function(b){a.onContainerClick(b)};N(b,"mouseleave",a.onContainerMouseLeave);hb===1&&N(y,"mouseup",a.onDocumentMouseUp);if(gb)b.ontouchstart=function(b){a.onContainerTouchStart(b)},b.ontouchmove=function(b){a.onContainerTouchMove(b)},hb===1&&N(y,"touchend",a.onDocumentTouchEnd)},destroy:function(){var a;Y(this.chart.container,
"mouseleave",this.onContainerMouseLeave);hb||(Y(y,"mouseup",this.onDocumentMouseUp),Y(y,"touchend",this.onDocumentTouchEnd));clearInterval(this.tooltipTimeout);for(a in this)this[a]=null}};x(u.Pointer.prototype,{pinchTranslate:function(a,b,c,d,e,f){(this.zoomHor||this.pinchHor)&&this.pinchTranslateDirection(!0,a,b,c,d,e,f);(this.zoomVert||this.pinchVert)&&this.pinchTranslateDirection(!1,a,b,c,d,e,f)},pinchTranslateDirection:function(a,b,c,d,e,f,g,h){var i=this.chart,j=a?"x":"y",k=a?"X":"Y",l="chart"+
k,m=a?"width":"height",n=i["plot"+(a?"Left":"Top")],o,p,r=h||1,q=i.inverted,w=i.bounds[a?"h":"v"],v=b.length===1,t=b[0][l],s=c[0][l],x=!v&&b[1][l],u=!v&&c[1][l],z,c=function(){!v&&Q(t-x)>20&&(r=h||Q(s-u)/Q(t-x));p=(n-s)/r+t;o=i["plot"+(a?"Width":"Height")]/r};c();b=p;b<w.min?(b=w.min,z=!0):b+o>w.max&&(b=w.max-o,z=!0);z?(s-=0.8*(s-g[j][0]),v||(u-=0.8*(u-g[j][1])),c()):g[j]=[s,u];q||(f[j]=p-n,f[m]=o);f=q?1/r:r;e[m]=o;e[j]=b;d[q?a?"scaleY":"scaleX":"scale"+k]=r;d["translate"+k]=f*n+(s-f*t)},pinch:function(a){var b=
this,c=b.chart,d=b.pinchDown,e=a.touches,f=e.length,g=b.lastValidTouch,h=b.hasZoom,i=b.selectionMarker,j={},k=f===1&&(b.inClass(a.target,"highcharts-tracker")&&c.runTrackerClick||b.runChartClick),l={};if(f>1)b.initiated=!0;h&&b.initiated&&!k&&a.preventDefault();Ea(e,function(a){return b.normalize(a)});if(a.type==="touchstart")q(e,function(a,b){d[b]={chartX:a.chartX,chartY:a.chartY}}),g.x=[d[0].chartX,d[1]&&d[1].chartX],g.y=[d[0].chartY,d[1]&&d[1].chartY],q(c.axes,function(a){if(a.zoomEnabled){var b=
c.bounds[a.horiz?"h":"v"],d=a.minPixelPadding,e=a.toPixels(p(a.options.min,a.dataMin)),f=a.toPixels(p(a.options.max,a.dataMax)),g=F(e,f),e=t(e,f);b.min=F(a.pos,g-d);b.max=t(a.pos+a.len,e+d)}}),b.res=!0;else if(d.length){if(!i)b.selectionMarker=i=x({destroy:Ca,touch:!0},c.plotBox);b.pinchTranslate(d,e,j,i,l,g);b.hasPinched=h;b.scaleGroups(j,l);if(!h&&b.followTouchMove&&f===1)this.runPointActions(b.normalize(a));else if(b.res)b.res=!1,this.reset(!1,0)}},touch:function(a,b){var c=this.chart,d;ja=c.index;
if(a.touches.length===1)if(a=this.normalize(a),c.isInsidePlot(a.chartX-c.plotLeft,a.chartY-c.plotTop)&&!c.openMenu){b&&this.runPointActions(a);if(a.type==="touchmove")c=this.pinchDown,d=c[0]?Math.sqrt(Math.pow(c[0].chartX-a.chartX,2)+Math.pow(c[0].chartY-a.chartY,2))>=4:!1;p(d,!0)&&this.pinch(a)}else b&&this.reset();else a.touches.length===2&&this.pinch(a)},onContainerTouchStart:function(a){this.touch(a,!0)},onContainerTouchMove:function(a){this.touch(a)},onDocumentTouchEnd:function(a){U[ja]&&U[ja].pointer.drop(a)}});
if(D.PointerEvent||D.MSPointerEvent){var wa={},Fb=!!D.PointerEvent,Ub=function(){var a,b=[];b.item=function(a){return this[a]};for(a in wa)wa.hasOwnProperty(a)&&b.push({pageX:wa[a].pageX,pageY:wa[a].pageY,target:wa[a].target});return b},Gb=function(a,b,c,d){if((a.pointerType==="touch"||a.pointerType===a.MSPOINTER_TYPE_TOUCH)&&U[ja])d(a),d=U[ja].pointer,d[b]({type:c,target:a.currentTarget,preventDefault:Ca,touches:Ub()})};x($a.prototype,{onContainerPointerDown:function(a){Gb(a,"onContainerTouchStart",
"touchstart",function(a){wa[a.pointerId]={pageX:a.pageX,pageY:a.pageY,target:a.currentTarget}})},onContainerPointerMove:function(a){Gb(a,"onContainerTouchMove","touchmove",function(a){wa[a.pointerId]={pageX:a.pageX,pageY:a.pageY};if(!wa[a.pointerId].target)wa[a.pointerId].target=a.currentTarget})},onDocumentPointerUp:function(a){Gb(a,"onDocumentTouchEnd","touchend",function(a){delete wa[a.pointerId]})},batchMSEvents:function(a){a(this.chart.container,Fb?"pointerdown":"MSPointerDown",this.onContainerPointerDown);
a(this.chart.container,Fb?"pointermove":"MSPointerMove",this.onContainerPointerMove);a(y,Fb?"pointerup":"MSPointerUp",this.onDocumentPointerUp)}});ib($a.prototype,"init",function(a,b,c){a.call(this,b,c);this.hasZoom&&M(b.container,{"-ms-touch-action":"none","touch-action":"none"})});ib($a.prototype,"setDOMEvents",function(a){a.apply(this);(this.hasZoom||this.followTouchMove)&&this.batchMSEvents(N)});ib($a.prototype,"destroy",function(a){this.batchMSEvents(Y);a.call(this)})}var sb=u.Legend=function(a,
b){this.init(a,b)};sb.prototype={init:function(a,b){var c=this,d=b.itemStyle,e=b.itemMarginTop||0;this.options=b;if(b.enabled)c.itemStyle=d,c.itemHiddenStyle=E(d,b.itemHiddenStyle),c.itemMarginTop=e,c.padding=d=p(b.padding,8),c.initialItemX=d,c.initialItemY=d-5,c.maxItemWidth=0,c.chart=a,c.itemHeight=0,c.symbolWidth=p(b.symbolWidth,16),c.pages=[],c.render(),N(c.chart,"endResize",function(){c.positionCheckboxes()})},colorizeItem:function(a,b){var c=this.options,d=a.legendItem,e=a.legendLine,f=a.legendSymbol,
g=this.itemHiddenStyle.color,c=b?c.itemStyle.color:g,h=b?a.legendColor||a.color||"#CCC":g,g=a.options&&a.options.marker,i={fill:h},j;d&&d.css({fill:c,color:c});e&&e.attr({stroke:h});if(f){if(g&&f.isMarker)for(j in i.stroke=h,g=a.convertAttribs(g),g)d=g[j],d!==z&&(i[j]=d);f.attr(i)}},positionItem:function(a){var b=this.options,c=b.symbolPadding,b=!b.rtl,d=a._legendItemPos,e=d[0],d=d[1],f=a.checkbox;(a=a.legendGroup)&&a.element&&a.translate(b?e:this.legendWidth-e-2*c-4,d);if(f)f.x=e,f.y=d},destroyItem:function(a){var b=
a.checkbox;q(["legendItem","legendLine","legendSymbol","legendGroup"],function(b){a[b]&&(a[b]=a[b].destroy())});b&&Va(a.checkbox)},destroy:function(){var a=this.group,b=this.box;if(b)this.box=b.destroy();if(a)this.group=a.destroy()},positionCheckboxes:function(a){var b=this.group.alignAttr,c,d=this.clipHeight||this.legendHeight,e=this.titleHeight;if(b)c=b.translateY,q(this.allItems,function(f){var g=f.checkbox,h;g&&(h=c+e+g.y+(a||0)+3,M(g,{left:b.translateX+f.checkboxOffset+g.x-20+"px",top:h+"px",
display:h>c-6&&h<c+d-6?"":"none"}))})},renderTitle:function(){var a=this.padding,b=this.options.title,c=0;if(b.text){if(!this.title)this.title=this.chart.renderer.label(b.text,a-3,a-4,null,null,null,null,null,"legend-title").attr({zIndex:1}).css(b.style).add(this.group);a=this.title.getBBox();c=a.height;this.offsetWidth=a.width;this.contentGroup.attr({translateY:c})}this.titleHeight=c},setText:function(a){var b=this.options;a.legendItem.attr({text:b.labelFormat?Na(b.labelFormat,a):b.labelFormatter.call(a)})},
renderItem:function(a){var b=this.chart,c=b.renderer,d=this.options,e=d.layout==="horizontal",f=this.symbolWidth,g=d.symbolPadding,h=this.itemStyle,i=this.itemHiddenStyle,j=this.padding,k=e?p(d.itemDistance,20):0,l=!d.rtl,m=d.width,n=d.itemMarginBottom||0,o=this.itemMarginTop,A=this.initialItemX,r=a.legendItem,q=a.series&&a.series.drawLegendSymbol?a.series:a,w=q.options,w=this.createCheckboxForItem&&w&&w.showCheckbox,v=d.useHTML;if(!r){a.legendGroup=c.g("legend-item").attr({zIndex:1}).add(this.scrollGroup);
a.legendItem=r=c.text("",l?f+g:-g,this.baseline||0,v).css(E(a.visible?h:i)).attr({align:l?"left":"right",zIndex:2}).add(a.legendGroup);if(!this.baseline)this.fontMetrics=c.fontMetrics(h.fontSize,r),this.baseline=this.fontMetrics.f+3+o,r.attr("y",this.baseline);q.drawLegendSymbol(this,a);this.setItemEvents&&this.setItemEvents(a,r,v,h,i);w&&this.createCheckboxForItem(a)}this.colorizeItem(a,a.visible);this.setText(a);c=r.getBBox();f=a.checkboxOffset=d.itemWidth||a.legendItemWidth||f+g+c.width+k+(w?20:
0);this.itemHeight=g=C(a.legendItemHeight||c.height);if(e&&this.itemX-A+f>(m||b.chartWidth-2*j-A-d.x))this.itemX=A,this.itemY+=o+this.lastLineHeight+n,this.lastLineHeight=0;this.maxItemWidth=t(this.maxItemWidth,f);this.lastItemY=o+this.itemY+n;this.lastLineHeight=t(g,this.lastLineHeight);a._legendItemPos=[this.itemX,this.itemY];e?this.itemX+=f:(this.itemY+=o+g+n,this.lastLineHeight=g);this.offsetWidth=m||t((e?this.itemX-A-k:f)+j,this.offsetWidth)},getAllItems:function(){var a=[];q(this.chart.series,
function(b){var c=b.options;if(p(c.showInLegend,!s(c.linkedTo)?z:!1,!0))a=a.concat(b.legendItems||(c.legendType==="point"?b.data:b))});return a},adjustMargins:function(a,b){var c=this.chart,d=this.options,e=d.align.charAt(0)+d.verticalAlign.charAt(0)+d.layout.charAt(0);d.floating||q([/(lth|ct|rth)/,/(rtv|rm|rbv)/,/(rbh|cb|lbh)/,/(lbv|lm|ltv)/],function(f,g){f.test(e)&&!s(a[g])&&(c[qb[g]]=t(c[qb[g]],c.legend[(g+1)%2?"legendHeight":"legendWidth"]+[1,-1,-1,1][g]*d[g%2?"x":"y"]+p(d.margin,12)+b[g]))})},
render:function(){var a=this,b=a.chart,c=b.renderer,d=a.group,e,f,g,h,i=a.box,j=a.options,k=a.padding,l=j.borderWidth,m=j.backgroundColor;a.itemX=a.initialItemX;a.itemY=a.initialItemY;a.offsetWidth=0;a.lastItemY=0;if(!d)a.group=d=c.g("legend").attr({zIndex:7}).add(),a.contentGroup=c.g().attr({zIndex:1}).add(d),a.scrollGroup=c.g().add(a.contentGroup);a.renderTitle();e=a.getAllItems();kb(e,function(a,b){return(a.options&&a.options.legendIndex||0)-(b.options&&b.options.legendIndex||0)});j.reversed&&
e.reverse();a.allItems=e;a.display=f=!!e.length;a.lastLineHeight=0;q(e,function(b){a.renderItem(b)});g=(j.width||a.offsetWidth)+k;h=a.lastItemY+a.lastLineHeight+a.titleHeight;h=a.handleOverflow(h);h+=k;if(l||m){if(i){if(g>0&&h>0)i[i.isNew?"attr":"animate"](i.crisp({width:g,height:h})),i.isNew=!1}else a.box=i=c.rect(0,0,g,h,j.borderRadius,l||0).attr({stroke:j.borderColor,"stroke-width":l||0,fill:m||"none"}).add(d).shadow(j.shadow),i.isNew=!0;i[f?"show":"hide"]()}a.legendWidth=g;a.legendHeight=h;q(e,
function(b){a.positionItem(b)});f&&d.align(x({width:g,height:h},j),!0,"spacingBox");b.isResizing||this.positionCheckboxes()},handleOverflow:function(a){var b=this,c=this.chart,d=c.renderer,e=this.options,f=e.y,f=c.spacingBox.height+(e.verticalAlign==="top"?-f:f)-this.padding,g=e.maxHeight,h,i=this.clipRect,j=e.navigation,k=p(j.animation,!0),l=j.arrowSize||12,m=this.nav,n=this.pages,o=this.padding,A,r=this.allItems,s=function(a){i.attr({height:a});if(b.contentGroup.div)b.contentGroup.div.style.clip=
"rect("+o+"px,9999px,"+(o+a)+"px,0)"};e.layout==="horizontal"&&(f/=2);g&&(f=F(f,g));n.length=0;if(a>f&&j.enabled!==!1){this.clipHeight=h=t(f-20-this.titleHeight-o,0);this.currentPage=p(this.currentPage,1);this.fullHeight=a;q(r,function(a,b){var c=a._legendItemPos[1],d=C(a.legendItem.getBBox().height),e=n.length;if(!e||c-n[e-1]>h&&(A||c)!==n[e-1])n.push(A||c),e++;b===r.length-1&&c+d-n[e-1]>h&&n.push(c);c!==A&&(A=c)});if(!i)i=b.clipRect=d.clipRect(0,o,9999,0),b.contentGroup.clip(i);s(h);if(!m)this.nav=
m=d.g().attr({zIndex:1}).add(this.group),this.up=d.symbol("triangle",0,0,l,l).on("click",function(){b.scroll(-1,k)}).add(m),this.pager=d.text("",15,10).css(j.style).add(m),this.down=d.symbol("triangle-down",0,0,l,l).on("click",function(){b.scroll(1,k)}).add(m);b.scroll(0);a=f}else if(m)s(c.chartHeight),m.hide(),this.scrollGroup.attr({translateY:1}),this.clipHeight=0;return a},scroll:function(a,b){var c=this.pages,d=c.length,e=this.currentPage+a,f=this.clipHeight,g=this.options.navigation,h=g.activeColor,
g=g.inactiveColor,i=this.pager,j=this.padding;e>d&&(e=d);if(e>0)b!==z&&cb(b,this.chart),this.nav.attr({translateX:j,translateY:f+this.padding+7+this.titleHeight,visibility:"visible"}),this.up.attr({fill:e===1?g:h}).css({cursor:e===1?"default":"pointer"}),i.attr({text:e+"/"+d}),this.down.attr({x:18+this.pager.getBBox().width,fill:e===d?g:h}).css({cursor:e===d?"default":"pointer"}),c=-c[e-1]+this.initialItemY,this.scrollGroup.animate({translateY:c}),this.currentPage=e,this.positionCheckboxes(c)}};P=
u.LegendSymbolMixin={drawRectangle:function(a,b){var c=a.options.symbolHeight||a.fontMetrics.f;b.legendSymbol=this.chart.renderer.rect(0,a.baseline-c+1,a.symbolWidth,c,a.options.symbolRadius||0).attr({zIndex:3}).add(b.legendGroup)},drawLineMarker:function(a){var b=this.options,c=b.marker,d=a.symbolWidth,e=this.chart.renderer,f=this.legendGroup,a=a.baseline-C(a.fontMetrics.b*0.3),g;if(b.lineWidth){g={"stroke-width":b.lineWidth};if(b.dashStyle)g.dashstyle=b.dashStyle;this.legendLine=e.path([X,0,a,S,
d,a]).attr(g).add(f)}if(c&&c.enabled!==!1)b=c.radius,this.legendSymbol=c=e.symbol(this.symbol,d/2-b,a-b,2*b,2*b,c).add(f),c.isMarker=!0}};(/Trident\/7\.0/.test(Ba)||Qa)&&ib(sb.prototype,"positionItem",function(a,b){var c=this,d=function(){b._legendItemPos&&a.call(c,b)};d();setTimeout(d)});var jb=u.Chart=function(){this.getArgs.apply(this,arguments)};u.chart=function(a,b,c){return new jb(a,b,c)};jb.prototype={callbacks:[],getArgs:function(){var a=[].slice.call(arguments);if(ya(a[0])||a[0].nodeName)this.renderTo=
a.shift();this.init(a[0],a[1])},init:function(a,b){var c,d=a.series;a.series=null;c=E(T,a);c.series=a.series=d;this.userOptions=a;d=c.chart;this.margin=this.splashArray("margin",d);this.spacing=this.splashArray("spacing",d);var e=d.events;this.bounds={h:{},v:{}};this.callback=b;this.isResizing=0;this.options=c;this.axes=[];this.series=[];this.hasCartesianSeries=d.showAxes;var f=this,g;f.index=U.length;U.push(f);hb++;d.reflow!==!1&&N(f,"load",function(){f.initReflow()});if(e)for(g in e)N(f,g,e[g]);
f.xAxis=[];f.yAxis=[];f.animation=la?!1:p(d.animation,!0);f.pointCount=f.colorCounter=f.symbolCounter=0;f.firstRender()},initSeries:function(a){var b=this.options.chart;(b=L[a.type||b.type||b.defaultSeriesType])||ea(17,!0);b=new b;b.init(this,a);return b},isInsidePlot:function(a,b,c){var d=c?b:a,a=c?a:b;return d>=0&&d<=this.plotWidth&&a>=0&&a<=this.plotHeight},redraw:function(a){var b=this.axes,c=this.series,d=this.pointer,e=this.legend,f=this.isDirtyLegend,g,h,i=this.hasCartesianSeries,j=this.isDirtyBox,
k=c.length,l=k,m=this.renderer,n=m.isHidden(),o=[];cb(a,this);n&&this.cloneRenderTo();for(this.layOutTitles();l--;)if(a=c[l],a.options.stacking&&(g=!0,a.isDirty)){h=!0;break}if(h)for(l=k;l--;)if(a=c[l],a.options.stacking)a.isDirty=!0;q(c,function(a){a.isDirty&&a.options.legendType==="point"&&(a.updateTotals&&a.updateTotals(),f=!0);a.isDirtyData&&H(a,"updatedData")});if(f&&e.options.enabled)e.render(),this.isDirtyLegend=!1;g&&this.getStacks();if(i&&!this.isResizing)this.maxTicks=null,q(b,function(a){a.updateNames();
a.setScale()});this.getMargins();i&&(q(b,function(a){a.isDirty&&(j=!0)}),q(b,function(a){var b=a.min+","+a.max;if(a.extKey!==b)a.extKey=b,o.push(function(){H(a,"afterSetExtremes",x(a.eventArgs,a.getExtremes()));delete a.eventArgs});(j||g)&&a.redraw()}));j&&this.drawChartBox();q(c,function(a){a.isDirty&&a.visible&&(!a.isCartesian||a.xAxis)&&a.redraw()});d&&d.reset(!0);m.draw();H(this,"redraw");n&&this.cloneRenderTo(!0);q(o,function(a){a.call()})},get:function(a){var b=this.axes,c=this.series,d,e;for(d=
0;d<b.length;d++)if(b[d].options.id===a)return b[d];for(d=0;d<c.length;d++)if(c[d].options.id===a)return c[d];for(d=0;d<c.length;d++){e=c[d].points||[];for(b=0;b<e.length;b++)if(e[b].id===a)return e[b]}return null},getAxes:function(){var a=this,b=this.options,c=b.xAxis=ua(b.xAxis||{}),b=b.yAxis=ua(b.yAxis||{});q(c,function(a,b){a.index=b;a.isX=!0});q(b,function(a,b){a.index=b});c=c.concat(b);q(c,function(b){new ia(a,b)})},getSelectedPoints:function(){var a=[];q(this.series,function(b){a=a.concat(Da(b.points||
[],function(a){return a.selected}))});return a},getSelectedSeries:function(){return Da(this.series,function(a){return a.selected})},setTitle:function(a,b,c){var g;var d=this,e=d.options,f;f=e.title=E(e.title,a);g=e.subtitle=E(e.subtitle,b),e=g;q([["title",a,f],["subtitle",b,e]],function(a){var b=a[0],c=d[b],e=a[1],a=a[2];c&&e&&(d[b]=c=c.destroy());a&&a.text&&!c&&(d[b]=d.renderer.text(a.text,0,0,a.useHTML).attr({align:a.align,"class":"highcharts-"+b,zIndex:a.zIndex||4}).css(a.style).add())});d.layOutTitles(c)},
layOutTitles:function(a){var b=0,c=this.title,d=this.subtitle,e=this.options,f=e.title,e=e.subtitle,g=this.renderer,h=this.spacingBox;if(c&&(c.css({width:(f.width||h.width+f.widthAdjust)+"px"}).align(x({y:g.fontMetrics(f.style.fontSize,c).b-3},f),!1,h),!f.floating&&!f.verticalAlign))b=c.getBBox().height;d&&(d.css({width:(e.width||h.width+e.widthAdjust)+"px"}).align(x({y:b+(f.margin-13)+g.fontMetrics(e.style.fontSize,c).b},e),!1,h),!e.floating&&!e.verticalAlign&&(b=va(b+d.getBBox().height)));c=this.titleOffset!==
b;this.titleOffset=b;if(!this.isDirtyBox&&c)this.isDirtyBox=c,this.hasRendered&&p(a,!0)&&this.isDirtyBox&&this.redraw()},getChartSize:function(){var a=this.options.chart,b=a.width,a=a.height,c=this.renderToClone||this.renderTo;if(!s(b))this.containerWidth=oa(c,"width");if(!s(a))this.containerHeight=oa(c,"height");this.chartWidth=t(0,b||this.containerWidth||600);this.chartHeight=t(0,p(a,this.containerHeight>19?this.containerHeight:400))},cloneRenderTo:function(a){var b=this.renderToClone,c=this.container;
if(a){if(b){for(;b.childNodes.length;)this.renderTo.appendChild(b.firstChild);Va(b);delete this.renderToClone}}else c&&c.parentNode===this.renderTo&&this.renderTo.removeChild(c),this.renderToClone=b=this.renderTo.cloneNode(0),M(b,{position:"absolute",top:"-9999px",display:"block"}),b.style.setProperty&&b.style.setProperty("display","block","important"),y.body.appendChild(b),c&&b.appendChild(c)},getContainer:function(){var a,b=this.options,c=b.chart,d,e;a=this.renderTo;var f="highcharts-"+Cb++;if(!a)this.renderTo=
a=c.renderTo;if(ya(a))this.renderTo=a=y.getElementById(a);a||ea(13,!0);d=B(O(a,"data-highcharts-chart"));I(d)&&U[d]&&U[d].hasRendered&&U[d].destroy();O(a,"data-highcharts-chart",this.index);a.innerHTML="";!c.skipClone&&!a.offsetWidth&&this.cloneRenderTo();this.getChartSize();d=this.chartWidth;e=this.chartHeight;this.container=a=ca(Pa,{className:"highcharts-container"+(c.className?" "+c.className:""),id:f},x({position:"relative",overflow:"hidden",width:d+"px",height:e+"px",textAlign:"left",lineHeight:"normal",
zIndex:0,"-webkit-tap-highlight-color":"rgba(0,0,0,0)"},c.style),this.renderToClone||a);this._cursor=a.style.cursor;this.renderer=new (u[c.renderer]||fb)(a,d,e,c.style,c.forExport,b.exporting&&b.exporting.allowHTML);la&&this.renderer.create(this,a,d,e);this.renderer.chartIndex=this.index},getMargins:function(a){var b=this.spacing,c=this.margin,d=this.titleOffset;this.resetMargins();if(d&&!s(c[0]))this.plotTop=t(this.plotTop,d+this.options.title.margin+b[0]);this.legend.display&&this.legend.adjustMargins(c,
b);this.extraBottomMargin&&(this.marginBottom+=this.extraBottomMargin);this.extraTopMargin&&(this.plotTop+=this.extraTopMargin);a||this.getAxisMargins()},getAxisMargins:function(){var a=this,b=a.axisOffset=[0,0,0,0],c=a.margin;a.hasCartesianSeries&&q(a.axes,function(a){a.visible&&a.getOffset()});q(qb,function(d,e){s(c[e])||(a[d]+=b[e])});a.setChartSize()},reflow:function(a){var b=this,c=b.options.chart,d=b.renderTo,e=s(c.width),f=c.width||oa(d,"width"),c=c.height||oa(d,"height"),d=a?a.target:D;if(!e&&
!b.isPrinting&&f&&c&&(d===D||d===y)){if(f!==b.containerWidth||c!==b.containerHeight)clearTimeout(b.reflowTimeout),b.reflowTimeout=Sa(function(){b.container&&b.setSize(void 0,void 0,!1)},a?100:0);b.containerWidth=f;b.containerHeight=c}},initReflow:function(){var a=this,b=function(b){a.reflow(b)};N(D,"resize",b);N(a,"destroy",function(){Y(D,"resize",b)})},setSize:function(a,b,c){var d=this,e=d.renderer;d.isResizing+=1;cb(c,d);d.oldChartHeight=d.chartHeight;d.oldChartWidth=d.chartWidth;if(a!==void 0)d.options.chart.width=
a;if(b!==void 0)d.options.chart.height=b;d.getChartSize();a=e.globalAnimation;(a?Za:M)(d.container,{width:d.chartWidth+"px",height:d.chartHeight+"px"},a);d.setChartSize(!0);e.setSize(d.chartWidth,d.chartHeight,c);d.maxTicks=null;q(d.axes,function(a){a.isDirty=!0;a.setScale()});q(d.series,function(a){a.isDirty=!0});d.isDirtyLegend=!0;d.isDirtyBox=!0;d.layOutTitles();d.getMargins();d.redraw(c);d.oldChartHeight=null;H(d,"resize");Sa(function(){d&&H(d,"endResize",null,function(){d.isResizing-=1})},Wa(a).duration)},
setChartSize:function(a){var b=this.inverted,c=this.renderer,d=this.chartWidth,e=this.chartHeight,f=this.options.chart,g=this.spacing,h=this.clipOffset,i,j,k,l;this.plotLeft=i=C(this.plotLeft);this.plotTop=j=C(this.plotTop);this.plotWidth=k=t(0,C(d-i-this.marginRight));this.plotHeight=l=t(0,C(e-j-this.marginBottom));this.plotSizeX=b?l:k;this.plotSizeY=b?k:l;this.plotBorderWidth=f.plotBorderWidth||0;this.spacingBox=c.spacingBox={x:g[3],y:g[0],width:d-g[3]-g[1],height:e-g[0]-g[2]};this.plotBox=c.plotBox=
{x:i,y:j,width:k,height:l};d=2*V(this.plotBorderWidth/2);b=va(t(d,h[3])/2);c=va(t(d,h[0])/2);this.clipBox={x:b,y:c,width:V(this.plotSizeX-t(d,h[1])/2-b),height:t(0,V(this.plotSizeY-t(d,h[2])/2-c))};a||q(this.axes,function(a){a.setAxisSize();a.setAxisTranslation()})},resetMargins:function(){var a=this;q(qb,function(b,c){a[b]=p(a.margin[c],a.spacing[c])});a.axisOffset=[0,0,0,0];a.clipOffset=[0,0,0,0]},drawChartBox:function(){var a=this.options.chart,b=this.renderer,c=this.chartWidth,d=this.chartHeight,
e=this.chartBackground,f=this.plotBackground,g=this.plotBorder,h=this.plotBGImage,i=a.borderWidth||0,j=a.backgroundColor,k=a.plotBackgroundColor,l=a.plotBackgroundImage,m=a.plotBorderWidth||0,n,o=this.plotLeft,p=this.plotTop,r=this.plotWidth,q=this.plotHeight,w=this.plotBox,v=this.clipRect,s=this.clipBox;n=i+(a.shadow?8:0);if(i||j)if(e)e.animate(e.crisp({width:c-n,height:d-n}));else{e={fill:j||"none"};if(i)e.stroke=a.borderColor,e["stroke-width"]=i;this.chartBackground=b.rect(n/2,n/2,c-n,d-n,a.borderRadius,
i).attr(e).addClass("highcharts-background").add().shadow(a.shadow)}if(k)f?f.animate(w):this.plotBackground=b.rect(o,p,r,q,0).attr({fill:k}).add().shadow(a.plotShadow);if(l)h?h.animate(w):this.plotBGImage=b.image(l,o,p,r,q).add();v?v.animate({width:s.width,height:s.height}):this.clipRect=b.clipRect(s);if(m)g?(g.strokeWidth=-m,g.animate(g.crisp({x:o,y:p,width:r,height:q}))):this.plotBorder=b.rect(o,p,r,q,0,-m).attr({stroke:a.plotBorderColor,"stroke-width":m,fill:"none",zIndex:1}).add();this.isDirtyBox=
!1},propFromSeries:function(){var a=this,b=a.options.chart,c,d=a.options.series,e,f;q(["inverted","angular","polar"],function(g){c=L[b.type||b.defaultSeriesType];f=a[g]||b[g]||c&&c.prototype[g];for(e=d&&d.length;!f&&e--;)(c=L[d[e].type])&&c.prototype[g]&&(f=!0);a[g]=f})},linkSeries:function(){var a=this,b=a.series;q(b,function(a){a.linkedSeries.length=0});q(b,function(b){var d=b.options.linkedTo;if(ya(d)&&(d=d===":previous"?a.series[b.index-1]:a.get(d))&&d.linkedParent!==b)d.linkedSeries.push(b),
b.linkedParent=d,b.visible=p(b.options.visible,d.options.visible,b.visible)})},renderSeries:function(){q(this.series,function(a){a.translate();a.render()})},renderLabels:function(){var a=this,b=a.options.labels;b.items&&q(b.items,function(c){var d=x(b.style,c.style),e=B(d.left)+a.plotLeft,f=B(d.top)+a.plotTop+12;delete d.left;delete d.top;a.renderer.text(c.html,e,f).attr({zIndex:2}).css(d).add()})},render:function(){var a=this.axes,b=this.renderer,c=this.options,d,e,f,g;this.setTitle();this.legend=
new sb(this,c.legend);this.getStacks&&this.getStacks();this.getMargins(!0);this.setChartSize();d=this.plotWidth;e=this.plotHeight-=21;q(a,function(a){a.setScale()});this.getAxisMargins();f=d/this.plotWidth>1.1;g=e/this.plotHeight>1.05;if(f||g)this.maxTicks=null,q(a,function(a){(a.horiz&&f||!a.horiz&&g)&&a.setTickInterval(!0)}),this.getMargins();this.drawChartBox();this.hasCartesianSeries&&q(a,function(a){a.visible&&a.render()});if(!this.seriesGroup)this.seriesGroup=b.g("series-group").attr({zIndex:3}).add();
this.renderSeries();this.renderLabels();this.showCredits(c.credits);this.hasRendered=!0},showCredits:function(a){if(a.enabled&&!this.credits)this.credits=this.renderer.text(a.text,0,0).on("click",function(){if(a.href)D.location.href=a.href}).attr({align:a.position.align,zIndex:8}).css(a.style).add().align(a.position)},destroy:function(){var a=this,b=a.axes,c=a.series,d=a.container,e,f=d&&d.parentNode;H(a,"destroy");U[a.index]=z;hb--;a.renderTo.removeAttribute("data-highcharts-chart");Y(a);for(e=b.length;e--;)b[e]=
b[e].destroy();for(e=c.length;e--;)c[e]=c[e].destroy();q("title,subtitle,chartBackground,plotBackground,plotBGImage,plotBorder,seriesGroup,clipRect,credits,pointer,scroller,rangeSelector,legend,resetZoomButton,tooltip,renderer".split(","),function(b){var c=a[b];c&&c.destroy&&(a[b]=c.destroy())});if(d)d.innerHTML="",Y(d),f&&Va(d);for(e in a)delete a[e]},isReadyToRender:function(){var a=this;return!fa&&D==D.top&&y.readyState!=="complete"||la&&!D.canvg?(la?Qb.push(function(){a.firstRender()},a.options.global.canvasToolsURL):
y.attachEvent("onreadystatechange",function(){y.detachEvent("onreadystatechange",a.firstRender);y.readyState==="complete"&&a.firstRender()}),!1):!0},firstRender:function(){var a=this,b=a.options;if(a.isReadyToRender()){a.getContainer();H(a,"init");a.resetMargins();a.setChartSize();a.propFromSeries();a.getAxes();q(b.series||[],function(b){a.initSeries(b)});a.linkSeries();H(a,"beforeRender");if(u.Pointer)a.pointer=new $a(a,b);a.render();a.renderer.draw();if(!a.renderer.imgCount&&a.onload)a.onload();
a.cloneRenderTo(!0)}},onload:function(){var a=this;q([this.callback].concat(this.callbacks),function(b){b&&a.index!==void 0&&b.apply(a,[a])});H(a,"load");this.onload=null},splashArray:function(a,b){var c=b[a],c=ba(c)?c:[c,c,c,c];return[p(b[a+"Top"],c[0]),p(b[a+"Right"],c[1]),p(b[a+"Bottom"],c[2]),p(b[a+"Left"],c[3])]}};var Eb=u.CenteredSeriesMixin={getCenter:function(){var a=this.options,b=this.chart,c=2*(a.slicedOffset||0),d=b.plotWidth-2*c,b=b.plotHeight-2*c,e=a.center,e=[p(e[0],"50%"),p(e[1],"50%"),
a.size||"100%",a.innerSize||0],f=F(d,b),g,h;for(g=0;g<4;++g)h=e[g],a=g<2||g===2&&/%$/.test(h),e[g]=(/%$/.test(h)?[d,b,f,e[2]][g]*parseFloat(h)/100:parseFloat(h))+(a?c:0);e[3]>e[2]&&(e[3]=e[2]);return e}},Ma=function(){};Ma.prototype={init:function(a,b,c){this.series=a;this.color=a.color;this.applyOptions(b,c);this.pointAttr={};if(a.options.colorByPoint&&(b=a.options.colors||a.chart.options.colors,this.color=this.color||b[a.colorCounter++],a.colorCounter===b.length))a.colorCounter=0;a.chart.pointCount++;
return this},applyOptions:function(a,b){var c=this.series,d=c.options.pointValKey||c.pointValKey,a=Ma.prototype.optionsToObject.call(this,a);x(this,a);this.options=this.options?x(this.options,a):a;a.group&&delete this.group;if(d)this.y=this[d];this.isNull=p(this.isValid&&!this.isValid(),this.x===null||!I(this.y,!0));if("name"in this&&b===void 0&&c.xAxis&&c.xAxis.hasNames)this.x=c.xAxis.nameToX(this);if(this.x===void 0&&c)this.x=b===void 0?c.autoIncrement(this):b;return this},optionsToObject:function(a){var b=
{},c=this.series,d=c.options.keys,e=d||c.pointArrayMap||["y"],f=e.length,g=0,h=0;if(I(a)||a===null)b[e[0]]=a;else if(za(a)){if(!d&&a.length>f){c=typeof a[0];if(c==="string")b.name=a[0];else if(c==="number")b.x=a[0];g++}for(;h<f;){if(!d||a[g]!==void 0)b[e[h]]=a[g];g++;h++}}else if(typeof a==="object"){b=a;if(a.dataLabels)c._hasPointLabels=!0;if(a.marker)c._hasPointMarkers=!0}return b},destroy:function(){var a=this.series.chart,b=a.hoverPoints,c;a.pointCount--;if(b&&(this.setState(),ra(b,this),!b.length))a.hoverPoints=
null;if(this===a.hoverPoint)this.onMouseOut();if(this.graphic||this.dataLabel)Y(this),this.destroyElements();this.legendItem&&a.legend.destroyItem(this);for(c in this)this[c]=null},destroyElements:function(){for(var a=["graphic","dataLabel","dataLabelUpper","connector","shadowGroup"],b,c=6;c--;)b=a[c],this[b]&&(this[b]=this[b].destroy())},getLabelConfig:function(){return{x:this.category,y:this.y,color:this.color,key:this.name||this.category,series:this.series,point:this,percentage:this.percentage,
total:this.total||this.stackTotal}},tooltipFormatter:function(a){var b=this.series,c=b.tooltipOptions,d=p(c.valueDecimals,""),e=c.valuePrefix||"",f=c.valueSuffix||"";q(b.pointArrayMap||["y"],function(b){b="{point."+b;if(e||f)a=a.replace(b+"}",e+b+"}"+f);a=a.replace(b+"}",b+":,."+d+"f}")});return Na(a,{point:this,series:this.series})},firePointEvent:function(a,b,c){var d=this,e=this.series.options;(e.point.events[a]||d.options&&d.options.events&&d.options.events[a])&&this.importEvents();a==="click"&&
e.allowPointSelect&&(c=function(a){d.select&&d.select(null,a.ctrlKey||a.metaKey||a.shiftKey)});H(this,a,b,c)},visible:!0};var R=u.Series=function(){};R.prototype={isCartesian:!0,type:"line",pointClass:Ma,sorted:!0,requireSorting:!0,pointAttrToOptions:{stroke:"lineColor","stroke-width":"lineWidth",fill:"fillColor",r:"radius"},directTouch:!1,axisTypes:["xAxis","yAxis"],colorCounter:0,parallelArrays:["x","y"],init:function(a,b){var c=this,d,e,f=a.series,g=function(a,b){return p(a.options.index,a._i)-
p(b.options.index,b._i)};c.chart=a;c.options=b=c.setOptions(b);c.linkedSeries=[];c.bindAxes();x(c,{name:b.name,state:"",pointAttr:{},visible:b.visible!==!1,selected:b.selected===!0});if(la)b.animation=!1;e=b.events;for(d in e)N(c,d,e[d]);if(e&&e.click||b.point&&b.point.events&&b.point.events.click||b.allowPointSelect)a.runTrackerClick=!0;c.getColor();c.getSymbol();q(c.parallelArrays,function(a){c[a+"Data"]=[]});c.setData(b.data,!1);if(c.isCartesian)a.hasCartesianSeries=!0;f.push(c);c._i=f.length-
1;kb(f,g);this.yAxis&&kb(this.yAxis.series,g);q(f,function(a,b){a.index=b;a.name=a.name||"Series "+(b+1)})},bindAxes:function(){var a=this,b=a.options,c=a.chart,d;q(a.axisTypes||[],function(e){q(c[e],function(c){d=c.options;if(b[e]===d.index||b[e]!==z&&b[e]===d.id||b[e]===z&&d.index===0)c.series.push(a),a[e]=c,c.isDirty=!0});!a[e]&&a.optionalAxis!==e&&ea(18,!0)})},updateParallelArrays:function(a,b){var c=a.series,d=arguments,e=I(b)?function(d){var e=d==="y"&&c.toYData?c.toYData(a):a[d];c[d+"Data"][b]=
e}:function(a){Array.prototype[b].apply(c[a+"Data"],Array.prototype.slice.call(d,2))};q(c.parallelArrays,e)},autoIncrement:function(){var a=this.options,b=this.xIncrement,c,d=a.pointIntervalUnit,b=p(b,a.pointStart,0);this.pointInterval=c=p(this.pointInterval,a.pointInterval,1);d&&(a=new ma(b),d==="day"?a=+a[nb](a[Xa]()+c):d==="month"?a=+a[Ab](a[db]()+c):d==="year"&&(a=+a[Bb](a[eb]()+c)),c=a-b);this.xIncrement=b+c;return b},setOptions:function(a){var b=this.chart,c=b.options.plotOptions,b=b.userOptions||
{},d=b.plotOptions||{},e=c[this.type];this.userOptions=a;c=E(e,c.series,a);this.tooltipOptions=E(T.tooltip,T.plotOptions[this.type].tooltip,b.tooltip,d.series&&d.series.tooltip,d[this.type]&&d[this.type].tooltip,a.tooltip);e.marker===null&&delete c.marker;this.zoneAxis=c.zoneAxis;a=this.zones=(c.zones||[]).slice();if((c.negativeColor||c.negativeFillColor)&&!c.zones)a.push({value:c[this.zoneAxis+"Threshold"]||c.threshold||0,color:c.negativeColor,fillColor:c.negativeFillColor});a.length&&s(a[a.length-
1].value)&&a.push({color:this.color,fillColor:this.fillColor});return c},getCyclic:function(a,b,c){var d=this.userOptions,e="_"+a+"Index",f=a+"Counter";b||(s(d[e])?b=d[e]:(d[e]=b=this.chart[f]%c.length,this.chart[f]+=1),b=c[b]);this[a]=b},getColor:function(){this.options.colorByPoint?this.options.color=null:this.getCyclic("color",this.options.color||ga[this.type].color,this.chart.options.colors)},getSymbol:function(){var a=this.options.marker;this.getCyclic("symbol",a.symbol,this.chart.options.symbols);
if(/^url/.test(this.symbol))a.radius=0},drawLegendSymbol:P.drawLineMarker,setData:function(a,b,c,d){var e=this,f=e.points,g=f&&f.length||0,h,i=e.options,j=e.chart,k=null,l=e.xAxis,m=i.turboThreshold,n=this.xData,o=this.yData,A=(h=e.pointArrayMap)&&h.length,a=a||[];h=a.length;b=p(b,!0);if(d!==!1&&h&&g===h&&!e.cropped&&!e.hasGroupedData&&e.visible)q(a,function(a,b){f[b].update&&a!==i.data[b]&&f[b].update(a,!1,null,!1)});else{e.xIncrement=null;e.colorCounter=0;q(this.parallelArrays,function(a){e[a+"Data"].length=
0});if(m&&h>m){for(c=0;k===null&&c<h;)k=a[c],c++;if(I(k))for(c=0;c<h;c++)n[c]=this.autoIncrement(),o[c]=a[c];else if(za(k))if(A)for(c=0;c<h;c++)k=a[c],n[c]=k[0],o[c]=k.slice(1,A+1);else for(c=0;c<h;c++)k=a[c],n[c]=k[0],o[c]=k[1];else ea(12)}else for(c=0;c<h;c++)a[c]!==z&&(k={series:e},e.pointClass.prototype.applyOptions.apply(k,[a[c]]),e.updateParallelArrays(k,c));ya(o[0])&&ea(14,!0);e.data=[];e.options.data=e.userOptions.data=a;for(c=g;c--;)f[c]&&f[c].destroy&&f[c].destroy();if(l)l.minRange=l.userMinRange;
e.isDirty=e.isDirtyData=j.isDirtyBox=!0;c=!1}i.legendType==="point"&&(this.processData(),this.generatePoints());b&&j.redraw(c)},processData:function(a){var b=this.xData,c=this.yData,d=b.length,e;e=0;var f,g,h=this.xAxis,i,j=this.options;i=j.cropThreshold;var k=this.getExtremesFromAll||j.getExtremesFromAll,l=this.isCartesian,j=h&&h.val2lin,m=h&&h.isLog,n,o;if(l&&!this.isDirty&&!h.isDirty&&!this.yAxis.isDirty&&!a)return!1;if(h)a=h.getExtremes(),n=a.min,o=a.max;if(l&&this.sorted&&!k&&(!i||d>i||this.forceCrop))if(b[d-
1]<n||b[0]>o)b=[],c=[];else if(b[0]<n||b[d-1]>o)e=this.cropData(this.xData,this.yData,n,o),b=e.xData,c=e.yData,e=e.start,f=!0;for(i=b.length||1;--i;)d=m?j(b[i])-j(b[i-1]):b[i]-b[i-1],d>0&&(g===z||d<g)?g=d:d<0&&this.requireSorting&&ea(15);this.cropped=f;this.cropStart=e;this.processedXData=b;this.processedYData=c;this.closestPointRange=g},cropData:function(a,b,c,d){var e=a.length,f=0,g=e,h=p(this.cropShoulder,1),i;for(i=0;i<e;i++)if(a[i]>=c){f=t(0,i-h);break}for(c=i;c<e;c++)if(a[c]>d){g=c+h;break}return{xData:a.slice(f,
g),yData:b.slice(f,g),start:f,end:g}},generatePoints:function(){var a=this.options.data,b=this.data,c,d=this.processedXData,e=this.processedYData,f=this.pointClass,g=d.length,h=this.cropStart||0,i,j=this.hasGroupedData,k,l=[],m;if(!b&&!j)b=[],b.length=a.length,b=this.data=b;for(m=0;m<g;m++)i=h+m,j?(l[m]=(new f).init(this,[d[m]].concat(ua(e[m]))),l[m].dataGroup=this.groupMap[m]):(b[i]?k=b[i]:a[i]!==z&&(b[i]=k=(new f).init(this,a[i],d[m])),l[m]=k),l[m].index=i;if(b&&(g!==(c=b.length)||j))for(m=0;m<
c;m++)if(m===h&&!j&&(m+=g),b[m])b[m].destroyElements(),b[m].plotX=z;this.data=b;this.points=l},getExtremes:function(a){var b=this.yAxis,c=this.processedXData,d,e=[],f=0;d=this.xAxis.getExtremes();var g=d.min,h=d.max,i,j,k,l,a=a||this.stackedYData||this.processedYData||[];d=a.length;for(l=0;l<d;l++)if(j=c[l],k=a[l],i=(I(k,!0)||za(k))&&(!b.isLog||k.length||k>0),j=this.getExtremesFromAll||this.options.getExtremesFromAll||this.cropped||(c[l+1]||j)>=g&&(c[l-1]||j)<=h,i&&j)if(i=k.length)for(;i--;)k[i]!==
null&&(e[f++]=k[i]);else e[f++]=k;this.dataMin=Oa(e);this.dataMax=Ha(e)},translate:function(){this.processedXData||this.processData();this.generatePoints();for(var a=this.options,b=a.stacking,c=this.xAxis,d=c.categories,e=this.yAxis,f=this.points,g=f.length,h=!!this.modifyValue,i=a.pointPlacement,j=i==="between"||I(i),k=a.threshold,l=a.startFromThreshold?k:0,m,n,o,q,r=Number.MAX_VALUE,a=0;a<g;a++){var K=f[a],w=K.x,v=K.y;n=K.low;var x=b&&e.stacks[(this.negStacks&&v<(l?0:k)?"-":"")+this.stackKey],u;
if(e.isLog&&v!==null&&v<=0)K.isNull=!0;K.plotX=m=$(F(t(-1E5,c.translate(w,0,0,0,1,i,this.type==="flags")),1E5));if(b&&this.visible&&!K.isNull&&x&&x[w])q=this.getStackIndicator(q,w,this.index),u=x[w],v=u.points[q.key],n=v[0],v=v[1],n===l&&q.key===x[w].base&&(n=p(k,e.min)),e.isLog&&n<=0&&(n=null),K.total=K.stackTotal=u.total,K.percentage=u.total&&K.y/u.total*100,K.stackY=v,u.setOffset(this.pointXOffset||0,this.barW||0);K.yBottom=s(n)?e.translate(n,0,1,0,1):null;h&&(v=this.modifyValue(v,K));K.plotY=
n=typeof v==="number"&&v!==Infinity?F(t(-1E5,e.translate(v,0,1,0,1)),1E5):z;K.isInside=n!==z&&n>=0&&n<=e.len&&m>=0&&m<=c.len;K.clientX=j?$(c.translate(w,0,0,0,1,i)):m;K.negative=K.y<(k||0);K.category=d&&d[K.x]!==z?d[K.x]:K.x;K.isNull||(o!==void 0&&(r=F(r,Q(m-o))),o=m)}this.closestPointRangePx=r},getValidPoints:function(a,b){var c=this.chart;return Da(a||this.points||[],function(a){return b&&!c.isInsidePlot(a.plotX,a.plotY,c.inverted)?!1:!a.isNull})},setClip:function(a){var b=this.chart,c=this.options,
d=b.renderer,e=b.inverted,f=this.clipBox,g=f||b.clipBox,h=this.sharedClipKey||["_sharedClip",a&&a.duration,a&&a.easing,g.height,c.xAxis,c.yAxis].join(","),i=b[h],j=b[h+"m"];if(!i){if(a)g.width=0,b[h+"m"]=j=d.clipRect(-99,e?-b.plotLeft:-b.plotTop,99,e?b.chartWidth:b.chartHeight);b[h]=i=d.clipRect(g);i.count={length:0}}a&&!i.count[this.index]&&(i.count[this.index]=!0,i.count.length+=1);if(c.clip!==!1)this.group.clip(a||f?i:b.clipRect),this.markerGroup.clip(j),this.sharedClipKey=h;a||(i.count[this.index]&&
(delete i.count[this.index],i.count.length-=1),i.count.length===0&&h&&b[h]&&(f||(b[h]=b[h].destroy()),b[h+"m"]&&(b[h+"m"]=b[h+"m"].destroy())))},animate:function(a){var b=this.chart,c=Wa(this.options.animation),d;a?this.setClip(c):(d=this.sharedClipKey,(a=b[d])&&a.animate({width:b.plotSizeX},c),b[d+"m"]&&b[d+"m"].animate({width:b.plotSizeX+99},c),this.animate=null)},afterAnimate:function(){this.setClip();H(this,"afterAnimate")},drawPoints:function(){var a,b=this.points,c=this.chart,d,e,f,g,h,i,j,
k,l=this.options.marker,m=this.pointAttr[""],n,o,q,r=this.markerGroup,s=p(l.enabled,this.xAxis.isRadial,this.closestPointRangePx>2*l.radius);if(l.enabled!==!1||this._hasPointMarkers)for(f=b.length;f--;)if(g=b[f],d=V(g.plotX),e=g.plotY,k=g.graphic,n=g.marker||{},o=!!g.marker,a=s&&n.enabled===z||n.enabled,q=g.isInside,a&&I(e)&&g.y!==null)if(a=g.pointAttr[g.selected?"select":""]||m,h=a.r,i=p(n.symbol,this.symbol),j=i.indexOf("url")===0,k)k[q?"show":"hide"](!0).attr(a).animate(x({x:d-h,y:e-h},k.symbolName?
{width:2*h,height:2*h}:{}));else{if(q&&(h>0||j))g.graphic=c.renderer.symbol(i,d-h,e-h,2*h,2*h,o?n:l).attr(a).add(r)}else if(k)g.graphic=k.destroy()},convertAttribs:function(a,b,c,d){var e=this.pointAttrToOptions,f,g,h={},a=a||{},b=b||{},c=c||{},d=d||{};for(f in e)g=e[f],h[f]=p(a[g],b[f],c[f],d[f]);return h},getAttribs:function(){var a=this,b=a.options,c=ga[a.type].marker?b.marker:b,d=c.states,e=d.hover,f,g=a.color,h=a.options.negativeColor,i={stroke:g,fill:g},j=a.points||[],k,l=[],m,n=a.pointAttrToOptions;
f=a.hasPointSpecificOptions;var o=c.lineColor,A=c.fillColor;k=b.turboThreshold;var r=a.zones,t=a.zoneAxis||"y",w,v;b.marker?(e.radius=+e.radius||+c.radius+ +e.radiusPlus,e.lineWidth=e.lineWidth||c.lineWidth+e.lineWidthPlus):(e.color=e.color||na(e.color||g).brighten(e.brightness).get(),e.negativeColor=e.negativeColor||na(e.negativeColor||h).brighten(e.brightness).get());l[""]=a.convertAttribs(c,i);q(["hover","select"],function(b){l[b]=a.convertAttribs(d[b],l[""])});a.pointAttr=l;g=j.length;if(!k||
g<k||f)for(;g--;){k=j[g];if((c=k.options&&k.options.marker||k.options)&&c.enabled===!1)c.radius=0;i=null;if(r.length){f=0;for(i=r[f];k[t]>=i.value;)i=r[++f];k.color=k.fillColor=i=p(i.color,a.color)}f=b.colorByPoint||k.color;if(k.options)for(v in n)s(c[n[v]])&&(f=!0);if(f){c=c||{};m=[];d=c.states||{};f=d.hover=d.hover||{};if(!b.marker||k.negative&&!f.fillColor&&!e.fillColor)f[a.pointAttrToOptions.fill]=f.color||!k.options.color&&e[k.negative&&h?"negativeColor":"color"]||na(k.color).brighten(f.brightness||
e.brightness).get();w={color:k.color};if(!A)w.fillColor=k.color;if(!o)w.lineColor=k.color;c.hasOwnProperty("color")&&!c.color&&delete c.color;if(i&&!e.fillColor)f.fillColor=i;m[""]=a.convertAttribs(x(w,c),l[""]);m.hover=a.convertAttribs(d.hover,l.hover,m[""]);m.select=a.convertAttribs(d.select,l.select,m[""])}else m=l;k.pointAttr=m}},destroy:function(){var a=this,b=a.chart,c=/AppleWebKit\/533/.test(Ba),d,e=a.data||[],f,g,h;H(a,"destroy");Y(a);q(a.axisTypes||[],function(b){if(h=a[b])ra(h.series,a),
h.isDirty=h.forceRedraw=!0});a.legendItem&&a.chart.legend.destroyItem(a);for(d=e.length;d--;)(f=e[d])&&f.destroy&&f.destroy();a.points=null;clearTimeout(a.animationTimeout);for(g in a)a[g]instanceof J&&!a[g].survive&&(d=c&&g==="group"?"hide":"destroy",a[g][d]());if(b.hoverSeries===a)b.hoverSeries=null;ra(b.series,a);for(g in a)delete a[g]},getGraphPath:function(a,b,c){var d=this,e=d.options,f=e.step,g,h=[],i=[],j,a=a||d.points;(g=a.reversed)&&a.reverse();(f={right:1,center:2}[f]||f&&3)&&g&&(f=4-f);
e.connectNulls&&!b&&!c&&(a=this.getValidPoints(a));q(a,function(g,l){var m=g.plotX,n=g.plotY,o=a[l-1];if((g.leftCliff||o&&o.rightCliff)&&!c)j=!0;g.isNull&&!s(b)&&l>0?j=!e.connectNulls:g.isNull&&!b?j=!0:(l===0||j?o=[X,g.plotX,g.plotY]:d.getPointSpline?o=d.getPointSpline(a,g,l):f?(o=f===1?[S,o.plotX,n]:f===2?[S,(o.plotX+m)/2,o.plotY,S,(o.plotX+m)/2,n]:[S,m,o.plotY],o.push(S,m,n)):o=[S,m,n],i.push(g.x),f&&i.push(g.x),h.push.apply(h,o),j=!1)});h.xMap=i;return d.graphPath=h},drawGraph:function(){var a=
this,b=this.options,c=[["graph",b.lineColor||this.color,b.dashStyle]],d=b.lineWidth,e=b.linecap!=="square",f=(this.gappedPath||this.getGraphPath).call(this);q(this.zones,function(d,e){c.push(["zoneGraph"+e,d.color||a.color,d.dashStyle||b.dashStyle])});q(c,function(c,h){var i=c[0],j=a[i];if(j)j.endX=f.xMap,j.animate({d:f});else if(d&&f.length)j={stroke:c[1],"stroke-width":d,fill:"none",zIndex:1},c[2]?j.dashstyle=c[2]:e&&(j["stroke-linecap"]=j["stroke-linejoin"]="round"),j=a[i]=a.chart.renderer.path(f).attr(j).add(a.group).shadow(h<
2&&b.shadow);if(j)j.startX=f.xMap,j.isArea=f.isArea})},applyZones:function(){var a=this,b=this.chart,c=b.renderer,d=this.zones,e,f,g=this.clips||[],h,i=this.graph,j=this.area,k=t(b.chartWidth,b.chartHeight),l=this[(this.zoneAxis||"y")+"Axis"],m,n,o=b.inverted,A,r,s,w,v=!1;if(d.length&&(i||j)&&l&&l.min!==z)n=l.reversed,A=l.horiz,i&&i.hide(),j&&j.hide(),m=l.getExtremes(),q(d,function(d,q){e=n?A?b.plotWidth:0:A?0:l.toPixels(m.min);e=F(t(p(f,e),0),k);f=F(t(C(l.toPixels(p(d.value,m.max),!0)),0),k);v&&
(e=f=l.toPixels(m.max));r=Math.abs(e-f);s=F(e,f);w=t(e,f);if(l.isXAxis){if(h={x:o?w:s,y:0,width:r,height:k},!A)h.x=b.plotHeight-h.x}else if(h={x:0,y:o?w:s,width:k,height:r},A)h.y=b.plotWidth-h.y;o&&c.isVML&&(h=l.isXAxis?{x:0,y:n?s:w,height:h.width,width:b.chartWidth}:{x:h.y-b.plotLeft-b.spacingBox.x,y:0,width:h.height,height:b.chartHeight});g[q]?g[q].animate(h):(g[q]=c.clipRect(h),i&&a["zoneGraph"+q].clip(g[q]),j&&a["zoneArea"+q].clip(g[q]));v=d.value>m.max}),this.clips=g},invertGroups:function(){function a(){var a=
{width:b.yAxis.len,height:b.xAxis.len};q(["group","markerGroup"],function(c){b[c]&&b[c].attr(a).invert()})}var b=this,c=b.chart;if(b.xAxis)N(c,"resize",a),N(b,"destroy",function(){Y(c,"resize",a)}),a(),b.invertGroups=a},plotGroup:function(a,b,c,d,e){var f=this[a],g=!f;g&&(this[a]=f=this.chart.renderer.g(b).attr({zIndex:d||0.1}).add(e),f.addClass("highcharts-series-"+this.index));f.attr({visibility:c})[g?"attr":"animate"](this.getPlotBox());return f},getPlotBox:function(){var a=this.chart,b=this.xAxis,
c=this.yAxis;if(a.inverted)b=c,c=this.xAxis;return{translateX:b?b.left:a.plotLeft,translateY:c?c.top:a.plotTop,scaleX:1,scaleY:1}},render:function(){var a=this,b=a.chart,c,d=a.options,e=!!a.animate&&b.renderer.isSVG&&Wa(d.animation).duration,f=a.visible?"inherit":"hidden",g=d.zIndex,h=a.hasRendered,i=b.seriesGroup;c=a.plotGroup("group","series",f,g,i);a.markerGroup=a.plotGroup("markerGroup","markers",f,g,i);e&&a.animate(!0);a.getAttribs();c.inverted=a.isCartesian?b.inverted:!1;a.drawGraph&&(a.drawGraph(),
a.applyZones());q(a.points,function(a){a.redraw&&a.redraw()});a.drawDataLabels&&a.drawDataLabels();a.visible&&a.drawPoints();a.drawTracker&&a.options.enableMouseTracking!==!1&&a.drawTracker();b.inverted&&a.invertGroups();d.clip!==!1&&!a.sharedClipKey&&!h&&c.clip(b.clipRect);e&&a.animate();if(!h)a.animationTimeout=Sa(function(){a.afterAnimate()},e);a.isDirty=a.isDirtyData=!1;a.hasRendered=!0},redraw:function(){var a=this.chart,b=this.isDirty||this.isDirtyData,c=this.group,d=this.xAxis,e=this.yAxis;
c&&(a.inverted&&c.attr({width:a.plotWidth,height:a.plotHeight}),c.animate({translateX:p(d&&d.left,a.plotLeft),translateY:p(e&&e.top,a.plotTop)}));this.translate();this.render();b&&delete this.kdTree},kdDimensions:1,kdAxisArray:["clientX","plotY"],searchPoint:function(a,b){var c=this.xAxis,d=this.yAxis,e=this.chart.inverted;return this.searchKDTree({clientX:e?c.len-a.chartY+c.pos:a.chartX-c.pos,plotY:e?d.len-a.chartX+d.pos:a.chartY-d.pos},b)},buildKDTree:function(){function a(c,e,f){var g,h;if(h=c&&
c.length)return g=b.kdAxisArray[e%f],c.sort(function(a,b){return a[g]-b[g]}),h=Math.floor(h/2),{point:c[h],left:a(c.slice(0,h),e+1,f),right:a(c.slice(h+1),e+1,f)}}var b=this,c=b.kdDimensions;delete b.kdTree;Sa(function(){b.kdTree=a(b.getValidPoints(null,!b.directTouch),c,c)},b.options.kdNow?0:1)},searchKDTree:function(a,b){function c(a,b,j,k){var l=b.point,m=d.kdAxisArray[j%k],n,o,p=l;o=s(a[e])&&s(l[e])?Math.pow(a[e]-l[e],2):null;n=s(a[f])&&s(l[f])?Math.pow(a[f]-l[f],2):null;n=(o||0)+(n||0);l.dist=
s(n)?Math.sqrt(n):Number.MAX_VALUE;l.distX=s(o)?Math.sqrt(o):Number.MAX_VALUE;m=a[m]-l[m];n=m<0?"left":"right";o=m<0?"right":"left";b[n]&&(n=c(a,b[n],j+1,k),p=n[g]<p[g]?n:l);b[o]&&Math.sqrt(m*m)<p[g]&&(a=c(a,b[o],j+1,k),p=a[g]<p[g]?a:p);return p}var d=this,e=this.kdAxisArray[0],f=this.kdAxisArray[1],g=b?"distX":"dist";this.kdTree||this.buildKDTree();if(this.kdTree)return c(a,this.kdTree,this.kdDimensions,this.kdDimensions)}};Mb.prototype={destroy:function(){Ua(this,this.axis)},render:function(a){var b=
this.options,c=b.format,c=c?Na(c,this):b.formatter.call(this);this.label?this.label.attr({text:c,visibility:"hidden"}):this.label=this.axis.chart.renderer.text(c,null,null,b.useHTML).css(b.style).attr({align:this.textAlign,rotation:b.rotation,visibility:"hidden"}).add(a)},setOffset:function(a,b){var c=this.axis,d=c.chart,e=d.inverted,f=c.reversed,f=this.isNegative&&!f||!this.isNegative&&f,g=c.translate(c.usePercentage?100:this.total,0,0,0,1),c=c.translate(0),c=Q(g-c),h=d.xAxis[0].translate(this.x)+
a,i=d.plotHeight,f={x:e?f?g:g-c:h,y:e?i-h-b:f?i-g-c:i-g,width:e?c:b,height:e?b:c};if(e=this.label)e.align(this.alignOptions,null,f),f=e.alignAttr,e[this.options.crop===!1||d.isInsidePlot(f.x,f.y)?"show":"hide"](!0)}};jb.prototype.getStacks=function(){var a=this;q(a.yAxis,function(a){if(a.stacks&&a.hasVisibleSeries)a.oldStacks=a.stacks});q(a.series,function(b){if(b.options.stacking&&(b.visible===!0||a.options.chart.ignoreHiddenSeries===!1))b.stackKey=b.type+p(b.options.stack,"")})};ia.prototype.buildStacks=
function(){var a=this.series,b,c=p(this.options.reversedStacks,!0),d=a.length,e;if(!this.isXAxis){this.usePercentage=!1;for(e=d;e--;)a[c?e:d-e-1].setStackedPoints();for(e=d;e--;)b=a[c?e:d-e-1],b.setStackCliffs&&b.setStackCliffs();if(this.usePercentage)for(e=0;e<d;e++)a[e].setPercentStacks()}};ia.prototype.renderStackTotals=function(){var a=this.chart,b=a.renderer,c=this.stacks,d,e,f=this.stackTotalGroup;if(!f)this.stackTotalGroup=f=b.g("stack-labels").attr({visibility:"visible",zIndex:6}).add();f.translate(a.plotLeft,
a.plotTop);for(d in c)for(e in a=c[d],a)a[e].render(f)};ia.prototype.resetStacks=function(){var a=this.stacks,b,c;if(!this.isXAxis)for(b in a)for(c in a[b])a[b][c].touched<this.stacksTouched?(a[b][c].destroy(),delete a[b][c]):(a[b][c].total=null,a[b][c].cum=0)};ia.prototype.cleanStacks=function(){var a,b,c;if(!this.isXAxis){if(this.oldStacks)a=this.stacks=this.oldStacks;for(b in a)for(c in a[b])a[b][c].cum=a[b][c].total}};R.prototype.setStackedPoints=function(){if(this.options.stacking&&!(this.visible!==
!0&&this.chart.options.chart.ignoreHiddenSeries!==!1)){var a=this.processedXData,b=this.processedYData,c=[],d=b.length,e=this.options,f=e.threshold,g=e.startFromThreshold?f:0,h=e.stack,e=e.stacking,i=this.stackKey,j="-"+i,k=this.negStacks,l=this.yAxis,m=l.stacks,n=l.oldStacks,o,q,r,x,w,v,u;l.stacksTouched+=1;for(w=0;w<d;w++){v=a[w];u=b[w];o=this.getStackIndicator(o,v,this.index);x=o.key;r=(q=k&&u<(g?0:f))?j:i;m[r]||(m[r]={});if(!m[r][v])n[r]&&n[r][v]?(m[r][v]=n[r][v],m[r][v].total=null):m[r][v]=new Mb(l,
l.options.stackLabels,q,v,h);r=m[r][v];if(u!==null){r.points[x]=r.points[this.index]=[p(r.cum,g)];if(!s(r.cum))r.base=x;r.touched=l.stacksTouched;o.index>0&&this.singleStacks===!1&&(r.points[x][0]=r.points[this.index+","+v+",0"][0])}e==="percent"?(q=q?i:j,k&&m[q]&&m[q][v]?(q=m[q][v],r.total=q.total=t(q.total,r.total)+Q(u)||0):r.total=$(r.total+(Q(u)||0))):r.total=$(r.total+(u||0));r.cum=p(r.cum,g)+(u||0);if(u!==null)r.points[x].push(r.cum),c[w]=r.cum}if(e==="percent")l.usePercentage=!0;this.stackedYData=
c;l.oldStacks={}}};R.prototype.setPercentStacks=function(){var a=this,b=a.stackKey,c=a.yAxis.stacks,d=a.processedXData,e;q([b,"-"+b],function(b){var f;for(var g=d.length,h,i;g--;)if(h=d[g],e=a.getStackIndicator(e,h,a.index),f=(i=c[b]&&c[b][h])&&i.points[e.key],h=f)i=i.total?100/i.total:0,h[0]=$(h[0]*i),h[1]=$(h[1]*i),a.stackedYData[g]=h[1]})};R.prototype.getStackIndicator=function(a,b,c){!s(a)||a.x!==b?a={x:b,index:0}:a.index++;a.key=[c,b,a.index].join(",");return a};x(jb.prototype,{addSeries:function(a,
b,c){var d,e=this;a&&(b=p(b,!0),H(e,"addSeries",{options:a},function(){d=e.initSeries(a);e.isDirtyLegend=!0;e.linkSeries();b&&e.redraw(c)}));return d},addAxis:function(a,b,c,d){var e=b?"xAxis":"yAxis",f=this.options,a=E(a,{index:this[e].length,isX:b});new ia(this,a);f[e]=ua(f[e]||{});f[e].push(a);p(c,!0)&&this.redraw(d)},showLoading:function(a){var b=this,c=b.options,d=b.loadingDiv,e=c.loading,f=function(){d&&M(d,{left:b.plotLeft+"px",top:b.plotTop+"px",width:b.plotWidth+"px",height:b.plotHeight+
"px"})};if(!d)b.loadingDiv=d=ca(Pa,{className:"highcharts-loading"},x(e.style,{zIndex:10,display:"none"}),b.container),b.loadingSpan=ca("span",null,e.labelStyle,d),N(b,"redraw",f);b.loadingSpan.innerHTML=a||c.lang.loading;if(!b.loadingShown)M(d,{opacity:0,display:""}),Za(d,{opacity:e.style.opacity},{duration:e.showDuration||0}),b.loadingShown=!0;f()},hideLoading:function(){var a=this.options,b=this.loadingDiv;b&&Za(b,{opacity:0},{duration:a.loading.hideDuration||100,complete:function(){M(b,{display:"none"})}});
this.loadingShown=!1}});x(Ma.prototype,{update:function(a,b,c,d){function e(){f.applyOptions(a);if(f.y===null&&h)f.graphic=h.destroy();if(ba(a,!0))f.redraw=function(){if(h&&h.element&&a&&a.marker&&a.marker.symbol)f.graphic=h.destroy();if(a&&a.dataLabels&&f.dataLabel)f.dataLabel=f.dataLabel.destroy();f.redraw=null};i=f.index;g.updateParallelArrays(f,i);k.data[i]=ba(k.data[i],!0)?f.options:a;g.isDirty=g.isDirtyData=!0;if(!g.fixedBox&&g.hasCartesianSeries)j.isDirtyBox=!0;if(k.legendType==="point")j.isDirtyLegend=
!0;b&&j.redraw(c)}var f=this,g=f.series,h=f.graphic,i,j=g.chart,k=g.options,b=p(b,!0);d===!1?e():f.firePointEvent("update",{options:a},e)},remove:function(a,b){this.series.removePoint(pa(this,this.series.data),a,b)}});x(R.prototype,{addPoint:function(a,b,c,d){var e=this.options,f=this.data,g=this.chart,h=this.xAxis&&this.xAxis.names,i=e.data,j,k,l=this.xData,m,n,b=p(b,!0);j={series:this};this.pointClass.prototype.applyOptions.apply(j,[a]);n=j.x;m=l.length;if(this.requireSorting&&n<l[m-1])for(k=!0;m&&
l[m-1]>n;)m--;this.updateParallelArrays(j,"splice",m,0,0);this.updateParallelArrays(j,m);if(h&&j.name)h[n]=j.name;i.splice(m,0,a);k&&(this.data.splice(m,0,null),this.processData());e.legendType==="point"&&this.generatePoints();c&&(f[0]&&f[0].remove?f[0].remove(!1):(f.shift(),this.updateParallelArrays(j,"shift"),i.shift()));this.isDirtyData=this.isDirty=!0;b&&(this.getAttribs(),g.redraw(d))},removePoint:function(a,b,c){var d=this,e=d.data,f=e[a],g=d.points,h=d.chart,i=function(){g&&g.length===e.length&&
g.splice(a,1);e.splice(a,1);d.options.data.splice(a,1);d.updateParallelArrays(f||{series:d},"splice",a,1);f&&f.destroy();d.isDirty=!0;d.isDirtyData=!0;b&&h.redraw()};cb(c,h);b=p(b,!0);f?f.firePointEvent("remove",null,i):i()},remove:function(a,b,c){function d(){e.destroy();f.isDirtyLegend=f.isDirtyBox=!0;f.linkSeries();p(a,!0)&&f.redraw(b)}var e=this,f=e.chart;c!==!1?H(e,"remove",null,d):d()},update:function(a,b){var c=this,d=this.chart,e=this.userOptions,f=this.type,g=L[f].prototype,h=["group","markerGroup",
"dataLabelsGroup"],i;if(a.type&&a.type!==f||a.zIndex!==void 0)h.length=0;q(h,function(a){h[a]=c[a];delete c[a]});a=E(e,{animation:!1,index:this.index,pointStart:this.xData[0]},{data:this.options.data},a);this.remove(!1,null,!1);for(i in g)this[i]=z;x(this,L[a.type||f].prototype);q(h,function(a){c[a]=h[a]});this.init(d,a);d.linkSeries();p(b,!0)&&d.redraw(!1)}});x(ia.prototype,{update:function(a,b){var c=this.chart,a=c.options[this.coll][this.options.index]=E(this.userOptions,a);this.destroy(!0);this.init(c,
x(a,{events:z}));c.isDirtyBox=!0;p(b,!0)&&c.redraw()},remove:function(a){for(var b=this.chart,c=this.coll,d=this.series,e=d.length;e--;)d[e]&&d[e].remove(!1);ra(b.axes,this);ra(b[c],this);b.options[c].splice(this.options.index,1);q(b[c],function(a,b){a.options.index=b});this.destroy();b.isDirtyBox=!0;p(a,!0)&&b.redraw()},setTitle:function(a,b){this.update({title:a},b)},setCategories:function(a,b){this.update({categories:a},b)}});var xa=sa(R);L.line=xa;ga.area=E(ha,{softThreshold:!1,threshold:0});
var qa=sa(R,{type:"area",singleStacks:!1,getStackPoints:function(){var a=[],b=[],c=this.xAxis,d=this.yAxis,e=d.stacks[this.stackKey],f={},g=this.points,h=this.index,i=d.series,j=i.length,k,l=p(d.options.reversedStacks,!0)?1:-1,m,n;if(this.options.stacking){for(m=0;m<g.length;m++)f[g[m].x]=g[m];for(n in e)e[n].total!==null&&b.push(n);b.sort(function(a,b){return a-b});k=Ea(i,function(){return this.visible});q(b,function(g,i){var n=0,p,s;if(f[g]&&!f[g].isNull)a.push(f[g]),q([-1,1],function(a){var c=
a===1?"rightNull":"leftNull",d=0,n=e[b[i+a]];if(n)for(m=h;m>=0&&m<j;)p=n.points[m],p||(m===h?f[g][c]=!0:k[m]&&(s=e[g].points[m])&&(d-=s[1]-s[0])),m+=l;f[g][a===1?"rightCliff":"leftCliff"]=d});else{for(m=h;m>=0&&m<j;){if(p=e[g].points[m]){n=p[1];break}m+=l}n=d.toPixels(n,!0);a.push({isNull:!0,plotX:c.toPixels(g,!0),plotY:n,yBottom:n})}})}return a},getGraphPath:function(a){var b=R.prototype.getGraphPath,c=this.options,d=c.stacking,e=this.yAxis,f,g,h=[],i=[],j=this.index,k,l=e.stacks[this.stackKey],
m=c.threshold,n=e.getThreshold(c.threshold),o,c=c.connectNulls||d==="percent",q=function(b,c,f){var g=a[b],b=d&&l[g.x].points[j],o=g[f+"Null"]||0,f=g[f+"Cliff"]||0,p,q,g=!0;f||o?(p=(o?b[0]:b[1])+f,q=b[0]+f,g=!!o):!d&&a[c]&&a[c].isNull&&(p=q=m);p!==void 0&&(i.push({plotX:k,plotY:p===null?n:e.getThreshold(p),isNull:g}),h.push({plotX:k,plotY:q===null?n:e.getThreshold(q),doCurve:!1}))},a=a||this.points;d&&(a=this.getStackPoints());for(f=0;f<a.length;f++)if(g=a[f].isNull,k=p(a[f].rectPlotX,a[f].plotX),
o=p(a[f].yBottom,n),!g||c){c||q(f,f-1,"left");if(!g||d||!c)i.push(a[f]),h.push({x:f,plotX:k,plotY:o});c||q(f,f+1,"right")}f=b.call(this,i,!0,!0);h.reversed=!0;g=b.call(this,h,!0,!0);g.length&&(g[0]=S);g=f.concat(g);b=b.call(this,i,!1,c);g.xMap=f.xMap;this.areaPath=g;return b},drawGraph:function(){this.areaPath=[];R.prototype.drawGraph.apply(this);var a=this,b=this.areaPath,c=this.options,d=[["area",this.color,c.fillColor]];q(this.zones,function(b,f){d.push(["zoneArea"+f,b.color||a.color,b.fillColor||
c.fillColor])});q(d,function(d){var f=d[0],g=a[f];g?(g.endX=b.xMap,g.animate({d:b})):(g={fill:d[2]||d[1],zIndex:0},d[2]||(g["fill-opacity"]=p(c.fillOpacity,0.75)),g=a[f]=a.chart.renderer.path(b).attr(g).add(a.group),g.isArea=!0);g.startX=b.xMap;g.shiftUnit=c.step?2:1})},drawLegendSymbol:P.drawRectangle});L.area=qa;ga.spline=E(ha);xa=sa(R,{type:"spline",getPointSpline:function(a,b,c){var d=b.plotX,e=b.plotY,f=a[c-1],c=a[c+1],g,h,i,j;if(f&&!f.isNull&&f.doCurve!==!1&&c&&!c.isNull&&c.doCurve!==!1){a=
f.plotY;i=c.plotX;var c=c.plotY,k=0;g=(1.5*d+f.plotX)/2.5;h=(1.5*e+a)/2.5;i=(1.5*d+i)/2.5;j=(1.5*e+c)/2.5;i!==g&&(k=(j-h)*(i-d)/(i-g)+e-j);h+=k;j+=k;h>a&&h>e?(h=t(a,e),j=2*e-h):h<a&&h<e&&(h=F(a,e),j=2*e-h);j>c&&j>e?(j=t(c,e),h=2*e-j):j<c&&j<e&&(j=F(c,e),h=2*e-j);b.rightContX=i;b.rightContY=j}b=["C",p(f.rightContX,f.plotX),p(f.rightContY,f.plotY),p(g,d),p(h,e),d,e];f.rightContX=f.rightContY=null;return b}});L.spline=xa;ga.areaspline=E(ga.area);qa=qa.prototype;xa=sa(xa,{type:"areaspline",getStackPoints:qa.getStackPoints,
getGraphPath:qa.getGraphPath,setStackCliffs:qa.setStackCliffs,drawGraph:qa.drawGraph,drawLegendSymbol:P.drawRectangle});L.areaspline=xa;ga.column=E(ha,{borderColor:"#FFFFFF",borderRadius:0,groupPadding:0.2,marker:null,pointPadding:0.1,minPointLength:0,cropThreshold:50,pointRange:null,states:{hover:{brightness:0.1,shadow:!1,halo:!1},select:{color:"#C0C0C0",borderColor:"#000000",shadow:!1}},dataLabels:{align:null,verticalAlign:null,y:null},softThreshold:!1,startFromThreshold:!0,stickyTracking:!1,tooltip:{distance:6},
threshold:0});xa=sa(R,{type:"column",pointAttrToOptions:{stroke:"borderColor",fill:"color",r:"borderRadius"},cropShoulder:0,directTouch:!0,trackerGroups:["group","dataLabelsGroup"],negStacks:!0,init:function(){R.prototype.init.apply(this,arguments);var a=this,b=a.chart;b.hasRendered&&q(b.series,function(b){if(b.type===a.type)b.isDirty=!0})},getColumnMetrics:function(){var a=this,b=a.options,c=a.xAxis,d=a.yAxis,e=c.reversed,f,g={},h=0;b.grouping===!1?h=1:q(a.chart.series,function(b){var c=b.options,
e=b.yAxis,i;if(b.type===a.type&&b.visible&&d.len===e.len&&d.pos===e.pos)c.stacking?(f=b.stackKey,g[f]===z&&(g[f]=h++),i=g[f]):c.grouping!==!1&&(i=h++),b.columnIndex=i});var i=F(Q(c.transA)*(c.ordinalSlope||b.pointRange||c.closestPointRange||c.tickInterval||1),c.len),j=i*b.groupPadding,k=(i-2*j)/h,b=F(b.maxPointWidth||c.len,p(b.pointWidth,k*(1-2*b.pointPadding)));a.columnMetrics={width:b,offset:(k-b)/2+(j+((a.columnIndex||0)+(e?1:0))*k-i/2)*(e?-1:1)};return a.columnMetrics},crispCol:function(a,b,c,
d){var e=this.chart,f=this.borderWidth,g=-(f%2?0.5:0),f=f%2?0.5:1;e.inverted&&e.renderer.isVML&&(f+=1);c=Math.round(a+c)+g;a=Math.round(a)+g;c-=a;d=Math.round(b+d)+f;g=Q(b)<=0.5&&d>0.5;b=Math.round(b)+f;d-=b;g&&d&&(b-=1,d+=1);return{x:a,y:b,width:c,height:d}},translate:function(){var a=this,b=a.chart,c=a.options,d=a.borderWidth=p(c.borderWidth,a.closestPointRange*a.xAxis.transA<2?0:1),e=a.yAxis,f=a.translatedThreshold=e.getThreshold(c.threshold),g=p(c.minPointLength,5),h=a.getColumnMetrics(),i=h.width,
j=a.barW=t(i,1+2*d),k=a.pointXOffset=h.offset;b.inverted&&(f-=0.5);c.pointPadding&&(j=va(j));R.prototype.translate.apply(a);q(a.points,function(c){var d=F(p(c.yBottom,f),9E4),h=999+Q(d),h=F(t(-h,c.plotY),e.len+h),o=c.plotX+k,q=j,r=F(h,d),s,w=t(h,d)-r;Q(w)<g&&g&&(w=g,s=!e.reversed&&!c.negative||e.reversed&&c.negative,r=Q(r-f)>g?d-g:f-(s?g:0));c.barX=o;c.pointWidth=i;c.tooltipPos=b.inverted?[e.len+e.pos-b.plotLeft-h,a.xAxis.len-o-q/2,w]:[o+q/2,h+e.pos-b.plotTop,w];c.shapeType="rect";c.shapeArgs=a.crispCol.apply(a,
c.isNull?[c.plotX,e.len/2,0,0]:[o,r,q,w])})},getSymbol:Ca,drawLegendSymbol:P.drawRectangle,drawGraph:Ca,drawPoints:function(){var a=this,b=this.chart,c=a.options,d=b.renderer,e=c.animationLimit||250,f,g;q(a.points,function(h){var i=h.graphic,j;if(I(h.plotY)&&h.y!==null)f=h.shapeArgs,j=s(a.borderWidth)?{"stroke-width":a.borderWidth}:{},g=h.pointAttr[h.selected?"select":""]||a.pointAttr[""],i?(Ka(i),i.attr(j).attr(g)[b.pointCount<e?"animate":"attr"](E(f))):h.graphic=d[h.shapeType](f).attr(j).attr(g).add(h.group||
a.group).shadow(c.shadow,null,c.stacking&&!c.borderRadius);else if(i)h.graphic=i.destroy()})},animate:function(a){var b=this,c=this.yAxis,d=b.options,e=this.chart.inverted,f={};if(fa)a?(f.scaleY=0.001,a=F(c.pos+c.len,t(c.pos,c.toPixels(d.threshold))),e?f.translateX=a-c.len:f.translateY=a,b.group.attr(f)):(f[e?"translateX":"translateY"]=c.pos,b.group.animate(f,x(Wa(b.options.animation),{step:function(a,c){b.group.attr({scaleY:t(0.001,c.pos)})}})),b.animate=null)},remove:function(){var a=this,b=a.chart;
b.hasRendered&&q(b.series,function(b){if(b.type===a.type)b.isDirty=!0});R.prototype.remove.apply(a,arguments)}});L.column=xa;ga.bar=E(ga.column);qa=sa(xa,{type:"bar",inverted:!0});L.bar=qa;ga.scatter=E(ha,{lineWidth:0,marker:{enabled:!0},tooltip:{headerFormat:'<span style="color:{point.color}">\u25cf</span> <span style="font-size: 10px;"> {series.name}</span><br/>',pointFormat:"x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"}});qa=sa(R,{type:"scatter",sorted:!1,requireSorting:!1,noSharedTooltip:!0,
trackerGroups:["group","markerGroup","dataLabelsGroup"],takeOrdinalPosition:!1,kdDimensions:2,drawGraph:function(){this.options.lineWidth&&R.prototype.drawGraph.call(this)}});L.scatter=qa;ga.pie=E(ha,{borderColor:"#FFFFFF",borderWidth:1,center:[null,null],clip:!1,colorByPoint:!0,dataLabels:{distance:30,enabled:!0,formatter:function(){return this.y===null?void 0:this.point.name},x:0},ignoreHiddenPoint:!0,legendType:"point",marker:null,size:null,showInLegend:!1,slicedOffset:10,states:{hover:{brightness:0.1,
shadow:!1}},stickyTracking:!1,tooltip:{followPointer:!0}});ha={type:"pie",isCartesian:!1,pointClass:sa(Ma,{init:function(){Ma.prototype.init.apply(this,arguments);var a=this,b;a.name=p(a.name,"Slice");b=function(b){a.slice(b.type==="select")};N(a,"select",b);N(a,"unselect",b);return a},setVisible:function(a,b){var c=this,d=c.series,e=d.chart,f=d.options.ignoreHiddenPoint,b=p(b,f);if(a!==c.visible){c.visible=c.options.visible=a=a===z?!c.visible:a;d.options.data[pa(c,d.data)]=c.options;q(["graphic",
"dataLabel","connector","shadowGroup"],function(b){if(c[b])c[b][a?"show":"hide"](!0)});c.legendItem&&e.legend.colorizeItem(c,a);!a&&c.state==="hover"&&c.setState("");if(f)d.isDirty=!0;b&&e.redraw()}},slice:function(a,b,c){var d=this.series;cb(c,d.chart);p(b,!0);this.sliced=this.options.sliced=a=s(a)?a:!this.sliced;d.options.data[pa(this,d.data)]=this.options;a=a?this.slicedTranslation:{translateX:0,translateY:0};this.graphic.animate(a);this.shadowGroup&&this.shadowGroup.animate(a)},haloPath:function(a){var b=
this.shapeArgs,c=this.series.chart;return this.sliced||!this.visible?[]:this.series.chart.renderer.symbols.arc(c.plotLeft+b.x,c.plotTop+b.y,b.r+a,b.r+a,{innerR:this.shapeArgs.r,start:b.start,end:b.end})}}),requireSorting:!1,directTouch:!0,noSharedTooltip:!0,trackerGroups:["group","dataLabelsGroup"],axisTypes:[],pointAttrToOptions:{stroke:"borderColor","stroke-width":"borderWidth",fill:"color"},animate:function(a){var b=this,c=b.points,d=b.startAngleRad;if(!a)q(c,function(a){var c=a.graphic,g=a.shapeArgs;
c&&(c.attr({r:a.startR||b.center[3]/2,start:d,end:d}),c.animate({r:g.r,start:g.start,end:g.end},b.options.animation))}),b.animate=null},updateTotals:function(){var a,b=0,c=this.points,d=c.length,e,f=this.options.ignoreHiddenPoint;for(a=0;a<d;a++){e=c[a];if(e.y<0)e.y=null;b+=f&&!e.visible?0:e.y}this.total=b;for(a=0;a<d;a++)e=c[a],e.percentage=b>0&&(e.visible||!f)?e.y/b*100:0,e.total=b},generatePoints:function(){R.prototype.generatePoints.call(this);this.updateTotals()},translate:function(a){this.generatePoints();
var b=0,c=this.options,d=c.slicedOffset,e=d+c.borderWidth,f,g,h,i=c.startAngle||0,j=this.startAngleRad=ta/180*(i-90),i=(this.endAngleRad=ta/180*(p(c.endAngle,i+360)-90))-j,k=this.points,l=c.dataLabels.distance,c=c.ignoreHiddenPoint,m,n=k.length,o;if(!a)this.center=a=this.getCenter();this.getX=function(b,c){h=Z.asin(F((b-a[1])/(a[2]/2+l),1));return a[0]+(c?-1:1)*W(h)*(a[2]/2+l)};for(m=0;m<n;m++){o=k[m];f=j+b*i;if(!c||o.visible)b+=o.percentage/100;g=j+b*i;o.shapeType="arc";o.shapeArgs={x:a[0],y:a[1],
r:a[2]/2,innerR:a[3]/2,start:C(f*1E3)/1E3,end:C(g*1E3)/1E3};h=(g+f)/2;h>1.5*ta?h-=2*ta:h<-ta/2&&(h+=2*ta);o.slicedTranslation={translateX:C(W(h)*d),translateY:C(da(h)*d)};f=W(h)*a[2]/2;g=da(h)*a[2]/2;o.tooltipPos=[a[0]+f*0.7,a[1]+g*0.7];o.half=h<-ta/2||h>ta/2?1:0;o.angle=h;e=F(e,l/2);o.labelPos=[a[0]+f+W(h)*l,a[1]+g+da(h)*l,a[0]+f+W(h)*e,a[1]+g+da(h)*e,a[0]+f,a[1]+g,l<0?"center":o.half?"right":"left",h]}},drawGraph:null,drawPoints:function(){var a=this,b=a.chart.renderer,c,d,e=a.options.shadow,f,
g,h,i;if(e&&!a.shadowGroup)a.shadowGroup=b.g("shadow").add(a.group);q(a.points,function(j){if(j.y!==null){d=j.graphic;h=j.shapeArgs;f=j.shadowGroup;g=j.pointAttr[j.selected?"select":""];if(!g.stroke)g.stroke=g.fill;if(e&&!f)f=j.shadowGroup=b.g("shadow").add(a.shadowGroup);c=j.sliced?j.slicedTranslation:{translateX:0,translateY:0};f&&f.attr(c);if(d)d.setRadialReference(a.center).attr(g).animate(x(h,c));else{i={"stroke-linejoin":"round"};if(!j.visible)i.visibility="hidden";j.graphic=d=b[j.shapeType](h).setRadialReference(a.center).attr(g).attr(i).attr(c).add(a.group).shadow(e,
f)}}})},searchPoint:Ca,sortByAngle:function(a,b){a.sort(function(a,d){return a.angle!==void 0&&(d.angle-a.angle)*b})},drawLegendSymbol:P.drawRectangle,getCenter:Eb.getCenter,getSymbol:Ca};ha=sa(R,ha);L.pie=ha;R.prototype.drawDataLabels=function(){var a=this,b=a.options,c=b.cursor,d=b.dataLabels,e=a.points,f,g,h=a.hasRendered||0,i,j,k=p(d.defer,!0),l=a.chart.renderer;if(d.enabled||a._hasPointLabels)a.dlProcessOptions&&a.dlProcessOptions(d),j=a.plotGroup("dataLabelsGroup","data-labels",k&&!h?"hidden":
"visible",d.zIndex||6),k&&(j.attr({opacity:+h}),h||N(a,"afterAnimate",function(){a.visible&&j.show(!0);j[b.animation?"animate":"attr"]({opacity:1},{duration:200})})),g=d,q(e,function(e){var h,k=e.dataLabel,q,r,t=e.connector,w=!0,v,u={};f=e.dlOptions||e.options&&e.options.dataLabels;h=p(f&&f.enabled,g.enabled)&&e.y!==null;if(k&&!h)e.dataLabel=k.destroy();else if(h){d=E(g,f);v=d.style;h=d.rotation;q=e.getLabelConfig();i=d.format?Na(d.format,q):d.formatter.call(q,d);v.color=p(d.color,v.color,a.color,
"black");if(k)if(s(i))k.attr({text:i}),w=!1;else{if(e.dataLabel=k=k.destroy(),t)e.connector=t.destroy()}else if(s(i)){k={fill:d.backgroundColor,stroke:d.borderColor,"stroke-width":d.borderWidth,r:d.borderRadius||0,rotation:h,padding:d.padding,zIndex:1};if(v.color==="contrast")u.color=d.inside||d.distance<0||b.stacking?l.getContrast(e.color||a.color):"#000000";if(c)u.cursor=c;for(r in k)k[r]===z&&delete k[r];k=e.dataLabel=l[h?"text":"label"](i,0,-9999,d.shape,null,null,d.useHTML).attr(k).css(x(v,u)).add(j).shadow(d.shadow)}k&&
a.alignDataLabel(e,k,d,null,w)}})};R.prototype.alignDataLabel=function(a,b,c,d,e){var f=this.chart,g=f.inverted,h=p(a.plotX,-9999),i=p(a.plotY,-9999),j=b.getBBox(),k=f.renderer.fontMetrics(c.style.fontSize).b,l=c.rotation,m=c.align,n=this.visible&&(a.series.forceDL||f.isInsidePlot(h,C(i),g)||d&&f.isInsidePlot(h,g?d.x+1:d.y+d.height-1,g)),o=p(c.overflow,"justify")==="justify";if(n)d=x({x:g?f.plotWidth-i:h,y:C(g?f.plotHeight-h:i),width:0,height:0},d),x(c,{width:j.width,height:j.height}),l?(o=!1,g=f.renderer.rotCorr(k,
l),g={x:d.x+c.x+d.width/2+g.x,y:d.y+c.y+{top:0,middle:0.5,bottom:1}[c.verticalAlign]*d.height},b[e?"attr":"animate"](g).attr({align:m}),h=(l+720)%360,h=h>180&&h<360,m==="left"?g.y-=h?j.height:0:m==="center"?(g.x-=j.width/2,g.y-=j.height/2):m==="right"&&(g.x-=j.width,g.y-=h?0:j.height)):(b.align(c,null,d),g=b.alignAttr),o?this.justifyDataLabel(b,c,g,j,d,e):p(c.crop,!0)&&(n=f.isInsidePlot(g.x,g.y)&&f.isInsidePlot(g.x+j.width,g.y+j.height)),c.shape&&!l&&b.attr({anchorX:a.plotX,anchorY:a.plotY});if(!n)Ka(b),
b.attr({y:-9999}),b.placed=!1};R.prototype.justifyDataLabel=function(a,b,c,d,e,f){var g=this.chart,h=b.align,i=b.verticalAlign,j,k,l=a.box?0:a.padding||0;j=c.x+l;if(j<0)h==="right"?b.align="left":b.x=-j,k=!0;j=c.x+d.width-l;if(j>g.plotWidth)h==="left"?b.align="right":b.x=g.plotWidth-j,k=!0;j=c.y+l;if(j<0)i==="bottom"?b.verticalAlign="top":b.y=-j,k=!0;j=c.y+d.height-l;if(j>g.plotHeight)i==="top"?b.verticalAlign="bottom":b.y=g.plotHeight-j,k=!0;if(k)a.placed=!f,a.align(b,null,e)};if(L.pie)L.pie.prototype.drawDataLabels=
function(){var a=this,b=a.data,c,d=a.chart,e=a.options.dataLabels,f=p(e.connectorPadding,10),g=p(e.connectorWidth,1),h=d.plotWidth,i=d.plotHeight,j,k,l=p(e.softConnector,!0),m=e.distance,n=a.center,o=n[2]/2,s=n[1],r=m>0,u,w,v,x=[[],[]],z,y,D,E,B,G=[0,0,0,0],M=function(a,b){return b.y-a.y};if(a.visible&&(e.enabled||a._hasPointLabels)){R.prototype.drawDataLabels.apply(a);q(b,function(a){if(a.dataLabel&&a.visible)x[a.half].push(a),a.dataLabel._pos=null});for(E=2;E--;){var H=[],N=[],I=x[E],L=I.length,
J;if(L){a.sortByAngle(I,E-0.5);for(B=b=0;!b&&I[B];)b=I[B]&&I[B].dataLabel&&(I[B].dataLabel.getBBox().height||21),B++;if(m>0){w=F(s+o+m,d.plotHeight);for(B=t(0,s-o-m);B<=w;B+=b)H.push(B);w=H.length;if(L>w){c=[].concat(I);c.sort(M);for(B=L;B--;)c[B].rank=B;for(B=L;B--;)I[B].rank>=w&&I.splice(B,1);L=I.length}for(B=0;B<L;B++){c=I[B];v=c.labelPos;c=9999;var P,O;for(O=0;O<w;O++)P=Q(H[O]-v[1]),P<c&&(c=P,J=O);if(J<B&&H[B]!==null)J=B;else for(w<L-B+J&&H[B]!==null&&(J=w-L+B);H[J]===null;)J++;N.push({i:J,y:H[J]});
H[J]=null}N.sort(M)}for(B=0;B<L;B++){c=I[B];v=c.labelPos;u=c.dataLabel;D=c.visible===!1?"hidden":"inherit";c=v[1];if(m>0){if(w=N.pop(),J=w.i,y=w.y,c>y&&H[J+1]!==null||c<y&&H[J-1]!==null)y=F(t(0,c),d.plotHeight)}else y=c;z=e.justify?n[0]+(E?-1:1)*(o+m):a.getX(y===s-o-m||y===s+o+m?c:y,E);u._attr={visibility:D,align:v[6]};u._pos={x:z+e.x+({left:f,right:-f}[v[6]]||0),y:y+e.y-10};u.connX=z;u.connY=y;if(this.options.size===null)w=u.width,z-w<f?G[3]=t(C(w-z+f),G[3]):z+w>h-f&&(G[1]=t(C(z+w-h+f),G[1])),y-
b/2<0?G[0]=t(C(-y+b/2),G[0]):y+b/2>i&&(G[2]=t(C(y+b/2-i),G[2]))}}}if(Ha(G)===0||this.verifyDataLabelOverflow(G))this.placeDataLabels(),r&&g&&q(this.points,function(b){j=b.connector;v=b.labelPos;if((u=b.dataLabel)&&u._pos&&b.visible)D=u._attr.visibility,z=u.connX,y=u.connY,k=l?[X,z+(v[6]==="left"?5:-5),y,"C",z,y,2*v[2]-v[4],2*v[3]-v[5],v[2],v[3],S,v[4],v[5]]:[X,z+(v[6]==="left"?5:-5),y,S,v[2],v[3],S,v[4],v[5]],j?(j.animate({d:k}),j.attr("visibility",D)):b.connector=j=a.chart.renderer.path(k).attr({"stroke-width":g,
stroke:e.connectorColor||b.color||"#606060",visibility:D}).add(a.dataLabelsGroup);else if(j)b.connector=j.destroy()})}},L.pie.prototype.placeDataLabels=function(){q(this.points,function(a){var b=a.dataLabel;if(b&&a.visible)(a=b._pos)?(b.attr(b._attr),b[b.moved?"animate":"attr"](a),b.moved=!0):b&&b.attr({y:-9999})})},L.pie.prototype.alignDataLabel=Ca,L.pie.prototype.verifyDataLabelOverflow=function(a){var b=this.center,c=this.options,d=c.center,e=c.minSize||80,f=e,g;d[0]!==null?f=t(b[2]-t(a[1],a[3]),
e):(f=t(b[2]-a[1]-a[3],e),b[0]+=(a[3]-a[1])/2);d[1]!==null?f=t(F(f,b[2]-t(a[0],a[2])),e):(f=t(F(f,b[2]-a[0]-a[2]),e),b[1]+=(a[0]-a[2])/2);f<b[2]?(b[2]=f,b[3]=Math.min(/%$/.test(c.innerSize||0)?f*parseFloat(c.innerSize||0)/100:parseFloat(c.innerSize||0),f),this.translate(b),this.drawDataLabels&&this.drawDataLabels()):g=!0;return g};if(L.column)L.column.prototype.alignDataLabel=function(a,b,c,d,e){var f=this.chart.inverted,g=a.series,h=a.dlBox||a.shapeArgs,i=p(a.below,a.plotY>p(this.translatedThreshold,
g.yAxis.len)),j=p(c.inside,!!this.options.stacking);if(h){d=E(h);if(d.y<0)d.height+=d.y,d.y=0;h=d.y+d.height-g.yAxis.len;h>0&&(d.height-=h);f&&(d={x:g.yAxis.len-d.y-d.height,y:g.xAxis.len-d.x-d.width,width:d.height,height:d.width});if(!j)f?(d.x+=i?0:d.width,d.width=0):(d.y+=i?d.height:0,d.height=0)}c.align=p(c.align,!f||j?"center":i?"right":"left");c.verticalAlign=p(c.verticalAlign,f||j?"middle":i?"top":"bottom");R.prototype.alignDataLabel.call(this,a,b,c,d,e)};(function(a){var b=a.Chart,c=a.each,
d=a.pick,e=a.addEvent;b.prototype.callbacks.push(function(a){function b(){var e=[];c(a.series,function(a){var b=a.options.dataLabels,f=a.dataLabelCollections||["dataLabel"];(b.enabled||a._hasPointLabels)&&!b.allowOverlap&&a.visible&&c(f,function(b){c(a.points,function(a){if(a[b])a[b].labelrank=d(a.labelrank,a.shapeArgs&&a.shapeArgs.height),e.push(a[b])})})});a.hideOverlappingLabels(e)}b();e(a,"redraw",b)});b.prototype.hideOverlappingLabels=function(a){var b=a.length,d,e,j,k,l,m,n,o,p;for(e=0;e<b;e++)if(d=
a[e])d.oldOpacity=d.opacity,d.newOpacity=1;a.sort(function(a,b){return(b.labelrank||0)-(a.labelrank||0)});for(e=0;e<b;e++){j=a[e];for(d=e+1;d<b;++d)if(k=a[d],j&&k&&j.placed&&k.placed&&j.newOpacity!==0&&k.newOpacity!==0&&(l=j.alignAttr,m=k.alignAttr,n=j.parentGroup,o=k.parentGroup,p=2*(j.box?0:j.padding),l=!(m.x+o.translateX>l.x+n.translateX+(j.width-p)||m.x+o.translateX+(k.width-p)<l.x+n.translateX||m.y+o.translateY>l.y+n.translateY+(j.height-p)||m.y+o.translateY+(k.height-p)<l.y+n.translateY)))(j.labelrank<
k.labelrank?j:k).newOpacity=0}c(a,function(a){var b,c;if(a){c=a.newOpacity;if(a.oldOpacity!==c&&a.placed)c?a.show(!0):b=function(){a.hide()},a.alignAttr.opacity=c,a[a.isOld?"animate":"attr"](a.alignAttr,null,b);a.isOld=!0}})}})(u);ha=u.TrackerMixin={drawTrackerPoint:function(){var a=this,b=a.chart,c=b.pointer,d=a.options.cursor,e=d&&{cursor:d},f=function(a){for(var c=a.target,d;c&&!d;)d=c.point,c=c.parentNode;if(d!==z&&d!==b.hoverPoint)d.onMouseOver(a)};q(a.points,function(a){if(a.graphic)a.graphic.element.point=
a;if(a.dataLabel)a.dataLabel.element.point=a});if(!a._hasTracking)q(a.trackerGroups,function(b){if(a[b]&&(a[b].addClass("highcharts-tracker").on("mouseover",f).on("mouseout",function(a){c.onTrackerMouseOut(a)}).css(e),gb))a[b].on("touchstart",f)}),a._hasTracking=!0},drawTrackerGraph:function(){var a=this,b=a.options,c=b.trackByArea,d=[].concat(c?a.areaPath:a.graphPath),e=d.length,f=a.chart,g=f.pointer,h=f.renderer,i=f.options.tooltip.snap,j=a.tracker,k=b.cursor,l=k&&{cursor:k},m=function(){if(f.hoverSeries!==
a)a.onMouseOver()},n="rgba(192,192,192,"+(fa?1.0E-4:0.002)+")";if(e&&!c)for(k=e+1;k--;)d[k]===X&&d.splice(k+1,0,d[k+1]-i,d[k+2],S),(k&&d[k]===X||k===e)&&d.splice(k,0,S,d[k-2]+i,d[k-1]);j?j.attr({d:d}):(a.tracker=h.path(d).attr({"stroke-linejoin":"round",visibility:a.visible?"visible":"hidden",stroke:n,fill:c?n:"none","stroke-width":b.lineWidth+(c?0:2*i),zIndex:2}).add(a.group),q([a.tracker,a.markerGroup],function(a){a.addClass("highcharts-tracker").on("mouseover",m).on("mouseout",function(a){g.onTrackerMouseOut(a)}).css(l);
if(gb)a.on("touchstart",m)}))}};if(L.column)xa.prototype.drawTracker=ha.drawTrackerPoint;if(L.pie)L.pie.prototype.drawTracker=ha.drawTrackerPoint;if(L.scatter)qa.prototype.drawTracker=ha.drawTrackerPoint;x(sb.prototype,{setItemEvents:function(a,b,c,d,e){var f=this;(c?b:a.legendGroup).on("mouseover",function(){a.setState("hover");b.css(f.options.itemHoverStyle)}).on("mouseout",function(){b.css(a.visible?d:e);a.setState()}).on("click",function(b){var c=function(){a.setVisible&&a.setVisible()},b={browserEvent:b};
a.firePointEvent?a.firePointEvent("legendItemClick",b,c):H(a,"legendItemClick",b,c)})},createCheckboxForItem:function(a){a.checkbox=ca("input",{type:"checkbox",checked:a.selected,defaultChecked:a.selected},this.options.itemCheckboxStyle,this.chart.container);N(a.checkbox,"click",function(b){H(a.series||a,"checkboxClick",{checked:b.target.checked,item:a},function(){a.select()})})}});T.legend.itemStyle.cursor="pointer";x(jb.prototype,{showResetZoom:function(){var a=this,b=T.lang,c=a.options.chart.resetZoomButton,
d=c.theme,e=d.states,f=c.relativeTo==="chart"?null:"plotBox";this.resetZoomButton=a.renderer.button(b.resetZoom,null,null,function(){a.zoomOut()},d,e&&e.hover).attr({align:c.position.align,title:b.resetZoomTitle}).add().align(c.position,!1,f)},zoomOut:function(){var a=this;H(a,"selection",{resetSelection:!0},function(){a.zoom()})},zoom:function(a){var b,c=this.pointer,d=!1,e;!a||a.resetSelection?q(this.axes,function(a){b=a.zoom()}):q(a.xAxis.concat(a.yAxis),function(a){var e=a.axis,h=e.isXAxis;if(c[h?
"zoomX":"zoomY"]||c[h?"pinchX":"pinchY"])b=e.zoom(a.min,a.max),e.displayBtn&&(d=!0)});e=this.resetZoomButton;if(d&&!e)this.showResetZoom();else if(!d&&ba(e))this.resetZoomButton=e.destroy();b&&this.redraw(p(this.options.chart.animation,a&&a.animation,this.pointCount<100))},pan:function(a,b){var c=this,d=c.hoverPoints,e;d&&q(d,function(a){a.setState()});q(b==="xy"?[1,0]:[1],function(b){var b=c[b?"xAxis":"yAxis"][0],d=b.horiz,h=a[d?"chartX":"chartY"],d=d?"mouseDownX":"mouseDownY",i=c[d],j=(b.pointRange||
0)/2,k=b.getExtremes(),l=b.toValue(i-h,!0)+j,j=b.toValue(i+b.len-h,!0)-j,i=i>h;if(b.series.length&&(i||l>F(k.dataMin,k.min))&&(!i||j<t(k.dataMax,k.max)))b.setExtremes(l,j,!1,!1,{trigger:"pan"}),e=!0;c[d]=h});e&&c.redraw(!1);M(c.container,{cursor:"move"})}});x(Ma.prototype,{select:function(a,b){var c=this,d=c.series,e=d.chart,a=p(a,!c.selected);c.firePointEvent(a?"select":"unselect",{accumulate:b},function(){c.selected=c.options.selected=a;d.options.data[pa(c,d.data)]=c.options;c.setState(a&&"select");
b||q(e.getSelectedPoints(),function(a){if(a.selected&&a!==c)a.selected=a.options.selected=!1,d.options.data[pa(a,d.data)]=a.options,a.setState(""),a.firePointEvent("unselect")})})},onMouseOver:function(a,b){var c=this.series,d=c.chart,e=d.tooltip,f=d.hoverPoint;if(d.hoverSeries!==c)c.onMouseOver();if(f&&f!==this)f.onMouseOut();if(this.series&&(this.firePointEvent("mouseOver"),e&&(!e.shared||c.noSharedTooltip)&&e.refresh(this,a),this.setState("hover"),!b))d.hoverPoint=this},onMouseOut:function(){var a=
this.series.chart,b=a.hoverPoints;this.firePointEvent("mouseOut");if(!b||pa(this,b)===-1)this.setState(),a.hoverPoint=null},importEvents:function(){if(!this.hasImportedEvents){var a=E(this.series.options.point,this.options).events,b;this.events=a;for(b in a)N(this,b,a[b]);this.hasImportedEvents=!0}},setState:function(a,b){var c=V(this.plotX),d=this.plotY,e=this.series,f=e.options.states,g=ga[e.type].marker&&e.options.marker,h=g&&!g.enabled,i=g&&g.states[a],j=i&&i.enabled===!1,k=e.stateMarkerGraphic,
l=this.marker||{},m=e.chart,n=e.halo,o,a=a||"";o=this.pointAttr[a]||e.pointAttr[a];if(!(a===this.state&&!b||this.selected&&a!=="select"||f[a]&&f[a].enabled===!1||a&&(j||h&&i.enabled===!1)||a&&l.states&&l.states[a]&&l.states[a].enabled===!1)){if(this.graphic)g=g&&this.graphic.symbolName&&o.r,this.graphic.attr(E(o,g?{x:c-g,y:d-g,width:2*g,height:2*g}:{})),k&&k.hide();else{if(a&&i)if(g=i.radius,l=l.symbol||e.symbol,k&&k.currentSymbol!==l&&(k=k.destroy()),k)k[b?"animate":"attr"]({x:c-g,y:d-g});else if(l)e.stateMarkerGraphic=
k=m.renderer.symbol(l,c-g,d-g,2*g,2*g).attr(o).add(e.markerGroup),k.currentSymbol=l;if(k)k[a&&m.isInsidePlot(c,d,m.inverted)?"show":"hide"](),k.element.point=this}if((c=f[a]&&f[a].halo)&&c.size){if(!n)e.halo=n=m.renderer.path().add(m.seriesGroup);n.attr(x({fill:this.color||e.color,"fill-opacity":c.opacity,zIndex:-1},c.attributes))[b?"animate":"attr"]({d:this.haloPath(c.size)})}else n&&n.attr({d:[]});this.state=a}},haloPath:function(a){var b=this.series,c=b.chart,d=b.getPlotBox(),e=c.inverted,f=Math.floor(this.plotX);
return c.renderer.symbols.circle(d.translateX+(e?b.yAxis.len-this.plotY:f)-a,d.translateY+(e?b.xAxis.len-f:this.plotY)-a,a*2,a*2)}});x(R.prototype,{onMouseOver:function(){var a=this.chart,b=a.hoverSeries;if(b&&b!==this)b.onMouseOut();this.options.events.mouseOver&&H(this,"mouseOver");this.setState("hover");a.hoverSeries=this},onMouseOut:function(){var a=this.options,b=this.chart,c=b.tooltip,d=b.hoverPoint;b.hoverSeries=null;if(d)d.onMouseOut();this&&a.events.mouseOut&&H(this,"mouseOut");c&&!a.stickyTracking&&
(!c.shared||this.noSharedTooltip)&&c.hide();this.setState()},setState:function(a){var b=this.options,c=this.graph,d=b.states,e=b.lineWidth,b=0,a=a||"";if(this.state!==a&&(this.state=a,!(d[a]&&d[a].enabled===!1)&&(a&&(e=d[a].lineWidth||e+(d[a].lineWidthPlus||0)),c&&!c.dashstyle))){a={"stroke-width":e};for(c.attr(a);this["zoneGraph"+b];)this["zoneGraph"+b].attr(a),b+=1}},setVisible:function(a,b){var c=this,d=c.chart,e=c.legendItem,f,g=d.options.chart.ignoreHiddenSeries,h=c.visible;f=(c.visible=a=c.options.visible=
c.userOptions.visible=a===void 0?!h:a)?"show":"hide";q(["group","dataLabelsGroup","markerGroup","tracker"],function(a){if(c[a])c[a][f]()});if(d.hoverSeries===c||(d.hoverPoint&&d.hoverPoint.series)===c)c.onMouseOut();e&&d.legend.colorizeItem(c,a);c.isDirty=!0;c.options.stacking&&q(d.series,function(a){if(a.options.stacking&&a.visible)a.isDirty=!0});q(c.linkedSeries,function(b){b.setVisible(a,!1)});if(g)d.isDirtyBox=!0;b!==!1&&d.redraw();H(c,f)},show:function(){this.setVisible(!0)},hide:function(){this.setVisible(!1)},
select:function(a){this.selected=a=a===z?!this.selected:a;if(this.checkbox)this.checkbox.checked=a;H(this,a?"select":"unselect")},drawTracker:ha.drawTrackerGraph});x(u,{Color:na,Point:Ma,Tick:Ya,Renderer:fb,SVGElement:J,SVGRenderer:Fa,arrayMin:Oa,arrayMax:Ha,charts:U,correctFloat:$,dateFormat:Ta,error:ea,format:Na,pathAnim:void 0,getOptions:function(){return T},hasBidiBug:Sb,isTouchDevice:Ob,setOptions:function(a){T=E(!0,T,a);Hb();return T},addEvent:N,removeEvent:Y,createElement:ca,discardElement:Va,
css:M,each:q,map:Ea,merge:E,splat:ua,stableSort:kb,extendClass:sa,pInt:B,svg:fa,canvas:la,vml:!fa&&!la,product:"Highcharts",version:"4.2.7"});return u});


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(16),
    root = __webpack_require__(12);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(189),
    hashDelete = __webpack_require__(190),
    hashGet = __webpack_require__(191),
    hashHas = __webpack_require__(192),
    hashSet = __webpack_require__(193);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(16),
    root = __webpack_require__(12);

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(16),
    root = __webpack_require__(12);

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(47),
    setCacheAdd = __webpack_require__(213),
    setCacheHas = __webpack_require__(214);

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(12);

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(16),
    root = __webpack_require__(12);

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),
/* 147 */
/***/ (function(module, exports) {

/**
 * A specialized version of `baseAggregator` for arrays.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} setter The function to set `accumulator` values.
 * @param {Function} iteratee The iteratee to transform keys.
 * @param {Object} accumulator The initial aggregated object.
 * @returns {Function} Returns `accumulator`.
 */
function arrayAggregator(array, setter, iteratee, accumulator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    var value = array[index];
    setter(accumulator, value, iteratee(value), array);
  }
  return accumulator;
}

module.exports = arrayAggregator;


/***/ }),
/* 148 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(171),
    isArguments = __webpack_require__(85),
    isArray = __webpack_require__(13),
    isBuffer = __webpack_require__(87),
    isIndex = __webpack_require__(80),
    isTypedArray = __webpack_require__(89);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),
/* 150 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),
/* 151 */
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),
/* 152 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

var baseEach = __webpack_require__(155);

/**
 * Aggregates elements of `collection` on `accumulator` with keys transformed
 * by `iteratee` and values set by `setter`.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} setter The function to set `accumulator` values.
 * @param {Function} iteratee The iteratee to transform keys.
 * @param {Object} accumulator The initial aggregated object.
 * @returns {Function} Returns `accumulator`.
 */
function baseAggregator(collection, setter, iteratee, accumulator) {
  baseEach(collection, function(value, key, collection) {
    setter(accumulator, value, iteratee(value), collection);
  });
  return accumulator;
}

module.exports = baseAggregator;


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(179);

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

var baseForOwn = __webpack_require__(157),
    createBaseEach = __webpack_require__(177);

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(178);

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

var baseFor = __webpack_require__(156),
    keys = __webpack_require__(52);

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(151),
    isArray = __webpack_require__(13);

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),
/* 159 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(24),
    isObjectLike = __webpack_require__(25);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(74),
    equalArrays = __webpack_require__(78),
    equalByTag = __webpack_require__(180),
    equalObjects = __webpack_require__(181),
    getTag = __webpack_require__(186),
    isArray = __webpack_require__(13),
    isBuffer = __webpack_require__(87),
    isTypedArray = __webpack_require__(89);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(74),
    baseIsEqual = __webpack_require__(76);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(88),
    isMasked = __webpack_require__(195),
    isObject = __webpack_require__(50),
    toSource = __webpack_require__(83);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(24),
    isLength = __webpack_require__(49),
    isObjectLike = __webpack_require__(25);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

var baseMatches = __webpack_require__(167),
    baseMatchesProperty = __webpack_require__(168),
    identity = __webpack_require__(225),
    isArray = __webpack_require__(13),
    property = __webpack_require__(227);

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(196),
    nativeKeys = __webpack_require__(209);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsMatch = __webpack_require__(162),
    getMatchData = __webpack_require__(183),
    matchesStrictComparable = __webpack_require__(82);

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(76),
    get = __webpack_require__(222),
    hasIn = __webpack_require__(224),
    isKey = __webpack_require__(48),
    isStrictComparable = __webpack_require__(81),
    matchesStrictComparable = __webpack_require__(82),
    toKey = __webpack_require__(37);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;


/***/ }),
/* 169 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(75);

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;


/***/ }),
/* 171 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(33),
    arrayMap = __webpack_require__(150),
    isArray = __webpack_require__(13),
    isSymbol = __webpack_require__(51);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),
/* 173 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),
/* 174 */
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(12);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

var arrayAggregator = __webpack_require__(147),
    baseAggregator = __webpack_require__(153),
    baseIteratee = __webpack_require__(165),
    isArray = __webpack_require__(13);

/**
 * Creates a function like `_.groupBy`.
 *
 * @private
 * @param {Function} setter The function to set accumulator values.
 * @param {Function} [initializer] The accumulator object initializer.
 * @returns {Function} Returns the new aggregator function.
 */
function createAggregator(setter, initializer) {
  return function(collection, iteratee) {
    var func = isArray(collection) ? arrayAggregator : baseAggregator,
        accumulator = initializer ? initializer() : {};

    return func(collection, setter, baseIteratee(iteratee, 2), accumulator);
  };
}

module.exports = createAggregator;


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(86);

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;


/***/ }),
/* 178 */
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(16);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(33),
    Uint8Array = __webpack_require__(145),
    eq = __webpack_require__(84),
    equalArrays = __webpack_require__(78),
    mapToArray = __webpack_require__(207),
    setToArray = __webpack_require__(215);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

var getAllKeys = __webpack_require__(182);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(158),
    getSymbols = __webpack_require__(185),
    keys = __webpack_require__(52);

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

var isStrictComparable = __webpack_require__(81),
    keys = __webpack_require__(52);

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

module.exports = getMatchData;


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(33);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(148),
    stubArray = __webpack_require__(228);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(140),
    Map = __webpack_require__(46),
    Promise = __webpack_require__(142),
    Set = __webpack_require__(143),
    WeakMap = __webpack_require__(146),
    baseGetTag = __webpack_require__(24),
    toSource = __webpack_require__(83);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),
/* 187 */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(77),
    isArguments = __webpack_require__(85),
    isArray = __webpack_require__(13),
    isIndex = __webpack_require__(80),
    isLength = __webpack_require__(49),
    toKey = __webpack_require__(37);

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(36);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),
/* 190 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(36);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(36);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(36);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),
/* 194 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(175);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),
/* 196 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),
/* 197 */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(34);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(34);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(34);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(34);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(141),
    ListCache = __webpack_require__(32),
    Map = __webpack_require__(46);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(35);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(35);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(35);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(35);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),
/* 207 */
/***/ (function(module, exports) {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(226);

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(212);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(79);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(119)(module)))

/***/ }),
/* 211 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 212 */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),
/* 213 */
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),
/* 214 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),
/* 215 */
/***/ (function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(32);

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),
/* 217 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),
/* 218 */
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),
/* 219 */
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(32),
    Map = __webpack_require__(46),
    MapCache = __webpack_require__(47);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(208);

/** Used to match property names within property paths. */
var reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(75);

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(154),
    createAggregator = __webpack_require__(176);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an object composed of keys generated from the results of running
 * each element of `collection` thru `iteratee`. The order of grouped values
 * is determined by the order they occur in `collection`. The corresponding
 * value of each key is an array of elements responsible for generating the
 * key. The iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
 * @returns {Object} Returns the composed aggregate object.
 * @example
 *
 * _.groupBy([6.1, 4.2, 6.3], Math.floor);
 * // => { '4': [4.2], '6': [6.1, 6.3] }
 *
 * // The `_.property` iteratee shorthand.
 * _.groupBy(['one', 'two', 'three'], 'length');
 * // => { '3': ['one', 'two'], '5': ['three'] }
 */
var groupBy = createAggregator(function(result, value, key) {
  if (hasOwnProperty.call(result, key)) {
    result[key].push(value);
  } else {
    baseAssignValue(result, key, [value]);
  }
});

module.exports = groupBy;


/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

var baseHasIn = __webpack_require__(159),
    hasPath = __webpack_require__(188);

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ }),
/* 225 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(47);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

var baseProperty = __webpack_require__(169),
    basePropertyDeep = __webpack_require__(170),
    isKey = __webpack_require__(48),
    toKey = __webpack_require__(37);

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;


/***/ }),
/* 228 */
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),
/* 229 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(172);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),
/* 231 */,
/* 232 */,
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule shallowCompare
 */



var shallowEqual = __webpack_require__(31);

/**
 * Does a shallow comparison for props and state.
 * See ReactComponentWithPureRenderMixin
 * See also https://facebook.github.io/react/docs/shallow-compare.html
 */
function shallowCompare(instance, nextProps, nextState) {
  return (
    !shallowEqual(instance.props, nextProps) ||
    !shallowEqual(instance.state, nextState)
  );
}

module.exports = shallowCompare;


/***/ }),
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

!function(r,t){ true?module.exports=t(__webpack_require__(23),__webpack_require__(139)):"function"==typeof define&&define.amd?define(["react","highcharts"],t):"object"==typeof exports?exports.ReactHighcharts=t(require("react"),require("highcharts")):r.ReactHighcharts=t(r.React,r.Highcharts)}(this,function(r,t){return function(r){function t(o){if(e[o])return e[o].exports;var n=e[o]={exports:{},id:o,loaded:!1};return r[o].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var e={};return t.m=r,t.c=e,t.p="",t(0)}([function(r,t,e){r.exports=e(3)},function(t,e){t.exports=r},function(r,t,e){(function(t){"use strict";function o(r,t){var e={};for(var o in r)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e}var n=Object.assign||function(r){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o])}return r},i=e(1),c="undefined"==typeof t?window:t;r.exports=function(t,e){var a="Highcharts"+t,s=i.createClass({displayName:a,propTypes:{config:i.PropTypes.object.isRequired,isPureConfig:i.PropTypes.bool,neverReflow:i.PropTypes.bool,callback:i.PropTypes.func},defaultProps:{callback:function(){}},renderChart:function(r){var o=this;if(!r)throw new Error("Config must be specified for the "+a+" component");var i=r.chart;this.chart=new e[t](n({},r,{chart:n({},i,{renderTo:this.refs.chart})}),this.props.callback),this.props.neverReflow||c.requestAnimationFrame&&requestAnimationFrame(function(){o.chart&&o.chart.options&&o.chart.reflow()})},shouldComponentUpdate:function(r){return r.neverReflow||r.isPureConfig&&this.props.config===r.config?!0:(this.renderChart(r.config),!1)},getChart:function(){if(!this.chart)throw new Error("getChart() should not be called before the component is mounted");return this.chart},componentDidMount:function(){this.renderChart(this.props.config)},componentWillUnmount:function(){this.chart.destroy()},render:function(){var r=this.props,t=(r.callback,r.config,r.isPureConfig,r.neverReflow,o(r,["callback","config","isPureConfig","neverReflow"]));return t=n({},t,{ref:"chart"}),i.createElement("div",t)}});return s.Highcharts=e,s.withHighcharts=function(e){return r.exports(t,e)},s}}).call(t,function(){return this}())},function(r,t,e){"use strict";r.exports=e(2)("Chart",e(4))},function(r,e){r.exports=t}])});

/***/ }),
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 319 */
/***/ (function(module, exports) {

module.exports = [
	{
		"y": -3.085322174,
		"x": -10.92064506,
		"label": "HP1502401_N13"
	},
	{
		"y": -3.084567303,
		"x": -10.45487404,
		"label": "HP1502401_D14"
	},
	{
		"y": -2.824713089,
		"x": -10.01467706,
		"label": "HP1502401_F14"
	},
	{
		"y": -3.648491624,
		"x": -7.852129235,
		"label": "HP1502401_J13"
	},
	{
		"y": 5.98306103,
		"x": 8.314591899,
		"label": "HP1502401_B13"
	},
	{
		"y": 0.059458636,
		"x": -0.388708629,
		"label": "HP1502401_H13"
	},
	{
		"y": -2.711278553,
		"x": 2.32884563,
		"label": "HP1502401_J14"
	},
	{
		"y": 2.721272216,
		"x": 1.530012842,
		"label": "HP1502401_B14"
	},
	{
		"y": 5.156839145,
		"x": 8.621690091,
		"label": "HP1502401_A14"
	},
	{
		"y": -2.237817598,
		"x": 2.37565442,
		"label": "HP1502401_C14"
	},
	{
		"y": 2.351597961,
		"x": 1.524099733,
		"label": "HP1502401_G14"
	},
	{
		"y": -0.484288798,
		"x": 0.764072892,
		"label": "HP1502401_E14"
	},
	{
		"y": 0.190521231,
		"x": 0.495986255,
		"label": "HP1502401_L14"
	},
	{
		"y": -1.550670626,
		"x": 2.358627374,
		"label": "HP1502401_M14"
	},
	{
		"y": 0.272837413,
		"x": 0.171429286,
		"label": "HP1502401_K14"
	},
	{
		"y": 5.065759803,
		"x": 8.720080037,
		"label": "HP1502401_I14"
	},
	{
		"y": 5.261294057,
		"x": 8.588161612,
		"label": "HP1502401_F13"
	},
	{
		"y": -1.480806096,
		"x": 2.567490484,
		"label": "HP1502401_L13"
	},
	{
		"y": 2.833905359,
		"x": 1.41366295,
		"label": "HP1502401_D13"
	},
	{
		"y": -2.320188363,
		"x": 3.460589199,
		"label": "HP1502401_H14"
	},
	{
		"y": -3.682185424,
		"x": -10.57779201,
		"label": "HP1504101T2D_I3"
	},
	{
		"y": -4.364391147,
		"x": -10.02450467,
		"label": "HP1504101T2D_D16"
	},
	{
		"y": -3.437306269,
		"x": -9.775317659,
		"label": "HP1504101T2D_D22"
	},
	{
		"y": -0.535143053,
		"x": -0.492020048,
		"label": "HP1502401_F17"
	},
	{
		"y": 0.598798736,
		"x": -0.058707406,
		"label": "HP1504101T2D_B4"
	},
	{
		"y": -1.883966265,
		"x": 2.269027138,
		"label": "HP1504101T2D_M6"
	},
	{
		"y": -0.106288966,
		"x": 2.470234611,
		"label": "HP1504101T2D_F15"
	},
	{
		"y": 2.862055544,
		"x": 7.017352356,
		"label": "HP1504101T2D_H7"
	},
	{
		"y": 3.428008765,
		"x": 10.21121875,
		"label": "HP1502401_H23"
	},
	{
		"y": -3.377000185,
		"x": -9.611298167,
		"label": "HP1504101T2D_F8"
	},
	{
		"y": -1.34452018,
		"x": 2.551943851,
		"label": "HP1502401_L21"
	},
	{
		"y": -3.065096335,
		"x": -10.4799252,
		"label": "HP1502401_B19"
	},
	{
		"y": -3.511198814,
		"x": -10.43905232,
		"label": "HP1504101T2D_B2"
	},
	{
		"y": -1.776710721,
		"x": 2.299693151,
		"label": "HP1504101T2D_F10"
	},
	{
		"y": 0.47193445,
		"x": 0.204818596,
		"label": "HP1504101T2D_B10"
	},
	{
		"y": -4.543101431,
		"x": -10.20644514,
		"label": "HP1504101T2D_L6"
	},
	{
		"y": 5.205381125,
		"x": 8.569348166,
		"label": "HP1502401_G18"
	},
	{
		"y": -2.301882711,
		"x": 3.497607813,
		"label": "HP1502401_K22"
	},
	{
		"y": -2.798051334,
		"x": 1.920305876,
		"label": "HP1502401_I22"
	},
	{
		"y": -1.274212216,
		"x": 2.665260048,
		"label": "HP1504101T2D_M18"
	},
	{
		"y": 2.989786027,
		"x": 0.966034888,
		"label": "HP1502401_J22"
	},
	{
		"y": -1.856497967,
		"x": 1.761806984,
		"label": "HP1502401_F4"
	},
	{
		"y": 2.218476977,
		"x": 1.694637319,
		"label": "HP1504101T2D_O12"
	},
	{
		"y": -2.440858781,
		"x": 2.148284662,
		"label": "HP1502401_M15"
	},
	{
		"y": 0.308179755,
		"x": 0.50349386,
		"label": "HP1504101T2D_G16"
	},
	{
		"y": -3.066061962,
		"x": -10.17860839,
		"label": "HP1502401_J5"
	},
	{
		"y": -1.631300895,
		"x": 2.734890369,
		"label": "HP1504101T2D_L23"
	},
	{
		"y": 2.821194753,
		"x": 1.125501024,
		"label": "HP1502401_G24"
	},
	{
		"y": 3.205550529,
		"x": 10.16008383,
		"label": "HP1502401_G23"
	},
	{
		"y": -2.473295167,
		"x": -9.326344766,
		"label": "HP1504101T2D_H11"
	},
	{
		"y": 1.398701666,
		"x": 0.835536204,
		"label": "HP1504101T2D_A24"
	},
	{
		"y": -1.773197179,
		"x": 3.100954002,
		"label": "HP1504101T2D_N17"
	},
	{
		"y": 3.117917476,
		"x": 1.401863459,
		"label": "HP1502401_N8"
	},
	{
		"y": -1.386857351,
		"x": 2.840934199,
		"label": "HP1504101T2D_G1"
	},
	{
		"y": 0.313842343,
		"x": 0.386574815,
		"label": "HP1504101T2D_A15"
	},
	{
		"y": -0.763691931,
		"x": 2.520862557,
		"label": "HP1504101T2D_M19"
	},
	{
		"y": 2.86962469,
		"x": 1.73340919,
		"label": "HP1502401_O16"
	},
	{
		"y": 2.388403086,
		"x": 1.482597165,
		"label": "HP1504101T2D_E16"
	},
	{
		"y": -1.81657007,
		"x": 2.453190051,
		"label": "HP1502401_A12"
	},
	{
		"y": 4.22209811,
		"x": 10.25609119,
		"label": "HP1502401_D18"
	},
	{
		"y": 0.31284705,
		"x": 0.485646201,
		"label": "HP1504101T2D_K2"
	},
	{
		"y": -4.390173443,
		"x": -10.05261214,
		"label": "HP1504101T2D_G13"
	},
	{
		"y": -1.818050232,
		"x": -9.09300634,
		"label": "HP1502401_I11"
	},
	{
		"y": -3.228403824,
		"x": -10.53023926,
		"label": "HP1502401_A11"
	},
	{
		"y": -2.854783815,
		"x": -10.16938192,
		"label": "HP1502401_G16"
	},
	{
		"y": 2.651390772,
		"x": -0.154220245,
		"label": "HP1502401_K19"
	},
	{
		"y": -1.488780428,
		"x": 2.388270877,
		"label": "HP1502401_D5"
	},
	{
		"y": -3.1180467,
		"x": -9.832892285,
		"label": "HP1502401_D1"
	},
	{
		"y": 3.068212786,
		"x": 0.876171086,
		"label": "HP1502401_H22"
	},
	{
		"y": -1.93040746,
		"x": 2.688155896,
		"label": "HP1504101T2D_J15"
	},
	{
		"y": -1.227307403,
		"x": 3.357725344,
		"label": "HP1504101T2D_N7"
	},
	{
		"y": -1.019493231,
		"x": 2.942588872,
		"label": "HP1504101T2D_O16"
	},
	{
		"y": -3.133079367,
		"x": -10.54310339,
		"label": "HP1502401_L6"
	},
	{
		"y": -2.439158959,
		"x": 2.419027112,
		"label": "HP1502401_M5"
	},
	{
		"y": -1.192280391,
		"x": 3.840322911,
		"label": "HP1504101T2D_M4"
	},
	{
		"y": -3.593912046,
		"x": -9.569278835,
		"label": "HP1504101T2D_L22"
	},
	{
		"y": -1.311342679,
		"x": 2.909774325,
		"label": "HP1504101T2D_I20"
	},
	{
		"y": -1.656867098,
		"x": -0.034472109,
		"label": "HP1502401_K17"
	},
	{
		"y": 0.391239328,
		"x": 0.905466224,
		"label": "HP1504101T2D_B22"
	},
	{
		"y": 0.207917403,
		"x": 0.600259427,
		"label": "HP1504101T2D_G4"
	},
	{
		"y": -2.197276791,
		"x": 2.796755638,
		"label": "HP1502401_H15"
	},
	{
		"y": -2.84579384,
		"x": -9.981167851,
		"label": "HP1502401_K4"
	},
	{
		"y": -3.18854845,
		"x": -10.73808255,
		"label": "HP1502401_B3"
	},
	{
		"y": -2.138029659,
		"x": 3.703924977,
		"label": "HP1502401_H8"
	},
	{
		"y": -2.494185455,
		"x": 1.573408739,
		"label": "HP1502401_N17"
	},
	{
		"y": -3.986154598,
		"x": -10.85814889,
		"label": "HP1504101T2D_C13"
	},
	{
		"y": 0.222500796,
		"x": -0.170062804,
		"label": "HP1504101T2D_L13"
	},
	{
		"y": -3.551933943,
		"x": -9.945888856,
		"label": "HP1504101T2D_G15"
	},
	{
		"y": -1.322688369,
		"x": 2.802345029,
		"label": "HP1504101T2D_K24"
	},
	{
		"y": 0.042089829,
		"x": 0.463002816,
		"label": "HP1504101T2D_B24"
	},
	{
		"y": -4.180927309,
		"x": -10.34270027,
		"label": "HP1502401_B4"
	},
	{
		"y": 0.020368122,
		"x": 0.696939822,
		"label": "HP1504101T2D_H14"
	},
	{
		"y": -3.081509815,
		"x": -10.61764381,
		"label": "HP1502401_C11"
	},
	{
		"y": 3.099664059,
		"x": 1.523681025,
		"label": "HP1502401_A7"
	},
	{
		"y": -4.392283604,
		"x": -9.71481482,
		"label": "HP1504101T2D_P8"
	},
	{
		"y": -2.999681265,
		"x": 2.439036927,
		"label": "HP1504101T2D_I1"
	},
	{
		"y": -2.785019807,
		"x": -9.512678684,
		"label": "HP1502401_N24"
	},
	{
		"y": -1.289055437,
		"x": 2.57878501,
		"label": "HP1502401_O2"
	},
	{
		"y": -2.943186112,
		"x": -10.02417511,
		"label": "HP1502401_H17"
	},
	{
		"y": -3.386941952,
		"x": -9.697012768,
		"label": "HP1504101T2D_C24"
	},
	{
		"y": -2.326270834,
		"x": 1.586455992,
		"label": "HP1502401_J21"
	},
	{
		"y": -1.850531944,
		"x": 2.597460826,
		"label": "HP1504101T2D_J13"
	},
	{
		"y": -3.263075959,
		"x": -10.5895503,
		"label": "HP1504101T2D_E5"
	},
	{
		"y": -2.622807014,
		"x": 1.765819263,
		"label": "HP1502401_J8"
	},
	{
		"y": -1.407553341,
		"x": 2.479967636,
		"label": "HP1502401_N15"
	},
	{
		"y": 5.224064541,
		"x": 8.455196116,
		"label": "HP1504101T2D_L14"
	},
	{
		"y": -1.674411538,
		"x": 2.543849884,
		"label": "HP1504101T2D_D2"
	},
	{
		"y": 5.136345581,
		"x": 8.718165482,
		"label": "HP1502401_N2"
	},
	{
		"y": -2.815826636,
		"x": 2.957184524,
		"label": "HP1502401_H7"
	},
	{
		"y": -4.684754863,
		"x": -11.32980639,
		"label": "HP1504101T2D_K5"
	},
	{
		"y": -0.30555632,
		"x": 5.101588034,
		"label": "HP1504101T2D_O13"
	},
	{
		"y": -1.86904349,
		"x": 2.32995901,
		"label": "HP1504101T2D_L2"
	},
	{
		"y": 0.411451116,
		"x": -0.289979725,
		"label": "HP1502401_E5"
	},
	{
		"y": -2.995935154,
		"x": -9.3911903,
		"label": "HP1504101T2D_N11"
	},
	{
		"y": -1.862743337,
		"x": 3.781715683,
		"label": "HP1502401_O1"
	},
	{
		"y": -3.087483014,
		"x": -9.928703153,
		"label": "HP1502401_K18"
	},
	{
		"y": 3.163616374,
		"x": 1.274775736,
		"label": "HP1502401_B7"
	},
	{
		"y": -1.038757785,
		"x": 2.542279593,
		"label": "HP1504101T2D_I24"
	},
	{
		"y": -3.057529886,
		"x": -10.38017086,
		"label": "HP1502401_N5"
	},
	{
		"y": -1.986826757,
		"x": -0.552748196,
		"label": "HP1502401_N22"
	},
	{
		"y": 0.108711501,
		"x": 2.871319646,
		"label": "HP1504101T2D_J18"
	},
	{
		"y": -2.828542979,
		"x": 2.378084631,
		"label": "HP1502401_L3"
	},
	{
		"y": -3.169827404,
		"x": -10.10284951,
		"label": "HP1504101T2D_K16"
	},
	{
		"y": -1.874453613,
		"x": 2.315585112,
		"label": "HP1502401_J1"
	},
	{
		"y": -3.919989449,
		"x": -9.316096969,
		"label": "HP1504101T2D_I4"
	},
	{
		"y": -3.502694762,
		"x": -10.28958752,
		"label": "HP1504101T2D_E17"
	},
	{
		"y": -2.429668741,
		"x": 2.364383164,
		"label": "HP1502401_H3"
	},
	{
		"y": 2.346663759,
		"x": 1.113569321,
		"label": "HP1504101T2D_B6"
	},
	{
		"y": -2.274000897,
		"x": 2.883045122,
		"label": "HP1502401_I15"
	},
	{
		"y": -4.527939172,
		"x": -10.90645469,
		"label": "HP1504101T2D_P6"
	},
	{
		"y": 4.073534671,
		"x": 9.918870903,
		"label": "HP1504101T2D_B8"
	},
	{
		"y": -2.77722348,
		"x": -10.34003377,
		"label": "HP1504101T2D_M11"
	},
	{
		"y": 1.448197186,
		"x": -0.475097031,
		"label": "HP1502401_D17"
	},
	{
		"y": -2.050856504,
		"x": 4.033009431,
		"label": "HP1504101T2D_M15"
	},
	{
		"y": -2.846509332,
		"x": 3.550978102,
		"label": "HP1502401_I4"
	},
	{
		"y": -3.302412537,
		"x": -9.734728246,
		"label": "HP1504101T2D_O21"
	},
	{
		"y": -1.590914209,
		"x": 2.323664234,
		"label": "HP1502401_J23"
	},
	{
		"y": -3.091302122,
		"x": -8.83001794,
		"label": "HP1502401_L19"
	},
	{
		"y": -3.999144486,
		"x": -10.57455672,
		"label": "HP1504101T2D_O7"
	},
	{
		"y": -2.649864754,
		"x": -10.63890535,
		"label": "HP1504101T2D_A11"
	},
	{
		"y": 5.489805978,
		"x": 8.769787121,
		"label": "HP1502401_O14"
	},
	{
		"y": -1.245139208,
		"x": 3.811815378,
		"label": "HP1504101T2D_N15"
	},
	{
		"y": -3.380144422,
		"x": -8.813613955,
		"label": "HP1502401_M18"
	},
	{
		"y": -4.654434838,
		"x": -11.28110494,
		"label": "HP1502401_C19"
	},
	{
		"y": 3.623152874,
		"x": 10.32723496,
		"label": "HP1502401_L5"
	},
	{
		"y": -1.105253193,
		"x": 2.936980282,
		"label": "HP1504101T2D_F7"
	},
	{
		"y": -1.414797824,
		"x": 3.575613994,
		"label": "HP1504101T2D_I5"
	},
	{
		"y": 2.726754819,
		"x": 6.976834758,
		"label": "HP1504101T2D_C1"
	},
	{
		"y": -0.675780537,
		"x": 2.961496357,
		"label": "HP1504101T2D_P14"
	},
	{
		"y": -4.035186795,
		"x": -10.20012833,
		"label": "HP1504101T2D_G5"
	},
	{
		"y": 0.505563925,
		"x": 0.528344606,
		"label": "HP1504101T2D_A20"
	},
	{
		"y": 2.975212114,
		"x": 1.591622965,
		"label": "HP1502401_H11"
	},
	{
		"y": 5.174869916,
		"x": 8.964706715,
		"label": "HP1504101T2D_K19"
	},
	{
		"y": -3.150937709,
		"x": -10.56912679,
		"label": "HP1502401_O5"
	},
	{
		"y": -2.242923322,
		"x": 1.847040189,
		"label": "HP1502401_K15"
	},
	{
		"y": -1.291524363,
		"x": 3.215218256,
		"label": "HP1504101T2D_C17"
	},
	{
		"y": -2.784334214,
		"x": 1.689146972,
		"label": "HP1502401_G10"
	},
	{
		"y": -4.546762831,
		"x": -9.816374867,
		"label": "HP1504101T2D_J19"
	},
	{
		"y": -2.215067513,
		"x": 2.427000621,
		"label": "HP1502401_L2"
	},
	{
		"y": 1.705587573,
		"x": -0.540381266,
		"label": "HP1504101T2D_D8"
	},
	{
		"y": -3.866804649,
		"x": -10.25462235,
		"label": "HP1504101T2D_B15"
	},
	{
		"y": -1.972730851,
		"x": 1.946307861,
		"label": "HP1502401_L23"
	},
	{
		"y": -2.94495338,
		"x": -10.27542038,
		"label": "HP1502401_E4"
	},
	{
		"y": -2.578987742,
		"x": 2.259535977,
		"label": "HP1502401_F19"
	},
	{
		"y": -2.418416045,
		"x": 0.996598643,
		"label": "HP1502401_L17"
	},
	{
		"y": -2.41132758,
		"x": 2.003649583,
		"label": "HP1502401_O22"
	},
	{
		"y": -3.338469456,
		"x": -10.60342493,
		"label": "HP1502401_F7"
	},
	{
		"y": -3.798990907,
		"x": -12.04198242,
		"label": "HP1504101T2D_K1"
	},
	{
		"y": 0.10007154,
		"x": 0.246376415,
		"label": "HP1504101T2D_I7"
	},
	{
		"y": 1.150284685,
		"x": 1.087643824,
		"label": "HP1504101T2D_H5"
	},
	{
		"y": -2.696535116,
		"x": 1.850646721,
		"label": "HP1502401_L16"
	},
	{
		"y": -2.045013328,
		"x": 3.061378619,
		"label": "HP1504101T2D_F22"
	},
	{
		"y": 0.121077249,
		"x": 2.351748015,
		"label": "HP1504101T2D_J2"
	},
	{
		"y": -1.03839365,
		"x": 3.883872151,
		"label": "HP1504101T2D_E1"
	},
	{
		"y": 1.36221371,
		"x": 0.459405565,
		"label": "HP1502401_A18"
	},
	{
		"y": -0.318108031,
		"x": 2.762981731,
		"label": "HP1504101T2D_A19"
	},
	{
		"y": -1.144650141,
		"x": 3.762672996,
		"label": "HP1504101T2D_G2"
	},
	{
		"y": -1.298085749,
		"x": 2.697982532,
		"label": "HP1504101T2D_J11"
	},
	{
		"y": -1.075460177,
		"x": 2.920892504,
		"label": "HP1504101T2D_K22"
	},
	{
		"y": -2.063798037,
		"x": 1.777755307,
		"label": "HP1502401_L12"
	},
	{
		"y": -2.814755255,
		"x": -9.972225053,
		"label": "HP1502401_A21"
	},
	{
		"y": -1.3705624,
		"x": -0.418432705,
		"label": "HP1504101T2D_E19"
	},
	{
		"y": -2.973211486,
		"x": -9.798229112,
		"label": "HP1502401_D23"
	},
	{
		"y": 3.111373555,
		"x": 1.051389319,
		"label": "HP1502401_E22"
	},
	{
		"y": -1.865754417,
		"x": 2.845799762,
		"label": "HP1502401_H2"
	},
	{
		"y": -1.369249533,
		"x": 3.153221214,
		"label": "HP1504101T2D_G17"
	},
	{
		"y": 2.504792064,
		"x": 1.731742519,
		"label": "HP1502401_N1"
	},
	{
		"y": -1.380876085,
		"x": 4.142545036,
		"label": "HP1504101T2D_N19"
	},
	{
		"y": -1.462738701,
		"x": 3.621816147,
		"label": "HP1504101T2D_I17"
	},
	{
		"y": 0.341331034,
		"x": 0.733158744,
		"label": "HP1502401_E7"
	},
	{
		"y": -0.036039461,
		"x": 0.671670987,
		"label": "HP1504101T2D_E11"
	},
	{
		"y": 2.288212655,
		"x": 8.798051592,
		"label": "HP1502401_H21"
	},
	{
		"y": -3.193341624,
		"x": -10.68721474,
		"label": "HP1502401_A9"
	},
	{
		"y": 0.518257476,
		"x": 0.235834744,
		"label": "HP1504101T2D_E18"
	},
	{
		"y": -1.813985786,
		"x": 3.177442559,
		"label": "HP1504101T2D_D7"
	},
	{
		"y": -4.027461321,
		"x": -9.708370065,
		"label": "HP1504101T2D_I13"
	},
	{
		"y": -0.11503093,
		"x": -0.417555825,
		"label": "HP1502401_B18"
	},
	{
		"y": -1.549626199,
		"x": 2.666799955,
		"label": "HP1502401_K9"
	},
	{
		"y": -3.015880136,
		"x": -10.39662035,
		"label": "HP1502401_G15"
	},
	{
		"y": 1.032211635,
		"x": 4.177546546,
		"label": "HP1502401_E16"
	},
	{
		"y": -1.091893105,
		"x": 2.832130781,
		"label": "HP1504101T2D_L21"
	},
	{
		"y": -3.418007761,
		"x": -8.379986061,
		"label": "HP1504101T2D_M17"
	},
	{
		"y": -3.1260418,
		"x": -10.22428962,
		"label": "HP1502401_D21"
	},
	{
		"y": -1.761833476,
		"x": 2.181863857,
		"label": "HP1504101T2D_N12"
	},
	{
		"y": -2.152414828,
		"x": 1.723236735,
		"label": "HP1502401_M4"
	},
	{
		"y": -1.82519571,
		"x": 4.264259715,
		"label": "HP1504101T2D_B16"
	},
	{
		"y": -0.516142772,
		"x": 4.147040612,
		"label": "HP1504101T2D_E23"
	},
	{
		"y": -2.816973287,
		"x": -9.750475471,
		"label": "HP1502401_G21"
	},
	{
		"y": 3.004707361,
		"x": 0.912321064,
		"label": "HP1502401_D7"
	},
	{
		"y": -3.592157396,
		"x": -7.730637518,
		"label": "HP1502401_G1"
	},
	{
		"y": 0.456349516,
		"x": 0.506916858,
		"label": "HP1504101T2D_L15"
	},
	{
		"y": 0.577543819,
		"x": 0.140460904,
		"label": "HP1504101T2D_D17"
	},
	{
		"y": 0.497942658,
		"x": 1.441259584,
		"label": "HP1504101T2D_A4"
	},
	{
		"y": -2.72999695,
		"x": 2.451933692,
		"label": "HP1502401_O21"
	},
	{
		"y": -2.496039398,
		"x": 2.871442064,
		"label": "HP1502401_M10"
	},
	{
		"y": -3.175541009,
		"x": -9.733598212,
		"label": "HP1504101T2D_C23"
	},
	{
		"y": -1.83982582,
		"x": 3.606024816,
		"label": "HP1504101T2D_H9"
	},
	{
		"y": -1.349528595,
		"x": 3.111499976,
		"label": "HP1504101T2D_A5"
	},
	{
		"y": -1.21481346,
		"x": 3.295169928,
		"label": "HP1504101T2D_K23"
	},
	{
		"y": 1.620421987,
		"x": 0.355825184,
		"label": "HP1502401_I7"
	},
	{
		"y": 3.084991481,
		"x": 1.22755416,
		"label": "HP1502401_C18"
	},
	{
		"y": -3.085099769,
		"x": -10.58398108,
		"label": "HP1502401_N6"
	},
	{
		"y": -3.365474748,
		"x": -9.859480747,
		"label": "HP1504101T2D_O19"
	},
	{
		"y": 1.631498059,
		"x": 0.608212044,
		"label": "HP1502401_O6"
	},
	{
		"y": -3.151965308,
		"x": -10.48830647,
		"label": "HP1502401_A8"
	},
	{
		"y": -2.995330978,
		"x": -9.705581452,
		"label": "HP1504101T2D_F6"
	},
	{
		"y": -3.152354614,
		"x": -10.50820116,
		"label": "HP1502401_L8"
	},
	{
		"y": 0.532972532,
		"x": 0.043599698,
		"label": "HP1502401_K24"
	},
	{
		"y": -2.699232698,
		"x": 1.930467189,
		"label": "HP1502401_J11"
	},
	{
		"y": -1.98188581,
		"x": 2.297102812,
		"label": "HP1502401_H4"
	},
	{
		"y": -1.826596792,
		"x": 2.236297663,
		"label": "HP1502401_L11"
	},
	{
		"y": -2.58676028,
		"x": 1.289835872,
		"label": "HP1502401_K3"
	},
	{
		"y": 1.380454672,
		"x": 0.860193145,
		"label": "HP1502401_C8"
	},
	{
		"y": -3.944079166,
		"x": -9.788531075,
		"label": "HP1504101T2D_B19"
	},
	{
		"y": -1.700805297,
		"x": 2.419120209,
		"label": "HP1504101T2D_I18"
	},
	{
		"y": 3.003025704,
		"x": 0.788112776,
		"label": "HP1502401_F22"
	},
	{
		"y": -2.480399234,
		"x": 1.130449044,
		"label": "HP1502401_I16"
	},
	{
		"y": 5.413702577,
		"x": 9.03448341,
		"label": "HP1502401_B17"
	},
	{
		"y": -1.764947792,
		"x": 3.46625827,
		"label": "HP1504101T2D_P2"
	},
	{
		"y": 3.778259873,
		"x": 10.56478591,
		"label": "HP1502401_N18"
	},
	{
		"y": 2.457817662,
		"x": 1.31062644,
		"label": "HP1504101T2D_N10"
	},
	{
		"y": -1.134810231,
		"x": 3.713937076,
		"label": "HP1504101T2D_I14"
	},
	{
		"y": 1.204227722,
		"x": 0.204195966,
		"label": "HP1504101T2D_F17"
	},
	{
		"y": 3.012753263,
		"x": 1.093629945,
		"label": "HP1502401_B24"
	},
	{
		"y": 2.536252845,
		"x": 0.895998521,
		"label": "HP1502401_C6"
	},
	{
		"y": 2.041955479,
		"x": 3.286948289,
		"label": "HP1504101T2D_G9"
	},
	{
		"y": -2.437379933,
		"x": 1.375957067,
		"label": "HP1502401_N12"
	},
	{
		"y": -2.129439144,
		"x": 2.882308903,
		"label": "HP1502401_M24"
	},
	{
		"y": -2.778595726,
		"x": 1.182946763,
		"label": "HP1504101T2D_E10"
	},
	{
		"y": -0.145539589,
		"x": 0.98339881,
		"label": "HP1504101T2D_P9"
	},
	{
		"y": -0.547979314,
		"x": 2.822618019,
		"label": "HP1504101T2D_G24"
	},
	{
		"y": -3.803530749,
		"x": -9.627893756,
		"label": "HP1504101T2D_F5"
	},
	{
		"y": -3.549222897,
		"x": -10.29655213,
		"label": "HP1504101T2D_D10"
	},
	{
		"y": -2.209306665,
		"x": 3.091967993,
		"label": "HP1502401_N4"
	},
	{
		"y": -3.789318784,
		"x": -10.50680231,
		"label": "HP1504101T2D_C2"
	},
	{
		"y": -3.070088227,
		"x": -10.23640279,
		"label": "HP1504101T2D_P16"
	},
	{
		"y": -2.780445759,
		"x": -9.51792898,
		"label": "HP1504101T2D_N14"
	},
	{
		"y": -2.078396965,
		"x": 2.210794683,
		"label": "HP1502401_E21"
	},
	{
		"y": 1.26144666,
		"x": -0.310120983,
		"label": "HP1502401_H6"
	},
	{
		"y": 5.332510526,
		"x": 8.95863195,
		"label": "HP1504101T2D_I6"
	},
	{
		"y": -2.777038948,
		"x": -10.28055161,
		"label": "HP1502401_E8"
	},
	{
		"y": -3.221595341,
		"x": -8.6713245,
		"label": "HP1502401_H10"
	},
	{
		"y": -1.212330499,
		"x": 2.647961029,
		"label": "HP1502401_J6"
	},
	{
		"y": -1.216406165,
		"x": 2.800972001,
		"label": "HP1502401_M7"
	},
	{
		"y": -1.082007657,
		"x": 2.92931543,
		"label": "HP1504101T2D_M21"
	},
	{
		"y": 0.514048315,
		"x": 0.081867393,
		"label": "HP1504101T2D_F11"
	},
	{
		"y": 0.127532754,
		"x": 2.745498459,
		"label": "HP1504101T2D_D19"
	},
	{
		"y": -0.494248122,
		"x": 2.436810049,
		"label": "HP1502401_O24"
	},
	{
		"y": 3.421557217,
		"x": 0.966169143,
		"label": "HP1502401_O12"
	},
	{
		"y": 2.044634984,
		"x": 1.776691508,
		"label": "HP1504101T2D_E24"
	},
	{
		"y": -1.202686178,
		"x": 2.612054828,
		"label": "HP1504101T2D_K4"
	},
	{
		"y": 2.899636183,
		"x": 2.208612527,
		"label": "HP1502401_I6"
	},
	{
		"y": -1.870395209,
		"x": 2.20761482,
		"label": "HP1504101T2D_N9"
	},
	{
		"y": -3.030924914,
		"x": -10.07034931,
		"label": "HP1502401_I3"
	},
	{
		"y": -1.512827728,
		"x": 2.693034427,
		"label": "HP1502401_C16"
	},
	{
		"y": -0.941640021,
		"x": 3.190492978,
		"label": "HP1504101T2D_M7"
	},
	{
		"y": -2.685472771,
		"x": 1.398358133,
		"label": "HP1502401_B20"
	},
	{
		"y": 0.003054198,
		"x": -0.64333166,
		"label": "HP1502401_K23"
	},
	{
		"y": 2.073571387,
		"x": 3.564589483,
		"label": "HP1502401_F18"
	},
	{
		"y": 0.51071177,
		"x": 0.435946719,
		"label": "HP1504101T2D_O4"
	},
	{
		"y": -3.333236084,
		"x": -9.890275878,
		"label": "HP1504101T2D_C19"
	},
	{
		"y": 0.283391001,
		"x": 2.016489583,
		"label": "HP1504101T2D_E4"
	},
	{
		"y": -3.752916624,
		"x": -9.494635336,
		"label": "HP1504101T2D_M14"
	},
	{
		"y": -4.070002849,
		"x": -8.980791755,
		"label": "HP1502401_A1"
	},
	{
		"y": 2.549222216,
		"x": 1.078267501,
		"label": "HP1502401_G4"
	},
	{
		"y": 0.3683679,
		"x": 0.588607689,
		"label": "HP1504101T2D_I16"
	},
	{
		"y": -1.362412408,
		"x": 4.327328013,
		"label": "HP1504101T2D_D1"
	},
	{
		"y": -0.413142623,
		"x": 2.654923204,
		"label": "HP1504101T2D_O6"
	},
	{
		"y": 0.576560954,
		"x": 0.806120291,
		"label": "HP1504101T2D_D18"
	},
	{
		"y": 0.296760749,
		"x": 1.963146599,
		"label": "HP1504101T2D_F2"
	},
	{
		"y": -2.39663996,
		"x": -9.918616267,
		"label": "HP1504101T2D_G6"
	},
	{
		"y": -2.915337907,
		"x": 0.310442477,
		"label": "HP1502401_D8"
	},
	{
		"y": -1.965883923,
		"x": 4.33372729,
		"label": "HP1504101T2D_E6"
	},
	{
		"y": -2.980697814,
		"x": -10.66378317,
		"label": "HP1504101T2D_B1"
	},
	{
		"y": 0.418848941,
		"x": 0.115042308,
		"label": "HP1504101T2D_I15"
	},
	{
		"y": 2.888976841,
		"x": 7.040342262,
		"label": "HP1504101T2D_P3"
	},
	{
		"y": -2.780309698,
		"x": -9.892241628,
		"label": "HP1502401_C2"
	},
	{
		"y": -0.076994631,
		"x": 0.810415492,
		"label": "HP1504101T2D_I10"
	},
	{
		"y": 2.732188584,
		"x": 1.630888963,
		"label": "HP1502401_B21"
	},
	{
		"y": -2.451350105,
		"x": -10.4380092,
		"label": "HP1502401_O19"
	},
	{
		"y": -3.721178783,
		"x": -10.1613624,
		"label": "HP1502401_C15"
	},
	{
		"y": 5.499269775,
		"x": 7.482042152,
		"label": "HP1504101T2D_E13"
	},
	{
		"y": -2.977153784,
		"x": -10.46417493,
		"label": "HP1502401_G19"
	},
	{
		"y": -3.19060064,
		"x": -10.30968261,
		"label": "HP1502401_D19"
	},
	{
		"y": 2.767253484,
		"x": 0.831424219,
		"label": "HP1502401_D3"
	},
	{
		"y": -3.148163151,
		"x": -10.62364985,
		"label": "HP1502401_B6"
	},
	{
		"y": 1.539587625,
		"x": 0.436650943,
		"label": "HP1502401_O18"
	},
	{
		"y": 0.412155152,
		"x": 0.182158821,
		"label": "HP1504101T2D_E14"
	},
	{
		"y": -3.779513384,
		"x": -10.4383385,
		"label": "HP1504101T2D_I9"
	},
	{
		"y": 2.158006961,
		"x": 1.566642054,
		"label": "HP1504101T2D_C18"
	},
	{
		"y": 2.89545302,
		"x": 0.39434043,
		"label": "HP1502401_G6"
	},
	{
		"y": -1.95548573,
		"x": 2.233724441,
		"label": "HP1504101T2D_B11"
	},
	{
		"y": -2.282785024,
		"x": 2.969710733,
		"label": "HP1504101T2D_C4"
	},
	{
		"y": -1.344563323,
		"x": 2.898120932,
		"label": "HP1504101T2D_C15"
	},
	{
		"y": -4.526332121,
		"x": -11.4451675,
		"label": "HP1504101T2D_K13"
	},
	{
		"y": -1.781895432,
		"x": 2.440351287,
		"label": "HP1502401_F12"
	},
	{
		"y": -4.520257327,
		"x": -9.873465137,
		"label": "HP1504101T2D_B20"
	},
	{
		"y": -1.028690137,
		"x": 2.49777773,
		"label": "HP1504101T2D_C22"
	},
	{
		"y": 2.609009976,
		"x": 1.245568744,
		"label": "HP1502401_C10"
	},
	{
		"y": -2.791357072,
		"x": 2.938373946,
		"label": "HP1502401_L7"
	},
	{
		"y": 1.518503388,
		"x": 0.329541819,
		"label": "HP1502401_F11"
	},
	{
		"y": 2.322207728,
		"x": -0.378806135,
		"label": "HP1502401_B22"
	},
	{
		"y": 5.495077206,
		"x": 9.053338728,
		"label": "HP1502401_M8"
	},
	{
		"y": 3.777702956,
		"x": 10.49728663,
		"label": "HP1502401_I2"
	},
	{
		"y": 0.426812706,
		"x": -0.217505313,
		"label": "HP1502401_G11"
	},
	{
		"y": 2.618832168,
		"x": 1.257938007,
		"label": "HP1502401_E19"
	},
	{
		"y": 0.363631569,
		"x": 0.848188645,
		"label": "HP1504101T2D_P24"
	},
	{
		"y": -2.856804712,
		"x": -9.856656806,
		"label": "HP1502401_A16"
	},
	{
		"y": 2.774651608,
		"x": 1.274374944,
		"label": "HP1502401_J10"
	},
	{
		"y": 2.886502686,
		"x": 10.04707712,
		"label": "HP1502401_L18"
	},
	{
		"y": -1.448648239,
		"x": 2.361442546,
		"label": "HP1504101T2D_D13"
	},
	{
		"y": 1.468825961,
		"x": 0.191979615,
		"label": "HP1502401_I9"
	},
	{
		"y": 3.045476628,
		"x": 1.257087443,
		"label": "HP1502401_D6"
	},
	{
		"y": -1.129616702,
		"x": 2.660197922,
		"label": "HP1504101T2D_F12"
	},
	{
		"y": -1.523869368,
		"x": 3.792459946,
		"label": "HP1504101T2D_C14"
	},
	{
		"y": -3.419536965,
		"x": -9.099663145,
		"label": "HP1504101T2D_J6"
	},
	{
		"y": -1.818954372,
		"x": 3.108245726,
		"label": "HP1504101T2D_H20"
	},
	{
		"y": -0.09226584,
		"x": 0.114923024,
		"label": "HP1504101T2D_E9"
	},
	{
		"y": -3.725452456,
		"x": -10.34125361,
		"label": "HP1504101T2D_N4"
	},
	{
		"y": -1.428104594,
		"x": 2.521912416,
		"label": "HP1502401_A4"
	},
	{
		"y": -1.118575614,
		"x": 2.466337914,
		"label": "HP1504101T2D_G12"
	},
	{
		"y": -2.717851613,
		"x": 3.047232605,
		"label": "HP1502401_K5"
	},
	{
		"y": 0.269335306,
		"x": -0.520990806,
		"label": "HP1502401_G12"
	},
	{
		"y": -1.656507251,
		"x": 4.11252774,
		"label": "HP1504101T2D_N13"
	},
	{
		"y": 1.568039237,
		"x": 0.42030158,
		"label": "HP1502401_D12"
	},
	{
		"y": -2.810874112,
		"x": 1.678664905,
		"label": "HP1502401_C4"
	},
	{
		"y": -2.240249113,
		"x": 2.959531922,
		"label": "HP1502401_K1"
	},
	{
		"y": -3.686496767,
		"x": -9.825136991,
		"label": "HP1504101T2D_P19"
	},
	{
		"y": 2.647873331,
		"x": 1.176456662,
		"label": "HP1502401_M2"
	},
	{
		"y": -1.71237841,
		"x": 2.16253204,
		"label": "HP1502401_J20"
	},
	{
		"y": 0.903755194,
		"x": -0.364516773,
		"label": "HP1502401_N23"
	},
	{
		"y": -1.468038073,
		"x": 2.544186807,
		"label": "HP1504101T2D_L8"
	},
	{
		"y": -2.79207037,
		"x": -10.38708606,
		"label": "HP1504101T2D_D14"
	},
	{
		"y": -3.662213786,
		"x": -9.990263516,
		"label": "HP1504101T2D_L9"
	},
	{
		"y": -2.12069972,
		"x": 2.891369155,
		"label": "HP1504101T2D_L7"
	},
	{
		"y": -1.220243526,
		"x": 3.02587273,
		"label": "HP1502401_O23"
	},
	{
		"y": 2.957970749,
		"x": 1.362146562,
		"label": "HP1502401_D22"
	},
	{
		"y": -1.914619606,
		"x": 3.035551293,
		"label": "HP1502401_B5"
	},
	{
		"y": 4.387313917,
		"x": 9.586856322,
		"label": "HP1504101T2D_H18"
	},
	{
		"y": 3.878371368,
		"x": 10.12937106,
		"label": "HP1502401_D4"
	},
	{
		"y": 2.907359689,
		"x": 7.025905981,
		"label": "HP1504101T2D_F18"
	},
	{
		"y": -1.55366102,
		"x": 3.723895277,
		"label": "HP1502401_E6"
	},
	{
		"y": -2.719861983,
		"x": 2.935426157,
		"label": "HP1502401_J18"
	},
	{
		"y": 4.938161076,
		"x": 8.689925134,
		"label": "HP1504101T2D_A10"
	},
	{
		"y": -2.321503181,
		"x": 0.774219543,
		"label": "HP1502401_J3"
	},
	{
		"y": -3.858265506,
		"x": -10.37076918,
		"label": "HP1504101T2D_P15"
	},
	{
		"y": -2.65375816,
		"x": -9.933528878,
		"label": "HP1502401_I5"
	},
	{
		"y": -4.218157684,
		"x": -9.376631541,
		"label": "HP1502401_E1"
	},
	{
		"y": -2.57646525,
		"x": 1.597695676,
		"label": "HP1502401_M1"
	},
	{
		"y": -3.575454524,
		"x": -9.371174067,
		"label": "HP1504101T2D_M20"
	},
	{
		"y": -3.037574996,
		"x": -8.860364935,
		"label": "HP1504101T2D_L17"
	},
	{
		"y": 0.157523369,
		"x": 0.193787427,
		"label": "HP1502401_B15"
	},
	{
		"y": -2.637438296,
		"x": 3.525471959,
		"label": "HP1502401_J4"
	},
	{
		"y": -2.720535181,
		"x": -10.00104661,
		"label": "HP1504101T2D_K6"
	},
	{
		"y": -3.545709623,
		"x": -10.79790166,
		"label": "HP1504101T2D_A7"
	},
	{
		"y": -2.658647225,
		"x": 2.304263662,
		"label": "HP1502401_A15"
	},
	{
		"y": -3.20102905,
		"x": -9.37744102,
		"label": "HP1504101T2D_H12"
	},
	{
		"y": -4.173117606,
		"x": -9.987996713,
		"label": "HP1504101T2D_H8"
	},
	{
		"y": -2.979789543,
		"x": -10.24026623,
		"label": "HP1502401_C23"
	},
	{
		"y": -0.058700271,
		"x": 1.101882227,
		"label": "HP1504101T2D_B17"
	},
	{
		"y": 5.04885184,
		"x": 8.751035155,
		"label": "HP1502401_K10"
	},
	{
		"y": 5.173963576,
		"x": 8.561813299,
		"label": "HP1502401_D10"
	},
	{
		"y": 0.277750763,
		"x": -0.160761177,
		"label": "HP1504101T2D_N20"
	},
	{
		"y": -2.177351701,
		"x": 2.929667312,
		"label": "HP1504101T2D_M24"
	},
	{
		"y": 1.114580856,
		"x": -0.584642179,
		"label": "HP1504101T2D_B3"
	},
	{
		"y": 5.356026429,
		"x": 8.970646383,
		"label": "HP1502401_D11"
	},
	{
		"y": -2.874713857,
		"x": -9.960320793,
		"label": "HP1502401_G2"
	},
	{
		"y": 5.506303219,
		"x": 9.142127383,
		"label": "HP1502401_A22"
	},
	{
		"y": -3.401623492,
		"x": -10.24813794,
		"label": "HP1504101T2D_N3"
	},
	{
		"y": 1.222134467,
		"x": 1.574387788,
		"label": "HP1502401_G20"
	},
	{
		"y": -3.610991193,
		"x": -10.54218201,
		"label": "HP1504101T2D_G7"
	},
	{
		"y": 0.187393821,
		"x": 0.815033253,
		"label": "HP1504101T2D_C12"
	},
	{
		"y": -0.92589657,
		"x": 2.839746748,
		"label": "HP1504101T2D_G22"
	},
	{
		"y": 0.458052284,
		"x": -0.311265699,
		"label": "HP1504101T2D_I19"
	},
	{
		"y": -1.312836175,
		"x": 2.867693787,
		"label": "HP1504101T2D_P17"
	},
	{
		"y": 1.365872285,
		"x": 0.70428841,
		"label": "HP1504101T2D_C9"
	},
	{
		"y": -2.192789434,
		"x": 1.871556628,
		"label": "HP1502401_D20"
	},
	{
		"y": -3.848685862,
		"x": -10.19321891,
		"label": "HP1504101T2D_P23"
	},
	{
		"y": -1.985313781,
		"x": 1.851829879,
		"label": "HP1502401_G7"
	},
	{
		"y": -2.64931823,
		"x": 0.737452271,
		"label": "HP1502401_H5"
	},
	{
		"y": -4.202305221,
		"x": -10.1441097,
		"label": "HP1504101T2D_B9"
	},
	{
		"y": -2.537440177,
		"x": 1.833485548,
		"label": "HP1502401_D16"
	},
	{
		"y": -1.8389382,
		"x": 2.739576868,
		"label": "HP1504101T2D_G14"
	},
	{
		"y": -2.721253601,
		"x": -9.71167622,
		"label": "HP1502401_A23"
	},
	{
		"y": -1.08219263,
		"x": 3.027372949,
		"label": "HP1504101T2D_G10"
	},
	{
		"y": -0.313697417,
		"x": 0.793639756,
		"label": "HP1504101T2D_M1"
	},
	{
		"y": -4.871060117,
		"x": -10.46276617,
		"label": "HP1504101T2D_J23"
	},
	{
		"y": -4.694579653,
		"x": -9.795620854,
		"label": "HP1502401_O15"
	},
	{
		"y": 1.50579976,
		"x": 0.437805425,
		"label": "HP1502401_N7"
	},
	{
		"y": 0.444693879,
		"x": 0.32817755,
		"label": "HP1504101T2D_A13"
	},
	{
		"y": -1.551341692,
		"x": 2.877136961,
		"label": "HP1502401_M19"
	},
	{
		"y": 5.136673476,
		"x": 8.767147427,
		"label": "HP1504101T2D_C11"
	},
	{
		"y": -3.188401903,
		"x": -10.74420713,
		"label": "HP1502401_F3"
	},
	{
		"y": -2.854700301,
		"x": -10.37056807,
		"label": "HP1502401_G17"
	},
	{
		"y": -0.701783422,
		"x": 2.854784516,
		"label": "HP1504101T2D_K12"
	},
	{
		"y": 3.252187181,
		"x": 10.28280012,
		"label": "HP1502401_J15"
	},
	{
		"y": 0.264884916,
		"x": 0.204577523,
		"label": "HP1504101T2D_D21"
	},
	{
		"y": -1.390230257,
		"x": 3.359538214,
		"label": "HP1504101T2D_G19"
	},
	{
		"y": -1.975181616,
		"x": 1.539120234,
		"label": "HP1502401_K6"
	},
	{
		"y": -2.71830983,
		"x": -10.23386868,
		"label": "HP1502401_E15"
	},
	{
		"y": -3.826677817,
		"x": -9.546379961,
		"label": "HP1504101T2D_M16"
	},
	{
		"y": 2.843939588,
		"x": 6.20287545,
		"label": "HP1502401_O9"
	},
	{
		"y": -2.578503893,
		"x": 3.204489206,
		"label": "HP1502401_K2"
	},
	{
		"y": 0.42203022,
		"x": 0.605965886,
		"label": "HP1504101T2D_B18"
	},
	{
		"y": -1.770350766,
		"x": 2.236217819,
		"label": "HP1504101T2D_M2"
	},
	{
		"y": -3.048742573,
		"x": -10.35912504,
		"label": "HP1502401_A19"
	},
	{
		"y": -2.146655059,
		"x": 2.242250905,
		"label": "HP1502401_O8"
	},
	{
		"y": -3.814293992,
		"x": -10.37224804,
		"label": "HP1504101T2D_L12"
	},
	{
		"y": -1.571136497,
		"x": 2.704813247,
		"label": "HP1504101T2D_M9"
	},
	{
		"y": -3.839738902,
		"x": -8.791568099,
		"label": "HP1504101T2D_J21"
	},
	{
		"y": -2.140112606,
		"x": 2.807344109,
		"label": "HP1502401_K16"
	},
	{
		"y": 1.355442111,
		"x": 2.131125505,
		"label": "HP1502401_E17"
	},
	{
		"y": -2.801400936,
		"x": 2.557663059,
		"label": "HP1502401_M23"
	},
	{
		"y": -2.020755445,
		"x": 3.45827314,
		"label": "HP1504101T2D_O14"
	},
	{
		"y": 0.014730286,
		"x": 0.407408015,
		"label": "HP1502401_N11"
	},
	{
		"y": -2.862162761,
		"x": -9.646826536,
		"label": "HP1502401_K8"
	},
	{
		"y": -1.600231986,
		"x": 2.982851379,
		"label": "HP1504101T2D_P22"
	},
	{
		"y": 3.785469474,
		"x": 10.13035831,
		"label": "HP1502401_J19"
	},
	{
		"y": 1.580080112,
		"x": 0.037612803,
		"label": "HP1502401_G3"
	},
	{
		"y": 1.221940521,
		"x": 2.080137338,
		"label": "HP1504101T2D_H6"
	},
	{
		"y": -2.862428173,
		"x": 1.555396422,
		"label": "HP1502401_I18"
	},
	{
		"y": -2.443714946,
		"x": -9.537937787,
		"label": "HP1504101T2D_P1"
	},
	{
		"y": 2.849834253,
		"x": 6.331913729,
		"label": "HP1502401_J7"
	},
	{
		"y": -3.331405893,
		"x": -10.47168455,
		"label": "HP1504101T2D_F23"
	},
	{
		"y": 2.822220931,
		"x": 0.832496676,
		"label": "HP1502401_L10"
	},
	{
		"y": -1.204446194,
		"x": 3.11023458,
		"label": "HP1504101T2D_M10"
	},
	{
		"y": 3.194506806,
		"x": 1.345359004,
		"label": "HP1502401_M12"
	},
	{
		"y": -1.780483141,
		"x": 1.996018633,
		"label": "HP1502401_I1"
	},
	{
		"y": -0.008978511,
		"x": -0.392436422,
		"label": "HP1502401_N9"
	},
	{
		"y": -0.226828205,
		"x": 0.479272296,
		"label": "HP1502401_F15"
	},
	{
		"y": 0.069000304,
		"x": 0.19997588,
		"label": "HP1504101T2D_A17"
	},
	{
		"y": 1.045943858,
		"x": 0.590534464,
		"label": "HP1504101T2D_L11"
	},
	{
		"y": -1.485073515,
		"x": 0.240025564,
		"label": "HP1504101T2D_E3"
	},
	{
		"y": -2.3006906,
		"x": 1.06419714,
		"label": "HP1502401_L22"
	},
	{
		"y": 3.995893526,
		"x": 10.33282757,
		"label": "HP1502401_O10"
	},
	{
		"y": -2.330317969,
		"x": 2.285819941,
		"label": "HP1502401_G8"
	},
	{
		"y": -4.077910177,
		"x": -9.8421563,
		"label": "HP1504101T2D_O15"
	},
	{
		"y": -3.276598626,
		"x": -10.63113006,
		"label": "HP1504101T2D_C5"
	},
	{
		"y": -2.860343776,
		"x": 3.039258222,
		"label": "HP1502401_M9"
	},
	{
		"y": -1.065144261,
		"x": 2.814000282,
		"label": "HP1504101T2D_O22"
	},
	{
		"y": -0.291898619,
		"x": 0.004189857,
		"label": "HP1504101T2D_E7"
	},
	{
		"y": -1.670601665,
		"x": 2.77041866,
		"label": "HP1504101T2D_M5"
	},
	{
		"y": -4.789583854,
		"x": -10.88706806,
		"label": "HP1504101T2D_K9"
	},
	{
		"y": -3.187999029,
		"x": -10.60823552,
		"label": "HP1502401_O11"
	},
	{
		"y": -2.686553801,
		"x": -7.497512183,
		"label": "HP1502401_A3"
	},
	{
		"y": -3.486573557,
		"x": -9.556983668,
		"label": "HP1504101T2D_O8"
	},
	{
		"y": -3.185050467,
		"x": -10.66133874,
		"label": "HP1502401_F5"
	},
	{
		"y": 5.589740369,
		"x": 9.157420367,
		"label": "HP1502401_K12"
	},
	{
		"y": 5.087982857,
		"x": 8.596701733,
		"label": "HP1504101T2D_K10"
	},
	{
		"y": -1.325713136,
		"x": 2.574815242,
		"label": "HP1504101T2D_B21"
	},
	{
		"y": 1.370310736,
		"x": 0.684206442,
		"label": "HP1504101T2D_C10"
	},
	{
		"y": -2.750815914,
		"x": -10.33929164,
		"label": "HP1502401_F2"
	},
	{
		"y": -4.024977808,
		"x": -9.031936215,
		"label": "HP1504101T2D_L16"
	},
	{
		"y": -2.896486319,
		"x": 2.462767513,
		"label": "HP1502401_D24"
	},
	{
		"y": 1.279395438,
		"x": 0.420419679,
		"label": "HP1504101T2D_N21"
	},
	{
		"y": 2.495563837,
		"x": 1.166934523,
		"label": "HP1502401_G22"
	},
	{
		"y": -2.908271826,
		"x": -9.755712026,
		"label": "HP1502401_I20"
	},
	{
		"y": 2.924962774,
		"x": 0.593545428,
		"label": "HP1502401_B1"
	},
	{
		"y": 0.976163551,
		"x": -0.12912656,
		"label": "HP1502401_B11"
	},
	{
		"y": 3.770575549,
		"x": 10.51957122,
		"label": "HP1502401_C12"
	},
	{
		"y": -1.757824253,
		"x": 2.509693479,
		"label": "HP1504101T2D_J7"
	},
	{
		"y": 0.468183651,
		"x": 0.451545114,
		"label": "HP1504101T2D_G3"
	},
	{
		"y": -3.637597379,
		"x": -10.36796073,
		"label": "HP1504101T2D_P10"
	},
	{
		"y": -3.280182331,
		"x": -10.52132723,
		"label": "HP1502401_B12"
	},
	{
		"y": -3.762538416,
		"x": -10.30907525,
		"label": "HP1504101T2D_H10"
	},
	{
		"y": -3.96321141,
		"x": -10.2225604,
		"label": "HP1504101T2D_B23"
	},
	{
		"y": -1.621235286,
		"x": 2.53708869,
		"label": "HP1504101T2D_A6"
	},
	{
		"y": -1.559814188,
		"x": 2.700927592,
		"label": "HP1504101T2D_I8"
	},
	{
		"y": -3.158633008,
		"x": -10.02358993,
		"label": "HP1504101T2D_J10"
	},
	{
		"y": 5.059838142,
		"x": 8.659125715,
		"label": "HP1504101T2D_J16"
	},
	{
		"y": 0.290203734,
		"x": 0.581337859,
		"label": "HP1504101T2D_C21"
	},
	{
		"y": -1.684871369,
		"x": 2.825639058,
		"label": "HP1502401_O4"
	},
	{
		"y": 2.757362621,
		"x": 0.638888163,
		"label": "HP1502401_F24"
	},
	{
		"y": -0.638360089,
		"x": 0.691001916,
		"label": "HP1504101T2D_M8"
	},
	{
		"y": -3.313499352,
		"x": -9.540759993,
		"label": "HP1504101T2D_J12"
	},
	{
		"y": -3.144245388,
		"x": -10.75226314,
		"label": "HP1502401_C9"
	},
	{
		"y": -2.924651241,
		"x": -10.3539687,
		"label": "HP1504101T2D_A1"
	},
	{
		"y": -3.743263189,
		"x": -9.949840444,
		"label": "HP1504101T2D_I21"
	},
	{
		"y": 0.488707221,
		"x": 0.229267203,
		"label": "HP1504101T2D_K8"
	},
	{
		"y": -3.349950974,
		"x": -9.708422933,
		"label": "HP1504101T2D_O18"
	},
	{
		"y": 0.405300421,
		"x": 0.631876667,
		"label": "HP1504101T2D_D24"
	},
	{
		"y": -2.563586983,
		"x": -9.96049404,
		"label": "HP1502401_B2"
	},
	{
		"y": -2.713604962,
		"x": -10.4540035,
		"label": "HP1504101T2D_H16"
	},
	{
		"y": -3.25183729,
		"x": -10.17002031,
		"label": "HP1504101T2D_L20"
	},
	{
		"y": -1.780487192,
		"x": 2.094824942,
		"label": "HP1502401_L15"
	},
	{
		"y": -1.588867445,
		"x": 2.503902128,
		"label": "HP1504101T2D_P21"
	},
	{
		"y": -2.800778044,
		"x": 1.204914967,
		"label": "HP1502401_L9"
	},
	{
		"y": -3.021168133,
		"x": -10.55236495,
		"label": "HP1502401_D9"
	},
	{
		"y": -3.30462712,
		"x": -10.50399253,
		"label": "HP1504101T2D_H19"
	},
	{
		"y": -2.799182838,
		"x": -9.920752405,
		"label": "HP1502401_A20"
	},
	{
		"y": -2.253905363,
		"x": -8.107274298,
		"label": "HP1502401_J16"
	},
	{
		"y": -3.694038935,
		"x": -10.72900397,
		"label": "HP1504101T2D_C7"
	},
	{
		"y": 3.625492647,
		"x": 9.9938138,
		"label": "HP1502401_J17"
	},
	{
		"y": -1.553466342,
		"x": 2.314347582,
		"label": "HP1502401_M3"
	},
	{
		"y": -3.84399543,
		"x": -9.804739823,
		"label": "HP1504101T2D_A9"
	},
	{
		"y": -1.582996501,
		"x": 1.99689594,
		"label": "HP1504101T2D_A12"
	},
	{
		"y": -2.699268497,
		"x": -9.652554326,
		"label": "HP1504101T2D_H13"
	},
	{
		"y": 2.997388109,
		"x": 1.232585767,
		"label": "HP1502401_E10"
	},
	{
		"y": -3.481885122,
		"x": -9.27443914,
		"label": "HP1504101T2D_A22"
	},
	{
		"y": -1.086511803,
		"x": 3.729613867,
		"label": "HP1504101T2D_O9"
	},
	{
		"y": 0.575233525,
		"x": 0.108424592,
		"label": "HP1504101T2D_F14"
	},
	{
		"y": -4.03436848,
		"x": -9.727716363,
		"label": "HP1504101T2D_J4"
	},
	{
		"y": -4.461347541,
		"x": -9.428848989,
		"label": "HP1504101T2D_J17"
	},
	{
		"y": -1.296718398,
		"x": 2.902184937,
		"label": "HP1504101T2D_N1"
	},
	{
		"y": -4.603379829,
		"x": -11.02286564,
		"label": "HP1504101T2D_K7"
	},
	{
		"y": -4.241948552,
		"x": -9.874155367,
		"label": "HP1504101T2D_C8"
	},
	{
		"y": 2.344663189,
		"x": 1.002276302,
		"label": "HP1504101T2D_H23"
	},
	{
		"y": 3.728146805,
		"x": 10.01361671,
		"label": "HP1502401_N10"
	},
	{
		"y": 2.712690981,
		"x": 0.991987871,
		"label": "HP1502401_G5"
	},
	{
		"y": -2.23077825,
		"x": 2.216394822,
		"label": "HP1502401_H20"
	},
	{
		"y": -3.98931303,
		"x": -9.997737675,
		"label": "HP1504101T2D_A3"
	},
	{
		"y": -1.087255826,
		"x": 2.800976065,
		"label": "HP1504101T2D_I23"
	},
	{
		"y": -1.869170153,
		"x": 2.09123106,
		"label": "HP1502401_O20"
	},
	{
		"y": 2.383667876,
		"x": 2.574434717,
		"label": "HP1504101T2D_D9"
	},
	{
		"y": 0.308596025,
		"x": 0.759836928,
		"label": "HP1504101T2D_B5"
	},
	{
		"y": -3.309823829,
		"x": -9.549341031,
		"label": "HP1504101T2D_G20"
	},
	{
		"y": -1.93238213,
		"x": 2.764893357,
		"label": "HP1504101T2D_L5"
	},
	{
		"y": -3.408221068,
		"x": -9.464257487,
		"label": "HP1504101T2D_M22"
	},
	{
		"y": -1.971848962,
		"x": 1.865483478,
		"label": "HP1502401_H24"
	},
	{
		"y": -3.226143004,
		"x": -10.63854649,
		"label": "HP1502401_G9"
	},
	{
		"y": 2.658641012,
		"x": 1.087922724,
		"label": "HP1502401_A6"
	},
	{
		"y": -1.746943447,
		"x": 2.908215493,
		"label": "HP1504101T2D_O20"
	},
	{
		"y": 2.379692365,
		"x": 1.462441129,
		"label": "HP1504101T2D_E15"
	},
	{
		"y": 2.505122427,
		"x": 1.297008849,
		"label": "HP1502401_O7"
	},
	{
		"y": -3.328453147,
		"x": -9.815054496,
		"label": "HP1502401_C22"
	},
	{
		"y": -2.280117926,
		"x": 3.432519931,
		"label": "HP1504101T2D_B7"
	},
	{
		"y": -2.907287807,
		"x": -9.948961712,
		"label": "HP1502401_E12"
	},
	{
		"y": -2.671732311,
		"x": 1.182058704,
		"label": "HP1502401_L4"
	},
	{
		"y": 1.498065325,
		"x": 0.524857302,
		"label": "HP1502401_C5"
	},
	{
		"y": 0.372481308,
		"x": 0.876602554,
		"label": "HP1504101T2D_L24"
	},
	{
		"y": 0.565981734,
		"x": 0.895578776,
		"label": "HP1504101T2D_B12"
	},
	{
		"y": -1.767346004,
		"x": 2.932486387,
		"label": "HP1504101T2D_N24"
	},
	{
		"y": -3.146684307,
		"x": -10.4769824,
		"label": "HP1502401_L24"
	},
	{
		"y": -3.058553388,
		"x": -9.656540988,
		"label": "HP1504101T2D_N18"
	},
	{
		"y": -1.337070374,
		"x": 2.8737692,
		"label": "HP1504101T2D_H2"
	},
	{
		"y": 1.302145494,
		"x": 0.937950526,
		"label": "HP1502401_A2"
	},
	{
		"y": 5.118499568,
		"x": 8.575764,
		"label": "HP1502401_D2"
	},
	{
		"y": -1.583150503,
		"x": 3.377191009,
		"label": "HP1504101T2D_N22"
	},
	{
		"y": -2.022009017,
		"x": 4.023221079,
		"label": "HP1502401_O17"
	},
	{
		"y": -3.69028274,
		"x": -10.01336206,
		"label": "HP1504101T2D_O5"
	},
	{
		"y": -1.526624385,
		"x": 2.934643213,
		"label": "HP1504101T2D_E22"
	},
	{
		"y": 0.316187224,
		"x": 0.275802224,
		"label": "HP1504101T2D_E8"
	},
	{
		"y": 1.407029463,
		"x": 0.49625072,
		"label": "HP1502401_M6"
	},
	{
		"y": 0.496517305,
		"x": 1.231506585,
		"label": "HP1504101T2D_L1"
	},
	{
		"y": -1.080630516,
		"x": 3.496544974,
		"label": "HP1504101T2D_C20"
	},
	{
		"y": 1.880455725,
		"x": 3.642181622,
		"label": "HP1504101T2D_H17"
	},
	{
		"y": -2.129201008,
		"x": 3.353520856,
		"label": "HP1504101T2D_L4"
	},
	{
		"y": -3.170811429,
		"x": -10.75407133,
		"label": "HP1502401_F8"
	},
	{
		"y": -1.402988401,
		"x": 3.159424514,
		"label": "HP1504101T2D_P7"
	},
	{
		"y": -3.166827403,
		"x": -10.84872807,
		"label": "HP1502401_B9"
	},
	{
		"y": 1.268956688,
		"x": 0.478934447,
		"label": "HP1504101T2D_J14"
	},
	{
		"y": -2.159186648,
		"x": -7.864828101,
		"label": "HP1502401_M17"
	},
	{
		"y": -1.656374863,
		"x": 2.924422785,
		"label": "HP1504101T2D_O10"
	},
	{
		"y": -3.470042088,
		"x": -10.21333551,
		"label": "HP1504101T2D_D20"
	},
	{
		"y": 2.768149463,
		"x": 1.072741602,
		"label": "HP1502401_H12"
	},
	{
		"y": -4.159455648,
		"x": -11.30002233,
		"label": "HP1504101T2D_K3"
	},
	{
		"y": -3.651276296,
		"x": -10.55411457,
		"label": "HP1504101T2D_D4"
	},
	{
		"y": -0.021750541,
		"x": 2.580628933,
		"label": "HP1504101T2D_E21"
	},
	{
		"y": -1.505426058,
		"x": 2.880942975,
		"label": "HP1504101T2D_K20"
	},
	{
		"y": -1.799346765,
		"x": 2.041733455,
		"label": "HP1504101T2D_I22"
	},
	{
		"y": 2.829794761,
		"x": 1.036130775,
		"label": "HP1502401_F9"
	},
	{
		"y": -2.931831732,
		"x": -10.39495308,
		"label": "HP1504101T2D_M13"
	},
	{
		"y": -2.094628931,
		"x": 3.447940407,
		"label": "HP1504101T2D_H4"
	},
	{
		"y": 2.294403264,
		"x": -0.19322285,
		"label": "HP1502401_F16"
	},
	{
		"y": 2.292997493,
		"x": 1.327925973,
		"label": "HP1502401_M20"
	},
	{
		"y": -1.339945051,
		"x": 2.730827298,
		"label": "HP1504101T2D_K17"
	},
	{
		"y": -1.82582833,
		"x": 2.223573497,
		"label": "HP1504101T2D_L10"
	},
	{
		"y": -1.847748336,
		"x": -0.342402663,
		"label": "HP1504101T2D_I2"
	},
	{
		"y": -3.435239991,
		"x": -9.472029979,
		"label": "HP1504101T2D_K21"
	},
	{
		"y": 0.34291245,
		"x": 0.412204732,
		"label": "HP1504101T2D_J3"
	},
	{
		"y": 5.445154604,
		"x": 8.215468892,
		"label": "HP1502401_E23"
	},
	{
		"y": 1.559470563,
		"x": 0.209965688,
		"label": "HP1502401_A24"
	},
	{
		"y": -3.691141903,
		"x": -9.725606804,
		"label": "HP1504101T2D_F9"
	},
	{
		"y": -1.32166841,
		"x": 2.797504661,
		"label": "HP1502401_M11"
	},
	{
		"y": -0.313834901,
		"x": -1.542558476,
		"label": "HP1504101T2D_I11"
	},
	{
		"y": 0.099642588,
		"x": 1.255554682,
		"label": "HP1502401_I8"
	},
	{
		"y": -0.095717408,
		"x": 2.476734964,
		"label": "HP1504101T2D_H21"
	},
	{
		"y": -3.111808745,
		"x": -9.654293411,
		"label": "HP1504101T2D_A21"
	},
	{
		"y": -0.200056465,
		"x": 2.844873167,
		"label": "HP1502401_F23"
	},
	{
		"y": -1.428594238,
		"x": 2.773363009,
		"label": "HP1504101T2D_O3"
	},
	{
		"y": -2.345093326,
		"x": 3.439552916,
		"label": "HP1504101T2D_N2"
	},
	{
		"y": -0.189294311,
		"x": 2.915493394,
		"label": "HP1504101T2D_J20"
	},
	{
		"y": -3.024475074,
		"x": -9.128284359,
		"label": "HP1504101T2D_C6"
	},
	{
		"y": -1.510174502,
		"x": 2.409027741,
		"label": "HP1504101T2D_L3"
	},
	{
		"y": -1.132865983,
		"x": 2.884847529,
		"label": "HP1504101T2D_P11"
	},
	{
		"y": 5.185036388,
		"x": 8.520127252,
		"label": "HP1502401_E24"
	},
	{
		"y": -3.240384492,
		"x": -10.18944148,
		"label": "HP1504101T2D_J8"
	},
	{
		"y": 0.211319136,
		"x": 1.190444519,
		"label": "HP1504101T2D_G21"
	},
	{
		"y": -3.117237123,
		"x": -10.41753995,
		"label": "HP1502401_A5"
	},
	{
		"y": -1.1349319,
		"x": 4.170905056,
		"label": "HP1504101T2D_F3"
	},
	{
		"y": -1.873717839,
		"x": 3.517702538,
		"label": "HP1504101T2D_J1"
	},
	{
		"y": -2.760262131,
		"x": -9.987501641,
		"label": "HP1502401_N14"
	},
	{
		"y": -2.230201065,
		"x": 1.710231451,
		"label": "HP1502401_M21"
	},
	{
		"y": -3.357189393,
		"x": -10.71088076,
		"label": "HP1504101T2D_C3"
	},
	{
		"y": 5.014526786,
		"x": 8.817106913,
		"label": "HP1504101T2D_F1"
	},
	{
		"y": -3.741507458,
		"x": -9.388191335,
		"label": "HP1504101T2D_P4"
	},
	{
		"y": 2.60193364,
		"x": 6.876946544,
		"label": "HP1502401_I12"
	},
	{
		"y": 1.502745038,
		"x": 0.49550855,
		"label": "HP1504101T2D_P5"
	},
	{
		"y": -0.99146141,
		"x": 2.645651359,
		"label": "HP1502401_K21"
	},
	{
		"y": -1.011018849,
		"x": 3.292965254,
		"label": "HP1504101T2D_N8"
	},
	{
		"y": -1.821534774,
		"x": 0.01961423,
		"label": "HP1502401_I19"
	},
	{
		"y": 1.470397388,
		"x": 0.585521613,
		"label": "HP1502401_C20"
	},
	{
		"y": -0.026410113,
		"x": 2.335296438,
		"label": "HP1504101T2D_G23"
	},
	{
		"y": -2.039837159,
		"x": 1.456693354,
		"label": "HP1502401_H16"
	},
	{
		"y": 3.452897371,
		"x": 10.28318403,
		"label": "HP1502401_J24"
	},
	{
		"y": -3.144736965,
		"x": -10.71318453,
		"label": "HP1502401_C17"
	},
	{
		"y": -3.611397311,
		"x": -9.480387208,
		"label": "HP1504101T2D_E12"
	},
	{
		"y": -3.43997725,
		"x": -10.34901944,
		"label": "HP1504101T2D_A2"
	},
	{
		"y": -3.357834525,
		"x": -12.0469919,
		"label": "HP1504101T2D_K11"
	},
	{
		"y": 0.585428419,
		"x": 0.633542096,
		"label": "HP1504101T2D_D15"
	},
	{
		"y": -3.302608449,
		"x": -10.23799926,
		"label": "HP1504101T2D_E2"
	},
	{
		"y": 0.374023625,
		"x": 0.530195922,
		"label": "HP1504101T2D_D23"
	},
	{
		"y": -1.483270558,
		"x": 2.454095431,
		"label": "HP1504101T2D_N6"
	},
	{
		"y": -3.62030828,
		"x": -9.94481424,
		"label": "HP1504101T2D_N23"
	},
	{
		"y": -1.70321797,
		"x": 2.787061281,
		"label": "HP1502401_L20"
	},
	{
		"y": -3.403907527,
		"x": -9.717340801,
		"label": "HP1504101T2D_A16"
	},
	{
		"y": -2.638916852,
		"x": -10.0426218,
		"label": "HP1502401_E18"
	},
	{
		"y": -2.785489257,
		"x": -9.172991177,
		"label": "HP1504101T2D_O17"
	},
	{
		"y": -1.825142649,
		"x": 4.300819115,
		"label": "HP1502401_N20"
	},
	{
		"y": -1.714396021,
		"x": 2.002110363,
		"label": "HP1502401_E11"
	},
	{
		"y": -3.145001366,
		"x": -10.58165826,
		"label": "HP1502401_C24"
	},
	{
		"y": 0.105951804,
		"x": 0.65977726,
		"label": "HP1504101T2D_H1"
	},
	{
		"y": -3.002271941,
		"x": 2.383064744,
		"label": "HP1502401_K11"
	},
	{
		"y": 3.713067391,
		"x": 10.38584113,
		"label": "HP1502401_M16"
	},
	{
		"y": 5.350896692,
		"x": 8.685882884,
		"label": "HP1502401_E2"
	},
	{
		"y": -0.178427873,
		"x": 1.952884155,
		"label": "HP1504101T2D_D12"
	},
	{
		"y": -1.555521086,
		"x": 3.001168393,
		"label": "HP1504101T2D_H22"
	},
	{
		"y": -3.694091299,
		"x": -9.523495251,
		"label": "HP1504101T2D_M12"
	},
	{
		"y": 1.622816355,
		"x": 4.041485033,
		"label": "HP1502401_B10"
	},
	{
		"y": -2.06321,
		"x": 3.059536704,
		"label": "HP1502401_F20"
	},
	{
		"y": -3.765226548,
		"x": -10.08679837,
		"label": "HP1504101T2D_D3"
	},
	{
		"y": -1.839667662,
		"x": 3.513732987,
		"label": "HP1504101T2D_B13"
	},
	{
		"y": -1.616401508,
		"x": 2.538055197,
		"label": "HP1504101T2D_F19"
	},
	{
		"y": 0.383862683,
		"x": 0.65657155,
		"label": "HP1504101T2D_F13"
	},
	{
		"y": -2.228504116,
		"x": 1.9854501,
		"label": "HP1502401_B16"
	},
	{
		"y": 5.390561312,
		"x": 9.163879551,
		"label": "HP1502401_C1"
	},
	{
		"y": 3.094258878,
		"x": 1.468845552,
		"label": "HP1502401_C21"
	},
	{
		"y": -3.532680085,
		"x": -9.738908437,
		"label": "HP1504101T2D_F21"
	},
	{
		"y": 0.607921319,
		"x": -0.13845317,
		"label": "HP1504101T2D_J9"
	},
	{
		"y": 3.832960477,
		"x": 10.12783846,
		"label": "HP1502401_I21"
	},
	{
		"y": -4.849050692,
		"x": -10.8038135,
		"label": "HP1504101T2D_K15"
	},
	{
		"y": 0.424347413,
		"x": 0.557571417,
		"label": "HP1504101T2D_H24"
	},
	{
		"y": -2.93182006,
		"x": -10.21375406,
		"label": "HP1502401_I17"
	},
	{
		"y": 2.835812509,
		"x": 1.0006255,
		"label": "HP1502401_C7"
	},
	{
		"y": -4.009491516,
		"x": -10.1798757,
		"label": "HP1504101T2D_F24"
	},
	{
		"y": -4.070913806,
		"x": -10.04297663,
		"label": "HP1504101T2D_P20"
	},
	{
		"y": -4.484096071,
		"x": -10.38191039,
		"label": "HP1504101T2D_B14"
	},
	{
		"y": 2.971271589,
		"x": 1.413125205,
		"label": "HP1502401_H19"
	},
	{
		"y": -3.173468264,
		"x": -10.77102501,
		"label": "HP1502401_F6"
	},
	{
		"y": -1.540541883,
		"x": 2.375505379,
		"label": "HP1502401_L1"
	},
	{
		"y": -3.182897678,
		"x": -10.72210786,
		"label": "HP1502401_F1"
	},
	{
		"y": 5.078585132,
		"x": 8.548695902,
		"label": "HP1502401_J2"
	},
	{
		"y": -2.583410099,
		"x": -10.06846237,
		"label": "HP1502401_C3"
	},
	{
		"y": 0.346721953,
		"x": -0.135174813,
		"label": "HP1504101T2D_E20"
	},
	{
		"y": -4.17304586,
		"x": -10.47231736,
		"label": "HP1504101T2D_H3"
	},
	{
		"y": 2.645787676,
		"x": 1.11359583,
		"label": "HP1502401_I24"
	},
	{
		"y": 0.346482341,
		"x": 1.201339937,
		"label": "HP1504101T2D_P12"
	},
	{
		"y": 1.228234332,
		"x": 2.235347206,
		"label": "HP1504101T2D_C16"
	},
	{
		"y": 3.086918249,
		"x": 0.913257528,
		"label": "HP1502401_N21"
	},
	{
		"y": 3.067807725,
		"x": 1.163179772,
		"label": "HP1502401_A10"
	},
	{
		"y": 4.537716376,
		"x": 8.916561539,
		"label": "HP1502401_M22"
	},
	{
		"y": -2.489521302,
		"x": 3.225159021,
		"label": "HP1502401_A17"
	},
	{
		"y": -3.772928737,
		"x": -10.03104255,
		"label": "HP1504101T2D_O2"
	},
	{
		"y": -1.585522684,
		"x": 3.055499569,
		"label": "HP1504101T2D_A8"
	},
	{
		"y": 3.180143532,
		"x": 0.87080293,
		"label": "HP1502401_J12"
	},
	{
		"y": -3.135184351,
		"x": -9.006834862,
		"label": "HP1504101T2D_A14"
	},
	{
		"y": -3.702755365,
		"x": -7.92672969,
		"label": "HP1504101T2D_I12"
	},
	{
		"y": -1.853578946,
		"x": 3.470570131,
		"label": "HP1504101T2D_H15"
	},
	{
		"y": 0.27715696,
		"x": 0.817268034,
		"label": "HP1504101T2D_J22"
	},
	{
		"y": 3.024229733,
		"x": 1.457875101,
		"label": "HP1502401_F21"
	},
	{
		"y": -2.364626324,
		"x": 4.256352251,
		"label": "HP1502401_H1"
	},
	{
		"y": 0.167243105,
		"x": 0.854220071,
		"label": "HP1504101T2D_O11"
	},
	{
		"y": -1.287298288,
		"x": 2.849382501,
		"label": "HP1504101T2D_M23"
	},
	{
		"y": -2.838410494,
		"x": -9.952812545,
		"label": "HP1502401_K7"
	},
	{
		"y": 0.062648963,
		"x": 2.102794951,
		"label": "HP1504101T2D_J5"
	},
	{
		"y": -1.85078873,
		"x": 2.025393931,
		"label": "HP1502401_I23"
	},
	{
		"y": 0.355439421,
		"x": 0.330163594,
		"label": "HP1504101T2D_G8"
	},
	{
		"y": -3.343738487,
		"x": -8.918917561,
		"label": "HP1504101T2D_K14"
	},
	{
		"y": -2.406701674,
		"x": 2.635386444,
		"label": "HP1502401_O3"
	},
	{
		"y": -2.498843656,
		"x": 1.660529864,
		"label": "HP1502401_F10"
	},
	{
		"y": 2.813766425,
		"x": 6.840904447,
		"label": "HP1502401_H18"
	},
	{
		"y": 1.714424552,
		"x": 0.24377746,
		"label": "HP1502401_E3"
	},
	{
		"y": -1.123402377,
		"x": 3.130726576,
		"label": "HP1504101T2D_J24"
	},
	{
		"y": -2.36499648,
		"x": 0.394545353,
		"label": "HP1502401_J9"
	},
	{
		"y": -1.552835341,
		"x": 2.817033889,
		"label": "HP1504101T2D_D5"
	},
	{
		"y": 0.442495661,
		"x": 1.935514542,
		"label": "HP1504101T2D_D11"
	},
	{
		"y": -3.786432243,
		"x": -10.57664778,
		"label": "HP1504101T2D_F4"
	},
	{
		"y": 0.239423098,
		"x": 0.371341849,
		"label": "HP1504101T2D_O23"
	},
	{
		"y": -2.306375802,
		"x": 2.078467997,
		"label": "HP1502401_N3"
	},
	{
		"y": -1.751313931,
		"x": 2.309083654,
		"label": "HP1504101T2D_L18"
	},
	{
		"y": 0.26050112,
		"x": 0.269662409,
		"label": "HP1504101T2D_F20"
	},
	{
		"y": 3.939224033,
		"x": 9.90410821,
		"label": "HP1502401_N16"
	},
	{
		"y": -1.437987713,
		"x": 3.119269845,
		"label": "HP1504101T2D_K18"
	},
	{
		"y": -1.277102077,
		"x": 2.755500605,
		"label": "HP1504101T2D_P18"
	},
	{
		"y": 1.464608019,
		"x": 0.302357813,
		"label": "HP1502401_E9"
	},
	{
		"y": 0.288827477,
		"x": 0.081760483,
		"label": "HP1504101T2D_M3"
	},
	{
		"y": -2.227066288,
		"x": -10.07652704,
		"label": "HP1504101T2D_G11"
	},
	{
		"y": -1.991805585,
		"x": 3.487743845,
		"label": "HP1504101T2D_L19"
	},
	{
		"y": -3.313248758,
		"x": -9.711739386,
		"label": "HP1504101T2D_G18"
	},
	{
		"y": -2.108668264,
		"x": 2.193729479,
		"label": "HP1504101T2D_N5"
	},
	{
		"y": -2.671468744,
		"x": 2.928695306,
		"label": "HP1502401_N19"
	},
	{
		"y": 1.469645817,
		"x": 0.214198266,
		"label": "HP1502401_B8"
	},
	{
		"y": 5.056282499,
		"x": 8.615196293,
		"label": "HP1502401_E20"
	},
	{
		"y": -4.142683703,
		"x": -10.23266022,
		"label": "HP1504101T2D_O1"
	},
	{
		"y": -1.29703922,
		"x": 3.310874872,
		"label": "HP1504101T2D_A23"
	},
	{
		"y": -1.579640058,
		"x": 2.840556342,
		"label": "HP1504101T2D_D6"
	},
	{
		"y": -2.587621514,
		"x": 1.886805977,
		"label": "HP1502401_K20"
	},
	{
		"y": -3.247190041,
		"x": -10.46561823,
		"label": "HP1502401_D15"
	},
	{
		"y": 0.416845748,
		"x": 0.483412114,
		"label": "HP1504101T2D_N16"
	},
	{
		"y": 2.954470049,
		"x": 1.552632744,
		"label": "HP1502401_B23"
	},
	{
		"y": 4.523840068,
		"x": 9.500732061,
		"label": "HP1504101T2D_O24"
	},
	{
		"y": -3.347261548,
		"x": -10.50363421,
		"label": "HP1502401_H9"
	},
	{
		"y": 0.271659709,
		"x": 0.500130718,
		"label": "HP1504101T2D_A18"
	},
	{
		"y": 0.426942259,
		"x": 0.47866044,
		"label": "HP1504101T2D_F16"
	},
	{
		"y": -1.495943734,
		"x": -1.262609862,
		"label": "HP1502401_I10"
	},
	{
		"y": -4.448958003,
		"x": -10.7751492,
		"label": "AZ_A1"
	},
	{
		"y": -0.479959824,
		"x": 0.6982299,
		"label": "AZ_A2"
	},
	{
		"y": -4.149115479,
		"x": -9.588098748,
		"label": "AZ_A3"
	},
	{
		"y": -2.819612929,
		"x": -8.900463714,
		"label": "AZ_B6"
	},
	{
		"y": -1.575884115,
		"x": 1.893084975,
		"label": "AZ_B9"
	},
	{
		"y": -3.179652631,
		"x": -9.16472229,
		"label": "AZ_B4"
	},
	{
		"y": -2.225037062,
		"x": 1.855183747,
		"label": "AZ_A6"
	},
	{
		"y": 1.357021819,
		"x": -0.305522162,
		"label": "AZ_C11"
	},
	{
		"y": 1.497462917,
		"x": 0.424984133,
		"label": "AZ_B10"
	},
	{
		"y": -1.465588135,
		"x": -11.09458794,
		"label": "AZ_A4"
	},
	{
		"y": 2.820112568,
		"x": 0.958561421,
		"label": "AZ_C10"
	},
	{
		"y": -1.331508866,
		"x": -8.199179465,
		"label": "AZ_A5"
	},
	{
		"y": -2.541211387,
		"x": -9.393678632,
		"label": "AZ_C12"
	},
	{
		"y": 5.126478625,
		"x": 8.372064634,
		"label": "AZ_B8"
	},
	{
		"y": 1.601731067,
		"x": 0.329940689,
		"label": "AZ_B1"
	},
	{
		"y": 1.521275943,
		"x": 0.180422952,
		"label": "AZ_A12"
	},
	{
		"y": -2.375492857,
		"x": -9.028762814,
		"label": "AZ_B7"
	},
	{
		"y": 1.026307492,
		"x": 4.272949126,
		"label": "AZ_C1"
	},
	{
		"y": -3.340965289,
		"x": -8.351448364,
		"label": "AZ_A9"
	},
	{
		"y": 2.92202932,
		"x": 0.658773042,
		"label": "AZ_A8"
	},
	{
		"y": -2.583228197,
		"x": 1.81106617,
		"label": "AZ_A11"
	},
	{
		"y": -1.539896033,
		"x": 3.103391124,
		"label": "AZ_C2"
	},
	{
		"y": 0.326775459,
		"x": 2.458097867,
		"label": "AZ_B11"
	},
	{
		"y": -2.281548064,
		"x": 3.578226607,
		"label": "AZ_B12"
	},
	{
		"y": 0.802477315,
		"x": 3.678541801,
		"label": "AZ_B2"
	},
	{
		"y": -1.213611569,
		"x": 2.572749297,
		"label": "AZ_B3"
	},
	{
		"y": 5.348950452,
		"x": 7.894922322,
		"label": "AZ_A7"
	},
	{
		"y": 1.356138977,
		"x": 0.717580953,
		"label": "AZ_A10"
	},
	{
		"y": 3.363276906,
		"x": 8.737427407,
		"label": "AZ_C3"
	},
	{
		"y": 0.128480543,
		"x": 2.459119503,
		"label": "AZ_B5"
	},
	{
		"y": -2.82706773,
		"x": 2.216255162,
		"label": "AZ_E12"
	},
	{
		"y": -3.898715685,
		"x": -11.04742892,
		"label": "AZ_G12"
	},
	{
		"y": -1.559517193,
		"x": -10.82628973,
		"label": "AZ_F10"
	},
	{
		"y": 0.365627549,
		"x": -2.784517303,
		"label": "AZ_H4"
	},
	{
		"y": -2.526090335,
		"x": 2.937825667,
		"label": "AZ_D3"
	},
	{
		"y": -2.117024661,
		"x": 2.412047143,
		"label": "AZ_E4"
	},
	{
		"y": 0.378602973,
		"x": 2.015334547,
		"label": "AZ_G6"
	},
	{
		"y": 0.268788841,
		"x": -0.286945074,
		"label": "AZ_H5"
	},
	{
		"y": -2.85128131,
		"x": 1.175228184,
		"label": "AZ_G4"
	},
	{
		"y": -4.645140299,
		"x": -9.850292295,
		"label": "AZ_E10"
	},
	{
		"y": -3.140963508,
		"x": 2.490044468,
		"label": "AZ_G10"
	},
	{
		"y": 3.075089915,
		"x": 2.195083151,
		"label": "AZ_D6"
	},
	{
		"y": 1.360325813,
		"x": -0.419635868,
		"label": "AZ_H1"
	},
	{
		"y": 1.676110872,
		"x": 4.136999147,
		"label": "AZ_G3"
	},
	{
		"y": 2.940217508,
		"x": 0.51318964,
		"label": "AZ_H11"
	},
	{
		"y": -2.663285341,
		"x": 3.620022814,
		"label": "AZ_D9"
	},
	{
		"y": 1.299503736,
		"x": -0.119322075,
		"label": "AZ_D5"
	},
	{
		"y": -1.61877962,
		"x": -10.73325308,
		"label": "AZ_H8"
	},
	{
		"y": -4.284665837,
		"x": -10.59782807,
		"label": "AZ_G11"
	},
	{
		"y": -2.386810503,
		"x": -6.226971958,
		"label": "AZ_F3"
	},
	{
		"y": -0.196694702,
		"x": 0.372783304,
		"label": "AZ_G5"
	},
	{
		"y": 3.070973068,
		"x": 0.360544888,
		"label": "AZ_H2"
	},
	{
		"y": -1.636615206,
		"x": -10.43774797,
		"label": "AZ_E11"
	},
	{
		"y": -1.682063786,
		"x": 3.240886268,
		"label": "AZ_E2"
	},
	{
		"y": 5.081606603,
		"x": 8.373562248,
		"label": "AZ_H10"
	},
	{
		"y": 5.300015722,
		"x": 8.085058176,
		"label": "AZ_F6"
	},
	{
		"y": -1.692771491,
		"x": -10.79154696,
		"label": "AZ_G7"
	},
	{
		"y": 2.921043182,
		"x": 6.800315684,
		"label": "AZ_F5"
	},
	{
		"y": -3.713191667,
		"x": -11.20775433,
		"label": "AZ_G9"
	},
	{
		"y": -0.016131047,
		"x": 0.872422233,
		"label": "AZ_D8"
	},
	{
		"y": 2.758778477,
		"x": 7.2568451,
		"label": "AZ_E3"
	},
	{
		"y": -3.515701754,
		"x": -9.306596486,
		"label": "AZ_D10"
	},
	{
		"y": 2.417894759,
		"x": 1.32377895,
		"label": "AZ_E7"
	},
	{
		"y": -3.351027918,
		"x": -8.789589126,
		"label": "AZ_E1"
	},
	{
		"y": 2.906664189,
		"x": 0.467083033,
		"label": "AZ_G2"
	},
	{
		"y": 2.179985926,
		"x": 0.261435967,
		"label": "AZ_H6"
	},
	{
		"y": 3.823748716,
		"x": 8.440756172,
		"label": "AZ_F9"
	},
	{
		"y": -1.622275299,
		"x": 3.426574957,
		"label": "AZ_C8"
	},
	{
		"y": -2.751321224,
		"x": -9.003976956,
		"label": "AZ_C7"
	},
	{
		"y": -0.565220573,
		"x": -0.964520237,
		"label": "AZ_H12"
	},
	{
		"y": -2.226093745,
		"x": -9.651464823,
		"label": "AZ_H7"
	},
	{
		"y": -4.326072649,
		"x": -11.26778225,
		"label": "AZ_D1"
	},
	{
		"y": 1.176633619,
		"x": 4.335970106,
		"label": "AZ_E5"
	},
	{
		"y": -0.014781299,
		"x": 0.037737741,
		"label": "AZ_D12"
	},
	{
		"y": -1.767055053,
		"x": 3.594962347,
		"label": "AZ_F4"
	},
	{
		"y": 1.093927433,
		"x": 1.79627919,
		"label": "AZ_F7"
	},
	{
		"y": -4.388108161,
		"x": -11.15059417,
		"label": "AZ_G8"
	},
	{
		"y": -3.242889487,
		"x": -8.70660191,
		"label": "AZ_H3"
	},
	{
		"y": -2.743576519,
		"x": -9.26044883,
		"label": "AZ_F12"
	},
	{
		"y": 2.749779807,
		"x": 0.968966025,
		"label": "AZ_C4"
	},
	{
		"y": -2.270340876,
		"x": 2.82913704,
		"label": "AZ_C5"
	},
	{
		"y": -2.10511994,
		"x": 2.66040624,
		"label": "AZ_D7"
	},
	{
		"y": -0.669484724,
		"x": 2.55212837,
		"label": "AZ_D4"
	},
	{
		"y": 3.029115662,
		"x": 1.711589986,
		"label": "AZ_F2"
	},
	{
		"y": -1.771672348,
		"x": -11.0304294,
		"label": "AZ_D11"
	},
	{
		"y": -0.126004738,
		"x": 2.442808166,
		"label": "AZ_E8"
	},
	{
		"y": 2.915195941,
		"x": 1.508098708,
		"label": "AZ_F1"
	},
	{
		"y": -1.581533916,
		"x": 3.957870825,
		"label": "AZ_F8"
	},
	{
		"y": 4.155371216,
		"x": 9.474674252,
		"label": "AZ_C9"
	},
	{
		"y": -3.166005636,
		"x": 2.888562296,
		"label": "AZ_G1"
	},
	{
		"y": -2.766680301,
		"x": -7.470841729,
		"label": "AZ_F11"
	},
	{
		"y": -2.715052812,
		"x": -9.006273972,
		"label": "AZ_C6"
	},
	{
		"y": -2.25528895,
		"x": 3.727653126,
		"label": "AZ_E9"
	},
	{
		"y": 1.311007215,
		"x": 4.480139777,
		"label": "AZ_H9"
	},
	{
		"y": 2.788364963,
		"x": 0.851056431,
		"label": "AZ_D2"
	},
	{
		"y": -2.63365909,
		"x": -9.896095681,
		"label": "AZ_E6"
	},
	{
		"y": -2.524894949,
		"x": -7.033384296,
		"label": "HP1508501T2D_E3"
	},
	{
		"y": -2.293581913,
		"x": -10.19156165,
		"label": "HP1508501T2D_C1"
	},
	{
		"y": -2.563248332,
		"x": -12.14523865,
		"label": "HP1508501T2D_O2"
	},
	{
		"y": -2.562363232,
		"x": 3.866585555,
		"label": "HP1508501T2D_E2"
	},
	{
		"y": -2.514479679,
		"x": -11.32817149,
		"label": "HP1508501T2D_M2"
	},
	{
		"y": -2.288360622,
		"x": -10.24032137,
		"label": "HP1508501T2D_C3"
	},
	{
		"y": 3.246158288,
		"x": 6.844023767,
		"label": "HP1508501T2D_M1"
	},
	{
		"y": -2.934593236,
		"x": -9.111122006,
		"label": "HP1508501T2D_A2"
	},
	{
		"y": 3.709951539,
		"x": 10.03422584,
		"label": "HP1508501T2D_K2"
	},
	{
		"y": -1.545067302,
		"x": -11.36144288,
		"label": "HP1508501T2D_A1"
	},
	{
		"y": 2.978269802,
		"x": 7.127076728,
		"label": "HP1508501T2D_E1"
	},
	{
		"y": -0.549546144,
		"x": 3.251115469,
		"label": "HP1508501T2D_A3"
	},
	{
		"y": 0.06084758,
		"x": 4.325083129,
		"label": "HP1508501T2D_I2"
	},
	{
		"y": -0.573912864,
		"x": 3.037512046,
		"label": "HP1508501T2D_O1"
	},
	{
		"y": 4.372117903,
		"x": 9.594440229,
		"label": "HP1508501T2D_G2"
	},
	{
		"y": 4.24968678,
		"x": 9.535514078,
		"label": "HP1508501T2D_I1"
	},
	{
		"y": 4.33981066,
		"x": 9.589147117,
		"label": "HP1508501T2D_C2"
	},
	{
		"y": 0.309920246,
		"x": 3.839482425,
		"label": "HP1508501T2D_K1"
	},
	{
		"y": 4.407172207,
		"x": 9.552090715,
		"label": "HP1508501T2D_G3"
	},
	{
		"y": 4.207134866,
		"x": 9.81170155,
		"label": "HP1508501T2D_G1"
	},
	{
		"y": -3.074228983,
		"x": -11.70604427,
		"label": "HP1508501T2D_D23"
	},
	{
		"y": -1.250276006,
		"x": 2.820597338,
		"label": "HP1508501T2D_C20"
	},
	{
		"y": 0.30094099,
		"x": 3.69798011,
		"label": "HP1508501T2D_M9"
	},
	{
		"y": -0.685584119,
		"x": 3.163560549,
		"label": "HP1508501T2D_L13"
	},
	{
		"y": -1.642147464,
		"x": -8.839856486,
		"label": "HP1508501T2D_K13"
	},
	{
		"y": 2.366136497,
		"x": 2.436712757,
		"label": "HP1508501T2D_O4"
	},
	{
		"y": 4.382173716,
		"x": 9.628765829,
		"label": "HP1508501T2D_N1"
	},
	{
		"y": -0.409008923,
		"x": 3.250874245,
		"label": "HP1508501T2D_P7"
	},
	{
		"y": -2.007069078,
		"x": -9.502791691,
		"label": "HP1508501T2D_N14"
	},
	{
		"y": -0.297639493,
		"x": 3.092508142,
		"label": "HP1508501T2D_B15"
	},
	{
		"y": -1.387796431,
		"x": 3.854418647,
		"label": "HP1508501T2D_D2"
	},
	{
		"y": -2.329364894,
		"x": 3.98656644,
		"label": "HP1508501T2D_D20"
	},
	{
		"y": -2.845759562,
		"x": -7.785043297,
		"label": "HP1508501T2D_I5"
	},
	{
		"y": 1.178557167,
		"x": 1.655652932,
		"label": "HP1508501T2D_H11"
	},
	{
		"y": -0.751507608,
		"x": 3.122220507,
		"label": "HP1508501T2D_E24"
	},
	{
		"y": 4.180352039,
		"x": 9.727182555,
		"label": "HP1508501T2D_B18"
	},
	{
		"y": -0.86178981,
		"x": 2.781223279,
		"label": "HP1508501T2D_G15"
	},
	{
		"y": -1.034996333,
		"x": 3.604075174,
		"label": "HP1508501T2D_M20"
	},
	{
		"y": 3.890762588,
		"x": 10.5258007,
		"label": "HP1508501T2D_C6"
	},
	{
		"y": -0.59329409,
		"x": 3.032070342,
		"label": "HP1508501T2D_B23"
	},
	{
		"y": -1.77152228,
		"x": -10.87750355,
		"label": "HP1508501T2D_K11"
	},
	{
		"y": 3.006680611,
		"x": 7.118228696,
		"label": "HP1508501T2D_A8"
	},
	{
		"y": -1.509861437,
		"x": 2.126034704,
		"label": "HP1508501T2D_J21"
	},
	{
		"y": -1.466910808,
		"x": 3.575773094,
		"label": "HP1508501T2D_A13"
	},
	{
		"y": 4.387676027,
		"x": 9.434019912,
		"label": "HP1508501T2D_O3"
	},
	{
		"y": 1.716780574,
		"x": 2.169467695,
		"label": "HP1508501T2D_F3"
	},
	{
		"y": 4.348349367,
		"x": 9.6821709,
		"label": "HP1508501T2D_M17"
	},
	{
		"y": -0.51931789,
		"x": 3.116783269,
		"label": "HP1508501T2D_I15"
	},
	{
		"y": -2.053367885,
		"x": 4.828549367,
		"label": "HP1508501T2D_E6"
	},
	{
		"y": -0.608121781,
		"x": 3.837270745,
		"label": "HP1508501T2D_E14"
	},
	{
		"y": -2.878451848,
		"x": -8.269688219,
		"label": "HP1508501T2D_G16"
	},
	{
		"y": -1.70685447,
		"x": 3.849532347,
		"label": "HP1508501T2D_M19"
	},
	{
		"y": -0.631508474,
		"x": 3.030747086,
		"label": "HP1508501T2D_D17"
	},
	{
		"y": -1.0262614,
		"x": 2.585099876,
		"label": "HP1508501T2D_L18"
	},
	{
		"y": 4.962316974,
		"x": 8.351266409,
		"label": "HP1508501T2D_A23"
	},
	{
		"y": 4.331297536,
		"x": 9.292885575,
		"label": "HP1508501T2D_M3"
	},
	{
		"y": 3.252735955,
		"x": 10.21402748,
		"label": "HP1508501T2D_L20"
	},
	{
		"y": -1.932651704,
		"x": -9.417369195,
		"label": "HP1508501T2D_L8"
	},
	{
		"y": -1.32997147,
		"x": 2.328307243,
		"label": "HP1508501T2D_F17"
	},
	{
		"y": -2.199984233,
		"x": -9.210233639,
		"label": "HP1508501T2D_L19"
	},
	{
		"y": 2.240784712,
		"x": 2.584696846,
		"label": "HP1508501T2D_A10"
	},
	{
		"y": 0.67837103,
		"x": 4.046094866,
		"label": "HP1508501T2D_H24"
	},
	{
		"y": -2.764645894,
		"x": 3.944696736,
		"label": "HP1508501T2D_D7"
	},
	{
		"y": 4.18720828,
		"x": 7.958951242,
		"label": "HP1508501T2D_P14"
	},
	{
		"y": -2.997614965,
		"x": -11.29819508,
		"label": "HP1508501T2D_O21"
	},
	{
		"y": 5.173120068,
		"x": 8.469345398,
		"label": "HP1508501T2D_I24"
	},
	{
		"y": -2.834215428,
		"x": -10.70538935,
		"label": "HP1508501T2D_L12"
	},
	{
		"y": -2.697368399,
		"x": 1.407028026,
		"label": "HP1508501T2D_H22"
	},
	{
		"y": -1.106816802,
		"x": 3.807304208,
		"label": "HP1508501T2D_I20"
	},
	{
		"y": 4.394215775,
		"x": 9.609021194,
		"label": "HP1508501T2D_F4"
	},
	{
		"y": 4.364674283,
		"x": 9.524695034,
		"label": "HP1508501T2D_F12"
	},
	{
		"y": 2.737068649,
		"x": 9.854775561,
		"label": "HP1508501T2D_P10"
	},
	{
		"y": 4.242029452,
		"x": 9.837605166,
		"label": "HP1508501T2D_N9"
	},
	{
		"y": 2.967948481,
		"x": 7.044443939,
		"label": "HP1508501T2D_H5"
	},
	{
		"y": 0.438265777,
		"x": 1.822468731,
		"label": "HP1508501T2D_A19"
	},
	{
		"y": -1.049876376,
		"x": 4.061720188,
		"label": "HP1508501T2D_B9"
	},
	{
		"y": 1.28317797,
		"x": 3.03284827,
		"label": "HP1508501T2D_H2"
	},
	{
		"y": 5.061352469,
		"x": 8.715829393,
		"label": "HP1508501T2D_J23"
	},
	{
		"y": -2.755393631,
		"x": -11.9659211,
		"label": "HP1508501T2D_A20"
	},
	{
		"y": -2.470600937,
		"x": -11.32074838,
		"label": "HP1508501T2D_P24"
	},
	{
		"y": -2.111101282,
		"x": -10.47705568,
		"label": "HP1508501T2D_G7"
	},
	{
		"y": 4.316305042,
		"x": 9.619246124,
		"label": "HP1508501T2D_B17"
	},
	{
		"y": 0.092843536,
		"x": 5.20086689,
		"label": "HP1508501T2D_A6"
	},
	{
		"y": -0.312234047,
		"x": 3.095282207,
		"label": "HP1508501T2D_D5"
	},
	{
		"y": -2.552497446,
		"x": -9.428687197,
		"label": "HP1508501T2D_H8"
	},
	{
		"y": -2.245829606,
		"x": -10.58410592,
		"label": "HP1508501T2D_K8"
	},
	{
		"y": 3.02708176,
		"x": 7.159400915,
		"label": "HP1508501T2D_I3"
	},
	{
		"y": 2.018573072,
		"x": 2.238915033,
		"label": "HP1508501T2D_I8"
	},
	{
		"y": -0.309224134,
		"x": 3.230981604,
		"label": "HP1508501T2D_L6"
	},
	{
		"y": -2.058079637,
		"x": 4.272028978,
		"label": "HP1508501T2D_B5"
	},
	{
		"y": 2.322465999,
		"x": 2.244785798,
		"label": "HP1508501T2D_C14"
	},
	{
		"y": 4.376703025,
		"x": 9.655847659,
		"label": "HP1508501T2D_J11"
	},
	{
		"y": -0.058042026,
		"x": 3.236340782,
		"label": "HP1508501T2D_F16"
	},
	{
		"y": -0.701873265,
		"x": 3.903723934,
		"label": "HP1508501T2D_L7"
	},
	{
		"y": -2.553477145,
		"x": -11.11475099,
		"label": "HP1508501T2D_O16"
	},
	{
		"y": -0.679003061,
		"x": 3.147069681,
		"label": "HP1508501T2D_L14"
	},
	{
		"y": 4.376420652,
		"x": 9.669444684,
		"label": "HP1508501T2D_N7"
	},
	{
		"y": 4.564389864,
		"x": 9.479226501,
		"label": "HP1508501T2D_M15"
	},
	{
		"y": -2.413741135,
		"x": -11.51205221,
		"label": "HP1508501T2D_O24"
	},
	{
		"y": 4.291660342,
		"x": 9.484356199,
		"label": "HP1508501T2D_K22"
	},
	{
		"y": 4.404924613,
		"x": 9.533876549,
		"label": "HP1508501T2D_H17"
	},
	{
		"y": -0.778005054,
		"x": 3.147215695,
		"label": "HP1508501T2D_G10"
	},
	{
		"y": 4.41299564,
		"x": 9.613483278,
		"label": "HP1508501T2D_M22"
	},
	{
		"y": -2.307305215,
		"x": -10.80040718,
		"label": "HP1508501T2D_M24"
	},
	{
		"y": 5.157378767,
		"x": 8.530075263,
		"label": "HP1508501T2D_N13"
	},
	{
		"y": 3.273245745,
		"x": 7.215064873,
		"label": "HP1508501T2D_F14"
	},
	{
		"y": -2.25843793,
		"x": 1.118296855,
		"label": "HP1508501T2D_D6"
	},
	{
		"y": -2.508106031,
		"x": -6.737811807,
		"label": "HP1508501T2D_G9"
	},
	{
		"y": -0.468287487,
		"x": 3.127633697,
		"label": "HP1508501T2D_E12"
	},
	{
		"y": -2.663861471,
		"x": -11.58174425,
		"label": "HP1508501T2D_J10"
	},
	{
		"y": -0.730410962,
		"x": 4.848976503,
		"label": "HP1508501T2D_C7"
	},
	{
		"y": -0.552853686,
		"x": 3.062885094,
		"label": "HP1508501T2D_P3"
	},
	{
		"y": -2.16023742,
		"x": -9.571232301,
		"label": "HP1508501T2D_H20"
	},
	{
		"y": -0.541477272,
		"x": 3.106668017,
		"label": "HP1508501T2D_H4"
	},
	{
		"y": -0.578551814,
		"x": 2.949372895,
		"label": "HP1508501T2D_E18"
	},
	{
		"y": -0.616571038,
		"x": 3.35164567,
		"label": "HP1508501T2D_G11"
	},
	{
		"y": -2.371101557,
		"x": -9.02055545,
		"label": "HP1508501T2D_I6"
	},
	{
		"y": -0.300316752,
		"x": 3.293751274,
		"label": "HP1508501T2D_P11"
	},
	{
		"y": -0.684179567,
		"x": 3.578675356,
		"label": "HP1508501T2D_L16"
	},
	{
		"y": -2.36425899,
		"x": -10.45154836,
		"label": "HP1508501T2D_N3"
	},
	{
		"y": 0.029624791,
		"x": 3.252350601,
		"label": "HP1508501T2D_P9"
	},
	{
		"y": 4.513508978,
		"x": 9.530350643,
		"label": "HP1508501T2D_F8"
	},
	{
		"y": -1.25806504,
		"x": 3.813437672,
		"label": "HP1508501T2D_O14"
	},
	{
		"y": -2.538598031,
		"x": 3.818090238,
		"label": "HP1508501T2D_D1"
	},
	{
		"y": -1.933012953,
		"x": -9.786500796,
		"label": "HP1508501T2D_A22"
	},
	{
		"y": 2.958525087,
		"x": 7.101916047,
		"label": "HP1508501T2D_L10"
	},
	{
		"y": -1.909065584,
		"x": -11.5458492,
		"label": "HP1508501T2D_F13"
	},
	{
		"y": 5.061996479,
		"x": 8.57392727,
		"label": "HP1508501T2D_N24"
	},
	{
		"y": 5.298470342,
		"x": 8.08477924,
		"label": "HP1508501T2D_O7"
	},
	{
		"y": -2.366034946,
		"x": -10.05751929,
		"label": "HP1508501T2D_P17"
	},
	{
		"y": 3.285699094,
		"x": 7.334664092,
		"label": "HP1508501T2D_C9"
	},
	{
		"y": -1.4921075,
		"x": 3.592038593,
		"label": "HP1508501T2D_K21"
	},
	{
		"y": -2.228693129,
		"x": -11.16658336,
		"label": "HP1508501T2D_O15"
	},
	{
		"y": -2.001286076,
		"x": -9.431282037,
		"label": "HP1508501T2D_F22"
	},
	{
		"y": -2.579640682,
		"x": -10.19956855,
		"label": "HP1508501T2D_H1"
	},
	{
		"y": -0.825909531,
		"x": 3.23316241,
		"label": "HP1508501T2D_H6"
	},
	{
		"y": 4.41692397,
		"x": 9.649850285,
		"label": "HP1508501T2D_E15"
	},
	{
		"y": -0.778874349,
		"x": 3.739273389,
		"label": "HP1508501T2D_J9"
	},
	{
		"y": 4.505111985,
		"x": 10.27032337,
		"label": "HP1508501T2D_N19"
	},
	{
		"y": -1.11074449,
		"x": 3.147183805,
		"label": "HP1508501T2D_B11"
	},
	{
		"y": 3.169234331,
		"x": 10.24006716,
		"label": "HP1508501T2D_B19"
	},
	{
		"y": -0.267355546,
		"x": 3.362984537,
		"label": "HP1508501T2D_E10"
	},
	{
		"y": 1.269683058,
		"x": 1.53405488,
		"label": "HP1508501T2D_I18"
	},
	{
		"y": 5.352527535,
		"x": 7.765911603,
		"label": "HP1508501T2D_M11"
	},
	{
		"y": 0.294965073,
		"x": 2.844097264,
		"label": "HP1508501T2D_B21"
	},
	{
		"y": 4.381254394,
		"x": 9.727159919,
		"label": "HP1508501T2D_N17"
	},
	{
		"y": 5.178560434,
		"x": 8.581802121,
		"label": "HP1508501T2D_G12"
	},
	{
		"y": -1.634295842,
		"x": 3.784701026,
		"label": "HP1508501T2D_C13"
	},
	{
		"y": -2.307511498,
		"x": -10.83234697,
		"label": "HP1508501T2D_L3"
	},
	{
		"y": -0.811824678,
		"x": 2.828596959,
		"label": "HP1508501T2D_E22"
	},
	{
		"y": -0.355862407,
		"x": 3.950345716,
		"label": "HP1508501T2D_A24"
	},
	{
		"y": 0.362143402,
		"x": 1.90265451,
		"label": "HP1508501T2D_K16"
	},
	{
		"y": 0.524123246,
		"x": 3.53215893,
		"label": "HP1508501T2D_P5"
	},
	{
		"y": -1.885019075,
		"x": 3.993124028,
		"label": "HP1508501T2D_N20"
	},
	{
		"y": -1.284321096,
		"x": 3.511965159,
		"label": "HP1508501T2D_M4"
	},
	{
		"y": 4.28992489,
		"x": 9.526882118,
		"label": "HP1508501T2D_N2"
	},
	{
		"y": 2.962195869,
		"x": 7.258167881,
		"label": "HP1508501T2D_K18"
	},
	{
		"y": -1.363096927,
		"x": 2.866920195,
		"label": "HP1508501T2D_B8"
	},
	{
		"y": 2.996834558,
		"x": 9.983022907,
		"label": "HP1508501T2D_N22"
	},
	{
		"y": -0.220852145,
		"x": 3.191588459,
		"label": "HP1508501T2D_I16"
	},
	{
		"y": 4.308517019,
		"x": 9.590410187,
		"label": "HP1508501T2D_C24"
	},
	{
		"y": 4.401149936,
		"x": 9.458279328,
		"label": "HP1508501T2D_H13"
	},
	{
		"y": 5.193510203,
		"x": 8.421532495,
		"label": "HP1508501T2D_M7"
	},
	{
		"y": 0.132421353,
		"x": 3.513815133,
		"label": "HP1508501T2D_A16"
	},
	{
		"y": 4.137239415,
		"x": 9.712698009,
		"label": "HP1508501T2D_L21"
	},
	{
		"y": 5.23938265,
		"x": 8.29689478,
		"label": "HP1508501T2D_G19"
	},
	{
		"y": 2.904624892,
		"x": 2.363542683,
		"label": "HP1508501T2D_F1"
	},
	{
		"y": -3.900166445,
		"x": -11.29929005,
		"label": "HP1508501T2D_P15"
	},
	{
		"y": 4.300533978,
		"x": 10.12272365,
		"label": "HP1508501T2D_E7"
	},
	{
		"y": 4.34307096,
		"x": 9.589781606,
		"label": "HP1508501T2D_I11"
	},
	{
		"y": 4.388705407,
		"x": 9.588032591,
		"label": "HP1508501T2D_K7"
	},
	{
		"y": 4.268538539,
		"x": 9.566389837,
		"label": "HP1508501T2D_O9"
	},
	{
		"y": 3.143615162,
		"x": 6.706720193,
		"label": "HP1508501T2D_H12"
	},
	{
		"y": 0.146133896,
		"x": 3.448680711,
		"label": "HP1508501T2D_K4"
	},
	{
		"y": 4.370780285,
		"x": 9.320389206,
		"label": "HP1508501T2D_I17"
	},
	{
		"y": -2.303815568,
		"x": -10.64779707,
		"label": "HP1508501T2D_P18"
	},
	{
		"y": 5.192246741,
		"x": 8.424270883,
		"label": "HP1508501T2D_O13"
	},
	{
		"y": 0.53939197,
		"x": 2.08321731,
		"label": "HP1508501T2D_H18"
	},
	{
		"y": 2.981723425,
		"x": 7.134053964,
		"label": "HP1508501T2D_M16"
	},
	{
		"y": -2.050324628,
		"x": -10.20531789,
		"label": "HP1508501T2D_O18"
	},
	{
		"y": -2.829862717,
		"x": -10.74216845,
		"label": "HP1508501T2D_L4"
	},
	{
		"y": -2.326420233,
		"x": -9.447829233,
		"label": "HP1508501T2D_P21"
	},
	{
		"y": -0.693763081,
		"x": 3.141830332,
		"label": "HP1508501T2D_H3"
	},
	{
		"y": -0.84940354,
		"x": 2.859876995,
		"label": "HP1508501T2D_C10"
	},
	{
		"y": -2.379841738,
		"x": -11.00268487,
		"label": "HP1508501T2D_F10"
	},
	{
		"y": 4.364700169,
		"x": 9.877220517,
		"label": "HP1508501T2D_L11"
	},
	{
		"y": 2.993324759,
		"x": 2.284349847,
		"label": "HP1508501T2D_B20"
	},
	{
		"y": -3.153151255,
		"x": 2.723119839,
		"label": "HP1508501T2D_B4"
	},
	{
		"y": -0.114347987,
		"x": 2.853225491,
		"label": "HP1508501T2D_J17"
	},
	{
		"y": -0.391130959,
		"x": 2.908736039,
		"label": "HP1508501T2D_C23"
	},
	{
		"y": -1.102649125,
		"x": 3.813384794,
		"label": "HP1508501T2D_K17"
	},
	{
		"y": 4.452859962,
		"x": 9.639825735,
		"label": "HP1508501T2D_G14"
	},
	{
		"y": -0.630451764,
		"x": 3.205240858,
		"label": "HP1508501T2D_D3"
	},
	{
		"y": -2.982776372,
		"x": -10.94634015,
		"label": "HP1508501T2D_L22"
	},
	{
		"y": 2.062981533,
		"x": 2.897162785,
		"label": "HP1508501T2D_K20"
	},
	{
		"y": -2.006241983,
		"x": -11.65060611,
		"label": "HP1508501T2D_L1"
	},
	{
		"y": -0.904425672,
		"x": 4.612403505,
		"label": "HP1508501T2D_D16"
	},
	{
		"y": 0.181620737,
		"x": 3.295939203,
		"label": "HP1508501T2D_G24"
	},
	{
		"y": 0.369173899,
		"x": 2.543465566,
		"label": "HP1508501T2D_B10"
	},
	{
		"y": 4.332129523,
		"x": 9.571113339,
		"label": "HP1508501T2D_J13"
	},
	{
		"y": -0.508187746,
		"x": 3.117670283,
		"label": "HP1508501T2D_P8"
	},
	{
		"y": 0.946764524,
		"x": 2.091929664,
		"label": "HP1508501T2D_N18"
	},
	{
		"y": 2.009060703,
		"x": 2.741096331,
		"label": "HP1508501T2D_G5"
	},
	{
		"y": 5.172317418,
		"x": 8.52597726,
		"label": "HP1508501T2D_M18"
	},
	{
		"y": -2.063499951,
		"x": -9.522824828,
		"label": "HP1508501T2D_B2"
	},
	{
		"y": -2.780851229,
		"x": -11.33606155,
		"label": "HP1508501T2D_P22"
	},
	{
		"y": 4.769477727,
		"x": 9.872937957,
		"label": "HP1508501T2D_A7"
	},
	{
		"y": -2.614327572,
		"x": -10.0611457,
		"label": "HP1508501T2D_C22"
	},
	{
		"y": -1.845616905,
		"x": 1.703681759,
		"label": "HP1508501T2D_I22"
	},
	{
		"y": -0.097034314,
		"x": 4.925218603,
		"label": "HP1508501T2D_O10"
	},
	{
		"y": -3.008904586,
		"x": -11.89113032,
		"label": "HP1508501T2D_P23"
	},
	{
		"y": -1.262579478,
		"x": 3.55266372,
		"label": "HP1508501T2D_G20"
	},
	{
		"y": -0.978729672,
		"x": 3.815415534,
		"label": "HP1508501T2D_K12"
	},
	{
		"y": -1.507909454,
		"x": 3.983079609,
		"label": "HP1508501T2D_J20"
	},
	{
		"y": 3.222551556,
		"x": 8.262162114,
		"label": "HP1508501T2D_K5"
	},
	{
		"y": 5.197945438,
		"x": 8.547338752,
		"label": "HP1508501T2D_K6"
	},
	{
		"y": 2.490855704,
		"x": 8.735870349,
		"label": "HP1508501T2D_P12"
	},
	{
		"y": -0.676320721,
		"x": 2.746720035,
		"label": "HP1508501T2D_J4"
	},
	{
		"y": 1.45238835,
		"x": 2.751740897,
		"label": "HP1508501T2D_M14"
	},
	{
		"y": -2.375527464,
		"x": -9.985875925,
		"label": "HP1508501T2D_B1"
	},
	{
		"y": 5.169974492,
		"x": 8.43650838,
		"label": "HP1508501T2D_F21"
	},
	{
		"y": 4.031221132,
		"x": 9.982991346,
		"label": "HP1508501T2D_C19"
	},
	{
		"y": -0.851964766,
		"x": 3.050606527,
		"label": "HP1508501T2D_E8"
	},
	{
		"y": -2.520693845,
		"x": -7.024926741,
		"label": "HP1508501T2D_G8"
	},
	{
		"y": -2.342153324,
		"x": 0.237773186,
		"label": "HP1508501T2D_F19"
	},
	{
		"y": 1.045973197,
		"x": 1.818737942,
		"label": "HP1508501T2D_I23"
	},
	{
		"y": 0.113541385,
		"x": 3.607421875,
		"label": "HP1508501T2D_M8"
	},
	{
		"y": -1.341166968,
		"x": -8.667175324,
		"label": "HP1508501T2D_A5"
	},
	{
		"y": 4.314876002,
		"x": 9.546157774,
		"label": "HP1508501T2D_E17"
	},
	{
		"y": -2.185649452,
		"x": 0.977696109,
		"label": "HP1508501T2D_B22"
	},
	{
		"y": 1.614355689,
		"x": 2.380595502,
		"label": "HP1508501T2D_F7"
	},
	{
		"y": -0.509390749,
		"x": 3.149638693,
		"label": "HP1508501T2D_E19"
	},
	{
		"y": -3.051401207,
		"x": -11.78399949,
		"label": "HP1508501T2D_J7"
	},
	{
		"y": 5.246807775,
		"x": 8.233188703,
		"label": "HP1508501T2D_H16"
	},
	{
		"y": -0.93772857,
		"x": 2.773868192,
		"label": "HP1508501T2D_J12"
	},
	{
		"y": -1.742388552,
		"x": -8.8514295,
		"label": "HP1508501T2D_H9"
	},
	{
		"y": -2.164968333,
		"x": -10.06067132,
		"label": "HP1508501T2D_O22"
	},
	{
		"y": -1.618127667,
		"x": 4.522967406,
		"label": "HP1508501T2D_F9"
	},
	{
		"y": 5.227908228,
		"x": 8.279837683,
		"label": "HP1508501T2D_G17"
	},
	{
		"y": 4.256456105,
		"x": 9.649994392,
		"label": "HP1508501T2D_F15"
	},
	{
		"y": 2.789613902,
		"x": 9.408849341,
		"label": "HP1508501T2D_C21"
	},
	{
		"y": 4.212596619,
		"x": 9.689942526,
		"label": "HP1508501T2D_C15"
	},
	{
		"y": -0.217516166,
		"x": 3.148511463,
		"label": "HP1508501T2D_N4"
	},
	{
		"y": 5.133575033,
		"x": 8.574248777,
		"label": "HP1508501T2D_I10"
	},
	{
		"y": -0.981697934,
		"x": 3.814873954,
		"label": "HP1508501T2D_I14"
	},
	{
		"y": 4.154051357,
		"x": 9.640255749,
		"label": "HP1508501T2D_N15"
	},
	{
		"y": 4.641096738,
		"x": 9.856618526,
		"label": "HP1508501T2D_L23"
	},
	{
		"y": -0.902196194,
		"x": 3.320429896,
		"label": "HP1508501T2D_J3"
	},
	{
		"y": 3.573987392,
		"x": 8.45120886,
		"label": "HP1508501T2D_B24"
	},
	{
		"y": 5.235026249,
		"x": 8.492958279,
		"label": "HP1508501T2D_E4"
	},
	{
		"y": -0.921417216,
		"x": 4.019516645,
		"label": "HP1508501T2D_G21"
	},
	{
		"y": -1.645610772,
		"x": 2.271621514,
		"label": "HP1508501T2D_H23"
	},
	{
		"y": 5.036429678,
		"x": 8.554459758,
		"label": "HP1508501T2D_L2"
	},
	{
		"y": 5.086620254,
		"x": 8.607407931,
		"label": "HP1508501T2D_D9"
	},
	{
		"y": -1.675106038,
		"x": 3.991053903,
		"label": "HP1508501T2D_D21"
	},
	{
		"y": 3.004346253,
		"x": 7.129601213,
		"label": "HP1508501T2D_L15"
	},
	{
		"y": 5.162168013,
		"x": 8.412179901,
		"label": "HP1508501T2D_G18"
	},
	{
		"y": -1.754781028,
		"x": -10.1898969,
		"label": "HP1508501T2D_N16"
	},
	{
		"y": -3.395895917,
		"x": -8.647108588,
		"label": "HP1508501T2D_O5"
	},
	{
		"y": -0.228813985,
		"x": 3.114085922,
		"label": "HP1508501T2D_E23"
	},
	{
		"y": -0.532647461,
		"x": 3.262865903,
		"label": "HP1508501T2D_D14"
	},
	{
		"y": -4.300197819,
		"x": -9.103536464,
		"label": "HP1508501T2D_B6"
	},
	{
		"y": 4.365250058,
		"x": 9.30462033,
		"label": "HP1508501T2D_O8"
	},
	{
		"y": 4.299204605,
		"x": 9.665329615,
		"label": "HP1508501T2D_D24"
	},
	{
		"y": 3.035307213,
		"x": 7.108659937,
		"label": "HP1508501T2D_C12"
	},
	{
		"y": 4.177662827,
		"x": 9.126483821,
		"label": "HP1508501T2D_K15"
	},
	{
		"y": 3.62358902,
		"x": 10.30048014,
		"label": "HP1508501T2D_J22"
	},
	{
		"y": -1.104170047,
		"x": 3.076320468,
		"label": "HP1508501T2D_F18"
	},
	{
		"y": 4.317386083,
		"x": 9.527341793,
		"label": "HP1508501T2D_N23"
	},
	{
		"y": 4.325194896,
		"x": 9.589172278,
		"label": "HP1508501T2D_A17"
	},
	{
		"y": 4.36049044,
		"x": 9.557529239,
		"label": "HP1508501T2D_L24"
	},
	{
		"y": 4.412229561,
		"x": 9.549492949,
		"label": "HP1508501T2D_C11"
	},
	{
		"y": -2.049112051,
		"x": -9.778527652,
		"label": "HP1508501T2D_A9"
	},
	{
		"y": -2.010472507,
		"x": -9.771617463,
		"label": "HP1508501T2D_I9"
	},
	{
		"y": 4.280421234,
		"x": 8.271359965,
		"label": "HP1508501T2D_P2"
	},
	{
		"y": 1.209722266,
		"x": 1.650508514,
		"label": "HP1508501T2D_C8"
	},
	{
		"y": -0.853474318,
		"x": 2.91615177,
		"label": "HP1508501T2D_D13"
	},
	{
		"y": -2.897053131,
		"x": -11.17020978,
		"label": "HP1508501T2D_O20"
	},
	{
		"y": 1.033657031,
		"x": 3.539080739,
		"label": "HP1508501T2D_D12"
	},
	{
		"y": 4.436554565,
		"x": 7.80083653,
		"label": "HP1508501T2D_F5"
	},
	{
		"y": -0.424296086,
		"x": 5.045369974,
		"label": "HP1508501T2D_A4"
	},
	{
		"y": 0.017049478,
		"x": 2.914374499,
		"label": "HP1508501T2D_L17"
	},
	{
		"y": 0.284220822,
		"x": 2.830405034,
		"label": "HP1508501T2D_D15"
	},
	{
		"y": -1.451167885,
		"x": -11.30528135,
		"label": "HP1508501T2D_C5"
	},
	{
		"y": -2.370613295,
		"x": -12.2335614,
		"label": "HP1508501T2D_B7"
	},
	{
		"y": 5.179360249,
		"x": 8.436035442,
		"label": "HP1508501T2D_B14"
	},
	{
		"y": 0.564723029,
		"x": 1.908968952,
		"label": "HP1508501T2D_F11"
	},
	{
		"y": 1.160167732,
		"x": 1.723554624,
		"label": "HP1508501T2D_C16"
	},
	{
		"y": -2.317262895,
		"x": -11.57643167,
		"label": "HP1508501T2D_F24"
	},
	{
		"y": 4.281898877,
		"x": 9.6538222,
		"label": "HP1508501T2D_C18"
	},
	{
		"y": -2.04020384,
		"x": -10.37293618,
		"label": "HP1508501T2D_O17"
	},
	{
		"y": 4.357835778,
		"x": 9.754707492,
		"label": "HP1508501T2D_O12"
	},
	{
		"y": 4.353753407,
		"x": 9.567522044,
		"label": "HP1508501T2D_J14"
	},
	{
		"y": 0.136106066,
		"x": 4.874022224,
		"label": "HP1508501T2D_G6"
	},
	{
		"y": 4.320024572,
		"x": 9.695836182,
		"label": "HP1508501T2D_L5"
	},
	{
		"y": 3.587242334,
		"x": 8.438661588,
		"label": "HP1508501T2D_M23"
	},
	{
		"y": -1.65863752,
		"x": -10.6686748,
		"label": "HP1508501T2D_K10"
	},
	{
		"y": -1.101357116,
		"x": 3.519243739,
		"label": "HP1508501T2D_J5"
	},
	{
		"y": 4.392848136,
		"x": 9.582387048,
		"label": "HP1508501T2D_N10"
	},
	{
		"y": 4.331834612,
		"x": 9.599725972,
		"label": "HP1508501T2D_K23"
	},
	{
		"y": 0.791006643,
		"x": 2.911960227,
		"label": "HP1508501T2D_P1"
	},
	{
		"y": -2.26784261,
		"x": -10.67222285,
		"label": "HP1508501T2D_F6"
	},
	{
		"y": -0.86201104,
		"x": 3.45796301,
		"label": "HP1508501T2D_N11"
	},
	{
		"y": -1.653612944,
		"x": 4.027927012,
		"label": "HP1508501T2D_F23"
	},
	{
		"y": -1.32736833,
		"x": 1.618783754,
		"label": "HP1508501T2D_K24"
	},
	{
		"y": -0.728428268,
		"x": 2.782077025,
		"label": "HP1508501T2D_D11"
	},
	{
		"y": -0.841349372,
		"x": 2.924067245,
		"label": "HP1508501T2D_M12"
	},
	{
		"y": 4.471313302,
		"x": 9.436962736,
		"label": "HP1508501T2D_I4"
	},
	{
		"y": -1.461338463,
		"x": 3.75251122,
		"label": "HP1508501T2D_K19"
	},
	{
		"y": 4.25612612,
		"x": 9.603986958,
		"label": "HP1508501T2D_N6"
	},
	{
		"y": 3.000685104,
		"x": 7.138522893,
		"label": "HP1508501T2D_I19"
	},
	{
		"y": 1.988739555,
		"x": 2.278560168,
		"label": "HP1508501T2D_J6"
	},
	{
		"y": -0.90106717,
		"x": 2.988761654,
		"label": "HP1508501T2D_B12"
	},
	{
		"y": -2.678550109,
		"x": -7.53805926,
		"label": "HP1508501T2D_B13"
	},
	{
		"y": -0.786865736,
		"x": 3.287461514,
		"label": "HP1508501T2D_K14"
	},
	{
		"y": -2.79815745,
		"x": 3.790445542,
		"label": "HP1508501T2D_N5"
	},
	{
		"y": -2.430752581,
		"x": -10.2086573,
		"label": "HP1508501T2D_D4"
	},
	{
		"y": -2.745829782,
		"x": -11.47334952,
		"label": "HP1508501T2D_A21"
	},
	{
		"y": 4.591991661,
		"x": 9.871353671,
		"label": "HP1508501T2D_J16"
	},
	{
		"y": -0.807167935,
		"x": 3.302072026,
		"label": "HP1508501T2D_H10"
	},
	{
		"y": -1.62446818,
		"x": -9.881762615,
		"label": "HP1508501T2D_M13"
	},
	{
		"y": 1.237086716,
		"x": 4.378305932,
		"label": "HP1508501T2D_M5"
	},
	{
		"y": -0.019973243,
		"x": 2.99868577,
		"label": "HP1508501T2D_H21"
	},
	{
		"y": 4.957927289,
		"x": 8.736251741,
		"label": "HP1508501T2D_D18"
	},
	{
		"y": 4.213699029,
		"x": 9.209725864,
		"label": "HP1508501T2D_G13"
	},
	{
		"y": 4.911778277,
		"x": 8.723569507,
		"label": "HP1508501T2D_N21"
	},
	{
		"y": -2.038106369,
		"x": 1.593754671,
		"label": "HP1508501T2D_F2"
	},
	{
		"y": 2.977841132,
		"x": 7.105373055,
		"label": "HP1508501T2D_E20"
	},
	{
		"y": 3.028817588,
		"x": 7.233540253,
		"label": "HP1508501T2D_J2"
	},
	{
		"y": -0.5983879,
		"x": 2.998720207,
		"label": "HP1508501T2D_J8"
	},
	{
		"y": -2.24317791,
		"x": -11.71554166,
		"label": "HP1508501T2D_O19"
	},
	{
		"y": -0.130440234,
		"x": 3.653845575,
		"label": "HP1508501T2D_P6"
	},
	{
		"y": -3.108707614,
		"x": -11.28270752,
		"label": "HP1508501T2D_P19"
	},
	{
		"y": 2.000668712,
		"x": 1.963027382,
		"label": "HP1508501T2D_C4"
	},
	{
		"y": -2.963423276,
		"x": 3.486353204,
		"label": "HP1508501T2D_O6"
	},
	{
		"y": -3.081668055,
		"x": -10.98377318,
		"label": "HP1508501T2D_E5"
	},
	{
		"y": -2.986539318,
		"x": 3.246946691,
		"label": "HP1508501T2D_H15"
	},
	{
		"y": 5.177557864,
		"x": 8.435916328,
		"label": "HP1508501T2D_G23"
	},
	{
		"y": -1.079895488,
		"x": 3.239692984,
		"label": "HP1508501T2D_A14"
	},
	{
		"y": 5.201522605,
		"x": 8.400148463,
		"label": "HP1508501T2D_I7"
	},
	{
		"y": -0.642876135,
		"x": 3.107560919,
		"label": "HP1508501T2D_A12"
	},
	{
		"y": 5.017260901,
		"x": 8.675320514,
		"label": "HP1508501T2D_O11"
	},
	{
		"y": -0.726479007,
		"x": 3.800282608,
		"label": "HP1508501T2D_B3"
	},
	{
		"y": 0.496481211,
		"x": 3.889285392,
		"label": "HP1508501T2D_A15"
	},
	{
		"y": 4.282976509,
		"x": 9.595378708,
		"label": "HP1508501T2D_I12"
	},
	{
		"y": -0.617787665,
		"x": 3.190890744,
		"label": "HP1508501T2D_J1"
	},
	{
		"y": 2.992670128,
		"x": 7.105187682,
		"label": "HP1508501T2D_M10"
	},
	{
		"y": 5.246514235,
		"x": 8.216980631,
		"label": "HP1508501T2D_A11"
	},
	{
		"y": 3.955837638,
		"x": 10.77539129,
		"label": "HP1508501T2D_H14"
	},
	{
		"y": -2.382401373,
		"x": 1.140486638,
		"label": "HP1508501T2D_D19"
	},
	{
		"y": -0.668613594,
		"x": 3.9539738,
		"label": "HP1508501T2D_K9"
	},
	{
		"y": -1.202422956,
		"x": 4.372419927,
		"label": "HP1508501T2D_E21"
	},
	{
		"y": 2.621615286,
		"x": 2.626161732,
		"label": "HP1508501T2D_J24"
	},
	{
		"y": -2.619372668,
		"x": -7.490831251,
		"label": "HP1508501T2D_N12"
	},
	{
		"y": -2.782729921,
		"x": -7.83898285,
		"label": "HP1508501T2D_H7"
	},
	{
		"y": 1.152584449,
		"x": 1.942739807,
		"label": "HP1508501T2D_J18"
	},
	{
		"y": 4.448843699,
		"x": 9.579806202,
		"label": "HP1508501T2D_E11"
	},
	{
		"y": -0.046686054,
		"x": 2.88978229,
		"label": "HP1508501T2D_F20"
	},
	{
		"y": -0.374688722,
		"x": 3.239375477,
		"label": "HP1508501T2D_G4"
	},
	{
		"y": 3.094536874,
		"x": 10.27636482,
		"label": "HP1508501T2D_J19"
	},
	{
		"y": 4.39745098,
		"x": 9.619741533,
		"label": "HP1508501T2D_I13"
	},
	{
		"y": -1.041141305,
		"x": 3.35690555,
		"label": "HP1508501T2D_D8"
	},
	{
		"y": 4.285518152,
		"x": 9.655268527,
		"label": "HP1508501T2D_L9"
	},
	{
		"y": -2.189431186,
		"x": -9.725895835,
		"label": "HP1508501T2D_O23"
	},
	{
		"y": 0.535985688,
		"x": -1.591366308,
		"label": "HP1508501T2D_M6"
	},
	{
		"y": -2.273551486,
		"x": -10.10504945,
		"label": "HP1508501T2D_A18"
	},
	{
		"y": 4.512208681,
		"x": 9.41464485,
		"label": "HP1508501T2D_E9"
	},
	{
		"y": 2.007738553,
		"x": -0.394713824,
		"label": "HP1508501T2D_C17"
	},
	{
		"y": 3.021165839,
		"x": 10.21409798,
		"label": "HP1508501T2D_D22"
	},
	{
		"y": 3.805829936,
		"x": 8.966031391,
		"label": "HP1508501T2D_E16"
	},
	{
		"y": -1.034902837,
		"x": 4.123488853,
		"label": "HP1508501T2D_D10"
	},
	{
		"y": 2.139964633,
		"x": 2.118503323,
		"label": "HP1508501T2D_B16"
	},
	{
		"y": 0.794894703,
		"x": 2.018921558,
		"label": "HP1508501T2D_G22"
	},
	{
		"y": -0.162940704,
		"x": 3.086856362,
		"label": "HP1508501T2D_E13"
	},
	{
		"y": 4.559505957,
		"x": 9.603223582,
		"label": "HP1508501T2D_I21"
	},
	{
		"y": 2.72184744,
		"x": 9.770284045,
		"label": "HP1508501T2D_H19"
	},
	{
		"y": -3.121967884,
		"x": -11.52408288,
		"label": "HP1508501T2D_P20"
	},
	{
		"y": 2.966476115,
		"x": 6.819726298,
		"label": "HP1508501T2D_M21"
	},
	{
		"y": -2.550816514,
		"x": -10.6770827,
		"label": "HP1508501T2D_P16"
	},
	{
		"y": 4.358853705,
		"x": 9.693839507,
		"label": "HP1508501T2D_K3"
	},
	{
		"y": 4.442728151,
		"x": 9.497576212,
		"label": "HP1508501T2D_N8"
	},
	{
		"y": 3.94117239,
		"x": 9.669720379,
		"label": "HP1508501T2D_J15"
	},
	{
		"y": -2.135750958,
		"x": -11.25714168,
		"label": "HP1506401_E1"
	},
	{
		"y": -2.700453175,
		"x": -10.99174562,
		"label": "HP1506401_A3"
	},
	{
		"y": -1.927880691,
		"x": -10.6121309,
		"label": "HP1506401_A2"
	},
	{
		"y": 1.106284188,
		"x": 2.673971227,
		"label": "HP1506401_I2"
	},
	{
		"y": -2.305377775,
		"x": -11.11815847,
		"label": "HP1506401_O1"
	},
	{
		"y": -1.639066901,
		"x": -10.78850143,
		"label": "HP1506401_E2"
	},
	{
		"y": -1.414985319,
		"x": -10.07317422,
		"label": "HP1506401_C2"
	},
	{
		"y": -1.950806536,
		"x": -11.2686553,
		"label": "HP1506401_M2"
	},
	{
		"y": 0.447911771,
		"x": 3.214611039,
		"label": "HP1506401_G3"
	},
	{
		"y": -2.331631216,
		"x": -11.44217488,
		"label": "HP1506401_A1"
	},
	{
		"y": -2.227151471,
		"x": -11.32846522,
		"label": "HP1506401_C1"
	},
	{
		"y": 2.225590259,
		"x": 1.930813729,
		"label": "HP1506401_K1"
	},
	{
		"y": 1.223408471,
		"x": 2.696579197,
		"label": "HP1506401_I1"
	},
	{
		"y": 4.729332168,
		"x": 9.554573941,
		"label": "HP1506401_G2"
	},
	{
		"y": -2.838892432,
		"x": -10.89757897,
		"label": "HP1506401_C3"
	},
	{
		"y": 5.120329927,
		"x": 8.686383738,
		"label": "HP1506401_K2"
	},
	{
		"y": 5.20309823,
		"x": 8.472405003,
		"label": "HP1506401_M1"
	},
	{
		"y": 0.769581852,
		"x": 2.009654776,
		"label": "HP1506401_E3"
	},
	{
		"y": 0.126836159,
		"x": 3.374656646,
		"label": "HP1506401_G1"
	},
	{
		"y": 4.610973874,
		"x": 9.511343826,
		"label": "HP1506401_O2"
	},
	{
		"y": -1.510769434,
		"x": -10.80050526,
		"label": "HP1506401_M9"
	},
	{
		"y": -1.990470411,
		"x": -10.43280732,
		"label": "HP1506401_E10"
	},
	{
		"y": 5.342855972,
		"x": 8.417007676,
		"label": "HP1506401_D14"
	},
	{
		"y": 5.25924605,
		"x": 8.453769181,
		"label": "HP1506401_A9"
	},
	{
		"y": -2.02561804,
		"x": -10.94805003,
		"label": "HP1506401_K10"
	},
	{
		"y": -1.401608608,
		"x": -9.434746988,
		"label": "HP1506401_N6"
	},
	{
		"y": 1.015130334,
		"x": 2.797288783,
		"label": "HP1506401_B22"
	},
	{
		"y": 4.495308996,
		"x": 9.606420312,
		"label": "HP1506401_N10"
	},
	{
		"y": 4.670068439,
		"x": 9.58143368,
		"label": "HP1506401_D15"
	},
	{
		"y": 1.677385921,
		"x": 3.106992472,
		"label": "HP1506401_N7"
	},
	{
		"y": 5.307217198,
		"x": 10.206622,
		"label": "HP1506401_D21"
	},
	{
		"y": 5.227131646,
		"x": 8.521829471,
		"label": "HP1506401_J9"
	},
	{
		"y": 5.635524367,
		"x": 9.844126906,
		"label": "HP1506401_F7"
	},
	{
		"y": -1.98054377,
		"x": -10.33087659,
		"label": "HP1506401_E7"
	},
	{
		"y": 0.645022895,
		"x": 3.455339754,
		"label": "HP1506401_K12"
	},
	{
		"y": 5.107476069,
		"x": 8.97279538,
		"label": "HP1506401_N1"
	},
	{
		"y": -2.512720254,
		"x": -6.851788677,
		"label": "HP1506401_C18"
	},
	{
		"y": 5.330318284,
		"x": 8.128200217,
		"label": "HP1506401_G14"
	},
	{
		"y": 5.293028224,
		"x": 8.346080754,
		"label": "HP1506401_O16"
	},
	{
		"y": 5.332976199,
		"x": 8.041935884,
		"label": "HP1506401_D3"
	},
	{
		"y": 5.343023766,
		"x": 8.078491805,
		"label": "HP1506401_E23"
	},
	{
		"y": 4.713490334,
		"x": 9.417154609,
		"label": "HP1506401_G21"
	},
	{
		"y": 4.781324987,
		"x": 9.321700385,
		"label": "HP1506401_B17"
	},
	{
		"y": 5.361506919,
		"x": 8.043952485,
		"label": "HP1506401_N9"
	},
	{
		"y": 4.82289152,
		"x": 9.456017434,
		"label": "HP1506401_J5"
	},
	{
		"y": 2.179830928,
		"x": 2.114129731,
		"label": "HP1506401_C9"
	},
	{
		"y": 2.206468396,
		"x": 2.349299288,
		"label": "HP1506401_J19"
	},
	{
		"y": -1.822118563,
		"x": -10.69561313,
		"label": "HP1506401_C14"
	},
	{
		"y": -1.669414439,
		"x": -9.67380154,
		"label": "HP1506401_L12"
	},
	{
		"y": -1.686817218,
		"x": -9.743055418,
		"label": "HP1506401_C21"
	},
	{
		"y": -1.474048803,
		"x": -10.62577523,
		"label": "HP1506401_B7"
	},
	{
		"y": 5.414629497,
		"x": 8.173190195,
		"label": "HP1506401_L19"
	},
	{
		"y": 4.693661124,
		"x": 9.52929286,
		"label": "HP1506401_M16"
	},
	{
		"y": 5.260159428,
		"x": 8.338326925,
		"label": "HP1506401_H15"
	},
	{
		"y": 5.254248148,
		"x": 9.675578151,
		"label": "HP1506401_A18"
	},
	{
		"y": -2.512514525,
		"x": -11.78228948,
		"label": "HP1506401_C19"
	},
	{
		"y": -2.080047924,
		"x": -9.944491162,
		"label": "HP1506401_P8"
	},
	{
		"y": 3.79945646,
		"x": 8.42833502,
		"label": "HP1506401_C12"
	},
	{
		"y": 5.284073718,
		"x": 8.406146423,
		"label": "HP1506401_H16"
	},
	{
		"y": -3.196860385,
		"x": -7.811482009,
		"label": "HP1506401_A19"
	},
	{
		"y": 5.221162052,
		"x": 8.667311157,
		"label": "HP1506401_C24"
	},
	{
		"y": 4.613481213,
		"x": 9.488743579,
		"label": "HP1506401_E6"
	},
	{
		"y": -1.728927394,
		"x": -9.919801811,
		"label": "HP1506401_F6"
	},
	{
		"y": 5.670622688,
		"x": 8.405922323,
		"label": "HP1506401_N21"
	},
	{
		"y": -2.02359162,
		"x": -10.95053874,
		"label": "HP1506401_O19"
	},
	{
		"y": 0.809454369,
		"x": 2.613070843,
		"label": "HP1506401_I14"
	},
	{
		"y": -1.77390288,
		"x": -11.70518206,
		"label": "HP1506401_M15"
	},
	{
		"y": -1.313018125,
		"x": -9.155946353,
		"label": "HP1506401_N18"
	},
	{
		"y": 5.183749889,
		"x": 8.626740378,
		"label": "HP1506401_J2"
	},
	{
		"y": -1.792914392,
		"x": -10.22385059,
		"label": "HP1506401_N12"
	},
	{
		"y": -2.084309982,
		"x": -11.66697231,
		"label": "HP1506401_M13"
	},
	{
		"y": -2.318399613,
		"x": -11.506989,
		"label": "HP1506401_K13"
	},
	{
		"y": 0.578920217,
		"x": 3.165654729,
		"label": "HP1506401_F13"
	},
	{
		"y": -2.276581403,
		"x": -10.92539762,
		"label": "HP1506401_I5"
	},
	{
		"y": 5.217848042,
		"x": 8.391756604,
		"label": "HP1506401_B1"
	},
	{
		"y": 5.069448655,
		"x": 10.06561239,
		"label": "HP1506401_A13"
	},
	{
		"y": 4.530791332,
		"x": 9.571172962,
		"label": "HP1506401_H4"
	},
	{
		"y": 5.136382923,
		"x": 8.658960096,
		"label": "HP1506401_I15"
	},
	{
		"y": 4.684633017,
		"x": 9.500244417,
		"label": "HP1506401_O4"
	},
	{
		"y": -2.365438676,
		"x": -11.08230348,
		"label": "HP1506401_K5"
	},
	{
		"y": 5.566176772,
		"x": 7.382779818,
		"label": "HP1506401_M3"
	},
	{
		"y": 5.325211202,
		"x": 8.455471514,
		"label": "HP1506401_L7"
	},
	{
		"y": -1.31845967,
		"x": -10.01347737,
		"label": "HP1506401_O5"
	},
	{
		"y": -1.790975044,
		"x": -9.192828354,
		"label": "HP1506401_J13"
	},
	{
		"y": -1.494254325,
		"x": -1.393747228,
		"label": "HP1506401_J18"
	},
	{
		"y": -1.89269796,
		"x": -10.24157377,
		"label": "HP1506401_A8"
	},
	{
		"y": 5.195500362,
		"x": 8.591517637,
		"label": "HP1506401_D24"
	},
	{
		"y": 4.592650117,
		"x": 9.531094056,
		"label": "HP1506401_L21"
	},
	{
		"y": 5.261706879,
		"x": 8.461444049,
		"label": "HP1506401_J24"
	},
	{
		"y": 5.706686566,
		"x": 7.715520111,
		"label": "HP1506401_E22"
	},
	{
		"y": 0.929476727,
		"x": 2.668951113,
		"label": "HP1506401_G8"
	},
	{
		"y": 1.964810246,
		"x": 2.363010689,
		"label": "HP1506401_F12"
	},
	{
		"y": 5.275004824,
		"x": 8.375396399,
		"label": "HP1506401_J6"
	},
	{
		"y": 0.854427941,
		"x": 2.24212468,
		"label": "HP1506401_H12"
	},
	{
		"y": -2.75856604,
		"x": -8.114615274,
		"label": "HP1506401_O13"
	},
	{
		"y": -1.657925669,
		"x": -10.65429276,
		"label": "HP1506401_N8"
	},
	{
		"y": 5.381129759,
		"x": 7.898108749,
		"label": "HP1506401_N5"
	},
	{
		"y": 4.804518364,
		"x": 9.558409955,
		"label": "HP1506401_I24"
	},
	{
		"y": 5.512260921,
		"x": 8.392058753,
		"label": "HP1506401_E20"
	},
	{
		"y": 2.038647378,
		"x": 1.990343187,
		"label": "HP1506401_F24"
	},
	{
		"y": 1.815433264,
		"x": 2.105307936,
		"label": "HP1506401_F8"
	},
	{
		"y": -1.085705912,
		"x": -9.155888503,
		"label": "HP1506401_N2"
	},
	{
		"y": 5.1181107,
		"x": 8.709754438,
		"label": "HP1506401_F16"
	},
	{
		"y": 4.707630231,
		"x": 9.695095679,
		"label": "HP1506401_F21"
	},
	{
		"y": 5.415742509,
		"x": 8.045961064,
		"label": "HP1506401_M18"
	},
	{
		"y": 5.253727184,
		"x": 8.457143117,
		"label": "HP1506401_I13"
	},
	{
		"y": 4.68715746,
		"x": 9.589417962,
		"label": "HP1506401_J8"
	},
	{
		"y": -1.886640411,
		"x": -10.20500694,
		"label": "HP1506401_G7"
	},
	{
		"y": 4.774783324,
		"x": 9.539586036,
		"label": "HP1506401_K17"
	},
	{
		"y": 5.248947994,
		"x": 8.447191015,
		"label": "HP1506401_O24"
	},
	{
		"y": -2.239128874,
		"x": -11.49804541,
		"label": "HP1506401_C10"
	},
	{
		"y": 5.213048185,
		"x": 8.426606291,
		"label": "HP1506401_L18"
	},
	{
		"y": -2.945491781,
		"x": -11.15061007,
		"label": "HP1506401_M22"
	},
	{
		"y": 5.238876699,
		"x": 8.393827901,
		"label": "HP1506401_H18"
	},
	{
		"y": 5.090433706,
		"x": 8.730572075,
		"label": "HP1506401_F2"
	},
	{
		"y": 0.44370622,
		"x": 3.610261484,
		"label": "HP1506401_A5"
	},
	{
		"y": 2.001882219,
		"x": 2.100881597,
		"label": "HP1506401_N20"
	},
	{
		"y": -2.984966374,
		"x": -11.1641465,
		"label": "HP1506401_M20"
	},
	{
		"y": 5.209572789,
		"x": 8.538970961,
		"label": "HP1506401_M4"
	},
	{
		"y": 5.355495077,
		"x": 7.786396631,
		"label": "HP1506401_J3"
	},
	{
		"y": -1.438085071,
		"x": -11.12524799,
		"label": "HP1506401_O9"
	},
	{
		"y": -2.342872275,
		"x": -6.424439803,
		"label": "HP1506401_K18"
	},
	{
		"y": 4.859583323,
		"x": 9.540542353,
		"label": "HP1506401_N16"
	},
	{
		"y": -3.155281953,
		"x": -8.988380795,
		"label": "HP1506401_M5"
	},
	{
		"y": 5.432825983,
		"x": 7.503891179,
		"label": "HP1506401_L22"
	},
	{
		"y": -1.704907432,
		"x": -10.60623942,
		"label": "HP1506401_M23"
	},
	{
		"y": -2.349994711,
		"x": -11.60573426,
		"label": "HP1506401_A10"
	},
	{
		"y": 4.654086586,
		"x": 9.600081728,
		"label": "HP1506401_D8"
	},
	{
		"y": 4.580719193,
		"x": 9.528311461,
		"label": "HP1506401_H7"
	},
	{
		"y": 4.660630966,
		"x": 9.486035458,
		"label": "HP1506401_M21"
	},
	{
		"y": -0.001408245,
		"x": 3.225389977,
		"label": "HP1506401_E15"
	},
	{
		"y": 4.91626975,
		"x": 9.627080684,
		"label": "HP1506401_P11"
	},
	{
		"y": 4.692652175,
		"x": 9.586961041,
		"label": "HP1506401_L10"
	},
	{
		"y": -2.125565713,
		"x": -10.69345123,
		"label": "HP1506401_I7"
	},
	{
		"y": 5.188578761,
		"x": 8.62312746,
		"label": "HP1506401_N24"
	},
	{
		"y": 4.588741551,
		"x": 9.546921776,
		"label": "HP1506401_P5"
	},
	{
		"y": -1.530656244,
		"x": -10.1949814,
		"label": "HP1506401_B12"
	},
	{
		"y": -2.126330375,
		"x": -10.25808203,
		"label": "HP1506401_D6"
	},
	{
		"y": -4.294153383,
		"x": -11.02964575,
		"label": "HP1506401_O20"
	},
	{
		"y": 0.795094201,
		"x": 2.019346407,
		"label": "HP1506401_E12"
	},
	{
		"y": 0.920351694,
		"x": 2.608152892,
		"label": "HP1506401_B4"
	},
	{
		"y": -1.034135829,
		"x": -7.972184362,
		"label": "HP1506401_P24"
	},
	{
		"y": 5.209630317,
		"x": 10.25112972,
		"label": "HP1506401_D10"
	},
	{
		"y": 4.698245606,
		"x": 9.370631615,
		"label": "HP1506401_L20"
	},
	{
		"y": 1.200906723,
		"x": 2.456468119,
		"label": "HP1506401_P20"
	},
	{
		"y": 4.5174325,
		"x": 9.549615243,
		"label": "HP1506401_C17"
	},
	{
		"y": -1.659994799,
		"x": -8.743988723,
		"label": "HP1506401_F1"
	},
	{
		"y": 5.328162025,
		"x": 8.262167111,
		"label": "HP1506401_M19"
	},
	{
		"y": -0.922583395,
		"x": -9.023032297,
		"label": "HP1506401_D5"
	},
	{
		"y": 4.927350346,
		"x": 9.369169316,
		"label": "HP1506401_J7"
	},
	{
		"y": 5.196466976,
		"x": 8.397443766,
		"label": "HP1506401_J23"
	},
	{
		"y": 4.690404451,
		"x": 9.435171828,
		"label": "HP1506401_D2"
	},
	{
		"y": -1.066167747,
		"x": -8.708612008,
		"label": "HP1506401_D16"
	},
	{
		"y": 5.141474295,
		"x": 8.592097375,
		"label": "HP1506401_D23"
	},
	{
		"y": 4.513948378,
		"x": 9.590701661,
		"label": "HP1506401_G18"
	},
	{
		"y": 1.985972761,
		"x": 2.176741965,
		"label": "HP1506401_J17"
	},
	{
		"y": -1.431678423,
		"x": -9.559140727,
		"label": "HP1506401_B2"
	},
	{
		"y": 5.128381503,
		"x": 8.620335443,
		"label": "HP1506401_B5"
	},
	{
		"y": 5.17303086,
		"x": 8.703639118,
		"label": "HP1506401_K6"
	},
	{
		"y": 4.610446385,
		"x": 9.477909152,
		"label": "HP1506401_E17"
	},
	{
		"y": 0.563554047,
		"x": 3.166665936,
		"label": "HP1506401_N4"
	},
	{
		"y": 4.805547623,
		"x": 9.591745928,
		"label": "HP1506401_G19"
	},
	{
		"y": 4.935550188,
		"x": 7.365232634,
		"label": "HP1506401_O17"
	},
	{
		"y": 5.249148427,
		"x": 8.197100437,
		"label": "HP1506401_O21"
	},
	{
		"y": -3.211944059,
		"x": -11.44785493,
		"label": "HP1506401_A22"
	},
	{
		"y": 0.642032341,
		"x": 3.156775773,
		"label": "HP1506401_H14"
	},
	{
		"y": 5.162110132,
		"x": 8.601664963,
		"label": "HP1506401_L9"
	},
	{
		"y": -1.890412711,
		"x": -11.43186374,
		"label": "HP1506401_B21"
	},
	{
		"y": 0.881934583,
		"x": 2.461479459,
		"label": "HP1506401_K23"
	},
	{
		"y": -1.739739551,
		"x": -10.35396465,
		"label": "HP1506401_F15"
	},
	{
		"y": -1.744929793,
		"x": -8.595502718,
		"label": "HP1506401_H20"
	},
	{
		"y": 4.662649888,
		"x": 9.498247548,
		"label": "HP1506401_L4"
	},
	{
		"y": 5.227206225,
		"x": 8.452297947,
		"label": "HP1506401_E18"
	},
	{
		"y": -2.035677586,
		"x": -9.813774042,
		"label": "HP1506401_K24"
	},
	{
		"y": 4.766324007,
		"x": 9.399777921,
		"label": "HP1506401_L13"
	},
	{
		"y": 5.229194276,
		"x": 8.489712841,
		"label": "HP1506401_G4"
	},
	{
		"y": 0.705590147,
		"x": 2.447200396,
		"label": "HP1506401_I17"
	},
	{
		"y": 4.555819,
		"x": 9.628519424,
		"label": "HP1506401_H6"
	},
	{
		"y": 0.403357698,
		"x": 3.245907822,
		"label": "HP1506401_O23"
	},
	{
		"y": 1.144872149,
		"x": 2.882337738,
		"label": "HP1506401_H11"
	},
	{
		"y": -1.676125397,
		"x": -10.12420054,
		"label": "HP1506401_H8"
	},
	{
		"y": 4.54353534,
		"x": 9.628346016,
		"label": "HP1506401_F10"
	},
	{
		"y": -1.599381127,
		"x": -10.45692887,
		"label": "HP1506401_O15"
	},
	{
		"y": 4.676004073,
		"x": 9.518681049,
		"label": "HP1506401_I4"
	},
	{
		"y": 1.982903023,
		"x": 2.034780286,
		"label": "HP1506401_I23"
	},
	{
		"y": 2.044050682,
		"x": 1.98338798,
		"label": "HP1506401_F18"
	},
	{
		"y": 4.614402241,
		"x": 9.539606937,
		"label": "HP1506401_D17"
	},
	{
		"y": 2.513811287,
		"x": 1.775417148,
		"label": "HP1506401_O10"
	},
	{
		"y": -1.909835781,
		"x": -11.14983571,
		"label": "HP1506401_J10"
	},
	{
		"y": 4.774788003,
		"x": 9.508023912,
		"label": "HP1506401_P22"
	},
	{
		"y": 0.737101115,
		"x": 3.227037873,
		"label": "HP1506401_J4"
	},
	{
		"y": 5.265222247,
		"x": 8.351625929,
		"label": "HP1506401_D12"
	},
	{
		"y": 4.879738044,
		"x": 9.701236599,
		"label": "HP1506401_O8"
	},
	{
		"y": 2.334727993,
		"x": 2.509260598,
		"label": "HP1506401_C15"
	},
	{
		"y": 5.36066657,
		"x": 7.959683407,
		"label": "HP1506401_B14"
	},
	{
		"y": -1.292360973,
		"x": -9.074856162,
		"label": "HP1506401_D11"
	},
	{
		"y": -2.602007853,
		"x": -10.74299777,
		"label": "HP1506401_E5"
	},
	{
		"y": 5.401103361,
		"x": 8.065164283,
		"label": "HP1506401_P17"
	},
	{
		"y": 1.901261347,
		"x": 2.023010035,
		"label": "HP1506401_C4"
	},
	{
		"y": -2.881685293,
		"x": -11.20296876,
		"label": "HP1506401_I20"
	},
	{
		"y": 5.312735573,
		"x": 8.231152459,
		"label": "HP1506401_B16"
	},
	{
		"y": 4.632943139,
		"x": 9.532344853,
		"label": "HP1506401_I21"
	},
	{
		"y": 5.309927578,
		"x": 8.185164553,
		"label": "HP1506401_I6"
	},
	{
		"y": 1.156643797,
		"x": 2.818897646,
		"label": "HP1506401_F14"
	},
	{
		"y": 0.286523412,
		"x": 3.308454146,
		"label": "HP1506401_P19"
	},
	{
		"y": -2.658129793,
		"x": -7.691838221,
		"label": "HP1506401_O14"
	},
	{
		"y": -2.269442062,
		"x": -11.92131139,
		"label": "HP1506401_H21"
	},
	{
		"y": 1.179193283,
		"x": 2.916483424,
		"label": "HP1506401_K22"
	},
	{
		"y": 4.678423428,
		"x": 9.669039901,
		"label": "HP1506401_F19"
	},
	{
		"y": 0.97243426,
		"x": 3.905301371,
		"label": "HP1506401_N19"
	},
	{
		"y": -1.709735524,
		"x": -11.15952703,
		"label": "HP1506401_I9"
	},
	{
		"y": 2.050380769,
		"x": 2.371884659,
		"label": "HP1506401_G9"
	},
	{
		"y": 5.380074677,
		"x": 7.697344689,
		"label": "HP1506401_K15"
	},
	{
		"y": 0.84090206,
		"x": 2.490000031,
		"label": "HP1506401_O6"
	},
	{
		"y": 4.731972806,
		"x": 9.943444698,
		"label": "HP1506401_A20"
	},
	{
		"y": 0.179878587,
		"x": 3.166663772,
		"label": "HP1506401_A21"
	},
	{
		"y": 1.375438543,
		"x": 2.829692554,
		"label": "HP1506401_L14"
	},
	{
		"y": -2.823739466,
		"x": -11.2238251,
		"label": "HP1506401_C20"
	},
	{
		"y": -1.418439426,
		"x": -8.572758695,
		"label": "HP1506401_P18"
	},
	{
		"y": 5.502916449,
		"x": 7.431880585,
		"label": "HP1506401_H17"
	},
	{
		"y": 4.514556041,
		"x": 9.54375839,
		"label": "HP1506401_L1"
	},
	{
		"y": 5.351449787,
		"x": 8.06745878,
		"label": "HP1506401_C13"
	},
	{
		"y": 2.283664864,
		"x": 2.412602866,
		"label": "HP1506401_A15"
	},
	{
		"y": -2.480391399,
		"x": -7.046523451,
		"label": "HP1506401_P7"
	},
	{
		"y": 5.037373282,
		"x": 8.818227155,
		"label": "HP1506401_O7"
	},
	{
		"y": 4.680519006,
		"x": 9.954942483,
		"label": "HP1506401_G20"
	},
	{
		"y": -2.262141765,
		"x": -11.57891067,
		"label": "HP1506401_C11"
	},
	{
		"y": 4.51746231,
		"x": 8.982716053,
		"label": "HP1506401_A4"
	},
	{
		"y": 1.07687272,
		"x": 2.514274702,
		"label": "HP1506401_D9"
	},
	{
		"y": 4.868628055,
		"x": 9.365451854,
		"label": "HP1506401_P1"
	},
	{
		"y": 0.455949632,
		"x": 3.512968961,
		"label": "HP1506401_O3"
	},
	{
		"y": 1.092391504,
		"x": 2.866382379,
		"label": "HP1506401_L17"
	},
	{
		"y": -1.272099468,
		"x": -10.40944203,
		"label": "HP1506401_A16"
	},
	{
		"y": -0.074015492,
		"x": 3.056022356,
		"label": "HP1506401_H13"
	},
	{
		"y": 5.338649962,
		"x": 8.130108482,
		"label": "HP1506401_K14"
	},
	{
		"y": -1.655557149,
		"x": -9.71864686,
		"label": "HP1506401_K8"
	},
	{
		"y": -1.229990033,
		"x": -10.45297533,
		"label": "HP1506401_L15"
	},
	{
		"y": 2.101510432,
		"x": 1.903031456,
		"label": "HP1506401_O11"
	},
	{
		"y": 4.516694731,
		"x": 9.561938944,
		"label": "HP1506401_J20"
	},
	{
		"y": -1.670652711,
		"x": -9.329522296,
		"label": "HP1506401_A23"
	},
	{
		"y": 2.172496077,
		"x": 1.756263993,
		"label": "HP1506401_I11"
	},
	{
		"y": 5.481525343,
		"x": 8.389620545,
		"label": "HP1506401_M17"
	},
	{
		"y": -0.568668502,
		"x": 2.96558729,
		"label": "HP1506401_C5"
	},
	{
		"y": 2.241724792,
		"x": 2.513419449,
		"label": "HP1506401_L5"
	},
	{
		"y": -1.638762239,
		"x": -8.851812714,
		"label": "HP1506401_G17"
	},
	{
		"y": 5.691396855,
		"x": 8.047847744,
		"label": "HP1506401_P15"
	},
	{
		"y": 2.026134761,
		"x": 2.003091571,
		"label": "HP1506401_P12"
	},
	{
		"y": 5.108860626,
		"x": 8.612731124,
		"label": "HP1506401_J14"
	},
	{
		"y": 5.400694876,
		"x": 8.320774073,
		"label": "HP1506401_N15"
	},
	{
		"y": 1.731914206,
		"x": 2.528135513,
		"label": "HP1506401_E16"
	},
	{
		"y": 4.657488314,
		"x": 9.570629945,
		"label": "HP1506401_P21"
	},
	{
		"y": 2.021882211,
		"x": 1.886702761,
		"label": "HP1506401_F11"
	},
	{
		"y": 5.351341255,
		"x": 8.010220763,
		"label": "HP1506401_O18"
	},
	{
		"y": 4.435222378,
		"x": 9.549318498,
		"label": "HP1506401_H2"
	},
	{
		"y": 4.560218738,
		"x": 9.608451277,
		"label": "HP1506401_K19"
	},
	{
		"y": -1.700622894,
		"x": -9.259262124,
		"label": "HP1506401_D4"
	},
	{
		"y": -1.439601438,
		"x": -11.11334886,
		"label": "HP1506401_B10"
	},
	{
		"y": 5.237837927,
		"x": 8.484377246,
		"label": "HP1506401_G15"
	},
	{
		"y": 0.773326979,
		"x": 2.850746833,
		"label": "HP1506401_F22"
	},
	{
		"y": 5.129184801,
		"x": 8.630252532,
		"label": "HP1506401_F5"
	},
	{
		"y": -2.370268441,
		"x": -6.816803683,
		"label": "HP1506401_H5"
	},
	{
		"y": -1.73355399,
		"x": -10.17795122,
		"label": "HP1506401_P6"
	},
	{
		"y": 4.693423096,
		"x": 9.506748847,
		"label": "HP1506401_C16"
	},
	{
		"y": 4.809492599,
		"x": 9.656307886,
		"label": "HP1506401_K4"
	},
	{
		"y": -1.432217344,
		"x": -10.06625603,
		"label": "HP1506401_L6"
	},
	{
		"y": 5.253345678,
		"x": 8.365569034,
		"label": "HP1506401_L3"
	},
	{
		"y": -2.101748047,
		"x": -10.76240936,
		"label": "HP1506401_H10"
	},
	{
		"y": 2.116042089,
		"x": 2.827445583,
		"label": "HP1506401_N11"
	},
	{
		"y": 4.578512773,
		"x": 9.499184357,
		"label": "HP1506401_F23"
	},
	{
		"y": -1.700459981,
		"x": -7.467259156,
		"label": "HP1506401_B9"
	},
	{
		"y": -3.047319743,
		"x": -11.05205335,
		"label": "HP1506401_K20"
	},
	{
		"y": 0.796645027,
		"x": 3.429404584,
		"label": "HP1506401_P3"
	},
	{
		"y": 0.432927397,
		"x": 3.153806483,
		"label": "HP1506401_I8"
	},
	{
		"y": -1.402763988,
		"x": -10.3931152,
		"label": "HP1506401_C6"
	},
	{
		"y": 5.509657757,
		"x": 7.217764,
		"label": "HP1506401_L24"
	},
	{
		"y": 2.151985343,
		"x": 1.91444697,
		"label": "HP1506401_A24"
	},
	{
		"y": 5.305081947,
		"x": 8.208608317,
		"label": "HP1506401_A7"
	},
	{
		"y": -0.193324951,
		"x": 3.11842816,
		"label": "HP1506401_G5"
	},
	{
		"y": 1.900862177,
		"x": 1.956042553,
		"label": "HP1506401_K21"
	},
	{
		"y": 1.350360705,
		"x": 1.783711164,
		"label": "HP1506401_G11"
	},
	{
		"y": 4.750320289,
		"x": 9.445210671,
		"label": "HP1506401_P9"
	},
	{
		"y": 3.131618807,
		"x": 7.14900804,
		"label": "HP1506401_B15"
	},
	{
		"y": 4.622501959,
		"x": 9.599267625,
		"label": "HP1506401_K16"
	},
	{
		"y": 5.172717506,
		"x": 8.488773575,
		"label": "HP1506401_M8"
	},
	{
		"y": 5.448512457,
		"x": 7.181738776,
		"label": "HP1506401_H24"
	},
	{
		"y": 5.322567488,
		"x": 8.101867331,
		"label": "HP1506401_A6"
	},
	{
		"y": -1.639495386,
		"x": -0.978466121,
		"label": "HP1506401_N13"
	},
	{
		"y": 4.758180254,
		"x": 9.503995161,
		"label": "HP1506401_H23"
	},
	{
		"y": 5.410522386,
		"x": 7.911887587,
		"label": "HP1506401_I18"
	},
	{
		"y": -1.245386456,
		"x": -8.354794661,
		"label": "HP1506401_I16"
	},
	{
		"y": -2.780457612,
		"x": -11.42969419,
		"label": "HP1506401_O22"
	},
	{
		"y": 4.9897057,
		"x": 10.33660853,
		"label": "HP1506401_I3"
	},
	{
		"y": -3.073090089,
		"x": -11.19249482,
		"label": "HP1506401_C22"
	},
	{
		"y": -1.194183856,
		"x": -9.680131583,
		"label": "HP1506401_N3"
	},
	{
		"y": -1.292829004,
		"x": -10.06205006,
		"label": "HP1506401_G10"
	},
	{
		"y": 4.751804021,
		"x": 9.443743364,
		"label": "HP1506401_B24"
	},
	{
		"y": 5.235007846,
		"x": 8.567219456,
		"label": "HP1506401_F3"
	},
	{
		"y": -2.283498662,
		"x": -12.18910923,
		"label": "HP1506401_A11"
	},
	{
		"y": -1.848052502,
		"x": -11.42206022,
		"label": "HP1506401_K9"
	},
	{
		"y": 2.048478489,
		"x": 2.030601801,
		"label": "HP1506401_D13"
	},
	{
		"y": -2.382139862,
		"x": -11.43336141,
		"label": "HP1506401_B19"
	},
	{
		"y": 5.30432467,
		"x": 8.038412091,
		"label": "HP1506401_E24"
	},
	{
		"y": 2.015939201,
		"x": 2.15662688,
		"label": "HP1506401_C8"
	},
	{
		"y": -0.931881627,
		"x": -8.594861125,
		"label": "HP1506401_J1"
	},
	{
		"y": 5.248106945,
		"x": 8.432184919,
		"label": "HP1506401_E8"
	},
	{
		"y": 4.705719527,
		"x": 9.538410908,
		"label": "HP1506401_G23"
	},
	{
		"y": 4.996211358,
		"x": 9.200853937,
		"label": "HP1506401_N17"
	},
	{
		"y": 2.05695807,
		"x": 2.113448899,
		"label": "HP1506401_F9"
	},
	{
		"y": -0.48038511,
		"x": 0.36663965,
		"label": "HP1506401_D19"
	},
	{
		"y": 0.658782413,
		"x": 3.321244764,
		"label": "HP1506401_L23"
	},
	{
		"y": 0.809710091,
		"x": 2.613086435,
		"label": "HP1506401_M6"
	},
	{
		"y": 1.388159808,
		"x": 3.446231745,
		"label": "HP1506401_E9"
	},
	{
		"y": -2.548542642,
		"x": -7.277325449,
		"label": "HP1506401_E4"
	},
	{
		"y": 0.342748629,
		"x": 3.137200025,
		"label": "HP1506401_F17"
	},
	{
		"y": 5.108038941,
		"x": 8.731299751,
		"label": "HP1506401_J15"
	},
	{
		"y": 5.278245314,
		"x": 8.321699876,
		"label": "HP1506401_I10"
	},
	{
		"y": -1.27722483,
		"x": -8.350533641,
		"label": "HP1506401_D18"
	},
	{
		"y": 5.294855519,
		"x": 8.328353313,
		"label": "HP1506401_G16"
	},
	{
		"y": 2.794032281,
		"x": 9.720161067,
		"label": "HP1506401_I22"
	},
	{
		"y": -2.567883219,
		"x": -9.192235444,
		"label": "HP1506401_I19"
	},
	{
		"y": -0.387947334,
		"x": 2.969492321,
		"label": "HP1506401_M12"
	},
	{
		"y": -1.387619925,
		"x": -9.721997498,
		"label": "HP1506401_L16"
	},
	{
		"y": -1.426975852,
		"x": -9.76735398,
		"label": "HP1506401_B13"
	},
	{
		"y": 5.322768896,
		"x": 8.156466272,
		"label": "HP1506401_P23"
	},
	{
		"y": 1.819416652,
		"x": 2.159153507,
		"label": "HP1506401_P14"
	},
	{
		"y": 1.850048561,
		"x": 8.04900533,
		"label": "HP1506401_P2"
	},
	{
		"y": -2.123775433,
		"x": -10.63505717,
		"label": "HP1506401_K7"
	},
	{
		"y": -1.244324256,
		"x": -8.261573035,
		"label": "HP1506401_N14"
	},
	{
		"y": 4.489494933,
		"x": 9.693798651,
		"label": "HP1506401_M11"
	},
	{
		"y": -1.596739909,
		"x": -10.39369222,
		"label": "HP1506401_L8"
	},
	{
		"y": 0.776441665,
		"x": 3.775955276,
		"label": "HP1506401_E11"
	},
	{
		"y": 1.436687521,
		"x": 2.887649337,
		"label": "HP1506401_L2"
	},
	{
		"y": 5.139174704,
		"x": 8.64245763,
		"label": "HP1506401_B6"
	},
	{
		"y": 5.347119255,
		"x": 8.270274876,
		"label": "HP1506401_N22"
	},
	{
		"y": -2.829175835,
		"x": -8.043978115,
		"label": "HP1506401_M14"
	},
	{
		"y": 1.218164327,
		"x": 3.297927852,
		"label": "HP1506401_J16"
	},
	{
		"y": 1.004223376,
		"x": 2.59825625,
		"label": "HP1506401_B3"
	},
	{
		"y": 5.556695198,
		"x": 7.466440678,
		"label": "HP1506401_M7"
	},
	{
		"y": 5.165867811,
		"x": 8.508358004,
		"label": "HP1506401_C7"
	},
	{
		"y": 5.084942937,
		"x": 9.564281205,
		"label": "HP1506401_A12"
	},
	{
		"y": -2.854436443,
		"x": -8.431434726,
		"label": "HP1506401_E21"
	},
	{
		"y": -2.675905543,
		"x": -11.08961653,
		"label": "HP1506401_K11"
	},
	{
		"y": 4.847607469,
		"x": 9.147448614,
		"label": "HP1506401_J22"
	},
	{
		"y": 5.363475505,
		"x": 7.824607484,
		"label": "HP1506401_C23"
	},
	{
		"y": 2.002921229,
		"x": 2.323303513,
		"label": "HP1506401_G6"
	},
	{
		"y": 0.209004611,
		"x": 3.388496547,
		"label": "HP1506401_G13"
	},
	{
		"y": 0.343818691,
		"x": 1.275258817,
		"label": "HP1506401_M24"
	},
	{
		"y": -3.02785969,
		"x": -11.11763884,
		"label": "HP1506401_G22"
	},
	{
		"y": 5.223281679,
		"x": 10.30208944,
		"label": "HP1506401_E19"
	},
	{
		"y": 5.226475709,
		"x": 8.480470142,
		"label": "HP1506401_H1"
	},
	{
		"y": 0.314372515,
		"x": 3.103480239,
		"label": "HP1506401_G24"
	},
	{
		"y": 4.636422864,
		"x": 9.321374066,
		"label": "HP1506401_H9"
	},
	{
		"y": -1.434451639,
		"x": -9.482935486,
		"label": "HP1506401_P16"
	},
	{
		"y": 5.245943498,
		"x": 8.534613502,
		"label": "HP1506401_N23"
	},
	{
		"y": 0.399055054,
		"x": 3.274036366,
		"label": "HP1506401_H22"
	},
	{
		"y": 5.262795813,
		"x": 8.249804467,
		"label": "HP1506401_H3"
	},
	{
		"y": -1.492846779,
		"x": -8.809180962,
		"label": "HP1506401_D22"
	},
	{
		"y": 2.147380898,
		"x": 1.885354232,
		"label": "HP1506401_A17"
	},
	{
		"y": 5.320329266,
		"x": 8.326639731,
		"label": "HP1506401_L11"
	},
	{
		"y": -0.713974902,
		"x": -8.479983865,
		"label": "HP1506401_M10"
	},
	{
		"y": 0.15621547,
		"x": 3.148649503,
		"label": "HP1506401_F20"
	},
	{
		"y": 5.287773363,
		"x": 8.342628531,
		"label": "HP1506401_E14"
	},
	{
		"y": 5.464585504,
		"x": 7.157953631,
		"label": "HP1506401_J12"
	},
	{
		"y": -1.185889874,
		"x": -10.42927592,
		"label": "HP1506401_E13"
	},
	{
		"y": 4.560049775,
		"x": 9.642408404,
		"label": "HP1506401_J21"
	},
	{
		"y": 4.595373195,
		"x": 9.559891858,
		"label": "HP1506401_P4"
	},
	{
		"y": 5.361377406,
		"x": 8.139397592,
		"label": "HP1506401_O12"
	},
	{
		"y": 0.869001178,
		"x": 2.783490758,
		"label": "HP1506401_B8"
	},
	{
		"y": 5.229880155,
		"x": 9.541603748,
		"label": "HP1506401_B18"
	},
	{
		"y": -2.379611555,
		"x": -6.55035364,
		"label": "HP1506401_A14"
	},
	{
		"y": 5.235215837,
		"x": 8.410979904,
		"label": "HP1506401_J11"
	},
	{
		"y": 4.983486959,
		"x": 9.352447757,
		"label": "HP1506401_B23"
	},
	{
		"y": -1.307805185,
		"x": -7.893876976,
		"label": "HP1506401_F4"
	},
	{
		"y": 2.163418546,
		"x": 1.978836167,
		"label": "HP1506401_I12"
	},
	{
		"y": 1.976714889,
		"x": 2.071043364,
		"label": "HP1506401_G12"
	},
	{
		"y": 4.717473122,
		"x": 9.402519517,
		"label": "HP1506401_D1"
	},
	{
		"y": 3.861962656,
		"x": 7.284415704,
		"label": "HP1506401_B20"
	},
	{
		"y": 5.301754832,
		"x": 8.311223345,
		"label": "HP1506401_P10"
	},
	{
		"y": 2.232692209,
		"x": 1.916644201,
		"label": "HP1506401_B11"
	},
	{
		"y": 1.390657271,
		"x": 3.243796302,
		"label": "HP1506401_H19"
	},
	{
		"y": -2.497134986,
		"x": -11.25418503,
		"label": "HP1506401_K3"
	},
	{
		"y": -1.122115542,
		"x": -7.952257272,
		"label": "HP1506401_D20"
	},
	{
		"y": 4.705486485,
		"x": 9.433076433,
		"label": "HP1506401_D7"
	},
	{
		"y": -3.382588258,
		"x": -7.588085003,
		"label": "HP1507101_I1"
	},
	{
		"y": -3.325937005,
		"x": -11.01843629,
		"label": "HP1507101_C3"
	},
	{
		"y": -3.49734689,
		"x": -11.1864348,
		"label": "HP1507101_A2"
	},
	{
		"y": -3.7965582,
		"x": -8.745407077,
		"label": "HP1507101_C1"
	},
	{
		"y": -1.619637692,
		"x": 4.796145579,
		"label": "HP1507101_K1"
	},
	{
		"y": -3.270085405,
		"x": -11.5360888,
		"label": "HP1507101_M1"
	},
	{
		"y": -3.18462238,
		"x": -11.69098212,
		"label": "HP1507101_A1"
	},
	{
		"y": -4.468066588,
		"x": -10.22422716,
		"label": "HP1507101_K2"
	},
	{
		"y": -3.574056399,
		"x": -8.108071766,
		"label": "HP1507101_O2"
	},
	{
		"y": -0.559201549,
		"x": 3.306005226,
		"label": "HP1507101_E2"
	},
	{
		"y": -0.672844726,
		"x": 4.243516257,
		"label": "HP1507101_E3"
	},
	{
		"y": -3.190630298,
		"x": -11.43792717,
		"label": "HP1507101_E1"
	},
	{
		"y": -0.558242969,
		"x": 3.792358411,
		"label": "HP1507101_G3"
	},
	{
		"y": 2.973406764,
		"x": 7.054514203,
		"label": "HP1507101_G2"
	},
	{
		"y": -3.623693721,
		"x": -8.919657258,
		"label": "HP1507101_A3"
	},
	{
		"y": -0.303693212,
		"x": 3.159874824,
		"label": "HP1507101_C2"
	},
	{
		"y": -0.369489465,
		"x": 3.606780758,
		"label": "HP1507101_O1"
	},
	{
		"y": -4.592683739,
		"x": -11.67302546,
		"label": "HP1507101_G1"
	},
	{
		"y": -0.366205687,
		"x": 3.253877669,
		"label": "HP1507101_I2"
	},
	{
		"y": -0.35063854,
		"x": 3.193815594,
		"label": "HP1507101_M2"
	},
	{
		"y": 3.376584994,
		"x": 1.595836302,
		"label": "HP1507101_C9"
	},
	{
		"y": -2.979063942,
		"x": -8.728504385,
		"label": "HP1507101_H19"
	},
	{
		"y": -0.719994948,
		"x": 3.308287408,
		"label": "HP1507101_G16"
	},
	{
		"y": -0.369552123,
		"x": 3.160246928,
		"label": "HP1507101_N9"
	},
	{
		"y": -3.72728207,
		"x": -11.35978857,
		"label": "HP1507101_G5"
	},
	{
		"y": -3.307255085,
		"x": -7.11959676,
		"label": "HP1507101_E11"
	},
	{
		"y": -0.222848265,
		"x": 3.102999224,
		"label": "HP1507101_F7"
	},
	{
		"y": -0.590876562,
		"x": 3.131779377,
		"label": "HP1507101_B3"
	},
	{
		"y": -0.427915609,
		"x": 4.035889616,
		"label": "HP1507101_M12"
	},
	{
		"y": -0.532999987,
		"x": 3.287013813,
		"label": "HP1507101_D14"
	},
	{
		"y": -0.0620942,
		"x": 3.094727376,
		"label": "HP1507101_D20"
	},
	{
		"y": -3.13081984,
		"x": -11.17930999,
		"label": "HP1507101_M19"
	},
	{
		"y": -0.023650013,
		"x": 3.345134747,
		"label": "HP1507101_O22"
	},
	{
		"y": 1.444310809,
		"x": 1.629773993,
		"label": "HP1507101_O23"
	},
	{
		"y": 4.435661066,
		"x": 9.74314205,
		"label": "HP1507101_J15"
	},
	{
		"y": 2.375475761,
		"x": 1.831332043,
		"label": "HP1507101_L22"
	},
	{
		"y": -0.620823516,
		"x": 4.905055371,
		"label": "HP1507101_L15"
	},
	{
		"y": -3.010689777,
		"x": -11.54046853,
		"label": "HP1507101_P7"
	},
	{
		"y": 2.347995899,
		"x": 1.77931863,
		"label": "HP1507101_D6"
	},
	{
		"y": -0.279039069,
		"x": 3.283866691,
		"label": "HP1507101_O16"
	},
	{
		"y": -1.212570717,
		"x": 4.615690712,
		"label": "HP1507101_N3"
	},
	{
		"y": -0.53810447,
		"x": 3.923631804,
		"label": "HP1507101_L11"
	},
	{
		"y": -2.939457908,
		"x": -11.03356033,
		"label": "HP1507101_N7"
	},
	{
		"y": -3.760437558,
		"x": -11.21943029,
		"label": "HP1507101_I9"
	},
	{
		"y": -0.093787062,
		"x": 2.948446248,
		"label": "HP1507101_N12"
	},
	{
		"y": 0.333694946,
		"x": 3.096334331,
		"label": "HP1507101_P14"
	},
	{
		"y": 2.20652528,
		"x": 1.677434575,
		"label": "HP1507101_P2"
	},
	{
		"y": -0.097490157,
		"x": 2.949144237,
		"label": "HP1507101_O17"
	},
	{
		"y": 4.521783335,
		"x": 9.760124852,
		"label": "HP1507101_K16"
	},
	{
		"y": 0.450271349,
		"x": 0.860433271,
		"label": "HP1507101_J9"
	},
	{
		"y": -3.495660764,
		"x": -11.61248181,
		"label": "HP1507101_M17"
	},
	{
		"y": 0.258781417,
		"x": 3.96186895,
		"label": "HP1507101_A16"
	},
	{
		"y": 2.541115024,
		"x": 1.693421666,
		"label": "HP1507101_L24"
	},
	{
		"y": 3.031937871,
		"x": 6.58459309,
		"label": "HP1507101_M16"
	},
	{
		"y": -0.265747952,
		"x": 3.674568349,
		"label": "HP1507101_L13"
	},
	{
		"y": -2.94876539,
		"x": -11.23792196,
		"label": "HP1507101_G7"
	},
	{
		"y": 3.00765347,
		"x": 7.094763318,
		"label": "HP1507101_M10"
	},
	{
		"y": 2.975300412,
		"x": 2.352307042,
		"label": "HP1507101_K12"
	},
	{
		"y": -0.380585212,
		"x": 3.588523656,
		"label": "HP1507101_O20"
	},
	{
		"y": -1.068166832,
		"x": 4.876683825,
		"label": "HP1507101_E13"
	},
	{
		"y": 0.128281488,
		"x": 2.886194602,
		"label": "HP1507101_N21"
	},
	{
		"y": -0.216151855,
		"x": 3.532074116,
		"label": "HP1507101_I10"
	},
	{
		"y": -0.347731,
		"x": 3.497684652,
		"label": "HP1507101_H20"
	},
	{
		"y": -0.70017203,
		"x": 3.909659532,
		"label": "HP1507101_A14"
	},
	{
		"y": -0.37690541,
		"x": 3.222774127,
		"label": "HP1507101_I17"
	},
	{
		"y": -0.356674905,
		"x": 3.642047377,
		"label": "HP1507101_K6"
	},
	{
		"y": -3.419623958,
		"x": -10.73678133,
		"label": "HP1507101_F6"
	},
	{
		"y": 0.845268476,
		"x": 2.420713888,
		"label": "HP1507101_J8"
	},
	{
		"y": 3.012079661,
		"x": 7.080688514,
		"label": "HP1507101_J12"
	},
	{
		"y": -0.371572212,
		"x": 3.650423517,
		"label": "HP1507101_F19"
	},
	{
		"y": -3.698668343,
		"x": -11.12253824,
		"label": "HP1507101_F24"
	},
	{
		"y": 5.589596146,
		"x": 7.545815472,
		"label": "HP1507101_A17"
	},
	{
		"y": -0.041843655,
		"x": 3.47361102,
		"label": "HP1507101_G6"
	},
	{
		"y": -0.259141226,
		"x": 3.278169898,
		"label": "HP1507101_L7"
	},
	{
		"y": 2.179907481,
		"x": 1.665376728,
		"label": "HP1507101_F14"
	},
	{
		"y": -0.435669002,
		"x": 3.667119314,
		"label": "HP1507101_H7"
	},
	{
		"y": -2.680538363,
		"x": 0.684756374,
		"label": "HP1507101_M24"
	},
	{
		"y": -0.18766302,
		"x": 3.451487521,
		"label": "HP1507101_O4"
	},
	{
		"y": -0.493468071,
		"x": 2.719063364,
		"label": "HP1507101_H1"
	},
	{
		"y": -1.616404179,
		"x": 4.807565598,
		"label": "HP1507101_I15"
	},
	{
		"y": -0.134197791,
		"x": 3.403577517,
		"label": "HP1507101_O5"
	},
	{
		"y": -0.365568462,
		"x": 3.462907785,
		"label": "HP1507101_F22"
	},
	{
		"y": 0.246745303,
		"x": 3.799958005,
		"label": "HP1507101_A22"
	},
	{
		"y": -3.881399359,
		"x": -9.342283117,
		"label": "HP1507101_B17"
	},
	{
		"y": -0.03289903,
		"x": 3.859073144,
		"label": "HP1507101_L5"
	},
	{
		"y": -0.038556085,
		"x": 3.510081573,
		"label": "HP1507101_A20"
	},
	{
		"y": -0.505317413,
		"x": 3.242657143,
		"label": "HP1507101_F16"
	},
	{
		"y": -0.133209458,
		"x": 3.389892813,
		"label": "HP1507101_P10"
	},
	{
		"y": -3.061382218,
		"x": 1.64128124,
		"label": "HP1507101_O6"
	},
	{
		"y": -0.615526343,
		"x": 4.082162525,
		"label": "HP1507101_G4"
	},
	{
		"y": -0.329982437,
		"x": 3.126525484,
		"label": "HP1507101_B23"
	},
	{
		"y": -0.401588386,
		"x": 3.030361769,
		"label": "HP1507101_H11"
	},
	{
		"y": -4.386490215,
		"x": -10.64997019,
		"label": "HP1507101_C16"
	},
	{
		"y": -0.58312914,
		"x": 3.28765849,
		"label": "HP1507101_G12"
	},
	{
		"y": -1.591210895,
		"x": -11.67547108,
		"label": "HP1507101_B22"
	},
	{
		"y": -2.942859899,
		"x": 3.832922731,
		"label": "HP1507101_K19"
	},
	{
		"y": -2.372859788,
		"x": 4.372418605,
		"label": "HP1507101_G17"
	},
	{
		"y": 2.412153756,
		"x": 1.832472684,
		"label": "HP1507101_N5"
	},
	{
		"y": -3.562400858,
		"x": -8.439069446,
		"label": "HP1507101_F17"
	},
	{
		"y": -3.265467364,
		"x": -11.2561294,
		"label": "HP1507101_P9"
	},
	{
		"y": -0.368408931,
		"x": 3.127243284,
		"label": "HP1507101_G14"
	},
	{
		"y": 2.010016987,
		"x": 1.951327548,
		"label": "HP1507101_K23"
	},
	{
		"y": -0.982759796,
		"x": 4.69516084,
		"label": "HP1507101_N22"
	},
	{
		"y": 2.768190122,
		"x": 0.79102118,
		"label": "HP1507101_H24"
	},
	{
		"y": -0.512853174,
		"x": 3.253668758,
		"label": "HP1507101_I8"
	},
	{
		"y": -0.447337719,
		"x": 3.356037372,
		"label": "HP1507101_L2"
	},
	{
		"y": -0.455181797,
		"x": 3.212791307,
		"label": "HP1507101_H15"
	},
	{
		"y": 2.572971379,
		"x": 1.685708613,
		"label": "HP1507101_F11"
	},
	{
		"y": -3.235174192,
		"x": -11.13458329,
		"label": "HP1507101_N11"
	},
	{
		"y": -0.574660352,
		"x": 3.487644801,
		"label": "HP1507101_D2"
	},
	{
		"y": 2.135612679,
		"x": 1.763327798,
		"label": "HP1507101_H4"
	},
	{
		"y": -0.232848939,
		"x": 3.323833692,
		"label": "HP1507101_P12"
	},
	{
		"y": -0.462563937,
		"x": 3.350571562,
		"label": "HP1507101_F20"
	},
	{
		"y": -1.575656988,
		"x": 4.765813853,
		"label": "HP1507101_N24"
	},
	{
		"y": -3.269077344,
		"x": -11.35163027,
		"label": "HP1507101_A21"
	},
	{
		"y": -1.521067114,
		"x": -1.120985237,
		"label": "HP1507101_N15"
	},
	{
		"y": 2.881403921,
		"x": -0.72899565,
		"label": "HP1507101_A11"
	},
	{
		"y": -0.236613686,
		"x": 3.71622489,
		"label": "HP1507101_E24"
	},
	{
		"y": -0.480636763,
		"x": 3.364760244,
		"label": "HP1507101_I16"
	},
	{
		"y": -0.002935285,
		"x": 3.845823624,
		"label": "HP1507101_C24"
	},
	{
		"y": -4.803205243,
		"x": -10.10293038,
		"label": "HP1507101_P19"
	},
	{
		"y": 0.240302165,
		"x": 3.242731097,
		"label": "HP1507101_B18"
	},
	{
		"y": -0.214910149,
		"x": 3.171326904,
		"label": "HP1507101_H14"
	},
	{
		"y": 2.076313898,
		"x": 1.843518329,
		"label": "HP1507101_D22"
	},
	{
		"y": -0.154596225,
		"x": 3.389371059,
		"label": "HP1507101_H9"
	},
	{
		"y": 2.647322494,
		"x": 1.719392557,
		"label": "HP1507101_C7"
	},
	{
		"y": -0.327238648,
		"x": 3.777326681,
		"label": "HP1507101_O10"
	},
	{
		"y": 2.981149606,
		"x": 6.793299935,
		"label": "HP1507101_K10"
	},
	{
		"y": -0.547252085,
		"x": 3.369477462,
		"label": "HP1507101_J24"
	},
	{
		"y": -3.173009358,
		"x": -10.85967346,
		"label": "HP1507101_E4"
	},
	{
		"y": -4.339776728,
		"x": -11.48126337,
		"label": "HP1507101_N14"
	},
	{
		"y": -0.577776251,
		"x": 3.257223826,
		"label": "HP1507101_G18"
	},
	{
		"y": 5.234670865,
		"x": 8.36677694,
		"label": "HP1507101_E22"
	},
	{
		"y": -0.490050396,
		"x": 4.14819343,
		"label": "HP1507101_J14"
	},
	{
		"y": 4.467424727,
		"x": 9.792277858,
		"label": "HP1507101_G10"
	},
	{
		"y": -2.798982827,
		"x": -10.3598989,
		"label": "HP1507101_H13"
	},
	{
		"y": -0.385611346,
		"x": 3.408221791,
		"label": "HP1507101_E20"
	},
	{
		"y": -0.35236018,
		"x": 3.206995584,
		"label": "HP1507101_I13"
	},
	{
		"y": -0.530285985,
		"x": 3.207841855,
		"label": "HP1507101_J11"
	},
	{
		"y": 3.100739502,
		"x": 7.02901166,
		"label": "HP1507101_L8"
	},
	{
		"y": 0.268553845,
		"x": 3.133541326,
		"label": "HP1507101_P11"
	},
	{
		"y": -3.384918254,
		"x": -11.44538194,
		"label": "HP1507101_O15"
	},
	{
		"y": -0.563987254,
		"x": 3.19338912,
		"label": "HP1507101_P4"
	},
	{
		"y": -3.170781074,
		"x": -10.9068486,
		"label": "HP1507101_A24"
	},
	{
		"y": -0.428208359,
		"x": 3.444094508,
		"label": "HP1507101_E6"
	},
	{
		"y": -0.640775008,
		"x": 4.275838232,
		"label": "HP1507101_G22"
	},
	{
		"y": -3.338319707,
		"x": -11.28604792,
		"label": "HP1507101_K18"
	},
	{
		"y": -0.208123518,
		"x": 3.156414953,
		"label": "HP1507101_C4"
	},
	{
		"y": -0.431256035,
		"x": 3.751213744,
		"label": "HP1507101_J18"
	},
	{
		"y": -3.173626048,
		"x": -12.26384552,
		"label": "HP1507101_J16"
	},
	{
		"y": 4.432110594,
		"x": 9.721779213,
		"label": "HP1507101_H16"
	},
	{
		"y": -4.299801258,
		"x": -11.70471207,
		"label": "HP1507101_H8"
	},
	{
		"y": 0.87361817,
		"x": 1.863145909,
		"label": "HP1507101_D19"
	},
	{
		"y": -0.259599297,
		"x": 3.530852103,
		"label": "HP1507101_I23"
	},
	{
		"y": -0.435233607,
		"x": 3.88871568,
		"label": "HP1507101_C18"
	},
	{
		"y": -0.161656351,
		"x": 4.585200627,
		"label": "HP1507101_K8"
	},
	{
		"y": 2.246334301,
		"x": 1.6810915,
		"label": "HP1507101_D3"
	},
	{
		"y": 2.251239737,
		"x": 1.609642448,
		"label": "HP1507101_A12"
	},
	{
		"y": 0.451869232,
		"x": 2.71432554,
		"label": "HP1507101_C10"
	},
	{
		"y": -0.375599807,
		"x": 3.293595922,
		"label": "HP1507101_N19"
	},
	{
		"y": -3.676488952,
		"x": -11.64125249,
		"label": "HP1507101_M13"
	},
	{
		"y": -3.469415442,
		"x": -11.31530336,
		"label": "HP1507101_C21"
	},
	{
		"y": -2.246971084,
		"x": 4.435768973,
		"label": "HP1507101_G19"
	},
	{
		"y": -0.506171358,
		"x": 3.158520772,
		"label": "HP1507101_I11"
	},
	{
		"y": -0.223735518,
		"x": 3.293008613,
		"label": "HP1507101_L18"
	},
	{
		"y": -2.77429357,
		"x": -7.624942092,
		"label": "HP1507101_D13"
	},
	{
		"y": 0.012822201,
		"x": 2.89077773,
		"label": "HP1507101_B15"
	},
	{
		"y": 0.007625101,
		"x": 4.050757883,
		"label": "HP1507101_K5"
	},
	{
		"y": -0.727111521,
		"x": 3.472303542,
		"label": "HP1507101_L3"
	},
	{
		"y": -0.896609176,
		"x": 3.111075285,
		"label": "HP1507101_E8"
	},
	{
		"y": 0.056234218,
		"x": 3.262261637,
		"label": "HP1507101_J13"
	},
	{
		"y": -2.62907259,
		"x": 0.1047675,
		"label": "HP1507101_O21"
	},
	{
		"y": -0.467324857,
		"x": 3.15205866,
		"label": "HP1507101_A4"
	},
	{
		"y": -4.53883262,
		"x": -10.97272912,
		"label": "HP1507101_I14"
	},
	{
		"y": -0.61456176,
		"x": 3.254267557,
		"label": "HP1507101_J23"
	},
	{
		"y": 3.701331148,
		"x": 10.7224499,
		"label": "HP1507101_B8"
	},
	{
		"y": 4.225203113,
		"x": 10.20885113,
		"label": "HP1507101_N17"
	},
	{
		"y": -2.632191304,
		"x": 4.136409866,
		"label": "HP1507101_O18"
	},
	{
		"y": -3.12636294,
		"x": -10.97636542,
		"label": "HP1507101_I7"
	},
	{
		"y": 2.064124036,
		"x": 1.68139043,
		"label": "HP1507101_I12"
	},
	{
		"y": -0.198712966,
		"x": 3.236691918,
		"label": "HP1507101_K4"
	},
	{
		"y": -3.289855693,
		"x": -11.2420626,
		"label": "HP1507101_K9"
	},
	{
		"y": -4.906250545,
		"x": -10.37660775,
		"label": "HP1507101_E17"
	},
	{
		"y": 5.277425494,
		"x": 8.40947176,
		"label": "HP1507101_J7"
	},
	{
		"y": -0.182331942,
		"x": 3.467426912,
		"label": "HP1507101_F3"
	},
	{
		"y": 1.37196542,
		"x": 1.483417553,
		"label": "HP1507101_L23"
	},
	{
		"y": -0.188949778,
		"x": 3.575277859,
		"label": "HP1507101_N18"
	},
	{
		"y": 0.014210863,
		"x": 4.510354745,
		"label": "HP1507101_D7"
	},
	{
		"y": -0.551193395,
		"x": 3.820346856,
		"label": "HP1507101_P18"
	},
	{
		"y": -0.020251837,
		"x": 3.260024162,
		"label": "HP1507101_P17"
	},
	{
		"y": -0.74723654,
		"x": 2.994542148,
		"label": "HP1507101_P5"
	},
	{
		"y": -0.654843135,
		"x": 3.272718243,
		"label": "HP1507101_M4"
	},
	{
		"y": -0.169288882,
		"x": 3.255206455,
		"label": "HP1507101_B7"
	},
	{
		"y": -0.010646709,
		"x": 2.868329802,
		"label": "HP1507101_E10"
	},
	{
		"y": -0.561876098,
		"x": 2.986910843,
		"label": "HP1507101_H23"
	},
	{
		"y": -0.7943296,
		"x": 3.753153199,
		"label": "HP1507101_K3"
	},
	{
		"y": -0.60327427,
		"x": 3.888276049,
		"label": "HP1507101_C20"
	},
	{
		"y": -0.415280014,
		"x": 4.016183877,
		"label": "HP1507101_L10"
	},
	{
		"y": -1.142253023,
		"x": 4.212463533,
		"label": "HP1507101_M14"
	},
	{
		"y": 2.229198137,
		"x": 2.105993656,
		"label": "HP1507101_J19"
	},
	{
		"y": 0.115359404,
		"x": 3.384132725,
		"label": "HP1507101_I4"
	},
	{
		"y": -0.709128788,
		"x": 3.122269286,
		"label": "HP1507101_G24"
	},
	{
		"y": -2.680516877,
		"x": -0.243855558,
		"label": "HP1507101_C23"
	},
	{
		"y": -0.725597731,
		"x": 4.405767048,
		"label": "HP1507101_G23"
	},
	{
		"y": -2.687470321,
		"x": -11.94458042,
		"label": "HP1507101_K7"
	},
	{
		"y": 0.240418314,
		"x": -1.723060814,
		"label": "HP1507101_I21"
	},
	{
		"y": 4.208765733,
		"x": 9.820824627,
		"label": "HP1507101_F15"
	},
	{
		"y": -0.491228324,
		"x": 3.102326105,
		"label": "HP1507101_D1"
	},
	{
		"y": -0.542865326,
		"x": 3.179769824,
		"label": "HP1507101_J1"
	},
	{
		"y": 1.36351811,
		"x": 1.38301557,
		"label": "HP1507101_F10"
	},
	{
		"y": 0.251090345,
		"x": 2.789956338,
		"label": "HP1507101_H10"
	},
	{
		"y": -3.714233717,
		"x": -11.36088594,
		"label": "HP1507101_B21"
	},
	{
		"y": -0.036574333,
		"x": 4.460089674,
		"label": "HP1507101_O24"
	},
	{
		"y": -0.646645479,
		"x": 3.160098443,
		"label": "HP1507101_D8"
	},
	{
		"y": -3.704534491,
		"x": -11.04715466,
		"label": "HP1507101_D4"
	},
	{
		"y": -0.414707191,
		"x": 3.343887301,
		"label": "HP1507101_I22"
	},
	{
		"y": -0.532339472,
		"x": 3.11624834,
		"label": "HP1507101_B1"
	},
	{
		"y": -0.427190026,
		"x": 3.19494327,
		"label": "HP1507101_N16"
	},
	{
		"y": 2.355352367,
		"x": 1.882935042,
		"label": "HP1507101_A6"
	},
	{
		"y": -0.7134209,
		"x": 3.706537079,
		"label": "HP1507101_F2"
	},
	{
		"y": -4.06532642,
		"x": -11.2272093,
		"label": "HP1507101_J6"
	},
	{
		"y": -0.42973812,
		"x": 3.204785814,
		"label": "HP1507101_F8"
	},
	{
		"y": 1.501458953,
		"x": 1.481324336,
		"label": "HP1507101_P21"
	},
	{
		"y": -0.300713053,
		"x": 3.326906207,
		"label": "HP1507101_B14"
	},
	{
		"y": -0.001072844,
		"x": 3.320908399,
		"label": "HP1507101_N4"
	},
	{
		"y": 2.235574278,
		"x": 1.821841494,
		"label": "HP1507101_N6"
	},
	{
		"y": -3.44917287,
		"x": -11.34122213,
		"label": "HP1507101_M3"
	},
	{
		"y": -3.095111216,
		"x": 1.32496646,
		"label": "HP1507101_C13"
	},
	{
		"y": -0.038200395,
		"x": 4.613845643,
		"label": "HP1507101_M6"
	},
	{
		"y": -0.536360415,
		"x": 3.889341072,
		"label": "HP1507101_L19"
	},
	{
		"y": -3.322896528,
		"x": -10.95303184,
		"label": "HP1507101_B9"
	},
	{
		"y": 1.221265793,
		"x": 1.486187269,
		"label": "HP1507101_A5"
	},
	{
		"y": 3.457878343,
		"x": 1.257976549,
		"label": "HP1507101_G21"
	},
	{
		"y": -3.25783935,
		"x": -11.27655221,
		"label": "HP1507101_M15"
	},
	{
		"y": -0.249206498,
		"x": 3.480513115,
		"label": "HP1507101_F18"
	},
	{
		"y": -3.280154105,
		"x": -11.56185243,
		"label": "HP1507101_M23"
	},
	{
		"y": -0.379589413,
		"x": 4.400303967,
		"label": "HP1507101_K22"
	},
	{
		"y": -2.810159791,
		"x": 0.292102515,
		"label": "HP1507101_K17"
	},
	{
		"y": -0.269082173,
		"x": 3.254279368,
		"label": "HP1507101_D21"
	},
	{
		"y": -0.367079943,
		"x": 3.716311859,
		"label": "HP1507101_D16"
	},
	{
		"y": -0.512329025,
		"x": 3.522547633,
		"label": "HP1507101_M18"
	},
	{
		"y": -0.489399964,
		"x": 3.133742541,
		"label": "HP1507101_H6"
	},
	{
		"y": 2.976340019,
		"x": 7.049597025,
		"label": "HP1507101_D9"
	},
	{
		"y": 4.404327386,
		"x": 9.685589429,
		"label": "HP1507101_O12"
	},
	{
		"y": -0.324663668,
		"x": 3.80921626,
		"label": "HP1507101_G20"
	},
	{
		"y": -3.182396066,
		"x": -10.89794518,
		"label": "HP1507101_K11"
	},
	{
		"y": -0.035169606,
		"x": 4.541257348,
		"label": "HP1507101_G13"
	},
	{
		"y": -0.498740134,
		"x": 3.7508154,
		"label": "HP1507101_N20"
	},
	{
		"y": -3.268266329,
		"x": -11.31116301,
		"label": "HP1507101_K14"
	},
	{
		"y": -3.288574867,
		"x": 1.974704929,
		"label": "HP1507101_K21"
	},
	{
		"y": -1.615513713,
		"x": 4.812197457,
		"label": "HP1507101_A10"
	},
	{
		"y": -0.458353585,
		"x": 3.276665406,
		"label": "HP1507101_G8"
	},
	{
		"y": -0.934895327,
		"x": 3.31316536,
		"label": "HP1507101_P6"
	},
	{
		"y": -0.454517248,
		"x": 3.156195107,
		"label": "HP1507101_D18"
	},
	{
		"y": 2.493754665,
		"x": 1.438928998,
		"label": "HP1507101_O3"
	},
	{
		"y": 0.255260982,
		"x": 3.408332398,
		"label": "HP1507101_N1"
	},
	{
		"y": -0.714364415,
		"x": 4.033891519,
		"label": "HP1507101_P23"
	},
	{
		"y": -3.002254357,
		"x": 2.548595073,
		"label": "HP1507101_H21"
	},
	{
		"y": -1.29347496,
		"x": 4.74239439,
		"label": "HP1507101_E21"
	},
	{
		"y": 2.219592621,
		"x": 1.78122593,
		"label": "HP1507101_L16"
	},
	{
		"y": -3.55457001,
		"x": -11.39319578,
		"label": "HP1507101_P24"
	},
	{
		"y": 2.571491702,
		"x": 1.798058216,
		"label": "HP1507101_K15"
	},
	{
		"y": 2.900647697,
		"x": 6.728586962,
		"label": "HP1507101_C11"
	},
	{
		"y": 2.146319139,
		"x": 1.860269188,
		"label": "HP1507101_N13"
	},
	{
		"y": 5.999405741,
		"x": 9.02711756,
		"label": "HP1507101_E19"
	},
	{
		"y": -0.669999348,
		"x": 3.532304175,
		"label": "HP1507101_D24"
	},
	{
		"y": -0.907554327,
		"x": 3.24991558,
		"label": "HP1507101_C5"
	},
	{
		"y": 2.387120389,
		"x": 1.893887758,
		"label": "HP1507101_E14"
	},
	{
		"y": 2.720069681,
		"x": 1.968123982,
		"label": "HP1507101_A13"
	},
	{
		"y": -0.272394718,
		"x": 3.16518041,
		"label": "HP1507101_J2"
	},
	{
		"y": -0.837497633,
		"x": 2.99542306,
		"label": "HP1507101_B13"
	},
	{
		"y": -3.530004223,
		"x": -11.52028387,
		"label": "HP1507101_A23"
	},
	{
		"y": -0.565667256,
		"x": 3.037283604,
		"label": "HP1507101_H12"
	},
	{
		"y": -3.345895024,
		"x": 2.452947552,
		"label": "HP1507101_C17"
	},
	{
		"y": -0.244430156,
		"x": 4.337876696,
		"label": "HP1507101_I19"
	},
	{
		"y": -0.323556746,
		"x": 3.239587699,
		"label": "HP1507101_H22"
	},
	{
		"y": -0.333466274,
		"x": 3.167897246,
		"label": "HP1507101_B4"
	},
	{
		"y": -4.464556791,
		"x": -9.810464367,
		"label": "HP1507101_H18"
	},
	{
		"y": -0.230491141,
		"x": 3.304955402,
		"label": "HP1507101_F13"
	},
	{
		"y": 1.858881782,
		"x": 1.884447869,
		"label": "HP1507101_J20"
	},
	{
		"y": -3.231091765,
		"x": -11.47268204,
		"label": "HP1507101_A9"
	},
	{
		"y": -3.671060366,
		"x": -8.968724364,
		"label": "HP1507101_H2"
	},
	{
		"y": 2.078952231,
		"x": 2.029989144,
		"label": "HP1507101_O9"
	},
	{
		"y": 4.421907858,
		"x": 9.769184693,
		"label": "HP1507101_N8"
	},
	{
		"y": -0.675562685,
		"x": 3.122277959,
		"label": "HP1507101_B19"
	},
	{
		"y": -0.448710184,
		"x": 3.26850387,
		"label": "HP1507101_D12"
	},
	{
		"y": 2.317802376,
		"x": 1.854116385,
		"label": "HP1507101_M8"
	},
	{
		"y": 1.206332091,
		"x": 1.249557169,
		"label": "HP1507101_L4"
	},
	{
		"y": -0.545969807,
		"x": 3.24767002,
		"label": "HP1507101_D5"
	},
	{
		"y": -2.806501787,
		"x": 3.848121436,
		"label": "HP1507101_C19"
	},
	{
		"y": -4.923041041,
		"x": -10.50523544,
		"label": "HP1507101_P22"
	},
	{
		"y": -1.637584492,
		"x": -11.47873321,
		"label": "HP1507101_I3"
	},
	{
		"y": -0.444616744,
		"x": 3.446564895,
		"label": "HP1507101_A18"
	},
	{
		"y": -0.535036366,
		"x": 3.507042105,
		"label": "HP1507101_B24"
	},
	{
		"y": -0.581497024,
		"x": 4.565386144,
		"label": "HP1507101_J21"
	},
	{
		"y": 1.810560227,
		"x": 2.508031508,
		"label": "HP1507101_I18"
	},
	{
		"y": 0.011225328,
		"x": 4.023940012,
		"label": "HP1507101_G11"
	},
	{
		"y": -0.639003617,
		"x": 3.309177534,
		"label": "HP1507101_B6"
	},
	{
		"y": -0.365531918,
		"x": 3.412360669,
		"label": "HP1507101_D15"
	},
	{
		"y": 0.940892568,
		"x": 1.809078922,
		"label": "HP1507101_M22"
	},
	{
		"y": -0.013631554,
		"x": 3.73829803,
		"label": "HP1507101_B12"
	},
	{
		"y": 2.203835728,
		"x": 1.652459607,
		"label": "HP1507101_H17"
	},
	{
		"y": 1.950197469,
		"x": 1.694993995,
		"label": "HP1507101_C12"
	},
	{
		"y": 2.916338934,
		"x": 7.129130128,
		"label": "HP1507101_D10"
	},
	{
		"y": -3.911767328,
		"x": -8.801506932,
		"label": "HP1507101_A15"
	},
	{
		"y": 3.18963484,
		"x": 0.26929555,
		"label": "HP1507101_E15"
	},
	{
		"y": 5.43111429,
		"x": 8.821495833,
		"label": "HP1507101_L17"
	},
	{
		"y": -2.716955983,
		"x": -8.675288295,
		"label": "HP1507101_C22"
	},
	{
		"y": -0.330736644,
		"x": 3.713243737,
		"label": "HP1507101_B10"
	},
	{
		"y": -0.460640902,
		"x": 3.597521133,
		"label": "HP1507101_N2"
	},
	{
		"y": -0.684346022,
		"x": 4.065484285,
		"label": "HP1507101_F5"
	},
	{
		"y": -3.332259656,
		"x": -11.40626166,
		"label": "HP1507101_M5"
	},
	{
		"y": 0.317876614,
		"x": 2.84812548,
		"label": "HP1507101_E12"
	},
	{
		"y": -0.278769732,
		"x": 3.609538254,
		"label": "HP1507101_H3"
	},
	{
		"y": -0.509348374,
		"x": 3.57476533,
		"label": "HP1507101_O7"
	},
	{
		"y": -3.416007992,
		"x": -12.12804537,
		"label": "HP1507101_P16"
	},
	{
		"y": 4.398626078,
		"x": 9.675418956,
		"label": "HP1507101_P1"
	},
	{
		"y": 2.970369944,
		"x": 2.187990481,
		"label": "HP1507101_O14"
	},
	{
		"y": -0.160287483,
		"x": 3.368900471,
		"label": "HP1507101_L14"
	},
	{
		"y": -4.82695953,
		"x": -10.93795041,
		"label": "HP1507101_J10"
	},
	{
		"y": 2.452542738,
		"x": 1.615578174,
		"label": "HP1507101_D23"
	},
	{
		"y": -1.048237278,
		"x": 3.20059194,
		"label": "HP1507101_L6"
	},
	{
		"y": -1.064048703,
		"x": 4.671972302,
		"label": "HP1507101_C6"
	},
	{
		"y": -3.261310057,
		"x": -11.11649055,
		"label": "HP1507101_M9"
	},
	{
		"y": -0.442273559,
		"x": 3.179847475,
		"label": "HP1507101_I6"
	},
	{
		"y": -3.271339679,
		"x": -11.48148094,
		"label": "HP1507101_M21"
	},
	{
		"y": -3.156544754,
		"x": -11.03569365,
		"label": "HP1507101_E5"
	},
	{
		"y": 0.067543582,
		"x": 3.155960411,
		"label": "HP1507101_N23"
	},
	{
		"y": 2.985264417,
		"x": 7.035156912,
		"label": "HP1507101_K13"
	},
	{
		"y": -0.455238337,
		"x": 3.269382941,
		"label": "HP1507101_J17"
	},
	{
		"y": -0.427301456,
		"x": 3.315737537,
		"label": "HP1507101_F1"
	},
	{
		"y": -3.377353905,
		"x": -11.7079659,
		"label": "HP1507101_M11"
	},
	{
		"y": 0.261969984,
		"x": 4.075160808,
		"label": "HP1507101_E9"
	},
	{
		"y": -0.234440081,
		"x": 3.275713605,
		"label": "HP1507101_C14"
	},
	{
		"y": -0.130460308,
		"x": 4.329109779,
		"label": "HP1507101_D11"
	},
	{
		"y": -0.565612063,
		"x": 3.113972119,
		"label": "HP1507101_J3"
	},
	{
		"y": 3.119234445,
		"x": 2.10988261,
		"label": "HP1507101_C15"
	},
	{
		"y": 2.964738593,
		"x": 7.037682273,
		"label": "HP1507101_P15"
	},
	{
		"y": -3.379332518,
		"x": 2.962961735,
		"label": "HP1507101_A7"
	},
	{
		"y": -3.078846883,
		"x": 1.703805209,
		"label": "HP1507101_A8"
	},
	{
		"y": -0.10832178,
		"x": 3.930378815,
		"label": "HP1507101_M20"
	},
	{
		"y": -0.584910398,
		"x": 3.432726214,
		"label": "HP1507101_D17"
	},
	{
		"y": -0.437685023,
		"x": 3.407560263,
		"label": "HP1507101_B16"
	},
	{
		"y": -0.432508897,
		"x": 3.201080507,
		"label": "HP1507101_J5"
	},
	{
		"y": -0.196373356,
		"x": 3.925536708,
		"label": "HP1507101_I24"
	},
	{
		"y": -4.104869973,
		"x": -10.64401822,
		"label": "HP1507101_L9"
	},
	{
		"y": -0.348133817,
		"x": 3.176475554,
		"label": "HP1507101_O13"
	},
	{
		"y": 0.055495514,
		"x": 3.126191832,
		"label": "HP1507101_E7"
	},
	{
		"y": 2.437733412,
		"x": 1.857629375,
		"label": "HP1507101_F23"
	},
	{
		"y": -3.698433678,
		"x": -11.02746382,
		"label": "HP1507101_L12"
	},
	{
		"y": -0.512449626,
		"x": 3.141490066,
		"label": "HP1507101_I20"
	},
	{
		"y": -4.012292243,
		"x": -11.09606393,
		"label": "HP1507101_B2"
	},
	{
		"y": -0.603236512,
		"x": 3.257667176,
		"label": "HP1507101_I5"
	},
	{
		"y": -0.766556384,
		"x": 3.794137674,
		"label": "HP1507101_B11"
	},
	{
		"y": 2.159572369,
		"x": 1.73960166,
		"label": "HP1507101_O19"
	},
	{
		"y": -0.412607518,
		"x": 3.278825636,
		"label": "HP1507101_H5"
	},
	{
		"y": 2.324955392,
		"x": 1.71298133,
		"label": "HP1507101_B5"
	},
	{
		"y": -0.483657251,
		"x": 3.562782142,
		"label": "HP1507101_G9"
	},
	{
		"y": 2.89501594,
		"x": 7.111189056,
		"label": "HP1507101_P20"
	},
	{
		"y": -3.079505976,
		"x": -11.66085347,
		"label": "HP1507101_M7"
	},
	{
		"y": -2.025365083,
		"x": 3.285778426,
		"label": "HP1507101_J4"
	},
	{
		"y": 0.430461326,
		"x": 4.396908763,
		"label": "HP1507101_K24"
	},
	{
		"y": 2.250706597,
		"x": 1.646915897,
		"label": "HP1507101_F4"
	},
	{
		"y": -3.925058887,
		"x": -11.1617441,
		"label": "HP1507101_L20"
	},
	{
		"y": 3.437450786,
		"x": 1.027217222,
		"label": "HP1507101_N10"
	},
	{
		"y": -0.456618103,
		"x": 3.190398056,
		"label": "HP1507101_P3"
	},
	{
		"y": -2.956788527,
		"x": 1.518299718,
		"label": "HP1507101_A19"
	},
	{
		"y": 1.363173445,
		"x": 1.299526849,
		"label": "HP1507101_E16"
	},
	{
		"y": 0.523162145,
		"x": 1.122224947,
		"label": "HP1507101_B20"
	},
	{
		"y": -0.052557328,
		"x": 4.138752326,
		"label": "HP1507101_F21"
	},
	{
		"y": 2.978240869,
		"x": 7.052237592,
		"label": "HP1507101_E18"
	},
	{
		"y": -0.498583868,
		"x": 3.8919188,
		"label": "HP1507101_G15"
	},
	{
		"y": -0.359973634,
		"x": 3.157210275,
		"label": "HP1507101_O11"
	},
	{
		"y": -0.385157771,
		"x": 3.273221148,
		"label": "HP1507101_C8"
	},
	{
		"y": -0.247473522,
		"x": 3.403579573,
		"label": "HP1507101_L21"
	},
	{
		"y": 1.463868397,
		"x": 1.662213301,
		"label": "HP1507101_F12"
	},
	{
		"y": 0.573196385,
		"x": 0.614367704,
		"label": "HP1507101_F9"
	},
	{
		"y": -0.429637472,
		"x": 3.418371994,
		"label": "HP1507101_J22"
	},
	{
		"y": 2.959875801,
		"x": 7.019554368,
		"label": "HP1507101_K20"
	},
	{
		"y": 2.99350512,
		"x": 7.094675305,
		"label": "HP1507101_L1"
	},
	{
		"y": 3.025606783,
		"x": 7.063368081,
		"label": "HP1507101_E23"
	},
	{
		"y": 2.305083276,
		"x": 1.751731865,
		"label": "HP1507101_O8"
	},
	{
		"y": 0.337404314,
		"x": 4.474064577,
		"label": "HP1507101_P8"
	},
	{
		"y": -3.155002806,
		"x": -11.08649135,
		"label": "HP1509101_E2"
	},
	{
		"y": -3.4423722,
		"x": -11.49246093,
		"label": "HP1509101_A1"
	},
	{
		"y": -3.534211341,
		"x": -11.7548135,
		"label": "HP1509101_I1"
	},
	{
		"y": -3.333697741,
		"x": -11.19139694,
		"label": "HP1509101_G1"
	},
	{
		"y": -3.483759017,
		"x": -11.91947295,
		"label": "HP1509101_M2"
	},
	{
		"y": -3.144455129,
		"x": -10.95767599,
		"label": "HP1509101_C2"
	},
	{
		"y": -3.136782073,
		"x": -11.02697002,
		"label": "HP1509101_M1"
	},
	{
		"y": -3.244257768,
		"x": -10.97033399,
		"label": "HP1509101_O2"
	},
	{
		"y": -2.251631057,
		"x": -8.440951885,
		"label": "HP1509101_A2"
	},
	{
		"y": -3.227609421,
		"x": -11.10607977,
		"label": "HP1509101_E1"
	},
	{
		"y": -4.978997122,
		"x": -10.37466108,
		"label": "HP1509101_I2"
	},
	{
		"y": -3.130976054,
		"x": -11.17502246,
		"label": "HP1509101_K1"
	},
	{
		"y": 6.041234062,
		"x": 9.690962371,
		"label": "HP1509101_G3"
	},
	{
		"y": 2.78806213,
		"x": 7.663206827,
		"label": "HP1509101_G2"
	},
	{
		"y": 3.316124147,
		"x": 8.704948204,
		"label": "HP1509101_E3"
	},
	{
		"y": 2.746085916,
		"x": 9.405593286,
		"label": "HP1509101_K2"
	},
	{
		"y": -0.092492722,
		"x": 3.385586163,
		"label": "HP1509101_A3"
	},
	{
		"y": 1.533088863,
		"x": 2.113221558,
		"label": "HP1509101_O1"
	},
	{
		"y": 0.900348938,
		"x": 2.586209031,
		"label": "HP1509101_C1"
	},
	{
		"y": -3.134819467,
		"x": -11.09501106,
		"label": "HP1509101_C3"
	},
	{
		"y": -3.095158005,
		"x": -12.31146701,
		"label": "HP1509101_F9"
	},
	{
		"y": -3.052107353,
		"x": -11.04928713,
		"label": "HP1509101_D2"
	},
	{
		"y": -4.020006617,
		"x": -11.83129276,
		"label": "HP1509101_P21"
	},
	{
		"y": -4.194554328,
		"x": -8.957001208,
		"label": "HP1509101_J13"
	},
	{
		"y": -2.655580436,
		"x": 1.081588987,
		"label": "HP1509101_I19"
	},
	{
		"y": 0.189986294,
		"x": 4.03657527,
		"label": "HP1509101_D5"
	},
	{
		"y": -3.27619652,
		"x": -8.841217683,
		"label": "HP1509101_E17"
	},
	{
		"y": -4.936269059,
		"x": -10.01613852,
		"label": "HP1509101_A18"
	},
	{
		"y": 4.50138876,
		"x": 9.868902175,
		"label": "HP1509101_J22"
	},
	{
		"y": 2.990141726,
		"x": 7.197256079,
		"label": "HP1509101_I17"
	},
	{
		"y": 4.556127284,
		"x": 9.978971078,
		"label": "HP1509101_K19"
	},
	{
		"y": 1.360572078,
		"x": 1.557669407,
		"label": "HP1509101_J16"
	},
	{
		"y": -4.810563352,
		"x": -10.73753022,
		"label": "HP1509101_L15"
	},
	{
		"y": 0.033826182,
		"x": 3.587206516,
		"label": "HP1509101_G19"
	},
	{
		"y": 2.10293,
		"x": 1.839857195,
		"label": "HP1509101_D18"
	},
	{
		"y": -0.177267395,
		"x": 3.468891043,
		"label": "HP1509101_P4"
	},
	{
		"y": -4.073917109,
		"x": -12.01167126,
		"label": "HP1509101_C13"
	},
	{
		"y": 0.793536081,
		"x": 4.141054891,
		"label": "HP1509101_B8"
	},
	{
		"y": -1.995531608,
		"x": -8.770421661,
		"label": "HP1509101_E20"
	},
	{
		"y": 4.456857235,
		"x": 10.65489771,
		"label": "HP1509101_M14"
	},
	{
		"y": 2.963350921,
		"x": 6.984405501,
		"label": "HP1509101_D10"
	},
	{
		"y": -4.182110892,
		"x": -11.95025937,
		"label": "HP1509101_E21"
	},
	{
		"y": 2.976904014,
		"x": 6.763773885,
		"label": "HP1509101_L20"
	},
	{
		"y": -3.110964342,
		"x": -11.95245173,
		"label": "HP1509101_A21"
	},
	{
		"y": -3.063283827,
		"x": -11.64261724,
		"label": "HP1509101_J10"
	},
	{
		"y": -3.331674049,
		"x": -12.38206375,
		"label": "HP1509101_B14"
	},
	{
		"y": -0.086739919,
		"x": 3.739391169,
		"label": "HP1509101_J12"
	},
	{
		"y": -2.213678517,
		"x": -12.12730978,
		"label": "HP1509101_F3"
	},
	{
		"y": 4.555403159,
		"x": 10.04871448,
		"label": "HP1509101_K15"
	},
	{
		"y": -3.354107193,
		"x": -11.21556081,
		"label": "HP1509101_E11"
	},
	{
		"y": 3.016283219,
		"x": 10.17837278,
		"label": "HP1509101_F8"
	},
	{
		"y": -3.226329519,
		"x": -11.10349601,
		"label": "HP1509101_N13"
	},
	{
		"y": 4.273246676,
		"x": 9.758448599,
		"label": "HP1509101_A24"
	},
	{
		"y": -0.173153106,
		"x": 3.625110931,
		"label": "HP1509101_A7"
	},
	{
		"y": 0.875430818,
		"x": 4.061380898,
		"label": "HP1509101_H1"
	},
	{
		"y": 0.899299739,
		"x": 3.498686157,
		"label": "HP1509101_L17"
	},
	{
		"y": -1.203914768,
		"x": 0.371332629,
		"label": "HP1509101_A13"
	},
	{
		"y": -3.085564812,
		"x": -11.41857598,
		"label": "HP1509101_B1"
	},
	{
		"y": -1.241922053,
		"x": 5.065704416,
		"label": "HP1509101_L6"
	},
	{
		"y": 4.447302407,
		"x": 10.73255711,
		"label": "HP1509101_B9"
	},
	{
		"y": -4.332313196,
		"x": -11.4711978,
		"label": "HP1509101_H3"
	},
	{
		"y": 5.081724473,
		"x": 8.806054685,
		"label": "HP1509101_B16"
	},
	{
		"y": -3.417985874,
		"x": -11.57822011,
		"label": "HP1509101_O15"
	},
	{
		"y": 4.572537358,
		"x": 9.693039636,
		"label": "HP1509101_P17"
	},
	{
		"y": -0.266626608,
		"x": 3.283994503,
		"label": "HP1509101_G23"
	},
	{
		"y": 1.247754498,
		"x": 5.373060968,
		"label": "HP1509101_P9"
	},
	{
		"y": -0.87771098,
		"x": 4.909435051,
		"label": "HP1509101_H19"
	},
	{
		"y": 4.496118343,
		"x": 9.917482839,
		"label": "HP1509101_L13"
	},
	{
		"y": -3.127554642,
		"x": -12.36310839,
		"label": "HP1509101_F12"
	},
	{
		"y": 3.311629523,
		"x": 1.646656732,
		"label": "HP1509101_E23"
	},
	{
		"y": -3.227324406,
		"x": -11.02274154,
		"label": "HP1509101_N4"
	},
	{
		"y": -0.026724999,
		"x": 3.279536843,
		"label": "HP1509101_I14"
	},
	{
		"y": 2.972321935,
		"x": 7.081161807,
		"label": "HP1509101_B12"
	},
	{
		"y": -0.768916891,
		"x": 5.062329273,
		"label": "HP1509101_P11"
	},
	{
		"y": 1.398077459,
		"x": 0.804021709,
		"label": "HP1509101_E4"
	},
	{
		"y": -0.052733616,
		"x": 3.477356348,
		"label": "HP1509101_H21"
	},
	{
		"y": 4.823772101,
		"x": 10.71554507,
		"label": "HP1509101_M18"
	},
	{
		"y": -2.323585834,
		"x": 0.367048088,
		"label": "HP1509101_K6"
	},
	{
		"y": 0.295140656,
		"x": 3.285705067,
		"label": "HP1509101_L8"
	},
	{
		"y": -3.175950967,
		"x": -11.24696086,
		"label": "HP1509101_M15"
	},
	{
		"y": -3.286165524,
		"x": -11.32232499,
		"label": "HP1509101_M9"
	},
	{
		"y": 4.019092745,
		"x": 10.63411834,
		"label": "HP1509101_J11"
	},
	{
		"y": 2.605565125,
		"x": 9.628958462,
		"label": "HP1509101_A9"
	},
	{
		"y": -3.640114751,
		"x": -11.80459031,
		"label": "HP1509101_H10"
	},
	{
		"y": -2.971908363,
		"x": -11.99803774,
		"label": "HP1509101_P16"
	},
	{
		"y": -3.238298663,
		"x": -11.12833658,
		"label": "HP1509101_M7"
	},
	{
		"y": 0.037861656,
		"x": 4.019872427,
		"label": "HP1509101_G14"
	},
	{
		"y": -3.223436045,
		"x": -11.13921384,
		"label": "HP1509101_C18"
	},
	{
		"y": -0.04733404,
		"x": 3.80388469,
		"label": "HP1509101_I5"
	},
	{
		"y": -3.344107955,
		"x": -11.38400933,
		"label": "HP1509101_G7"
	},
	{
		"y": 0.306109561,
		"x": 3.875103892,
		"label": "HP1509101_K22"
	},
	{
		"y": -3.691090918,
		"x": -12.08117442,
		"label": "HP1509101_H18"
	},
	{
		"y": 2.754767319,
		"x": 7.153049225,
		"label": "HP1509101_H17"
	},
	{
		"y": 0.381612461,
		"x": 4.392997944,
		"label": "HP1509101_F13"
	},
	{
		"y": -2.808111778,
		"x": -11.70878229,
		"label": "HP1509101_F16"
	},
	{
		"y": -3.071977057,
		"x": -11.18789599,
		"label": "HP1509101_B2"
	},
	{
		"y": -2.745917976,
		"x": -12.16399341,
		"label": "HP1509101_B22"
	},
	{
		"y": -4.51468658,
		"x": -11.65623719,
		"label": "HP1509101_H8"
	},
	{
		"y": 0.051936733,
		"x": 3.544145372,
		"label": "HP1509101_G24"
	},
	{
		"y": -3.23023117,
		"x": -11.15559126,
		"label": "HP1509101_G5"
	},
	{
		"y": -1.440373056,
		"x": 4.504114435,
		"label": "HP1509101_D15"
	},
	{
		"y": -4.70431572,
		"x": -9.635527861,
		"label": "HP1509101_O21"
	},
	{
		"y": -2.708932148,
		"x": -12.21883161,
		"label": "HP1509101_F10"
	},
	{
		"y": 1.212016596,
		"x": 1.859207715,
		"label": "HP1509101_H7"
	},
	{
		"y": -0.076675921,
		"x": 3.174670985,
		"label": "HP1509101_O9"
	},
	{
		"y": 4.388641521,
		"x": 9.858385045,
		"label": "HP1509101_D17"
	},
	{
		"y": 2.148573786,
		"x": 1.839194975,
		"label": "HP1509101_K9"
	},
	{
		"y": 0.149004526,
		"x": 3.513517414,
		"label": "HP1509101_N12"
	},
	{
		"y": -0.516995318,
		"x": 4.277060562,
		"label": "HP1509101_O7"
	},
	{
		"y": 4.415547056,
		"x": 9.992635816,
		"label": "HP1509101_N7"
	},
	{
		"y": -0.204642882,
		"x": 3.524525363,
		"label": "HP1509101_D8"
	},
	{
		"y": -1.386431397,
		"x": -0.119762604,
		"label": "HP1509101_K12"
	},
	{
		"y": 4.950768037,
		"x": 9.292518156,
		"label": "HP1509101_F18"
	},
	{
		"y": 1.777466353,
		"x": 0.558743424,
		"label": "HP1509101_A4"
	},
	{
		"y": -3.145650305,
		"x": -10.9942795,
		"label": "HP1509101_E6"
	},
	{
		"y": -3.176257581,
		"x": 1.84146283,
		"label": "HP1509101_D7"
	},
	{
		"y": -0.14037399,
		"x": 3.267463381,
		"label": "HP1509101_H22"
	},
	{
		"y": -3.139068496,
		"x": -11.16094191,
		"label": "HP1509101_J2"
	},
	{
		"y": 4.674174011,
		"x": 9.756944424,
		"label": "HP1509101_F24"
	},
	{
		"y": -3.204007544,
		"x": -11.15534737,
		"label": "HP1509101_N2"
	},
	{
		"y": -3.769699057,
		"x": -11.54413576,
		"label": "HP1509101_C10"
	},
	{
		"y": -3.11633593,
		"x": -11.13579319,
		"label": "HP1509101_M3"
	},
	{
		"y": 3.318878028,
		"x": 8.030957123,
		"label": "HP1509101_P14"
	},
	{
		"y": 0.449463105,
		"x": 4.399325734,
		"label": "HP1509101_F1"
	},
	{
		"y": 2.7855157,
		"x": 9.281693898,
		"label": "HP1509101_E14"
	},
	{
		"y": -1.401770987,
		"x": 1.079784212,
		"label": "HP1509101_C11"
	},
	{
		"y": 4.644540624,
		"x": 9.684091839,
		"label": "HP1509101_F2"
	},
	{
		"y": -0.192287248,
		"x": 3.327089839,
		"label": "HP1509101_L11"
	},
	{
		"y": 4.466240314,
		"x": 9.707680794,
		"label": "HP1509101_B24"
	},
	{
		"y": -3.183258165,
		"x": -11.43746628,
		"label": "HP1509101_C20"
	},
	{
		"y": -3.124062725,
		"x": -12.05822194,
		"label": "HP1509101_E15"
	},
	{
		"y": -3.621408787,
		"x": -11.445177,
		"label": "HP1509101_G6"
	},
	{
		"y": -0.491857814,
		"x": 4.894955144,
		"label": "HP1509101_N15"
	},
	{
		"y": 0.512329669,
		"x": 4.330913753,
		"label": "HP1509101_G22"
	},
	{
		"y": -4.945906877,
		"x": -10.12225829,
		"label": "HP1509101_A22"
	},
	{
		"y": 0.046166794,
		"x": 3.465347614,
		"label": "HP1509101_H24"
	},
	{
		"y": -3.008560585,
		"x": -12.11944064,
		"label": "HP1509101_F14"
	},
	{
		"y": 1.373231604,
		"x": 1.06523623,
		"label": "HP1509101_D22"
	},
	{
		"y": 3.031728042,
		"x": 1.409119063,
		"label": "HP1509101_I11"
	},
	{
		"y": -3.311855974,
		"x": -11.65170149,
		"label": "HP1509101_M23"
	},
	{
		"y": -3.624464877,
		"x": -12.08515749,
		"label": "HP1509101_F20"
	},
	{
		"y": -3.130072187,
		"x": -10.94297647,
		"label": "HP1509101_E5"
	},
	{
		"y": -2.951638533,
		"x": -12.3459044,
		"label": "HP1509101_A12"
	},
	{
		"y": -0.157553183,
		"x": 3.348973096,
		"label": "HP1509101_H23"
	},
	{
		"y": 4.640953759,
		"x": 10.54724247,
		"label": "HP1509101_M16"
	},
	{
		"y": 0.087441569,
		"x": 3.641500965,
		"label": "HP1509101_I10"
	},
	{
		"y": -0.422314221,
		"x": 3.898046636,
		"label": "HP1509101_C12"
	},
	{
		"y": -3.176360815,
		"x": -11.41311102,
		"label": "HP1509101_B4"
	},
	{
		"y": 4.366714717,
		"x": 10.569651,
		"label": "HP1509101_P6"
	},
	{
		"y": 1.701694218,
		"x": 3.182386949,
		"label": "HP1509101_P23"
	},
	{
		"y": -0.317737643,
		"x": 3.781118974,
		"label": "HP1509101_G18"
	},
	{
		"y": -4.288418821,
		"x": -9.059779207,
		"label": "HP1509101_O3"
	},
	{
		"y": 0.017447086,
		"x": 3.526979254,
		"label": "HP1509101_M12"
	},
	{
		"y": 4.974137286,
		"x": 10.20670677,
		"label": "HP1509101_L3"
	},
	{
		"y": -3.675918637,
		"x": -11.95883656,
		"label": "HP1509101_D13"
	},
	{
		"y": 4.72948089,
		"x": 9.783884127,
		"label": "HP1509101_J9"
	},
	{
		"y": -0.488712437,
		"x": 4.87734976,
		"label": "HP1509101_I22"
	},
	{
		"y": -1.610101435,
		"x": -11.6892466,
		"label": "HP1509101_F17"
	},
	{
		"y": 4.532045552,
		"x": 9.824261816,
		"label": "HP1509101_B19"
	},
	{
		"y": -1.99067037,
		"x": -8.675998278,
		"label": "HP1509101_C9"
	},
	{
		"y": -3.059594701,
		"x": -8.763281286,
		"label": "HP1509101_A19"
	},
	{
		"y": -3.119107202,
		"x": -11.96473651,
		"label": "HP1509101_J17"
	},
	{
		"y": 4.488450676,
		"x": 9.82201297,
		"label": "HP1509101_D23"
	},
	{
		"y": 0.341444051,
		"x": 4.545731223,
		"label": "HP1509101_N16"
	},
	{
		"y": 3.094391541,
		"x": 10.27790816,
		"label": "HP1509101_G4"
	},
	{
		"y": -4.621783682,
		"x": -9.477149751,
		"label": "HP1509101_O22"
	},
	{
		"y": -0.042528737,
		"x": 3.721299421,
		"label": "HP1509101_P20"
	},
	{
		"y": 5.004509104,
		"x": 10.57040922,
		"label": "HP1509101_P22"
	},
	{
		"y": -3.135229167,
		"x": -10.91530157,
		"label": "HP1509101_N14"
	},
	{
		"y": -3.151858605,
		"x": -10.9279664,
		"label": "HP1509101_I15"
	},
	{
		"y": -3.986250995,
		"x": -12.11300261,
		"label": "HP1509101_D12"
	},
	{
		"y": -3.398977266,
		"x": -11.91205629,
		"label": "HP1509101_H6"
	},
	{
		"y": -3.649520527,
		"x": -11.82623302,
		"label": "HP1509101_L12"
	},
	{
		"y": 1.195803444,
		"x": 2.155897449,
		"label": "HP1509101_L19"
	},
	{
		"y": 0.615233385,
		"x": 1.664830778,
		"label": "HP1509101_F21"
	},
	{
		"y": 2.229496223,
		"x": 1.921573949,
		"label": "HP1509101_C23"
	},
	{
		"y": -3.633259039,
		"x": -8.771749158,
		"label": "HP1509101_L22"
	},
	{
		"y": -3.154948664,
		"x": -11.13747665,
		"label": "HP1509101_P2"
	},
	{
		"y": -3.229092947,
		"x": -11.20556232,
		"label": "HP1509101_N3"
	},
	{
		"y": -2.957864228,
		"x": -11.56610502,
		"label": "HP1509101_D16"
	},
	{
		"y": -4.614164616,
		"x": -9.304445239,
		"label": "HP1509101_M4"
	},
	{
		"y": -3.057128433,
		"x": 0.799994024,
		"label": "HP1509101_P19"
	},
	{
		"y": 3.95178369,
		"x": 10.78247466,
		"label": "HP1509101_L9"
	},
	{
		"y": -3.127279738,
		"x": -11.02253318,
		"label": "HP1509101_E16"
	},
	{
		"y": 0.082522471,
		"x": 3.543901197,
		"label": "HP1509101_P18"
	},
	{
		"y": -3.395446146,
		"x": -8.486571302,
		"label": "HP1509101_I20"
	},
	{
		"y": 0.669934265,
		"x": -0.961117587,
		"label": "HP1509101_K13"
	},
	{
		"y": -3.341764096,
		"x": 2.433136562,
		"label": "HP1509101_G15"
	},
	{
		"y": -0.088447853,
		"x": 3.386101892,
		"label": "HP1509101_N9"
	},
	{
		"y": -2.332509862,
		"x": 4.534285263,
		"label": "HP1509101_L10"
	},
	{
		"y": -0.114942878,
		"x": 3.292798805,
		"label": "HP1509101_B20"
	},
	{
		"y": 0.378101365,
		"x": 3.370873499,
		"label": "HP1509101_N18"
	},
	{
		"y": -3.4791337,
		"x": -11.37191676,
		"label": "HP1509101_E12"
	},
	{
		"y": -0.179176068,
		"x": 3.255178037,
		"label": "HP1509101_N17"
	},
	{
		"y": -3.337322932,
		"x": -12.24293214,
		"label": "HP1509101_B21"
	},
	{
		"y": -3.175359646,
		"x": -11.02542251,
		"label": "HP1509101_E7"
	},
	{
		"y": 2.44848739,
		"x": 8.937170897,
		"label": "HP1509101_F15"
	},
	{
		"y": 3.114631985,
		"x": 7.014383703,
		"label": "HP1509101_J14"
	},
	{
		"y": 2.352539227,
		"x": 1.862881609,
		"label": "HP1509101_G9"
	},
	{
		"y": 0.210107955,
		"x": 3.756219564,
		"label": "HP1509101_C22"
	},
	{
		"y": -2.342644577,
		"x": -9.294100942,
		"label": "HP1509101_D24"
	},
	{
		"y": -3.353689552,
		"x": -11.31244785,
		"label": "HP1509101_M19"
	},
	{
		"y": -3.101924704,
		"x": -7.704152485,
		"label": "HP1509101_A16"
	},
	{
		"y": -0.410427398,
		"x": 4.350168186,
		"label": "HP1509101_E19"
	},
	{
		"y": 0.421580227,
		"x": 4.088711354,
		"label": "HP1509101_O23"
	},
	{
		"y": 2.620910789,
		"x": 3.268544645,
		"label": "HP1509101_A11"
	},
	{
		"y": -0.369073167,
		"x": 3.711209668,
		"label": "HP1509101_J8"
	},
	{
		"y": -3.178856492,
		"x": -11.25200401,
		"label": "HP1509101_M13"
	},
	{
		"y": -4.054028249,
		"x": -12.07307309,
		"label": "HP1509101_C5"
	},
	{
		"y": -4.254163006,
		"x": -9.050706477,
		"label": "HP1509101_N8"
	},
	{
		"y": 2.99236401,
		"x": 7.079087161,
		"label": "HP1509101_B17"
	},
	{
		"y": 4.66936615,
		"x": 10.00454681,
		"label": "HP1509101_E24"
	},
	{
		"y": 0.202912578,
		"x": 4.497270502,
		"label": "HP1509101_B11"
	},
	{
		"y": 0.202040441,
		"x": 3.61618766,
		"label": "HP1509101_D19"
	},
	{
		"y": 0.907492873,
		"x": 2.159405008,
		"label": "HP1509101_O8"
	},
	{
		"y": 0.013888235,
		"x": 4.494297307,
		"label": "HP1509101_K21"
	},
	{
		"y": -3.16353148,
		"x": -11.46946626,
		"label": "HP1509101_P3"
	},
	{
		"y": -4.226325755,
		"x": -12.10062787,
		"label": "HP1509101_F11"
	},
	{
		"y": 0.227400365,
		"x": -0.475925802,
		"label": "HP1509101_I3"
	},
	{
		"y": -0.192992021,
		"x": 4.769604878,
		"label": "HP1509101_G20"
	},
	{
		"y": -1.342062677,
		"x": -7.856604471,
		"label": "HP1509101_J3"
	},
	{
		"y": -3.17118177,
		"x": -11.10382022,
		"label": "HP1509101_M11"
	},
	{
		"y": -2.381557832,
		"x": -8.72177892,
		"label": "HP1509101_B6"
	},
	{
		"y": 1.951307076,
		"x": 2.994044038,
		"label": "HP1509101_J18"
	},
	{
		"y": 0.038955772,
		"x": 3.356731485,
		"label": "HP1509101_J4"
	},
	{
		"y": -0.119844197,
		"x": 3.635462388,
		"label": "HP1509101_H11"
	},
	{
		"y": 4.627850949,
		"x": 10.3341558,
		"label": "HP1509101_G10"
	},
	{
		"y": -0.244478958,
		"x": 3.510928446,
		"label": "HP1509101_I21"
	},
	{
		"y": -3.271592195,
		"x": -11.44840213,
		"label": "HP1509101_L4"
	},
	{
		"y": -3.966194475,
		"x": -11.71634106,
		"label": "HP1509101_C4"
	},
	{
		"y": -1.111560284,
		"x": 4.983775776,
		"label": "HP1509101_N1"
	},
	{
		"y": -3.153963867,
		"x": -10.96288909,
		"label": "HP1509101_H16"
	},
	{
		"y": -0.450494138,
		"x": 5.035163745,
		"label": "HP1509101_H14"
	},
	{
		"y": -3.120460168,
		"x": -11.11011256,
		"label": "HP1509101_M5"
	},
	{
		"y": 2.914425578,
		"x": 10.21916855,
		"label": "HP1509101_L2"
	},
	{
		"y": 1.396133856,
		"x": 1.704574552,
		"label": "HP1509101_P12"
	},
	{
		"y": -3.228388907,
		"x": -11.40295194,
		"label": "HP1509101_M21"
	},
	{
		"y": -3.621460529,
		"x": -8.512395173,
		"label": "HP1509101_B7"
	},
	{
		"y": -0.013115873,
		"x": 3.370497713,
		"label": "HP1509101_O13"
	},
	{
		"y": -3.26848087,
		"x": -11.06864426,
		"label": "HP1509101_E8"
	},
	{
		"y": -0.156732736,
		"x": 3.375287424,
		"label": "HP1509101_J15"
	},
	{
		"y": -2.719115415,
		"x": -11.33782149,
		"label": "HP1509101_I9"
	},
	{
		"y": 3.474088409,
		"x": 10.59859967,
		"label": "HP1509101_D9"
	},
	{
		"y": -3.125560322,
		"x": -11.00223471,
		"label": "HP1509101_K11"
	},
	{
		"y": 4.522631385,
		"x": 10.10246981,
		"label": "HP1509101_J23"
	},
	{
		"y": 0.590595082,
		"x": 3.190077759,
		"label": "HP1509101_P1"
	},
	{
		"y": 4.419198668,
		"x": 9.803424823,
		"label": "HP1509101_I12"
	},
	{
		"y": 0.728447034,
		"x": 4.262290696,
		"label": "HP1509101_H9"
	},
	{
		"y": 4.614063072,
		"x": 9.86518837,
		"label": "HP1509101_O14"
	},
	{
		"y": 0.214855584,
		"x": 4.324859466,
		"label": "HP1509101_O20"
	},
	{
		"y": -0.831016874,
		"x": 4.979668382,
		"label": "HP1509101_P10"
	},
	{
		"y": 4.279726022,
		"x": 10.81364321,
		"label": "HP1509101_N11"
	},
	{
		"y": 4.509375382,
		"x": 9.954075227,
		"label": "HP1509101_L16"
	},
	{
		"y": 2.856769379,
		"x": 2.409791355,
		"label": "HP1509101_N21"
	},
	{
		"y": 2.62933147,
		"x": 6.922157213,
		"label": "HP1509101_K5"
	},
	{
		"y": -3.12669361,
		"x": -10.93318735,
		"label": "HP1509101_M6"
	},
	{
		"y": -3.122835319,
		"x": 2.075102915,
		"label": "HP1509101_I4"
	},
	{
		"y": -3.246581855,
		"x": -11.29191938,
		"label": "HP1509101_D3"
	},
	{
		"y": -0.112174384,
		"x": 4.866972002,
		"label": "HP1509101_I8"
	},
	{
		"y": 3.275425165,
		"x": 1.181400474,
		"label": "HP1509101_O10"
	},
	{
		"y": -0.084835407,
		"x": 3.56421796,
		"label": "HP1509101_F4"
	},
	{
		"y": -2.180020912,
		"x": -12.1164618,
		"label": "HP1509101_J7"
	},
	{
		"y": -3.11114071,
		"x": -11.20992353,
		"label": "HP1509101_L5"
	},
	{
		"y": 0.488263661,
		"x": 4.196181685,
		"label": "HP1509101_K7"
	},
	{
		"y": -1.785702067,
		"x": 4.825442373,
		"label": "HP1509101_K16"
	},
	{
		"y": -2.561689071,
		"x": -12.12195628,
		"label": "HP1509101_N24"
	},
	{
		"y": 4.680766,
		"x": 9.659877121,
		"label": "HP1509101_K10"
	},
	{
		"y": -0.242784019,
		"x": 4.702234579,
		"label": "HP1509101_N5"
	},
	{
		"y": -1.055516588,
		"x": 4.915770966,
		"label": "HP1509101_K24"
	},
	{
		"y": -1.992027811,
		"x": -12.06440409,
		"label": "HP1509101_O5"
	},
	{
		"y": -0.054818068,
		"x": 3.572507441,
		"label": "HP1509101_J20"
	},
	{
		"y": -2.991433783,
		"x": -11.89493255,
		"label": "HP1509101_A15"
	},
	{
		"y": 2.549851221,
		"x": 2.164210323,
		"label": "HP1509101_B13"
	},
	{
		"y": -2.414977301,
		"x": 1.138283033,
		"label": "HP1509101_A14"
	},
	{
		"y": 1.903180302,
		"x": 2.246938209,
		"label": "HP1509101_P7"
	},
	{
		"y": 2.652623153,
		"x": 1.515701283,
		"label": "HP1509101_O6"
	},
	{
		"y": 0.108877071,
		"x": 0.124501484,
		"label": "HP1509101_G8"
	},
	{
		"y": 2.532311306,
		"x": 2.313629428,
		"label": "HP1509101_O18"
	},
	{
		"y": -3.142235532,
		"x": -11.6143404,
		"label": "HP1509101_M17"
	},
	{
		"y": -4.88927141,
		"x": -10.6014686,
		"label": "HP1509101_E13"
	},
	{
		"y": -0.069524267,
		"x": 3.306911376,
		"label": "HP1509101_F19"
	},
	{
		"y": -3.163990423,
		"x": 2.006033939,
		"label": "HP1509101_A10"
	},
	{
		"y": 3.897101077,
		"x": 10.7219459,
		"label": "HP1509101_J5"
	},
	{
		"y": 2.385538654,
		"x": 2.161707005,
		"label": "HP1509101_N23"
	},
	{
		"y": -3.102155927,
		"x": 3.178762746,
		"label": "HP1509101_K20"
	},
	{
		"y": 4.54178084,
		"x": 9.823653684,
		"label": "HP1509101_B23"
	},
	{
		"y": 4.687421761,
		"x": 10.5908445,
		"label": "HP1509101_I16"
	},
	{
		"y": 4.276766083,
		"x": 10.15332979,
		"label": "HP1509101_A8"
	},
	{
		"y": -2.67066766,
		"x": -11.65648763,
		"label": "HP1509101_F6"
	},
	{
		"y": -4.46025138,
		"x": -11.00105696,
		"label": "HP1509101_D20"
	},
	{
		"y": -3.465133656,
		"x": -11.99339242,
		"label": "HP1509101_B5"
	},
	{
		"y": 2.04847332,
		"x": 1.920567799,
		"label": "HP1509101_E22"
	},
	{
		"y": -4.350151669,
		"x": -9.097601695,
		"label": "HP1509101_C8"
	},
	{
		"y": 2.993385519,
		"x": 7.148890276,
		"label": "HP1509101_L18"
	},
	{
		"y": -0.150371594,
		"x": 3.192592878,
		"label": "HP1509101_I23"
	},
	{
		"y": 4.480848344,
		"x": 9.963533322,
		"label": "HP1509101_C21"
	},
	{
		"y": -4.60223085,
		"x": -10.72202698,
		"label": "HP1509101_J21"
	},
	{
		"y": -3.305126851,
		"x": 2.076535964,
		"label": "HP1509101_K17"
	},
	{
		"y": -3.140354398,
		"x": -11.03109489,
		"label": "HP1509101_M22"
	},
	{
		"y": 1.540780293,
		"x": 2.602064891,
		"label": "HP1509101_J19"
	},
	{
		"y": -4.480424515,
		"x": -9.283957277,
		"label": "HP1509101_M20"
	},
	{
		"y": -3.884700602,
		"x": -12.25201563,
		"label": "HP1509101_H12"
	},
	{
		"y": 0.911140663,
		"x": 3.572588471,
		"label": "HP1509101_O19"
	},
	{
		"y": -0.217043945,
		"x": 3.301043625,
		"label": "HP1509101_L24"
	},
	{
		"y": 2.19499685,
		"x": 9.300631922,
		"label": "HP1509101_P5"
	},
	{
		"y": 4.448162775,
		"x": 10.22377557,
		"label": "HP1509101_N6"
	},
	{
		"y": 2.918854757,
		"x": 8.687987217,
		"label": "HP1509101_N19"
	},
	{
		"y": 4.517250898,
		"x": 10.22596895,
		"label": "HP1509101_N10"
	},
	{
		"y": 3.161795723,
		"x": 10.48178842,
		"label": "HP1509101_L21"
	},
	{
		"y": 1.283740037,
		"x": 2.056567737,
		"label": "HP1509101_O24"
	},
	{
		"y": -2.458190501,
		"x": 4.382832853,
		"label": "HP1509101_N22"
	},
	{
		"y": 4.022127203,
		"x": 10.23453382,
		"label": "HP1509101_O17"
	},
	{
		"y": -3.020400411,
		"x": 1.466122712,
		"label": "HP1509101_G11"
	},
	{
		"y": -3.384640876,
		"x": -11.45267756,
		"label": "HP1509101_D11"
	},
	{
		"y": -2.22081967,
		"x": 4.549413002,
		"label": "HP1509101_A5"
	},
	{
		"y": -4.556856388,
		"x": -11.63760977,
		"label": "HP1509101_C7"
	},
	{
		"y": 2.015247763,
		"x": 4.1528806,
		"label": "HP1509101_P24"
	},
	{
		"y": 1.218844627,
		"x": 5.230954367,
		"label": "HP1509101_P8"
	},
	{
		"y": 2.173681786,
		"x": 2.241988779,
		"label": "HP1509101_L14"
	},
	{
		"y": 4.039167245,
		"x": 10.70087537,
		"label": "HP1509101_C6"
	},
	{
		"y": -3.223095716,
		"x": -11.02276425,
		"label": "HP1509101_D4"
	},
	{
		"y": 0.215234324,
		"x": 3.457648495,
		"label": "HP1509101_O16"
	},
	{
		"y": -3.248417173,
		"x": -11.80441704,
		"label": "HP1509101_D6"
	},
	{
		"y": -2.597458301,
		"x": -5.495615818,
		"label": "HP1509101_E18"
	},
	{
		"y": 1.557085936,
		"x": 0.07781518,
		"label": "HP1509101_O11"
	},
	{
		"y": 4.439431529,
		"x": 9.789151382,
		"label": "HP1509101_F22"
	},
	{
		"y": -3.122030755,
		"x": 3.073043004,
		"label": "HP1509101_H15"
	},
	{
		"y": -3.41532044,
		"x": -11.32694311,
		"label": "HP1509101_D1"
	},
	{
		"y": 0.20866513,
		"x": 4.764469707,
		"label": "HP1509101_I18"
	},
	{
		"y": -0.121110907,
		"x": 3.409819193,
		"label": "HP1509101_N20"
	},
	{
		"y": -3.233807358,
		"x": -8.713813806,
		"label": "HP1509101_A23"
	},
	{
		"y": 1.302586724,
		"x": 1.708521386,
		"label": "HP1509101_H13"
	},
	{
		"y": -1.146486929,
		"x": 4.828194621,
		"label": "HP1509101_A20"
	},
	{
		"y": -0.771484339,
		"x": 4.942025946,
		"label": "HP1509101_M24"
	},
	{
		"y": 0.980875482,
		"x": 3.355114213,
		"label": "HP1509101_I24"
	},
	{
		"y": -3.124016014,
		"x": -10.98471145,
		"label": "HP1509101_F5"
	},
	{
		"y": 0.129957032,
		"x": 3.45893343,
		"label": "HP1509101_G16"
	},
	{
		"y": -3.545087612,
		"x": -11.26431201,
		"label": "HP1509101_B18"
	},
	{
		"y": 4.456144402,
		"x": 9.943337972,
		"label": "HP1509101_F7"
	},
	{
		"y": 3.038945417,
		"x": 2.218451126,
		"label": "HP1509101_H5"
	},
	{
		"y": 0.393809775,
		"x": 4.480251843,
		"label": "HP1509101_M8"
	},
	{
		"y": -2.716003846,
		"x": -11.70399586,
		"label": "HP1509101_K3"
	},
	{
		"y": -3.159835396,
		"x": -10.92168346,
		"label": "HP1509101_H2"
	},
	{
		"y": -3.290397191,
		"x": 2.440429985,
		"label": "HP1509101_I13"
	},
	{
		"y": 0.431722382,
		"x": 4.346512521,
		"label": "HP1509101_J6"
	},
	{
		"y": -2.43111866,
		"x": -0.960901324,
		"label": "HP1509101_C14"
	},
	{
		"y": -2.856121487,
		"x": -11.21892683,
		"label": "HP1509101_D14"
	},
	{
		"y": 2.701770618,
		"x": 9.319258114,
		"label": "HP1509101_B15"
	},
	{
		"y": 0.486399945,
		"x": 1.436486504,
		"label": "HP1509101_K8"
	},
	{
		"y": 2.58749397,
		"x": 2.179673868,
		"label": "HP1509101_G12"
	},
	{
		"y": -3.802229509,
		"x": -11.43555349,
		"label": "HP1509101_H4"
	},
	{
		"y": 5.661883632,
		"x": 9.688117659,
		"label": "HP1509101_E10"
	},
	{
		"y": -4.097823237,
		"x": -8.919523303,
		"label": "HP1509101_A6"
	},
	{
		"y": -3.238916329,
		"x": -11.70716857,
		"label": "HP1509101_C17"
	},
	{
		"y": 4.356564483,
		"x": 10.45085458,
		"label": "HP1509101_E9"
	},
	{
		"y": 2.989828791,
		"x": 7.215818569,
		"label": "HP1509101_F23"
	},
	{
		"y": -3.311460006,
		"x": -11.19740083,
		"label": "HP1509101_K14"
	},
	{
		"y": 2.796123011,
		"x": 9.727806659,
		"label": "HP1509101_C19"
	},
	{
		"y": 4.463665496,
		"x": 10.50341176,
		"label": "HP1509101_A17"
	},
	{
		"y": 4.52041465,
		"x": 9.767118048,
		"label": "HP1509101_H20"
	},
	{
		"y": 1.369643705,
		"x": 1.440942085,
		"label": "HP1509101_O4"
	},
	{
		"y": -3.102987687,
		"x": -10.96206976,
		"label": "HP1509101_B3"
	},
	{
		"y": -2.932827386,
		"x": -11.89848603,
		"label": "HP1509101_I7"
	},
	{
		"y": 2.775595249,
		"x": 7.066591093,
		"label": "HP1509101_G21"
	},
	{
		"y": 0.028598562,
		"x": 3.452406639,
		"label": "HP1509101_M10"
	},
	{
		"y": -2.772851238,
		"x": 0.863747434,
		"label": "HP1509101_C16"
	},
	{
		"y": -0.087827876,
		"x": 3.435157839,
		"label": "HP1509101_B10"
	},
	{
		"y": 1.414816965,
		"x": 3.719027471,
		"label": "HP1509101_P15"
	},
	{
		"y": -2.825278733,
		"x": -11.98952385,
		"label": "HP1509101_C15"
	},
	{
		"y": -3.329553783,
		"x": -12.40773804,
		"label": "HP1509101_L7"
	},
	{
		"y": -3.609768123,
		"x": -11.63516298,
		"label": "HP1509101_G13"
	},
	{
		"y": -2.96889332,
		"x": 3.533520592,
		"label": "HP1509101_C24"
	},
	{
		"y": -0.571698372,
		"x": 4.293271797,
		"label": "HP1509101_G17"
	},
	{
		"y": 4.565146098,
		"x": 10.55161405,
		"label": "HP1509101_D21"
	},
	{
		"y": -1.711469141,
		"x": 4.819430799,
		"label": "HP1509101_K23"
	},
	{
		"y": 0.029596746,
		"x": 3.386236689,
		"label": "HP1509101_J24"
	},
	{
		"y": 4.71065529,
		"x": 10.03707556,
		"label": "HP1509101_I6"
	},
	{
		"y": -0.858797353,
		"x": -7.554859238,
		"label": "HP1509101_K4"
	},
	{
		"y": -2.24223204,
		"x": -0.74363854,
		"label": "HP1509101_J1"
	},
	{
		"y": 1.329716792,
		"x": 1.911554136,
		"label": "HP1509101_L23"
	},
	{
		"y": 2.839865525,
		"x": 8.969803475,
		"label": "HP1509101_K18"
	},
	{
		"y": 0.209487391,
		"x": 3.5412065,
		"label": "HP1509101_O12"
	},
	{
		"y": -4.019411458,
		"x": -11.53033383,
		"label": "HP1509101_L1"
	},
	{
		"y": -3.303441756,
		"x": -10.30293309,
		"label": "HP1504901_E22"
	},
	{
		"y": -3.634804261,
		"x": -10.26065136,
		"label": "HP1504901_C21"
	},
	{
		"y": -4.328864497,
		"x": -9.704385787,
		"label": "HP1504901_I20"
	},
	{
		"y": -3.664898034,
		"x": -9.933111518,
		"label": "HP1504901_M20"
	},
	{
		"y": -1.378889659,
		"x": 0.748104007,
		"label": "HP1504901_D15"
	},
	{
		"y": 2.751893328,
		"x": 0.048109152,
		"label": "HP1504901_O20"
	},
	{
		"y": -3.475646091,
		"x": -10.36379888,
		"label": "HP1504901_E19"
	},
	{
		"y": 1.281499287,
		"x": -0.387828598,
		"label": "HP1504901_K20"
	},
	{
		"y": -0.42243198,
		"x": -0.609097083,
		"label": "HP1504901_L12"
	},
	{
		"y": 2.58290577,
		"x": 0.162884939,
		"label": "HP1504901_E16"
	},
	{
		"y": -0.013158081,
		"x": -0.36934714,
		"label": "HP1504901_N9"
	},
	{
		"y": -0.558315241,
		"x": 0.606509014,
		"label": "HP1504901_F14"
	},
	{
		"y": 2.689221796,
		"x": 6.889763239,
		"label": "HP1504901_I19"
	},
	{
		"y": 1.357865037,
		"x": -0.502923861,
		"label": "HP1504901_I7"
	},
	{
		"y": 3.10084907,
		"x": 9.791044393,
		"label": "HP1504901_J10"
	},
	{
		"y": -1.784436186,
		"x": 0.102501511,
		"label": "HP1504901_B15"
	},
	{
		"y": 2.606730613,
		"x": 0.009655118,
		"label": "HP1504901_L8"
	},
	{
		"y": -1.424005882,
		"x": 0.933824142,
		"label": "HP1504901_B3"
	},
	{
		"y": 1.285434994,
		"x": -0.323417965,
		"label": "HP1504901_A21"
	},
	{
		"y": -3.197017344,
		"x": -10.52046809,
		"label": "HP1504901_P2"
	},
	{
		"y": -2.691287161,
		"x": -9.620433516,
		"label": "HP1504901_L10"
	},
	{
		"y": -3.364106988,
		"x": -10.40664565,
		"label": "HP1504901_O15"
	},
	{
		"y": -3.1349978,
		"x": -10.25238596,
		"label": "HP1504901_J1"
	},
	{
		"y": -3.378090853,
		"x": -9.66146718,
		"label": "HP1504901_L2"
	},
	{
		"y": -3.125156137,
		"x": -10.30278807,
		"label": "HP1504901_L11"
	},
	{
		"y": -3.055784908,
		"x": -10.26328401,
		"label": "HP1504901_H23"
	},
	{
		"y": -0.570964687,
		"x": -0.38905489,
		"label": "HP1504901_F15"
	},
	{
		"y": -2.90494487,
		"x": -9.83721043,
		"label": "HP1504901_G23"
	},
	{
		"y": -3.820591837,
		"x": -10.24725353,
		"label": "HP1504901_C20"
	},
	{
		"y": -3.425128791,
		"x": -10.32846863,
		"label": "HP1504901_A8"
	},
	{
		"y": -3.15286378,
		"x": -9.690169168,
		"label": "HP1504901_J11"
	},
	{
		"y": 3.13586933,
		"x": 9.734543276,
		"label": "HP1504901_O11"
	},
	{
		"y": -1.448069994,
		"x": 1.006831156,
		"label": "HP1504901_N2"
	},
	{
		"y": -3.491699962,
		"x": -10.29802644,
		"label": "HP1504901_C8"
	},
	{
		"y": -0.797634336,
		"x": -0.546115383,
		"label": "HP1504901_G20"
	},
	{
		"y": -3.758997689,
		"x": -10.09219882,
		"label": "HP1504901_B12"
	},
	{
		"y": -1.533965493,
		"x": 0.605192892,
		"label": "HP1504901_H12"
	},
	{
		"y": -1.886565658,
		"x": -0.349989913,
		"label": "HP1504901_J12"
	},
	{
		"y": -1.319522546,
		"x": 1.529076609,
		"label": "HP1504901_D12"
	},
	{
		"y": -3.426230135,
		"x": -10.54994211,
		"label": "HP1504901_H15"
	},
	{
		"y": 1.845745636,
		"x": 0.164894807,
		"label": "HP1504901_F2"
	},
	{
		"y": -3.324494636,
		"x": -10.05437968,
		"label": "HP1504901_N11"
	},
	{
		"y": -0.125309467,
		"x": 1.438653211,
		"label": "HP1504901_I23"
	},
	{
		"y": 2.535859382,
		"x": 0.073218498,
		"label": "HP1504901_G8"
	},
	{
		"y": 2.412134242,
		"x": 0.549094204,
		"label": "HP1504901_B22"
	},
	{
		"y": -2.006717573,
		"x": 0.383142597,
		"label": "HP1504901_F12"
	},
	{
		"y": -1.408539955,
		"x": 0.826100264,
		"label": "HP1504901_H10"
	},
	{
		"y": 2.730772443,
		"x": 9.657781463,
		"label": "HP1504901_P11"
	},
	{
		"y": -3.267370706,
		"x": -10.18359589,
		"label": "HP1504901_K16"
	},
	{
		"y": -3.320541059,
		"x": -10.2793348,
		"label": "HP1504901_N3"
	},
	{
		"y": -1.617142916,
		"x": 1.29164732,
		"label": "HP1504901_O7"
	},
	{
		"y": 2.45799409,
		"x": 0.236586031,
		"label": "HP1504901_P14"
	},
	{
		"y": -3.106724047,
		"x": -9.928766845,
		"label": "HP1504901_J2"
	},
	{
		"y": -3.297146034,
		"x": -10.24701029,
		"label": "HP1504901_K9"
	},
	{
		"y": -0.242638708,
		"x": -0.139497566,
		"label": "HP1504901_H19"
	},
	{
		"y": 2.992374527,
		"x": 9.766386141,
		"label": "HP1504901_F8"
	},
	{
		"y": -0.985095238,
		"x": 0.417974672,
		"label": "HP1504901_P21"
	},
	{
		"y": 3.063851845,
		"x": 9.740420087,
		"label": "HP1504901_N18"
	},
	{
		"y": -3.245316501,
		"x": -10.64003054,
		"label": "HP1504901_P5"
	},
	{
		"y": -1.964283826,
		"x": -0.067658123,
		"label": "HP1504901_G24"
	},
	{
		"y": -3.856398072,
		"x": -9.93545543,
		"label": "HP1504901_K21"
	},
	{
		"y": -3.365064125,
		"x": -10.27845361,
		"label": "HP1504901_E4"
	},
	{
		"y": -3.117091408,
		"x": -10.37482051,
		"label": "HP1504901_K3"
	},
	{
		"y": -3.126728514,
		"x": -10.26688581,
		"label": "HP1504901_M14"
	},
	{
		"y": -0.587045638,
		"x": -0.39511769,
		"label": "HP1504901_B8"
	},
	{
		"y": -3.235057452,
		"x": -10.64111748,
		"label": "HP1504901_H3"
	},
	{
		"y": -3.305110923,
		"x": -10.00693277,
		"label": "HP1504901_M8"
	},
	{
		"y": -3.263314618,
		"x": -10.350686,
		"label": "HP1504901_E8"
	},
	{
		"y": 2.499666279,
		"x": 0.150491731,
		"label": "HP1504901_N13"
	},
	{
		"y": 2.456149241,
		"x": -0.408140715,
		"label": "HP1504901_L20"
	},
	{
		"y": -1.693278465,
		"x": 1.346268517,
		"label": "HP1504901_K12"
	},
	{
		"y": -3.377441776,
		"x": -10.40827051,
		"label": "HP1504901_B19"
	},
	{
		"y": -3.180011508,
		"x": -9.923430029,
		"label": "HP1504901_J16"
	},
	{
		"y": 2.612170067,
		"x": -0.118673747,
		"label": "HP1504901_H22"
	},
	{
		"y": 1.736662924,
		"x": 3.597419259,
		"label": "HP1504901_J8"
	},
	{
		"y": -1.30908098,
		"x": 1.137421936,
		"label": "HP1504901_C11"
	},
	{
		"y": -3.222181134,
		"x": -10.0869693,
		"label": "HP1504901_K2"
	},
	{
		"y": -1.068339408,
		"x": -0.199752137,
		"label": "HP1504901_O1"
	},
	{
		"y": -1.795159986,
		"x": 0.370131728,
		"label": "HP1504901_B16"
	},
	{
		"y": 2.598271722,
		"x": 0.155434751,
		"label": "HP1504901_L17"
	},
	{
		"y": 2.292876101,
		"x": -0.596018493,
		"label": "HP1504901_O18"
	},
	{
		"y": -0.32519382,
		"x": 0.079964331,
		"label": "HP1504901_F18"
	},
	{
		"y": 2.633051154,
		"x": 0.451709304,
		"label": "HP1504901_C17"
	},
	{
		"y": -3.265118687,
		"x": -9.900641777,
		"label": "HP1504901_K10"
	},
	{
		"y": 2.557175914,
		"x": 0.220263266,
		"label": "HP1504901_B11"
	},
	{
		"y": 2.460429642,
		"x": 0.722418206,
		"label": "HP1504901_F17"
	},
	{
		"y": -3.145036417,
		"x": -10.12665696,
		"label": "HP1504901_M2"
	},
	{
		"y": -3.234900379,
		"x": -10.2216312,
		"label": "HP1504901_D19"
	},
	{
		"y": 1.092347503,
		"x": -0.609639846,
		"label": "HP1504901_D6"
	},
	{
		"y": -3.899474768,
		"x": -10.01514201,
		"label": "HP1504901_C12"
	},
	{
		"y": 2.185952998,
		"x": 3.312914231,
		"label": "HP1504901_D18"
	},
	{
		"y": 2.500454927,
		"x": 0.134465737,
		"label": "HP1504901_K19"
	},
	{
		"y": -1.56607742,
		"x": 0.761046256,
		"label": "HP1504901_F6"
	},
	{
		"y": -1.408205582,
		"x": 1.445934831,
		"label": "HP1504901_P10"
	},
	{
		"y": -1.109933674,
		"x": 0.917722032,
		"label": "HP1504901_D16"
	},
	{
		"y": -3.731518337,
		"x": -10.5816779,
		"label": "HP1504901_B5"
	},
	{
		"y": -4.668548293,
		"x": -11.08273747,
		"label": "HP1504901_M5"
	},
	{
		"y": -3.848951405,
		"x": -10.30088126,
		"label": "HP1504901_C4"
	},
	{
		"y": -0.325003592,
		"x": -0.393075107,
		"label": "HP1504901_H14"
	},
	{
		"y": -1.563563129,
		"x": 0.861211737,
		"label": "HP1504901_M3"
	},
	{
		"y": 0.224164356,
		"x": -0.251919075,
		"label": "HP1504901_F1"
	},
	{
		"y": 2.940489868,
		"x": 9.697325878,
		"label": "HP1504901_I10"
	},
	{
		"y": -3.230180973,
		"x": -10.60975001,
		"label": "HP1504901_E5"
	},
	{
		"y": -2.807188007,
		"x": -10.04228939,
		"label": "HP1504901_F7"
	},
	{
		"y": 2.619602611,
		"x": 0.465663641,
		"label": "HP1504901_O8"
	},
	{
		"y": -1.773608976,
		"x": 1.354197014,
		"label": "HP1504901_D23"
	},
	{
		"y": 2.55423374,
		"x": 6.908302271,
		"label": "HP1504901_I17"
	},
	{
		"y": 1.903581026,
		"x": -0.222772301,
		"label": "HP1504901_B13"
	},
	{
		"y": 2.578304344,
		"x": 6.936273154,
		"label": "HP1504901_C2"
	},
	{
		"y": -3.216969791,
		"x": -10.63355997,
		"label": "HP1504901_K24"
	},
	{
		"y": 0.754764403,
		"x": -0.398174563,
		"label": "HP1504901_B20"
	},
	{
		"y": -3.158575703,
		"x": -10.6014927,
		"label": "HP1504901_P8"
	},
	{
		"y": -3.352600206,
		"x": -10.11073954,
		"label": "HP1504901_O12"
	},
	{
		"y": 2.594891621,
		"x": 9.33263282,
		"label": "HP1504901_O14"
	},
	{
		"y": 2.394274553,
		"x": -0.773077564,
		"label": "HP1504901_F13"
	},
	{
		"y": -1.598475106,
		"x": -0.101666374,
		"label": "HP1504901_M12"
	},
	{
		"y": 2.485950574,
		"x": 0.226028636,
		"label": "HP1504901_H17"
	},
	{
		"y": -1.672078681,
		"x": 0.509970254,
		"label": "HP1504901_H4"
	},
	{
		"y": 2.69633576,
		"x": 6.875436832,
		"label": "HP1504901_B24"
	},
	{
		"y": 2.566300607,
		"x": -0.086773844,
		"label": "HP1504901_H5"
	},
	{
		"y": 2.934461612,
		"x": 9.629923246,
		"label": "HP1504901_P7"
	},
	{
		"y": -3.304797247,
		"x": -10.51871997,
		"label": "HP1504901_E17"
	},
	{
		"y": -1.853090663,
		"x": 0.432113799,
		"label": "HP1504901_B1"
	},
	{
		"y": 2.520989677,
		"x": 0.255080153,
		"label": "HP1504901_F11"
	},
	{
		"y": 5.337452943,
		"x": 7.457524046,
		"label": "HP1504901_F23"
	},
	{
		"y": -1.690135918,
		"x": 0.257334589,
		"label": "HP1504901_G9"
	},
	{
		"y": 0.039855612,
		"x": -0.400184208,
		"label": "HP1504901_O21"
	},
	{
		"y": -1.300274742,
		"x": 0.673560309,
		"label": "HP1504901_E24"
	},
	{
		"y": -4.024419373,
		"x": -10.38651743,
		"label": "HP1504901_K11"
	},
	{
		"y": 2.53783328,
		"x": 0.163181845,
		"label": "HP1504901_G12"
	},
	{
		"y": 2.520142529,
		"x": 0.058287319,
		"label": "HP1504901_A16"
	},
	{
		"y": -1.868759921,
		"x": 0.302744953,
		"label": "HP1504901_A14"
	},
	{
		"y": -3.169891191,
		"x": -9.900389717,
		"label": "HP1504901_G7"
	},
	{
		"y": 2.421330558,
		"x": 6.613766385,
		"label": "HP1504901_P9"
	},
	{
		"y": -1.564019517,
		"x": 0.791684744,
		"label": "HP1504901_O9"
	},
	{
		"y": 2.445429433,
		"x": 6.87700874,
		"label": "HP1504901_P3"
	},
	{
		"y": -1.355562709,
		"x": 0.751911406,
		"label": "HP1504901_G3"
	},
	{
		"y": -3.289938367,
		"x": -10.26121151,
		"label": "HP1504901_O19"
	},
	{
		"y": -3.257117979,
		"x": -10.6001391,
		"label": "HP1504901_C19"
	},
	{
		"y": -3.670179394,
		"x": -9.656232878,
		"label": "HP1504901_M16"
	},
	{
		"y": -3.731510461,
		"x": -10.54112968,
		"label": "HP1504901_C5"
	},
	{
		"y": -3.351023264,
		"x": -10.68890797,
		"label": "HP1504901_C24"
	},
	{
		"y": -3.0544909,
		"x": -9.967115215,
		"label": "HP1504901_O23"
	},
	{
		"y": -3.263967307,
		"x": -10.46870905,
		"label": "HP1504901_G5"
	},
	{
		"y": -2.890362515,
		"x": -10.4323107,
		"label": "HP1504901_K15"
	},
	{
		"y": -1.554338554,
		"x": 0.892482862,
		"label": "HP1504901_F5"
	},
	{
		"y": 2.708759753,
		"x": 6.867621501,
		"label": "HP1504901_M19"
	},
	{
		"y": -3.210521557,
		"x": -10.5800806,
		"label": "HP1504901_I1"
	},
	{
		"y": 2.474180037,
		"x": 6.817574614,
		"label": "HP1504901_A23"
	},
	{
		"y": -3.845275431,
		"x": -10.40004261,
		"label": "HP1504901_A11"
	},
	{
		"y": -1.181521463,
		"x": 0.713855722,
		"label": "HP1504901_K1"
	},
	{
		"y": -3.250274683,
		"x": -10.26926599,
		"label": "HP1504901_N14"
	},
	{
		"y": 2.364109234,
		"x": 6.739930786,
		"label": "HP1504901_P18"
	},
	{
		"y": -3.548766802,
		"x": -10.64523378,
		"label": "HP1504901_C15"
	},
	{
		"y": -3.239151643,
		"x": -10.64786003,
		"label": "HP1504901_L4"
	},
	{
		"y": -3.731015216,
		"x": -8.23423698,
		"label": "HP1504901_P16"
	},
	{
		"y": 2.643614195,
		"x": 6.809763845,
		"label": "HP1504901_E9"
	},
	{
		"y": -1.602632586,
		"x": 1.057809244,
		"label": "HP1504901_C16"
	},
	{
		"y": -3.268712629,
		"x": -10.52209988,
		"label": "HP1504901_P19"
	},
	{
		"y": 2.076500814,
		"x": -1.185364731,
		"label": "HP1504901_G21"
	},
	{
		"y": -0.612482792,
		"x": -0.073226568,
		"label": "HP1504901_A5"
	},
	{
		"y": -3.853574198,
		"x": -10.63799198,
		"label": "HP1504901_A15"
	},
	{
		"y": 2.660380575,
		"x": 6.853242219,
		"label": "HP1504901_J24"
	},
	{
		"y": 2.49287773,
		"x": -0.028800504,
		"label": "HP1504901_A3"
	},
	{
		"y": -3.084045994,
		"x": -10.49094315,
		"label": "HP1504901_E7"
	},
	{
		"y": -0.556725204,
		"x": -0.514557949,
		"label": "HP1504901_L18"
	},
	{
		"y": -1.653832835,
		"x": 0.741797251,
		"label": "HP1504901_H11"
	},
	{
		"y": -1.832323572,
		"x": 0.236289488,
		"label": "HP1504901_I24"
	},
	{
		"y": -3.28955773,
		"x": -9.497222921,
		"label": "HP1504901_L7"
	},
	{
		"y": 4.643572803,
		"x": 8.048423355,
		"label": "HP1504901_D13"
	},
	{
		"y": -1.856992027,
		"x": 0.713095893,
		"label": "HP1504901_E18"
	},
	{
		"y": -3.474528376,
		"x": -10.19212537,
		"label": "HP1504901_H13"
	},
	{
		"y": -1.514735872,
		"x": 0.701595291,
		"label": "HP1504901_H6"
	},
	{
		"y": -2.373430993,
		"x": -9.243187274,
		"label": "HP1504901_J13"
	},
	{
		"y": -1.75312407,
		"x": 0.937479975,
		"label": "HP1504901_J17"
	},
	{
		"y": -1.258331201,
		"x": 0.698299152,
		"label": "HP1504901_N1"
	},
	{
		"y": -3.713793074,
		"x": -10.17413324,
		"label": "HP1504901_A13"
	},
	{
		"y": -3.219217444,
		"x": -10.72242334,
		"label": "HP1504901_L6"
	},
	{
		"y": 1.366924591,
		"x": -0.179434493,
		"label": "HP1504901_B4"
	},
	{
		"y": 2.495807962,
		"x": 0.299671023,
		"label": "HP1504901_J7"
	},
	{
		"y": -3.249412445,
		"x": -10.26351144,
		"label": "HP1504901_E11"
	},
	{
		"y": 1.591933362,
		"x": 0.599476683,
		"label": "HP1504901_B7"
	},
	{
		"y": -3.362803917,
		"x": -10.45561451,
		"label": "HP1504901_P4"
	},
	{
		"y": 2.667706164,
		"x": 6.807446259,
		"label": "HP1504901_J18"
	},
	{
		"y": -3.824528637,
		"x": -9.692235098,
		"label": "HP1504901_K13"
	},
	{
		"y": -3.798244195,
		"x": -10.43864487,
		"label": "HP1504901_M6"
	},
	{
		"y": 2.60639976,
		"x": 6.878044024,
		"label": "HP1504901_A22"
	},
	{
		"y": -1.871467656,
		"x": 0.295714169,
		"label": "HP1504901_D22"
	},
	{
		"y": -3.856061596,
		"x": -10.62998522,
		"label": "HP1504901_A7"
	},
	{
		"y": 2.485709313,
		"x": 0.156656754,
		"label": "HP1504901_G4"
	},
	{
		"y": 2.944045099,
		"x": 9.726367082,
		"label": "HP1504901_E6"
	},
	{
		"y": -0.455284897,
		"x": 0.061787074,
		"label": "HP1504901_D9"
	},
	{
		"y": -4.067020476,
		"x": -10.46910053,
		"label": "HP1504901_A4"
	},
	{
		"y": -3.803707547,
		"x": -10.41156351,
		"label": "HP1504901_G1"
	},
	{
		"y": -1.27716004,
		"x": 1.20849285,
		"label": "HP1504901_N22"
	},
	{
		"y": -3.384491228,
		"x": -10.49919682,
		"label": "HP1504901_A6"
	},
	{
		"y": 2.136377985,
		"x": 0.331605056,
		"label": "HP1504901_J15"
	},
	{
		"y": -3.500245909,
		"x": -10.35965183,
		"label": "HP1504901_A17"
	},
	{
		"y": -0.883820581,
		"x": -0.239729088,
		"label": "HP1504901_K14"
	},
	{
		"y": -0.192528153,
		"x": -0.078628218,
		"label": "HP1504901_N15"
	},
	{
		"y": -3.311326358,
		"x": -10.09144306,
		"label": "HP1504901_C18"
	},
	{
		"y": -1.804569506,
		"x": 1.31978246,
		"label": "HP1504901_J20"
	},
	{
		"y": -1.562307491,
		"x": 0.795497208,
		"label": "HP1504901_J23"
	},
	{
		"y": 2.655759949,
		"x": 9.71962681,
		"label": "HP1504901_L16"
	},
	{
		"y": -3.428291077,
		"x": -10.72959733,
		"label": "HP1504901_E1"
	},
	{
		"y": 2.603981209,
		"x": 3.308147849,
		"label": "HP1504901_C13"
	},
	{
		"y": -4.102710948,
		"x": -10.3305533,
		"label": "HP1504901_A12"
	},
	{
		"y": -3.241531137,
		"x": -10.46729954,
		"label": "HP1504901_H20"
	},
	{
		"y": -1.17895586,
		"x": -1.597227407,
		"label": "HP1504901_M7"
	},
	{
		"y": -0.56737237,
		"x": -0.11424052,
		"label": "HP1504901_B23"
	},
	{
		"y": -3.856846131,
		"x": -10.49564358,
		"label": "HP1504901_E3"
	},
	{
		"y": -1.641028002,
		"x": 1.040171885,
		"label": "HP1504901_F19"
	},
	{
		"y": 1.374235665,
		"x": 0.419301846,
		"label": "HP1504901_J4"
	},
	{
		"y": -3.376081845,
		"x": -10.13333305,
		"label": "HP1504901_H24"
	},
	{
		"y": -3.101628238,
		"x": -10.29137568,
		"label": "HP1504901_H7"
	},
	{
		"y": -3.306521057,
		"x": -9.781537993,
		"label": "HP1504901_O2"
	},
	{
		"y": -3.233839086,
		"x": -10.13820827,
		"label": "HP1504901_O22"
	},
	{
		"y": -3.778019902,
		"x": -9.151933963,
		"label": "HP1504901_C9"
	},
	{
		"y": -3.492242024,
		"x": -10.30913267,
		"label": "HP1504901_I15"
	},
	{
		"y": -3.418109762,
		"x": -10.35779748,
		"label": "HP1504901_L15"
	},
	{
		"y": 2.615239133,
		"x": 0.140329596,
		"label": "HP1504901_K22"
	},
	{
		"y": -0.855847016,
		"x": 0.230814032,
		"label": "HP1504901_O5"
	},
	{
		"y": -0.816816056,
		"x": -0.457265385,
		"label": "HP1504901_J9"
	},
	{
		"y": -0.542129702,
		"x": -0.464376942,
		"label": "HP1504901_M4"
	},
	{
		"y": -3.128056446,
		"x": -9.242088756,
		"label": "HP1504901_E20"
	},
	{
		"y": -3.262881312,
		"x": -10.07651494,
		"label": "HP1504901_M10"
	},
	{
		"y": -1.244138323,
		"x": 1.055725328,
		"label": "HP1504901_G2"
	},
	{
		"y": -3.210728294,
		"x": -10.21908674,
		"label": "HP1504901_K4"
	},
	{
		"y": -1.843147179,
		"x": 1.559204829,
		"label": "HP1504901_N16"
	},
	{
		"y": 2.519756163,
		"x": 6.920945926,
		"label": "HP1504901_G10"
	},
	{
		"y": 1.455954304,
		"x": 3.771326795,
		"label": "HP1504901_F24"
	},
	{
		"y": -1.775249014,
		"x": 0.961014274,
		"label": "HP1504901_O17"
	},
	{
		"y": -1.746682531,
		"x": 0.594466825,
		"label": "HP1504901_A19"
	},
	{
		"y": -1.767354129,
		"x": 0.923057093,
		"label": "HP1504901_D5"
	},
	{
		"y": -3.23098512,
		"x": -10.38455329,
		"label": "HP1504901_P23"
	},
	{
		"y": -3.192983039,
		"x": -10.13561403,
		"label": "HP1504901_F22"
	},
	{
		"y": -3.390879119,
		"x": -10.30548092,
		"label": "HP1504901_L24"
	},
	{
		"y": -3.114802153,
		"x": -10.17527798,
		"label": "HP1504901_I9"
	},
	{
		"y": -3.539886547,
		"x": -9.315493927,
		"label": "HP1504901_L23"
	},
	{
		"y": -0.990980505,
		"x": 0.879206177,
		"label": "HP1504901_D1"
	},
	{
		"y": 2.508301057,
		"x": 6.898839212,
		"label": "HP1504901_F16"
	},
	{
		"y": 0.209698995,
		"x": -0.492219424,
		"label": "HP1504901_B6"
	},
	{
		"y": -3.639372471,
		"x": -8.744326565,
		"label": "HP1504901_E12"
	},
	{
		"y": -0.245714633,
		"x": 0.258825829,
		"label": "HP1504901_E23"
	},
	{
		"y": 2.676650747,
		"x": 0.128314147,
		"label": "HP1504901_N8"
	},
	{
		"y": -3.238304044,
		"x": -9.853998105,
		"label": "HP1504901_I16"
	},
	{
		"y": -3.28837698,
		"x": -10.45283658,
		"label": "HP1504901_K17"
	},
	{
		"y": 1.634867957,
		"x": 4.295373673,
		"label": "HP1504901_N12"
	},
	{
		"y": -1.856546546,
		"x": 0.145018593,
		"label": "HP1504901_H8"
	},
	{
		"y": -1.434546421,
		"x": 1.032052113,
		"label": "HP1504901_M24"
	},
	{
		"y": -1.852476106,
		"x": 0.137631823,
		"label": "HP1504901_L1"
	},
	{
		"y": 1.35760101,
		"x": -0.291648906,
		"label": "HP1504901_B9"
	},
	{
		"y": -3.446388352,
		"x": -10.49422989,
		"label": "HP1504901_K7"
	},
	{
		"y": 3.333623872,
		"x": 8.879352848,
		"label": "HP1504901_O4"
	},
	{
		"y": -3.347401258,
		"x": -10.34085045,
		"label": "HP1504901_B17"
	},
	{
		"y": -1.750456627,
		"x": 0.895839423,
		"label": "HP1504901_O10"
	},
	{
		"y": 2.474662871,
		"x": 6.687318885,
		"label": "HP1504901_M11"
	},
	{
		"y": -1.790383269,
		"x": 0.748499013,
		"label": "HP1504901_B18"
	},
	{
		"y": -3.044165924,
		"x": -9.804279108,
		"label": "HP1504901_O13"
	},
	{
		"y": -1.787999518,
		"x": 0.719994388,
		"label": "HP1504901_F9"
	},
	{
		"y": -3.588619804,
		"x": -10.14572932,
		"label": "HP1504901_A18"
	},
	{
		"y": -3.6758366,
		"x": -10.40194192,
		"label": "HP1504901_H9"
	},
	{
		"y": -1.877982347,
		"x": 1.105558628,
		"label": "HP1504901_F20"
	},
	{
		"y": -3.223306334,
		"x": -9.612408691,
		"label": "HP1504901_G14"
	},
	{
		"y": -3.608831259,
		"x": -10.53063291,
		"label": "HP1504901_C7"
	},
	{
		"y": -3.286469264,
		"x": -10.68101594,
		"label": "HP1504901_A24"
	},
	{
		"y": -1.318184594,
		"x": 0.646750047,
		"label": "HP1504901_O6"
	},
	{
		"y": 2.939106837,
		"x": 9.736442409,
		"label": "HP1504901_B14"
	},
	{
		"y": -3.202562099,
		"x": -10.28400554,
		"label": "HP1504901_I4"
	},
	{
		"y": 2.419345596,
		"x": 6.80014874,
		"label": "HP1504901_D4"
	},
	{
		"y": -3.230513381,
		"x": -10.46086804,
		"label": "HP1504901_M22"
	},
	{
		"y": -3.521204898,
		"x": -8.958123648,
		"label": "HP1504901_J19"
	},
	{
		"y": 1.509635512,
		"x": 0.931240084,
		"label": "HP1504901_E10"
	},
	{
		"y": -3.206168823,
		"x": -10.05367256,
		"label": "HP1504901_D10"
	},
	{
		"y": -1.898273711,
		"x": 0.233213056,
		"label": "HP1504901_L13"
	},
	{
		"y": -3.324467315,
		"x": -10.70160696,
		"label": "HP1504901_A1"
	},
	{
		"y": 2.462009924,
		"x": -0.056613567,
		"label": "HP1504901_L22"
	},
	{
		"y": -0.362231334,
		"x": -0.420008062,
		"label": "HP1504901_O24"
	},
	{
		"y": -3.179593559,
		"x": -9.436051737,
		"label": "HP1504901_L19"
	},
	{
		"y": -1.741295314,
		"x": 0.430767769,
		"label": "HP1504901_G13"
	},
	{
		"y": -1.565227542,
		"x": 1.048793775,
		"label": "HP1504901_J22"
	},
	{
		"y": -3.327939415,
		"x": -10.53047036,
		"label": "HP1504901_I5"
	},
	{
		"y": -3.259572129,
		"x": -10.4677621,
		"label": "HP1504901_N20"
	},
	{
		"y": -1.321425338,
		"x": 0.967993685,
		"label": "HP1504901_L14"
	},
	{
		"y": -3.005510449,
		"x": -10.14215043,
		"label": "HP1504901_I11"
	},
	{
		"y": -1.546364489,
		"x": 0.504719966,
		"label": "HP1504901_A2"
	},
	{
		"y": -3.396371701,
		"x": -10.29620813,
		"label": "HP1504901_M17"
	},
	{
		"y": -0.986457329,
		"x": 1.371502987,
		"label": "HP1504901_N17"
	},
	{
		"y": 0.013051963,
		"x": -0.311329732,
		"label": "HP1504901_L3"
	},
	{
		"y": -1.893455581,
		"x": 1.434386665,
		"label": "HP1504901_I3"
	},
	{
		"y": -3.155605468,
		"x": -10.00659074,
		"label": "HP1504901_J21"
	},
	{
		"y": -1.523567604,
		"x": 0.392625787,
		"label": "HP1504901_A9"
	},
	{
		"y": -3.323168014,
		"x": -10.72173806,
		"label": "HP1504901_P1"
	},
	{
		"y": -3.204089734,
		"x": -9.8346518,
		"label": "HP1504901_J14"
	},
	{
		"y": -3.563036397,
		"x": -10.13555649,
		"label": "HP1504901_K8"
	},
	{
		"y": -1.648739537,
		"x": 0.578040756,
		"label": "HP1504901_I21"
	},
	{
		"y": -3.355546378,
		"x": -10.16769294,
		"label": "HP1504901_H21"
	},
	{
		"y": 3.357478569,
		"x": 9.767527978,
		"label": "HP1504901_K23"
	},
	{
		"y": -1.814053499,
		"x": 0.380492108,
		"label": "HP1504901_G6"
	},
	{
		"y": -3.33775781,
		"x": -10.48047359,
		"label": "HP1504901_I6"
	},
	{
		"y": -4.576917566,
		"x": -10.98205271,
		"label": "HP1504901_E15"
	},
	{
		"y": -3.437554441,
		"x": -10.12828031,
		"label": "HP1504901_O3"
	},
	{
		"y": -1.740369465,
		"x": 1.409512112,
		"label": "HP1504901_O16"
	},
	{
		"y": -1.541805819,
		"x": 0.680517291,
		"label": "HP1504901_E14"
	},
	{
		"y": 3.121000467,
		"x": 9.788395769,
		"label": "HP1504901_G11"
	},
	{
		"y": -3.111684735,
		"x": -10.05894684,
		"label": "HP1504901_F21"
	},
	{
		"y": 1.378819471,
		"x": -0.133852824,
		"label": "HP1504901_N24"
	},
	{
		"y": -3.170120646,
		"x": -10.80878159,
		"label": "HP1504901_P24"
	},
	{
		"y": -3.250005019,
		"x": -10.62148572,
		"label": "HP1504901_C3"
	},
	{
		"y": -1.823366238,
		"x": 1.218084929,
		"label": "HP1504901_D17"
	},
	{
		"y": -1.649948004,
		"x": 0.480822066,
		"label": "HP1504901_K6"
	},
	{
		"y": -3.208534464,
		"x": -10.28053157,
		"label": "HP1504901_I14"
	},
	{
		"y": -4.808519484,
		"x": -10.20905132,
		"label": "HP1504901_M15"
	},
	{
		"y": -1.444491955,
		"x": 1.090347437,
		"label": "HP1504901_D2"
	},
	{
		"y": -0.728467701,
		"x": 0.453037904,
		"label": "HP1504901_I18"
	},
	{
		"y": 2.65761459,
		"x": 0.245132603,
		"label": "HP1504901_E21"
	},
	{
		"y": 2.462302555,
		"x": -0.192893269,
		"label": "HP1504901_H18"
	},
	{
		"y": -3.283409994,
		"x": -10.25716392,
		"label": "HP1504901_D20"
	},
	{
		"y": -0.836518879,
		"x": -0.042357232,
		"label": "HP1504901_D24"
	},
	{
		"y": -1.927219929,
		"x": 1.113675324,
		"label": "HP1504901_J6"
	},
	{
		"y": -1.935795685,
		"x": 1.028534026,
		"label": "HP1504901_I2"
	},
	{
		"y": 1.324039465,
		"x": 4.180309228,
		"label": "HP1504901_D14"
	},
	{
		"y": -3.584377768,
		"x": -10.63195716,
		"label": "HP1504901_C1"
	},
	{
		"y": 2.28950958,
		"x": 0.583662494,
		"label": "HP1504901_G16"
	},
	{
		"y": -2.131591737,
		"x": -0.576552584,
		"label": "HP1504901_I12"
	},
	{
		"y": -1.919728986,
		"x": 0.088167573,
		"label": "HP1504901_P20"
	},
	{
		"y": -1.561179543,
		"x": 1.04676805,
		"label": "HP1504901_M18"
	},
	{
		"y": -3.298649771,
		"x": -9.374790334,
		"label": "HP1504901_P15"
	},
	{
		"y": -3.454197644,
		"x": -9.561951487,
		"label": "HP1504901_G22"
	},
	{
		"y": -3.168091497,
		"x": -10.59174738,
		"label": "HP1504901_P22"
	},
	{
		"y": 2.538043788,
		"x": 0.45081153,
		"label": "HP1504901_J3"
	},
	{
		"y": -3.180442866,
		"x": -10.07733305,
		"label": "HP1504901_N10"
	},
	{
		"y": -3.280446312,
		"x": -10.48340341,
		"label": "HP1504901_P12"
	},
	{
		"y": -3.712513629,
		"x": -10.00365709,
		"label": "HP1504901_M9"
	},
	{
		"y": -1.641980685,
		"x": 1.079611596,
		"label": "HP1504901_F4"
	},
	{
		"y": 2.468355712,
		"x": -0.05438099,
		"label": "HP1504901_D7"
	},
	{
		"y": 1.180673854,
		"x": 0.662346606,
		"label": "HP1504901_M21"
	},
	{
		"y": -3.163205732,
		"x": -9.852466759,
		"label": "HP1504901_E13"
	},
	{
		"y": 2.453481527,
		"x": 0.119914947,
		"label": "HP1504901_B10"
	},
	{
		"y": -1.857126335,
		"x": 0.220223245,
		"label": "HP1504901_H1"
	},
	{
		"y": 2.747835496,
		"x": 9.685997793,
		"label": "HP1504901_J5"
	},
	{
		"y": -0.975044201,
		"x": 1.096104232,
		"label": "HP1504901_K5"
	},
	{
		"y": -3.69435802,
		"x": -9.776336577,
		"label": "HP1504901_M13"
	},
	{
		"y": -3.314659306,
		"x": -10.54990262,
		"label": "HP1504901_N6"
	},
	{
		"y": -1.761331199,
		"x": 0.427371177,
		"label": "HP1504901_F10"
	},
	{
		"y": 5.628457105,
		"x": 9.583455096,
		"label": "HP1504901_H16"
	},
	{
		"y": -1.604855355,
		"x": 0.210914019,
		"label": "HP1504901_G15"
	},
	{
		"y": -3.030104309,
		"x": -10.29211053,
		"label": "HP1504901_M23"
	},
	{
		"y": -1.811554634,
		"x": -0.399779554,
		"label": "HP1504901_H2"
	},
	{
		"y": 2.307494174,
		"x": -0.43111171,
		"label": "HP1504901_G18"
	},
	{
		"y": -1.575576733,
		"x": 1.445485836,
		"label": "HP1504901_N19"
	},
	{
		"y": -3.223882778,
		"x": -10.31367937,
		"label": "HP1504901_P17"
	},
	{
		"y": -3.565689497,
		"x": -9.011980734,
		"label": "HP1504901_L21"
	},
	{
		"y": -3.031841652,
		"x": -9.794132366,
		"label": "HP1504901_D11"
	},
	{
		"y": -3.274549823,
		"x": -10.72179419,
		"label": "HP1504901_P6"
	},
	{
		"y": -3.279922848,
		"x": -10.76611138,
		"label": "HP1504901_C6"
	},
	{
		"y": 1.39752024,
		"x": -0.201958187,
		"label": "HP1504901_C10"
	},
	{
		"y": -1.298121567,
		"x": 1.406635473,
		"label": "HP1504901_I8"
	},
	{
		"y": -4.038934037,
		"x": -10.28169689,
		"label": "HP1504901_D3"
	},
	{
		"y": -3.294397751,
		"x": -10.61506275,
		"label": "HP1504901_L5"
	},
	{
		"y": -0.496071435,
		"x": 0.150259132,
		"label": "HP1504901_I22"
	},
	{
		"y": -3.480159494,
		"x": -10.00291421,
		"label": "HP1504901_K18"
	},
	{
		"y": -3.064852761,
		"x": -9.891369038,
		"label": "HP1504901_D8"
	},
	{
		"y": -3.44906579,
		"x": -10.23413228,
		"label": "HP1504901_G17"
	},
	{
		"y": -1.580760848,
		"x": 0.865016963,
		"label": "HP1504901_B21"
	},
	{
		"y": -1.652751903,
		"x": 0.3894006,
		"label": "HP1504901_N7"
	},
	{
		"y": -0.78594053,
		"x": -0.426473819,
		"label": "HP1504901_C14"
	},
	{
		"y": -3.313570056,
		"x": -10.55379406,
		"label": "HP1504901_M1"
	},
	{
		"y": 1.339419832,
		"x": -0.24848032,
		"label": "HP1504901_A10"
	},
	{
		"y": 2.191290257,
		"x": 6.563471364,
		"label": "HP1504901_I13"
	},
	{
		"y": -0.58283247,
		"x": -0.057297388,
		"label": "HP1504901_C23"
	},
	{
		"y": -3.293152759,
		"x": -10.36005652,
		"label": "HP1504901_N4"
	},
	{
		"y": 2.422912248,
		"x": 6.757578635,
		"label": "HP1504901_E2"
	},
	{
		"y": -1.831838337,
		"x": 0.801297042,
		"label": "HP1504901_D21"
	},
	{
		"y": -3.434850831,
		"x": -10.40339492,
		"label": "HP1504901_A20"
	},
	{
		"y": -1.661495371,
		"x": 0.407273277,
		"label": "HP1504901_G19"
	},
	{
		"y": -3.517178667,
		"x": -10.53901101,
		"label": "HP1504901_N5"
	},
	{
		"y": -3.352197921,
		"x": -10.55034345,
		"label": "HP1504901_C22"
	},
	{
		"y": 2.475296756,
		"x": 6.71039988,
		"label": "HP1504901_N21"
	},
	{
		"y": -1.501852657,
		"x": 0.965598836,
		"label": "HP1504901_B2"
	},
	{
		"y": -0.746686947,
		"x": -0.126518729,
		"label": "HP1504901_L9"
	},
	{
		"y": -0.211532216,
		"x": -0.496807663,
		"label": "HP1504901_N23"
	},
	{
		"y": -1.695648393,
		"x": 1.105585997,
		"label": "HP1504901_F3"
	},
	{
		"y": 3.543419578,
		"x": 9.505038505,
		"label": "HP1525301T2D_P14"
	},
	{
		"y": -0.89204158,
		"x": 1.915799386,
		"label": "HP1525301T2D_K15"
	},
	{
		"y": -3.096681931,
		"x": -10.83997049,
		"label": "HP1526901T2D_K9"
	},
	{
		"y": -2.313392808,
		"x": -6.345743101,
		"label": "HP1526901T2D_A18"
	},
	{
		"y": 1.082250584,
		"x": 1.019494853,
		"label": "HP1525301T2D_D19"
	},
	{
		"y": 0.227299619,
		"x": 1.491404117,
		"label": "HP1526901T2D_K12"
	},
	{
		"y": -2.930916452,
		"x": -10.9587803,
		"label": "HP1525301T2D_G16"
	},
	{
		"y": -0.899589406,
		"x": 2.101848363,
		"label": "HP1525301T2D_G11"
	},
	{
		"y": -0.468338958,
		"x": 2.255727207,
		"label": "HP1525301T2D_A6"
	},
	{
		"y": 1.135402686,
		"x": 2.973124477,
		"label": "HP1508501T2D_P4"
	},
	{
		"y": -0.8056714,
		"x": 2.210427145,
		"label": "HP1525301T2D_K23"
	},
	{
		"y": -3.016114469,
		"x": -10.88665599,
		"label": "HP1525301T2D_P12"
	},
	{
		"y": -3.768742935,
		"x": -11.31951233,
		"label": "HP1525301T2D_N22"
	},
	{
		"y": 2.980426738,
		"x": 7.127070577,
		"label": "HP1525301T2D_P16"
	},
	{
		"y": 3.929995339,
		"x": 9.490748455,
		"label": "HP1525301T2D_O14"
	},
	{
		"y": 3.577533932,
		"x": 9.34744626,
		"label": "HP1525301T2D_H14"
	},
	{
		"y": 2.958677105,
		"x": 7.122087276,
		"label": "HP1525301T2D_F24"
	},
	{
		"y": 3.613611852,
		"x": 9.686074544,
		"label": "HP1525301T2D_P1"
	},
	{
		"y": 0.468364438,
		"x": 0.846415566,
		"label": "HP1526901T2D_A20"
	},
	{
		"y": 1.156068339,
		"x": 1.178782638,
		"label": "HP1526901T2D_A10"
	},
	{
		"y": -1.066421045,
		"x": 1.907003145,
		"label": "HP1525301T2D_I21"
	},
	{
		"y": -1.715572465,
		"x": -11.09158113,
		"label": "HP1525301T2D_M23"
	},
	{
		"y": -0.624850383,
		"x": 1.616999528,
		"label": "HP1526901T2D_A3"
	},
	{
		"y": 3.672487096,
		"x": 9.370694725,
		"label": "HP1526901T2D_O5"
	},
	{
		"y": -0.78443465,
		"x": 2.137397611,
		"label": "HP1525301T2D_I12"
	},
	{
		"y": -0.869442742,
		"x": 1.970793199,
		"label": "HP1525301T2D_P22"
	},
	{
		"y": 4.819726789,
		"x": 8.46973936,
		"label": "HP1525301T2D_H9"
	},
	{
		"y": -0.705397577,
		"x": 1.546588006,
		"label": "HP1526901T2D_P20"
	},
	{
		"y": -2.865526638,
		"x": -10.97788075,
		"label": "HP1525301T2D_B9"
	},
	{
		"y": -3.722623013,
		"x": -11.11172545,
		"label": "HP1525301T2D_A10"
	},
	{
		"y": 3.937066315,
		"x": 9.544978785,
		"label": "HP1525301T2D_K16"
	},
	{
		"y": 1.386860666,
		"x": 0.945560085,
		"label": "HP1526901T2D_B6"
	},
	{
		"y": 2.226053473,
		"x": 1.2316072,
		"label": "HP1526901T2D_P9"
	},
	{
		"y": 1.891819318,
		"x": 1.45220875,
		"label": "HP1526901T2D_E11"
	},
	{
		"y": -2.680639169,
		"x": -10.92686493,
		"label": "HP1525301T2D_F22"
	},
	{
		"y": 3.628176931,
		"x": 9.321782724,
		"label": "HP1525301T2D_C3"
	},
	{
		"y": -3.594868463,
		"x": -11.03748609,
		"label": "HP1526901T2D_M5"
	},
	{
		"y": -2.275842018,
		"x": -11.53941786,
		"label": "HP1525301T2D_F11"
	},
	{
		"y": -3.495064746,
		"x": -11.13597731,
		"label": "HP1526901T2D_C21"
	},
	{
		"y": -0.762814202,
		"x": 2.161772524,
		"label": "HP1526901T2D_M21"
	},
	{
		"y": 1.249125016,
		"x": 1.110497258,
		"label": "HP1526901T2D_H18"
	},
	{
		"y": -4.256711545,
		"x": -10.62144052,
		"label": "HP1525301T2D_J22"
	},
	{
		"y": 3.818967322,
		"x": 9.044927455,
		"label": "HP1525301T2D_D1"
	},
	{
		"y": -0.883106596,
		"x": 1.867861152,
		"label": "HP1526901T2D_D5"
	},
	{
		"y": -0.895351796,
		"x": 2.013834028,
		"label": "HP1525301T2D_J14"
	},
	{
		"y": -0.866380029,
		"x": 2.020052553,
		"label": "HP1525301T2D_P6"
	},
	{
		"y": 2.083102747,
		"x": 1.498628846,
		"label": "HP1525301T2D_F15"
	},
	{
		"y": -2.998643005,
		"x": -11.1488944,
		"label": "HP1525301T2D_K9"
	},
	{
		"y": -0.644054724,
		"x": 2.148427126,
		"label": "HP1526901T2D_K6"
	},
	{
		"y": -0.655121537,
		"x": 2.047161649,
		"label": "HP1525301T2D_C16"
	},
	{
		"y": 3.488230481,
		"x": 9.411237397,
		"label": "HP1525301T2D_I18"
	},
	{
		"y": 4.022748274,
		"x": 9.568514818,
		"label": "HP1525301T2D_M11"
	},
	{
		"y": 1.979543363,
		"x": 1.330369992,
		"label": "HP1526901T2D_J6"
	},
	{
		"y": -2.617878362,
		"x": -11.06739508,
		"label": "HP1525301T2D_C20"
	},
	{
		"y": -2.096595918,
		"x": -10.20367119,
		"label": "HP1525301T2D_D18"
	},
	{
		"y": 3.839032121,
		"x": 9.454574126,
		"label": "HP1525301T2D_I23"
	},
	{
		"y": -0.787826214,
		"x": 1.889176326,
		"label": "HP1526901T2D_L16"
	},
	{
		"y": -2.622031449,
		"x": -12.05636874,
		"label": "HP1526901T2D_J16"
	},
	{
		"y": -0.879651264,
		"x": 2.109140066,
		"label": "HP1526901T2D_F2"
	},
	{
		"y": 3.668328586,
		"x": 9.513823776,
		"label": "HP1525301T2D_K14"
	},
	{
		"y": 3.900475665,
		"x": 9.476776718,
		"label": "HP1525301T2D_J7"
	},
	{
		"y": -0.645367094,
		"x": 2.009407696,
		"label": "HP1525301T2D_B1"
	},
	{
		"y": 3.734855011,
		"x": 9.046656725,
		"label": "HP1525301T2D_C4"
	},
	{
		"y": 3.867022586,
		"x": 9.485196435,
		"label": "HP1525301T2D_J21"
	},
	{
		"y": 0.274583247,
		"x": 1.067586137,
		"label": "HP1525301T2D_E19"
	},
	{
		"y": 0.093266898,
		"x": 1.282187933,
		"label": "HP1526901T2D_C13"
	},
	{
		"y": -0.895460548,
		"x": 1.833716956,
		"label": "HP1525301T2D_B4"
	},
	{
		"y": -0.688392358,
		"x": 2.24138691,
		"label": "HP1525301T2D_F19"
	},
	{
		"y": -2.134220724,
		"x": -11.43229581,
		"label": "HP1526901T2D_D15"
	},
	{
		"y": 0.068549314,
		"x": 1.290998874,
		"label": "HP1525301T2D_B5"
	},
	{
		"y": -3.376961245,
		"x": -10.94321936,
		"label": "HP1526901T2D_G6"
	},
	{
		"y": 0.472590333,
		"x": 1.125931046,
		"label": "HP1526901T2D_C19"
	},
	{
		"y": -0.522788333,
		"x": 2.15579984,
		"label": "HP1526901T2D_E18"
	},
	{
		"y": -3.008261733,
		"x": -11.02941821,
		"label": "HP1525301T2D_I13"
	},
	{
		"y": 2.198147857,
		"x": 1.325049586,
		"label": "HP1525301T2D_N3"
	},
	{
		"y": -3.318679654,
		"x": -11.14757239,
		"label": "HP1525301T2D_P7"
	},
	{
		"y": -1.522141131,
		"x": -9.962607967,
		"label": "HP1525301T2D_D7"
	},
	{
		"y": 1.976963171,
		"x": 1.315663479,
		"label": "HP1525301T2D_I6"
	},
	{
		"y": -0.310034194,
		"x": 2.458359719,
		"label": "HP1525301T2D_N23"
	},
	{
		"y": 0.619482112,
		"x": 1.11396442,
		"label": "HP1526901T2D_H23"
	},
	{
		"y": -2.881976694,
		"x": -11.00256349,
		"label": "HP1526901T2D_G5"
	},
	{
		"y": -1.070296946,
		"x": 1.850345192,
		"label": "HP1525301T2D_G22"
	},
	{
		"y": 4.872166237,
		"x": 8.468217904,
		"label": "HP1525301T2D_J5"
	},
	{
		"y": -2.955695479,
		"x": -10.96064146,
		"label": "HP1525301T2D_D16"
	},
	{
		"y": -2.779303786,
		"x": -11.42727007,
		"label": "HP1525301T2D_C12"
	},
	{
		"y": -3.02205203,
		"x": -10.93067072,
		"label": "HP1525301T2D_K4"
	},
	{
		"y": -4.110428467,
		"x": -11.47549883,
		"label": "HP1525301T2D_F6"
	},
	{
		"y": 4.786253552,
		"x": 8.569959611,
		"label": "HP1525301T2D_D10"
	},
	{
		"y": -2.771136605,
		"x": -10.98515709,
		"label": "HP1525301T2D_H5"
	},
	{
		"y": 3.482541051,
		"x": 8.569060759,
		"label": "HP1526901T2D_F15"
	},
	{
		"y": -0.730509284,
		"x": 2.283767308,
		"label": "HP1526901T2D_O22"
	},
	{
		"y": 3.969318698,
		"x": 9.539896626,
		"label": "HP1526901T2D_M8"
	},
	{
		"y": 3.792594793,
		"x": 9.468461977,
		"label": "HP1525301T2D_C6"
	},
	{
		"y": 2.105832687,
		"x": 1.400109767,
		"label": "HP1526901T2D_G21"
	},
	{
		"y": -0.900520399,
		"x": 1.922169174,
		"label": "HP1525301T2D_D11"
	},
	{
		"y": -0.535188727,
		"x": 2.04426695,
		"label": "HP1526901T2D_I6"
	},
	{
		"y": 2.024394348,
		"x": 1.509355136,
		"label": "HP1526901T2D_H24"
	},
	{
		"y": -1.208844756,
		"x": 1.439013956,
		"label": "HP1525301T2D_E1"
	},
	{
		"y": 1.433830038,
		"x": 0.83154722,
		"label": "HP1526901T2D_J22"
	},
	{
		"y": -0.849900478,
		"x": 2.074393535,
		"label": "HP1526901T2D_N15"
	},
	{
		"y": 3.802294635,
		"x": 9.429739704,
		"label": "HP1525301T2D_G3"
	},
	{
		"y": 3.488125431,
		"x": 8.582346699,
		"label": "HP1525301T2D_E11"
	},
	{
		"y": -1.072917046,
		"x": 1.480307757,
		"label": "HP1525301T2D_C2"
	},
	{
		"y": 2.10262521,
		"x": 1.332749813,
		"label": "HP1526901T2D_A1"
	},
	{
		"y": -2.379150987,
		"x": -7.835543212,
		"label": "HP1525301T2D_D17"
	},
	{
		"y": -1.062587406,
		"x": 1.69079975,
		"label": "HP1526901T2D_F3"
	},
	{
		"y": -0.682113002,
		"x": 2.061969065,
		"label": "HP1526901T2D_P21"
	},
	{
		"y": -0.943496565,
		"x": 1.956328198,
		"label": "HP1525301T2D_B11"
	},
	{
		"y": -0.647767826,
		"x": 2.049484645,
		"label": "HP1526901T2D_J24"
	},
	{
		"y": 2.164834849,
		"x": 1.524739491,
		"label": "HP1526901T2D_M15"
	},
	{
		"y": -1.995487613,
		"x": -10.32004827,
		"label": "HP1526901T2D_F14"
	},
	{
		"y": 0.246395743,
		"x": 0.875877332,
		"label": "HP1526901T2D_K11"
	},
	{
		"y": 2.107069753,
		"x": 1.356269142,
		"label": "HP1526901T2D_G17"
	},
	{
		"y": 2.248031184,
		"x": 1.155165148,
		"label": "HP1526901T2D_L1"
	},
	{
		"y": -3.207970673,
		"x": -10.88427082,
		"label": "HP1526901T2D_P3"
	},
	{
		"y": -0.411083126,
		"x": 2.163351273,
		"label": "HP1526901T2D_L2"
	},
	{
		"y": -2.635711072,
		"x": -11.28269154,
		"label": "HP1525301T2D_M24"
	},
	{
		"y": 1.195616641,
		"x": 1.25185569,
		"label": "HP1526901T2D_M19"
	},
	{
		"y": 1.258523914,
		"x": 1.202244657,
		"label": "HP1526901T2D_A16"
	},
	{
		"y": 3.337260798,
		"x": 8.523066966,
		"label": "HP1525301T2D_N4"
	},
	{
		"y": 1.974310563,
		"x": 1.510034138,
		"label": "HP1526901T2D_B4"
	},
	{
		"y": -1.197548416,
		"x": 1.227555357,
		"label": "HP1526901T2D_F21"
	},
	{
		"y": -0.836746724,
		"x": 2.022672807,
		"label": "HP1525301T2D_M16"
	},
	{
		"y": 2.16178634,
		"x": 1.283905711,
		"label": "HP1526901T2D_K3"
	},
	{
		"y": 3.823205957,
		"x": 9.421391875,
		"label": "HP1525301T2D_B24"
	},
	{
		"y": -4.781684935,
		"x": -10.28554912,
		"label": "HP1526901T2D_B21"
	},
	{
		"y": 1.938724125,
		"x": 1.443618291,
		"label": "HP1526901T2D_O15"
	},
	{
		"y": 3.074607104,
		"x": 6.904553881,
		"label": "HP1526901T2D_O12"
	},
	{
		"y": 2.200564719,
		"x": 1.413513943,
		"label": "HP1526901T2D_J21"
	},
	{
		"y": 4.667746239,
		"x": 8.536797559,
		"label": "HP1525301T2D_O1"
	},
	{
		"y": -1.568137486,
		"x": -9.897079824,
		"label": "HP1525301T2D_E21"
	},
	{
		"y": 3.693951794,
		"x": 9.335662794,
		"label": "HP1525301T2D_O20"
	},
	{
		"y": -2.884923674,
		"x": -10.92685254,
		"label": "HP1525301T2D_E14"
	},
	{
		"y": 2.923005998,
		"x": 7.060442013,
		"label": "HP1525301T2D_O9"
	},
	{
		"y": -3.018698492,
		"x": -10.93280802,
		"label": "HP1525301T2D_B22"
	},
	{
		"y": -0.795633913,
		"x": 2.285468322,
		"label": "HP1526901T2D_G7"
	},
	{
		"y": 2.198717554,
		"x": 1.201759691,
		"label": "HP1526901T2D_J5"
	},
	{
		"y": 3.909583862,
		"x": 9.500176251,
		"label": "HP1525301T2D_G13"
	},
	{
		"y": 1.635965548,
		"x": 1.592438236,
		"label": "HP1525301T2D_F23"
	},
	{
		"y": 3.192612313,
		"x": 1.856718482,
		"label": "HP1526901T2D_F4"
	},
	{
		"y": 3.941899662,
		"x": 9.520808471,
		"label": "HP1526901T2D_I1"
	},
	{
		"y": 2.085551015,
		"x": 1.378693165,
		"label": "HP1526901T2D_L4"
	},
	{
		"y": 0.417775497,
		"x": 1.253574169,
		"label": "HP1526901T2D_L14"
	},
	{
		"y": 4.051052738,
		"x": 9.483696958,
		"label": "HP1525301T2D_L23"
	},
	{
		"y": -0.906642827,
		"x": 2.156383761,
		"label": "HP1525301T2D_H23"
	},
	{
		"y": 3.605861452,
		"x": 9.511507948,
		"label": "HP1525301T2D_I1"
	},
	{
		"y": -0.715898162,
		"x": 2.004064404,
		"label": "HP1526901T2D_F10"
	},
	{
		"y": -1.839614062,
		"x": 4.466079915,
		"label": "HP1525301T2D_B23"
	},
	{
		"y": 3.702479717,
		"x": 9.446984435,
		"label": "HP1526901T2D_J18"
	},
	{
		"y": 1.442692198,
		"x": 1.010303398,
		"label": "HP1526901T2D_I10"
	},
	{
		"y": -1.107512735,
		"x": 1.677893473,
		"label": "HP1525301T2D_I4"
	},
	{
		"y": 3.835504906,
		"x": 9.444481316,
		"label": "HP1526901T2D_B24"
	},
	{
		"y": 3.870136266,
		"x": 9.533256981,
		"label": "HP1525301T2D_C24"
	},
	{
		"y": -0.960910978,
		"x": 1.902572058,
		"label": "HP1525301T2D_P8"
	},
	{
		"y": 3.916192964,
		"x": 9.561537499,
		"label": "HP1526901T2D_G24"
	},
	{
		"y": -0.609012495,
		"x": 1.480128462,
		"label": "HP1526901T2D_J8"
	},
	{
		"y": 4.219112006,
		"x": 10.71931778,
		"label": "HP1525301T2D_M22"
	},
	{
		"y": -0.862699153,
		"x": 1.936660059,
		"label": "HP1525301T2D_C1"
	},
	{
		"y": -3.35288257,
		"x": -10.93376466,
		"label": "HP1526901T2D_P5"
	},
	{
		"y": -2.846552569,
		"x": -11.00849305,
		"label": "HP1525301T2D_K13"
	},
	{
		"y": 2.933833341,
		"x": 7.079711112,
		"label": "HP1526901T2D_P13"
	},
	{
		"y": 1.251085332,
		"x": 0.978638695,
		"label": "HP1526901T2D_G23"
	},
	{
		"y": -2.625075121,
		"x": -11.03486765,
		"label": "HP1525301T2D_A22"
	},
	{
		"y": 1.399975763,
		"x": 0.939936926,
		"label": "HP1526901T2D_P22"
	},
	{
		"y": -3.061006202,
		"x": -11.00549811,
		"label": "HP1525301T2D_A18"
	},
	{
		"y": -1.12393739,
		"x": 1.569833178,
		"label": "HP1525301T2D_J2"
	},
	{
		"y": 1.83685833,
		"x": 1.572129699,
		"label": "HP1526901T2D_H20"
	},
	{
		"y": 3.644340362,
		"x": 9.462656122,
		"label": "HP1525301T2D_G14"
	},
	{
		"y": 0.717775205,
		"x": 1.109345497,
		"label": "HP1526901T2D_L7"
	},
	{
		"y": 2.105922656,
		"x": 1.285238404,
		"label": "HP1526901T2D_N12"
	},
	{
		"y": -0.709492566,
		"x": 1.981796211,
		"label": "HP1525301T2D_N7"
	},
	{
		"y": 3.824541807,
		"x": 9.526713212,
		"label": "HP1525301T2D_L1"
	},
	{
		"y": 1.952518653,
		"x": 1.512392058,
		"label": "HP1526901T2D_F5"
	},
	{
		"y": 3.692789115,
		"x": 9.488407658,
		"label": "HP1525301T2D_I10"
	},
	{
		"y": 3.839015839,
		"x": 9.46598115,
		"label": "HP1525301T2D_G20"
	},
	{
		"y": -2.366083485,
		"x": -11.3026926,
		"label": "HP1526901T2D_E24"
	},
	{
		"y": 1.250711491,
		"x": 1.392311985,
		"label": "HP1526901T2D_K24"
	},
	{
		"y": 2.924321169,
		"x": 2.011756415,
		"label": "HP1525301T2D_M7"
	},
	{
		"y": -0.679064448,
		"x": 2.094063876,
		"label": "HP1526901T2D_E8"
	},
	{
		"y": -0.78354055,
		"x": 1.925225997,
		"label": "HP1526901T2D_P14"
	},
	{
		"y": 4.992393534,
		"x": 8.163653213,
		"label": "HP1526901T2D_N4"
	},
	{
		"y": -3.005227427,
		"x": -10.9587741,
		"label": "HP1525301T2D_N2"
	},
	{
		"y": 2.019566452,
		"x": 1.342552004,
		"label": "HP1526901T2D_O24"
	},
	{
		"y": 1.815269812,
		"x": 1.578084741,
		"label": "HP1526901T2D_O14"
	},
	{
		"y": -2.953449772,
		"x": -10.73114607,
		"label": "HP1526901T2D_G12"
	},
	{
		"y": 3.880381211,
		"x": 9.521661734,
		"label": "HP1525301T2D_H24"
	},
	{
		"y": 3.703008507,
		"x": 9.487695776,
		"label": "HP1525301T2D_P13"
	},
	{
		"y": 1.204639822,
		"x": 1.209941549,
		"label": "HP1526901T2D_E20"
	},
	{
		"y": -3.128095752,
		"x": -10.90939405,
		"label": "HP1526901T2D_L20"
	},
	{
		"y": -2.669540737,
		"x": -7.593874251,
		"label": "HP1525301T2D_O15"
	},
	{
		"y": -0.808170697,
		"x": 2.18110296,
		"label": "HP1525301T2D_H6"
	},
	{
		"y": -0.904388392,
		"x": 2.229668378,
		"label": "HP1525301T2D_C10"
	},
	{
		"y": -2.970085835,
		"x": -11.09483973,
		"label": "HP1526901T2D_B8"
	},
	{
		"y": 2.195004998,
		"x": 1.325122048,
		"label": "HP1526901T2D_C3"
	},
	{
		"y": 2.029268652,
		"x": 1.502806511,
		"label": "HP1526901T2D_N13"
	},
	{
		"y": -0.592660617,
		"x": 1.723717513,
		"label": "HP1526901T2D_L19"
	},
	{
		"y": -1.085845844,
		"x": 1.924547565,
		"label": "HP1525301T2D_H7"
	},
	{
		"y": -1.153692352,
		"x": 1.605607821,
		"label": "HP1525301T2D_G15"
	},
	{
		"y": -3.224490248,
		"x": -10.94453533,
		"label": "HP1526901T2D_J23"
	},
	{
		"y": 3.954639905,
		"x": 9.436549966,
		"label": "HP1526901T2D_E23"
	},
	{
		"y": 3.378311665,
		"x": 9.3683656,
		"label": "HP1525301T2D_D2"
	},
	{
		"y": 2.162185832,
		"x": 1.055462655,
		"label": "HP1526901T2D_D19"
	},
	{
		"y": 3.795845748,
		"x": 9.378675991,
		"label": "HP1525301T2D_I3"
	},
	{
		"y": -3.280667888,
		"x": -10.90405294,
		"label": "HP1526901T2D_B15"
	},
	{
		"y": -0.964469127,
		"x": 2.112520889,
		"label": "HP1525301T2D_E23"
	},
	{
		"y": -0.445195846,
		"x": 1.688229542,
		"label": "HP1526901T2D_N9"
	},
	{
		"y": -0.633437467,
		"x": 2.160877545,
		"label": "HP1525301T2D_I7"
	},
	{
		"y": 1.197226519,
		"x": 1.21453071,
		"label": "HP1526901T2D_B18"
	},
	{
		"y": -0.76675913,
		"x": 2.256240694,
		"label": "HP1526901T2D_O21"
	},
	{
		"y": -0.319508788,
		"x": 2.309445839,
		"label": "HP1526901T2D_G14"
	},
	{
		"y": -0.779535951,
		"x": 2.27640725,
		"label": "HP1525301T2D_E7"
	},
	{
		"y": 4.684115654,
		"x": 8.654327443,
		"label": "HP1525301T2D_F10"
	},
	{
		"y": 3.718510766,
		"x": 9.460490435,
		"label": "HP1525301T2D_K21"
	},
	{
		"y": -2.892166012,
		"x": -10.95725461,
		"label": "HP1525301T2D_M21"
	},
	{
		"y": -0.037914119,
		"x": 0.928274591,
		"label": "HP1525301T2D_E3"
	},
	{
		"y": 1.377478986,
		"x": 1.213137669,
		"label": "HP1526901T2D_A4"
	},
	{
		"y": -2.002981687,
		"x": -9.564255503,
		"label": "HP1526901T2D_M12"
	},
	{
		"y": 3.92460439,
		"x": 9.467924382,
		"label": "HP1525301T2D_H3"
	},
	{
		"y": 3.815214316,
		"x": 9.503560985,
		"label": "HP1526901T2D_D4"
	},
	{
		"y": -2.977904438,
		"x": -10.93482553,
		"label": "HP1525301T2D_J12"
	},
	{
		"y": 0.773964488,
		"x": 1.303660328,
		"label": "HP1526901T2D_G1"
	},
	{
		"y": -2.187617512,
		"x": -7.706289771,
		"label": "HP1526901T2D_M17"
	},
	{
		"y": 3.243631623,
		"x": 9.208200268,
		"label": "HP1525301T2D_N5"
	},
	{
		"y": 3.624541523,
		"x": 8.996581,
		"label": "HP1525301T2D_A17"
	},
	{
		"y": -3.770831985,
		"x": -10.90047167,
		"label": "HP1526901T2D_C5"
	},
	{
		"y": 2.956647023,
		"x": 7.076229625,
		"label": "HP1525301T2D_E12"
	},
	{
		"y": 1.326357125,
		"x": 1.734700366,
		"label": "HP1526901T2D_L5"
	},
	{
		"y": -1.552727082,
		"x": 1.010872211,
		"label": "HP1525301T2D_O18"
	},
	{
		"y": 1.724831043,
		"x": 1.323367656,
		"label": "HP1526901T2D_A23"
	},
	{
		"y": 3.384081715,
		"x": 8.903822327,
		"label": "HP1525301T2D_C13"
	},
	{
		"y": 1.272341959,
		"x": 1.029473625,
		"label": "HP1526901T2D_K22"
	},
	{
		"y": 2.099187635,
		"x": 1.332084285,
		"label": "HP1526901T2D_F17"
	},
	{
		"y": 2.11181669,
		"x": 1.323521304,
		"label": "HP1526901T2D_N3"
	},
	{
		"y": 2.057387259,
		"x": 1.376904013,
		"label": "HP1526901T2D_K23"
	},
	{
		"y": 2.4318849,
		"x": 3.344203492,
		"label": "HP1525301T2D_O2"
	},
	{
		"y": 3.912225268,
		"x": 9.463347974,
		"label": "HP1526901T2D_K4"
	},
	{
		"y": 3.9076938,
		"x": 9.484008282,
		"label": "HP1525301T2D_I19"
	},
	{
		"y": 1.868767739,
		"x": 1.340110041,
		"label": "HP1526901T2D_P17"
	},
	{
		"y": 2.024928238,
		"x": 1.445537256,
		"label": "HP1526901T2D_O1"
	},
	{
		"y": -3.133671781,
		"x": -11.05922662,
		"label": "HP1525301T2D_L10"
	},
	{
		"y": -1.268018573,
		"x": 1.113800434,
		"label": "HP1525301T2D_F2"
	},
	{
		"y": 3.989629647,
		"x": 9.489434967,
		"label": "HP1526901T2D_M20"
	},
	{
		"y": 2.029931931,
		"x": 1.462259042,
		"label": "HP1526901T2D_O17"
	},
	{
		"y": -0.774193058,
		"x": 2.217005655,
		"label": "HP1525301T2D_H19"
	},
	{
		"y": -0.484164258,
		"x": 2.318184411,
		"label": "HP1526901T2D_M4"
	},
	{
		"y": 3.808789817,
		"x": 9.535203625,
		"label": "HP1526901T2D_D22"
	},
	{
		"y": -3.088076704,
		"x": -10.93525739,
		"label": "HP1525301T2D_A21"
	},
	{
		"y": 3.083683491,
		"x": 7.732184211,
		"label": "HP1525301T2D_I11"
	},
	{
		"y": 3.81292719,
		"x": 9.483391654,
		"label": "HP1525301T2D_J15"
	},
	{
		"y": 3.647977661,
		"x": 8.851801228,
		"label": "HP1526901T2D_J11"
	},
	{
		"y": 3.872252343,
		"x": 9.414301612,
		"label": "HP1525301T2D_P21"
	},
	{
		"y": -0.736036874,
		"x": 2.313885319,
		"label": "HP1525301T2D_M13"
	},
	{
		"y": -0.762162808,
		"x": 2.076765415,
		"label": "HP1526901T2D_A9"
	},
	{
		"y": -2.855679809,
		"x": -10.88179331,
		"label": "HP1526901T2D_E13"
	},
	{
		"y": -0.845716804,
		"x": 2.271396027,
		"label": "HP1525301T2D_P24"
	},
	{
		"y": -1.182938989,
		"x": 1.577078267,
		"label": "HP1525301T2D_I5"
	},
	{
		"y": -2.924271438,
		"x": -10.80720519,
		"label": "HP1526901T2D_H7"
	},
	{
		"y": -1.089521103,
		"x": 1.6317315,
		"label": "HP1525301T2D_L15"
	},
	{
		"y": 5.004907632,
		"x": 8.324368688,
		"label": "HP1525301T2D_J23"
	},
	{
		"y": -3.307354879,
		"x": -10.88524155,
		"label": "HP1526901T2D_P15"
	},
	{
		"y": 3.598969768,
		"x": 9.50261009,
		"label": "HP1525301T2D_P5"
	},
	{
		"y": 3.060278947,
		"x": 7.202773441,
		"label": "HP1526901T2D_G11"
	},
	{
		"y": 3.628834924,
		"x": 9.462851859,
		"label": "HP1525301T2D_F21"
	},
	{
		"y": -2.60336332,
		"x": -10.75904682,
		"label": "HP1526901T2D_J9"
	},
	{
		"y": 3.868427645,
		"x": 9.569484567,
		"label": "HP1525301T2D_A19"
	},
	{
		"y": -0.961172437,
		"x": 1.446529429,
		"label": "HP1526901T2D_P2"
	},
	{
		"y": -0.266463585,
		"x": 2.173912343,
		"label": "HP1526901T2D_A12"
	},
	{
		"y": 2.108240678,
		"x": 1.477268129,
		"label": "HP1526901T2D_K20"
	},
	{
		"y": -3.142271072,
		"x": -10.89293576,
		"label": "HP1526901T2D_B19"
	},
	{
		"y": 4.921546753,
		"x": 8.212933856,
		"label": "HP1525301T2D_J16"
	},
	{
		"y": -2.933702194,
		"x": -10.99164435,
		"label": "HP1525301T2D_A8"
	},
	{
		"y": -3.02925156,
		"x": -10.83637997,
		"label": "HP1526901T2D_N22"
	},
	{
		"y": 2.97849598,
		"x": 7.128072349,
		"label": "HP1525301T2D_F7"
	},
	{
		"y": 3.943977771,
		"x": 9.465350932,
		"label": "HP1526901T2D_E9"
	},
	{
		"y": -3.041080729,
		"x": -11.00962414,
		"label": "HP1526901T2D_D20"
	},
	{
		"y": 3.931519159,
		"x": 9.449369559,
		"label": "HP1526901T2D_F24"
	},
	{
		"y": -2.974399751,
		"x": -10.94098437,
		"label": "HP1526901T2D_B16"
	},
	{
		"y": -3.16942817,
		"x": -10.84742637,
		"label": "HP1526901T2D_I2"
	},
	{
		"y": 3.417518275,
		"x": 8.5159129,
		"label": "HP1525301T2D_O7"
	},
	{
		"y": 2.121261112,
		"x": 1.379432112,
		"label": "HP1526901T2D_A2"
	},
	{
		"y": 4.079765263,
		"x": 9.469097048,
		"label": "HP1525301T2D_A12"
	},
	{
		"y": -0.645233917,
		"x": 1.86409579,
		"label": "HP1526901T2D_L11"
	},
	{
		"y": -0.738390015,
		"x": 1.901186772,
		"label": "HP1526901T2D_B12"
	},
	{
		"y": 2.122817311,
		"x": 1.347065395,
		"label": "HP1526901T2D_H22"
	},
	{
		"y": 3.23249161,
		"x": 8.48690784,
		"label": "HP1526901T2D_J3"
	},
	{
		"y": 2.921725707,
		"x": 7.078603209,
		"label": "HP1525301T2D_B6"
	},
	{
		"y": 2.970464971,
		"x": 7.112339748,
		"label": "HP1525301T2D_E5"
	},
	{
		"y": 3.881471316,
		"x": 9.484208666,
		"label": "HP1525301T2D_K11"
	},
	{
		"y": -0.56569684,
		"x": 2.217921207,
		"label": "HP1526901T2D_A17"
	},
	{
		"y": 5.021212434,
		"x": 8.383752132,
		"label": "HP1526901T2D_N7"
	},
	{
		"y": -0.778044867,
		"x": 1.975069928,
		"label": "HP1526901T2D_P12"
	},
	{
		"y": 2.944787057,
		"x": 7.103958446,
		"label": "HP1525301T2D_L8"
	},
	{
		"y": -0.777743832,
		"x": 1.897676523,
		"label": "HP1526901T2D_J2"
	},
	{
		"y": -1.859482822,
		"x": -11.5508792,
		"label": "HP1526901T2D_H13"
	},
	{
		"y": 3.730988847,
		"x": 9.096074647,
		"label": "HP1525301T2D_O23"
	},
	{
		"y": -3.718132864,
		"x": -11.2093552,
		"label": "HP1525301T2D_D24"
	},
	{
		"y": -1.014603803,
		"x": 1.884730921,
		"label": "HP1526901T2D_D18"
	},
	{
		"y": -0.723220297,
		"x": 1.58685496,
		"label": "HP1526901T2D_B17"
	},
	{
		"y": 1.20186641,
		"x": 1.190642491,
		"label": "HP1526901T2D_G2"
	},
	{
		"y": -0.380872394,
		"x": 1.782370153,
		"label": "HP1525301T2D_A9"
	},
	{
		"y": 3.811211717,
		"x": 9.573634997,
		"label": "HP1526901T2D_A11"
	},
	{
		"y": 2.067138194,
		"x": 1.378231777,
		"label": "HP1526901T2D_I20"
	},
	{
		"y": -3.015894069,
		"x": -11.04227362,
		"label": "HP1525301T2D_A20"
	},
	{
		"y": -0.716654644,
		"x": 1.382296726,
		"label": "HP1526901T2D_F1"
	},
	{
		"y": 4.633630602,
		"x": 8.702042585,
		"label": "HP1525301T2D_F5"
	},
	{
		"y": 4.081477765,
		"x": 9.468935388,
		"label": "HP1525301T2D_A15"
	},
	{
		"y": 3.876453083,
		"x": 9.489611867,
		"label": "HP1526901T2D_F16"
	},
	{
		"y": -0.655413514,
		"x": 1.226105659,
		"label": "HP1526901T2D_B20"
	},
	{
		"y": -3.052618103,
		"x": -10.94117374,
		"label": "HP1525301T2D_B20"
	},
	{
		"y": 3.304923504,
		"x": 9.474349868,
		"label": "HP1525301T2D_L2"
	},
	{
		"y": -0.76689867,
		"x": 2.123229153,
		"label": "HP1526901T2D_H12"
	},
	{
		"y": -3.007715254,
		"x": -8.978241441,
		"label": "HP1525301T2D_G6"
	},
	{
		"y": 3.860556827,
		"x": 9.456846306,
		"label": "HP1525301T2D_B10"
	},
	{
		"y": -0.752117064,
		"x": 2.121186005,
		"label": "HP1526901T2D_G13"
	},
	{
		"y": 0.259406668,
		"x": 1.080064274,
		"label": "HP1526901T2D_N18"
	},
	{
		"y": 5.01640083,
		"x": 8.282562515,
		"label": "HP1525301T2D_E2"
	},
	{
		"y": 2.972802392,
		"x": 7.111280775,
		"label": "HP1525301T2D_E24"
	},
	{
		"y": -2.626493792,
		"x": -11.20540222,
		"label": "HP1525301T2D_L12"
	},
	{
		"y": -0.752516701,
		"x": 1.983809575,
		"label": "HP1525301T2D_P17"
	},
	{
		"y": 1.34654503,
		"x": 0.940611211,
		"label": "HP1526901T2D_O9"
	},
	{
		"y": -0.568504311,
		"x": 2.215772728,
		"label": "HP1526901T2D_N6"
	},
	{
		"y": -0.878767687,
		"x": 1.974955591,
		"label": "HP1525301T2D_B15"
	},
	{
		"y": -1.028543232,
		"x": 1.80927235,
		"label": "HP1525301T2D_L22"
	},
	{
		"y": -0.493744321,
		"x": 2.159189122,
		"label": "HP1526901T2D_I21"
	},
	{
		"y": 0.363804616,
		"x": 1.058893901,
		"label": "HP1526901T2D_H16"
	},
	{
		"y": -1.043345514,
		"x": 1.987316355,
		"label": "HP1525301T2D_I2"
	},
	{
		"y": -0.874938689,
		"x": 1.983367291,
		"label": "HP1525301T2D_H12"
	},
	{
		"y": 3.817947201,
		"x": 9.523771032,
		"label": "HP1525301T2D_K18"
	},
	{
		"y": 0.325283046,
		"x": 0.937282673,
		"label": "HP1526901T2D_K21"
	},
	{
		"y": -0.829844416,
		"x": 2.249433042,
		"label": "HP1525301T2D_L24"
	},
	{
		"y": 3.745529472,
		"x": 9.440823398,
		"label": "HP1525301T2D_C17"
	},
	{
		"y": 3.858476833,
		"x": 9.308859796,
		"label": "HP1525301T2D_D3"
	},
	{
		"y": -2.867110682,
		"x": -10.86334583,
		"label": "HP1525301T2D_L7"
	},
	{
		"y": -2.717017565,
		"x": -10.80446572,
		"label": "HP1526901T2D_F13"
	},
	{
		"y": 3.878087847,
		"x": 9.552656938,
		"label": "HP1525301T2D_D22"
	},
	{
		"y": 3.648982065,
		"x": 8.479701843,
		"label": "HP1525301T2D_F16"
	},
	{
		"y": -2.510406866,
		"x": -8.887347568,
		"label": "HP1525301T2D_M4"
	},
	{
		"y": 0.178198035,
		"x": 0.867104948,
		"label": "HP1526901T2D_P23"
	},
	{
		"y": 1.471037003,
		"x": 1.754929476,
		"label": "HP1525301T2D_L14"
	},
	{
		"y": -1.285890745,
		"x": 1.389815067,
		"label": "HP1525301T2D_N8"
	},
	{
		"y": 0.437563269,
		"x": 0.704865576,
		"label": "HP1526901T2D_N20"
	},
	{
		"y": 4.834720846,
		"x": 8.503829405,
		"label": "HP1526901T2D_D7"
	},
	{
		"y": -0.816586926,
		"x": 1.991336736,
		"label": "HP1526901T2D_F9"
	},
	{
		"y": 2.155491476,
		"x": 1.316830611,
		"label": "HP1526901T2D_B9"
	},
	{
		"y": -2.707106175,
		"x": -7.764579417,
		"label": "HP1525301T2D_F13"
	},
	{
		"y": 2.958204243,
		"x": 7.086585209,
		"label": "HP1526901T2D_E15"
	},
	{
		"y": 1.253346963,
		"x": 1.041795984,
		"label": "HP1526901T2D_L24"
	},
	{
		"y": 2.142039712,
		"x": 1.264463515,
		"label": "HP1526901T2D_H4"
	},
	{
		"y": -0.746974147,
		"x": 2.208123812,
		"label": "HP1526901T2D_H17"
	},
	{
		"y": 3.767767435,
		"x": 9.44832607,
		"label": "HP1525301T2D_N11"
	},
	{
		"y": -2.84801663,
		"x": -11.01828746,
		"label": "HP1525301T2D_L11"
	},
	{
		"y": -2.810611909,
		"x": -11.04154383,
		"label": "HP1525301T2D_A24"
	},
	{
		"y": 0.224415425,
		"x": 1.048860498,
		"label": "HP1526901T2D_I24"
	},
	{
		"y": 4.170306632,
		"x": 9.481764793,
		"label": "HP1526901T2D_A24"
	},
	{
		"y": -2.283775339,
		"x": -11.83350431,
		"label": "HP1525301T2D_A2"
	},
	{
		"y": 0.387479886,
		"x": 0.9400157,
		"label": "HP1525301T2D_G23"
	},
	{
		"y": -3.070375242,
		"x": -10.93513526,
		"label": "HP1525301T2D_E9"
	},
	{
		"y": 3.882633835,
		"x": 9.467593572,
		"label": "HP1526901T2D_E22"
	},
	{
		"y": -3.779424409,
		"x": -10.98884685,
		"label": "HP1526901T2D_L10"
	},
	{
		"y": 1.407792508,
		"x": 1.44697145,
		"label": "HP1526901T2D_A22"
	},
	{
		"y": 5.089873435,
		"x": 8.174577887,
		"label": "HP1525301T2D_C14"
	},
	{
		"y": 3.719336928,
		"x": 9.500378619,
		"label": "HP1526901T2D_C14"
	},
	{
		"y": 3.837048356,
		"x": 9.344916827,
		"label": "HP1525301T2D_K6"
	},
	{
		"y": -1.78571758,
		"x": -11.20845113,
		"label": "HP1525301T2D_F1"
	},
	{
		"y": 3.745268025,
		"x": 9.547997047,
		"label": "HP1525301T2D_L4"
	},
	{
		"y": -3.075235517,
		"x": -10.83027933,
		"label": "HP1526901T2D_G3"
	},
	{
		"y": -3.000802478,
		"x": -10.93188917,
		"label": "HP1525301T2D_O12"
	},
	{
		"y": -1.768352555,
		"x": -10.59722194,
		"label": "HP1525301T2D_H21"
	},
	{
		"y": -3.194571438,
		"x": -10.80072743,
		"label": "HP1526901T2D_M6"
	},
	{
		"y": -3.820402177,
		"x": -11.13282614,
		"label": "HP1525301T2D_H22"
	},
	{
		"y": 0.309042805,
		"x": 2.048828792,
		"label": "HP1526901T2D_M24"
	},
	{
		"y": 3.699202729,
		"x": 9.497186786,
		"label": "HP1525301T2D_G9"
	},
	{
		"y": -0.438845631,
		"x": 1.923976839,
		"label": "HP1526901T2D_O23"
	},
	{
		"y": 0.455219808,
		"x": 1.778102382,
		"label": "HP1526901T2D_L3"
	},
	{
		"y": -0.863961981,
		"x": 1.958842493,
		"label": "HP1525301T2D_M8"
	},
	{
		"y": -4.320956103,
		"x": -10.76374394,
		"label": "HP1526901T2D_O18"
	},
	{
		"y": -0.15013342,
		"x": 1.123059775,
		"label": "HP1525301T2D_J18"
	},
	{
		"y": 0.351853694,
		"x": 1.370713999,
		"label": "HP1526901T2D_A15"
	},
	{
		"y": 3.961823483,
		"x": 9.527380297,
		"label": "HP1525301T2D_L20"
	},
	{
		"y": -1.173424574,
		"x": 1.711566273,
		"label": "HP1525301T2D_F4"
	},
	{
		"y": 3.815219904,
		"x": 9.522538184,
		"label": "HP1526901T2D_E1"
	},
	{
		"y": 2.174320919,
		"x": 1.2422599,
		"label": "HP1526901T2D_P7"
	},
	{
		"y": -2.699035746,
		"x": -11.03452803,
		"label": "HP1525301T2D_D13"
	},
	{
		"y": 4.887040485,
		"x": 8.451305825,
		"label": "HP1526901T2D_K17"
	},
	{
		"y": 3.29148878,
		"x": 8.598824375,
		"label": "HP1526901T2D_F22"
	},
	{
		"y": 0.236739289,
		"x": 0.718543712,
		"label": "HP1526901T2D_D10"
	},
	{
		"y": -3.473938455,
		"x": -11.09668083,
		"label": "HP1526901T2D_P24"
	},
	{
		"y": -2.99923822,
		"x": -11.12306756,
		"label": "HP1525301T2D_I9"
	},
	{
		"y": -1.775219283,
		"x": -10.76700219,
		"label": "HP1525301T2D_M1"
	},
	{
		"y": 1.397125678,
		"x": 0.824005005,
		"label": "HP1526901T2D_J20"
	},
	{
		"y": -1.877360097,
		"x": -9.548418276,
		"label": "HP1525301T2D_E20"
	},
	{
		"y": 3.783020894,
		"x": 9.451658353,
		"label": "HP1525301T2D_I22"
	},
	{
		"y": -0.7422019,
		"x": 2.077420169,
		"label": "HP1525301T2D_J4"
	},
	{
		"y": -4.482540558,
		"x": -10.95844309,
		"label": "HP1525301T2D_K24"
	},
	{
		"y": -2.103330517,
		"x": -11.02189755,
		"label": "HP1525301T2D_B16"
	},
	{
		"y": 2.937905477,
		"x": 7.07680199,
		"label": "HP1525301T2D_K10"
	},
	{
		"y": 3.306693908,
		"x": 9.470096146,
		"label": "HP1525301T2D_F8"
	},
	{
		"y": 3.836346823,
		"x": 9.387284438,
		"label": "HP1525301T2D_A13"
	},
	{
		"y": -1.006115461,
		"x": 2.009807427,
		"label": "HP1525301T2D_G4"
	},
	{
		"y": -1.006834408,
		"x": 1.927847389,
		"label": "HP1525301T2D_J13"
	},
	{
		"y": -0.80399855,
		"x": 2.04175987,
		"label": "HP1525301T2D_G19"
	},
	{
		"y": -3.046631314,
		"x": -10.84826417,
		"label": "HP1526901T2D_K8"
	},
	{
		"y": -0.790080299,
		"x": 1.634584488,
		"label": "HP1526901T2D_L17"
	},
	{
		"y": 3.572544696,
		"x": 9.385691705,
		"label": "HP1525301T2D_A1"
	},
	{
		"y": 2.939031284,
		"x": 7.067552368,
		"label": "HP1526901T2D_O2"
	},
	{
		"y": 2.051769361,
		"x": 1.307123786,
		"label": "HP1526901T2D_O13"
	},
	{
		"y": -3.909468103,
		"x": -11.27707015,
		"label": "HP1526901T2D_K16"
	},
	{
		"y": -3.78770938,
		"x": -11.37831851,
		"label": "HP1525301T2D_G2"
	},
	{
		"y": -0.799941875,
		"x": 2.11302397,
		"label": "HP1526901T2D_A7"
	},
	{
		"y": -0.790826852,
		"x": 2.175570631,
		"label": "HP1525301T2D_N13"
	},
	{
		"y": -2.999492099,
		"x": -11.14520875,
		"label": "HP1525301T2D_M3"
	},
	{
		"y": 3.784519667,
		"x": 9.469620735,
		"label": "HP1526901T2D_D3"
	},
	{
		"y": -0.855281382,
		"x": 2.072232866,
		"label": "HP1526901T2D_K18"
	},
	{
		"y": -2.437560049,
		"x": -10.80267067,
		"label": "HP1526901T2D_H11"
	},
	{
		"y": 4.416868223,
		"x": 8.596351698,
		"label": "HP1525301T2D_D6"
	},
	{
		"y": 4.841156382,
		"x": 8.271840954,
		"label": "HP1525301T2D_O3"
	},
	{
		"y": -3.032853334,
		"x": -10.91383383,
		"label": "HP1526901T2D_D13"
	},
	{
		"y": 3.805898253,
		"x": 9.492566406,
		"label": "HP1525301T2D_N14"
	},
	{
		"y": 1.330175407,
		"x": 1.127299393,
		"label": "HP1526901T2D_J1"
	},
	{
		"y": -0.881577049,
		"x": 1.958363269,
		"label": "HP1525301T2D_J8"
	},
	{
		"y": 3.805024139,
		"x": 9.488001669,
		"label": "HP1525301T2D_J9"
	},
	{
		"y": 3.739082592,
		"x": 9.236892844,
		"label": "HP1525301T2D_P2"
	},
	{
		"y": 3.835268341,
		"x": 9.281497366,
		"label": "HP1525301T2D_K12"
	},
	{
		"y": -2.88006048,
		"x": -10.94095221,
		"label": "HP1525301T2D_L21"
	},
	{
		"y": 3.804520791,
		"x": 9.56173834,
		"label": "HP1526901T2D_H9"
	},
	{
		"y": 0.541942656,
		"x": -0.886689755,
		"label": "HP1526901T2D_D24"
	},
	{
		"y": -4.372650718,
		"x": -11.08915356,
		"label": "HP1525301T2D_N17"
	},
	{
		"y": -3.358928029,
		"x": -10.92882118,
		"label": "HP1526901T2D_P6"
	},
	{
		"y": -1.963869921,
		"x": -10.87132754,
		"label": "HP1525301T2D_O21"
	},
	{
		"y": 1.841307055,
		"x": 1.618497088,
		"label": "HP1526901T2D_N23"
	},
	{
		"y": 2.024325435,
		"x": 1.492719485,
		"label": "HP1526901T2D_B1"
	},
	{
		"y": -1.048436157,
		"x": 1.947451187,
		"label": "HP1526901T2D_K10"
	},
	{
		"y": 3.105419822,
		"x": 8.318972793,
		"label": "HP1526901T2D_M14"
	},
	{
		"y": 2.062760183,
		"x": 1.484693355,
		"label": "HP1526901T2D_N1"
	},
	{
		"y": -1.0813891,
		"x": 1.704911995,
		"label": "HP1526901T2D_I7"
	},
	{
		"y": 2.136424056,
		"x": 1.341190387,
		"label": "HP1526901T2D_A19"
	},
	{
		"y": 1.795131724,
		"x": 1.507197837,
		"label": "HP1525301T2D_N18"
	},
	{
		"y": 3.74383866,
		"x": 9.325901672,
		"label": "HP1525301T2D_O17"
	},
	{
		"y": -2.662451322,
		"x": -10.4965797,
		"label": "HP1526901T2D_E12"
	},
	{
		"y": 1.387608299,
		"x": 1.149305628,
		"label": "HP1526901T2D_C15"
	},
	{
		"y": 3.451538737,
		"x": 8.628492708,
		"label": "HP1526901T2D_B23"
	},
	{
		"y": 1.261205426,
		"x": 1.081518087,
		"label": "HP1526901T2D_I19"
	},
	{
		"y": -0.632019722,
		"x": 2.012020894,
		"label": "HP1526901T2D_J19"
	},
	{
		"y": 4.593016051,
		"x": 8.6511253,
		"label": "HP1525301T2D_G17"
	},
	{
		"y": -0.911800502,
		"x": 1.794448598,
		"label": "HP1525301T2D_C5"
	},
	{
		"y": 3.8093181,
		"x": 9.437596594,
		"label": "HP1526901T2D_C22"
	},
	{
		"y": -1.792973778,
		"x": -9.669266991,
		"label": "HP1525301T2D_L3"
	},
	{
		"y": 3.553180388,
		"x": 8.843857439,
		"label": "HP1526901T2D_D2"
	},
	{
		"y": 0.204961757,
		"x": 1.18629846,
		"label": "HP1526901T2D_O3"
	},
	{
		"y": 3.127336762,
		"x": 6.765247874,
		"label": "HP1526901T2D_P8"
	},
	{
		"y": 3.013285418,
		"x": 8.582369842,
		"label": "HP1525301T2D_D5"
	},
	{
		"y": 4.550284964,
		"x": 8.572164759,
		"label": "HP1526901T2D_L15"
	},
	{
		"y": 4.806480399,
		"x": 8.481073312,
		"label": "HP1525301T2D_C23"
	},
	{
		"y": -0.675562353,
		"x": 2.126007793,
		"label": "HP1526901T2D_G16"
	},
	{
		"y": -3.968443151,
		"x": -11.0276316,
		"label": "HP1525301T2D_H4"
	},
	{
		"y": -2.729398627,
		"x": -11.18382757,
		"label": "HP1525301T2D_F14"
	},
	{
		"y": -1.047320864,
		"x": 1.419409449,
		"label": "HP1526901T2D_D8"
	},
	{
		"y": -0.783617876,
		"x": 2.136080261,
		"label": "HP1526901T2D_I14"
	},
	{
		"y": 3.641677469,
		"x": 9.27118246,
		"label": "HP1525301T2D_I15"
	},
	{
		"y": -0.152032301,
		"x": 0.937533993,
		"label": "HP1526901T2D_E4"
	},
	{
		"y": -0.923192812,
		"x": 1.977200462,
		"label": "HP1525301T2D_E13"
	},
	{
		"y": -0.7561897,
		"x": 2.370495632,
		"label": "HP1526901T2D_M1"
	},
	{
		"y": 1.988958092,
		"x": 0.929437491,
		"label": "HP1525301T2D_D23"
	},
	{
		"y": -0.029520102,
		"x": 0.689510883,
		"label": "HP1525301T2D_B8"
	},
	{
		"y": 5.124577814,
		"x": 8.372870208,
		"label": "HP1526901T2D_A6"
	},
	{
		"y": 1.58424393,
		"x": 2.282410982,
		"label": "HP1525301T2D_H10"
	},
	{
		"y": -3.680080803,
		"x": -11.24537306,
		"label": "HP1526901T2D_C9"
	},
	{
		"y": -2.749369712,
		"x": -9.205509513,
		"label": "HP1526901T2D_K13"
	},
	{
		"y": -0.42912256,
		"x": 1.759860635,
		"label": "HP1526901T2D_J4"
	},
	{
		"y": 3.784141406,
		"x": 9.290847023,
		"label": "HP1525301T2D_E15"
	},
	{
		"y": -3.752647236,
		"x": -11.29293886,
		"label": "HP1525301T2D_H13"
	},
	{
		"y": -0.639396301,
		"x": 2.334018314,
		"label": "HP1525301T2D_L9"
	},
	{
		"y": -4.038502917,
		"x": -11.27646194,
		"label": "HP1526901T2D_N24"
	},
	{
		"y": -0.274711102,
		"x": 2.167271588,
		"label": "HP1526901T2D_G10"
	},
	{
		"y": -0.894511683,
		"x": 2.081229264,
		"label": "HP1525301T2D_A11"
	},
	{
		"y": -0.660104949,
		"x": 1.676310622,
		"label": "HP1526901T2D_K2"
	},
	{
		"y": -3.147913832,
		"x": -10.78170173,
		"label": "HP1526901T2D_J10"
	},
	{
		"y": 1.31049548,
		"x": 1.095536027,
		"label": "HP1526901T2D_B7"
	},
	{
		"y": -3.012385129,
		"x": -10.84236601,
		"label": "HP1526901T2D_B2"
	},
	{
		"y": -3.12396605,
		"x": -10.84202985,
		"label": "HP1526901T2D_H1"
	},
	{
		"y": 2.153674242,
		"x": 1.218210842,
		"label": "HP1526901T2D_I13"
	},
	{
		"y": -3.048523173,
		"x": -10.89253388,
		"label": "HP1526901T2D_M9"
	},
	{
		"y": 1.086831641,
		"x": 1.159693384,
		"label": "HP1526901T2D_O7"
	},
	{
		"y": 2.04111659,
		"x": 1.471477486,
		"label": "HP1526901T2D_I3"
	},
	{
		"y": -3.382718247,
		"x": -10.99700879,
		"label": "HP1526901T2D_J7"
	},
	{
		"y": 1.896953763,
		"x": 1.501887352,
		"label": "HP1526901T2D_M2"
	},
	{
		"y": -2.724539394,
		"x": -10.83790864,
		"label": "HP1526901T2D_M10"
	},
	{
		"y": -0.900720009,
		"x": 1.980400114,
		"label": "HP1526901T2D_N10"
	},
	{
		"y": -2.369651901,
		"x": -11.07554793,
		"label": "HP1525301T2D_J24"
	},
	{
		"y": 4.113067679,
		"x": 9.574451101,
		"label": "HP1526901T2D_K1"
	},
	{
		"y": -0.46539198,
		"x": 1.942270442,
		"label": "HP1526901T2D_I8"
	},
	{
		"y": 3.864245403,
		"x": 9.497988222,
		"label": "HP1526901T2D_C23"
	},
	{
		"y": 1.425251226,
		"x": 1.40698861,
		"label": "HP1526901T2D_H14"
	},
	{
		"y": -1.117449145,
		"x": 1.502399357,
		"label": "HP1525301T2D_P11"
	},
	{
		"y": -0.706267582,
		"x": 1.45909252,
		"label": "HP1526901T2D_L13"
	},
	{
		"y": 4.011495528,
		"x": 9.460817011,
		"label": "HP1525301T2D_H11"
	},
	{
		"y": -0.772250332,
		"x": 1.673932839,
		"label": "HP1525301T2D_P18"
	},
	{
		"y": 3.188959752,
		"x": 6.543366548,
		"label": "HP1526901T2D_E17"
	},
	{
		"y": 1.429557171,
		"x": 0.898761349,
		"label": "HP1526901T2D_E21"
	},
	{
		"y": 3.855960201,
		"x": 9.362205557,
		"label": "HP1525301T2D_L6"
	},
	{
		"y": 3.892822287,
		"x": 9.452080781,
		"label": "HP1525301T2D_F12"
	},
	{
		"y": -2.874581823,
		"x": -11.01813789,
		"label": "HP1525301T2D_P10"
	},
	{
		"y": 3.806544011,
		"x": 9.494882173,
		"label": "HP1525301T2D_P19"
	},
	{
		"y": 3.658492563,
		"x": 9.381143169,
		"label": "HP1526901T2D_C20"
	},
	{
		"y": -2.624169908,
		"x": -11.33461997,
		"label": "HP1525301T2D_F18"
	},
	{
		"y": 3.644504064,
		"x": 9.37314751,
		"label": "HP1525301T2D_A14"
	},
	{
		"y": 3.827253234,
		"x": 9.470232956,
		"label": "HP1525301T2D_C9"
	},
	{
		"y": -0.494695588,
		"x": 1.985214446,
		"label": "HP1525301T2D_O6"
	},
	{
		"y": 2.954270593,
		"x": 7.116227542,
		"label": "HP1525301T2D_M2"
	},
	{
		"y": 4.587066876,
		"x": 8.580467098,
		"label": "HP1525301T2D_L5"
	},
	{
		"y": 1.98507478,
		"x": 1.460912627,
		"label": "HP1526901T2D_E2"
	},
	{
		"y": 1.945913299,
		"x": 1.191545556,
		"label": "HP1526901T2D_I5"
	},
	{
		"y": -0.924549923,
		"x": 1.670984017,
		"label": "HP1525301T2D_C8"
	},
	{
		"y": -0.526152587,
		"x": 2.116571997,
		"label": "HP1526901T2D_B11"
	},
	{
		"y": 0.120535999,
		"x": 1.562530993,
		"label": "HP1525301T2D_A16"
	},
	{
		"y": -4.324097942,
		"x": -10.80553303,
		"label": "HP1525301T2D_G12"
	},
	{
		"y": 2.200140035,
		"x": 1.144904864,
		"label": "HP1526901T2D_P11"
	},
	{
		"y": 4.490846885,
		"x": 8.720521994,
		"label": "HP1525301T2D_C7"
	},
	{
		"y": -2.938781801,
		"x": -10.75400486,
		"label": "HP1526901T2D_O16"
	},
	{
		"y": -0.943993778,
		"x": 1.930182991,
		"label": "HP1526901T2D_O6"
	},
	{
		"y": 3.757119399,
		"x": 9.071698089,
		"label": "HP1525301T2D_J20"
	},
	{
		"y": 0.851728209,
		"x": 1.830699365,
		"label": "HP1526901T2D_M13"
	},
	{
		"y": -2.836368456,
		"x": -10.91036982,
		"label": "HP1526901T2D_L18"
	},
	{
		"y": 1.056716129,
		"x": 1.27671341,
		"label": "HP1526901T2D_E3"
	},
	{
		"y": -0.744717836,
		"x": 2.114025499,
		"label": "HP1526901T2D_G18"
	},
	{
		"y": 3.745757638,
		"x": 9.441617538,
		"label": "HP1525301T2D_N16"
	},
	{
		"y": 3.686218177,
		"x": 9.440034881,
		"label": "HP1525301T2D_C15"
	},
	{
		"y": -0.811249566,
		"x": 2.007675418,
		"label": "HP1525301T2D_B13"
	},
	{
		"y": 4.742371125,
		"x": 8.681127859,
		"label": "HP1525301T2D_M5"
	},
	{
		"y": 0.342402529,
		"x": 1.083391085,
		"label": "HP1526901T2D_F12"
	},
	{
		"y": 3.845604664,
		"x": 9.41085363,
		"label": "HP1525301T2D_D14"
	},
	{
		"y": -0.590828377,
		"x": 1.702024487,
		"label": "HP1526901T2D_J13"
	},
	{
		"y": 4.78892105,
		"x": 8.652113436,
		"label": "HP1526901T2D_I12"
	},
	{
		"y": 2.224756804,
		"x": 1.238454922,
		"label": "HP1526901T2D_P10"
	},
	{
		"y": 2.836366194,
		"x": 7.159661521,
		"label": "HP1525301T2D_P15"
	},
	{
		"y": -3.59657626,
		"x": -10.87798997,
		"label": "HP1526901T2D_G15"
	},
	{
		"y": 3.750511305,
		"x": 8.850181012,
		"label": "HP1525301T2D_N20"
	},
	{
		"y": 3.796985397,
		"x": 9.42032951,
		"label": "HP1525301T2D_P20"
	},
	{
		"y": -1.102460034,
		"x": 1.5922709,
		"label": "HP1526901T2D_C16"
	},
	{
		"y": 3.888690446,
		"x": 9.511593771,
		"label": "HP1525301T2D_L16"
	},
	{
		"y": -3.085808883,
		"x": -10.85298354,
		"label": "HP1526901T2D_K5"
	},
	{
		"y": -1.010544931,
		"x": 1.727835391,
		"label": "HP1526901T2D_J14"
	},
	{
		"y": 3.733601389,
		"x": 9.498865546,
		"label": "HP1525301T2D_G5"
	},
	{
		"y": 3.827990283,
		"x": 9.428548941,
		"label": "HP1525301T2D_P4"
	},
	{
		"y": 5.500669964,
		"x": 7.63207331,
		"label": "HP1526901T2D_N5"
	},
	{
		"y": 3.140241587,
		"x": 9.327330106,
		"label": "HP1525301T2D_I17"
	},
	{
		"y": -1.582601958,
		"x": -9.568349982,
		"label": "HP1525301T2D_F17"
	},
	{
		"y": -0.828027808,
		"x": 1.904762317,
		"label": "HP1526901T2D_C4"
	},
	{
		"y": -0.754670252,
		"x": 2.11416843,
		"label": "HP1526901T2D_H6"
	},
	{
		"y": -3.917965497,
		"x": -8.922842616,
		"label": "HP1525301T2D_M19"
	},
	{
		"y": -2.877318412,
		"x": -10.93705968,
		"label": "HP1525301T2D_B19"
	},
	{
		"y": 4.091902163,
		"x": 9.491746712,
		"label": "HP1526901T2D_N21"
	},
	{
		"y": 3.495276409,
		"x": 9.536951602,
		"label": "HP1525301T2D_M6"
	},
	{
		"y": 2.116027247,
		"x": 1.426138252,
		"label": "HP1525301T2D_L17"
	},
	{
		"y": 2.257172214,
		"x": 0.92710691,
		"label": "HP1526901T2D_C17"
	},
	{
		"y": -4.588353415,
		"x": -11.5630281,
		"label": "HP1526901T2D_C12"
	},
	{
		"y": -1.154392682,
		"x": 1.77510587,
		"label": "HP1525301T2D_P9"
	},
	{
		"y": -0.44855637,
		"x": 1.756438077,
		"label": "HP1526901T2D_F19"
	},
	{
		"y": -0.862833623,
		"x": -7.16997088,
		"label": "HP1525301T2D_O8"
	},
	{
		"y": 4.36134816,
		"x": 8.716079737,
		"label": "HP1525301T2D_N10"
	},
	{
		"y": 4.077394468,
		"x": 9.524862354,
		"label": "HP1526901T2D_K19"
	},
	{
		"y": 2.944197104,
		"x": 7.08248314,
		"label": "HP1525301T2D_J17"
	},
	{
		"y": -0.778692431,
		"x": 2.089197439,
		"label": "HP1526901T2D_D9"
	},
	{
		"y": 0.377573818,
		"x": 0.925123353,
		"label": "HP1525301T2D_D12"
	},
	{
		"y": -3.41838068,
		"x": -11.19930615,
		"label": "HP1525301T2D_L19"
	},
	{
		"y": 3.275919624,
		"x": 8.478229602,
		"label": "HP1526901T2D_F8"
	},
	{
		"y": -3.21253835,
		"x": -10.96017501,
		"label": "HP1526901T2D_L8"
	},
	{
		"y": -0.713458938,
		"x": 1.721843721,
		"label": "HP1526901T2D_P19"
	},
	{
		"y": -2.777387179,
		"x": -10.86385018,
		"label": "HP1526901T2D_M11"
	},
	{
		"y": 3.634924848,
		"x": 9.562729123,
		"label": "HP1525301T2D_N1"
	},
	{
		"y": 4.073875109,
		"x": 9.527829207,
		"label": "HP1525301T2D_B21"
	},
	{
		"y": -3.042799469,
		"x": -10.9239392,
		"label": "HP1525301T2D_J11"
	},
	{
		"y": -1.444615488,
		"x": -10.21297978,
		"label": "HP1525301T2D_D20"
	},
	{
		"y": -3.915449447,
		"x": -11.44595627,
		"label": "HP1526901T2D_O20"
	},
	{
		"y": 3.917632378,
		"x": 9.4965943,
		"label": "HP1525301T2D_H16"
	},
	{
		"y": -3.245131971,
		"x": -10.89885619,
		"label": "HP1526901T2D_J15"
	},
	{
		"y": 3.152317269,
		"x": 8.839542703,
		"label": "HP1526901T2D_E14"
	},
	{
		"y": 2.245121051,
		"x": 1.178287013,
		"label": "HP1526901T2D_C11"
	},
	{
		"y": 3.855163516,
		"x": 9.446665486,
		"label": "HP1526901T2D_H21"
	},
	{
		"y": 3.688303429,
		"x": 9.511721119,
		"label": "HP1525301T2D_M15"
	},
	{
		"y": -0.965202118,
		"x": 2.143250475,
		"label": "HP1525301T2D_A5"
	},
	{
		"y": -3.847037858,
		"x": -11.26676925,
		"label": "HP1526901T2D_D23"
	},
	{
		"y": 2.992131229,
		"x": 8.185690321,
		"label": "HP1526901T2D_C7"
	},
	{
		"y": -2.827900335,
		"x": -11.00117043,
		"label": "HP1525301T2D_C18"
	},
	{
		"y": -0.641408134,
		"x": 2.231226286,
		"label": "HP1526901T2D_L23"
	},
	{
		"y": -1.014029685,
		"x": 2.033741743,
		"label": "HP1525301T2D_M10"
	},
	{
		"y": -0.602691206,
		"x": 2.256052038,
		"label": "HP1526901T2D_N2"
	},
	{
		"y": 3.631762475,
		"x": 9.579541568,
		"label": "HP1525301T2D_C19"
	},
	{
		"y": 0.378231807,
		"x": 1.035951127,
		"label": "HP1526901T2D_O10"
	},
	{
		"y": -0.606498802,
		"x": 2.04062771,
		"label": "HP1526901T2D_H19"
	},
	{
		"y": -0.918768348,
		"x": 1.906400094,
		"label": "HP1526901T2D_C6"
	},
	{
		"y": 2.949997005,
		"x": 7.082212384,
		"label": "HP1526901T2D_I9"
	},
	{
		"y": 1.136759643,
		"x": 1.15873909,
		"label": "HP1526901T2D_E19"
	},
	{
		"y": -3.155547678,
		"x": -10.8889174,
		"label": "HP1526901T2D_B22"
	},
	{
		"y": -0.771448788,
		"x": 2.214678212,
		"label": "HP1526901T2D_L21"
	},
	{
		"y": 4.556553653,
		"x": 8.715158951,
		"label": "HP1525301T2D_K8"
	},
	{
		"y": 1.333832183,
		"x": 0.96870913,
		"label": "HP1526901T2D_I11"
	},
	{
		"y": -3.004441839,
		"x": -10.91619071,
		"label": "HP1525301T2D_M18"
	},
	{
		"y": 0.106752515,
		"x": 1.262660851,
		"label": "HP1526901T2D_E10"
	},
	{
		"y": 4.818481287,
		"x": 8.132126284,
		"label": "HP1525301T2D_H8"
	},
	{
		"y": 0.246336553,
		"x": 1.230579747,
		"label": "HP1526901T2D_L12"
	},
	{
		"y": -2.960788632,
		"x": -10.93633472,
		"label": "HP1526901T2D_D11"
	},
	{
		"y": -0.679853965,
		"x": 1.756593669,
		"label": "HP1525301T2D_B7"
	},
	{
		"y": 3.910797713,
		"x": 9.491953761,
		"label": "HP1525301T2D_K2"
	},
	{
		"y": -1.952865179,
		"x": -11.51699779,
		"label": "HP1525301T2D_O4"
	},
	{
		"y": 2.121412296,
		"x": 1.319955696,
		"label": "HP1526901T2D_H10"
	},
	{
		"y": 3.903996138,
		"x": 9.16151721,
		"label": "HP1525301T2D_M9"
	},
	{
		"y": -1.013760348,
		"x": 2.059378021,
		"label": "HP1526901T2D_D1"
	},
	{
		"y": 5.210408418,
		"x": 7.689296997,
		"label": "HP1525301T2D_K7"
	},
	{
		"y": 2.934242161,
		"x": 7.130390545,
		"label": "HP1525301T2D_D21"
	},
	{
		"y": -2.415345911,
		"x": -11.36065676,
		"label": "HP1526901T2D_L22"
	},
	{
		"y": -0.666284739,
		"x": 1.819812225,
		"label": "HP1526901T2D_P1"
	},
	{
		"y": -1.237501601,
		"x": 1.23173467,
		"label": "HP1525301T2D_F20"
	},
	{
		"y": -1.060764485,
		"x": 1.62646377,
		"label": "HP1526901T2D_E6"
	},
	{
		"y": 4.876825213,
		"x": 8.536038655,
		"label": "HP1525301T2D_K5"
	},
	{
		"y": 0.355601602,
		"x": 1.135876393,
		"label": "HP1526901T2D_M22"
	},
	{
		"y": -1.959144002,
		"x": -10.84740505,
		"label": "HP1525301T2D_N15"
	},
	{
		"y": 3.793569138,
		"x": 9.617484781,
		"label": "HP1525301T2D_B14"
	},
	{
		"y": -0.753027085,
		"x": 2.238472562,
		"label": "HP1525301T2D_B18"
	},
	{
		"y": 3.806129311,
		"x": 9.475764434,
		"label": "HP1526901T2D_J12"
	},
	{
		"y": 4.051918236,
		"x": 9.834483416,
		"label": "HP1525301T2D_D4"
	},
	{
		"y": -0.507984714,
		"x": 2.224750111,
		"label": "HP1526901T2D_M23"
	},
	{
		"y": -0.381123505,
		"x": 2.208135762,
		"label": "HP1525301T2D_K19"
	},
	{
		"y": -1.050883098,
		"x": 2.059838695,
		"label": "HP1525301T2D_G1"
	},
	{
		"y": -2.983419954,
		"x": -11.03397013,
		"label": "HP1525301T2D_K20"
	},
	{
		"y": 4.903604787,
		"x": 8.504438095,
		"label": "HP1525301T2D_F3"
	},
	{
		"y": -0.298695391,
		"x": 1.67705603,
		"label": "HP1526901T2D_F20"
	},
	{
		"y": -0.565074905,
		"x": 1.766014549,
		"label": "HP1526901T2D_N14"
	},
	{
		"y": 3.896935968,
		"x": 9.470306692,
		"label": "HP1525301T2D_G10"
	},
	{
		"y": 1.253266684,
		"x": 0.957689963,
		"label": "HP1525301T2D_M17"
	},
	{
		"y": -3.85192491,
		"x": -11.35267153,
		"label": "HP1525301T2D_G24"
	},
	{
		"y": 3.90730146,
		"x": 9.533541909,
		"label": "HP1525301T2D_H2"
	},
	{
		"y": -2.966435559,
		"x": -10.98391533,
		"label": "HP1525301T2D_H15"
	},
	{
		"y": 1.13854739,
		"x": 1.19196345,
		"label": "HP1525301T2D_A7"
	},
	{
		"y": 3.514316014,
		"x": 8.690538454,
		"label": "HP1526901T2D_A21"
	},
	{
		"y": 3.978907367,
		"x": 9.476096707,
		"label": "HP1525301T2D_H1"
	},
	{
		"y": -3.01312542,
		"x": -10.88602142,
		"label": "HP1525301T2D_J3"
	},
	{
		"y": 1.342431268,
		"x": 0.89117616,
		"label": "HP1526901T2D_F23"
	},
	{
		"y": -1.036490405,
		"x": 1.721844296,
		"label": "HP1525301T2D_J19"
	},
	{
		"y": 0.513158369,
		"x": 0.992405848,
		"label": "HP1526901T2D_G19"
	},
	{
		"y": -0.813683952,
		"x": 1.986519392,
		"label": "HP1525301T2D_G18"
	},
	{
		"y": -3.148532271,
		"x": -10.87078572,
		"label": "HP1526901T2D_L9"
	},
	{
		"y": 4.110849847,
		"x": 9.454787262,
		"label": "HP1526901T2D_G22"
	},
	{
		"y": -3.063455378,
		"x": -10.93660579,
		"label": "HP1526901T2D_P16"
	},
	{
		"y": 3.752116098,
		"x": 9.508515127,
		"label": "HP1525301T2D_H18"
	},
	{
		"y": 1.13182807,
		"x": 1.165820143,
		"label": "HP1526901T2D_C24"
	},
	{
		"y": 2.016941147,
		"x": 1.353958199,
		"label": "HP1526901T2D_L6"
	},
	{
		"y": -0.911479821,
		"x": 1.816595062,
		"label": "HP1526901T2D_I4"
	},
	{
		"y": 3.671566462,
		"x": 8.936747834,
		"label": "HP1525301T2D_O16"
	},
	{
		"y": -2.850828261,
		"x": -10.84702934,
		"label": "HP1526901T2D_G20"
	},
	{
		"y": -0.991354462,
		"x": 1.653709079,
		"label": "HP1525301T2D_E16"
	},
	{
		"y": 4.048189224,
		"x": 9.477625523,
		"label": "HP1526901T2D_B5"
	},
	{
		"y": -2.720539166,
		"x": -10.67990618,
		"label": "HP1526901T2D_E7"
	},
	{
		"y": 3.858102836,
		"x": 9.489779589,
		"label": "HP1526901T2D_O4"
	},
	{
		"y": 2.06900339,
		"x": 1.404056466,
		"label": "HP1526901T2D_P18"
	},
	{
		"y": 3.884171538,
		"x": 9.506696231,
		"label": "HP1525301T2D_I24"
	},
	{
		"y": 3.942287517,
		"x": 9.433480869,
		"label": "HP1525301T2D_O24"
	},
	{
		"y": -3.010793483,
		"x": -10.92732093,
		"label": "HP1525301T2D_F9"
	},
	{
		"y": 1.143639707,
		"x": 0.969916764,
		"label": "HP1526901T2D_D21"
	},
	{
		"y": -2.331134856,
		"x": -10.1977955,
		"label": "HP1525301T2D_E6"
	},
	{
		"y": 2.200291441,
		"x": 1.229885355,
		"label": "HP1526901T2D_C10"
	},
	{
		"y": -0.167665574,
		"x": 1.082869443,
		"label": "HP1526901T2D_D14"
	},
	{
		"y": 1.38921734,
		"x": 0.90253434,
		"label": "HP1526901T2D_C1"
	},
	{
		"y": 3.755781621,
		"x": 9.454145883,
		"label": "HP1526901T2D_D12"
	},
	{
		"y": 0.413687785,
		"x": 1.000896779,
		"label": "HP1526901T2D_E5"
	},
	{
		"y": 3.912209058,
		"x": 9.279453782,
		"label": "HP1525301T2D_M20"
	},
	{
		"y": -2.671439594,
		"x": -11.1272587,
		"label": "HP1525301T2D_P3"
	},
	{
		"y": -2.702490675,
		"x": -11.05647775,
		"label": "HP1525301T2D_I20"
	},
	{
		"y": -3.017796237,
		"x": -10.82574698,
		"label": "HP1526901T2D_F11"
	},
	{
		"y": 2.194295528,
		"x": 1.306286969,
		"label": "HP1526901T2D_G4"
	},
	{
		"y": 2.143252356,
		"x": 1.355649658,
		"label": "HP1526901T2D_P4"
	},
	{
		"y": -0.578807422,
		"x": 1.961739088,
		"label": "HP1526901T2D_B14"
	},
	{
		"y": 3.99847313,
		"x": 9.571979507,
		"label": "HP1525301T2D_H17"
	},
	{
		"y": 3.890665181,
		"x": 9.419150638,
		"label": "HP1525301T2D_C21"
	},
	{
		"y": -0.602660866,
		"x": 1.96313232,
		"label": "HP1526901T2D_C2"
	},
	{
		"y": 3.832238357,
		"x": 9.545908413,
		"label": "HP1525301T2D_L13"
	},
	{
		"y": 3.846801211,
		"x": 9.422080511,
		"label": "HP1525301T2D_K17"
	},
	{
		"y": -1.239704086,
		"x": 1.53790251,
		"label": "HP1526901T2D_K14"
	},
	{
		"y": 0.250643541,
		"x": 1.172189553,
		"label": "HP1526901T2D_G9"
	},
	{
		"y": -2.12070787,
		"x": -8.599624463,
		"label": "HP1525301T2D_B17"
	},
	{
		"y": 4.973917509,
		"x": 8.524206989,
		"label": "HP1526901T2D_I17"
	},
	{
		"y": -0.798190001,
		"x": 2.268383758,
		"label": "HP1525301T2D_A3"
	},
	{
		"y": 0.435654618,
		"x": 1.066626642,
		"label": "HP1525301T2D_N21"
	},
	{
		"y": 3.682584571,
		"x": 9.478096422,
		"label": "HP1525301T2D_D8"
	},
	{
		"y": -2.426604293,
		"x": -10.74768973,
		"label": "HP1526901T2D_D6"
	},
	{
		"y": -2.414046749,
		"x": -0.56723707,
		"label": "HP1525301T2D_N19"
	},
	{
		"y": 2.254115749,
		"x": 1.064845809,
		"label": "HP1526901T2D_I22"
	},
	{
		"y": -4.202829522,
		"x": -11.37091225,
		"label": "HP1526901T2D_F6"
	},
	{
		"y": 2.037719046,
		"x": 1.332503548,
		"label": "HP1526901T2D_O8"
	},
	{
		"y": 0.168825975,
		"x": 0.909274107,
		"label": "HP1526901T2D_B13"
	},
	{
		"y": 0.255019528,
		"x": 1.412880593,
		"label": "HP1526901T2D_H3"
	},
	{
		"y": -0.557890016,
		"x": 2.31122045,
		"label": "HP1525301T2D_O5"
	},
	{
		"y": 5.182670513,
		"x": 7.899185312,
		"label": "HP1526901T2D_M18"
	},
	{
		"y": 3.840952313,
		"x": 9.497902197,
		"label": "HP1525301T2D_M12"
	},
	{
		"y": -3.032445453,
		"x": -10.96933854,
		"label": "HP1525301T2D_A23"
	},
	{
		"y": 0.129217447,
		"x": 1.18744269,
		"label": "HP1526901T2D_J17"
	},
	{
		"y": 4.945856096,
		"x": 8.271352015,
		"label": "HP1526901T2D_E16"
	},
	{
		"y": 3.986014055,
		"x": 9.486678896,
		"label": "HP1525301T2D_N12"
	},
	{
		"y": 3.486694196,
		"x": 9.047836308,
		"label": "HP1525301T2D_C11"
	},
	{
		"y": -2.909614846,
		"x": -10.93720567,
		"label": "HP1525301T2D_B2"
	},
	{
		"y": -0.673781017,
		"x": 1.751756249,
		"label": "HP1526901T2D_D16"
	},
	{
		"y": -0.50719958,
		"x": 2.165317161,
		"label": "HP1526901T2D_M16"
	},
	{
		"y": -0.729329757,
		"x": 1.901932857,
		"label": "HP1525301T2D_D9"
	},
	{
		"y": 1.965779301,
		"x": 1.387855322,
		"label": "HP1525301T2D_G8"
	},
	{
		"y": 3.82456482,
		"x": 9.431138102,
		"label": "HP1525301T2D_I8"
	},
	{
		"y": 3.75133978,
		"x": 9.590660087,
		"label": "HP1525301T2D_O22"
	},
	{
		"y": 3.54910641,
		"x": 9.522519428,
		"label": "HP1525301T2D_K1"
	},
	{
		"y": 3.952271287,
		"x": 9.487845089,
		"label": "HP1525301T2D_E17"
	},
	{
		"y": -0.459502013,
		"x": 2.420998851,
		"label": "HP1525301T2D_E22"
	},
	{
		"y": -0.589548411,
		"x": 2.241202841,
		"label": "HP1525301T2D_K22"
	},
	{
		"y": 3.679431939,
		"x": 9.542043887,
		"label": "HP1525301T2D_D15"
	},
	{
		"y": 3.852596369,
		"x": 9.51927225,
		"label": "HP1526901T2D_H5"
	},
	{
		"y": -0.564299372,
		"x": 2.093073266,
		"label": "HP1525301T2D_H20"
	},
	{
		"y": -0.771777951,
		"x": 1.696004112,
		"label": "HP1525301T2D_N9"
	},
	{
		"y": 3.660009698,
		"x": 9.476680783,
		"label": "HP1525301T2D_G21"
	},
	{
		"y": 1.801936711,
		"x": 1.554412061,
		"label": "HP1525301T2D_M14"
	},
	{
		"y": -2.667643539,
		"x": -10.88061295,
		"label": "HP1526901T2D_N17"
	},
	{
		"y": 1.790434574,
		"x": 1.539465504,
		"label": "HP1526901T2D_A5"
	},
	{
		"y": -1.190919171,
		"x": 1.63941686,
		"label": "HP1525301T2D_O13"
	},
	{
		"y": 2.049871335,
		"x": 1.280911474,
		"label": "HP1526901T2D_F18"
	},
	{
		"y": 4.761570482,
		"x": 8.545927277,
		"label": "HP1526901T2D_O19"
	},
	{
		"y": 2.156178759,
		"x": 1.352372761,
		"label": "HP1526901T2D_D17"
	},
	{
		"y": -2.648766988,
		"x": -11.0973881,
		"label": "HP1525301T2D_I14"
	},
	{
		"y": 3.028787109,
		"x": 9.401926608,
		"label": "HP1525301T2D_E4"
	},
	{
		"y": 3.861445539,
		"x": 9.442457941,
		"label": "HP1525301T2D_C22"
	},
	{
		"y": -2.69818229,
		"x": -10.98904587,
		"label": "HP1525301T2D_J6"
	},
	{
		"y": -2.896029349,
		"x": -11.02234735,
		"label": "HP1525301T2D_E10"
	},
	{
		"y": -4.6402386,
		"x": -9.580377286,
		"label": "HP1525301T2D_A4"
	},
	{
		"y": 4.867349684,
		"x": 8.42653031,
		"label": "HP1525301T2D_B12"
	},
	{
		"y": 3.831574286,
		"x": 9.522357602,
		"label": "HP1525301T2D_B3"
	},
	{
		"y": -0.537390092,
		"x": 2.269966105,
		"label": "HP1526901T2D_K15"
	},
	{
		"y": -0.933111412,
		"x": 1.789280518,
		"label": "HP1525301T2D_J1"
	},
	{
		"y": 3.936222276,
		"x": 9.401660053,
		"label": "HP1525301T2D_N6"
	},
	{
		"y": 1.986432292,
		"x": 1.524620091,
		"label": "HP1526901T2D_A14"
	},
	{
		"y": 1.53679919,
		"x": 1.530617756,
		"label": "HP1526901T2D_A13"
	},
	{
		"y": 3.892532137,
		"x": 9.526968445,
		"label": "HP1526901T2D_N11"
	},
	{
		"y": -0.979912568,
		"x": 1.971297798,
		"label": "HP1526901T2D_I15"
	},
	{
		"y": 1.924712502,
		"x": 1.535965696,
		"label": "HP1526901T2D_B10"
	},
	{
		"y": 1.847607036,
		"x": 1.517174217,
		"label": "HP1526901T2D_K7"
	},
	{
		"y": -2.778370575,
		"x": -10.95018463,
		"label": "HP1525301T2D_G7"
	},
	{
		"y": 3.760215566,
		"x": 9.392614391,
		"label": "HP1526901T2D_H8"
	},
	{
		"y": 3.991692537,
		"x": 9.502288671,
		"label": "HP1525301T2D_I16"
	},
	{
		"y": -2.954152182,
		"x": -11.02234082,
		"label": "HP1525301T2D_E18"
	},
	{
		"y": 0.415665562,
		"x": 0.977224578,
		"label": "HP1526901T2D_N19"
	},
	{
		"y": 3.941511501,
		"x": 9.464139492,
		"label": "HP1526901T2D_B3"
	},
	{
		"y": -0.676730319,
		"x": 2.200211502,
		"label": "HP1526901T2D_G8"
	},
	{
		"y": 0.454817048,
		"x": 0.833072755,
		"label": "HP1525301T2D_O11"
	},
	{
		"y": 1.04361471,
		"x": 4.279512637,
		"label": "HP1525301T2D_E8"
	},
	{
		"y": 0.420676597,
		"x": 0.837894161,
		"label": "HP1526901T2D_M3"
	},
	{
		"y": -2.714356972,
		"x": -11.1615559,
		"label": "HP1525301T2D_O19"
	},
	{
		"y": -3.174656921,
		"x": -10.87644393,
		"label": "HP1526901T2D_H15"
	},
	{
		"y": 1.275315101,
		"x": 1.05236572,
		"label": "HP1526901T2D_I18"
	},
	{
		"y": 3.818363975,
		"x": 9.481917865,
		"label": "HP1525301T2D_P23"
	},
	{
		"y": -3.087502512,
		"x": -10.93173522,
		"label": "HP1526901T2D_C18"
	},
	{
		"y": -2.981454506,
		"x": -11.09715543,
		"label": "HP1525301T2D_L18"
	},
	{
		"y": -0.823420194,
		"x": 2.033091002,
		"label": "HP1525301T2D_N24"
	},
	{
		"y": -0.818039045,
		"x": 2.185982146,
		"label": "HP1526901T2D_M7"
	},
	{
		"y": 1.352739072,
		"x": 0.951584204,
		"label": "HP1526901T2D_N16"
	},
	{
		"y": 5.099897823,
		"x": 8.310146603,
		"label": "HP1526901T2D_C8"
	},
	{
		"y": -1.362627132,
		"x": -8.521250098,
		"label": "HP1525301T2D_O10"
	},
	{
		"y": 4.757709107,
		"x": 8.702405826,
		"label": "HP1526901T2D_H2"
	},
	{
		"y": -0.630939059,
		"x": 2.127602305,
		"label": "HP1526901T2D_I16"
	},
	{
		"y": 0.330104299,
		"x": 1.113976489,
		"label": "HP1526901T2D_F7"
	},
	{
		"y": -3.215622991,
		"x": -10.93736635,
		"label": "HP1526901T2D_I23"
	},
	{
		"y": -0.827176696,
		"x": 2.155677629,
		"label": "HP1525301T2D_K3"
	},
	{
		"y": 1.189227751,
		"x": 1.084662194,
		"label": "HP1525301T2D_J10"
	},
	{
		"y": -0.85807249,
		"x": 1.383771473,
		"label": "HP1526901T2D_N8"
	},
	{
		"y": -4.2216648,
		"x": -10.97367864,
		"label": "HP1526901T2D_O11"
	},
	{
		"y": -0.429808531,
		"x": 2.156396375,
		"label": "HP1526901T2D_A8"
	}
];

/***/ }),
/* 320 */,
/* 321 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(121);
module.exports = __webpack_require__(120);


/***/ })
],[321]);