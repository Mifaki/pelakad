import { Form } from 'antd';
import { type IRootKTP } from '~/shared/models/ktpinterfaces';

export const useKTPRequestDetail = (data: IRootKTP | null) => {
  const [form] = Form.useForm();

  if (data) {
    form.setFieldsValue({
      id: data.id,
      full_name: data.full_name,
      contact: data.contact,
      nik_id: data.nik_id,
      kk_id: data.kk_id,
      reason: data.reason,
      request_status: data.request_status,
      family_card_url: data.family_card_url,
      birth_certificate_url: data.birth_certificate_url,
    });
  }

  return form;
};
