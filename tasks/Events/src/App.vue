<template>
  <div id="app">
    <HelloWorld />
    <app-button button-text="Sparta" @sendDataToPerent="showMe" />
    <hr />
    <shopping-input />
    <shopping-list :shoppingList="shoppingList" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import CustomButton from './components/Button';
import ShoppingInput from './components/ShoppingInput';
import ShoppingList from './components/ShoppingList';
import EventBus from './EventBus';

export default {
  name: 'app',
  components: {
    HelloWorld,
    appButton: CustomButton,
    ShoppingInput,
    ShoppingList
  },
  data () {
    return {
      shoppingList: []
    }
  },
  methods: {
    showMe (childeValue) {
      console.log(childeValue);
    }
  },
  created () {
    EventBus.$on('addShoppingItem', (itemName) => {
      this.shoppingList.push(itemName);
    })
  },
}
</script>

<style></style>
