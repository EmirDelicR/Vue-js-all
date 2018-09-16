<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Build-in Directive</h1>
        <p v-text="'Some text'"></p>
        <p v-html="'<strong>Some strong text</string>'"></p>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Custom Directive</h1>
        <h3>Global</h3>
        <p v-changecolor:background.delayed="'red'">Color this</p>
        <p v-changecolor="'blue'">Color this</p>
        <h3>Local</h3>
        <p v-localChangeColor:background.delayed.blink="{ mainColor : 'red', secondColor: 'green', delay: 500}">Color this</p>
        <p v-localChangeColor="{ mainColor : 'blue'}">Color this</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  directives: {
    localChangeColor: {
      bind (el, binding, vnode) {
        let delay = 0;
        if (binding.modifiers["delayed"]) {
          delay = 3000;
        }
        if (binding.modifiers["blink"]) {
          let mainColor = binding.value.mainColor;
          let secondColor = binding.value.secondColor;
          let currentColor = mainColor;

          setTimeout(() => {
            setInterval(() => {
              currentColor = currentColor == secondColor ? mainColor : secondColor;
              if (binding.arg == "background") {
                el.style.backgroundColor = currentColor;
              } else {
                el.style.color = currentColor;
              }
            }, binding.value.delay);

          }, delay);

        } else {
          setTimeout(() => {
            // arguments
            if (binding.arg == "background") {
              el.style.backgroundColor = binding.value.mainColor;
            } else {
              el.style.color = binding.value.mainColor;
            }
          }, delay);
        }
      }
    }
  },
}
</script>

<style>
</style>
