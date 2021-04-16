<!--หน้าโฮม-->
<template>
  <div class="home bg-black bg-opacity-80 h-full">
    <img src="../assets/banner.jpg" class="object-cover w-full">
      
    <HelloWorld msg=""/>
    <Product msg=""/>
    <About msg=""/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Product from '@/components/Product.vue'
import About from '@/components/About.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Product,
    About
  }
}
</script>
