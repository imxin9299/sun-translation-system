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
      let transformed = this.$store.state.translatedJSON;

      let noId = transformed.map((i) => {
        let param1 = i.param[0][0] == undefined ? "" : i.param[0][0];
        let param2 = i.param[0][1] == undefined ? "" : i.param[0][1];
        let param3 = i.param[0][2] == undefined ? "" : i.param[0][2];
        let param4 = i.param[0][3] == undefined ? "" : i.param[0][3];

        return {
          cmd: i.cmd,
          row: i.row,
          disp_name: i.disp_name,
          name: i.name,
          param: [[param1, param2, param3, param4]],
          targets: i.targets,
        };
      });

      let jsonStr = "";

      noId.forEach((i) => {
        jsonStr += JSON.stringify(i) + ",\n";
      });

      let dataStr =
        "data:text/json;charset=utf-8," + encodeURIComponent(jsonStr);

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
