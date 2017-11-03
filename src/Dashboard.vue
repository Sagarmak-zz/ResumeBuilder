<template>
<div>
      <navbar></navbar>
      <v-container fluid>
      <v-layout>

      <v-flex xs4 class="ma-1">
        <v-card>
          <sidebar :name.sync="name"></sidebar>
        </v-card>
      </v-flex>

      <v-flex xs8 class="ma-1">
        <v-card>
          <resume-template :name="name"></resume-template>
        </v-card>
      </v-flex>
      

    </v-layout>    
  </v-container>
</div>
</template>

<script>

import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import ResumeTemplate from './components/ResumeTemplate'

export default {
  data(){
      return{
          name: 'Dummy',
      }
  },

  components: {
    Navbar,
    Sidebar,
    ResumeTemplate
  },
  
}

</script>
