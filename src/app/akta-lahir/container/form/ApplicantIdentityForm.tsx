import { Form, type FormInstance, Input } from 'antd';
import CusttomInputLabel from '~/shared/container/custom-input-label/CustomInputLabel';

interface IApplicantIdentityForm {
  form: FormInstance<any>;
}

const ApplicantIdentityForm = ({ form }: IApplicantIdentityForm) => {
  return (
    <div className="flex flex-col items-center gap-0 md:flex-row md:gap-4">
      <div className="w-full basis-1/2">
        <Form.Item
          name="phone_number"
          label={<CusttomInputLabel>Nomor Telepon</CusttomInputLabel>}
          rules={[{ required: true, message: 'Nomor telepon diperlukan!' }]}
        >
          <Input className="rounded-xl border-2" placeholder="08xxxxxxxxxx" />
          <p className="mt-2 text-xs font-medium">
            *Nomor yang akan digunakan untuk mengirimkan notifikasi pengambilan
          </p>
        </Form.Item>
        <Form.Item
          name="full_name"
          label={<CusttomInputLabel>Nama Lengkap</CusttomInputLabel>}
          rules={[{ required: true, message: 'Nama Lengkap diperlukan!' }]}
        >
          <Input
            className="rounded-xl border-2"
            placeholder="Masukkan nama lengkap"
          />
        </Form.Item>
      </div>

      <div className="w-full basis-1/2 gap-4">
        <Form.Item
          name="nik_id"
          label={<CusttomInputLabel>No. Induk Kependudukan</CusttomInputLabel>}
          rules={[{ required: true, message: 'NIK diperlukan!' }]}
        >
          <Input
            className="rounded-xl border-2"
            placeholder="3522xxxxxxxxxxxx"
          />
          <p className="mt-2 text-xs font-medium">*Ketik (-) jika tidak ada</p>
        </Form.Item>

        <Form.Item
          name="kk_id"
          label={<CusttomInputLabel>Nomor Kartu Keluarga</CusttomInputLabel>}
          rules={[{ required: true, message: 'NKK diperlukan!' }]}
        >
          <Input
            className="rounded-xl border-2"
            placeholder="3522xxxxxxxxxxxx"
          />
        </Form.Item>
      </div>
    </div>
  );
};

export default ApplicantIdentityForm;
