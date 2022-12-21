<template>
  Row: <q-chip dense>{{ row }}</q-chip>
  <div>
    <q-chip color="primary" text-color="white" icon="perm_identity">
      {{ disp_name }}
    </q-chip>
  </div>
  <div>
    Type:
    <q-chip color="grey" text-color="white">
      {{ cmd }}
    </q-chip>
    <span class="q-ml-md" v-if="param2">Expression:</span>
    <q-chip v-if="param2" color="grey" text-color="white">
      {{ param2 }}
    </q-chip>
  </div>
  <q-input
    v-model="param4"
    label="JP"
    type="textarea"
    readonly
    :input-style="{ resize: 'none' }"
    rows="4"
  >
    <template v-slot:after>
      <q-btn round dense flat icon="content_copy" @click="copyToClipboard()" />
    </template>
  </q-input>
  <q-input
    v-model="translated"
    label="EN"
    type="textarea"
    :input-style="{ resize: 'none' }"
    placeholder="Insert translation ..."
    rows="4"
  />
  <div class="q-mt-sm">
    Miscellaneous:
    <q-chip dense v-if="name" color="grey" text-color="white">
      name: {{ name }} </q-chip
    ><q-chip dense v-if="param1" color="grey" text-color="white">
      {{ param1 }} </q-chip
    ><q-chip dense v-if="param3" color="grey" text-color="white">
      {{ param3 }}
    </q-chip>
    <q-chip dense v-if="targets" color="grey" text-color="white">
      {{ targets }}
    </q-chip>
  </div>
</template>

<script>
export default {
  name: "TranslationBlock",
  props: ["detail"],
  data() {
    return {
      id: this.detail.id,
      cmd: this.detail.cmd,
      row: this.detail.row,
      disp_name: this.detail.disp_name,
      name: this.detail.name,
      param1: this.detail.param[0][0],
      param2: this.detail.param[0][1], //expression
      param3: this.detail.param[0][2],
      param4: this.detail.param[0][3], //text
      targets: this.detail.targets,
      translated: "",
    };
  },
  methods: {
    copyToClipboard() {
      navigator.clipboard.writeText(this.param4);
    },
  },
  watch: {
    translated(newVal) {
      this.$store.dispatch("setTranslated", { id: this.id, value: newVal });
    },
  },
};
</script>

<style>
</style>