<template>
    <div class="container">
        <h4>Welcome to the Control Room {{this.name}}</h4>
         <div class="card" v-for="unit in units" :key="unit.id">
          <div class="card-content">
            <h3>{{ unit.size }}</h3>
            <ul class="unit-info">
              <li class="chip">{{ unit.price }}</li>
              <li class="chip">{{ unit.available }}</li>
               <li class="chip">{{ unit.desc }}</li>
                <li class="chip">{{ unit.id }}</li>

               <li><button @click="changeStatus1(unit.id)">available</button> </li>
                 <li><button @click="changeStatus2(unit.id)">notAvailable</button> </li>
            </ul>
          </div>
          </div>
    </div>
</template>

<script>
import db from '@/Firebase/init'

export default {
    name: 'ControlTools',
    props: ['name'],
    data(){
        return {
            units:[]
        }
    },
    
  created(){
       db.collection('units').get()
       .then(snapshot => {
         snapshot.forEach(doc => {
           let unit = doc.data()
            unit.id = doc.id
         
            this.units.push(unit)
         
         })
           
       })

  },
  methods:{
      changeStatus1(id){
            
         

           db.collection('units').doc(id).update({
                available: true
            }).then(() => {
           this.units.forEach(unit =>{
            console.log(unit)
            console.log(unit.id)
            console.log(id)

            if(unit.id == id){
                unit.available = true
            }
           })
            
          return this.units }
          )        
            },
             changeStatus2(id){
            
         

          db.collection('units').doc(id).update({
                available: false
            }).then(() => {
           this.units.forEach(unit =>{
            console.log(unit)
            console.log(unit.id)
            console.log(id)

            if(unit.id == id){
                unit.available = false
            }
           })
            
          return this.units }
          )        
            }
 }
}

     /* available(id){
            db.collection('units').doc(id).update({
                available: true
            })},
            notAvailable(){
            db.collection('units').doc(unit.id).update({
                available: false
            })}
      
      */
  
 

</script>

<style>

</style>
