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

type IAddKTPRequestForm = {
  form: FormInstance<IPayloadKTP>;
  radioValue: TRequestReason;
  handleRadioChange: (e: RadioChangeEvent) => void;
  handleMutate: (values: IPayloadKTP) => Promise<void>;
};

const NewKTPForm = ({
  form,
  radioValue,
  handleRadioChange,
  handleMutate,
}: IAddKTPRequestForm) => {
  return (
    <Form<IPayloadKTP>
      form={form}
      layout="vertical"
      onFinish={handleMutate}
      className="p-4"
    >
      <div className="flex flex-col items-center gap-0 md:flex-row md:gap-4">
        <div className="w-full basis-1/2">
          <Form.Item
            name="birth_certificate_image"
            label={
              <CusttomInputLabel>
                Akta Kelahiran<span className="text-gray-600"></span>
              </CusttomInputLabel>
            }
            rules={[{ required: true, message: 'Akta Kelahiran diperlukan!' }]}
          >
            <CloudUpload name="birth_certificate_image" form={form} />
          </Form.Item>

          <Form.Item
            name="family_card_image"
            label={
              <CusttomInputLabel>
                Kartu Keluarga<span className="text-gray-600"></span>
              </CusttomInputLabel>
            }
            rules={[{ required: true, message: 'Kartu keluarga diperlukan!' }]}
          >
            <CloudUpload name="family_card_image" form={form} />
          </Form.Item>

          <Form.Item
            name="marriage_book_url"
            label={
              <CusttomInputLabel>
                Buku nikah
                <span className="text-gray-600">
                  {' '}
                  / Kutipan Akta Perkawinan
                </span>
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
      </div>
    </Form>
  );
};

export default NewKTPForm;
