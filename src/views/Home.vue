<!--หน้าโฮม-->
<template>
  <div class="home bg-black bg-opacity-80 h-full">
    <img src="../assets/banner.jpg" class="object-cover w-full">
      
    <Category msg=""/>
    <Product msg=""/>
    <about msg=""/>
  </div>
</template>

<script>
// @ is an alias to /src
import Category from '@/components/Category.vue'
import Product from '@/components/Product.vue'


export default {
  name: 'Home',
  components: {
    Category,
    Product
  }
}
</script>
