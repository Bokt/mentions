module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! exports provided: filterUserMentions, filterPostMentions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filterUserMentions", function() { return _src_forum__WEBPACK_IMPORTED_MODULE_0__["filterUserMentions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filterPostMentions", function() { return _src_forum__WEBPACK_IMPORTED_MODULE_0__["filterPostMentions"]; });

/*
 * This file is part of Flarum.
 *
 * (c) Toby Zerner <toby.zerner@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./node_modules/textarea-caret/index.js":
/*!**********************************************!*\
  !*** ./node_modules/textarea-caret/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* jshint browser: true */

(function () {

// We'll copy the properties below into the mirror div.
// Note that some browsers, such as Firefox, do not concatenate properties
// into their shorthand (e.g. padding-top, padding-bottom etc. -> padding),
// so we have to list every single property explicitly.
var properties = [
  'direction',  // RTL support
  'boxSizing',
  'width',  // on Chrome and IE, exclude the scrollbar, so the mirror div wraps exactly as the textarea does
  'height',
  'overflowX',
  'overflowY',  // copy the scrollbar for IE

  'borderTopWidth',
  'borderRightWidth',
  'borderBottomWidth',
  'borderLeftWidth',
  'borderStyle',

  'paddingTop',
  'paddingRight',
  'paddingBottom',
  'paddingLeft',

  // https://developer.mozilla.org/en-US/docs/Web/CSS/font
  'fontStyle',
  'fontVariant',
  'fontWeight',
  'fontStretch',
  'fontSize',
  'fontSizeAdjust',
  'lineHeight',
  'fontFamily',

  'textAlign',
  'textTransform',
  'textIndent',
  'textDecoration',  // might not make a difference, but better be safe

  'letterSpacing',
  'wordSpacing',

  'tabSize',
  'MozTabSize'

];

var isBrowser = (typeof window !== 'undefined');
var isFirefox = (isBrowser && window.mozInnerScreenX != null);

function getCaretCoordinates(element, position, options) {
  if (!isBrowser) {
    throw new Error('textarea-caret-position#getCaretCoordinates should only be called in a browser');
  }

  var debug = options && options.debug || false;
  if (debug) {
    var el = document.querySelector('#input-textarea-caret-position-mirror-div');
    if (el) el.parentNode.removeChild(el);
  }

  // The mirror div will replicate the textarea's style
  var div = document.createElement('div');
  div.id = 'input-textarea-caret-position-mirror-div';
  document.body.appendChild(div);

  var style = div.style;
  var computed = window.getComputedStyle ? window.getComputedStyle(element) : element.currentStyle;  // currentStyle for IE < 9
  var isInput = element.nodeName === 'INPUT';

  // Default textarea styles
  style.whiteSpace = 'pre-wrap';
  if (!isInput)
    style.wordWrap = 'break-word';  // only for textarea-s

  // Position off-screen
  style.position = 'absolute';  // required to return coordinates properly
  if (!debug)
    style.visibility = 'hidden';  // not 'display: none' because we want rendering

  // Transfer the element's properties to the div
  properties.forEach(function (prop) {
    if (isInput && prop === 'lineHeight') {
      // Special case for <input>s because text is rendered centered and line height may be != height
      style.lineHeight = computed.height;
    } else {
      style[prop] = computed[prop];
    }
  });

  if (isFirefox) {
    // Firefox lies about the overflow property for textareas: https://bugzilla.mozilla.org/show_bug.cgi?id=984275
    if (element.scrollHeight > parseInt(computed.height))
      style.overflowY = 'scroll';
  } else {
    style.overflow = 'hidden';  // for Chrome to not render a scrollbar; IE keeps overflowY = 'scroll'
  }

  div.textContent = element.value.substring(0, position);
  // The second special handling for input type="text" vs textarea:
  // spaces need to be replaced with non-breaking spaces - http://stackoverflow.com/a/13402035/1269037
  if (isInput)
    div.textContent = div.textContent.replace(/\s/g, '\u00a0');

  var span = document.createElement('span');
  // Wrapping must be replicated *exactly*, including when a long word gets
  // onto the next line, with whitespace at the end of the line before (#7).
  // The  *only* reliable way to do that is to copy the *entire* rest of the
  // textarea's content into the <span> created at the caret position.
  // For inputs, just '.' would be enough, but no need to bother.
  span.textContent = element.value.substring(position) || '.';  // || because a completely empty faux span doesn't render at all
  div.appendChild(span);

  var coordinates = {
    top: span.offsetTop + parseInt(computed['borderTopWidth']),
    left: span.offsetLeft + parseInt(computed['borderLeftWidth']),
    height: parseInt(computed['lineHeight'])
  };

  if (debug) {
    span.style.backgroundColor = '#aaa';
  } else {
    document.body.removeChild(div);
  }

  return coordinates;
}

if ( true && typeof module.exports != 'undefined') {
  module.exports = getCaretCoordinates;
} else if(isBrowser) {
  window.getCaretCoordinates = getCaretCoordinates;
}

}());


/***/ }),

