export interface IGeneralAPIResponse<T> {
  data: T | null;
  error: Error | null;
  isLoading: boolean;
}

export interface IGeneralRequest {
  id: string;
  request_status: 'menunggu' | 'selesai' | 'dikembalikan' | 'diproses';
  feedback?: string;
}

export type TRequestStatus =
  | 'menunggu'
  | 'selesai'
  | 'dikembalikan'
  | 'diproses';

export type TRequestReason = 'baru' | 'pindah datang' | 'hilang' | 'rusak';
