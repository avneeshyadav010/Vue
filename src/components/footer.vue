<template>
    <hr class="new4">
    <div class="footer">
        <div class="footer-item">
            <div class="footer-sub-item">
                <div><a href="#T&C" >Term and conditions</a></div>
                <div><a href="#P&P">Privacy and Policy</a></div>
                <div><a href="#FAQ">FAQs</a></div>
            </div>

        </div>
        <div class="footer-item">
            You are probably wondering if it is essential to take care of your website's footer.
        </div>
        <div class="footer-item">
            You are probably wondering if it is essential to take care of your website's footer.You are probably
            wondering if it is essential to take care of your website's footer.
        </div>
        <div class="footer-item">
            You are probably wondering if it is essential to take care of your website's footer.You are probably
            wondering if it is essential to take care of your website's footer.You are probably wondering if it is
            essential to take care of your website's footer.You are probably wondering if it is essential to take care
            of your website's footer.
        </div>

    </div>
</template>
<script>
export default {
    name: "FooterPage",
}
</script>
<style scoped>
hr.new4 {
    border: 1px solid green;
    margin: 4rem 10rem;
}

.footer {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.footer-item {
    margin: 1rem;
    font-size: small;
}

.footer-sub-item {
    display: flex;
    flex-direction: row;
    color: green;
    padding: 0 2rem;

}
a {
    color: green;
}
.footer-sub-item>div {
    margin: 1rem;
   
}
</style>
