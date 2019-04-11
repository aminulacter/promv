<template>
  <v-footer dark height="auto" color="blue darken-3">
    <v-card flat tile class="blue darken-3 white--text text-xs-center">
      <v-card-text class="white--text pt-0">
        <v-layout justify-center align-start row wrap>
          <v-flex xs12 md4 pt-5>
            <v-card flat tile class="blue darken-3 white--text text-xs-center">
              <v-card-text>
                <span class="font-weight-medium title">{{$t('genInfo.doctors')}}</span>
                <span class="font-weight-medium title red--text">{{$t('genInfo.point')}}</span>
              </v-card-text>
              <v-card-text class="white--text text-xs-left pt-0">{{ $t('genInfo.footerDesc') }}</v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 md4 pt-5>
            <v-card flat tile class="blue darken-3 white--text text-xs-center linkmark">
              <v-card-text class="white--text pa-0">
                <v-btn color="white" flat round pa-0 to="/">HOME</v-btn>
              </v-card-text>

              <v-card-text class="white--text pa-0">
                <v-btn color="white" flat round pa-0 to="/about">CONTACT US</v-btn>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 md4 pt-5>
            <h3>Contact Info</h3>

            <ul class="contact-info">
              <li>
                <v-icon>fas fa-map-marker-alt</v-icon>
                <span>{{$t('genInfo.addressPlace')}}</span>
              </li>
              <li>
                <v-icon>far fa-envelope</v-icon>
                <span>info@domain.com</span>
              </li>
              <li>
                <v-icon>fas fa-phone-square</v-icon>
                <span>{{$t('genInfo.phoneNumber')}}</span>
              </li>
              <li>
                <v-layout justify-center wrap>
                  <v-btn flat icon class="topmenubtn">
                    <v-icon>fab fa-facebook-square</v-icon>
                  </v-btn>
                  <v-btn flat icon class="topmenubtn" pl-0 ml-0>
                    <v-icon>fab fa-twitter</v-icon>
                  </v-btn>
                  <v-btn flat icon class="topmenubtn" pl-0 ml-0>
                    <v-icon>fab fa-linkedin</v-icon>
                  </v-btn>
                  <v-btn flat icon class="topmenubtn" pl-0 ml-0>
                    <v-icon>fab fa-instagram</v-icon>
                  </v-btn>
                </v-layout>
              </li>
            </ul>
          </v-flex>
        </v-layout>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        &copy;2019 —
        <strong>Aminul</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      "fab fa-facebook-f",
      "fa-twitter",
      "fa-google-plus",
      "fa-linkedin",
      "fa-instagram"
    ],
    links: ["Home", "COURSES", "Gallery", "Contact Us"]
  })
};
</script>
<style css scoped>
ul {
  list-style-type: none;
}
ul li span {
  padding-left: 10px;
}
i,
h3 {
  font-size: 24px;
}
.linkmark {
  fontsize: 18px;
}
@media (max-width: 480px) {
  ul li span {
    padding-left: 5px;
  }
  i,
  h3 {
    font-size: 16px;
  }
  .linkmark {
    fontsize: 10px;
  }
}
</style>
