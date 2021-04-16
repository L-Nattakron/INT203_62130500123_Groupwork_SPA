<template>
<div class="feedback bg-black bg-opacity-80 h-full">
  
  <div class="survey-container pt-28 grid justify-items-center">
    <form @submit.prevent="submitForm">
      
        <h2 class="text-center text-3xl font-extrabold pb-2">
          Send Feedback
        </h2>
        
        <label class="" for="name">Name: </label>

        <input 
            class="text-black pl-3"
          id="name"
          type="text"
          v-model="enteredName"
          placeholder="Enter your name"
          required
        />
      
        <h2 class="" for="feedback">Tell us what you love about the website,or what we could be doing better. </h2>
        <textarea
          class="text-black w-full"
          id="feedback"
          type="text"
          v-model="enteredFeedback"
          placeholder="Enter feedback"
          required
        />

        <h2 class="" for="ratting">Rating</h2>
        <select id="ratting" v-model="rating" required>
          <option value="5">5</option>
          <option value="4">4</option>
          <option value="3">3</option>
          <option value="2">2</option>
          <option value="1">1</option>
        </select>
        
        
      

        <button @click="buttonClick" class="btn border  rounded-xl shadow p-2 my-1" :class="w-20">
    submit
    </button>
      
    </form>
    
    
    
  </div>

  <about msg=""/>
</div>
    
</template>

<script>

export default {
  
  name: 'feedback',
  props: {
    msg: String
  },
  
  
  emits: ['btn-click'],

    data(){
        return{
            enteredName:'',
            enteredFeedback:'',
            rating:null
        }
    },
  methods: {
    buttonClick() {
      this.$emit('btn-click', {
        
      })
    }
  }
}
</script>
<style scoped>
select {
  
  appearance: none;
  color: black;
  background-color: whitesmoke;
  border: none;
  padding: 0 1em 0 0;
  margin: 0;
  width: 100%;
  font-family: inherit;
  font-size: inherit;
  cursor: inherit;
  line-height: inherit;
}

</style>
