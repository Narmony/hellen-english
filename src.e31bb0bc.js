// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"sass/main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./../images/hero/hero-mobile.png":[["hero-mobile.31ec35d9.png","images/hero/hero-mobile.png"],"images/hero/hero-mobile.png"],"./../images/hero/hero-wave-mobile.svg":[["hero-wave-mobile.b3256d83.svg","images/hero/hero-wave-mobile.svg"],"images/hero/hero-wave-mobile.svg"],"./../images/hero/hero-tablet.png":[["hero-tablet.2cf74668.png","images/hero/hero-tablet.png"],"images/hero/hero-tablet.png"],"./../images/hero/hero-wave-tablet.svg":[["hero-wave-tablet.53035141.svg","images/hero/hero-wave-tablet.svg"],"images/hero/hero-wave-tablet.svg"],"./../images/hero/hero-desktop.png":[["hero-desktop.54ed7088.png","images/hero/hero-desktop.png"],"images/hero/hero-desktop.png"],"./../images/hero/hero-wave-desktop.svg":[["hero-wave-desktop.45b0b0c9.svg","images/hero/hero-wave-desktop.svg"],"images/hero/hero-wave-desktop.svg"],"./../images/advantages/author-mobile.svg":[["author-mobile.296af0c7.svg","images/advantages/author-mobile.svg"],"images/advantages/author-mobile.svg"],"./../images/advantages/method-mobile.svg":[["method-mobile.90fbb99f.svg","images/advantages/method-mobile.svg"],"images/advantages/method-mobile.svg"],"./../images/advantages/result-mobile.svg":[["result-mobile.a36cfe8f.svg","images/advantages/result-mobile.svg"],"images/advantages/result-mobile.svg"],"./../images/advantages/author-desktop.svg":[["author-desktop.44004c83.svg","images/advantages/author-desktop.svg"],"images/advantages/author-desktop.svg"],"./../images/advantages/method-desktop.svg":[["method-desktop.a5cd6069.svg","images/advantages/method-desktop.svg"],"images/advantages/method-desktop.svg"],"./../images/advantages/result-desktop.svg":[["result-desktop.8326598d.svg","images/advantages/result-desktop.svg"],"images/advantages/result-desktop.svg"],"./../images/wawe.png":[["wawe.06a60873.png","images/wawe.png"],"images/wawe.png"],"./../images/program/program-bg-mobile.png":[["program-bg-mobile.1a2bdee7.png","images/program/program-bg-mobile.png"],"images/program/program-bg-mobile.png"],"./../images/ellipse.svg":[["ellipse.3e233546.svg","images/ellipse.svg"],"images/ellipse.svg"],"./../images/program/program-bg-mobile@2x.png":[["program-bg-mobile@2x.03e2f47b.png","images/program/program-bg-mobile@2x.png"],"images/program/program-bg-mobile@2x.png"],"./../images/program/program-bg-tablet.png":[["program-bg-tablet.5f37eecb.png","images/program/program-bg-tablet.png"],"images/program/program-bg-tablet.png"],"./../images/program/program-bg-tablet@2x.png":[["program-bg-tablet@2x.805983c3.png","images/program/program-bg-tablet@2x.png"],"images/program/program-bg-tablet@2x.png"],"./../images/program/program-bg-desktop.png":[["program-bg-desktop.c4b10d7a.png","images/program/program-bg-desktop.png"],"images/program/program-bg-desktop.png"],"./../images/program/program-bg-desktop@2x.png":[["program-bg-desktop@2x.11608f7f.png","images/program/program-bg-desktop@2x.png"],"images/program/program-bg-desktop@2x.png"],"/Users/maria/Documents/GitHub/hellen-english/src/images/mentors/list.svg":[["list.7db06fd2.svg","images/mentors/list.svg"],"images/mentors/list.svg"],"/Users/maria/Documents/GitHub/hellen-english/src/images/mentors/list2.svg":[["list2.ab6f9457.svg","images/mentors/list2.svg"],"images/mentors/list2.svg"],"./../images/review/svg/vk.svg":[["vk.798eb409.svg","images/review/svg/vk.svg"],"images/review/svg/vk.svg"],"./../images/review/svg/arrow_left.svg":[["arrow_left.fc9e34b8.svg","images/review/svg/arrow_left.svg"],"images/review/svg/arrow_left.svg"],"./../images/review/svg/arrow_right.svg":[["arrow_right.9ab7592b.svg","images/review/svg/arrow_right.svg"],"images/review/svg/arrow_right.svg"],"./../images/review/photo6.png":[["photo6.d0f1100e.png","images/review/photo6.png"],"images/review/photo6.png"],"./../images/review/photo2.png":[["photo2.cf5fb968.png","images/review/photo2.png"],"images/review/photo2.png"],"./../images/review/photo3.png":[["photo3.b12ddcc8.png","images/review/photo3.png"],"images/review/photo3.png"],"./../images/review/photo4.png":[["photo4.57cc6695.png","images/review/photo4.png"],"images/review/photo4.png"],"./../images/review/photo5.png":[["photo5.9d40cac1.png","images/review/photo5.png"],"images/review/photo5.png"],"./../images/review/photo1.png":[["photo1.7a14bd5c.png","images/review/photo1.png"],"images/review/photo1.png"],"./../images/review/photo7.png":[["photo7.b34f481f.png","images/review/photo7.png"],"images/review/photo7.png"],"./../images/registration/bg-mobile.png":[["bg-mobile.fddc7285.png","images/registration/bg-mobile.png"],"images/registration/bg-mobile.png"],"./../images/registration/bg-mobile@2x.png":[["bg-mobile@2x.c3839c43.png","images/registration/bg-mobile@2x.png"],"images/registration/bg-mobile@2x.png"],"./../images/registration/bg-tablet.png":[["bg-tablet.4f15ea8f.png","images/registration/bg-tablet.png"],"images/registration/bg-tablet.png"],"./../images/registration/bg-tablet@2x.png":[["bg-tablet@2x.0552fa03.png","images/registration/bg-tablet@2x.png"],"images/registration/bg-tablet@2x.png"],"./../images/registration/bg-deckstop.png":[["bg-deckstop.c4e2c781.png","images/registration/bg-deckstop.png"],"images/registration/bg-deckstop.png"],"./../images/registration/bg-deckstop@2x.png":[["bg-deckstop@2x.1256a7a3.png","images/registration/bg-deckstop@2x.png"],"images/registration/bg-deckstop@2x.png"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"index.js":[function(require,module,exports) {
"use strict";

require("./sass/main.scss");
},{"./sass/main.scss":"sass/main.scss"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60268" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map