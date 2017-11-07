<template>
  <div class="nav">
    <v-toolbar>
    <v-toolbar-title>Title</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat @click="saveData()">SAVE</v-btn>
      <v-btn flat>DOWNLOAD</v-btn>
    </v-toolbar-items>
  </v-toolbar>
  </div>
</template>

<script>
export default {
  
  data(){
    return{

    }
  },

  methods: {
    saveData: function(){
      axios.post('http://localhost:3000/resume',{
        "details": {
            "name": "json",
            "email": "json@gmail",
            "dob": "1/1/2222",
            "address": "123/1"
        }
}).then(function(response){
        console.log(response);
      })
      .catch(function(error){
        console.log(error);
      });
    }

  }

};

</script>