/***/ "./src/forum/addComposerAutocomplete.js":
/*!**********************************************!*\
  !*** ./src/forum/addComposerAutocomplete.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addComposerAutocomplete; });
/* harmony import */ var textarea_caret__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! textarea-caret */ "./node_modules/textarea-caret/index.js");
/* harmony import */ var textarea_caret__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(textarea_caret__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_ComposerBody__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/ComposerBody */ "flarum/components/ComposerBody");
/* harmony import */ var flarum_components_ComposerBody__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_ComposerBody__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_TextEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/TextEditor */ "flarum/components/TextEditor");
/* harmony import */ var flarum_components_TextEditor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_TextEditor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_components_TextEditorButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/TextEditorButton */ "flarum/components/TextEditorButton");
/* harmony import */ var flarum_components_TextEditorButton__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_TextEditorButton__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/helpers/avatar */ "flarum/helpers/avatar");
/* harmony import */ var flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_helpers_username__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/helpers/username */ "flarum/helpers/username");
/* harmony import */ var flarum_helpers_username__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_username__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_helpers_highlight__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/helpers/highlight */ "flarum/helpers/highlight");
/* harmony import */ var flarum_helpers_highlight__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_highlight__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var flarum_utils_KeyboardNavigatable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/utils/KeyboardNavigatable */ "flarum/utils/KeyboardNavigatable");
/* harmony import */ var flarum_utils_KeyboardNavigatable__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_KeyboardNavigatable__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var flarum_utils_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! flarum/utils/string */ "flarum/utils/string");
/* harmony import */ var flarum_utils_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_AutocompleteDropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/AutocompleteDropdown */ "./src/forum/components/AutocompleteDropdown.js");











function addComposerAutocomplete() {
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_1__["extend"])(flarum_components_ComposerBody__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'config', function (original, isInitialized) {
    if (isInitialized) return;
    var composer = this;
    var $container = $('<div class="ComposerBody-mentionsDropdownContainer"></div>');
    var dropdown = new _components_AutocompleteDropdown__WEBPACK_IMPORTED_MODULE_10__["default"]({
      items: []
    });
    var $textarea = this.$('textarea').wrap('<div class="ComposerBody-mentionsWrapper"></div>');
    var searched = [];
    var mentionStart;
    var typed;
    var searchTimeout;

    var applySuggestion = function applySuggestion(replacement) {
      var insert = replacement + ' '; // When calling setValue(), mentionStart will be set back to 0 so we need to compute this beforehand

      var index = mentionStart - 1 + insert.length;
      var content = composer.content();
      composer.editor.setValue(content.substring(0, mentionStart - 1) + insert + content.substr($textarea[0].selectionStart));
      composer.editor.setSelectionRange(index, index);
      dropdown.hide();
    };

    this.navigator = new flarum_utils_KeyboardNavigatable__WEBPACK_IMPORTED_MODULE_8___default.a();
    this.navigator.when(function () {
      return dropdown.active;
    }).onUp(function () {
      return dropdown.navigate(-1);
    }).onDown(function () {
      return dropdown.navigate(1);
    }).onSelect(dropdown.complete.bind(dropdown)).onCancel(dropdown.hide.bind(dropdown)).bindTo($textarea);
    $textarea.after($container).on('click keyup input', function (e) {
      var _this = this;

      // Up, down, enter, tab, escape, left, right.
      if ([9, 13, 27, 40, 38, 37, 39].indexOf(e.which) !== -1) return;
      var cursor = this.selectionStart;
      if (this.selectionEnd - cursor > 0) return; // Search backwards from the cursor for an '@' symbol. If we find one,
      // we will want to show the autocomplete dropdown!

      var value = this.value;
      mentionStart = 0;

      for (var i = cursor - 1; i >= cursor - 30; i--) {
        var character = value.substr(i, 1);

        if (character === '@') {
          mentionStart = i + 1;
          break;
        }
      }

      dropdown.hide();
      dropdown.active = false;

      if (mentionStart) {
        typed = value.substring(mentionStart, cursor).toLowerCase();

        var makeSuggestion = function makeSuggestion(user, replacement, content, className) {
          if (className === void 0) {
            className = '';
          }

          var username = flarum_helpers_username__WEBPACK_IMPORTED_MODULE_6___default()(user);

          if (typed) {
            username.children[0] = flarum_helpers_highlight__WEBPACK_IMPORTED_MODULE_7___default()(username.children[0], typed);
          }

          return m("button", {
            className: 'PostPreview ' + className,
            onclick: function onclick() {
              return applySuggestion(replacement);
            },
            onmouseenter: function onmouseenter() {
              dropdown.setIndex($(this).parent().index());
            }
          }, m("span", {
            className: "PostPreview-content"
          }, flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_5___default()(user), username, " ", ' ', content));
        };

        var userMatches = function userMatches(user) {
          var names = [user.username(), user.displayName()];
          return names.some(function (value) {
            return value.toLowerCase().substr(0, typed.length) === typed;
          });
        };

        var buildSuggestions = function buildSuggestions() {
          var suggestions = []; // If the user has started to type a username, then suggest users
          // matching that username.

          if (typed) {
            app.store.all('users').forEach(function (user) {
              if (!userMatches(user)) return;
              suggestions.push(makeSuggestion(user, '@' + user.username(), '', 'MentionsDropdown-user'));
            });
          } // If the user is replying to a discussion, or if they are editing a
          // post, then we can suggest other posts in the discussion to mention.
          // We will add the 5 most recent comments in the discussion which
          // match any username characters that have been typed.


          var composerPost = composer.props.post;
          var discussion = composerPost && composerPost.discussion() || composer.props.discussion;

          if (discussion) {
            discussion.posts().filter(function (post) {
              return post && post.contentType() === 'comment' && (!composerPost || post.number() < composerPost.number());
            }).sort(function (a, b) {
              return b.createdAt() - a.createdAt();
            }).filter(function (post) {
              var user = post.user();
              return user && userMatches(user);
            }).splice(0, 5).forEach(function (post) {
              var user = post.user();
              suggestions.push(makeSuggestion(user, '@' + user.username() + '#' + post.id(), [app.translator.trans('flarum-mentions.forum.composer.reply_to_post_text', {
                number: post.number()
              }), ' — ', Object(flarum_utils_string__WEBPACK_IMPORTED_MODULE_9__["truncate"])(post.contentPlain(), 200)], 'MentionsDropdown-post'));
            });
          }

          if (suggestions.length) {
            dropdown.props.items = suggestions;
            m.render($container[0], dropdown.render());
            dropdown.show();
            var coordinates = textarea_caret__WEBPACK_IMPORTED_MODULE_0___default()(_this, mentionStart);
            var width = dropdown.$().outerWidth();
            var height = dropdown.$().outerHeight();
            var parent = dropdown.$().offsetParent();
            var left = coordinates.left;
            var top = coordinates.top - _this.scrollTop + 15;

            if (top + height > parent.height()) {
              top = coordinates.top - _this.scrollTop - height - 15;
            }

            if (left + width > parent.width()) {
              left = parent.width() - width;
            }

            dropdown.show(left, top);
          } else {
            dropdown.active = false;
            dropdown.hide();
          }
        };

        dropdown.active = true;
        buildSuggestions();
        dropdown.setIndex(0);
        dropdown.$().scrollTop(0);
        clearTimeout(searchTimeout);

        if (typed) {
          searchTimeout = setTimeout(function () {
            var typedLower = typed.toLowerCase();

            if (searched.indexOf(typedLower) === -1) {
              app.store.find('users', {
                filter: {
                  q: typed
                },
                page: {
                  limit: 5
                }
              }).then(function () {
                if (dropdown.active) buildSuggestions();
              });
              searched.push(typedLower);
            }
          }, 250);
        }
      }
    });
  });
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_1__["extend"])(flarum_components_TextEditor__WEBPACK_IMPORTED_MODULE_3___default.a.prototype, 'toolbarItems', function (items) {
    var _this2 = this;

    items.add('mention', m(flarum_components_TextEditorButton__WEBPACK_IMPORTED_MODULE_4___default.a, {
      onclick: function onclick() {
        return _this2.insertAtCursor('@');
      },
      icon: "fas fa-at"
    }, app.translator.trans('flarum-mentions.forum.composer.mention_tooltip')));
  });
}

