<template>
  <router-link 
    :to="{ name: 'EventDetails', params: { id: event.id } }"
    class="event-link"
    >
    <div class="event-card">
      <span>@{{ event.time }} on {{ event.date }}</span>
      <h4 class="title">{{ event.title }}</h4>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'EventCard',
  props: {
    event: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
.event-link {
  color: #39495c;
  text-decoration: none;
}
.title {
  text-decoration: underline;
  text-decoration-color: rgb(2, 100, 186);
}
</style>