import { type IGeneralRequest } from './generalInterfaces';

export interface IAktaLahirPayload {
  full_name: string;
  phone_number: string;
  nik_id: string;
  kk_id: string;
  family_card_image: string[];
  father_identity_card_url: string;
  mother_identity_card_url: string;
  out_of_wedlock_letter_url: string;
  marriage_certificate_url: string[];
  witness_1_identity_card_url: string;
  witness_2_identity_card_url: string;
  marriage_book_url: string[];
  out_of_wedlock_image_url?: string;
}

export interface IRootBirthCertificate extends IGeneralRequest {
  full_name: string;
  phone_number: string;
  nik_id: string;
  kk_id: string;
  father_identity_card_url: string | null;
  mother_identity_card_url: string;
  out_of_wedlock_letter_url: string | null;
  marriage_certificate_url: string;
  createdAt: Date;
  updatedAt: Date | null;
}

export interface IBirthCertificateRelatedImages {
  family_card_image: string[];
  marriage_book_url: string[];
  witness_1_identity_card_url: string;
  witness_2_identity_card_url: string;
}
