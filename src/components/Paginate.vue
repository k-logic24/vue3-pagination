<template>
  <div class="d-flex gap-3">
    <button
      type="button"
      class="btn btn-primary"
      @click="onPrev"
      :disabled="isPrev"
    >
      &lt; Prev
    </button>
    <button
      type="button"
      class="btn btn-primary"
      @click="onNext"
      :disabled="isNext"
    >
      Next &gt;
    </button>
  </div>
</template>

<script>
import { defineComponent, inject } from 'vue';

import PaginationKey from '@/store/pagination/use-pagination-key';

export default defineComponent({
  setup() {
    const {
      onPrev,
      onNext,
      isPrev,
      isNext,
    } = inject(PaginationKey);

    return {
      onPrev,
      onNext,
      isPrev,
      isNext,
    };
  },
});
</script>
