<template>
  <div id="app">
    <img src="./assets/logo.png" alt="">
    <!-- <Child :message="msg"></Child> -->
    <!-- <Child2 @sub="child2Sub"></Child2>
    <p>{{fromChild2}}</p> -->

    <!-- <div class="page">
      <Left @sub="leftSub"></Left>
      <Right :fromLeft="fromLeft"></Right>
    </div> -->

    <div class="page">
      <Left></Left>
      <Right></Right>
    </div>
  </div>
</template>

<script>
// import Child from './components/child.vue'
// import Child2 from './components/child2.vue'

// import Left from './components/comment/left.vue'
// import Right from './components/comment/right.vue'

// import Left from './components/eventBus/lefts.vue'
// import Right from './components/eventBus/rights.vue'

import Left from './components/vuex/lefts.vue'
import Right from './components/vuex/rights.vue'
export default {
  name: 'App',
  data() {
    return {
      msg: 'App给child准备的数据',
      fromChild2: '',
      fromLeft: ''
    }
  },
  components: {
    // Child
    // Child2
    Left,
    Right
  },
  methods: {
    leftSub(e) {
      console.log(e);
      this.fromLeft = e
    },
    child2Sub(e) {
      console.log(e, '---------');
      this.fromChild2 = e
    }
  }
}
</script>

<style>
.page{
  display: flex;
  text-align: center;
  font-size: 20px;
}
.page > div{
  flex: 1;
  border: 1px solid #000;
  min-height: 400px;
}
</style>
