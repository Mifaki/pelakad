import { Form, type FormInstance } from 'antd';
import DownloadButton from '~/shared/container/Button/DownloadButton';
import CloudUpload from '~/shared/container/cloud-upload/CloudUpload';
import CusttomInputLabel from '~/shared/container/custom-input-label/CustomInputLabel';

const LostFamilyCardForm = ({ form }: { form: FormInstance<any> }) => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Form.Item
          name="police_loss_report_url"
          label={
            <CusttomInputLabel>
              Surat keterangan hilang dari kepolisian
            </CusttomInputLabel>
          }
          rules={[
            {
              required: true,
              message: 'Surat keterangan hilang dari kepolisian diperlukan!',
            },
          ]}
        >
          <CloudUpload
            name="police_loss_report_url"
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
            *Tambahkan Dokumen alasan mengapa mengganti kepala keluarga,
            Misalnya: Akta Kematian, Ijazah, buku nikah, surat cerai, surat
            pindah domisili dan surat pernyataan lainnya.
          </p>
        </Form.Item>
      </div>
    </>
  );
};

export default LostFamilyCardForm;
