(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

const BASE_URL = "https://tarikfp-perf-analytics-api.herokuapp.com/metric-model";
const sendMetricsWithFetch = data => __awaiter(void 0, void 0, void 0, function* () {
  return fetch(BASE_URL, {
    mode: "no-cors",
    body: data,
    method: "POST",
    headers: {
      "Content-type": "application/json;"
    }
  });
}); // https://developer.mozilla.org/en-US/docs/Web/API/Navigator/sendBeacon

const convertToSec = ms => ms / 1000;

const parseResourceTiming = resourceTiming => {
  const {
    duration,
    name,
    initiatorType,
    responseEnd,
    startTime
  } = resourceTiming;
  return {
    duration,
    initiatorType,
    name,
    responseEnd,
    startTime
  };
}; // metric utils
// measure get fcp


const getFcp = () => __awaiter(void 0, void 0, void 0, function* () {
  return new Promise((resolve, reject) => {
    if (typeof PerformanceObserver !== "undefined") {
      new PerformanceObserver(entryList => {
        const foundFCP = entryList.getEntriesByType("paint").find(entry => entry.name === "first-contentful-paint");

        if (foundFCP) {
          resolve(foundFCP);
        } else {
          return resolve(undefined);
        }
      }).observe({
        type: "paint",
        buffered: true
      });
    } else {
      reject("PerformanceObserver is unavailable");
    }
  });
}); // measure dom load

const getDomLoad = () => window._perfAnalytics.domLoad = convertToSec(performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart); // measure window load

const getWindowLoad = () => window._perfAnalytics.windowLoad = convertToSec(new Date().getTime() - performance.timing.navigationStart); // measure ttfp =>  https://developer.mozilla.org/en-US/docs/Glossary/time_to_first_byte

const getTTFB = () => window._perfAnalytics.ttfb = convertToSec(window.performance.timing.responseStart - window.performance.timing.navigationStart);
const getResourceLoadTimes = () => {
  const resources = performance.getEntriesByType("resource");

  if (resources === undefined || resources.length <= 0) {
    // there are no resource performance records
    return;
  }

  for (const _resource of resources) {
    window._perfAnalytics.resources.push(parseResourceTiming(_resource));
  }
};
const setUserAgent = () => window._perfAnalytics.userAgent = navigator.userAgent;
const setLocationHref = () => window._perfAnalytics.userAgent = window.location.href;

// @see window.d.ts

window._perfAnalytics = {
  domLoad: 0,
  fcp: 0,
  ttfb: 0,
  windowLoad: 0,
  userAgent: null,
  url: null,
  resources: []
}; // check whether performance apis are supported
// terminate the module in case of not supported

const isPerformanceAPISupported = () => {
  if (!window.performance || !window.performance.timing || !window.performance.getEntriesByType) {
    throw new Error("Performance api is not supported in this specific browser...");
  }
};

function initializeObservers() {
  getDomLoad();
  getWindowLoad();
  getTTFB();
  getResourceLoadTimes();
  setUserAgent();
  setLocationHref();
}

(function init() {
  // check whether performance apis are supported
  isPerformanceAPISupported(); // initialize metric observers on window load...

  window.addEventListener("load", () => __awaiter(this, void 0, void 0, function* () {
    var _a;

    const fcpEntry = yield getFcp();
    window._perfAnalytics.fcp = convertToSec((_a = fcpEntry === null || fcpEntry === void 0 ? void 0 : fcpEntry.startTime) !== null && _a !== void 0 ? _a : 0);
    initializeObservers(); // send metric data to api
    // facing CORB issue while using navigator.sendBeacon API
    // will prefer to use fetchAPI instead
    // @see https://medium.com/@longtermsec/chrome-just-hardened-the-navigator-beacon-api-against-cross-site-request-forgery-csrf-690239ccccf

    return sendMetricsWithFetch(JSON.stringify(window._perfAnalytics)); // check whether sendBeacon is available

    /*   if (!navigator.sendBeacon) {
      // use fetch api
      sendMetricsWithFetch(JSON.stringify(window._perfAnalytics));
    } else {
      sendMetricsWithBeacon(JSON.stringify(window._perfAnalytics));
    } */
  }));
})();


},{}],2:[function(require,module,exports){
const perfAnalyticsModule = require("@tarikfp/perf-analytics-module");
module.exports = perfAnalyticsModule;

},{"@tarikfp/perf-analytics-module":1}]},{},[2]);
