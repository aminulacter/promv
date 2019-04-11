<template>
  <v-layout align-center justify-center row wrap fill-height>
    <v-flex xs12 sm6 md3 v-for="immservice in immservices" :key="immservice.title">
      <singleImmService :showService="immservice" pa-2></singleImmService>
    </v-flex>
  </v-layout>
</template>

<script>
import singleImmService from "./singleImmService.vue";
export default {
  components: { singleImmService },
  data() {
    return {
      immservices: [
        {
          icon: "fas fa-user-md",
          title: "immService.QualityDoc", //Qualified Doctors",
          color: "light-blue",
          desc: "immService.QualityDocDetail"
        },
        {
          icon: "fas fa-ambulance",
          title: "immService.EmergencyCare", //Emergency Care",
          color: "light-blue lighten-1",
          desc: "immService.EmergencyCareDetail"
        },
        {
          icon: "fas fa-stethoscope",
          title: "immService.OutdoorCheck", //Outdoor Checkup",
          color: "light-blue darken-1",
          desc: "immService.OutdoorCheckDetail"
        },

        {
          icon: "update",
          image: "/img/24hour.svg",
          title: "immService.Hours24Service", //24 Hours Service",
          color: "light-blue lighten-2",
          desc: "immService.Hours24ServiceDetail"
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>