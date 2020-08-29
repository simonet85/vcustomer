<template>
  <div id="app">
    <nav class="navbar navbar-expand-sm navbar-dark bg-primary">
      <!-- <router-link> -->
      <a class="navbar-brand">Customer Manager System</a>
      <!-- </router-link> -->
      <button
        class="navbar-toggler d-lg-none"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      ></button>
      <div class="collapse navbar-collapse" id="collapsibleNavId">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item active">
            <router-link to="/">
              <a class="nav-link"
                >Home <span class="sr-only">(current)</span></a
              >
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about">
              <a class="nav-link">About</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact">
              <a class="nav-link">Contact</a>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view> </router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style></style>
