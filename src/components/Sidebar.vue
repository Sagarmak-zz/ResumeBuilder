<template>
<div class="sidebar">

  <v-expansion-panel focusable>
    <v-expansion-panel-content>

      <div slot="header">PERSONAL INFO</div>

      <v-card>
        <v-card-text class="grey lighten-3">

          <v-layout row>
          <v-flex>
            <v-text-field label="NAME"
            v-model="resume.info.name"></v-text-field>
          </v-flex>
          </v-layout>

          <v-layout row>
          <v-flex>
            <v-text-field label="EMAIL"
            v-model="resume.info.email"></v-text-field>
          </v-flex>
          </v-layout>

          <v-layout row>
          <v-flex>
            <v-text-field label="DATE OF BIRTH"
            v-model="resume.info.dob" ></v-text-field>
          </v-flex>
          </v-layout>

          <v-layout row>
          <v-flex>
            <v-text-field label="ADDRESS"
            v-model="resume.info.address"></v-text-field>
          </v-flex>
          </v-layout>

        </v-card-text>
      </v-card>

    </v-expansion-panel-content>

    <v-expansion-panel-content>

      <div slot="header">EDUCATION</div>

      <v-card>
        <v-card-text class="grey lighten-3">

          <v-layout row>
          <v-flex>

            <v-btn round color="primary" dark @click="addDegree()">ADD
            <v-icon dark>add</v-icon></v-btn>

          </v-flex>
          </v-layout>

          <v-expansion-panel>
            <v-expansion-panel-content v-for="(degree,i) in resume.degree" :key="i">

              <div slot="header">{{ resume.degree[i].name }}</div>

                <v-card>
                  <v-card-text class="grey lighten-3">

                      <v-layout row>
                      <v-flex>
                        <v-text-field label="DEGREE NAME"
                        v-model="resume.degree[i].name"></v-text-field>
                      </v-flex>
                      </v-layout>

                      <v-layout row>
                      <v-flex>
                        <v-text-field label="INSTITUTE/UNIVERSITY"
                        v-model="resume.degree[i].institute"></v-text-field>
                      </v-flex>
                      </v-layout>

                      <v-layout row>
                      <v-flex>
                        <v-text-field label="YEAR"
                        v-model="resume.degree[i].year" ></v-text-field>
                      </v-flex>
                      </v-layout>

                      <v-layout row>
                      <v-flex>
                        <v-text-field label="CPI/AGGREGATE"
                        v-model="resume.degree[i].score"></v-text-field>
                      </v-flex>
                      </v-layout>

                      <v-btn round color="error" dark @click="removeDegree()">REMOVE</v-btn>

                </v-card-text>
              </v-card>

            </v-expansion-panel-content>
          </v-expansion-panel>

        </v-card-text>
      </v-card>

    </v-expansion-panel-content>

    <v-expansion-panel-content>

      <div slot="header">SKILLS</div>

      <v-card>
        <v-card-text class="grey lighten-3">

          <v-layout row>
          <v-flex>
            <v-text-field label="EXPERTISE AREA/AREA(S) OF INTEREST"
            v-model="resume.skill.expertise"
            ></v-text-field>
          </v-flex>
          </v-layout>

          <v-layout row>
          <v-flex>
            <v-text-field label="PROGRAMMING LANGUAGE(S)"
            v-model="resume.skill.programming_languages"
            ></v-text-field>
          </v-flex>
          </v-layout>

          <v-layout row>
          <v-flex>
            <v-text-field label="TOOLS AND TECHNOLOGIES"
            v-model="resume.skill.tools"
            ></v-text-field>
          </v-flex>
          </v-layout>

          <v-layout row>
          <v-flex>
            <v-text-field label="TECHNICAL ELECTIVES"
           v-model="resume.skill.technical_electives"
            ></v-text-field>
          </v-flex>
          </v-layout>

        </v-card-text>
      </v-card>

    </v-expansion-panel-content>

    <v-expansion-panel-content>

      <div slot="header">PROFESSIONAL EXPERIANCE</div>

      <v-card>
        <v-card-text class="grey lighten-3">

          <v-layout row>
          <v-flex>

            <v-btn round color="primary" dark @click="addInternship()">ADD
            <v-icon dark>add</v-icon></v-btn>

          </v-flex>
          </v-layout>

          <v-expansion-panel>
            <v-expansion-panel-content v-for="(internship,i) in resume.internship" :key="i">

              <div slot="header">{{ resume.internship[i].name }}</div>

                <v-card>
                  <v-card-text class="grey lighten-3">

                      <v-layout row>
                      <v-flex>
                        <v-text-field label="PROJECT NAME" v-model="resume.internship[i].name"></v-text-field>
                      </v-flex>
                      </v-layout>

                      <v-layout row>
                      <v-flex>
                        <v-text-field label="DESCRIPTION" v-model="resume.internship[i].description"></v-text-field>
                      </v-flex>
                      </v-layout>

                      <v-layout row>
                      <v-flex>
                        <v-text-field label="GUIDE/SUPERVISOR" v-model="resume.internship[i].guide" ></v-text-field>
                      </v-flex>
                      </v-layout>

                      <v-layout row>
                      <v-flex>
                        <v-text-field label="START DATE" v-model="resume.internship[i].start"></v-text-field>
                      </v-flex>
                      </v-layout>

                      <v-layout row>
                      <v-flex>
                        <v-text-field label="END DATE" v-model="resume.internship[i].end"></v-text-field>
                      </v-flex>
                      </v-layout>

                      <v-layout row>
                      <v-flex>
                        <v-text-field label="TEAM SIZE" v-model="resume.internship[i].team_size"></v-text-field>
                      </v-flex>
                      </v-layout>

                      <v-btn round color="error" dark @click="removeInternship()">REMOVE</v-btn>

                </v-card-text>
              </v-card>

            </v-expansion-panel-content>
          </v-expansion-panel>

        </v-card-text>
      </v-card>

    </v-expansion-panel-content>

    <v-expansion-panel-content>

    <div slot="header">PROJECTS</div>

      <v-card>
        <v-card-text class="grey lighten-3">

          <v-layout row>
          <v-flex>

            <v-btn round color="primary" dark @click="addProject()">ADD
            <v-icon dark>add</v-icon></v-btn>

          </v-flex>
          </v-layout>

          <v-expansion-panel>
            <v-expansion-panel-content v-for="(project,i) in resume.project" :key="i">

              <div slot="header">{{ resume.project[i].name }}</div>

                <v-card>
                  <v-card-text class="grey lighten-3">

                      <v-layout row>
                      <v-flex>
                        <v-text-field label="PROJECT NAME" v-model="resume.project[i].name"></v-text-field>
                      </v-flex>
                      </v-layout>

                      <v-layout row>
                      <v-flex>
                        <v-text-field label="DESCRIPTION" v-model="resume.project[i].description"></v-text-field>
                      </v-flex>
                      </v-layout>

                      <v-layout row>
                      <v-flex>
                        <v-text-field label="GUIDE/SUPERVISOR" v-model="resume.project[i].guide" ></v-text-field>
                      </v-flex>
                      </v-layout>

                      <v-layout row>
                      <v-flex>
                        <v-text-field label="START DATE" v-model="resume.project[i].start"></v-text-field>
                      </v-flex>
                      </v-layout>

                      <v-layout row>
                      <v-flex>
                        <v-text-field label="END DATE" v-model="resume.project[i].end"></v-text-field>
                      </v-flex>
                      </v-layout>

                      <v-layout row>
                      <v-flex>
                        <v-text-field label="TEAM SIZE" v-model="resume.project[i].team_size"></v-text-field>
                      </v-flex>
                      </v-layout>

                      <v-btn round color="error" dark @click="removeProject()">REMOVE</v-btn>

                </v-card-text>
              </v-card>

            </v-expansion-panel-content>
          </v-expansion-panel>

        </v-card-text>
      </v-card>

    </v-expansion-panel-content>

    <v-expansion-panel-content>

      <div slot="header">POSITION OF RESPONSIBILITY</div>

      <v-card>
        <v-card-text class="grey lighten-3">

          <v-layout row>
          <v-flex>

            <v-btn round color="primary" dark @click="addPosition()">ADD
            <v-icon dark>add</v-icon></v-btn>

          </v-flex>
          </v-layout>

          <v-layout row v-for="(position,i) in resume.position" :key="i">

          <v-flex xs10>
            <v-text-field label="NAME" v-model="resume.position[i].name">
            </v-text-field>
          </v-flex>

          <v-flex xs2>
            <v-btn fab dark small color="error" @click="removePosition(i)">
            <v-icon dark>remove</v-icon></v-btn>
          </v-flex>

          </v-layout>

        </v-card-text>
      </v-card>

    </v-expansion-panel-content>

    <v-expansion-panel-content>

      <div slot="header">AWARDS AND ACHIEVEMENTS</div>

      <v-card>
        <v-card-text class="grey lighten-3">

          <v-layout row>
          <v-flex>

            <v-btn round color="primary" dark @click="addAward()">ADD
            <v-icon dark>add</v-icon></v-btn>

          </v-flex>
          </v-layout>

          <v-layout row v-for="(award,i) in resume.award" :key="i">

          <v-flex xs10>
            <v-text-field label="NAME" v-model="resume.award[i].name">
            </v-text-field>
          </v-flex>

          <v-flex xs2>
            <v-btn fab dark small color="error" @click="removeAward(i)">
            <v-icon dark>remove</v-icon></v-btn>
          </v-flex>

          </v-layout>

        </v-card-text>
      </v-card>

    </v-expansion-panel-content>

    <v-expansion-panel-content>

      <div slot="header">INTERESTS AND HOBBIES</div>

      <v-card>
        <v-card-text class="grey lighten-3">

          <v-layout row>
          <v-flex>

            <v-btn round color="primary" dark @click="addHobby()">ADD
            <v-icon dark>add</v-icon></v-btn>

          </v-flex>
          </v-layout>

          <v-layout row v-for="(hobby,i) in resume.hobby" :key="i">

            <v-flex xs10>
              <v-text-field label="NAME" v-model="resume.hobby[i].name">
              </v-text-field>
            </v-flex>

            <v-flex xs2>
              <v-btn fab dark small color="error" @click="removeHobby(i)">
              <v-icon dark>remove</v-icon></v-btn>
            </v-flex>

          </v-layout>

        </v-card-text>
      </v-card>

    </v-expansion-panel-content>
  </v-expansion-panel>

</div>
</template>


<script>
export default {
  name: 'sidebar',

  props: ['resume'],

  methods: {
    addHobby: function(){
      this.resume.hobby.push({})
    },

    removeHobby: function(i){
      this.resume.hobby.splice(i,1);
    },

    addAward: function(){
      this.resume.award.push({});
    },

    removeAward: function(i){
      this.resume.award.splice(i,1);
    },

    addPosition: function(){
      this.resume.position.push({});
    },

    removePosition: function(i){
      this.resume.position.splice(i,1);
    },

    addProject: function(){
      this.resume.project.push({});
    },

    removeProject: function(i){
      this.resume.project.splice(i,1);
    },

    addInternship: function(){
      this.resume.internship.push({});
    },

    removeInternship: function(i){
      this.resume.internship.splice(i,1);
    },

    addDegree: function(){
      this.resume.degree.push({});
    },

    removeDegree: function(i){
      this.resume.degree.splice(i,1);
    }

  }

}
</script>

