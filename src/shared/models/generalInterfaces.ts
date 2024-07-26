export interface IGeneralAPIResponse<T> {
  data: T | null;
  error: Error | null;
  isLoading: boolean;
}

export interface IGeneralRequest {
  id: string;
  request_status: TRequestStatus;
  feedback?: string | null;
}

export type TRequestStatus =
  | 'menunggu'
  | 'selesai'
  | 'dikembalikan'
  | 'diproses'
  | 'tanda-tangan';

export type TRequestReason = 'baru' | 'pindah datang' | 'hilang' | 'rusak';

export interface IStep {
  title: string;
  content: React.ReactNode;
}
