// ==UserScript==
// @name            Geoportal Waze integration (fork by sledzik1984)
// @version         1.5.3
// @description     Adds geoportal.gov.pl overlays ("satellite view", house numbers, cities names) to WME (API March 2026). Forked from snPL - added ability to use own Mapproxy instance that caches / proxies Geoportal tiles - it's faster.
// @include         https://*.waze.com/*/editor*
// @include         https://*.waze.com/editor*
// @include         https://*.waze.com/map-editor*
// @include         https://*.waze.com/beta_editor*
// @copyright       2013-2026+, Patryk Ściborek, Paweł Pyrczak, Kamil Marud, snPL, sledzik1984
// @run-at          document-end
// @grant           none
// @license         MIT
// @icon            https://www.google.com/s2/favicons?sz=64&domain=geoportal.gov.pl
// @namespace       https://github.com/med-zz-eis/WME-geoportal.pl
// @downloadURL     https://github.com/sledzik1984/WME-geoportal.pl/raw/refs/heads/master/geoportal.user.js
// @updateURL       https://github.com/sledzik1984/WME-geoportal.pl/raw/refs/heads/master/geoportal.meta.js
// ==/UserScript==