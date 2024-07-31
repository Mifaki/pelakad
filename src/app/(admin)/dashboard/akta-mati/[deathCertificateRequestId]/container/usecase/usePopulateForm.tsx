import { Form } from 'antd';
import { type IRootDeathCertificate } from '~/shared/models/aktamatiinterfaces';

export const useDeathCertificateRequestDetail = (
  data: IRootDeathCertificate | null,
) => {
  const [form] = Form.useForm();

  if (data) {
    form.setFieldsValue({
      id: data.id,
      full_name: data.full_name,
      phone_number: data.phone_number,
      nik_id: data.nik_id,
      kk_id: data.kk_id,
      family_card_image: data.family_card_image,
      reporter_identity_card_url: data.reporter_identity_card_url,
      deceased_identity_card_url: data.deceased_identity_card_url,
      death_certificate_url: data.death_certificate_url,
      witness_1_identity_card_url: data.witness_1_identity_card_url,
      witness_2_identity_card_url: data.witness_2_identity_card_url,
      sptjm_url: data.sptjm_url,
      statement_letter_of_true_death_data_url:
        data.statement_letter_of_true_death_data_url,
      request_status: data.request_status,
    });
  }

  return form;
};
