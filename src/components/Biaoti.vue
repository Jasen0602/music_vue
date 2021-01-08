<template>
  <div class="box">
    <div class="image">

        <span class="image2"></span>
        <span class="time" @click="getTime">{{updata}}{{time}}</span>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            
            time:10,
            updata:"更新日期："

        }
    },
    // methods:{
    //     getTime(){
    //         var data = new Date();
    //         var m=(date.getMonth()+1<10?'0'+(date.getMonth()+1):date.getMonth()+1);
    //         var d=(date.getDate()<10?'0'+(date.getDate()):date.getDate);
    //         this.time=m+y
    //     }
    // }
}
</script>


<style lang="less" scoped>
.image {
  display: inline-block;
  width: 100%;
  height: 146px;
  background-size: contain;
  background-image: url(../assets/hot_music_bg_2x.jpg);
  .image2{
      position: absolute;
      left:24px;
      top:72px;
      display: inline-block;
          width: 142px;
          height: 67px;
          background-image: url(../assets/logo2.png);
          background-position: -24px -30px;
          background-size: 166px 97px;
  }
  .time{
      color:white;
      margin-top: 10px;
      font-size: 12px;
      color: hsla(0,0%,100%,.8);
      position: absolute;
      left:24px;
      top:136px
  }
}
</style>