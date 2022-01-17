<template>
  <div>
    <p>vuex-left</p>

    <div>
      <button @click="addAction">add</button>
      <button @click="reduceAction(5)">reduce</button>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
export default {
  data() {
    return {
      leftMsg: 'left message'
    }
  },
  methods: {
    // add() {
    //   this.$store.commit('add', 10)
    // }
    ...mapMutations(['add', 'reduce']),
    ...mapActions(['addAction', 'reduceAction'])
  }
}
</script>

<style>

</style>