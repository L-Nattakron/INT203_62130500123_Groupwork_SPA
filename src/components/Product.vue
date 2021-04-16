<template>
  <div>
    <h1>{{ msg }}</h1>
    
      <div class="container grid grid-cols-4 gap-10 place-items-center my-6 mx-auto px-4 pt-10">
          <div class="transform scale-95 overflow-hidden hover:scale-100  motion-reduce:transform-none">
            <a href="/" ><img src="../assets/album1.jpg" >
              <div class="text-center mt-2">BORDER : DAY ONE</div>
            </a>
              <div class="text-center mt-2">₩17,900</div>
              <div class="text-center ">
                  <button class="bg-red-800 rounded-full mt-2 h-9 w-32 focus:outline-none" type="button" onclick="">
                    <span class="fas fa-shopping-cart"></span>
                            Buy Now                                                         
                  </button>
              </div>
          </div>
          
          <div class="transform scale-95 overflow-hidden hover:scale-100  motion-reduce:transform-none">
            <a href="/" ><img src="../assets/album2.jpg" >
              <div class="text-center mt-2">BE (Essential Edition)</div>
            </a>
              <div class="text-center mt-2">₩19,300</div>
              <div class="text-center ">
                  <button class="bg-red-800 rounded-full mt-2 h-9 w-32 focus:outline-none" type="button" onclick="">
                    <span class="fas fa-shopping-cart"></span>
                            Buy Now                                                         
                  </button>
              </div>
          </div>

          <div class="transform scale-95 overflow-hidden hover:scale-100  motion-reduce:transform-none">
            <a href="/" ><img src="../assets/album3.jpg" >
              <div class="text-center mt-2">minisode1 : Blue Hour</div>
            </a>
              <div class="text-center mt-2">₩16,400</div>
              <div class="text-center ">
                  <button class="bg-red-800 rounded-full mt-2 h-9 w-32 focus:outline-none" type="button" onclick="">
                    <span class="fas fa-shopping-cart"></span>
                            Buy Now                                                         
                  </button>
              </div>
          </div>

          <div class="transform scale-95 overflow-hidden hover:scale-100  motion-reduce:transform-none">
            <a href="/" ><img src="../assets/album4.jpg" >
              <div class="text-center mt-2">SPECIAL HISTORY BOOK</div>
            </a>
              <div class="text-center mt-2">₩17,500</div>
              <div class="text-center ">
                  <button class="bg-red-800 rounded-full mt-2 h-9 w-32 focus:outline-none" type="button" onclick="">
                    <span class="fas fa-shopping-cart"></span>
                            Buy Now                                                         
                  </button>
              </div>
          </div>
      </div>

    <div>
      
    </div>

  </div>
</template>

<script>
export default {
  name: 'Product',
  props: {
    msg: String
  }
}
</script>
