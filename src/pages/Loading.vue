<template>
  <div class="loading">
    <img src="../assets/images/loading.gif" alt="">
  </div>
</template>

<script>
import router from '../router'
export default {
  name: 'loading',
  data () {
    return {
      msg: 'Welcome to Your post'
    }
  },
  created(){
  	this.goHome()
  },
  methods:{
  	goHome:function(){
  		setTimeout(function(){router.push({ path: 'home' })},5000)
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
	text-align: center;
}
img{
	display: block;
    margin: 150px auto;
}
</style>
