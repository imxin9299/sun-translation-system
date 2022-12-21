<template>
  <q-layout view="hHH lpR fFf">
    <q-header elevated class="bg-primary text-white" color="yellow-2">
      <q-toolbar>
        <q-toolbar-title> Title </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <Home />
    </q-page-container>

    <q-footer elevated class="q-pa-md text-center bg-grey-8 text-white">
      <div>Doing Works Koei Tecmo Won't</div>
    </q-footer>
  </q-layout>
</template>

<script>
import Home from "./views/Home.vue";

export default {
  name: "LayoutDefault",
  components: {
    Home,
  },
};
</script>
