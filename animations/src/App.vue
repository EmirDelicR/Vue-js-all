<template>
  <div id="app" class="container">
    <!--<IntroToAnimation />-->
    <div class="row">
      <div class="col-md-6 offset-md-3 text-center">
        <h1>Quiz</h1>
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <transition name="flip" mode="out-in">
          <component :is="mode" @answered="answered($event)" @confirmed="mode = 'app-question'"></component>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import IntroToAnimation from './components/IntroToAnimation.vue';
import Answer from './components/Answer.vue';
import Question from './components/Question.vue';

export default {
  name: 'app',
  components: {
    IntroToAnimation,
    appQuestion: Question,
    appAnswer: Answer
  },
  data () {
    return {
      mode: 'app-question'
    }
  },
  methods: {
    answered (isCorrect) {
      if (isCorrect) {
        this.mode = 'app-answer';
      } else {
        this.mode = 'app-question';
        alert("Wrong , try again!")
      }
    }
  },
}
</script>

<style lang="scss">
.flip-enter-active {
  animation: flip-in 1s ease-out forwards;
}

.flip-leave-active {
  animation: flip-out 1s ease-out forwards;
}

@keyframes flip-out {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(90deg);
  }
}

@keyframes flip-in {
  from {
    transform: rotateY(90deg);
  }
  to {
    transform: rotateY(0deg);
  }
}
</style>
