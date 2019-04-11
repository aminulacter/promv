<template>
  <div v-scroll="onScroll">
    <pageTop/>
    <v-toolbar dark color="primary">
      <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>
        <v-icon>home</v-icon>
        <span class="hidden-sm-and-down">{{ $t('genInfo.doctors') }} {{ $t('genInfo.point') }}</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat @click="changeLocal">{{$t('message.language')}}</v-btn>
      </v-toolbar-items>
      <v-menu bottom offset-y light>
        <template v-slot:activator="{ on }">
          <v-toolbar-title v-on="on">
            <span class="drpoint">
              <v-icon small>far fa-user</v-icon>
            </span>
            <v-icon dark>arrow_drop_down</v-icon>
          </v-toolbar-title>
        </template>

        <v-list>
          <v-list-tile class="menuexpand" @click>
            <v-list-tile-title>
              <span>
                <v-icon small color="indigo">fas fa-sign-in-alt</v-icon>
              </span>
              {{$t('menu.Login')}}
            </v-list-tile-title>
          </v-list-tile>
          <v-list-tile class="menuexpand" @click>
            <v-list-tile-title>
              <span>
                <v-icon small color="indigo">fas fa-user-plus</v-icon>
              </span>
              {{$t('menu.Register')}}
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-menu :nudge-width="10" bottom offset-y light>
        <template v-slot:activator="{ on }">
          <v-toolbar-title class="hidden-sm-and-down" v-on="on">
            <span class="drpoint">{{$t('menu.Departments')}}</span>
            <v-icon dark>arrow_drop_down</v-icon>
          </v-toolbar-title>
        </template>

        <v-list>
          <v-list-tile class="menuexpand" v-for="item in menus1" :key="item" @click>
            <v-list-tile-title v-text="item"></v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>

      <v-toolbar-items class="hidden-sm-and-down" pt-2>
        <v-btn flat>{{ $t('menu.Doctors') }}</v-btn>
      </v-toolbar-items>
      <v-toolbar-items class="hidden-xs-only" pt-2>
        <v-btn flat>{{$t('menu.LabTests')}}</v-btn>
      </v-toolbar-items>

      <v-toolbar-items class="menuRound hidden-sm-and-down">
        <v-btn small round color="orange darken-3" dark>{{ $t('menu.appointmentfull') }}</v-btn>
      </v-toolbar-items>
      <v-toolbar-items class="menuRound hidden-md-and-up">
        <v-btn small round color="orange darken-3" dark>{{$t('menu.appointment')}}</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" app class="indigo" disable-resize-watcher>
      <v-list>
        <v-list-tile v-for="link in links" :key="link.text">
          <v-list-tile-action>
            <v-icon color="white">{{link.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <a :href="link.route">
              <v-list-tile-title class="white--text">{{link.text}}</v-list-tile-title>
            </a>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <transition name="fade" mode="out-in" appear>
      <v-btn
        fab
        bottom
        right
        color="pink"
        dark
        fixed
        v-if="dialog"
        @click="$vuetify.goTo(target, options)"
      >
        <v-icon>keyboard_arrow_up</v-icon>
      </v-btn>
    </transition>
  </div>
</template>

<script>
import pageTop from "./pageTop.vue";
export default {
  data() {
    return {
      drawer: false,
      dialog: false,
      duration: 1000,
      offset: 0,
      easing: "easeInOutCubic",
      local: "en",

      links: [
        { icon: "dashboard", text: "Dashboard", route: "/" },
        { icon: "folder", text: "Events", route: "/events" },
        { icon: "person", text: "Galary", route: "/galary" }
      ],
      menus1: ["All", "Family", "Friends", "Coworkers"]
    };
  },
  components: { pageTop },
  methods: {
    onScroll(e) {
      if (window.pageYOffset >= 200) {
        this.dialog = true;
      } else {
        this.dialog = false;
      }
    },
    changeLocal() {
      this.$i18n.locale = this.local;
      console.log(this.local);
      if (this.local == "en") {
        this.local = "bd";
      } else {
        this.local = "en";
      }
    }
  },
  computed: {
    target() {
      const value = 0;
      return value;
    },
    options() {
      return {
        duration: this.duration,
        offset: this.offset,
        easing: this.easing
      };
    }
  }
};
</script>

<style scoped>
.menuRound {
  height: 80%;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.menuexpand:hover {
  background-color: #cfd8dc;
}
.drpoint:hover {
  cursor: pointer;
}
</style>