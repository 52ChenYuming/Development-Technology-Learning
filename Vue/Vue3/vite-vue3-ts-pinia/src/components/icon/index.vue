<template>
  <icon-font type="icon-tuichu" />
</template>
<script lang="ts">
import { createFromIconfontCN } from '@ant-design/icons-vue';

// 去色板
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});
export default {
  components: {
    IconFont,
  },
  props: {
    type: {
      type: String,
      require: true
    }
  }
};
</script>
<style scoped>
.icons-list :deep(.anticon) {
  margin-right: 6px;
  font-size: 24px;
}
</style>
