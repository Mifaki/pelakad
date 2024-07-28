import { Form } from 'antd';
import { type IRootFamilyCardRequest } from '~/shared/models/familycardinterfaces';

export const useFamilyCardRequestDetail = (
  data: IRootFamilyCardRequest | null,
) => {
  const [form] = Form.useForm();

  if (data) {
    form.setFieldsValue({
      id: data.id,
      full_name: data.full_name,
      phone_number: data.phone_number,
      nik_id: data.nik_id,
      kk_id: data.kk_id,
      reason: data.reason,
      new_card_reason: data.new_card_reason,
      father_identity_card_url: data.father_identity_card_url,
      mother_identity_card_url: data.mother_identity_card_url,
      husband_family_card_url: data.husband_family_card_url,
      wife_family_card_url: data.wife_family_card_url,
      husband_birth_certificate_url: data.husband_birth_certificate_url,
      wife_birth_certificate_url: data.wife_birth_certificate_url,
      old_family_card_url: data.old_family_card_url,
      element_change_statement_letter_url:
        data.element_change_statement_letter_url,
      broken_family_card_url: data.broken_family_card_url,
      original_family_card_url: data.original_family_card_url,
      police_loss_report_url: data.police_loss_report_url,
      marriage_book_url: data.marriage_book_url,
      supporting_document_url: data.supporting_document_url,
      request_status: data.request_status,
    });
  }

  return form;
};
