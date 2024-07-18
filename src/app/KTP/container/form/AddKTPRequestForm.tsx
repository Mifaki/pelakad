import { Form, type FormInstance, Input, Radio, type RadioChangeEvent } from 'antd';
import CusttomInputLabel from '~/shared/container/custom-input-label/CustomInputLabel';
import { type TRequestReason } from '~/shared/models/generalInterfaces';
import { type IPayloadKTP } from '~/shared/models/ktpinterfaces';

type IAddKTPRequestForm = {
  form: FormInstance<IPayloadKTP>;
  readioValue: TRequestReason;
  handleRadioChange: (e: RadioChangeEvent) => void;
  handleMutate: (values: IPayloadKTP) => Promise<void>;
};

const AddKTPRequestForm = ({
  form,
  readioValue,
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
      <Form.Item
        name="phone_number"
        label={<CusttomInputLabel>Nomor Telepon</CusttomInputLabel>}
        rules={[{ required: true, message: 'Nomor telepon diperlukan!' }]}
      >
        <Input className="rounded-xl border-2" placeholder="08xxxxxxxxxx" />
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

      <Form.Item
        name="nik_id"
        label={<CusttomInputLabel>No. Induk Kependudukan</CusttomInputLabel>}
        rules={[{ required: true, message: 'NIK diperlukan!' }]}
      >
        <Input className="rounded-xl border-2" placeholder="3522xxxxxxxxxxxx" />
      </Form.Item>

      <Form.Item
        name="kk_id"
        label={<CusttomInputLabel>Nomor Kartu Keluarga</CusttomInputLabel>}
        rules={[{ required: true, message: 'NKK diperlukan!' }]}
      >
        <Input className="rounded-xl border-2" placeholder="3522xxxxxxxxxxxx" />
      </Form.Item>

      <Form.Item
        name="reason"
        label={<CusttomInputLabel>Alasan Pengajuan</CusttomInputLabel>}
        rules={[
          {
            required: true,
            message: 'Pilih salah satu alasan pengajuan!',
          },
        ]}
      >
        <Radio.Group onChange={handleRadioChange} value={readioValue}>
          <Radio value="baru">Baru</Radio>
          <Radio value="pindah datang">Pindah Datang</Radio>
          <Radio value="hilang">Hilang</Radio>
          <Radio value="rusak">Rusak</Radio>
        </Radio.Group>
      </Form.Item>
    </Form>
  );
};

export default AddKTPRequestForm;
