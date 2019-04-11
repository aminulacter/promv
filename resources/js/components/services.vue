<template>
  <div>
    <v-layout align-center justify-center row fill-height>
      <v-flex xs12 pt-5 py-3>
        <p class="text-xs-center display-2 font-weight-bold black--text">Our Featured Services</p>
      </v-flex>
    </v-layout>
    <v-layout align-center justify-center row wrap fill-height app>
      <v-flex xs12 sm6 md3 v-for="service in services" :key="service.title">
        <singService :showService="service"></singService>
      </v-flex>
    </v-layout>
    <v-layout align-center justify-center row wrap fill-height app>
      <v-flex xs12>
        <v-btn color="info">READ MORE</v-btn>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import singService from "./singComponent.vue";
export default {
  data: function() {
    return {
      services: [
        {
          icon: "fas fa-heartbeat",
          title: "Cardiology",
          desc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem maximus malesuada lorem maximus mauris."
        },
        {
          icon: "",
          image: "/img/stomach_1.jpg",
          title: "Gastroenterology",
          desc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem maximus malesuada lorem maximus mauris."
        },
        {
          icon: "fas fa-vials",
          title: "Medical Lab",
          desc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem maximus malesuada lorem maximus mauris."
        },
        {
          icon: "fas fa-tooth",
          title: "Dental Care",
          desc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem maximus malesuada lorem maximus mauris."
        },
        {
          icon: "fas fa-procedures",
          title: "Surgery",
          desc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem maximus malesuada lorem maximus mauris."
        },
        {
          icon: "fas fa-brain",
          title: "Neurology",
          desc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem maximus malesuada lorem maximus mauris."
        },
        {
          icon: "fas fa-capsules",
          title: "Medicine",
          desc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem maximus malesuada lorem maximus mauris."
        },
        {
          icon: "pregnant_woman",
          title: "gynaecology",
          desc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem maximus malesuada lorem maximus mauris."
        }
      ]
    };
  },
  components: { singService }
};
</script>

<style scoped>
</style>