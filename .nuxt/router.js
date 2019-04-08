import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _71eb8156 = () => interopDefault(import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */))
const _464dcf5d = () => interopDefault(import('../pages/activity/index.vue' /* webpackChunkName: "pages/activity/index" */))
const _189b4630 = () => interopDefault(import('../pages/contact/index.vue' /* webpackChunkName: "pages/contact/index" */))
const _3ecf09fa = () => interopDefault(import('../pages/entry/index.vue' /* webpackChunkName: "pages/entry/index" */))
const _599b99a7 = () => interopDefault(import('../pages/events/index.vue' /* webpackChunkName: "pages/events/index" */))
const _2f3a3074 = () => interopDefault(import('../pages/information/index.vue' /* webpackChunkName: "pages/information/index" */))
const _b39a8c32 = () => interopDefault(import('../pages/activity/annual/index.vue' /* webpackChunkName: "pages/activity/annual/index" */))
const _0a0e17f5 = () => interopDefault(import('../pages/activity/division/index.vue' /* webpackChunkName: "pages/activity/division/index" */))
const _106b0a24 = () => interopDefault(import('../pages/activity/faq/index.vue' /* webpackChunkName: "pages/activity/faq/index" */))
const _b9836264 = () => interopDefault(import('../pages/activity/freePaper/index.vue' /* webpackChunkName: "pages/activity/freePaper/index" */))
const _5cf7e9e0 = () => interopDefault(import('../pages/activity/gallery/index.vue' /* webpackChunkName: "pages/activity/gallery/index" */))
const _40c39310 = () => interopDefault(import('../pages/activity/division/KIK.vue' /* webpackChunkName: "pages/activity/division/KIK" */))
const _3b2b3a55 = () => interopDefault(import('../pages/activity/division/PAC.vue' /* webpackChunkName: "pages/activity/division/PAC" */))
const _d1a3372c = () => interopDefault(import('../pages/activity/division/PM.vue' /* webpackChunkName: "pages/activity/division/PM" */))
const _c7f30e7c = () => interopDefault(import('../pages/activity/division/SH.vue' /* webpackChunkName: "pages/activity/division/SH" */))
const _c2c5cdd2 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: decodeURI('/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/about",
      component: _71eb8156,
      name: "about"
    }, {
      path: "/activity",
      component: _464dcf5d,
      name: "activity"
    }, {
      path: "/contact",
      component: _189b4630,
      name: "contact"
    }, {
      path: "/entry",
      component: _3ecf09fa,
      name: "entry"
    }, {
      path: "/events",
      component: _599b99a7,
      name: "events"
    }, {
      path: "/information",
      component: _2f3a3074,
      name: "information"
    }, {
      path: "/activity/annual",
      component: _b39a8c32,
      name: "activity-annual"
    }, {
      path: "/activity/division",
      component: _0a0e17f5,
      name: "activity-division"
    }, {
      path: "/activity/faq",
      component: _106b0a24,
      name: "activity-faq"
    }, {
      path: "/activity/freePaper",
      component: _b9836264,
      name: "activity-freePaper"
    }, {
      path: "/activity/gallery",
      component: _5cf7e9e0,
      name: "activity-gallery"
    }, {
      path: "/activity/division/KIK",
      component: _40c39310,
      name: "activity-division-KIK"
    }, {
      path: "/activity/division/PAC",
      component: _3b2b3a55,
      name: "activity-division-PAC"
    }, {
      path: "/activity/division/PM",
      component: _d1a3372c,
      name: "activity-division-PM"
    }, {
      path: "/activity/division/SH",
      component: _c7f30e7c,
      name: "activity-division-SH"
    }, {
      path: "/",
      component: _c2c5cdd2,
      name: "index"
    }],

    fallback: false
  })
}
