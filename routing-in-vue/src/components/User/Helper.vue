<template>
  <div>
    <p>User Helper page</p>
  </div>
</template>

<script>
export default {
  props: {
    prop: {
      type: String
    }
  },
  name: "helper",
  mounted() {
    console.log("This is passed: ", this.$props.prop);
  }
};
</script>
