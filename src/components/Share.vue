<template>
  <div class="share">
    <ul>
      <li class="news-one" v-for = "(item,index) in news" v-if ="item.tab==='share'">
        <router-link :to="{name:'detail',params:{id:item.id}}">
          <div class="div-tp">
          <img :src="item.author.avatar_url" alt="">
          <div>
            <dl>
              <dd class="name">{{item.author.loginname}}</dd>
              <dd class="time">{{item.tab}}</dd>
            </dl>
            <p>
            <span class="zhiding" v-if="item.top">置顶</span>
            <span class="zhiding jinghua" v-else-if="item.good">精华</span>
            {{item.title}}</p>
          </div>
          </div>
          <div class="div-bt">
          <div class="bt-container">
            <span><i class="iconfont icon-qbzuo05"></i>{{item.reply_count}}</span>
            <span class="read"><i class="iconfont icon-yueduliang"></i>{{item.visit_count}}</span>
            <span class="share"><i class="iconfont icon-fenxiang"></i>分享</span>
          </div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'share',
  data () {
    return {
      msg: 'Welcome to Your essence',
      news:''
    }
  },
    created() {
    this.fetchData()
  },
  methods:{
            // 获取知乎最新新闻数据列表和滚动swiper数据
            fetchData:function (){
              axios.get('api/topics')
              .then((response)=>{
                console.log(response)
                this.news = response.data.data
              })
              .catch((error)=>{
                console.log(error);
              })
            },
          }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" type="text/css">
.news-one{
  border-bottom: 1px solid #80bd01;
  padding:10px 0 0;
  .div-tp {
    display:flex;
    padding:0 15px;
    img{
      width:50px;
      height:50px;
      border-radius:50%;
      border:1px solid #ccc;
    }
    div{
      margin-left:10px;
      flex: 1;
      dl{
        display:flex;
        .name{
          flex:1;
        }
        .time{
          flex:1;
          text-align:right;
        }
      }
      p{
        overflow : hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        display: -webkit-box;
        -webkit-box-orient: vertical;
      }
    }
  }
  .div-bt{
    padding:0 15px;
    margin-top: 10px;
    .bt-container{
      padding:10px 0;
      border-top:1px solid #ccc;
      span{
        display:inline-block;
      }
      span.share{
        float:right;
      }
      span.read{
        margin-left:20px;
      }
    }
  }
}

.zhiding {
    display: inline-block;
    border: 1px solid red;
    color: red;
    font-size: 14px;
    padding: 0 5px;
    margin-right: 5px;
}
.jinghua {
  color:#80bd01;
  border: 1px solid #80bd01;
}
.news-one>a{
  display:block;
  color: #000;
  text-decoration:none;
}
</style>