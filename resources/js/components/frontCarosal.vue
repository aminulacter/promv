<template>
  <v-carousel hide-controls interval="5000" height="600">
    <v-carousel-item
      v-for="(item,i) in caroselItems"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    >
      <v-layout align-end justify-start row fill-height>
        <v-flex xs8 offset-xs2>
          <v-card class="transparent" flat>
            <v-card-text class="carosalbot">
              <p
                class="blue--text text-xs-left display-3 font-weight-bold text-capitalize"
                :class="{'headline': $vuetify.breakpoint.xs, 'headline': $vuetify.breakpoint.sm }"
              >{{item.message}}</p>
              <p
                class="black--text text-xs-left display-3 font-weight-bold text-capitalize"
                :class="{'title': $vuetify.breakpoint.xs, 'headline': $vuetify.breakpoint.sm}"
              >{{item.message2}}</p>
              <p
                class="black--text text-xs-left headline font-weight-light text-capitalize"
                :class="{'subheading': $vuetify.breakpoint.xs, 'title': $vuetify.breakpoint.sm}"
              >{{item.message3}}</p>
              <v-btn
                round
                color="primary"
                large
                dark
                :class="{'medium': $vuetify.breakpoint.xs}"
              >Make An Appointment</v-btn>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-carousel-item>
  </v-carousel>
</template>


<script>
export default {
  data() {
    return {
      caroselItems: [
        {
          src: "/img/bg_1.jpg",
          message: "We Care ",
          message2: "about your health",
          message3: "Your health is our top priority"
        },
        {
          src: "/img/bg_2.jpg",
          message: "Helping Your",
          message2: "stay happy one",
          message3: "We bring hope to our client"
        }
      ]
    };
  }
};
</script>

<style scoped>
.carosalbot {
  margin-bottom: 80px;
}
</style>