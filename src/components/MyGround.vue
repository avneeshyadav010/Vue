<template>
    <HeaderPage />
    <div class="container">
        <div class="item">
            <img class="logo" src="../assets/7.jpeg" alt="Profile img">
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
                            Location
                        </td>
                    </tr>
                    <tr>
                        <td>{{ location }}</td>
                    </tr>
                    <tr>
                        <td>
                            Price
                        </td>
                    </tr>
                    <tr>
                        <td>{{ price }}</td>
                    </tr>
                    <tr>
                        <input type="button" v-on:click="booknow" class="button" value="Book Now">
                    </tr>
                </table>
            </div>

        </div>

    </div>
    <div>
        <p>{{ name }} Bharat Ratna Shri Atal Bihari Vajpayee Ekana Cricket Stadium, generally known as Ekana Cricket
            Stadium, is an international cricket stadium in Lucknow, Uttar Pradesh state in India. This arena have seating
            capacity of 50,000, thus it is the fifth largest international cricket stadium in nation. Formerly known as
            the Ekana International Cricket Stadium, it was renamed in honour of former Prime minister of India, Atal Bihari
            Vajpayee.
        </p>

    </div>
    <FooterPage />
</template>

<script>
import HeaderPage from './header.vue'
import FooterPage from './footer.vue'
import axios from 'axios'
import emailjs from 'emailjs-com'
export default {
    name: "MyGround",
    data() {
        return {
            name: '',
            location: '',
            price: '',
            email :'',
            user_name :''
        }
    },
    components: {
        HeaderPage,
        FooterPage
    },
    methods: {
        async booknow() {
            let result = await axios.post('http://localhost:3000/myGround', {
                name: this.name,
                location: this.location,
                price: this.price,
            });
             if(result.status ==201)
             {
                console.log("Befor email")
                    var templateParams = {
                        name: this.name,
                        email: this.email,
                        user_name : this.user_name,
                        location : this.location,
                        message: "BOOK MY GROUND"
                    }
                    emailjs.send('service_5kgq1xk', 'template_bmloli9', templateParams,'pYmxdX68Chfp4DT9T')
                        .then(function (response) {
                            if(response.status==200)
                            console.log('Booking Email Send SUCCESSFULLY!', response.status, response.text);
                            else
                            console.log("Failed To Send Booking Email")
                        });
                        console.log("After Email")
                this.$router.push('/thankyou')
             }
            console.log("Booking Details", result.data);

        }
    },
    mounted() {
        let result = localStorage.getItem("cricket1");
        console.log("Result", result);
        let user = JSON.parse(result);
        console.log("Ground", user);
        this.name = user.name;
        this.location = user.location;
        this.price = user.price;
        let user_details = localStorage.getItem("User-Data");
            user_details = JSON.parse(user_details);
            this.email = user_details.email;
            this.user_name = user_details.name;
        console.log("User", user_details)

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

.item {
    margin: 1rem 2rem;
    padding: 1rem;

}

.logo {
    width: 30rem;
    height: 15rem;
    max-width: 100%;

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