export interface IGeneralAPIResponse<T> {
  data: T | null;
  error: Error | null;
  isLoading: boolean;
}

export interface IGeneralRequest {
  id: string;
  request_status: 'menunggu' | 'selesai' | 'dikembalikan';
  feedback?: string;
}
