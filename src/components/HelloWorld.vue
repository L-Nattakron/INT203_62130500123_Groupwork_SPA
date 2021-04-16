<!--ส่วนบน-->
<template>
  <div class="hello ">
    <h1>{{ msg }}</h1>
    
      <div class="container grid grid-cols-3 gap-14 place-items-center my-6 mx-auto px-6">
        <a href="/" ><img src="../assets/albumV2.png" class="rounded-3xl shadow-2xl"></a>
        <a href="/" ><img src="../assets/light_stickV2.png" class="rounded-3xl shadow-2xl"></a>
        <a href="/" ><img src="../assets/concertV2.png" class="rounded-3xl shadow-2xl"></a>
      </div>

    <div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
a {
  color: #0e0e0e;
}
</style>
