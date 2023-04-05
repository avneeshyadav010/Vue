<template>
  <div>

    <HeaderPage />
    <div><img alt="Vue logo" class="logo" src="../assets/logo2.jpeg"></div>
    <h1>Let's Play Cricket </h1>
    <div class="container">
      <div class="row">
        <div class="item">

          <img alt="ground image" src="../assets/1.jpeg">

          <div>
            <ul class="item_loc">
              <li style="float: left;">{{ cricket1[0].name }}</li>
              <li style="float: right;">{{ cricket1[0].location }}</li>
            </ul>
          </div>
          <div>
            <p>{{ cricket1[0].price }}</p>
          </div>
          <div><input type="button"  v-on:click="book(cricket1[0].id)" class="button" value="Book Now"></div>

        </div>

        <div class="item">
          <img alt="ground image" src="../assets/2.jpeg">
          <div>
            <ul class="item_loc">
              <li style="float: left;">{{ cricket1[1].name }}</li>
              <li style="float: right;">{{ cricket1[1].location }}</li>
            </ul>
          </div>
          <div>
            <p>{{ cricket1[1].price }}</p>
          </div>
          <div><input type="button"  v-on:click="book(cricket1[1].id)" class="button" value="Book Now"></div>

        </div>

        <div class="item">
          <img alt="ground image" src="../assets/3.jpeg">
          <div>
            <ul class="item_loc">
              <li style="float: left;">{{ cricket1[2].name }}</li>
              <li style="float: right;">{{ cricket1[2].location }}</li>
            </ul>
          </div>
          <div>
            <p>{{ cricket1[2].price }}</p>
          </div>
          <div><input type="button"  v-on:click="book(cricket1[2].id)" class="button" value="Book Now"></div>

        </div>
      </div>

      <div class="row">
        <div class="item">
          <img alt="ground image" src="../assets/4.jpeg">
          <div>
            <ul class="item_loc">
              <li style="float: left;">{{ cricket1[3].name }}</li>
              <li style="float: right;">{{ cricket1[3].location }}</li>
            </ul>
          </div>
          <div>
            <p>{{ cricket1[3].price }}</p>
          </div>
          <div><input type="button"  v-on:click="book(cricket1[3].id)" class="button" value="Book Now"></div>

        </div>
        <div class="item">
          <img alt="ground image" src="../assets/5.jpeg">
          <div>
            <ul class="item_loc">
              <li style="float: left;">{{ cricket1[4].name }}</li>
              <li style="float: right;">{{ cricket1[4].location }}</li>
            </ul>
          </div>
          <div>
            <p>{{ cricket1[4].price }}</p>
          </div>
          <div><input type="button"  v-on:click="book(cricket1[4].id)" class="button" value="Book Now"></div>

        </div>
        <div class="item">
          <img alt="ground image" src="../assets/6.jpeg">
          <div>
            <ul class="item_loc">
              <li style="float: left;">{{ cricket1[5].name }}</li>
              <li style="float: right;">{{ cricket1[5].location }}</li>
            </ul>
          </div>
          <div>
            <p>{{ cricket1[5].price }}</p>
          </div>
          <div><input type="button"  v-on:click="book(cricket1[5].id)" class="button" value="Book Now"></div>

        </div>
      </div>
    </div>
    <!-- <div class="container">
    <table>
      <tr  class="row" v-for="item in cricket" :key="item.id" >
        <td class="item_table">
          <img alt="ground image" src="../assets/1.jpg">
          <div>
            <p>{{cricket[0].name }}</p>
          </div>
          <div>
            <p>{{cricket[0].price }}</p>
          </div>
          <div><input type="button" class="button" value="Book Now"></div>
        </td> 
        
        <td class="item_table">
          <img alt="ground image" src="../assets/2.jpg">
          <div>
            <p>{{cricket[1].name }}</p>
          </div>
          <div>
            <p>{{cricket[1].price }}</p>
          </div>
          <div><input type="button" class="button" value="Book Now"></div>
        </td>
        <td class="item_table">
          <img alt="ground image" src="../assets/7.jpg">
          <div>
            <p>{{ cricket[2].name }}</p>
          </div>
          <div>
            <p>{{cricket[1].price }}</p>
          </div>
          <div><input type="button" class="button" value="Book Now"></div>
        </td>
      </tr> 
      <tr class="row">
        <td class="item_table">
          <img alt="ground image" src="../assets/4.jpg">
          <div>
            <p>{{cricket[3].name }}</p>
          </div>
          <div>
            <p>{{cricket[1].price }}</p>
          </div>
          <div><input type="button" class="button" value="Book Now"></div>
        </td>
        <td class="item_table">
          <img alt="ground image" src="../assets/8.jpg">
          <div>
            <p>{{cricket[4].name }}</p>
          </div>
          <div>
            <p>{{cricket[1].price }}</p>
          </div>
          <div><input type="button" class="button" value="Book Now"></div>
        </td>
        <td class="item_table">
          <img alt="ground image" src="../assets/6.jpg">
          <div>
            <p>{{cricket[5].name }}</p>
          </div>
          <div>
            <p>{{cricket[1].price }}</p>
          </div>
          <div><input type="button" class="button" value="Book Now"></div>
        </td>
      </tr> 
    </table>
  </div> -->
  
  
  </div>
  <div>
    <FooterPage />
  </div>
