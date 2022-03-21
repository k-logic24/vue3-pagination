import { reactive, computed } from 'vue';

export default function usePagination(items: number[]) {
  const state = reactive({
    perPage: 30,
    paged: 1,
  });
  const startIdx = computed(() => (state.paged - 1) * state.perPage);
  const endIdx = computed(() => startIdx.value + state.perPage);
  const isPrev = computed(() => state.paged === 1);
  const isNext = computed(() => ((state.perPage * state.paged) > items.length));
  const newItems = computed(() => items.slice(startIdx.value, endIdx.value));

  const onNext = () => {
    state.paged += 1;
  };

  const onPrev = () => {
    state.paged -= 1;
  };

  return {
    state,
    newItems,
    onNext,
    onPrev,
    isPrev,
    isNext,
  };
}

export type PaginationStore = ReturnType<typeof usePagination>
