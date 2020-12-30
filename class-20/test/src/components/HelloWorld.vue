<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
        This is my first Vue@3.0.0 App
        {{ numbers }}
        {{step}}
        <button v-on:click.prevent="printNums">Print Numbers in Console</button>
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    numbers: Array,
  },
  data() {
    return {
      step: 0,
    }
  },
  methods: {
    printNums() {
      var numbers = this.numbers.filter(n => n % 2 == 0);
      console.log(numbers);
    }
  },
  created() {
    console.log(this.numbers);
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
