<template>
  <div class="backbone">
    <frontCarosal></frontCarosal>
    <v-container>
      <immserviceview app class="goup"></immserviceview>
      <aboutSection></aboutSection>
      <services></services>
    </v-container>
  </div>
</template>

<script>
import frontCarosal from "../components/frontCarosal.vue";
import immserviceview from "../components/immserviceview.vue";
import aboutSection from "../components/shaboutUsapp.vue";
import services from "../components/services.vue";
export default {
  components: { frontCarosal, immserviceview, aboutSection, services }
};
</script>

<style scoped>
.backbone {
  background-color: #eceff1;
}
.goup {
  margin-top: -15px;
}
@media screen and (min-width: 900px) {
  .goup {
    margin-top: -25px;
  }
}
</style>