

<template>
  <header id="header" class="navbar navbar-expand-lg navbar-fixed navbar-height navbar-flush navbar-container navbar-bordered">
    <Header />
  </header>
  <SideBar />
  <main id="content" role="main" class="main">
  <Overview />
</main>
</template>

<script>
import SideBar from "@../../components/Sidebar/Sidebar.vue";


export default {
  name: "Home",
  components: {
    SideBar,
  },
};
</script>