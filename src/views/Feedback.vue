<template>
<div class="feedback bg-black bg-opacity-80 h-full">
  
  <div class="survey-container pt-28 ">
    <div class="grid justify-items-center">

    <form @submit.prevent="addFeedback">
      
        <h2 class="text-center text-3xl font-extrabold pb-5">
          Send Feedback
        </h2>

        <div class="pb-2">
            <label class="" for="name">Name: </label>
            <input 
                class="text-black rounded-lg text-sm w-auto focus:outline-none py-0.5 pl-3 "
                id="name"
                type="text"
                v-model="enteredName"
                placeholder="Enter your name"
                required
            />
        </div>
        
        <div class="pb-2">
            <h2 class="pb-1" for="feedback">
                Tell us what you love about the website,or what we could be doing better. 
            </h2>
            <textarea
                class="focus:outline-none text-black text-sm pl-3 pt-1 rounded-lg w-full"
                id="feedback"
                type="text"
                v-model="enteredFeedback"
                placeholder="Enter feedback"
                required
            />
        </div>

        <div>
            <h2 class="pb-1" for="ratting">Rating</h2>
            <select id="ratting" v-model="rating" required class="rounded-lg w-full">
                <option value="5">5</option>
                <option value="4">4</option>
                <option value="3">3</option>
                <option value="2">2</option>
                <option value="1">1</option>
            </select>
        </div>

        <div class="pt-2 pl-5 mx-48">
            <button class="focus:outline-none btn text-sm bg-red-900 text-white  rounded-2xl shadow px-3 py-2 my-1" >
                submit
            </button>
        </div>
      
    </form>
    </div>

    <div class="container grid grid-cols-4 gap-10 place-items-center my-6 mx-auto px-4 pt-10"> 
        <div class="list" v-for="result in feedbackResults" :key="result.id">
            <section class="bg-gray-50 rounded-2xl p-5">
            <div class="text-gray-900">
                <h2 class="text-center pb-2 text-red-900 text-lg font-extrabold">Feedback</h2>
                <h3 class=""></h3>
                <p class="pb-2">
                    <span class="font-semibold text-red-800"> 
                        Name:</span> {{result.name}}<br>
                    <span class="font-semibold text-red-800">
                        Feedback: </span>{{result.feedback}}<br>
                    <span class="font-semibold text-red-800">
                        Rating: </span>{{result.rating}}
                </p>
                <button class="focus:outline-none font-semibold text-red-900 hover:text-white hover:bg-red-900 border-2 border-red-900 rounded-full w-20 h-7 mr-10" @click="deleteFeedback(result.id)">delete</button>
                <button class="focus:outline-none font-semibold text-red-900 hover:text-white hover:bg-red-900 border-2 border-red-900 rounded-full w-20 h-7 " @click="editSurvey">edit</button>
            </div>
        

<!--
    <form @submit="editSubmit(result)" v-if="isEdit">
      
        <h2 class="text-center text-3xl font-extrabold pb-2">
          Send Feedback
        </h2>
        
        <label class="" for="name">Name: </label>

        <input 
            class="text-black pl-3"
          id="name"
          type="text"
          v-model="oldName"
          placeholder="Enter your name"
          required
        />
      
        <h2 class="" for="feedback">Tell us what you love about the website,or what we could be doing better. </h2>
        <textarea
          class="text-black w-full"
          id="feedback"
          type="text"
          v-model="oldFeedback"
          placeholder="Enter feedback"
          required
        />

        <h2 class="" for="ratting">Rating</h2>
        <select id="ratting" v-model="oldrating" required>
          <option value="5">5</option>
          <option value="4">4</option>
          <option value="3">3</option>
          <option value="2">2</option>
          <option value="1">1</option>
        </select>
        
        <button class="btn border  rounded-xl shadow p-2 my-1" :class="w-20">
    submit
    </button>
      
    </form>-->

    </section>
    </div>
    </div>
        
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
            rating:null,
            url:"http://localhost:3000/surveyResults",
            feedbackResults:[],
           /*  isEdit:false,
            oldName:'',
            oldFeedback:'',
            oldrating:''*/
        }
    },
  methods: {
          async addFeedback(){
        const newFeedback = {
            name: this.enteredName,
            feedback: this.enteredFeedback,
            rating: this.rating
        
        }
        const res = await fetch(this.url,{
          method: 'POST',
          headers:{
            'Content-type': 'application/json'
          },
          body: JSON.stringify({
            name: newFeedback.name,
            feedback: newFeedback.feedback,
            rating: newFeedback.rating
          })
        })
        const data = await res.json()
        this.feedbackResults = [...this.feedbackResults,data]
        this.enteredName = ''
        this.enteredFeedback =''
        this.rating =''
      },
      async fetchFeedbackResult() {
      const res = await fetch(this.url);
      const data = await res.json();
      return data;
    },
    async deleteFeedback(id) {
      if (confirm(`Are you sure to delete ?`)) {
        const res = await fetch(`${this.url}/${id}`, {
          method: "DELETE",
        });
        res.status === 200
          ? (this.feedbackResults = this.feedbackResults.filter(
              (feedback) => feedback.id !== id
            ))
          : alert("Error to delete feedback");
      }
    },
   /* editSurvey() {
      this.isEdit = true
    },
    async editSubmit(editingData) {
      const res = await fetch(`${this.url}/${editingData.id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          name: this.oldName,
          feedback: this.oldFeedback,
          rating: this.oldrating
          
        })
      })
      const data = await res.json()
      this.feedbackResults = this.feedbackResults.map((survey) =>
        survey.id === data.id
          ? {
              ...survey,
              name: data.name,
              feedback: data.feedback,
              rating: data.rating
            }
          : survey
      )
      this.isEdit = false,this.oldName='',this.oldFeedback='',this.oldrating=null

    }*/
  },
   async created() {
    this.feedbackResults = await this.fetchFeedbackResult();
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
