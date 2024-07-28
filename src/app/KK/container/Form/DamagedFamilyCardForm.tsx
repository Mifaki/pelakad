import { Form, type FormInstance } from 'antd';
import DownloadButton from '~/shared/container/Button/DownloadButton';
import CloudUpload from '~/shared/container/cloud-upload/CloudUpload';
import CusttomInputLabel from '~/shared/container/custom-input-label/CustomInputLabel';

const DamagedFamilyCardForm = ({ form }: { form: FormInstance<any> }) => {
  return (
    <>
      <Form.Item
        name="broken_family_card_url"
        label={<CusttomInputLabel>Kartu Keluarga Rusak </CusttomInputLabel>}
        rules={[
          { required: true, message: 'Kartu Keluarga Rusak diperlukan!' },
        ]}
      >
        <CloudUpload
          name="broken_family_card_url"
          form={form}
          multipleFile={false}
        />
      </Form.Item>

      <Form.Item
        name="supporting_document_url"
        label={<CusttomInputLabel>Dokumen Pendukung</CusttomInputLabel>}
        rules={[
          { required: true, message: 'Dokumen Pendukung wajib diisi 1 kali' },
        ]}
      >
        <CloudUpload name="supporting_document_url" form={form} />
        <p className="mt-2 text-xs font-medium">
          *Tambahkan Dokumen alasan mengapa mengganti kepala keluarga, Misalnya:
          Akta Kematian, Ijazah, buku nikah, surat cerai, surat pindah domisili
          dan surat pernyataan lainnya.
        </p>
      </Form.Item>
    </>
  );
};

export default DamagedFamilyCardForm;
