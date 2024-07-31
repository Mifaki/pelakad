'use client';

import { Modal, Input, message } from 'antd';
import { type IRootKTP } from '~/shared/models/ktpinterfaces';
import DetailKTPRequestForm from './form/PageFormDetail';
import PageTitle from '~/shared/container/page-title/PageTitle';
import { useKTPRequestDetail } from '../usecase/usePopulateForm';
import AdminFormHeader from '~/shared/container/admin-form-header/AdminFormHeader';
import {
  updateKTPRequest,
  declineKTPRequest,
} from '~/shared/actions/KTPService';
import useModalReducer from '~/shared/usecase/useModalReducer';

interface IKTPRequestDetailContainer {
  data: IRootKTP | null;
  isLoading: boolean;
  id: string;
}

const KTPRequestDetailContainer = ({
  data,
  isLoading,
  id,
}: IKTPRequestDetailContainer) => {
  const form = useKTPRequestDetail(data);

  const { modalState, openModal, closeModal, setFeedback } =
    useModalReducer(form);

  const handleAccept = async () => {
    try {
      await updateKTPRequest(id, 'diproses');
      message.success('Berhasil update permohonan KTP');
    } catch (error) {
      message.error('Gagal update permohonan KTP, silahkan coba kembali');
    }
  };

  const handleSignature = async () => {
    try {
      const result = await updateKTPRequest(id, 'tanda-tangan');
      message.success('Berhasil update permohonan Kartu Keluarga');

      if (result.whatsappRedirectUrl) {
        window.open(result.whatsappRedirectUrl, '_blank');
      }
    } catch (error) {
      message.error(
        'Gagal update permohonan Kartu Keluarga, silahkan coba kembali',
      );
    }
  };

  const handleDeclineSubmit = async () => {
    try {
      const result = await declineKTPRequest(id, modalState.feedback);
      closeModal();
      message.success('Berhasil menolak permohonan KTP');

      if (result.whatsappRedirectUrl) {
        window.open(result.whatsappRedirectUrl, '_blank');
      }
    } catch (error) {
      message.error('Gagal menolak permohonan KTP, silahkan coba kembali');
    }
  };

  const handleFinish = async () => {
    try {
      const result = await updateKTPRequest(id, 'selesai');
      message.success('Berhasil update permohonan KTP');

      if (result.whatsappRedirectUrl) {
        window.open(result.whatsappRedirectUrl, '_blank');
      }
    } catch (error) {
      message.error('Gagal update permohonan KTP, silahkan coba kembali');
    }
  };

  return (
    <div>
      <PageTitle title="Detail Permohonan Kartu Tanda Penduduk" withArrow />
      <AdminFormHeader
        onAccept={async () => {
          await handleAccept();
        }}
        onDecline={() => openModal(id)}
        onFinish={async () => {
          await handleFinish();
        }}
        onSignature={async () => {
          await handleSignature();
        }}
        requestStatus={data?.request_status ?? 'menunggu'}
      />
      <DetailKTPRequestForm form={form} id={id} />
      <Modal
        title="Tolak Permohonan KTP"
        open={modalState.isOpen}
        onOk={async () => {
          await handleDeclineSubmit();
        }}
        onCancel={closeModal}
        confirmLoading={isLoading}
      >
        <Input.TextArea
          rows={4}
          value={modalState.feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Tuliskan alasan mengapa permohonan ditolak"
        />
      </Modal>
    </div>
  );
};

export default KTPRequestDetailContainer;
