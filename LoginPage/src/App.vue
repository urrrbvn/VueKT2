<script>
import {RouterView, RouterLink} from 'vue-router';
import HomePage from './pages/HomePage.vue'

</script>

<template>
  <div class="header">
    <ul>
      <RouterLink to="/"><li>Home</li></RouterLink>
      <RouterLink to="/users" ><li>Users</li></RouterLink>
      <RouterLink to="/profile"><li>Profile</li></RouterLink>
    </ul>
  </div>
  <main>
    <RouterView></RouterView>
  </main>
  <footer>
        <div class="icons">
            <img src="./assets/fb.png" alt="">
            <img src="./assets/insta.png" alt="">
            <img src="./assets/Group.png" alt="">
            <img src="./assets/Linkedin.png" alt="">
        </div>
        <p>Copyright ©2020 All rights reserved </p>
    </footer>
</template>

<style>
main{
  height: 514px;
}
ul{
  display: flex;
  margin-right: 117px;
}
li{
  list-style-type: none;
  width: 71px;
  margin-left: 24px;
  font-size: 20px;
  font-weight: 500px;

}
a{
  text-decoration: none;
  color: black;
}
.header{
  /* background-color: antiquewhite; */
  height: 70px;
  display: flex;
  justify-content: end;
  align-items: center;
  width: 100%;
}
footer{
  height: 182px;
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100%;
  top: 584px;
  align-items: center;
  justify-content: center;
}
.icons{
  display: flex;
  gap: 35px;
  margin-bottom: 26px;
}
</style>