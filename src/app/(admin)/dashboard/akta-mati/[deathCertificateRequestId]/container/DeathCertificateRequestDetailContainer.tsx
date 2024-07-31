'use client';

import { Modal, Input, message } from 'antd';
import { type IRootDeathCertificate } from '~/shared/models/aktamatiinterfaces';
import PageTitle from '~/shared/container/page-title/PageTitle';
import { useDeathCertificateRequestDetail } from './usecase/usePopulateForm';
import AdminFormHeader from '~/shared/container/admin-form-header/AdminFormHeader';
import {
  updateDeathCertificateRequest,
  declineDeathCertificateRequest,
} from '~/shared/actions/DeathCertificateService';
import useModalReducer from '~/shared/usecase/useModalReducer';
import DetailDeathCertificateForm from './form/DetailDeathCertificateForm';

type IDeathCertificateRequestDetailContainer = {
  data: IRootDeathCertificate | null;
  isLoading: boolean;
  id: string;
};

const DeathCertificateRequestDetailContainer = ({
  data,
  isLoading,
  id,
}: IDeathCertificateRequestDetailContainer) => {
  const form = useDeathCertificateRequestDetail(data);
  const { modalState, openModal, closeModal, setFeedback } =
    useModalReducer(form);

  const handleAccept = async () => {
    try {
      await updateDeathCertificateRequest(id, 'diproses');
      message.success('Berhasil update permohonan Akta Kematian');
    } catch (error) {
      message.error(
        'Gagal update permohonan Akta Kematian, silahkan coba kembali',
      );
    }
  };

  const handleSignature = async () => {
    try {
      const result = await updateDeathCertificateRequest(id, 'tanda-tangan');
      message.success('Berhasil update permohonan Akta Kematian');

      if (result.whatsappRedirectUrl) {
        window.open(result.whatsappRedirectUrl, '_blank');
      }
    } catch (error) {
      message.error(
        'Gagal update permohonan Akta Kematian, silahkan coba kembali',
      );
    }
  };

  const handleDeclineSubmit = async () => {
    try {
      const result = await declineDeathCertificateRequest(
        id,
        modalState.feedback,
      );
      closeModal();

      message.success('Berhasil menolak permohonan Akta Kematian');

      if (result.whatsappRedirectUrl) {
        window.open(result.whatsappRedirectUrl, '_blank');
      }
    } catch (error) {
      message.error(
        'Gagal menolak permohonan Akta Kematian, silahkan coba kembali',
      );
    }
  };

  const handleFinish = async () => {
    try {
      const result = await updateDeathCertificateRequest(id, 'selesai');
      message.success('Berhasil update permohonan Akta Kematian');

      if (result.whatsappRedirectUrl) {
        window.open(result.whatsappRedirectUrl, '_blank');
      }
    } catch (error) {
      message.error(
        'Gagal update permohonan Akta Kematian, silahkan coba kembali',
      );
    }
  };

  return (
    <div>
      <PageTitle title="Detail Permohonan Akta Kematian" withArrow />
      <AdminFormHeader
        onAccept={handleAccept}
        onDecline={() => openModal(id)}
        onFinish={handleFinish}
        onSignature={handleSignature}
        requestStatus={data?.request_status ?? 'menunggu'}
      />
      <DetailDeathCertificateForm form={form} id={id} />
      <Modal
        title="Tolak Permohonan Akta Kematian"
        open={modalState.isOpen}
        onOk={handleDeclineSubmit}
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

export default DeathCertificateRequestDetailContainer;