/***/ }),

/***/ "./src/forum/addMentionedByList.js":
/*!*****************************************!*\
  !*** ./src/forum/addMentionedByList.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addMentionedByList; });
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Model */ "flarum/Model");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Model__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_models_Post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/models/Post */ "flarum/models/Post");
/* harmony import */ var flarum_models_Post__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_models_Post__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/CommentPost */ "flarum/components/CommentPost");
/* harmony import */ var flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_components_PostPreview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/PostPreview */ "flarum/components/PostPreview");
/* harmony import */ var flarum_components_PostPreview__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_PostPreview__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_helpers_punctuateSeries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/helpers/punctuateSeries */ "flarum/helpers/punctuateSeries");
/* harmony import */ var flarum_helpers_punctuateSeries__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_punctuateSeries__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_helpers_username__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/helpers/username */ "flarum/helpers/username");
/* harmony import */ var flarum_helpers_username__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_username__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/helpers/icon */ "flarum/helpers/icon");
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_7__);








function addMentionedByList() {
  flarum_models_Post__WEBPACK_IMPORTED_MODULE_2___default.a.prototype.mentionedBy = flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.hasMany('mentionedBy');
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_3___default.a.prototype, 'footerItems', function (items) {
    var _this = this;

    var post = this.props.post;
    var replies = post.mentionedBy();

    if (replies && replies.length) {
      // If there is only one reply, and it's adjacent to this post, we don't
      // really need to show the list.
      if (replies.length === 1 && replies[0].number() === post.number() + 1) {
        return;
      }

      var hidePreview = function hidePreview() {
        _this.$('.Post-mentionedBy-preview').removeClass('in').one('transitionend', function () {
          $(this).hide();
        });
      };

      var config = function config(element, isInitialized) {
        if (isInitialized) return;
        var $this = $(element);
        var timeout;
        var $preview = $('<ul class="Dropdown-menu Post-mentionedBy-preview fade"/>');
        $this.append($preview);
        $this.children().hover(function () {
          clearTimeout(timeout);
          timeout = setTimeout(function () {
            if (!$preview.hasClass('in') && $preview.is(':visible')) return; // When the user hovers their mouse over the list of people who have
            // replied to the post, render a list of reply previews into a
            // popup.

            m.render($preview[0], replies.map(function (reply) {
              return m("li", {
                "data-number": reply.number()
              }, flarum_components_PostPreview__WEBPACK_IMPORTED_MODULE_4___default.a.component({
                post: reply,
                onclick: hidePreview
              }));
            }));
            $preview.show();
            setTimeout(function () {
              return $preview.off('transitionend').addClass('in');
            });
          }, 500);
        }, function () {
          clearTimeout(timeout);
          timeout = setTimeout(hidePreview, 250);
        }); // Whenever the user hovers their mouse over a particular name in the
        // list of repliers, highlight the corresponding post in the preview
        // popup.

        $this.find('.Post-mentionedBy-summary a').hover(function () {
          $preview.find('[data-number="' + $(this).data('number') + '"]').addClass('active');
        }, function () {
          $preview.find('[data-number]').removeClass('active');
        });
      };

      var users = [];
      var repliers = replies.sort(function (reply) {
        return reply.user() === app.session.user ? -1 : 0;
      }).filter(function (reply) {
        var user = reply.user();

        if (users.indexOf(user) === -1) {
          users.push(user);
          return true;
        }
      });
      var limit = 4;
      var overLimit = repliers.length > limit; // Create a list of unique users who have replied. So even if a user has
      // replied twice, they will only be in this array once.

      var names = repliers.slice(0, overLimit ? limit - 1 : limit).map(function (reply) {
        var user = reply.user();
        return m("a", {
          href: app.route.post(reply),
          config: m.route,
          onclick: hidePreview,
          "data-number": reply.number()
        }, app.session.user === user ? app.translator.trans('flarum-mentions.forum.post.you_text') : flarum_helpers_username__WEBPACK_IMPORTED_MODULE_6___default()(user));
      }); // If there are more users that we've run out of room to display, add a "x
      // others" name to the end of the list. Clicking on it will display a modal
      // with a full list of names.

      if (overLimit) {
        var count = repliers.length - names.length;
        names.push(app.translator.transChoice('flarum-mentions.forum.post.others_text', count, {
          count: count
        }));
      }

      items.add('replies', m("div", {
        className: "Post-mentionedBy",
        config: config
      }, m("span", {
        className: "Post-mentionedBy-summary"
      }, flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_7___default()('fas fa-reply'), app.translator.transChoice('flarum-mentions.forum.post.mentioned_by' + (repliers[0].user() === app.session.user ? '_self' : '') + '_text', names.length, {
        count: names.length,
        users: flarum_helpers_punctuateSeries__WEBPACK_IMPORTED_MODULE_5___default()(names)
      }))));
    }
  });
}

