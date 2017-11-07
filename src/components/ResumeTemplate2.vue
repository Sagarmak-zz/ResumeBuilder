<template lang="html">
    <div class="resume-render-wrapper">
      <div class="resume-template">
	    <div class="wrapper">

        <div class="header">
            <h1>{{resume.info.name}}</h1>
            <p>
                Software Developer
            </p>
        </div>

        <!-- intro -->
        <table class="section-intro">
            <tr>
                <td><b>Full Name</b></td>
                <td>{{resume.info.name}}</td>
                <td><b>DOB</b></td>
                <td>{{resume.info.dob}}</td>
            </tr>

            <tr>
                <td><b>Address</b></td>
                <td>{{resume.info.address}}</td>
                <td><b>Email</b></td>
                <td>{{resume.info.email}}</td>
            </tr>
            <tr>
                <td><b>Website</b></td>
                <td>www.eliserawnsleye.com</td>
                <td><b>Phone</b></td>
                <td>(481)591-4285</td>
            </tr>
        </table>

        <!-- work experience -->
        <table>
            <div class="head-down-border-left"></div>
            <div class="head-down-border-right"></div>

            <tr>
                <td class="td">
                    <b><p class="section-header">WORK EXPERIENCE</p></b>
                </td>
                <td>
                    <table class="margin">
                        <tr>
                            <th>resume.internship.start-resume.internship.e</th>
                            <td>
                                <b><p>resume.internship.name</p></b>
                                <p>resume.internship.guide</p>
                                <p>resume.internship.description</p>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>

        <!-- Projects -->
        <table>
            <div class="head-down-border-left"></div>
            <div class="head-down-border-right"></div>
           <tr>
               <td class="td">
                   <b><p class="section-header">PROJECTS</p></b>
               </td>
               <td>
                   <table class="margin">
                       <tr>
                            <th>project.start-project.end</th>
                            <td>
                                <b><p>project.name</p></b>
                                <p>Guide : project.guide</p>
                                <p>project.description</p>
                            </td>
                        </tr>
                   </table>
               </td>
           </tr>
        </table>

        <!-- Education -->
        <table>
            <div class="head-down-border-left"></div>
            <div class="head-down-border-right"></div>
           <tr>
               <td class="td">
                   <b><p class="section-header">EDUCATION</p></b>
               </td>
               <td>
                   <table class="margin">
                       <tr>
                            <th>degree.year</th>
                            <td>
                                <b><p>degree.name</p></b>
                                <p>degree.institute</p>
                                <p>CGPA - degree.score</p>
                            </td>
                        </tr>
                   </table>
               </td>
           </tr>
        </table>

        <!-- Skills -->
        <table>
            <div class="head-down-border-left"></div>
            <div class="head-down-border-right"></div>
            <tr>
                <th class="section-header">Skills</th>
                <th></th>
                <td>
                    <ul>
                        <li>Accounting</li>
                        <li>Brand Management</li>
                        <li>Quality Improvement</li>
                        <li>Computer Software</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>Data Consolidation</li>
                        <li>Research</li>
                        <li>Statistics Interpretation</li>
                        <li>Costing</li>
                    </ul>
                </td>
            </tr>
        </table>

        <div class="footer"></div>
    </div>
    </div>
    </div>
</template>

<script>
export default {
  name: 'resume-template2',

  props: ['resume']
}
</script>

<style lang="scss">

.resume-template{
    padding: 20px;
    position: fixed;
    top: 90px;
    bottom: 0;
    overflow-y: scroll;
    display: inline;
}

*{
    padding: 0;
    margin: 0;
}

body {
    font-family: "Calibri";
    font-stretch: condensed;
    font-size: 16px;
    line-height: 1.5;
    background-color: white;
    margin:20px;
    padding:20px;
}

.header{
        font-family: "ISOCTEUR";
        background-color: #A7ADFD;
        text-transform: uppercase;
        color:black;
        height:200%;
        padding:40px;
        text-align: center;
}

.header h1{
    font-size: 36px;
}
.header p{
    font-size: 18px;
}
.footer{
        background-color:#A7ADFD;
        height:70%;
        padding:40px;
}
h1{
    font-size: 52px;
}

table{
    border-collapse: collapse;
    margin-left: 80px;
    margin-top: 50px;
    text-align: left;
    align-self: center;
}
th{
    vertical-align: top;
    width: 10%;
    padding-right: 60px;
    text-transform: uppercase;
}
td{
    vertical-align: top;
    padding-top: 0px;
    padding-bottom: 25px;
    text-align: left;
}

.head-down-border-left{
    border-bottom: solid 3px;
    border-color: #A7ADFD;
    //margin-left: 70px;
    border-radius: 1px;
    //max-width: 12%;
}
.head-down-border-right{
    border-bottom: solid 3px;
    border-color: #A7ADFD;
    margin-left: 270px;
    border-radius: 1px;
    max-width: 70%;
}

.wrapper {
    margin: auto;
    background-color:white;
}

.section-header{
    font-family:"ISOCTEUR";
    font-size: 18px;

}
.section-intro{
        font-size: 18px;
}

.section-intro td{
    text-align: left;
    width:210px;
    padding-left: 2%;
}

.margin{
    margin-top: -15px;
    margin-bottom: -30px;
}

.td{
    width: 110px;
}

</style>
