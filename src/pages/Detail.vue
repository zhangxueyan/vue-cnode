<template>
  <div class="detail" v-if="newsDetail">
  <header><i class="iconfont icon-fanhui" @click = "goBack"></i></header>
  <div class="brief">
  	 <img :src="newsDetail.author.avatar_url" alt="">
  	 <div>
  		<p>{{newsDetail.author_id}}</p>
  		<p>#{{newsDetail.tab}}#</p>
  		<p>楼主发表于2天前</p>
  	 </div>
  	 <a href="javascript:;" class="shoucang">收藏</a>
  </div>
  <!-- 内容部分 -->
   <div class="detail-content">
  	  <div class="d-titl"><span v-if="newsDetail.top">置顶</span>{{newsDetail.title}}</div>
      <div v-html = 'newsDetail.content' class="d-cont markdown-body"></div>
   </div>
  </div>
</template>

<script>
import axios from 'axios'
import router from '../router'
export default {
  name: 'detail',
  data () {
    return {
      msg: 'Welcome to Your detail',
      newsDetail:''
    }
  },
    created() {
    this.fetchData()
  },
  methods:{
            // 获取知乎最新新闻数据列表和滚动swiper数据
            fetchData:function (){
              axios.get('api/topic/'+ this.$route.params.id)
              .then((response)=>{
                console.log(response)
                this.newsDetail = response.data.data
              })
              .catch((error)=>{
                console.log(error);
              })
            },
            goBack:function(){
            	router.go(-1)
            }
          }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" type="text/css">
// @import "github-markdown-css/github-markdown.css";
header{
	height: 43px;
	width: 100%;
	position: relative;
	background: #444 url(/static/img/logo.9343b37.png) no-repeat center;
    background-size: 120px 28px;
	.icon-fanhui{
		color: #fff;
		position: absolute;
		left: 10px;
		top: 10px;
	}
}
.brief {
	display:flex;
	position: relative;
	padding:20px;
	border-bottom:1px solid #ccc;
	img{
		display:block;
		width:50px;
		height:50px;
		border-radius:50%;
		border:1px solid #ccc;
	}
	div{
		margin-left:10px;
	}
	.shoucang {
		display:block;
	    width: 50px;
	    height: 28px;
	    line-height: 28px;
	    text-align: center;
	    color: #fff;
	    background: #80bd01;
	    border-radius: 3px;
	    margin-left: 10px;
	    cursor: pointer;
	    position:absolute;
	    right:10px;
	    top:40px;
	}
}
.detail-content{
	padding:0 15px;
	overflow:hidden;
	.d-titl{
		padding: 10px 0;
		line-height: 24px;
		span{
			display: inline-block;
			border: 1px solid red;
			padding: 0 5px;
			margin-right: 5px;
			color:red;
			font-size: 14px;
		}
	}
	.d-cont {
		img{
			width:100%;
		}
		.markdown-text h1{
			font-size: 26px;
			color: #545151;
		}
	}
}


</style>
