<template>
    <ul class="topnav">
        <li><router-link tag="a" to="/"> 推荐音乐</router-link></li>
        <li><router-link tag="a" to="/Hot"> 热歌榜</router-link></li>
        <li><router-link tag="a" to='/search'> 搜索</router-link></li>
    </ul>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
.topnav{
    border-bottom:1px solid grey;
    display:flex;
    li{
        list-style: none;
        line-height:40px;
    flex:1 1 auto;
    font-size: 15px;
    a{
        text-decoration: none;
        display: inline-block;
        color:#000;
    &.router-link-exact-active{
        color:red;
        border-bottom: 2px solid red
        ;
    }
    }
    }
}
</style>