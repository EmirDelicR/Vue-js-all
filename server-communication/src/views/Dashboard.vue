<template>
  <div id="dashboard">
    <h1>That's the dashboard!</h1>
    <p>You should only get here if you're authenticated!</p>
    <p>Email: {{ email }} </p>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Dashboard',
  data () {
    return {
      email: ''
    }
  },
  created () {
    axios.get(process.env.VUE_APP_DATA_BASE_URL + 'users.json')
      .then(res => {
        const data = res.data;
        const users = [];
        for (let key in data) {
          const user = data[key];
          user.id = key;
          users.push(user);
        }
        this.email = users[1].email;
      })
      .catch(err => console.log(err));
  }
}
</script>
<style scoped>
h1,
p {
  text-align: center;
}

p {
  color: red;
}
</style>