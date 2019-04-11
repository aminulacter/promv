<template>
  <v-layout align-start justify-center row wrap fill-height d-flex pt-2>
    <v-flex xs12 md4>
      <v-img src="/img/image_1.jpg" class="grey darken-4"></v-img>
    </v-flex>
    <v-flex xs12 md4>
      <v-card color="indigo lighten-2">
        <v-card-title primary-title>
          <v-layout justify-center row wrap>
            <h3 class="headline mb-0">{{ $t('abtus.aboutUs') }}</h3>
          </v-layout>
          <v-layout justify-center row wrap>
            <h3 class="title mb-0 font-weight-bold">{{ $t('abtus.aboutUsTitle') }}</h3>
          </v-layout>
        </v-card-title>
        <v-card-text class="subheading font-weight-regular" pb-0>{{ $t('abtus.aboutUsDesc') }}</v-card-text>
      </v-card>
    </v-flex>

    <v-flex xs12 md4 class="appform">
      <h3 class="headline text-xs-center">{{ $t('menu.appointmentfull') }}</h3>
      <v-form v-model="valid">
        <v-container app>
          <v-layout>
            <v-flex xs12 mt-0 pt-0>
              <v-select :items="departments" label="Department"></v-select>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex xs12 mt-0 pt-0>
              <v-select :items="doctors" label="Doctor"></v-select>
            </v-flex>
          </v-layout>
          <v-layout justify-center>
            <v-flex xs12 mt-0 py-0>
              <v-btn round color="primary" dark>{{ $t('menu.appointmentfull') }}</v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-form>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    departments: ["Dental", "Heart", "Medicine"],
    doctors: ["Aminul", "Fayyaaz", "Fahmi"],
    firstname: "",
    lastname: "",
    nameRules: [
      v => !!v || "Name is required",
      v => v.length <= 10 || "Name must be less than 10 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ]
  })
};
</script>

<style scoped>
.appform {
  background-color: burlywood;
}
</style>