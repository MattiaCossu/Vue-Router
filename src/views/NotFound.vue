<template>
    <h1>404 - {{ resource }} Not Found</h1>
    <p>Sorry, the {{ resource }} you are looking for does not exist.</p>
    <router-link :to = "{ name: 'EventList'}">Back to the home page</router-link>
</template>

<script>
export default {
    props: {
        resource: {
        type: String,
        required: true,
        default: 'page'
    }
  }
};
</script>