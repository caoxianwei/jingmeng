import Vue from 'vue'
import Router from 'vue-router'
import jmHeader from '../components/jmHeader'
import home from '../components/home'
// import swipeList from '../components/swipeList'
import jmFooter from '../components/jmFooter'
import getRich from '../components/getRich'
import contact from '../components/contact'
import download from '../components/download'
import activity from '../components/activity'


import activityMobile from '../components/activityMobile'
import contactMobile from '../components/contactMobile'
import downloadMobile from '../components/downloadMobile'
import footerMobile from '../components/footerMobile'
import getRichMobile from '../components/getRichMobile'
import headerMobile from '../components/headerMobile'
import homeMobile from '../components/homeMobile'

let ua = navigator.userAgent.toLowerCase();

let isPc = false

if(ua.indexOf('iphone') !== -1){
  isPc = false
} else if(ua.indexOf('android') > -1 || ua.indexOf('Adr') > -1){
  isPc = false
}else {
  isPc = true
}

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    components: {
      jmHeader: isPc ? jmHeader : headerMobile,
      home: isPc ? home : homeMobile,
      jmFooter: isPc ? jmFooter : footerMobile
    },
    beforeEnter (to, from, next) {
      [].forEach.call(document.getElementsByTagName('li'), function (item) {
        item.className = ''
      })
      next()
    }
  }, {
    path: '/contact',
    components: {
      jmHeader: isPc ? jmHeader : headerMobile,
      jmFooter: isPc ? jmFooter : footerMobile,
      contact: isPc ? contact : contactMobile
    }
  }, {
    path: '/getRich',
    components: {
      jmHeader: isPc ? jmHeader : headerMobile,
      jmFooter: isPc ? jmFooter : footerMobile,
      getRich: isPc ? getRich : getRichMobile
    }
  }, {
    path: '/activity',
    components: {
      jmHeader: isPc ? jmHeader : headerMobile,
      jmFooter: isPc ? jmFooter : footerMobile,
      activity: isPc ? activity : activityMobile
    }
  }, {
    path: '/download',
    components: {
      jmHeader: isPc ? jmHeader : headerMobile,
      jmFooter: isPc ? jmFooter : footerMobile,
      download: isPc ? download : downloadMobile
    }
  }],
  scrollBehavior (to, from, savedPosition) {
    console.log(to, from, savedPosition)
    return {x: 0, y: 0}
  }
})


