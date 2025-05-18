declare interface PaginationResponseProps<T> {
  data: T;
  last_page: number;
  limit: number;
  page: number;
  total: number;
}
