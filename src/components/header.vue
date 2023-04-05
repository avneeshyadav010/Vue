<template>
    <header>
        <ul>
            <li><router-link  to="home">Home</router-link></li>
            <li style="float:right"><a   v-on:click="logout" to="/">Logout</a></li>
            <li style="float:right"><router-link  to="profile">Profile</router-link></li>
            <!-- <li><router-link to="update">Update Restourent</router-link></li> -->
           
        </ul>
    </header>
</template>

<script>

export default {
    name: "HeaderPage",
    methods :
    {
            logout()
            {
                console.log("Logout");
                localStorage.clear();
                this.$router.push('/');
            }
    },
   
}
</script>

<style>
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color:green;
}

li {
    float: left;
}

li a {
    display: block;
    color:  white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

li a:hover:not(.active) {
    background-color: rgb(171, 10, 10)
}

.active {
    background-color:  rgb(171, 10, 10);
}
</style>
