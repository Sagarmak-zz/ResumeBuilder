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
          <resume-template1 :resume="resume"></resume-template1>
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
  data() {
      return {
        resume: {

          info: {
            name: 'Local Dummy',
            email: 'dummy@email.com',
            dob: '1/1/1995',
            address: '123/1, Gandhinagar'
          },

          degree: [
            {
              name: 'MSc IT',
              institute: 'DAIICT',
              year: '2018',
              score: '8.0'
            }
          ],

          skill: {
              expertise: 'Web Developement',
              programming_languages: 'Javascript',
              tools: 'Postman',
              technical_electives: 'Cloud'
          },

          internship: [
            {
              name: 'Road Inspector',
              description: 'Cross platform application',
              start: '1/7/2017',
              end: '1/9/2017',
              team_size: '5',
              guide: 'Lavguru'
            }
          ],

          project: [
            {
              name: 'Road Inspector',
              description: 'Cross platform application',
              start: '1/7/2017',
              end: '1/9/2017',
              team_size: '5',
              guide: 'Lavguru'
            }
          ],

          position: [
            {
              name: 'Proect Leader'
            }
          ],

          award: [
            {
              name: 'Nope'
            }
          ],

          hobby: [
            {
              name: 'TV Series'
            }
          ]
        },

        //resume: {}
      };
  },

  // created() {
  //   axios.get('http://localhost:3000/db')
  //   .then( (response) => {
  //     this.resume = response.data.resume;
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   })
  // },

  components: {
    Navbar,
    Sidebar,
    ResumeTemplate,
  },

}

</script>
