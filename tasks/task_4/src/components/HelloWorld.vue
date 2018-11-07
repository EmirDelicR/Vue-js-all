<template>
  <div id="exercise">
    <!-- 1) Start the Effect with the Button. The Effect should alternate the "highlight" or "shrink" class on each new setInterval tick (attach respective class to the div with id "effect" below) -->
    <div>
      <button @click="startEffect">Start Effect</button>
      <div id="effect" :class="efect"></div>
    </div>
    <!-- 2) Create a couple of CSS classes and attach them via the array syntax -->
    <div :class="[ 'backColor', font ]">I got no class :(</div>
    <!-- 3) Let the user enter a class (create some example classes) and attach it -->
    <div>
      <input type="text" v-model="inputClass">
      <div :class="inputClass">Input class for this (fontColor)</div>
    </div>
    <!-- 4) Let the user enter a class and enter true/ false for another class (create some example classes) and attach the classes -->
    <div>
      <input type="text" v-model="userClass" placeholder="Input class name (fontColor)">
      <input type="text" v-model="show" placeholder="Input true or false">
      <div :class="[{highlight: show }, userClass]">Applay efect to this div</div>
    </div>
    <!-- 5) Repeat 3) but now with values for styles (instead of class names). Attach the respective styles.  -->
    <div>
      <input type="text" v-model="styles.backgroundColor" placeholder="Input some color">
      <div :style="styles"></div>
    </div>
    <!-- 6) Create a simple progress bar with setInterval and style bindings. Start it by hitting the below button. -->
    <div>
      <button v-on:click="startProgress">Start Progress</button>
      <div class="outherDiv">
        <div :style="progress"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      efect: 'highlight',
      font: 'fontColor',
      inputClass: '',
      userClass: '',
      show: false,
      styles: {
        width: '60px',
        height: '60px',
        backgroundColor: 'green'
      },
      progress: {
        width: '0',
        backgroundColor: 'blue',
        height: '40px'
      }

    }
  },
  methods: {
    startEffect () {
      setInterval(() => {
        this.efect = this.efect === 'highlight' ? 'shrink' : 'highlight';
      }, 1000);
    },
    startProgress () {
      let size = 0;
      let interval = setInterval(() => {
        size += 10;
        this.progress.width = size + "%";
        if (size === 100) {
          clearInterval(interval)
        }
      }, 1000);

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#effect {
  width: 100px;
  height: 100px;
  border: 1px solid black;
}
.backColor {
  background: red;
}

.fontColor {
  color: blue;
}

.highlight {
  background-color: red;
  width: 200px !important;
}

.shrink {
  background-color: gray;
  width: 50px !important;
}

.outherDiv {
  width: 100%;
  height: 40px;
  background-color: blanchedalmond;
}
</style>
