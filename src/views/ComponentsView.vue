<!-- SPDX-License-Identifier: Apache-2.0 -->
<script>
import DataService from '../service.js';
export default {
  data() {
    return {
      components: [],
      sshComponent: null
    }
  },
  mounted() {
    DataService.getComponents().then(components => this.components = components);
  },
  methods: {
    ssh(c) {
      this.sshComponent = c
    }
  }
}

</script>

<template>
  <main class="my-5">
    <div class="container">
      <!--Section: Content-->
      <section>
        <!-- Jumbotron -->
        <div id="intro" class="p-5 text-center bg-light shadow-5 rounded-5 mb-5">
          <h1 class="h2">Platform Components</h1>
          <p>Open component UI or connect using SSH agend</p>
        </div>
        <!-- Jumbotron -->

        <div class="row">
          <div class="col-sm-6 col-md-4 mb-3" v-for="c in components" :key="c.slug">
            <div class="card text-center">
              <div class="card-body">
                <h5 class="card-title">{{c.name}}</h5>
                <p class="card-text" >{{c.description}}</p>
                <div class="float-end">
                  <a v-if="c.link" class="btn btn-link mx-3" target="_blank" :href="c.link"><i class="fas fa-link"></i> Open</a>
                  <button v-if="c.port" type="button" @click="ssh(c)" class="btn btn-link" data-mdb-toggle="modal" data-mdb-target="#sshModal"><i class="fas fa-plug"></i> SSH</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--Section: Content-->

      <div class="modal fade" id="sshModal" tabindex="-1" aria-labelledby="sshModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="sshModalLabel">SSH connection</h5>
              <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body" v-if="sshComponent">
              To connect to the component exposed port perform the following steps:
              <ol>
                <li>Install Coder CLI</li>
                <li>Login to coder with <strong>coder login</strong></li>
                <li>Launch SSH agent workspace from template <strong>Port-forward Agent</strong></li>
                <li>Perform <strong>coder port-forward workspacename --tcp {{sshComponent.port}}:{{sshComponent.port}}</strong> command</li>
                <li>Connect to the component with <strong>http://localhost:{{sshComponent.port}}</strong></li>
              </ol>
            </div>
          </div>
        </div>
      </div>

    </div>
  </main>
</template>

<style scoped>
.card-text {
  overflow: hidden;
  min-height: 80px;
  /* white-space: nowrap;
  text-overflow: ellipsis; */
}
</style>
