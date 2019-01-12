<template>
    <div class="container controls">
        <div class="card">
            <div class="card-content center-align">
                <h2 class="teal-text">The Controls</h2>
                <form @submit.prevent="enterControls">
                    <label for="username">Username:</label>
                    <input type="text" name="username" v-model="name">
                    <label for="password">Password:</label>
                    <input type="password" password="password" v-model="password">
                    <button class="btn teal">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>

import db from '@/Firebase/init'

export default {
    name: 'Controls',
    data(){
        return {
            name: null,
            password: null
        }
    },
    methods: {
        enterControls(){
            db.collection('users').get()
            .then(snapshot => {
                snapshot.forEach(doc => {
                    console.log(doc.data())
                    let user = doc.data()
                    if(user.name == this.name && user.password == this.password){
                        this.$router.push({ name: 'ControlTools', params: { name: this.name}})
                    } else {
                    console.log("wrong name looser")
                    }
                })
            })
        }
    }
}
</script>

<style>
.controls{
    max-width: 400px;
    margin-top: 100px;
}

.controls h2{
    font-size: 3em;
}

.controls button{
    margin: 30px auto;
}
</style>
