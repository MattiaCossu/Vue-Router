<template>
    <div class="wrapper" v-if="GStore.event">
        <h1>{{ GStore.event.title }}</h1>
        <div class="nav">
            <router-link class="link" :to="{ name: 'EventDetails' }">Details</router-link>
            <hr />
            <router-link class="link" :to="{ name: 'EventRegister' }">Register</router-link>
            <hr />
            <router-link class="link" :to="{ name: 'EventEdit' }">Edit</router-link>
        </div>
        <router-view :event="GStore.event" />
        <div class="back">
            <router-link :to="{ name: 'EventList' }" rel="back">&#60; Back</router-link>
        </div>
    </div>
</template>

<script>
export default {
    inject: ['GStore'],
};
</script>

<style scoped>
h1 {
    color: #2c3e50;
    text-decoration: underline;
    text-decoration-color: rgb(2, 100, 186);
}

.wrapper {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center
}

.nav {
    display: flex;
    flex-direction: row;
    padding: 30px;
}

.nav a.link {
    font-weight: bold;
    color: #2c3e50;
}

.back {
    display: flex;
    width: 290px;
    margin: 16px;
}

.back a {
    text-decoration: none;
    color: #2c3e50;
}
</style>