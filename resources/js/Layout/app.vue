<template>
  <v-app dark id="inspire" v-cloak>
    <myheader></myheader>
    <v-content>
      <router-view></router-view>
    </v-content>
    <myfooter></myfooter>
  </v-app>
</template>

<script>
import myheader from "../components/header.vue";
import myfooter from "../components/footer.vue";
export default {
  components: { myheader, myfooter }
};
</script>

<style scoped>
[v-cloak] > * {
  display: none;
}
[v-cloak]::before {
  content: "loading…";
}
</style>