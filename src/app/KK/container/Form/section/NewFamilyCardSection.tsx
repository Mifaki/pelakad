import { Form, type FormInstance } from 'antd';
import CloudUpload from '~/shared/container/cloud-upload/CloudUpload';
import CusttomInputLabel from '~/shared/container/custom-input-label/CustomInputLabel';

const NewFamilyCardSection = ({ form }: { form: FormInstance<any> }) => {
  return (
    <>
      <Form.Item
        name="husband_family_card_url"
        label={<CusttomInputLabel>Kartu Keluarga Laki-Laki</CusttomInputLabel>}
        rules={[
          { required: true, message: 'Kartu Keluarga Laki-Laki diperlukan!' },
        ]}
      >
        <CloudUpload
          name="husband_family_card_url"
          form={form}
          multipleFile={false}
        />
      </Form.Item>

      <Form.Item
        name="wife_family_card_url"
        label={<CusttomInputLabel>Kartu Keluarga Wanita</CusttomInputLabel>}
        rules={[
          { required: true, message: 'Kartu Keluarga Wanita diperlukan!' },
        ]}
      >
        <CloudUpload
          name="wife_family_card_url"
          form={form}
          multipleFile={false}
        />
      </Form.Item>

      <Form.Item
        name="father_identity_card_url"
        label={<CusttomInputLabel>KTP Ayah</CusttomInputLabel>}
        rules={[{ required: true, message: 'KTP Ayah diperlukan!' }]}
      >
        <CloudUpload
          name="father_identity_card_url"
          form={form}
          multipleFile={false}
        />
      </Form.Item>

      <Form.Item
        name="mother_identity_card_url"
        label={<CusttomInputLabel>KTP Ibu</CusttomInputLabel>}
        rules={[{ required: true, message: 'KTP Ibu diperlukan!' }]}
      >
        <CloudUpload
          name="mother_identity_card_url"
          form={form}
          multipleFile={false}
        />
      </Form.Item>

      <Form.Item
        name="husband_birth_certificate_url"
        label={<CusttomInputLabel>Akta Kelahiran Laki-Laki</CusttomInputLabel>}
        rules={[
          { required: true, message: 'Akta Kelahiran Laki-Laki diperlukan!' },
        ]}
      >
        <CloudUpload
          name="husband_birth_certificate_url"
          form={form}
          multipleFile={false}
        />
        <p className="mt-2 text-xs font-medium">
          *Surat perubahan data wajib di sertakan Jika melakukan Perubahan data
          pada KK
        </p>
      </Form.Item>

      <Form.Item
        name="wife_birth_certificate_url"
        label={<CusttomInputLabel>Akta Kelahiran Wanita</CusttomInputLabel>}
        rules={[
          { required: true, message: 'Akta Kelahiran Wanita diperlukan!' },
        ]}
      >
        <CloudUpload
          name="wife_birth_certificate_url"
          form={form}
          multipleFile={false}
        />
        <p className="mt-2 text-xs font-medium">
          *Surat perubahan data wajib di sertakan Jika melakukan Perubahan data
          pada KK
        </p>
      </Form.Item>

      <Form.Item
        name="marriage_book_url"
        label={
          <CusttomInputLabel>
            Buku nikah / kutipan akta perkawinan
          </CusttomInputLabel>
        }
        rules={[
          {
            required: true,
            message: 'Buku nikah / kutipan akta perkawinan diperlukan!',
          },
        ]}
      >
        <CloudUpload name="marriage_book_url" form={form} />
        <p className="mt-2 text-xs font-medium">
          *Surat perubahan data wajib di sertakan Jika melakukan Perubahan data
          pada KK
        </p>
      </Form.Item>
    </>
  );
};

export default NewFamilyCardSection;
