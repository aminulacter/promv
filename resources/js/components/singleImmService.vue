<template>
  <v-card flat :color="showService.color" hover ripple height="300">
    <v-card-title>
      <v-layout justify-center row wrap>
        <v-flex xs12>
          <v-layout justify-center row wrap>
            <v-avatar color="indigo" size="60">
              <v-icon large v-if="showService.icon">{{ showService.icon }}</v-icon>
              <img :src="showService.image" v-else>
            </v-avatar>
          </v-layout>
        </v-flex>
        <v-flex xs12 pt-3>
          <p class="text-xs-center title">{{ $t(showService.title) }}</p>
        </v-flex>
      </v-layout>
    </v-card-title>
    <v-card-text class="subheading">{{ $t(showService.desc) }}</v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ["showService"]
};
</script>

<style scoped>
</style>