/***/ }),

/***/ "./src/forum/addPostMentionPreviews.js":
/*!*********************************************!*\
  !*** ./src/forum/addPostMentionPreviews.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addPostMentionPreviews; });
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/CommentPost */ "flarum/components/CommentPost");
/* harmony import */ var flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_PostPreview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/PostPreview */ "flarum/components/PostPreview");
/* harmony import */ var flarum_components_PostPreview__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_PostPreview__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/LoadingIndicator */ "flarum/components/LoadingIndicator");
/* harmony import */ var flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_3__);




function addPostMentionPreviews() {
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'config', function () {
    var contentHtml = this.props.post.contentHtml();
    if (contentHtml === this.oldPostContentHtml || this.isEditing()) return;
    this.oldPostContentHtml = contentHtml;
    var parentPost = this.props.post;
    var $parentPost = this.$();
    this.$('.UserMention, .PostMention').each(function () {
      m.route.call(this, this, false, {}, {
        attrs: {
          href: this.getAttribute('href')
        }
      });
    });
    this.$('.PostMention').each(function () {
      var $this = $(this);
      var id = $this.data('id');
      var timeout; // Wrap the mention link in a wrapper element so that we can insert a
      // preview popup as its sibling and relatively position it.

      var $preview = $('<ul class="Dropdown-menu PostMention-preview fade"/>');
      $parentPost.append($preview);

      var getPostElement = function getPostElement() {
        return $(".PostStream-item[data-id=\"" + id + "\"]");
      };

      var showPreview = function showPreview() {
        // When the user hovers their mouse over the mention, look for the
        // post that it's referring to in the stream, and determine if it's
        // in the viewport. If it is, we will "pulsate" it.
        var $post = getPostElement();
        var visible = false;

        if ($post.length) {
          var top = $post.offset().top;
          var scrollTop = window.pageYOffset;

          if (top > scrollTop && top + $post.height() < scrollTop + $(window).height()) {
            $post.addClass('pulsate');
            visible = true;
          }
        } // Otherwise, we will show a popup preview of the post. If the post
        // hasn't yet been loaded, we will need to do that.


        if (!visible) {
          // Position the preview so that it appears above the mention.
          // (The offsetParent should be .Post-body.)
          var positionPreview = function positionPreview() {
            var previewHeight = $preview.outerHeight(true);
            var offset = 0; // If the preview goes off the top of the viewport, reposition it to
            // be below the mention.

            if ($this.offset().top - previewHeight < $(window).scrollTop() + $('#header').outerHeight()) {
              offset += $this.outerHeight(true);
            } else {
              offset -= previewHeight;
            }

            $preview.show().css('top', $this.offset().top - $parentPost.offset().top + offset).css('left', $this.offsetParent().offset().left - $parentPost.offset().left).css('max-width', $this.offsetParent().width());
          };

          var showPost = function showPost(post) {
            var discussion = post.discussion();
            m.render($preview[0], [discussion !== parentPost.discussion() ? m("li", null, m("span", {
              className: "PostMention-preview-discussion"
            }, discussion.title())) : '', m("li", null, flarum_components_PostPreview__WEBPACK_IMPORTED_MODULE_2___default.a.component({
              post: post
            }))]);
            positionPreview();
          };

          var post = app.store.getById('posts', id);

          if (post && post.discussion()) {
            showPost(post);
          } else {
            m.render($preview[0], flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_3___default.a.component());
            app.store.find('posts', id).then(showPost);
            positionPreview();
          }

          setTimeout(function () {
            return $preview.off('transitionend').addClass('in');
          });
        }
      };

      var hidePreview = function hidePreview() {
        getPostElement().removeClass('pulsate');

        if ($preview.hasClass('in')) {
          $preview.removeClass('in').one('transitionend', function () {
            return $preview.hide();
          });
        }
      };

      $this.on('touchstart', function (e) {
        return e.preventDefault();
      });
      $this.add($preview).hover(function () {
        clearTimeout(timeout);
        timeout = setTimeout(showPreview, 250);
      }, function () {
        clearTimeout(timeout);
        getPostElement().removeClass('pulsate');
        timeout = setTimeout(hidePreview, 250);
      }).on('touchend', function (e) {
        showPreview();
        e.stopPropagation();
      });
      $(document).on('touchend', hidePreview);
    });
  });
}

/***/ }),

/***/ "./src/forum/addPostQuoteButton.js":
/*!*****************************************!*\
  !*** ./src/forum/addPostQuoteButton.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addPostQuoteButton; });
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/CommentPost */ "flarum/components/CommentPost");
/* harmony import */ var flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_PostQuoteButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/PostQuoteButton */ "./src/forum/components/PostQuoteButton.js");
/* harmony import */ var _utils_selectedText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/selectedText */ "./src/forum/utils/selectedText.js");




