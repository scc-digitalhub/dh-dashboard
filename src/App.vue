<script>
import { mapGetters, mapActions } from 'vuex'
import { Dropdown, Collapse, initMDB } from "mdb-ui-kit";

import { env } from './config/env.js'
import DataService from './service.js';

export default {
  name: 'App',
  data() {
    return {
      hasMonitoring: false
    }
  },
  computed: {
    ...mapGetters( [
      'oidcIsAuthenticated',
      'oidcUser'
    ]),
    title() {
      return env.VITE_PLATFORM_TITLE
    },
    version() {
      return env.VITE_PLATFORM_VERSION;
    },
    hasAuth() {
      return !!env.VITE_OIDC_CONFIG
    }
  },
  methods: {
    ...mapActions( [
      'authenticateOidcPopup',
      'signOutOidc'
    ]),
    userLoaded: function (e) {
      console.log('userLoaded', e.detail)
    },
    oidcError: function (e) {
      console.log('oidcError', e.detail)
    },
    automaticSilentRenewError: function (e) {
      console.log('automaticSilentRenewError', e.detail)
    },
    signOut: function () {
      this.signOutOidc().then(() => {
        this.$router.push('/')
      })
    }
  },
  mounted () {
    DataService.hasMonitoring().then(hasMonitoring => this.hasMonitoring = hasMonitoring)
    window.addEventListener('vuexoidc:userLoaded', this.userLoaded)
    window.addEventListener('vuexoidc:oidcError', this.oidcError)
    window.addEventListener('vuexoidc:automaticSilentRenewError', this.automaticSilentRenewError)
    initMDB({ Dropdown, Collapse });
  },
  destroyed () {
    window.removeEventListener('vuexoidc:userLoaded', this.userLoaded)
    window.removeEventListener('vuexoidc:oidcError', this.oidcError)
    window.removeEventListener('vuexoidc:automaticSilentRenewError', this.automaticSilentRenewError)
  }
}
</script>

<template>
  <!--Main Navigation-->
<header>
  <!-- Sidebar -->
  <nav
       id="sidebarMenu"
       class="collapse d-lg-block sidebar collapse bg-white"
       >
    <div class="position-sticky">
      <div class="list-group list-group-flush mx-3 mt-4">
        <router-link v-if="hasMonitoring"
          to="/"
           class="list-group-item list-group-item-action py-2 ripple"
           aria-current="true"
           >
          <i class="fas fa-tachometer-alt fa-fw me-3"></i
            ><span>Main dashboard</span>
        </router-link>
        <router-link
          to="/components"
           class="list-group-item list-group-item-action py-2 ripple"
           ><i class="fas fa-building fa-fw me-3"></i
          ><span>Components</span></router-link>
        <router-link  v-if="hasMonitoring"
           to="/monitor"
           class="list-group-item list-group-item-action py-2 ripple"
           ><i class="fas fa-chart-line fa-fw me-3"></i
          ><span>Monitoring</span></router-link>
      </div>
    </div>
  </nav>
  <!-- Sidebar -->

  <!-- Navbar -->
  <nav
       id="main-navbar"
       class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
       >
    <!-- Container wrapper -->
    <div class="container-fluid">
      <!-- Toggle button -->
      <button
              class="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#sidebarMenu"
              aria-controls="sidebarMenu"
              aria-expanded="false"
              aria-label="Toggle navigation"
              >
        <i class="fas fa-bars"></i>
      </button>

      <!-- Brand -->
      <a class="navbar-brand" href="#">
        {{title}} <sup>({{version}})</sup>
      </a>

      <div class="d-flex align-items-center">
        <!-- GitHub -->
        <a class="text-reset me-3 nav-link" href="https://github.com/scc-digitalhub" rel="nofollow" target="_blank">
          <i class="text-light fab fa-github"></i>
        </a>
        <!-- Account -->
        <div class="dropdown" v-if="hasAuth">
          <a
            data-mdb-dropdown-init
            class="dropdown-toggle d-flex align-items-center hidden-arrow nav-link" 
            href="#"
            id="navbarDropdownMenuAvatar"
            role="button"
            aria-expanded="false"
          >
            <i class="text-light fas fa-user"></i>
          </a>
          <ul
            class="dropdown-menu dropdown-menu-end"
            aria-labelledby="navbarDropdownMenuAvatar"
          >
            <li v-if="oidcUser">
              <a class="dropdown-item" href="#">{{oidcUser.preferred_username}}</a>
            </li>
            <li>
              <a class="dropdown-item" @click="signOut" >Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- Container wrapper -->
  </nav>
  <!-- Navbar -->
</header>
<!--Main Navigation-->

  <RouterView />

</template>

<style scoped>
</style>
