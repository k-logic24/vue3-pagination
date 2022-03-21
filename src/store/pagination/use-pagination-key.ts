import { InjectionKey } from 'vue';
import { PaginationStore } from './use-pagination';

const PaginationKey: InjectionKey<PaginationStore> = Symbol('PaginationStore');
export default PaginationKey;
