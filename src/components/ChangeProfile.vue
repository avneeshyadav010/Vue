<template>
    <div class="container">
        <form >
            <div>
            <div class="row">
                <label for="name">Name</label><br><br>
                <input type="text" id="name" placeholder="Enter Your New Name" name="Name" v-model="name" />
            </div>
            <div class="row">
                <label for="email">Email</label><br><br>
                <input type="text" id="email" placeholder="Enter Your New Email" name="Email" v-model="email" />
            </div>
            <div class="row">
                <label for="password">Password</label><br><br>
                <input type="password" id="password" placeholder="Enter Your New Password" name="Passowrd"
                    v-model="password" />
            </div>
            <div class="row_button">
                <input type="button" v-on:click="changePassword" class="button" value="Change Now"  >
            </div>
            </div>
        </form>
       
            <!-- <div class="item">
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
                        New Password
                    </td>
                </tr>
                <tr>
                    <td>{{ password }}</td>
                </tr>
                <tr>
                        <button v-on:click="changePassword" class="button">Change Passowrd </button>
                    </tr>
            </table>
            </div>
           
        </div> -->
       

    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: "ChangeProfileDetails",
    data() {
        return {
            name: '',
            email: '',
            password: ''
        }
    },
    methods: {
        async changePassword() {
            if (this.name.length > 0 && this.email.length > 0 && this.password.length > 0) {
                let result = await axios.put('http://localhost:3000/user/'+this.$route.params.id, {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                });

                console.log(result);
                if (result.status == 200) {
                    localStorage.setItem("User-Data", JSON.stringify(result.data))
                    console.log("Changed Details",result.data)
                    this.$router.push('/profile')
                }
                else{
                console.log("Put Request Error")
            }
            }
            else{
                console.log("Put Request Error")
            }
        },
    },
    mounted() {
        let result = localStorage.getItem('User-Data');
        let user = JSON.parse(result);
        console.log("Profile", result);
        this.name = user.name;
        this.email = user.email;
        this.password = user.password;
        console.log(this.name);

    }
}
</script>
<style scoped>
.container {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: whitesmoke;
    margin: 2rem;
    height: auto;
    padding: 1rem 0 ;

}
label{
    font-size: medium;
}
input{
    border-radius: 0.5rem;
    border-color: transparent;
    height: 2rem;
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
.row_button {
    margin-top: 2rem;
    margin-bottom: 1rem;
    text-align: center;
}
.row {
    margin-bottom: 1rem;
    text-align: left;
    padding: 0 2rem;
}
.item {
    margin: 1rem 2rem;
    padding: 1rem;

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