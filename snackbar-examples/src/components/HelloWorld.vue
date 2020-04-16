<template>
  <div>
    <header class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <span
          class="font-semibold text-xl tracking-tight"
        >Custom SnackBar Notifications inspired by Material Design</span>
      </div>
    </header>

    <div class="flex justify-between bg-gray-200">
      <div class="text-gray-700 text-center px-4 py-2 m-2">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          v-on:click="showSnackBar"
          data-pos="top-left"
        >Top Left</button>
      </div>
      <div class="text-gray-700 text-center px-4 py-2 m-2">2</div>
      <div class="text-gray-700 text-center px-4 py-2 m-2">3</div>
    </div>
  </div>
</template>

<script>
import { show } from "../snackbar";
import "../snackbar.css";

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  methods: {
    handleSnackbarClick() {
      show({ pos: "top-center", text: "You triggered a full Snackbar click!" });
    },
    handleTimeout() {
      show({ pos: "top-center", text: "The snackbar has timed out!" });
    },
    showSnackBar(e) {
      const {
        currentTarget: { dataset }
      } = e;
      show({
        pos: dataset.pos,
        actionType: dataset.actionType,
        actionText: dataset.actionText,
        text: dataset.text || "A message!",
        pauseOnHover: dataset.pauseOnHover,
        backgroundColor: dataset.backgroundColor,
        notifyIcon: dataset.notifyIcon,
        onSnackbarClick: dataset.onClick ? this.handleSnackbarClick : null,
        onTimeout: dataset.onTimeout ? this.handleTimeout : null
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
