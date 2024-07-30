import { Form, type FormInstance, Input } from 'antd';
import DownloadButton from '~/shared/container/Button/DownloadButton';
import CloudUpload from '~/shared/container/cloud-upload/CloudUpload';
import CusttomInputLabel from '~/shared/container/custom-input-label/CustomInputLabel';

const UpdateFamilyCardForm = ({ form }: { form: FormInstance<any> }) => {
  return (
    <>
      <Form.Item
        name="element_change_statement_letter_url"
        label={
          <CusttomInputLabel>
            Surat Pernyataan Perubahan Elemen
          </CusttomInputLabel>
        }
        rules={[
          {
            required: true,
            message: 'Surat Pernyataan Perubahan Elemen diperlukan!',
          },
        ]}
      >
        <CloudUpload
          name="element_change_statement_letter_url"
          form={form}
          multipleFile={false}
        />
        <div className="mt-4 flex items-start justify-between">
          <p className="mt-2 text-xs font-semibold">
            Surat Pernyataan Perubahan Elemen
          </p>
          <DownloadButton
            downloadUrl="https://utfs.io/f/463cba4b-0c58-4892-af54-ef0dd552eb74-kyjfnj.pdf"
            fileName="SPTJM Kebenaran Kelahiran"
          />
        </div>
      </Form.Item>
      <Form.Item
        name="original_family_card_url"
        label={<CusttomInputLabel>Kartu Keluarga Asli</CusttomInputLabel>}
        rules={[{ required: true, message: 'Kartu Keluarga Asli diperlukan!' }]}
      >
        <CloudUpload
          name="original_family_card_url"
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

export default UpdateFamilyCardForm;
