<template>
  <v-container fluid>
    <v-layout align-center justify-space-between row fill-height>
      <v-flex md3 sm-12>
        <v-layout align-center justify-space-between row fill-height>
          <v-flex md-3 mr-2>
            <v-img src="/img/logo11.png" height="100" width="100"></v-img>
          </v-flex>
          <v-flex md-9>
            <span class="font-weight-medium title">{{$t('genInfo.doctors')}}</span>
            <span class="font-weight-medium title red--text">{{$t('genInfo.point')}}</span>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex md9 class="hidden-sm-and-down">
        <v-layout align-start justify-space-between row fill-height>
          <v-flex md4>
            <v-layout align-center justify-sart row fill-height>
              <v-flex md-4>
                <v-btn fab flat class="topmenubtn">
                  <v-icon color="blue darken-2" small class="iconmenu">fas fa-map</v-icon>
                </v-btn>
              </v-flex>
              <v-flex md-8>
                <span>{{$t('genInfo.addressPlace')}}</span>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex md4>
            <v-layout align-center justify-start row fill-height>
              <v-flex md-4>
                <v-btn fab flat class="topmenubtn">
                  <v-icon color="blue darken-2" small class="iconmenu">fas fa-paper-plane</v-icon>
                </v-btn>
              </v-flex>
              <v-flex md-8>
                <span>{{$t('genInfo.Email')}}: akhteraminul@gmail.com</span>
              </v-flex>
            </v-layout>
          </v-flex>

          <v-flex md4>
            <v-layout align-center justify-start row fill-height>
              <v-flex md-4>
                <v-btn fab flat class="topmenubtn">
                  <v-icon color="blue darken-2" small>call</v-icon>
                </v-btn>
              </v-flex>
              <v-flex md-8>
                <span>{{$t('genInfo.phone')}}: {{$t('genInfo.phoneNumber')}}</span>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
</style>