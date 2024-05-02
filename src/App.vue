<script setup>
  import SideBar from './components/Sidebar/SideBar.vue';
  import Header from './components/Header/Header.vue';
  import Overview from './components/Overview/Overview.vue';
</script>

<template>
    <header id="header" class="navbar navbar-expand-lg navbar-fixed navbar-height navbar-flush navbar-container navbar-bordered">
      <Header />
    </header>
    <SideBar />
    <main id="content" role="main" class="main">
    <Overview />
  </main>
</template>


