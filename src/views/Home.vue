<template>
  <div class="row justify-center">
    <FileUpload />
  </div>
  <InputContainers />
  <q-page-sticky position="bottom-right" :offset="[18, 18]">
    <q-btn fab icon="save" color="orange-8" @click="exportJSON()" />
  </q-page-sticky>
</template>

<script>
// @ is an alias to /src
import FileUpload from "@/components/FileUpload.vue";
import InputContainers from "@/components/InputContainers.vue";

export default {
  name: "Home",
  components: {
    FileUpload,
    InputContainers,
  },
  methods: {
    exportJSON() {
      let transformed = this.$store.state.translatedJSON.map((i) => {
        delete i.id;
        return i;
      });

      transformed = JSON.stringify(transformed);
      transformed = transformed.slice(1, -1) + ",";

      let dataStr =
        "data:text/json;charset=utf-8," + encodeURIComponent(transformed);

      let dlAnchorElem = document.createElement("a");
      dlAnchorElem.setAttribute("href", dataStr);
      dlAnchorElem.setAttribute(
        "download",
        `${this.$store.state.fileName.slice(0, -5)}_translated.json`
      );
      dlAnchorElem.click();
    },
  },
};
</script>
