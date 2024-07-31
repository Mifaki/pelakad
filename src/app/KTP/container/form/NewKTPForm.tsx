import {
  Form,
  type FormInstance,
  Input,
  Radio,
  type RadioChangeEvent,
} from 'antd';
import CusttomInputLabel from '~/shared/container/custom-input-label/CustomInputLabel';
import { type TRequestReason } from '~/shared/models/generalInterfaces';
import { type IPayloadKTP } from '~/shared/models/ktpinterfaces';
import CloudUpload from '~/shared/container/cloud-upload/CloudUpload';

const NewKTPForm = ({ form }: { form: FormInstance<any> }) => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Form.Item
          name="birth_certificate_url"
          label={
            <CusttomInputLabel>
              Akta Kelahiran<span className="text-gray-600"></span>
            </CusttomInputLabel>
          }
          rules={[{ required: true, message: 'Akta Kelahiran diperlukan!' }]}
        >
          <CloudUpload name="birth_certificate_url" form={form} />
        </Form.Item>

        <Form.Item
          name="family_card_url"
          label={
            <CusttomInputLabel>
              Kartu Keluarga<span className="text-gray-600"></span>
            </CusttomInputLabel>
          }
          rules={[{ required: true, message: 'Kartu keluarga diperlukan!' }]}
        >
          <CloudUpload name="family_card_url" form={form} />
        </Form.Item>

        <Form.Item
          name="marriage_book_url"
          label={
            <CusttomInputLabel>
              Buku nikah
              <span className="text-gray-600"> / Kutipan Akta Perkawinan</span>
            </CusttomInputLabel>
          }
          rules={[
            {
              required: true,
              message: 'Buku nikah Legalisir KUA diperlukan!',
            },
          ]}
        >
          <CloudUpload name="marriage_book_url" form={form} />
        </Form.Item>
      </div>
    </>
  );
};

export default NewKTPForm;
