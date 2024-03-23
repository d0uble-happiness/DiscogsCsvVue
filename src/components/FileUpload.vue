<template>

    <label>File:</label>
    <input type="file">
    
</template>

<script lang="ts">

export default {
    name: 'FileUpload',
    components: {
    },
    data() {
      return {
        file: ""
      }
    },
    methods: {
    chooseFiles
  },
  mounted() {
    console.log("mounted");
  }
}; 

function chooseFiles() {
  document.getElementById("file").click();
}

</script>

<style>
</style>