function addPostQuoteButton() {
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'config', function (original, isInitialized) {
    var post = this.props.post;
    if (isInitialized || post.isHidden() || app.session.user && !post.discussion().canReply()) return;
    var $postBody = this.$('.Post-body'); // Wrap the quote button in a wrapper element so that we can render
    // button into it.

    var $container = $('<div class="Post-quoteButtonContainer"></div>');

    var handler = function handler(e) {
      setTimeout(function () {
        var content = Object(_utils_selectedText__WEBPACK_IMPORTED_MODULE_3__["default"])($postBody);

        if (content) {
          var button = new _components_PostQuoteButton__WEBPACK_IMPORTED_MODULE_2__["default"]({
            post: post,
            content: content
          });
          m.render($container[0], button.render());
          var rects = window.getSelection().getRangeAt(0).getClientRects();
          var firstRect = rects[0];

          if (e.clientY < firstRect.bottom && e.clientX - firstRect.right < firstRect.left - e.clientX) {
            button.showStart(firstRect.left, firstRect.top);
          } else {
            var lastRect = rects[rects.length - 1];
            button.showEnd(lastRect.right, lastRect.bottom);
          }
        }
      }, 1);
    };

    this.$().after($container).on('mouseup', handler);

    if ('ontouchstart' in window) {
      document.addEventListener('selectionchange', handler, false);
    }
  });
}

/***/ }),

/***/ "./src/forum/addPostReplyAction.js":
/*!*****************************************!*\
  !*** ./src/forum/addPostReplyAction.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/CommentPost */ "flarum/components/CommentPost");
/* harmony import */ var flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_reply__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/reply */ "./src/forum/utils/reply.js");




/* harmony default export */ __webpack_exports__["default"] = (function () {
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'actionItems', function (items) {
    var post = this.props.post;
    if (post.isHidden() || app.session.user && !post.discussion().canReply()) return;
    items.add('reply', flarum_components_Button__WEBPACK_IMPORTED_MODULE_1___default.a.component({
      className: 'Button Button--link',
      children: app.translator.trans('flarum-mentions.forum.post.reply_link'),
      onclick: function onclick() {
        return Object(_utils_reply__WEBPACK_IMPORTED_MODULE_3__["default"])(post);
      }
    }));
  });
});

/***/ }),

/***/ "./src/forum/components/AutocompleteDropdown.js":
/*!******************************************************!*\
  !*** ./src/forum/components/AutocompleteDropdown.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AutocompleteDropdown; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_1__);



var AutocompleteDropdown =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(AutocompleteDropdown, _Component);

  function AutocompleteDropdown() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = AutocompleteDropdown.prototype;

  _proto.init = function init() {
    this.active = false;
    this.index = 0;
    this.keyWasJustPressed = false;
  };

  _proto.view = function view() {
    return m("ul", {
      className: "Dropdown-menu MentionsDropdown"
    }, this.props.items.map(function (item) {
      return m("li", null, item);
    }));
  };

  _proto.show = function show(left, top) {
    this.$().show().css({
      left: left + 'px',
      top: top + 'px'
    });
    this.active = true;
  };

  _proto.hide = function hide() {
    this.$().hide();
    this.active = false;
  };

  _proto.navigate = function navigate(delta) {
    var _this = this;

    this.keyWasJustPressed = true;
    this.setIndex(this.index + delta, true);
    clearTimeout(this.keyWasJustPressedTimeout);
    this.keyWasJustPressedTimeout = setTimeout(function () {
      return _this.keyWasJustPressed = false;
    }, 500);
  };

  _proto.complete = function complete() {
    this.$('li').eq(this.index).find('button').click();
  };

  _proto.setIndex = function setIndex(index, scrollToItem) {
    if (this.keyWasJustPressed && !scrollToItem) return;
    var $dropdown = this.$();
    var $items = $dropdown.find('li');
    var rangedIndex = index;

    if (rangedIndex < 0) {
      rangedIndex = $items.length - 1;
    } else if (rangedIndex >= $items.length) {
      rangedIndex = 0;
    }

    this.index = rangedIndex;
    var $item = $items.removeClass('active').eq(rangedIndex).addClass('active');

    if (scrollToItem) {
      var dropdownScroll = $dropdown.scrollTop();
      var dropdownTop = $dropdown.offset().top;
      var dropdownBottom = dropdownTop + $dropdown.outerHeight();
      var itemTop = $item.offset().top;
      var itemBottom = itemTop + $item.outerHeight();
      var scrollTop;

      if (itemTop < dropdownTop) {
        scrollTop = dropdownScroll - dropdownTop + itemTop - parseInt($dropdown.css('padding-top'), 10);
      } else if (itemBottom > dropdownBottom) {
        scrollTop = dropdownScroll - dropdownBottom + itemBottom + parseInt($dropdown.css('padding-bottom'), 10);
      }

      if (typeof scrollTop !== 'undefined') {
        $dropdown.stop(true).animate({
          scrollTop: scrollTop
        }, 100);
      }
    }
  };

  return AutocompleteDropdown;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/MentionsUserPage.js":
/*!**************************************************!*\
  !*** ./src/forum/components/MentionsUserPage.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MentionsUserPage; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_PostsUserPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/PostsUserPage */ "flarum/components/PostsUserPage");
/* harmony import */ var flarum_components_PostsUserPage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_PostsUserPage__WEBPACK_IMPORTED_MODULE_1__);


/**
 * The `MentionsUserPage` component shows post which user Mentioned at
 */

var MentionsUserPage =
/*#__PURE__*/
function (_PostsUserPage) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(MentionsUserPage, _PostsUserPage);

  function MentionsUserPage() {
    return _PostsUserPage.apply(this, arguments) || this;
  }

  var _proto = MentionsUserPage.prototype;

  /**
   * Load a new page of the user's activity feed.
   *
   * @param {Integer} [offset] The position to start getting results from.
   * @return {Promise}
   * @protected
   */
  _proto.loadResults = function loadResults(offset) {
    return app.store.find('posts', {
      filter: {
        type: 'comment',
        mentioned: this.user.id()
      },
      page: {
        offset: offset,
        limit: this.loadLimit
      },
      sort: '-createdAt'
    });
  };

  return MentionsUserPage;
}(flarum_components_PostsUserPage__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/PostMentionedNotification.js":
/*!***********************************************************!*\
  !*** ./src/forum/components/PostMentionedNotification.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PostMentionedNotification; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Notification */ "flarum/components/Notification");
