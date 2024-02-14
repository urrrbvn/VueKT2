<template>
    <div class="LoginPageContainer">
        <div class="loginWindow">
            <h1>Authorization</h1>
            <p class="errMessage" :style="{opacity: (this.authStatus == '') ? 0 : 1}">Invalid credentials</p>
            <p>Login</p>
            <input type="text" v-model="this.userData.username">
            <p>Password</p>
            <input type="text" v-model="this.userData.password">
            <button @click="UserLogin">Submit</button>
        </div>
    </div>
</template>

<script>
import {RouterView, RouterLink} from 'vue-router';
import axios from 'axios'

export default{
    data(){
        return{
            userData:{
                username:'',
                password:''
            },
            authStatus: ''
        }
    },
    methods:{
    async UserLogin(){
        try{
            const vm = this

            const res = await axios.post('https://dummyjson.com/auth/login', this.userData, {headers: { 'Content-Type': 'application/json' }});

                const token = res.data.token;
                localStorage.setItem('token', token);
                this.authStatus = ''
                vm.$router.push('/profile')
        }catch(error){
            this.authStatus = 'err'
        }
        }
    }
}
</script>

<style scoped>
.errMessage{
    color: red;
    position: relative;
    top: -42px;
    left: 85px;
}
.LoginPageContainer{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .loginWindow{
        width: 335px;
        height: 277px;
        border-radius: 10px;
        box-shadow: 0px 2.75px 9px 0px #00000030;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    input{
        width: 152px;
        height: 29px;
        border-radius: 10px;
        border: 0;
        box-shadow: 0px 2.75px 9px 0px #00000030;
        margin-bottom: 13px;
    }
    button{
        width: 46px;
        height: 24px;
        background-color: white;
        border: 0;
        text-align: center;
        padding: 0;
        margin-top: 6px;
    }
    button:active{
        background-color: grey;
    }
    h1{
        margin-top: 16px;
        margin-bottom: 26px;
        margin-left: 16px;
        align-self: start;
        font-size: 16px;
    }
    p{
        margin-bottom: 8px;
        font-size: 14px;
        color: #00000099;
    }
</style>