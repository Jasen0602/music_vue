<template>
    <h2 class="t1"> <slot></slot> </h2>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
.t1{
    color:#000;
    text-align: left;
    border-left:2px solid red;
    padding-left:10PX;
    margin: 10px  0;
}
</style>