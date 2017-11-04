<template>
<div class="sidebar">

  <v-expansion-panel focusable>
    <v-expansion-panel-content>
      
      <div slot="header">PERSONAL INFO</div>
      
      <v-card>
        <v-card-text class="grey lighten-3">
          
          <v-layout row>
          <v-flex>
            <v-text-field label="NAME" v-model="newResume.info.name"></v-text-field>
          </v-flex>
          </v-layout>
          
          <v-layout row>          
          <v-flex>
            <v-text-field label="EMAIL" v-model="newResume.info.email"></v-text-field>
          </v-flex>
          </v-layout>

          <v-layout row>          
          <v-flex>
            <v-text-field label="DATE OF BIRTH" v-model="newResume.info.dob" ></v-text-field>
          </v-flex>
          </v-layout>

          <v-layout row>          
          <v-flex>
            <v-text-field label="ADDRESS" v-model="newResume.info.address"></v-text-field>
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
            <v-expansion-panel-content v-for="(degree,i) in newResume.degree" :key="i">

              <div slot="header">{{ newResume.degree[i].name }}</div>
                
                <v-card>
                  <v-card-text class="grey lighten-3">
          
                      <v-layout row>
                      <v-flex>
                        <v-text-field label="DEGREE NAME" v-model="newResume.degree[i].name"></v-text-field>
                      </v-flex>
                      </v-layout>
                      
                      <v-layout row>          
                      <v-flex>
                        <v-text-field label="INSTITUTE/UNIVERSITY" v-model="newResume.degree[i].institute"></v-text-field>
                      </v-flex>
                      </v-layout>

                      <v-layout row>          
                      <v-flex>
                        <v-text-field label="YEAR" v-model="newResume.degree[i].year" ></v-text-field>
                      </v-flex>
                      </v-layout>

                      <v-layout row>          
                      <v-flex>
                        <v-text-field label="CPI/AGGREGATE" v-model="newResume.degree[i].score"></v-text-field>
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
            v-model="newResume.skill.expertise"
            ></v-text-field>
          </v-flex>
          </v-layout>
          
          <v-layout row>          
          <v-flex>
            <v-text-field label="PROGRAMMING LANGUAGE(S)"
            v-model="newResume.skill.programming_languages"
            ></v-text-field>
          </v-flex>
          </v-layout>

          <v-layout row>          
          <v-flex>
            <v-text-field label="TOOLS AND TECHNOLOGIES"
            v-model="newResume.skill.tools"            
            ></v-text-field>
          </v-flex>
          </v-layout>

          <v-layout row>          
          <v-flex>
            <v-text-field label="TECHNICAL ELECTIVES"
           v-model="newResume.skill.technical_electives"
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
            <v-expansion-panel-content v-for="(internship,i) in newResume.internship" :key="i">

              <div slot="header">{{ newResume.internship[i].name }}</div>
                
                <v-card>
                  <v-card-text class="grey lighten-3">
          
                      <v-layout row>
                      <v-flex>
                        <v-text-field label="PROJECT NAME" v-model="newResume.internship[i].name"></v-text-field>
                      </v-flex>
                      </v-layout>
                      
                      <v-layout row>          
                      <v-flex>
                        <v-text-field label="DESCRIPTION" v-model="newResume.internship[i].description"></v-text-field>
                      </v-flex>
                      </v-layout>

                      <v-layout row>          
                      <v-flex>
                        <v-text-field label="GUIDE/SUPERVISOR" v-model="newResume.internship[i].guide" ></v-text-field>
                      </v-flex>
                      </v-layout>

                      <v-layout row>          
                      <v-flex>
                        <v-text-field label="START DATE" v-model="newResume.internship[i].start"></v-text-field>
                      </v-flex>
                      </v-layout>

                      <v-layout row>          
                      <v-flex>
                        <v-text-field label="END DATE" v-model="newResume.internship[i].end"></v-text-field>
                      </v-flex>
                      </v-layout>

                      <v-layout row>          
                      <v-flex>
                        <v-text-field label="TEAM SIZE" v-model="newResume.internship[i].team_size"></v-text-field>
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
            <v-expansion-panel-content v-for="(project,i) in newResume.project" :key="i">

              <div slot="header">{{ newResume.project[i].name }}</div>
                
                <v-card>
                  <v-card-text class="grey lighten-3">
          
                      <v-layout row>
                      <v-flex>
                        <v-text-field label="PROJECT NAME" v-model="newResume.project[i].name"></v-text-field>
                      </v-flex>
                      </v-layout>
                      
                      <v-layout row>          
                      <v-flex>
                        <v-text-field label="DESCRIPTION" v-model="newResume.project[i].description"></v-text-field>
                      </v-flex>
                      </v-layout>

                      <v-layout row>          
                      <v-flex>
                        <v-text-field label="GUIDE/SUPERVISOR" v-model="newResume.project[i].guide" ></v-text-field>
                      </v-flex>
                      </v-layout>

                      <v-layout row>          
                      <v-flex>
                        <v-text-field label="START DATE" v-model="newResume.project[i].start"></v-text-field>
                      </v-flex>
                      </v-layout>

                      <v-layout row>          
                      <v-flex>
                        <v-text-field label="END DATE" v-model="newResume.project[i].end"></v-text-field>
                      </v-flex>
                      </v-layout>

                      <v-layout row>          
                      <v-flex>
                        <v-text-field label="TEAM SIZE" v-model="newResume.project[i].team_size"></v-text-field>
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

          <v-layout row v-for="(position,i) in newResume.position" :key="i">
          
          <v-flex xs10>
            <v-text-field label="NAME" v-model="newResume.position[i].name">
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

          <v-layout row v-for="(award,i) in newResume.award" :key="i">
          
          <v-flex xs10>
            <v-text-field label="NAME" v-model="newResume.award[i].name">
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

          <v-layout row v-for="(hobby,i) in newResume.hobby" :key="i">
          
          <v-flex xs10>
            <v-text-field label="NAME" v-model="newResume.hobby[i].name">
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

  data() {
    return{
      newResume: {},
    }
  },

  created() {
    this.newResume = this.resume;
  },

  methods: {
    addHobby: function(){
      this.newResume.hobby.push({})
    },
    
    removeHobby: function(i){
      this.newResume.hobby.splice(i,1);
    },
    
    addAward: function(){
      this.newResume.award.push({});
    },
    
    removeAward: function(i){
      this.newResume.award.splice(i,1);
    },

    addPosition: function(){
      this.newResume.position.push({});
    },
    
    removePosition: function(i){
      this.newResume.position.splice(i,1);
    },

    addProject: function(){
      this.newResume.project.push({});
    },
    
    removeProject: function(i){
      this.newResume.project.splice(i,1);
    },

    addInternship: function(){
      this.newResume.internship.push({});
    },
    
    removeInternship: function(i){
      this.newResume.internship.splice(i,1);
    },

    addDegree: function(){
      this.newResume.degree.push({});
    },
    
    removeDegree: function(i){
      this.newResume.degree.splice(i,1);
    }
    
    
  }
  
}
</script>
