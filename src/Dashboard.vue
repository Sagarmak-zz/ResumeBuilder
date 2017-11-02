<template>
<div>

  <navbar></navbar>
  <sidebar></sidebar>
  <resume-template></resume-template>

</div>
</template>

<script>

import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import ResumeTemplate from './components/ResumeTemplate'

export default {

  components: {
    Navbar,
    Sidebar,
    ResumeTemplate
  },
  
}

</script>
