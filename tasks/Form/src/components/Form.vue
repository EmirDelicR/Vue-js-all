<template>
  <div class="container">
    <form v-if="show" @submit.prevent>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <!-- Exercise 1 -->
          <!-- Create a Signup Form where you retrieve the following Information -->
          <!-- Full Name (First Name + Last Name) -->
          <!-- Mail -->
          <!-- Password -->
          <!-- Store Data? Yes/No -->

          <div class="panel panel-default">
            <div class="panel-heading">
              <h4>Singup Form</h4>
            </div>
            <div class="panel-body">

              <!-- Exercise 3 -->
              <!-- Edit the Example from above and create a custom "Full Name" Control -->
              <!-- which still holds the First Name and Last Name Input Field -->
              <label for="fname">First name: </label>
              <input name="fname" type="text" v-model="form.fname" />
              <hr />
              <label for="lname">Last name: </label>
              <input name="lname" type="text" v-model="form.lname" />
              <hr />
              <label for="mail">Mail: </label>
              <input name="mail" type="text" v-model="form.mail" />
              <hr />
              <label for="password">Password: </label>
              <input name="password" type="text" v-model="form.password" />
              <hr />
              <label for="store">Store data: </label> <br />
              <input type="radio" name="store" value="Yes" v-model="form.store">Yes
              <input type="radio" name="store" value="No" v-model="form.store">No
              <hr />
              <!-- Exercise 2 -->
              <!-- Only display the Form if it has NOT been submitted -->
              <!-- Display the Data Summary ONCE the Form HAS been submitted -->
              <button class="btn btn-primary" @click="show = !show">Save</button>
            </div>
          </div>

        </div>
      </div>
    </form>
    <hr>
    <div v-if="!show" class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Full Name: {{ fullName }} </p>
            <p>Mail: {{ form.mail }}</p>
            <p>Password: {{ form.password }}</p>
            <p>Store in Database?: {{ form.store }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Form',
  data () {
    return {
      show: true,
      form: {
        fname: '',
        lname: '',
        mail: '',
        password: '',
        store: 'Yes'
      }
    }
  },
  computed: {
    fullName () {
      return this.form.fname + ' ' + this.form.lname
    }
  }

}
</script>

<style scoped>
label {
  width: 15%;
}
</style>
