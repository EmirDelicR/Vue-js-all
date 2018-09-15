<template>
  <div class="component">
    <h1>The User Component</h1>
    <p>I'm an awesome User!</p>
    <button>Change my Name</button>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <app-user-detail></app-user-detail>
      </div>
      <div class="col-xs-12 col-sm-6">
        <app-user-edit></app-user-edit>
      </div>
    </div>
  </div>
</template>

<script>
import UserDetail from './UserDetail';
import UserEdit from './UserEdit';
export default {
  name: 'User',
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
