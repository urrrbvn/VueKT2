<template>
    <div class="pageContainer">
        <div class="pageText">
            <h1>Home page </h1>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet <br> sint. Velit officia consequat duis enim velit mollit. Exercitation veniam <br> consequat sunt nostrud amet.</p>
            <RouterLink to="/login"><button>Authorization</button></RouterLink>
        </div>
        <div class="pageImage">
            <img src="../assets/tools 1.png" alt="">
        </div>
    </div>
</template>

<script>

export default{

}


</script>

<style scoped>
    img{
        width: 301px;
        height: 290px;
    }
    .pageContainer{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 100%;
    }
    .pageText{
        /* width: 497px; */
        height: 290px;
        display: flex;
        flex-direction: column;
        /* background-color: pink; */
        margin-left: 148px;
        justify-content: space-between;
    }
    .pageImage{
        margin-right: 86px;
    }
    h1{
        font-size: 44px;
    }
    p{
        font-size: 16px;
        line-height: 23.5px;
    }
    button{
        width: 208px;
        height: 43px;
        font-size: 20px;
        font-weight: 700;
        background-color: #FF6464;
        color: white;
        border:none;
    }
</style>