<template>
  <div class="about">
    <form>
      <h1 class="title">{{form.formName}}</h1>

      <div class="field">
        <label class="label">Form name</label>
        <input class="input" id="form-name-id" type="text" data-cy="form-name-inp" value />
      </div>
      <br />
      <button data-cy="form-button" @click.prevent="changeFormName">Change Form Name</button>
      <br />
      <br />
      <hr />
      <div class="field">
        <label class="label">Favorite Color</label>
        <select v-model="form.favoriteColor" data-cy="form-color-select" title="Test hover">
          <option v-for="color in ['Red', 'Blue', 'Green']" :value="color" :key="color">{{color}}</option>
        </select>
      </div>
      <br />

      <div class="field">
        <label class="label">Favorite Hamburger Place</label>
        <div class="control" data-cy="form-radio-burger">
          <label>
            <input type="radio" value="whataburger" v-model="form.favoriteHamburger" />
            Whataburger
          </label>
          <br />
          <label>
            <input type="radio" value="pterrys" v-model="form.favoriteHamburger" />
            P.Terry's
          </label>
          <br />
          <label>
            <input type="radio" value="hopdoddy" v-model="form.favoriteHamburger" />
            Hopdoddy
          </label>
        </div>
      </div>
      <br />

      <div class="field">
        <label class="label">Favorite Hangout</label>
        <div class="control" data-cy="form-radio-favorite">
          <label>
            <input type="checkbox" value="barton-springs" v-model="form.favoriteHangout" />
            Barton Springs
          </label>
          <br />
          <label>
            <input type="checkbox" value="zilker-park" v-model="form.favoriteHangout" />
            Zilker Park
          </label>
          <br />
          <label>
            <input type="checkbox" value="sixth-stree" v-model="form.favoriteHangout" />
            Sixth Street
          </label>
        </div>
      </div>

      <div class="field">
        <label class="label">How many hours a week do you work?</label>
        <div class="control">
          <h4 class="title is-4">{{form.workHours}} / 80</h4>
          <input type="range" min="0" max="80" v-model="form.workHours" data-cy="form-range-inp" />
        </div>
      </div>
      <br />
      <br />
      <input
        class="button is-primary margin-bottom"
        type="submit"
        data-cy="form-button-submit"
        @click.prevent="fakeSubmit"
      />
    </form>

    <transition name="fade" mode="out-in">
      <div class="message is-primary" v-if="showSubmitFeedback">Successfully Submitted!</div>
    </transition>

    <hr />

    <h5>JSON</h5>
    <pre><code>{{form}}</code></pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        formName: "Tell Us About Yourself",
        favoriteColor: "Red",
        favoriteHamburger: "",
        favoriteHangout: [],
        workHours: 0
      },
      showSubmitFeedback: false
    };
  },
  methods: {
    fakeSubmit() {
      this.showSubmitFeedback = true;
      setTimeout(() => {
        this.showSubmitFeedback = false;
      }, 3000);
    },
    changeFormName() {
      const newFormName = document.getElementById("form-name-id").value;
      if (newFormName.trim() === "") {
        return;
      }
      this.form.formName = newFormName;
    }
  }
};
</script>
<style scoped>
.margin-bottom {
  margin-bottom: 15px;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
</style>