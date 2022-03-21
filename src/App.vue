<template>
  <div class="py-5 container">
    <List />
    <Paginate />
  </div>
</template>

<script lang="ts">
import { defineComponent, provide } from 'vue';

import List from '@/components/List.vue';
import Paginate from '@/components/Paginate.vue';

import PaginationKey from '@/store/pagination/use-pagination-key';
import usePagination from '@/store/pagination/use-pagination';

export default defineComponent({
  name: 'App',
  components: {
    List,
    Paginate,
  },
  setup() {
    const items = [...Array(160)].map((_: unknown, i: number) => i);
    provide(PaginationKey, usePagination(items));
  },
});
</script>
