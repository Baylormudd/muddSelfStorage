<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  },
  methods:{
     handleStyles () {
       document.body.className = 'bodyeh'
       }
     },
     mounted(){
       this.handleStyles()
     }
  }

</script>

<style>
.bodyeh{
  background: #fffcf9 url("../images/ricepaper2.jpg");
  background-size: 300px 300px;
  background-repeat: repeat;
  line-height: 1.4;
  overflow-x: hidden;
  max-width: 100vw;
}
.bodyee{
  background-color: red;
}
</style>
