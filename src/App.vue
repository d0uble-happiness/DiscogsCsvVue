<template>

  <main>
    <FileUpload />
    <ParseCsvToArray />
    <ProcessReleaseData /> 
  </main>

  <button @click="changeVal">Change Text</button>
  <p ref="pEl">This is the initial text</p>
</template>

<script lang="ts">
import FileUpload from './components/FileUpload.vue'
import ParseCsvToArray from './components/ParseCsvToArray.vue'
import ProcessReleaseData from './components/ProcessReleaseData.vue'
// import App from './App.vue'

export default {
  name: 'App',
  components: {
    FileUpload,
    ParseCsvToArray,
    ProcessReleaseData,
  },

  methods: {
    changeVal() {
        this.$refs.pEl.innerHTML = "Hello!";
      }
  }
};  
</script>

<style>
</style>
