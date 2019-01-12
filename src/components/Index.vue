<template>
  <div>
    <div class="container-style">
        <div class="row flex" style="margin-bottom:0">
         <div class="col s0 m2 l2 hide-on-small-only left-header">cool logo?</div>
      <div class="col s12 m8 l8 header">
          <div class="dater"><span>{{moment().format('dddd, MMMM Do YYYY')}}</span></div>
        <div class="header-text">MUDD</div>
        <br>
        <div class="header-under-text">SELF - STORAGE</div>
       
      </div>
    <div class="col s0 m2 l2 hide-on-small-only right-header"> 
      <div class="top-text">Since 1979</div>
       <div class="top-text">Anderson, Indiana</div>
    </div>
   
  </div>
   <div class="row flex content-row">
     <nav class="navyo nav-wrapper flex">
        <div class="col s3 box-em"><a href="">about</a></div>
        <div class="col s3 box-em"><a href="">units</a></div>
        <div class="col s3 box-em"><a href="">contact</a></div>
        <div class="col s3"><a href="">history</a></div>
        </nav>
    </div>
    <div class="row flex content-row content-border">
      <div class="col s12 m8 content-1">
        <div class="content-1-header">storage you can trust</div>
      </div>
      <div class="col s12 m4 content-2" style="padding-top: 10px; padding-bottom: 10px;">
        <div class="content-2-2"><div class="location-header">Find Us</div> 
         <div class="location-header-2">downtown anderson</div> 
           <div class="location">
            1434 Main st, anderson
          </div>
          <div class="location">
            46016, USA
          </div>
           <div class="location">
           <span style="font-weight:bold">office</span> open mon-fri 9:00am-5:00pm
          </div>
           <div class="location">
           <span style="font-weight:bold">phone</span> open mon-sun 9:00am-7:00pm
          </div>
          <div class="location">
           <span style="font-weight:bold">(765) 644-1434</span> 
          </div>
        </div>
      </div>

    </div>
     <div class="row flex content-row content-border">

       <div class="col s12 m4 content-1" style="padding-top: 10px; padding-bottom: 10px;">
          <div class="content-2-2"><div class="location-header">history</div> 
         <div class="location-header-2">in 1965...</div> 
           <div class="location">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Proin malesuada tincidunt purus, sit amet maximus eros varius a. Aliquam erat volutpat. Nullam iaculis enim sed vulputate facilisis. Praesent euismod efficitur aliquam. Morbi sit amet dolor est. Proin tellus leo, convallis ut porttitor vel, scelerisque et diam. Aenean nibh sapien, 
            mollis ut libero ac, finibus mattis augue.
          </div>
        </div>

      </div>
       <div class="col s12 m8">

         <div class="col s12 m6 l4 xl4 boxem2 flex" style="padding-left:0px;padding-right:0px;" v-for="unit in units" :key="unit.id">
           <div class="unit-header"> 
             <span class="unit-header-text">${{unit.price}}</span> 
             </div>
          <div class="border-guy"></div>
            <div class="unit-header unit-info">
             <div class="unit-info-text">{{ unit.size }}</div> 
            </div>
          <div class="border-guy"></div>
          <div class="unit-attributes">Stores 2 rooms of furniture</div>
        <div class="unit-button"> <a href="tel:+17656441433" class="btn-flat"> 
          <div stlye="padding-top:10px;padding-bottom:10px;">rent</div> </a></div>
               
            
        <!--  <div class="unit-size"> 
            <span>{{ unit.size }}</span><div class="size-desc">small</div>
             </div>
             <div class="attributes">
               <ul>
               <li>Heated</li>
               <li>Indoors</li>
               <li>Trailer Access</li>
               </ul>
               </div>
               <div class="price">
                 ${{ unit.price }} <span style="font-size:.65em;">per Month</span>
            
               </div>
               <div class="rent-price">
                <a href="" class="btn-flat">rent</a>
               </div>
     -->
 <!--
         <div class="unit-size">  {{ unit.size }}  </div>
            
           
              <li>{{ unit.price }}</li>
              <li>{{ unit.available }}</li>
               <li>{{ unit.desc }}</li>
                                              -->
            
         
        </div>
  
      </div>
     </div>
  </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import db from '@/Firebase/init'

