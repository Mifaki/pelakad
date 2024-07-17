import { type IGeneralRequest } from './generalInterfaces';

export interface IRootKTP extends IGeneralRequest {
  phone_number: string;
  full_name: string;
  nik_id: string;
  kk_id: string;
  reason: 'baru' | 'hilang' | 'pindah datang' | 'rusak';
}
