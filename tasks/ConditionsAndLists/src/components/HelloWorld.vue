<template>
  <div id="exercise">
    <!-- 1) Hook up the button to toggle the display of the two paragraphs. Use both v-if and v-show and inspect the elements to see the difference -->
    <div>
      <button @click="show = !show">Toggle</button>
      <p v-if="show">You either see me ...</p>
      <p v-else>...or me</p>
      <p v-show="show">You either see me ...</p>
      <p v-show="!show">...or me</p>
    </div>
    <!-- 2) Output an <ul> of array elements of your choice. Also print the index of each element. -->
    <ul>
      <li v-for="(value, key) in array" :key="key">[key: {{key}}, value: {{value}}]</li>
    </ul>
    <!-- 3) Print all key-value pairs of the following object: {title: 'Lord of the Rings', author: 'J.R.R. Tolkiens', books: '3'}. Also print the index of each item. -->
    <ul>
      <li v-for="(value, key) of myObject" :key="key">[key: {{key}}, value: {{value}}] </li>
    </ul>
    <!-- 4) Print the following object (only the values) and also create a nested loop for the array: {name: 'TESTOBJECT', data: [1.67, 1.33, 0.98, 2.21]} (hint: use v-for and v-if to achieve this) -->
    <ul>
      <li v-for="(value, key) of testData" :key="key">
        <template v-if="Array.isArray(value)">
          <ul>
            <li v-for="(value, key) in value" :key="key">{{value}}</li>
          </ul>
        </template>
        <template v-else>
          {{ value }}
        </template>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      array: ['Max', 'Anna', 'Chris', 'Manu'],
      myObject: {
        title: 'Lord of the Rings',
        author: 'J.R.R. Tolkiens',
        books: '3'
      },
      testData: {
        name: 'TESTOBJECT',
        id: 10,
        data: [1.67, 1.33, 0.98, 2.21]
      },
      show: true,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
