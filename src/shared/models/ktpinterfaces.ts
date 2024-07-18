import {
  type TRequestReason,
  type TRequestStatus,
  type IGeneralRequest,
} from './generalInterfaces';

export interface IRootKTP extends IGeneralRequest {
  phone_number: string;
  full_name: string;
  nik_id: string;
  kk_id: string;
  reason: TRequestStatus;
}

export interface IPayloadKTP {
  full_name: string;
  phone_number: string;
  nik_id: string;
  kk_id: string;
  reason: TRequestReason;
  request_status: TRequestStatus;
}
