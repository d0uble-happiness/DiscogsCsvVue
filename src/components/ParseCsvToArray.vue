<template>
<label>Array:</label>

<div class="greetings">
    <input type="file" id="myFile" name="filename" @change="parseCsvToArray">
    <input type="submit">
  </div>
  
</template>

<script lang="ts">

import Papa from 'papaparse';

defineProps<{
  msg: string
}>()

// async function fileChange(event) {

//   const file = event.target.files[0];
//   Papa.parse(file, {
//     header: true,
//     dynamicTyping: true,
//     complete: (result) => {
//       console.log(JSON.stringify(result.data, null, 2));
//     }
//   })
// }

export default {
    name: 'ParseCsvToArray',
    components: {
    },
    methods: {
        parseCsvToArray
    },
    data() {
        return {
            releaseIdArray: []
        }
    }
};

async function parseCsvToArray(event) {
    const file = event.target.files[0];
    var releaseIdArray = [];
    Papa.parse(file, {
        header: true,
        download: true,
        dynamicTyping: true,
        complete: function (results) {
            results.data.push(releaseIdArray)
        }
    });
    console.log(releaseIdArray)
}

</script>

<style>
</style>