/* harmony import */ var flarum_components_Notification__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Notification__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_utils_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/utils/string */ "flarum/utils/string");
/* harmony import */ var flarum_utils_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_string__WEBPACK_IMPORTED_MODULE_2__);




var PostMentionedNotification =
/*#__PURE__*/
function (_Notification) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(PostMentionedNotification, _Notification);

  function PostMentionedNotification() {
    return _Notification.apply(this, arguments) || this;
  }

  var _proto = PostMentionedNotification.prototype;

  _proto.icon = function icon() {
    return 'fas fa-reply';
  };

  _proto.href = function href() {
    var notification = this.props.notification;
    var post = notification.subject();
    var content = notification.content();
    return app.route.discussion(post.discussion(), content && content.replyNumber);
  };

  _proto.content = function content() {
    var notification = this.props.notification;
    var user = notification.fromUser();
    return app.translator.transChoice('flarum-mentions.forum.notifications.post_mentioned_text', 1, {
      user: user
    });
  };

  _proto.excerpt = function excerpt() {
    return Object(flarum_utils_string__WEBPACK_IMPORTED_MODULE_2__["truncate"])(this.props.notification.subject().contentPlain(), 200);
  };

  return PostMentionedNotification;
}(flarum_components_Notification__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/PostQuoteButton.js":
/*!*************************************************!*\
  !*** ./src/forum/components/PostQuoteButton.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PostQuoteButton; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_utils_extract__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/utils/extract */ "flarum/utils/extract");
/* harmony import */ var flarum_utils_extract__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_extract__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_reply__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/reply */ "./src/forum/utils/reply.js");





var PostQuoteButton =
/*#__PURE__*/
function (_Button) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(PostQuoteButton, _Button);

  function PostQuoteButton() {
    return _Button.apply(this, arguments) || this;
  }

  var _proto = PostQuoteButton.prototype;

  _proto.view = function view() {
    var _this = this;

    var post = flarum_utils_extract__WEBPACK_IMPORTED_MODULE_2___default()(this.props, 'post');
    var content = flarum_utils_extract__WEBPACK_IMPORTED_MODULE_2___default()(this.props, 'content');
    this.props.className = 'Button PostQuoteButton';
    this.props.icon = 'fas fa-quote-left';
    this.props.children = app.translator.trans('flarum-mentions.forum.post.quote_button');

    this.props.onclick = function () {
      _this.hide();

      Object(_utils_reply__WEBPACK_IMPORTED_MODULE_3__["default"])(post, content);
    };

    this.props.onmousedown = function (e) {
      return e.stopPropagation();
    };

    return _Button.prototype.view.call(this);
  };

  _proto.config = function config(isInitialized) {
    if (isInitialized) return;
    $(document).on('mousedown', this.hide.bind(this));
  };

  _proto.show = function show(left, top) {
    var $this = this.$().show();
    var parentOffset = $this.offsetParent().offset();
    $this.css('left', left - parentOffset.left).css('top', top - parentOffset.top);
  };

  _proto.showStart = function showStart(left, top) {
    var $this = this.$();
    this.show(left, $(window).scrollTop() + top - $this.outerHeight() - 5);
  };

  _proto.showEnd = function showEnd(right, bottom) {
    var $this = this.$();
    this.show(right - $this.outerWidth(), $(window).scrollTop() + bottom + 5);
  };

  _proto.hide = function hide() {
    this.$().hide();
  };

  return PostQuoteButton;
}(flarum_components_Button__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/UserMentionedNotification.js":
/*!***********************************************************!*\
  !*** ./src/forum/components/UserMentionedNotification.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserMentionedNotification; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Notification */ "flarum/components/Notification");
/* harmony import */ var flarum_components_Notification__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Notification__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_utils_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/utils/string */ "flarum/utils/string");
/* harmony import */ var flarum_utils_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_string__WEBPACK_IMPORTED_MODULE_2__);




