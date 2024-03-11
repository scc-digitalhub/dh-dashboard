<script>
import DataService from '../service.js';
export default {
  data() {
    return {
      components: [],
    }
  },
  mounted() {
    DataService.getMonitoring().then(components => this.components = components);
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
          <h1 class="mb-3 h2">Monitoring</h1>
          <p class="mb-3">Observe your infrastructure, data and AI services</p>
        </div>
        <!-- Jumbotron -->

        <div class="row">
          <div class="col mb-3" v-for="c in components" :key="c.slug">
            <div class="card text-center">
              <div class="card-body">
                <h5 class="card-title">{{c.name}}</h5>
                <p class="card-text">{{c.description}}</p>
                <div class="float-end">
                  <a v-if="c.link" class="btn btn-link mx-3" target="_blank" :href="c.link"><i class="fas fa-link"></i> Open</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--Section: Content-->

    </div>
  </main>
</template>