</template>

<script>
import axios from 'axios';
import HeaderPage from './header.vue'
import FooterPage from './footer.vue'
export default {
  name: 'CricketMatch',
  components: {
    HeaderPage,
    FooterPage
  },
  data() {
    return {
      cricket: [],
      cricket1: [
        {
          "name": "Wankhede",
          "location": "Mumbai",
          "price": "Rs. 1000",
          "id" : 0
        },
        {
          "name": "Eden Garden",
          "location": "Kolkata",
          "price": "Rs. 2000",
          "id" : 1
        },
        {
          "name": "Green Park",
          "location": "Kanpur",
          "price": "Rs. 3000",
          "id" : 2
        },
        {
          "name": "Firoz Shah Kotla",
          "location": "Delhi",
          "price": "Rs. 2000",
          "id" : 3
        },
        {
          "name": "ChinnaS",
          "location": "Bangalore",
          "price": "Rs. 1000",
          "id" : 4
        },
        {
          "name": "Ekana",
          "location": "Lucknow",
          "price": "Rs. 3000",
          "id" : 5
        }

      ],
    }
  },
  methods : {
    book(id)
    {
             this.$router.push('/myground');
             console.log("Book",this.cricket1[id]);
             localStorage.setItem("cricket1",JSON.stringify(this.cricket1[id]))
             
    }
  },
  async mounted() {
    let result = await axios.get("http://localhost:3000/cricket");
    console.log("Welcome to Homepage");
    this.cricket = result.data;
    console.log(result.data);

  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  background-color: whitesmoke;
}

.row {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;
  padding: 0 10rem;
  margin: 2rem 0;

}

.item {
  background-color: whitesmoke;
  width: 30rem;
  margin: 1rem;
  font-size: medium;
  padding-bottom: 1rem;

}

.item_loc {
  background-color: whitesmoke;
  padding: 0 0.05rem;
}

img {
  max-width: 100%;
  width: 30rem;
  height: 12rem;

}

.item_table {
  background-color: #f1f1f1;
  width: 15rem;
  margin: 1rem;
  text-align: center;
  font-size: medium;
  padding-bottom: 1rem;

}

.logo {
  width: 100%;
  height: 20rem;
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

.button:hover {
  background-color: rgb(171, 10, 10);
}

.row_button {
  margin-top: 2rem;
  margin-bottom: 1rem;
  text-align: center;
}

@media screen and (max-width: 600px) {
  .row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-color: whitesmoke;
    padding: 0 10rem;
    margin: 2rem 0;

  }
}
</style>