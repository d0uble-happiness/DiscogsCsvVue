<template>
  <div>
    <FileUpload @file="setFile" />
    <ParseCsvToArray v-if="file" :file="file" />
    <FetchRelease v-if="data" :data="data" />
    <ProcessReleaseData v-if="formattedData" :data="formattedData" />
    <DownloadCSV v-if="csvContent" :data="csvContent" />
  </div>

  <div>
    <p v-for="row of formattedData" v-bind:key="row.id">
      {{ row }}
    </p>
  </div>
</template>

<script lang="ts">
import DownloadCSV from './components/DownloadCSV';
import FetchRelease from './components/FetchRelease';
import { defineComponent } from 'vue';
import FileUpload from './components/FileUpload.vue';
import ParseCsvToArray from './components/ParseCsvToArray.vue';
import ProcessReleaseData from './components/ProcessReleaseData';

export default defineComponent({
  name: 'App',
  components: {
    FileUpload,
    ParseCsvToArray,
    FetchRelease,
    ProcessReleaseData,
    DownloadCSV
  },
  data() {
    return {
      file: null as null | File,
    }
  },
  methods: {
    setFile(file: File) {
      console.log("Received file:", file)
      this.file = file;
    }
  },
  mounted() {
    console.log("mounted");
  },
  props: ['data', 'formattedData', 'csvContent']
});
</script>

<style></style>
