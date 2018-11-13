<template>
  <div>
    <button @click="logBaseUrl">Log base URL</button>
    <hr />

    <h1>Courses <small> (press on course to edit)</small></h1>

    <div v-for="course in courses" :key="course.id">
      <p @click="setEdit" v-if="!editing">
        {{course.name}}
      </p>
      <div v-else>
        <input type="text" v-model="course.name">
        <button @click="saveCourse(course)">Save</button>
        <button @click="removeCourse(course)">Remove</button>
      </div>
    </div>
    <div v-if="!editing">
      <input type="text" placeholder="Input Course name" v-model.trim="courseName">
      <button @click="addCourse">Add Course</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'AxiosTutorial',
  data () {
    return {
      API_URL: 'http://localhost:3000/courses',
      courses: [],
      courseName: '',
      editing: false
    }
  },
  methods: {
    logBaseUrl () {
      console.log(process.env.BASE_URL);
    },
    addCourse () {
      const name = this.courseName;
      if (name) {
        axios
          .post(this.API_URL, { name })
          .then((res) => {
            this.courses.push(res.data);
            this.courseName = '';
          })
          .catch(err => console.log(err));
      }
    },
    setEdit () {
      this.editing = !this.editing;
    },
    // Can access course in this way insted of using this
    saveCourse (course) {
      this.setEdit();
      axios
        .put(`${this.API_URL}/${course.id}`, { ...course })
        .then(res => {
          console.log(res.data);
        })
        .catch(err => console.log(err));
    },
    removeCourse (course) {
      axios
        .delete(`${this.API_URL}/${course.id}`)
        .then(res => {
          this.setEdit();
          this.courses = this.courses.filter(c => c.id != course.id);
        })
        .catch(err => console.log(err));
    },
  },
  created () {
    axios.get(this.API_URL)
      .then((res) => {
        // console.log(res.data);
        this.courses = res.data;
      })
      .catch((err) => {
        console.log(err)
      })
  }

}
</script>

<style scoped>
</style>
