
<template>
  <div>
    <router-link to="/hot" tag="li">
      <Biaoti>

      </Biaoti>

      
    </router-link>
  </div>
  <!--和recommend.vue一样  -->
</template>
<script>
import Biaoti from "../components/Biaoti.vue";
export default {
  name: "Hot",
  components: {
    Biaoti,
  },
};
</script>
<style lang="less" scoped>
li {
  list-style: none;
}
</style>
