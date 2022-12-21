<template>
  <div class="row q-my-md">
    <q-file
      v-model="file"
      label="Pick one file"
      filled
      style="max-width: 300px; min-width: 200px"
      @update:model-value="validateFile()"
    />
    <q-btn
      :disabled="file == undefined"
      class="q-ml-md"
      @click="onFileUpload()"
      label="Upload"
    />
    <q-btn
      :disabled="file == undefined"
      class="q-ml-md"
      @click="onFileClear()"
      style="background: #ff3838; color: white"
      label="Clear"
    />
  </div>
</template>

<style></style>

<script>
import Swal from "sweetalert2";

export default {
  name: "FileUpload",
  data() {
    return {
      file: undefined,
      jsonFile: undefined,
      something: undefined,
      store: undefined,
      uploaded: false,
    };
  },
  methods: {
    onFileUpload() {
      let proceed = false;

      if (this.uploaded) {
        Swal.fire({
          title: "File exist",
          text: "You are currently editing a file. Reupload?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes",
        }).then((result) => {
          if (result.isConfirmed) {
            proceed = true;
          }
        });
      } else {
        proceed = true;
      }

      if (proceed) {
        let reader = new FileReader();

        reader.onload = (event) => {
          let jsonStr = event.target.result.trim();
          if (jsonStr[jsonStr.length - 1] == ",")
            jsonStr = `[${jsonStr.slice(0, -1)}]`;

          this.$store.dispatch("setFile", JSON.parse(jsonStr));
          this.$store.dispatch("setFileName", this.file.name);
        };

        reader.readAsText(this.file);
        this.uploaded = true;
      }
    },
    onFileClear() {
      Swal.fire({
        title: "Are you sure?",
        text: "All unsaved changes will be removed.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          this.file = undefined;
          this.uploaded = false;
          this.$store.dispatch("clearFile");
        }
      });
    },
    validateFile() {
      if (this.file.type != "application/json") {
        Swal.fire({
          title: "File not supported",
          text: "Please upload JSON file only",
        });
        this.file = undefined;
      }
    },
  },
};
</script>
