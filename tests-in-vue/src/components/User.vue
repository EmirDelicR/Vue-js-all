<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <input v-model="username" data-username />
      <input type="submit" />
    </form>

    <form @submit.prevent="handleSubmitAsync">
      <input type="submit" />
    </form>

    <div class="message" v-show="submitted">Thank you for your submission, {{ username }}.</div>

    <div>
      <button @click="reverseName">Reverse</button>
    </div>
  </div>
</template>


<script>
export default {
  name: "User",
  props: {
    even: {
      type: Boolean,
      required: false
    }
  },
  data() {
    return {
      username: "",
      submitted: false,
      name: "Test"
    };
  },

  methods: {
    handleSubmit() {
      this.submitted = true;
    },
    reverseName() {
      let reverse = this.name
        .split("")
        .reverse()
        .join("");
      this.name = reverse;
    },
    handleSubmitAsync() {
      return this.$http
        .get("/api/v1/register", { username: this.username })
        .then(() => {
          this.submitted = true;
        })
        .catch(e => {
          throw Error("Something went wrong", e);
        });
    },
    testDirectCallFromTest(data) {
      return data.name.toLowerCase();
    }
  },
  computed: {
    numbers() {
      const evens = [];
      const odds = [];

      for (let i = 1; i < 10; i++) {
        if (i % 2 === 0) {
          evens.push(i);
        } else {
          odds.push(i);
        }
      }

      return this.even === true ? evens.join(", ") : odds.join(", ");
    },

    getTranslationString() {
      return word => {
        return this.$t(`${word} translated!`);
      };
    }
  }
};
</script>

<style>
</style>
