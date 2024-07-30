import { type IGeneralRequest } from './generalInterfaces';

export interface IFamilyCardPayload {
  full_name: string;
  phone_number: string;
  nik_id: string;
  kk_id: string;
  reason: string;
  new_card_reason: string;
  father_identity_card_url: string;
  mother_identity_card_url: string;
  husband_family_card_url: string;
  wife_family_card_url: string;
  husband_birth_certificate_url: string;
  wife_birth_certificate_url: string;
  old_family_card_url: string;
  element_change_statement_letter_url: string;
  broken_family_card_url: string;
  original_family_card_url: string;
  police_loss_report_url: string;
  marriage_book_url: string[];
  supporting_document_url: string[];
}

export interface IRootFamilyCardRequest extends IGeneralRequest {
  full_name: string;
  phone_number: string;
  nik_id: string;
  kk_id: string;
  reason: string;
  new_card_reason: string;
  father_identity_card_url: string | null;
  mother_identity_card_url: string;
  husband_family_card_url: string;
  wife_family_card_url: string;
  husband_birth_certificate_url: string;
  wife_birth_certificate_url: string;
  old_family_card_url: string;
  element_change_statement_letter_url: string;
  broken_family_card_url: string;
  original_family_card_url: string;
  police_loss_report_url: string;
  marriage_book_url: string[];
  supporting_document_url: string[];
}
