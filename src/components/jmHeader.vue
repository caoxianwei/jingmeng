<template>
  <header>
    <div id="nav" class="col">
      <div class="w-1200">
        <router-link class="logo" to='/' tag='div'>
          <img src="@/assets/logo.png"/>
        </router-link>
        <div class="nav-item">
          <ul>
            <li style="font-size: 22px" @mouseover='addClass($event)' @mouseleave='rmClass($event)' v-for="(item, index) in navItems" :key="index"
                @click="toLink(item.link,$event)">
              {{item.text}}
            </li>
            <li style="font-size: 18px;" @mouseover='addClass($event)' @mouseleave='rmClass($event)' v-for="(item) in navItems" :key="item.enText"
                @click="toLink(item.link,$event)">
              {{item.enText}}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import router from '../router'
const navItems = [{
  text: '首 页',
  enText: 'HOME',
  link: '/'
}, {
  text: '游戏下载',
  enText: 'DOWNLOAD',
  link: '/download'
}, {
  text: '活动中心',
  enText: 'ACTIVITY',
  link: '/activity'
}, {
  text: '联系我们',
  enText: 'CONTACT',
  link: '/contact'
}, {
  text: '致富之路',
  enText: 'GET RICH',
  link: '/getRich'
}]

export default {
  name: 'jmHeader',
  data () {
    return {
      navItems: navItems,
      navIn: 'nav-out'
    }
  },
  methods: {
    toLink (link, $event) {
      [].forEach.call(document.getElementsByTagName('li'), function (item) {
        item.className = ''
      })
      $event.target.className = 'selected'
      router.push(link || '/')
    },
    addClass ($event) {
      if (!$event.target.className.match(new RegExp('(\\s|^)' + 'selected' + '(\\s|$)'))) {
        $event.target.className = ' '
      }
      if (!$event.target.className.match(new RegExp('(\\s|^)' + 'nav-in' + '(\\s|$)'))) {
        $event.target.className += ' ' + 'nav-in'
      }
    },
    rmClass ($event) {
      if (!$event.target.className.match(new RegExp('(\\s|^)' + 'selected' + '(\\s|$)'))) {
        $event.target.className = ' '
      }
      if (!$event.target.className.match(new RegExp('(\\s|^)' + 'nav-out' + '(\\s|$)'))) {
        $event.target.className += ' ' + 'nav-out'
      }
    }
  }
}
</script>

<style lang='scss' scoped>
  header {
    width: 100%;
    height: 100px;
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    z-index: 9;
  }

  #nav {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .logo {
    width: 154px;
    height: 45px;
    position: relative;
    left: 50px;
    cursor: pointer;
  }

  .nav-item {
    position: relative;
    width: 1000px;
    float: right;
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      position: relative;
      width: 100%;
      bottom: 20px;
    }
  }

  li {
    line-height: 26px;
    position: relative;
    display: inline-block;
    width: 200px;
    color: white;
    cursor: pointer;
    font-size: 16px;
    color: #fff;
    opacity: 0.8;
  }

  .selected {
    color: #e4d1b7;
  }

  @mixin nav-in {
    @-webkit-keyframes navin {
      0% {
        color: #dacb8f
      }
      100% {
        color: #e4d1b7
      }
    }
    @-moz-keyframes navin {
      0% {
        color: #dacb8f
      }
      100% {
        color: #e4d1b7
      }
    }
    @-ms-keyframes navin {
      0% {
        color: #dacb8f
      }
      100% {
        color: #e4d1b7
      }
    }
    @-o-keyframes navin {
      0% {
        color: #dacb8f
      }
      100% {
        color: #e4d1b7
      }
    }
    @keyframes navin {
      0% {
        color: #dacb8f
      }
      100% {
        color: #e4d1b7
      }
    }
  }
  .nav-in {
    @include nav-in;
    -webkit-animation: navin .5s 0s ease both;
    -moz-animation: navin .5s 0s ease both;
    -ms-animation: navin .5s 0s ease both;
    -o-animation: navin .5s 0s ease both;
    animation: navin .5s 0s ease both;
  }
</style>
