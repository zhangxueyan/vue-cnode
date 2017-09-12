<template>
  <div class="back-top">
    <p class="dingbu" v-if = "show" @click = "goTop">顶部</p>
  </div>
</template>

<script>
import $ from 'webpack-zepto';
export default {
  name: 'back-top',
  data () {
    return {
      msg: 'Welcome to Your essence',
      show:false
    }
  },
  mounted() {
    $(window).on('scroll', () => {
      if ($(window).scrollTop() > 100) {
        this.show = true;
      } else {
        this.show = false;
      }
    });
  },
  beforeDestory() {
    $(window).off('scroll');
  },
  methods:{
    goTop(){
      $(window).scrollTop(0);
      this.show = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" type="text/css">
.dingbu{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #42b983;
    position: fixed;
    right: 20px;
    bottom: 20px;
    text-align: center;
    line-height: 50px;
    color: #fff;
}
</style>