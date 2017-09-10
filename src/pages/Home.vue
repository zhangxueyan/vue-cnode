<template>
  <div class="home">
    <nav>
      <div class="logo"><i class="iconfont icon-menu"></i></div>
      <div class="items clearfix">
        <router-link to="/all">全部</router-link>
        <router-link to="/essence">精华</router-link>
        <router-link to="/share">分享</router-link>
        <router-link to="/qa">问答</router-link>
        <router-link to="/recruit">招聘</router-link>
      </div>
    </nav>
     <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your home'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" type="text/css">
.home {
  nav{
    height:80px;;
    background:#444;
  }
  .logo {
    height:40px;
    background:url(../assets/images/logo.png) no-repeat center;
    background-size:120px 28px;
    position: relative;
    .icon-menu{
      color:#fff;
      font-size:20px;
      position:absolute;
      left:10px;
      top:10px;
    }
  }
  .items{
    a{
    display:block;
    width:20%;
    float:left;
    font-size:14px;
    color:#80bd01;
    line-height: 40px;
    text-align:center;
    &.router-link-active{
      color:#fff;
    }
    }
  }
}
</style>
