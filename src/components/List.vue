<template>
  <ul>
    <li v-for="item in newItems" :key="item">
      items{{ item + 1 }}
    </li>
  </ul>
</template>

<script>
import { defineComponent, inject } from 'vue';

import PaginationKey from '@/store/pagination/use-pagination-key';

export default defineComponent({
  setup() {
    const { newItems } = inject(PaginationKey);
    return {
      newItems,
    };
  },
});
</script>
