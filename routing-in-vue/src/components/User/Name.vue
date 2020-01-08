<template>
  <div>
    <p>User Name page</p>
  </div>
</template>

<script>
export default {
  name: "name",
  props: {
    someProp: {
      type: String,
      required: true
    }
  },
  mounted() {
    console.log("SomeProp From View Directly: ", this.$props.someProp);
  }
};
</script>
