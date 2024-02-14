<template>

    <h1>My profile</h1>
    <div class="userDataContainer">
        <div class="textData">
            <div class="card">Username: {{ this.userData.username }}</div>
            <div class="card">Name: {{ this.userData.firstName }}</div>
            <div class="card">Lastname: {{ this.userData.lastName }}</div>
            <div class="card">Gender: {{ this.userData.gender }}</div>
            <div class="card">E-mail: {{ this.userData.email }}</div>
        </div>
        <div class="userPic">
            <img :src="userData.image" alt="">
        </div>
    </div>

</template>

<script>
    import axios from 'axios'

    // let userToken = localStorage.getItem('token')

    export default{
        data(){
            return{
                userData: {}
            }
        },
        async beforeRouteEnter(to, from, next){
            let userToken = localStorage.getItem('token')
            if(userToken){
                try{
                    let res = await axios.get('https://dummyjson.com/auth/me', {headers:{'Authorization': `Bearer ${userToken}`}})
                    if(res.status == '200'){
                        next(vm =>{
                            vm.userData = res.data
                        })
                    }else{
                        next('/login')
                    }
                }catch(errror){
                    // Сюда впишу переход на страницу ошибки если токен не пройдет проверку
                    next('/profile/problem')
                }
            }else{
                next('/login')
            }
        },
        mounted(){
            console.log(this.userData)
        }

    }
</script>

<style scoped>
    h1{
        margin-left: 311px;
        margin-bottom: 47px;
        font-size: 44px;
        font-weight: 700;
        line-height: 60px;
    }
    .userDataContainer{
        display: flex;
    }
    .textData{
        display: flex;
        flex-direction: column;
        gap: 11px;
        margin-left: 311px;
    }
    .card{
        width: fit-content;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: start;
        padding: 8px 16px;
        border-radius: 10px;
        box-shadow: 0px 2.75px 9px 0px #00000030;

    }
    .userPic{
        margin-left: 224px;
    }
    img{
        border-radius: 50%;
    }
</style>