var UserMentionedNotification =
/*#__PURE__*/
function (_Notification) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(UserMentionedNotification, _Notification);

  function UserMentionedNotification() {
    return _Notification.apply(this, arguments) || this;
  }

  var _proto = UserMentionedNotification.prototype;

  _proto.icon = function icon() {
    return 'fas fa-at';
  };

  _proto.href = function href() {
    var post = this.props.notification.subject();
    return app.route.discussion(post.discussion(), post.number());
  };

  _proto.content = function content() {
    var user = this.props.notification.fromUser();
    return app.translator.trans('flarum-mentions.forum.notifications.user_mentioned_text', {
      user: user
    });
  };

  _proto.excerpt = function excerpt() {
    return Object(flarum_utils_string__WEBPACK_IMPORTED_MODULE_2__["truncate"])(this.props.notification.subject().contentPlain(), 200);
  };

  return UserMentionedNotification;
}(flarum_components_Notification__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! exports provided: filterUserMentions, filterPostMentions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_NotificationGrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/NotificationGrid */ "flarum/components/NotificationGrid");
/* harmony import */ var flarum_components_NotificationGrid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_NotificationGrid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_utils_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/utils/string */ "flarum/utils/string");
/* harmony import */ var flarum_utils_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_string__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _addPostMentionPreviews__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addPostMentionPreviews */ "./src/forum/addPostMentionPreviews.js");
/* harmony import */ var _addMentionedByList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addMentionedByList */ "./src/forum/addMentionedByList.js");
/* harmony import */ var _addPostReplyAction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addPostReplyAction */ "./src/forum/addPostReplyAction.js");
/* harmony import */ var _addPostQuoteButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./addPostQuoteButton */ "./src/forum/addPostQuoteButton.js");
/* harmony import */ var _addComposerAutocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./addComposerAutocomplete */ "./src/forum/addComposerAutocomplete.js");
/* harmony import */ var _components_PostMentionedNotification__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/PostMentionedNotification */ "./src/forum/components/PostMentionedNotification.js");
/* harmony import */ var _components_UserMentionedNotification__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/UserMentionedNotification */ "./src/forum/components/UserMentionedNotification.js");
/* harmony import */ var flarum_components_UserPage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! flarum/components/UserPage */ "flarum/components/UserPage");
/* harmony import */ var flarum_components_UserPage__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(flarum_components_UserPage__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! flarum/components/LinkButton */ "flarum/components/LinkButton");
/* harmony import */ var flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_MentionsUserPage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/MentionsUserPage */ "./src/forum/components/MentionsUserPage.js");
/* harmony import */ var _utils_textFormatter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./utils/textFormatter */ "./src/forum/utils/textFormatter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filterUserMentions", function() { return _utils_textFormatter__WEBPACK_IMPORTED_MODULE_14__["filterUserMentions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filterPostMentions", function() { return _utils_textFormatter__WEBPACK_IMPORTED_MODULE_14__["filterPostMentions"]; });















flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.initializers.add('flarum-mentions', function () {
  // For every mention of a post inside a post's content, set up a hover handler
  // that shows a preview of the mentioned post.
  Object(_addPostMentionPreviews__WEBPACK_IMPORTED_MODULE_4__["default"])(); // In the footer of each post, show information about who has replied (i.e.
  // who the post has been mentioned by).

  Object(_addMentionedByList__WEBPACK_IMPORTED_MODULE_5__["default"])(); // Add a 'reply' control to the footer of each post. When clicked, it will
  // open up the composer and add a post mention to its contents.

  Object(_addPostReplyAction__WEBPACK_IMPORTED_MODULE_6__["default"])(); // Show a Quote button when Post text is selected

  Object(_addPostQuoteButton__WEBPACK_IMPORTED_MODULE_7__["default"])(); // After typing '@' in the composer, show a dropdown suggesting a bunch of
  // posts or users that the user could mention.

  Object(_addComposerAutocomplete__WEBPACK_IMPORTED_MODULE_8__["default"])();
  flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.notificationComponents.postMentioned = _components_PostMentionedNotification__WEBPACK_IMPORTED_MODULE_9__["default"];
  flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.notificationComponents.userMentioned = _components_UserMentionedNotification__WEBPACK_IMPORTED_MODULE_10__["default"]; // Add notification preferences.

  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_NotificationGrid__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'notificationTypes', function (items) {
    items.add('postMentioned', {
      name: 'postMentioned',
      icon: 'fas fa-reply',
      label: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('flarum-mentions.forum.settings.notify_post_mentioned_label')
    });
    items.add('userMentioned', {
      name: 'userMentioned',
      icon: 'fas fa-at',
      label: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('flarum-mentions.forum.settings.notify_user_mentioned_label')
    });
  }); // Add mentions tab in user profile

  flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.routes['user.mentions'] = {
    path: '/u/:username/mentions',
    component: _components_MentionsUserPage__WEBPACK_IMPORTED_MODULE_13__["default"].component()
  };
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_UserPage__WEBPACK_IMPORTED_MODULE_11___default.a.prototype, 'navItems', function (items) {
    var user = this.user;
    items.add('mentions', flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_12___default.a.component({
      href: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.route('user.mentions', {
        username: user.username()
      }),
      name: 'mentions',
      children: [flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('flarum-mentions.forum.user.mentions_link')],
      icon: 'fas fa-at'
    }), 80);
  }); // Remove post mentions when rendering post previews.

  flarum_utils_string__WEBPACK_IMPORTED_MODULE_3__["getPlainContent"].removeSelectors.push('a.PostMention');
});


/***/ }),

/***/ "./src/forum/utils/reply.js":
/*!**********************************!*\
  !*** ./src/forum/utils/reply.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return reply; });
/* harmony import */ var flarum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/utils/DiscussionControls */ "flarum/utils/DiscussionControls");
/* harmony import */ var flarum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_0__);


function insertMention(post, component, quote) {
  var user = post.user();
  var mention = '@' + (user ? user.username() : post.number()) + '#' + post.id(); // If the composer is empty, then assume we're starting a new reply.
  // In which case we don't want the user to have to confirm if they
  // close the composer straight away.

  if (!component.content()) {
    component.props.originalContent = mention;
  }

  var cursorPosition = component.editor.getSelectionRange()[0];
  var preceding = component.editor.value().slice(0, cursorPosition);
  var precedingNewlines = preceding.length == 0 ? 0 : 3 - preceding.match(/(\n{0,2})$/)[0].length;
  component.editor.insertAtCursor(Array(precedingNewlines).join('\n') + ( // Insert up to two newlines, depending on preceding whitespace
  quote ? '[quote author="' + mention + '"]' + quote.trim().replace(/\n/g, '\n> ') + '[/quote]\n\n' : mention));
}

function reply(post, quote) {
  var component = app.composer.component;

  if (component && component.props.post && component.props.post.discussion() === post.discussion()) {
    insertMention(post, component, quote);
  } else {
    flarum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_0___default.a.replyAction.call(post.discussion()).then(function (newComponent) {
      return insertMention(post, newComponent, quote);
    });
  }
}

/***/ }),

