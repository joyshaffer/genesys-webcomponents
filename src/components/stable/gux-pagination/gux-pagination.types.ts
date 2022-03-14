export type GuxItemsPerPage = 25 | 50 | 75 | 100;

export type GuxPaginationLayout = 'small' | 'full';

export type GuxPaginationState = {
  currentPage: number;
  itemsPerPage: number;
};
