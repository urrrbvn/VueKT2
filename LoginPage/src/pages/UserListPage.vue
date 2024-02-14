<template>
    <div class="pageCont">
        <div class="userList">
            <div class="userCard" v-for="user in allUsers">
                {{ user.firstName }} {{ user.lastName }} {{ user.maidenName }}
                <p>{{ user.email }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default{
        data(){
            return{
                allUsers:[]
            }
        },
        async mounted(){
            let res = await axios.get('https://dummyjson.com/users')

            console.log(res)

            this.allUsers = res.data.users

            console.log(this.allUsers)

        }
    }
</script>

<style>
    .pageCont{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .userList{
        margin-top: 71px;
        height: 430px;
        width: 402px;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        gap: 18px;
    }
    .userCard{
        
        width: 370px;
        height: 56px;
        border-radius: 10px;
        padding: 16px;

        box-shadow: 0px 2.75px 9px 0px #00000030;

        display: flex;
        align-items: center;
        justify-content: space-between;


    }
</style>