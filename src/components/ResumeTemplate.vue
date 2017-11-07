<template lang="html">
    <div class="resume-render-wrapper">
        <div class="resume-template">
            
            <table class="main">
                <tr>
                    <td class="w-20">
                        <!-- <img src="../assets/daiict-logo.jpg"> -->
                    </td>

                    <td class="intro w-80">
                        <h1>{{ resume.info.name }}</h1>
                        <p>
                            <b>Dhirubhai Ambani Institute of Information and Communication Technology</b>
                        </p>
                        <p>
                            <span class="w-60 inline-block">
                                <b>Email:</b> {{ resume.info.email }}
                            </span>
                            <span class="w-40 text-right">
                                <b>DOB:</b> {{ resume.info.dob }}
                            </span>
                        </p>
                        <p>
                            <b>Address:</b> {{ resume.info.address }}
                        </p>
                    </td>

                </tr>

            </table>

            <table class="w-100 section" v-if="true">
                <tr>
                    <td colspan="4" class="section-header">
                        <h3>EDUCATION</h3>
                    </td>
                </tr>
                <tr>
                    <th colspan="1">Degree</th>
                    <th colspan="1">University/Institute</th>
                    <th colspan="1">Year</th>
                    <th colspan="1">CPI/Aggregate</th>
                </tr>

                <tr v-for="item in resume.degree">
                    <td>
                        <b>{{ item.name }}</b>
                    </td>
                    <td>
                        {{ item.institute }}
                    </td>
                    <td>
                        {{ item.year }}
                    </td>
                    <td>
                        {{ item.score }}
                    </td>
                </tr>
            </table>

            <table class="w-100 section">
                <tr>
                    <td colspan="2" class="section-header">
                        <h3>SKILLS</h3>
                    </td>
                </tr>
                <tr v-if="true">
                    <td class="w-30">
                        <b>Expertise Area/Area(s) of
                            Interest</b>
                    </td>
                    <td class="w-70">
                        {{ resume.skill.expertise }}
                    </td>
                </tr>
                <tr v-if="true">
                    <td class="w-30">
                        <b>Programming Language(s)</b>
                    </td>
                    <td class="w-70">
                        {{ resume.skill.programming_languages }}
                    </td>
                </tr>
                <tr v-if="true">
                    <td class="w-30">
                        <b>Tools and
                            Technologies</b>
                    </td>
                    <td class="w-70">
                        {{ resume.skill.tools }}
                    </td>
                </tr>
                <tr v-if="true">
                    <td class="w-30">
                        <b>Technical Electives</b>
                    </td>
                    <td class="w-70">
                        {{ resume.skill.technical_electives }}
                    </td>
                </tr>
            </table>
            <div class="page-break"></div>
            
            <table class="w-100 section" v-if="true">
                <tr>
                    <td colspan="3" class="section-header">
                        <h3>PROFESSIONAL EXPERIENCE/INTERNSHIPS</h3>
                    </td>
                </tr>

                <tr v-for="item in resume.internship">
                    <td class="w-80" valign="top">
                        <p>
                            <b>{{ item.name }}</b>
                        </p>
                        <p>
                            {{ item.description }}
                            <p v-if="true">
                                <i>Guide: {{ item.guide }}</i>
                            </p>
                        </p>
                    </td>
                    <td class="w-20" valign="top">
                        <p>({{ item.start }} - {{ item.end }})</p>
                        <p v-show="true">Team Size - {{ item.team_size }}</p>
                    </td>
                </tr>
            </table>
            
            <table class="w-100 section" v-if="true">
                <tr>
                    <td colspan="2" class="section-header">
                        <h3>PROJECTS</h3>
                    </td>
                </tr>

                <tr v-for="item in resume.project">
                    <td class="w-80" valign="top">
                        <p>
                            <b>{{ item.name }}</b>
                        </p>
                        <p>
                            {{ item.description }}
                            <p v-if="true">
                                <i>Guide: {{ item.guide }}</i>
                            </p>
                        </p>
                    </td>
                    <td class="w-20" valign="top">
                        <p>({{ item.start }} - {{ item.end }})</p>
                        <p v-show="true">Team Size - {{ item.team_size }}</p>
                    </td>
                </tr>
            </table>

            <table class="w-100 section" v-if="true">
                <tr>
                    <td colspan="2" class="section-header">
                        <h3>POSITION OF RESPONSIBILITY</h3>
                    </td>
                </tr>
                <tr>
                    <td valign="top">
                        <ul class="list">
                            <li v-for="item in resume.position">
                                {{ item.name }}
                            </li>
                        </ul>
                    </td>
                </tr>
            </table>

            <table class="w-100 section" v-if="true">
                <tr>
                    <td colspan="2" class="section-header">
                        <h3>AWARDS AND ACHIEVEMENTS</h3>
                    </td>
                </tr>
                <tr>
                    <td valign="top">
                        <ul class="list">
                            <li v-for="item in resume.award">
                                {{ item.name }}
                            </li>
                        </ul>
                    </td>
                </tr>
            </table>

            <table class="w-100 section" v-if="true">
                <tr>
                    <td colspan="2" class="section-header">
                        <h3>INTERESTS AND HOBBIES</h3>
                    </td>
                </tr>
                <tr>
                    <td valign="top">
                        <ul class="list">
                            <li v-for="item in resume.hobby">
                                {{ item.name }}
                            </li>
                        </ul>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>


<script>
export default {
  name: 'resume-template',

  props: ['resume']
}
</script>


<style lang="scss">

.resume-render-wrapper {
  padding: 20px;
  position: fixed;
  top: 55px;
  bottom: 0;
  overflow-y: scroll;
  display: inline;


  * {
    font-size: 14px;
    padding: 0;
    margin: 0;
  }

  .resume-template {
    font-family: "Calibri", sans-serif;
    font-size: 12px;
    line-height: 1.5;
    background: #fff;
    padding: 40px;
  }

  .main img {
    height: 150px;
    width: 150px;
  }

  .text-right {
    text-align: right;
  }

  .inline-block {
    display: inline-block;
  }

  table {
    padding: 15px;
    width: 100%;
  }

  .page-break {
    page-break-after: always;
  }

  .w-10 {
    width: 10%;
  }

  .w-20 {
    width: 20%;
  }

  .w-30 {
    width: 30%;
  }

  .w-40 {
    width: 40%;
  }

  .w-50 {
    width: 50%;
  }

  .w-60 {
    width: 60%;
  }

  .w-70 {
    width: 70%;
  }

  .w-80 {
    width: 80%;
  }

  .w-90 {
    width: 90%;
  }

  .w-100 {
    width: 100%;
  }

  .intro {
    padding: 0 20px;
  }

  .intro h1 {
    font-size: 2rem;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 10px;
  }

  .intro p {
    display: block;
    margin-top: 15px;
    margin-bottom: 15px;
  }

  .section-header {
    border-bottom: solid 3px #666666;
    margin-bottom: 20px;
  }

  .section {
    margin-top: 20px;
  }

  .section th {
    text-align: left;
    padding: 10px;
  }

  .section td {
    padding: 10px;
  }

  .list li {
    list-style-type: disc;
    margin-bottom: 10px;
  }
}

</style>