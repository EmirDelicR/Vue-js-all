<template>
  <div class="component">
    <h1>The User Component</h1>
    <p>I'm an awesome User!</p>
    <button @click="changeName">Change my Name</button>
    <p>Name is {{ name }}</p>
    <p>Age: {{ age }}</p>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <app-user-detail :myName="name" :userAge="age" :resetFn="resetName" @nameWasReset="name = $event"></app-user-detail>
      </div>
      <div class="col-xs-12 col-sm-6">
        <app-user-edit :userAge="age" @ageWasEdited="age = $event"></app-user-edit>
      </div>
    </div>
  </div>
</template>

<script>
import UserDetail from './UserDetail';
import UserEdit from './UserEdit';
export default {
  name: 'User',
  data: function () {
    return {
      name: 'TestName',
      age: 27
    };
  },
  methods: {
    changeName () {
      this.name = "Emir";
    },
    resetName () {
      this.name = "Reset Callback"
    }
  },
  components: {
    appUserDetail: UserDetail,
    appUserEdit: UserEdit
  }
}
</script>


<style scoped lang="scss">
div {
  background-color: lightblue;
}
</style>
