import {
  type TRequestReason,
  type TRequestStatus,
  type IGeneralRequest,
} from './generalInterfaces';

export interface IRootKTP extends IGeneralRequest {
  contact: string;
  full_name: string;
  nik_id: string;
  kk_id: string;
  reason: TRequestReason;
  family_card_url: string;
  birth_certificate_url: string;
  foreign_move_cert_url?: string;
  damaged_ktp_url?: string;
  police_report_url?: string;
}

export interface IPayloadKTP {
  contact: string;
  full_name: string;
  nik_id: string;
  kk_id: string;
  reason: TRequestReason;
  family_card_url: string;
  birth_certificate_url: string;
  foreign_move_cert_url?: string;
  damaged_ktp_url?: string;
  police_report_url?: string;
  marriage_book_url: string[];
}

export interface IKTPRelatedImages {
  marriage_book_url: string[];
}
