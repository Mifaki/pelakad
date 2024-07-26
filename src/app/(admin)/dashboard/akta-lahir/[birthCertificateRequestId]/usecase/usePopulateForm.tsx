import { Form } from 'antd';
import { type IRootBirthCertificate } from '~/shared/models/aktalahirinterfaces';

export const useBirthCertificateRequestDetail = (
  data: IRootBirthCertificate | null,
) => {
  const [form] = Form.useForm();

  if (data) {
    form.setFieldsValue({
      id: data.id,
      full_name: data.full_name,
      phone_number: data.phone_number,
      nik_id: data.nik_id,
      kk_id: data.kk_id,
      father_identity_card_url: data.father_identity_card_url,
      mother_identity_card_url: data.mother_identity_card_url,
      out_of_wedlock_letter_url: data.out_of_wedlock_letter_url,
      marriage_certificate_url: data.marriage_certificate_url,
      family_card_image: data.family_card_image,
      marriage_book_url: data.marriage_book_url,
      witness_1_identity_card_url: data.witness_1_identity_card_url,
      witness_2_identity_card_url: data.witness_2_identity_card_url,
      request_status: data.request_status,
    });
  }

  return form;
};
