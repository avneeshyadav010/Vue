<template>
    <div class="container">
        <div class="form_div">
            <form>
                <div>
                    <div class="row">
                        <label for="name">Name</label><br><br>
                        <input type="text" id="name" placeholder="Enter Your Name" name="Name" v-model="form.name" />
                    </div>
                    <div class="row">
                        <label for="email">Email</label><br><br>
                        <input type="text" id="email" placeholder="Enter Your Email" name="Email" v-model="form.email" />
                    </div>
                    <div class="row">
                        <label for="password">Password</label><br><br>
                        <input type="password" id="password" placeholder="Enter Your Password" name="Passowrd"
                            v-model="form.password" />
                    </div>
                    <div class="row_button">
                        <input type="button" v-on:click="signUp" class="button" value="Sign Up">
                    </div>
                </div>

            </form>
        </div>

    </div>
</template>

<script>
import axios from 'axios'
import emailjs from 'emailjs-com';
export default {
    name: "SignUp",
    data() {
        return {
            form: {
                name: '',
                email: '',
                password: ''
            }
        }
    },
    methods: {

        async signUp() {
            //  console.warn("Sign--Up",this.form.name,this.form.email,this.form.password);
            if (this.form.name.length > 0 && this.form.email.length > 0 && this.form.password.length > 0) {
                let result = await axios.post('http://localhost:3000/user', {
                    name: this.form.name,
                    email: this.form.email,
                    password: this.form.password,
                });

                console.log(result);
                if (result.status == 201) {
                    localStorage.setItem("User-Data", JSON.stringify(result.data))
                    console.log("Befor email")
                    var templateParams = {
                        from_name:"Book My Ground",
                        name: this.form.name,
                        email: this.form.email,
                        message: "BOOK MY GROUND"
                    }
                    emailjs.send('service_5kgq1xk', 'template_wbcjj4n', templateParams,'pYmxdX68Chfp4DT9T')
                        .then(function (response) {
                            if(response.status==200)
                            console.log('Registration Email Send SUCCESSFULLY!', response.status, response.text);
                            else
                            console.log("Failed To Send REgistration Email")
                        });
                        console.log("After Email")
                    this.$router.push('/home')


                }
                else {
                    this.$router.push('/sign-up');
                    console.log("API Error");

                }
            }
            else {
                console.log("Error : Any input field is empty");
                alert("Enter Below Details")
                this.$router.push('/sign-up');


            }


        },


    },
    mounted() {
        let user = localStorage.getItem('User-Data')
        console.log("User Dtails -Sign-up:", user);
        if (user) {
            this.$router.push('/home')
        }
    }
}
</script>



<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: grey;
    padding: 0 10rem;
    height: 100vh;
}


label {
    color: white;
    font-size: large;
}

input {
    border-radius: 1rem;
    background-color: transparent;
    height: 2.5rem;
    width: 30rem;
    border: 0.05rem solid whitesmoke;
    color: whitesmoke;
    font-size: medium;
}

.row {
    margin-bottom: 1rem;
    text-align: left;
}

.button {
    background-color: whitesmoke;
    border: none;
    border-radius: 1rem;
    height: 2.5rem;
    width: 10rem;
    color: green;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: medium;
    cursor: pointer;

}

.row_button {
    margin-top: 2rem;
    margin-bottom: 1rem;
    text-align: center;
}

::placeholder {
    color: whitesmoke;
    opacity: 1;
}

.form_div {
    margin: 1rem;

}

@media screen and (max-width: 600px) {
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5rem 20rem;


    }
}
</style>
