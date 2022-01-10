<template>
  <div class="detail">
    这里是详情页 -----{{$route.query.index}}
    <img :src="imgUrl[$route.query.index]"
         alt=""
         class="img">
  </div>

</template>

<script>
export default {
  data () {
    return {
      imgUrl: [
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg9.51tietu.net%2Fpic%2F2019-091017%2F4xfpqtop3gh4xfpqtop3gh.jpg',
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg10.51tietu.net%2Fpic%2F20191029%2F5wgfsnkyjw15wgfsnkyjw1.jpg',
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2Ftp05%2F191001203AH510-0-lp.jpg',
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.jj20.com%2Fup%2Fallimg%2F1114%2F0G020114924%2F200G0114924-6-1200.jpg'
      ]
    }
  }
}
</script>

<style>
.img {
  width: 500px;
}
</style>