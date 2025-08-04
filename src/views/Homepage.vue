<template>
    <div class="homepage">
        <h1>Welcome to the Homepage</h1>
        <router-link to="/about">
            <button class="about-btn">Go to About Page</button>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'Homepage'
}
</script>

<style scoped>
.homepage {
    text-align: center;
    margin-top: 50px;
}

.about-btn {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
}
</style>