<template>
<div>
      <navbar></navbar>

      <v-container fluid>
      <v-layout>

      <v-flex xs4>
        <v-card>
          <sidebar :resume="resume"></sidebar>
        </v-card>
      </v-flex>

      <v-flex xs8>
        <v-card>
          <resume-template :resume="resume"></resume-template>
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
        resume: {

          info: {
            name: 'Dummy',
            email: 'Dummy@gmail.com',
            dob: '01/01/1995',
            address: '123/1, Gandhinagar'
          },

          degree: [
            {
              name: '',
              institute: '',
              year: '',
              score: ''
            }
          ],

          skill: [
            {
              expertise: '',
              programming_languages: '',
              tools: '',
              technical_electives: ''
            }
          ],

          internship: [
            {
              name: '',
              description: '',
              start: '',
              end: '',
              team_size: '',
              guide: ''
            }
          ],

          project: [
            {
              name: '',
              description: '',
              start: '',
              end: '',
              team_size: '',
              guide: ''
            }
          ],

          position: [
            {
              name: ''
            }
          ],

          award: [
            {
              name: ''
            }
          ],

          hobby: [
            {
              name: ''
            }
          ]

        },
      }
  },

  created() {
    
  },

  components: {
    Navbar,
    Sidebar,
    ResumeTemplate
  },
  
}

</script>
