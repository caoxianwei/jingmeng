<template>
  <header>
    <div @click="show = !show">
      <router-link class="logo" to='/' tag='div'>
        <img class="m-logo" src="./../assets/mlogo.png">
      </router-link>
      <img @click="rotate" id="btn_drop_down" src="./../assets/btn_drop_down.png">
    </div>
    <div id="submenu">
      <transition  name="slide-fade">
        <div v-if="show" class="nav-item">
          <ul>
            <li tabindex="1" @mouseover='addClass($event)' @mouseleave='rmClass($event)' v-for="(item, index) in navItems" :key="index"
                @click="toLink(item.link,$event)">
              {{item.text}}
            </li>
          </ul>
        </div>
      </transition>
    </div>

  </header>
</template>

<script>
  import router from '../router'
  const navItems = [{
    text: '首 页',
    link: '/'
  }, {
    text: '游戏下载',
    link: '/download'
  }, {
    text: '活动中心',
    link: '/activity'
  }, {
    text: '联系我们',
    link: '/contact'
  }, {
    text: '致富之路',
    link: '/getRich'
  }]

  export default {
    name: 'headerMobile',
    data() {
      return {
        deg: -90,
        show: true,
        navItems: navItems,
        navIn: 'nav-out'
      }
    },
    methods: {
      rotate(){
        if( this.deg ){
          this.deg = 0;
        } else {
          this.deg -= 90;
          document.getElementById('submenu').style.display = 'block';
        }
        document.getElementById('btn_drop_down').style.transform = 'rotate(' + this.deg + 'deg)';
      },
      toLink (link, $event) {
        [].forEach.call(document.getElementsByTagName('li'), function (item) {
          item.className = ''
        })
        $event.target.className = 'selected'
        router.push(link || '/')
        this.show = false;
        document.getElementById('btn_drop_down').style.transform = 'rotate(0)';
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
    height: 70px;
    background: rgba(42, 23, 27, 1);
    position: fixed;
    z-index: 999;
    .m-logo {
      width: 15%;
      float: left;
      margin: 3% 5% 0 5%;
    }
    #btn_drop_down {
      width: 10%;
      float: right;
      margin: 5% 5% 0 5%;
    }
  }
  #submenu {
    width: 100%;
    margin-top: 17%;
    overflow: hidden;
    display: none;
  }
  .nav-item {
    width: 100%;
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      width: 100%;
      background: rgba(56, 35, 39, 1);
    }
    li {
      width: 100%;
      padding: 5% 0;
      color: rgba(219, 191, 157, 1);
      cursor: pointer;
      font-size: 18px;
      font-weight: 500;
    }
    li:focus {
      background-color: rgba(42, 23, 27, 1);
      outline:none;
    }
  }

  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateY(-60px);
    opacity: 0;
  }

</style>
