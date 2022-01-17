<template>
  <div>
    <p>vuex-right</p>
    <p>{{$store.state.home.count}} -- {{count}}</p>
    <p>{{newCount}}</p>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  data() {
    return {
      msg: '',
      test: ''
    }
  },
  computed: {
    ...mapState({
      count: state => state.home.count
    }),
    ...mapGetters(['newCount'])
  }
}
</script>

<style>

</style>