/***/ "./src/forum/utils/selectedText.js":
/*!*****************************************!*\
  !*** ./src/forum/utils/selectedText.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return selectedText; });
function selectedText(body) {
  var selection = window.getSelection();

  if (selection.rangeCount) {
    var range = selection.getRangeAt(0);
    var parent = range.commonAncestorContainer;

    if (body[0] === parent || $.contains(body[0], parent)) {
      var clone = $("<div>").append(range.cloneContents()); // Replace emoji images with their shortcode (found in alt attribute)

      clone.find('img.emoji').replaceWith(function () {
        return this.alt;
      }); // Replace all other images with a Markdown image

      clone.find('img').replaceWith(function () {
        return '![](' + this.src + ')';
      }); // Replace all links with a Markdown link

      clone.find('a').replaceWith(function () {
        return '[' + this.innerText + '](' + this.href + ')';
      });
      return clone.text();
    }
  }

  return "";
}

/***/ }),

/***/ "./src/forum/utils/textFormatter.js":
/*!******************************************!*\
  !*** ./src/forum/utils/textFormatter.js ***!
  \******************************************/
/*! exports provided: filterUserMentions, filterPostMentions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterUserMentions", function() { return filterUserMentions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterPostMentions", function() { return filterPostMentions; });
/* harmony import */ var flarum_helpers_username__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/helpers/username */ "flarum/helpers/username");
/* harmony import */ var flarum_helpers_username__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_username__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_utils_extractText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/utils/extractText */ "flarum/utils/extractText");
/* harmony import */ var flarum_utils_extractText__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_extractText__WEBPACK_IMPORTED_MODULE_1__);


function filterUserMentions(tag) {
  var user = app.store.getBy('users', 'username', tag.getAttribute('username'));

  if (user) {
    tag.setAttribute('id', user.id());
    tag.setAttribute('displayname', flarum_utils_extractText__WEBPACK_IMPORTED_MODULE_1___default()(flarum_helpers_username__WEBPACK_IMPORTED_MODULE_0___default()(user)));
    return true;
  }
}
function filterPostMentions(tag) {
  var post = app.store.getById('posts', tag.getAttribute('id'));

  if (post) {
    tag.setAttribute('discussionid', post.discussion().id());
    tag.setAttribute('number', post.number());
    tag.setAttribute('displayname', flarum_utils_extractText__WEBPACK_IMPORTED_MODULE_1___default()(flarum_helpers_username__WEBPACK_IMPORTED_MODULE_0___default()(post.user())));
    return true;
  }
}

/***/ }),

/***/ "flarum/Component":
/*!**************************************************!*\
  !*** external "flarum.core.compat['Component']" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['Component'];

/***/ }),

/***/ "flarum/Model":
/*!**********************************************!*\
  !*** external "flarum.core.compat['Model']" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['Model'];

/***/ }),

/***/ "flarum/app":
/*!********************************************!*\
  !*** external "flarum.core.compat['app']" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['app'];

/***/ }),

/***/ "flarum/components/Button":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Button']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Button'];

/***/ }),

/***/ "flarum/components/CommentPost":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['components/CommentPost']" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/CommentPost'];

/***/ }),

/***/ "flarum/components/ComposerBody":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['components/ComposerBody']" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/ComposerBody'];

/***/ }),

/***/ "flarum/components/LinkButton":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['components/LinkButton']" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/LinkButton'];

/***/ }),

/***/ "flarum/components/LoadingIndicator":
/*!********************************************************************!*\
  !*** external "flarum.core.compat['components/LoadingIndicator']" ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/LoadingIndicator'];

/***/ }),

/***/ "flarum/components/Notification":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['components/Notification']" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Notification'];

/***/ }),

/***/ "flarum/components/NotificationGrid":
/*!********************************************************************!*\
  !*** external "flarum.core.compat['components/NotificationGrid']" ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/NotificationGrid'];

/***/ }),

/***/ "flarum/components/PostPreview":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['components/PostPreview']" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/PostPreview'];

/***/ }),

/***/ "flarum/components/PostsUserPage":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['components/PostsUserPage']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/PostsUserPage'];

/***/ }),

/***/ "flarum/components/TextEditor":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['components/TextEditor']" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/TextEditor'];

/***/ }),

/***/ "flarum/components/TextEditorButton":
/*!********************************************************************!*\
  !*** external "flarum.core.compat['components/TextEditorButton']" ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/TextEditorButton'];

/***/ }),

/***/ "flarum/components/UserPage":
/*!************************************************************!*\
  !*** external "flarum.core.compat['components/UserPage']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/UserPage'];

/***/ }),

/***/ "flarum/extend":
/*!***********************************************!*\
  !*** external "flarum.core.compat['extend']" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['extend'];

/***/ }),

/***/ "flarum/helpers/avatar":
/*!*******************************************************!*\
  !*** external "flarum.core.compat['helpers/avatar']" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/avatar'];

/***/ }),

/***/ "flarum/helpers/highlight":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['helpers/highlight']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/highlight'];

/***/ }),

/***/ "flarum/helpers/icon":
/*!*****************************************************!*\
  !*** external "flarum.core.compat['helpers/icon']" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/icon'];

/***/ }),

/***/ "flarum/helpers/punctuateSeries":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['helpers/punctuateSeries']" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/punctuateSeries'];

/***/ }),

/***/ "flarum/helpers/username":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['helpers/username']" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/username'];

/***/ }),

/***/ "flarum/models/Post":
/*!****************************************************!*\
  !*** external "flarum.core.compat['models/Post']" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['models/Post'];

/***/ }),

/***/ "flarum/utils/DiscussionControls":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['utils/DiscussionControls']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/DiscussionControls'];

/***/ }),

/***/ "flarum/utils/KeyboardNavigatable":
/*!******************************************************************!*\
  !*** external "flarum.core.compat['utils/KeyboardNavigatable']" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/KeyboardNavigatable'];

/***/ }),

/***/ "flarum/utils/extract":
/*!******************************************************!*\
  !*** external "flarum.core.compat['utils/extract']" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/extract'];

/***/ }),

/***/ "flarum/utils/extractText":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['utils/extractText']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/extractText'];

/***/ }),

/***/ "flarum/utils/string":
/*!*****************************************************!*\
  !*** external "flarum.core.compat['utils/string']" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/string'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map