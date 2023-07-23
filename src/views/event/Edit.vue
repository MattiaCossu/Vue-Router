<template>
  <p>Edit the event here</p>
</template>
  
  <script>
export default {
  props: ['event'],
  data() {
    return {
      unsevedChanges: true,
    };
  },
  beforeRouteLeave() {
    if (this.unsevedChanges) {
      const answer = window.confirm(
        'You have unsaved changes. Are you sure you want to leave?'
      );
      if (!answer) return false
    }
  }
};
</script>
  
  <style>
</style>