<template>
    <HeaderPage />


    <div class="container">
        <div class="item">
            <img class="logo" src="../assets/profile.jpeg" alt="Profile img">
        </div>
        <div class="item">
            <div>
                <table>
                <tr>
                    <td>
                       Name
                    </td>
                </tr>
                <tr>
                    <td>{{ name }}</td>
                </tr>
                <tr>
                    <td>
                       Email
                    </td>
                </tr>
                <tr>
                    <td>{{ email }}</td>
                </tr>
                <tr>
                    <td>
                       Password
                    </td>
                </tr>
                <tr>
                    <td>{{ password }}</td>
                </tr>
                <tr>
                        <input type="button" v-on:click="changePass(id)" class="button" value="Change Passowrd"> 
                    </tr>
            </table>
            </div>
           
        </div>

    </div>
    <div>
        <p>{{ name }} is an Indian international cricketer and the former captain of the Indian national cricket team who
            plays as a right-handed batsman for Royal Challengers Bangalore in the IPL and for the Delhi in Indian domestic
            cricket.
        </p> 
    </div>
    <FooterPage />
</template>

<script>
import HeaderPage from './header.vue'
import FooterPage from './footer.vue';
export default {
    name: "ProfilePage",
    data() {
        return {
            name: '',
            email: '',
            password: '',
            id: ''
        }
    },
    components: {
        HeaderPage,
        FooterPage
    },
    methods : {
        changePass (id)
        {
               this.$router.push("/changeProfileDetails/"+id)
        }
    },
    mounted() {
        let result = localStorage.getItem('User-Data');
        let user = JSON.parse(result);
        console.log("Profile Details", result);
        this.name = user.name;
        this.email = user.email;
        this.password = user.password;
        this.id=user.id;
        console.log("User Name",this.name);
        console.log("User ID",user.id);

    }
}
</script>

<style scoped>
.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    background-color: whitesmoke;
    margin: 2rem;
   height: auto;
   padding: 1rem 0;

}
.button {
    background-color: green;
    border: none;
    border-radius: 1rem;
    height: 2.5rem;
    width: 10rem;
    color: whitesmoke;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: medium;
    cursor: pointer;
    margin-top: 1rem;

}

.item {
    margin: 1rem 2rem;
    padding: 1rem;

}

.logo {
    width: 30rem;
    height: 15rem;
    max-width: 100%;
    
}


table {
    border-collapse: collapse;
    width: 100%;
}

td {
    text-align: left;
    width: 20rem;
    font-size: small;
   padding: 1rem;
}

tr:nth-child(even) {
    background-color: white;
    border-radius: 5px;
}

</style>