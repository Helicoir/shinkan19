import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _71eb8156 = () => interopDefault(import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */))
const _464dcf5d = () => interopDefault(import('../pages/activity/index.vue' /* webpackChunkName: "pages/activity/index" */))
const _189b4630 = () => interopDefault(import('../pages/contact/index.vue' /* webpackChunkName: "pages/contact/index" */))
const _093d1f7b = () => interopDefault(import('../pages/division/index.vue' /* webpackChunkName: "pages/division/index" */))
const _3ecf09fa = () => interopDefault(import('../pages/entry/index.vue' /* webpackChunkName: "pages/entry/index" */))
const _599b99a7 = () => interopDefault(import('../pages/events/index.vue' /* webpackChunkName: "pages/events/index" */))
const _8faa3244 = () => interopDefault(import('../pages/faq/index.vue' /* webpackChunkName: "pages/faq/index" */))
const _33a6d99a = () => interopDefault(import('../pages/gallery/index.vue' /* webpackChunkName: "pages/gallery/index" */))
const _2f3a3074 = () => interopDefault(import('../pages/information/index.vue' /* webpackChunkName: "pages/information/index" */))
const _70fac416 = () => interopDefault(import('../pages/division/KIK.vue' /* webpackChunkName: "pages/division/KIK" */))
const _6b626b5b = () => interopDefault(import('../pages/division/PAC.vue' /* webpackChunkName: "pages/division/PAC" */))
const _4e69faa4 = () => interopDefault(import('../pages/division/PM.vue' /* webpackChunkName: "pages/division/PM" */))
const _53420efc = () => interopDefault(import('../pages/division/SH.vue' /* webpackChunkName: "pages/division/SH" */))
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
      path: "/division",
      component: _093d1f7b,
      name: "division"
    }, {
      path: "/entry",
      component: _3ecf09fa,
      name: "entry"
    }, {
      path: "/events",
      component: _599b99a7,
      name: "events"
    }, {
      path: "/faq",
      component: _8faa3244,
      name: "faq"
    }, {
      path: "/gallery",
      component: _33a6d99a,
      name: "gallery"
    }, {
      path: "/information",
      component: _2f3a3074,
      name: "information"
    }, {
      path: "/division/KIK",
      component: _70fac416,
      name: "division-KIK"
    }, {
      path: "/division/PAC",
      component: _6b626b5b,
      name: "division-PAC"
    }, {
      path: "/division/PM",
      component: _4e69faa4,
      name: "division-PM"
    }, {
      path: "/division/SH",
      component: _53420efc,
      name: "division-SH"
    }, {
      path: "/",
      component: _c2c5cdd2,
      name: "index"
    }],

    fallback: false
  })
}
