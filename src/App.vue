<!--หน้าเชื่อมrouter-->
<template>
 <div id="nav" class="fixed z-50 bg-black bg-opacity-90 w-full flex items-stretch pl-16 pt-4 pb-2 ">
    <a href="/" class=" flex-shrink text-5xl font-black mr-96 pr-60"> K<span class="text-3xl text-white">store</span></a>
    <div class="text-right self-center text-2xl ml-60">
      <router-link to="/">Home</router-link> |
      <router-link to="/new">New Album</router-link> |
      <router-link to="/feedback">Feedback</router-link>
    </div>
  </div>
  <router-view/>
 
  

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #ffffff;
}



#nav a {
  font-weight: bold;
  color: #ff0000;
}

#nav a.router-link-exact-active {
  color:#ffffff ;
}
</style>
