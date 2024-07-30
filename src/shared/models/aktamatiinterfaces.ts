import { type IGeneralRequest } from './generalInterfaces';

export interface IAktaMatiPayload {
  full_name: string;
  phone_number: string;
  nik_id: string;
  kk_id: string;
  family_card_image: string;
  reporter_identity_card_url: string;
  deceased_identity_card_url: string;
  death_certificate_url: string;
  witness_1_identity_card_url: string;
  witness_2_identity_card_url: string;
  sptjm_url: string;
  statement_letter_of_true_death_data_url: string;
}

export interface IRootDeathCertificate extends IGeneralRequest {
  full_name: string;
  phone_number: string;
  nik_id: string;
  kk_id: string;
  reporter_identity_card_url: string;
  deceased_identity_card_url: string;
  death_certificate_url: string;
  sptjm_url: string;
  statement_letter_of_true_death_data_url: string;
  family_card_image: string;
  witness_1_identity_card_url: string;
  witness_2_identity_card_url: string;
  createdAt: Date;
  updatedAt: Date | null;
}
