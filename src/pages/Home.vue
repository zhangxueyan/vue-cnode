<template>
  <div class="home">
    <nav>
      <div class="logo"><i class="iconfont icon-menu" @click = "showSlide"></i></div>
      <div class="items clearfix">
        <router-link to="/all">全部</router-link>
        <router-link to="/essence">精华</router-link>
        <router-link to="/share">分享</router-link>
        <router-link to="/qa">问答</router-link>
        <router-link to="/recruit">招聘</router-link>
      </div>
    </nav>
    <router-view></router-view>
    <backTop></backTop>
   <!--侧边栏 -->
     <transition name="slide-fade">
      <div class="slidebar" v-if="isShowSlide">
        <p v-for="item in items">{{item}}</p>
      </div>
     </transition>
      <!-- 遮罩msak -->
    <div class="mask" v-if="isShowSlide" @click = "hideSlide"></div>
  </div>
</template>
<script>
import backTop from "../components/Backtop"
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your home',
      items:['登录','全部','精华','分享','问答','招聘'],
      isShowSlide:false
    }
  },
  components:{
    backTop
  },
  methods:{
    showSlide(){
     this.isShowSlide = true
    },
    hideSlide(){
     this.isShowSlide = false
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
.slidebar{
  width:200px;
  height: 100%;
  background:#fff;
  padding:20px;
  border:1px solid #ccc;
  position: fixed;
  left:0;
  top:0;
  z-index:20;
  p{
  line-height:50px;
  }
}
.mask{
  width:100%;
  height:100%;
  position:fixed;
  left:0;
  top:0;
  background:rgba(0,0,0,0.5);
  z-index:10;
}
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(-50px);
  opacity: 0;
}
</style>
