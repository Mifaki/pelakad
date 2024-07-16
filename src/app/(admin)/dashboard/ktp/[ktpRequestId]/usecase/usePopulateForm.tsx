import { Form } from 'antd';
import { type IRootKTP } from '~/shared/models/ktpinterfaces';

export const useKTPRequestDetail = (data: IRootKTP | null) => {
  const [form] = Form.useForm();

  if (data) {
    form.setFieldsValue({
      id: data.id,
      full_name: data.full_name,
      phone_number: data.phone_number,
      nik_id: data.nik_id,
      kk_id: data.kk_id,
      reason: data.reason,
      request_status: data.request_status,
    });
  }

  return form;
};
