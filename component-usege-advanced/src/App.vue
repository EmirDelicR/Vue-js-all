<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <button @click="sleectedComponent = 'appQuote'">Quote</button>
        <button @click="sleectedComponent = 'appAuthor'">Author</button>
        <button @click="sleectedComponent = 'appNew'">New</button>
        <hr/>
        <p>{{ sleectedComponent }}</p>
        <component :is="sleectedComponent">
          <h2 slot="title">{{ quoteTitle }}</h2>
          <p slot="content">A wonderful quote!</p>
        </component>
        <!-- 
        <app-quote>
          <h2 slot="title">{{ quoteTitle }}</h2>
          <p slot="content">A wonderful quote!</p>
        </app-quote>
        -->
      </div>
    </div>
  </div>
</template>

<script>
import Quote from './components/Quote';
import Author from './components/Author';
import New from './components/New';

export default {
  name: 'app',
  data: function () {
    return {
      quoteTitle: 'The Quote',
      sleectedComponent: 'appQuote'
    }
  },
  components: {
    appQuote: Quote,
    appAuthor: Author,
    appNew: New
  }
}
</script>

<style>
</style>
