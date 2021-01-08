<template>
  <div class="home">
    <Title>   推荐歌单 </Title>    
    <ul class="recommendList">
      <router-link  v-for="rem in recommendMusicList" :key="rem.id" to="/" tag="li">
      <div>
        <img :src="rem.picUrl"/>
        <span>{{rem.playCount|formatNum}}</span>
      </div>
      <p>{{rem.name|substr(26)}}</p>
      </router-link>
    </ul>
    <Title>最新音乐</Title>
    <MusicItem :newMusicList="newMusicList"></MusicItem>
  </div>
</template>

<script>
import Title from '../components/Title'
import MusicItem from '../components/MusicItem'
export default {
  name: 'Recommend',
  components: {
    Title,
    MusicItem
  },
  data(){
    return {
      recommendMusicList:[],
      newMusicList:[]
    }
  },
  beforeRouteEnter(to,from,next){//路由守卫。在路径进入之前获取数据
    next(vm=>{
        vm.$http.get('/personalized').then(data=>{
            vm.recommendMusicList=data.data.result.slice(0,6);
        });
        vm.$http.get('/personalized/newsong').then(data=>{
          //vm.recommendMusicList=data.data.result;
          vm.newMusicList=data.data.result;
        });
    });
  },
  filters : {
    formatNum(value){
      return (value/10000).toFixed(1)+"万";
    },
    substr(value,len){
      return value.substr(0,len)+"...";
    }
  }
  
}

</script>
<style lang="less" scoped>
ul.recommendList{
  display:flex;
  flex-wrap:wrap;
  justify-content:space-between;
  li{
    width:33%;
    margin-top: 20px;
    div{
      position: relative;
      span{
        right:3px;
        top:2px;
        color:white;
        position: absolute;
        text-shadow:1px 1px 3px rgba(0, 0, 0, 0)
      }
    }
  }
}
</style>
