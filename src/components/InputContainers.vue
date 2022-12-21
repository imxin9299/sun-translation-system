<template>
  <div class="row justify-center">
    <q-card class="card q-my-sm" v-for="block in blocks" :key="block.id">
      <q-card-section>
        <TranslationBlock :detail="block" />
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import TranslationBlock from "./TranslationBlock.vue";
export default {
  name: "InputContainers",
  components: { TranslationBlock },
  computed: {
    blocks() {
      return this.$store.state.untranslatedJSON;
    },
  },
};
</script>

<style scoped>
.card {
  width: 70%;
}
</style>