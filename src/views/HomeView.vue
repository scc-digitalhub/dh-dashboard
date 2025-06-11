<!--
SPDX-FileCopyrightText: © 2025 DSLab - Fondazione Bruno Kessler

SPDX-License-Identifier: Apache-2.0
-->

<script>
  import { env } from '../config/env.js'
  export default {
    data() {
      return {
        title: env.VITE_PLATFORM_TITLE,
      }
  },
  }
</script>

<template>
  <main class="my-5">
    <div class="container">
      <!--Section: Content-->
      <section>
        <!-- Jumbotron -->
        <div id="intro" class="p-5 text-center bg-light shadow-5 rounded-5 mb-5">
          <h1 class="mb-3 h2">Welcome to {{title}}</h1>
          <p class="mb-3">Manage your data and AI services</p>
        </div>
        <!-- Jumbotron -->

        <div class="row">
          <div class="col-lg-6 col-md-6 mb-6">
            <div class="card text-center">
              <div class="card-body">
                <h5 class="card-title">Platform Components</h5>
                <p class="card-text">
                  Access to the different platform components via Web  or from your development environment. Explore your data, manage projects, data, services, and operations.
                </p>
                <router-link class="btn btn-primary" to="/components">More</router-link>
              </div>
            </div>
          </div>

          <div class="col-lg-6 col-md-6 mb-6">
            <div class="card text-center">
              <div class="card-body">
                <h5 class="card-title">Platform Monitoring</h5>
                <p class="card-text">
                 Monitor your infrastrucutre, resources, and applications. Observe the state of the components, services, and data.
                </p>
                <router-link class="btn btn-primary" to="/monitor">More</router-link>
              </div>
            </div>
          </div>      
        </div>
      </section>
      <!--Section: Content-->

    </div>
  </main>
</template>
