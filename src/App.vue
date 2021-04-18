<template>
  <main>
    <px-header :links="links" />
    <!-- Nos permite establecer el codigo que se remplaza a medida de que el router lo necesita -->
    <router-view
      class="container px-4 sm:px-20 md:px-4 py-20 flex justify-center"
    />
  </main>
</template>

<script>
import PxHeader from "@/components/PxHeader";

export default {
  name: "App",
  components: { PxHeader },

  data() {
    return {
      links: [
        {
          title: "BTC",
          to: { name: "coin-detail", params: { id: "bitcoin" } },
        },
        {
          title: "ETH",
          to: { name: "coin-detail", params: { id: "ethereum" } },
        },
        {
          title: "XRP",
          to: { name: "coin-detail", params: { id: "xrp" } },
        },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
