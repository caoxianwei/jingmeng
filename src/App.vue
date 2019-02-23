<template>
  <div id="app">
    <router-view name="jmHeader"></router-view>
    <router-view name="home"></router-view>
    <router-view name="getRich"></router-view>
    <router-view name="contact"></router-view>
    <router-view name="download"></router-view>
    <router-view name="activity"></router-view>
    <router-view name="jmFooter"></router-view>
    <div class='clearFloat'></div>
    <div id="mobile">
      <router-view name="activityMobile"></router-view>
      <router-view name="contactMobile"></router-view>
      <router-view name="downloadMobile"></router-view>
      <router-view name="footerMobile"></router-view>
      <router-view name="getRichMobile"></router-view>
      <router-view name="headerMobile"></router-view>
      <router-view name="homeMobile"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      palf: '',
      show: false
    }
  },
  mounted (){
    this.getPfal()
  },
  methods: {
    getPfal(){
      let ua = navigator.userAgent.toLowerCase()
      if(ua.indexOf('iphone') !== -1 || ua.indexOf('ipad') !== -1){
        this.$store.state.device = 'iphone';
      } else if(ua.indexOf('android') > -1 || ua.indexOf('Adr') > -1){
        this.$store.state.device = 'adr';
      }else {
        this.$store.state.device = 'PC';
      }
    }
  }
}
</script>

<style>
  #app {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    text-align: center;
  }
  #mobile {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    text-align: center;
  }
  #container {
    position: relative;
  }
  body {
    margin:0;
    padding:0;
  }
  .clearFloat {
    clear: both;
  }
</style>
