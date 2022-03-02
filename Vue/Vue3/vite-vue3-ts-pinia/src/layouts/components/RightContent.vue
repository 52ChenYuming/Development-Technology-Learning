<template>
  <a-dropdown>
    <a class="ant-dropdown-link" @click.prevent>
      {{store.auths[0]}}
      <DownOutlined />
    </a>
    <template #overlay>
      <a-menu>
        <a-menu-item v-for="(item,index) in myNavs" :key="index">
          <a href="javascript:;">{{item.name}}</a>
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { DownOutlined } from '@ant-design/icons-vue';
import { navs } from './content';
import { useUserStore } from '../../store/modules/user';

export default defineComponent({
  components: {
    DownOutlined,
  },
  setup() {
    const myNavs = ref(navs)
    const store = useUserStore()
    return {
      myNavs,
      store
    }
  }
});
</script>

<style scoped>
.ant-dropdown-link {
  color: #000;
}
</style>

