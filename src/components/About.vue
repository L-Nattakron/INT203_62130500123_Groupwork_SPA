<template>
  <div class="hello ">
    <h1>{{ msg }}</h1>
    
      <div class="mt-16 pb-10 mx-10">
          <img src="../assets/bannerWebV2.png" class="rounded-2xl">
      </div>

    <div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'About',
  props: {
    msg: String
  }
}
</script>