export default {
  name: 'Index',
   components: {
    Navbar
  },
  data () {
    return {
      units:[]
    }
  },
  methods:{
    consoleHey(){
      console.log('hey')
    }
  },

  created(){
       db.collection('units').get()
       .then(snapshot => {
         snapshot.forEach(doc => {
           let unit = doc.data()
       
           if(unit.available == true){
            unit.id = doc.id
            this.units.push(unit)
           }
          
         })
       })

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.unit-button a:hover{
  color:#000080;

}
.unit-button{
   margin: auto auto;
   padding-top: 4px;
   padding-bottom: 4px;
}
.btn-flat{
  
 
  background-color:none;
 -webkit-box-shadow:0 0px 0px 0 rgba(0,0,0,0.0), 0 0px 0px 0px rgba(0,0,0,0.12), 0 0px 0px 0 rgba(0,0,0,0.2);
  box-shadow: 0 0px 0px 0 rgba(0,0,0,0.14), 0 0px 0px 0px rgba(0,0,0,0.12), 0 0px 0px 0 rgba(0,0,0,0.2);
  font-size: 2.2vw;
  background-color:none;
  border-style:dashed;
  border-width: 2px;
  

  }

 @media only screen and (max-width: 600px)  {
.btn-flat{
  
 
  background-color:none;
 -webkit-box-shadow:0 0px 0px 0 rgba(0,0,0,0.0), 0 0px 0px 0px rgba(0,0,0,0.12), 0 0px 0px 0 rgba(0,0,0,0.2);
  box-shadow: 0 0px 0px 0 rgba(0,0,0,0.14), 0 0px 0px 0px rgba(0,0,0,0.12), 0 0px 0px 0 rgba(0,0,0,0.2);
  font-size: 5vw;
  background-color:none;
  border-style:dashed;
  border-width: 2px;
  

  }
}
.unit-attributes{
  padding-top: 5px;
margin-left: 10%;
   font-size: 1.7vw;
}
 @media only screen and (max-width: 600px)  {
 .unit-attributes{
  padding-top: 5px;
   margin-left: auto;
   margin-right: auto;
   font-size: 2.65vw;
}
}
.unit-info-text{
 font-size:3vw;
 display: block;
 font-weight: 500;
 }
 @media only screen and (max-width: 600px)  {
 .unit-info-text{
 font-size:4.5vw;
 display: block;
 font-weight: 500;
 }
}
 .unit-info-text2{
 font-size:2.8vw;
  display: block;

 }


.unit-header{
  
  margin: auto auto;

}
@media only screen and (max-width: 600px)  {
  .unit-header{
    
}
}
.border-guy{
  
  width:100%;
  border-right-color: #000;
  border-right-width: 0px;
  border-right-style: dashed;
  border-bottom-color: #000;
  border-bottom-width: 2px;
  border-bottom-style: dashed;
}

@media only screen and (max-width: 600px)  {
  .border-guy{
  height: 100%;
  border-right-color: #000;
  border-right-width: 2px;
  border-right-style: dashed;
  border-bottom-color: #000;
  border-bottom-width: 2px;
  border-bottom-style: dashed;
}
}

.unit-header-text{
 font-size: 3.8vw;
 font-weight: bold;
}

@media only screen and (max-width: 600px)  {
  .unit-header-text{
 font-size: 8vw;
 font-weight: bold;
}
}
.unit-header-text2{
 font-size: 1.3vw;
 
}




.rent-price{
   font-size: 1.35em;
  font-weight: bolder;
  width: 15%;
  text-align: center;
  padding-top: 10px;
  padding-left: 5px;
  margin-top: 7%;
  
}

.rent-price a:hover{
  color: #000080;

}

.price{
  font-size: 1.35em;
  font-weight: bolder;
  width: 15%;
  text-align: center;
  padding-top: 10px;
  padding-left: 5px;
  margin-left: 2%;

}

.attributes{
  width: 30%;
  padding-left: 5%;
  padding-right: 5%;
   border-right-width: 2px;
  border-style: dashed;
  border-color: #000;
  border-left: 0px;
  border-top: 0px;
  border-bottom: 0px;
}

.boxem2{
  margin-top: 1%;
  margin-bottom: 1%;
  -webkit-box-shadow:0 0px 0px 0 rgba(0,0,0,0.0), 0 0px 0px 0px rgba(0,0,0,0.12), 0 0px 0px 0 rgba(0,0,0,0.2);
  box-shadow: 0 0px 0px 0 rgba(0,0,0,0.14), 0 0px 0px 0px rgba(0,0,0,0.12), 0 0px 0px 0 rgba(0,0,0,0.2);
  background-color: transparent;
   border-style: solid;
  border-width: 2px;
  border-color: #000;
  
  
  

}
.unit{
  box-shadow: none;
  background: none;
  border-style: solid;
  border-width: 2px;
  border-color: #000;
  
}

.location-header{
  text-transform: uppercase;
 font-size: 1.5em;
  font-weight: bold; 
}
.unit-size{
  text-transform: none;
 font-size: 1.5em;
  font-weight: bold; 
  align-items: center;
  justify-content: center;
  border-right-width: 2px;
  border-style: dashed;
  border-color: #000;
  border-left: 0px;
  border-top: 0px;
  border-bottom: 0px;
  width: 30%;
  float: left;
  
}

.location{
    text-transform: uppercase;

   font-size: .5em;
   font-weight: 500;
}
.location-header-2{
  text-transform: uppercase;
   font-size: .6em;
  font-weight: bolder; 
}
.content-1{
  border-right-color: #000;
  border-right-width: 2px;
  border-right-style: solid;
}
@media only screen and (max-width: 600px)  {
  .content-1{
 
  border-right-color: #000;
  border-right-width: 0px;
  border-right-style: solid;
  border-bottom-color: #000;
  border-bottom-width: 2px;
  border-bottom-style: solid;
}

}
.content-1-header{
  margin-left: 20px;
  flex: 0 1 auto;
  font-size: 5em;
  font-weight: bold;
    text-transform: uppercase;

}
.content-2{
   padding:15px;
   padding-top: 200px;
   
   align-items:center;
   justify-content: center;
  
}
.content-2-2{
  font-size: 2em;
  font-weight: bold; 
  text-align: center;
  border-style: dashed solid;
  border-color: #000;
  border-width: 2px;
}
.content-border{
  border-style: solid;
  border-width: 2px;
  border-color: #000;
  border-top: 0px;
}

.content-row{
  margin-top: 0px;
  margin-bottom: 0px;
}

.box-em{
   border-right-width: 2px;
   border-style: solid;
   border-color: #000;
   border-left: 0px;
   border-top: 0px;
   border-bottom: 0px;
}
.dater{
   text-align: center;
  margin-top: 1%;
  text-transform: uppercase;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-size: 1.1rem;
  font-weight: 500;
}
.flex {
  display: flex;
  flex-wrap: wrap;
}

.navyo{
  -webkit-box-shadow:0 0px 0px 0 rgba(0,0,0,0.0), 0 0px 0px 0px rgba(0,0,0,0.12), 0 0px 0px 0 rgba(0,0,0,0.2);
  box-shadow: 0 0px 0px 0 rgba(0,0,0,0.14), 0 0px 0px 0px rgba(0,0,0,0.12), 0 0px 0px 0 rgba(0,0,0,0.2);
  background-color: transparent;


}
nav a{
  color: #000;
  font-size: 1.2rem;
  font-weight: 700;
  text-transform: uppercase;
  
 
}
nav a:hover{
  color: #000080;
  font-size: 1.2rem;
  font-weight: 700;
  text-transform: uppercase;
  
 
}
.nav-wrapper{
 text-align: center;
   border-width: 2px;
   border-style: solid;
   border-color: black;
  border-top: 0px;
}
.bgr{
  background-color:red;
  height: 100%;
}
.header-text{
 
  letter-spacing: 2.5vw;
  font-weight: 900;
   font-size: 9rem;
   
}
@media only screen and (max-width: 600px)  {
  .header-text{
 
  letter-spacing: 2.5vw;
  font-weight: 900;
   font-size: 6.5rem;
   
}
}

.header-under-text{
  
  font-weight: 900;
   font-size: 2rem;
   margin-bottom: 1%;

}
@media only screen and (max-width: 600px)  {
  .header-under-text{
 
  font-weight: 900;
   font-size: 2rem;
   font-size: 1.2rem;
   
}
}
.top-text{
  font-weight: 700;
  font-size: 1.8vw;
  margin-top: 1.55em;
}

.left-header{
   text-align: center;
   border-width: 2px;
   border-style: solid;
   border-right: 0px;
 
}

.right-header{
   text-align: center;
   border-width: 2px;
   border-style: solid;
   border-left: 0px;
   flex:0 0 16.6%;
   flex-direction: column;
   align-items:center;
   justify-content: center;
   

}

.header{
  text-align: center;
  border-width: 2px;
  border-style: solid;
  flex-direction: column;
  align-items:center;
  justify-content: center;
  line-height: .8;

}


.container-style{
  margin-top: 2%;
  margin-bottom: 1%;
  margin-left: auto;
  margin-right: auto; 
  width: 95%;
  font-family: Pressura Mono,monospace;
}


.icons{
  font-size: 36px; 
}

.title{
  height: 12em;
}

.img{
  position: relative;
  text-align: center;
}

.picture-text-c{
  position: absolute;
  top:40%;
  left: 45%;
  transform: translate(-50%, -90%);
  font-weight: bolder;
  text-shadow: 2px 2px rgb(56, 56, 56);
  font-size: 3.5em;
  font-size: 3.5vw;

}

</style>
