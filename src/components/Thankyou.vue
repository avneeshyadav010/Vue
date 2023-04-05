<template>
    <HeaderPage />
    <div class="container">
        <div>
            <h1>Thankyou</h1>
        <h3>Your Ground Has Been Booked</h3>
        </div>
    </div>
    <FooterPage />
</template>
<script>
import HeaderPage from './header.vue'
import FooterPage from './footer.vue'
export default {
    name : "ThankYou",
    components : {
        HeaderPage,
        FooterPage
    }
}

</script>
<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: whitesmoke;
    padding: 0 10rem;
    height: 100vh;
    color: green;
    margin: 2rem;
}
</style>