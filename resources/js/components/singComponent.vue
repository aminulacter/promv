<template>
  <v-card flat hover ripple height="250" class="teal lighten-5 black--text">
    <v-card-title>
      <v-layout align center justify-center row wrap>
        <v-flex xs12>
          <v-avatar color="indigo">
            <v-icon large v-if="showService.icon">{{ showService.icon }}</v-icon>
            <img :src="showService.image" v-else>
          </v-avatar>
          <span class="text-xs-center title">{{ showService.title }}</span>
        </v-flex>
      </v-layout>
    </v-card-title>
    <v-card-text class="body-2">{{ showService.desc }}</v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ["showService"]
};
</script>

<style scoped>
</style>