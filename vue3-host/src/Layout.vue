<template>
  <div class="layout-app">
    <!-- host app HOST-->
    <div class="app-label"># Hosting App [HOST]</div>
    <img src="./logo.png" width="30" />
    <h1>Layout App 1</h1>
    <div class="remote-component">
      <!-- remote-component REMOTE -->
      <div class="app-label">#remote-component [REMOTE]</div>
      <reserved-seat-map
        event-identifier="11efc20862006f4180f100155dab0b0d"
        order-intention="de28aec6-fbb3-4265-80f0-88c0420990a5"
        @seat-select-changed="seatSelectChanged"
        @loaded="seatMapLoaded"
        @error="seatMapError"
       />
    </div>
  </div>
</template>

<script lang="js">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IndexPage',

  setup() {
    const seatSelectChanged = (infos) => {
      console.log('seatSelectChanged', infos);
    };
    const seatMapLoaded = (infos) => {
      console.log('seatMapLoaded', infos);
    };
    const seatMapError = (error) => {
      console.log('seatMapError', error);
    };
    return {
      seatSelectChanged,
      seatMapLoaded,
      seatMapError,
    };
  },
});
</script>

<style scoped>
img {
  width: 200px;
}
h1 {
  font-family: Arial, Helvetica, sans-serif;
}
.remote-component {
  border: 1px solid blue;
  padding: 10px;
}
.layout-app {
  border: 1px solid green;
  padding: 10px;
}
.app-label {
  padding: 5px 2px;
  font-style: italic;
  font-size: 20px;
  color: gray;
}
</style>
