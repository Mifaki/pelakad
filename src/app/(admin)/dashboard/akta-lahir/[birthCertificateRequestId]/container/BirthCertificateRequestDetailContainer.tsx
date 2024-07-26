'use client';

import { Modal, Input, message, Image } from 'antd';
import { type IRootBirthCertificate } from '~/shared/models/aktalahirinterfaces';
import PageTitle from '~/shared/container/page-title/PageTitle';
import { useBirthCertificateRequestDetail } from '../usecase/usePopulateForm';
import AdminFormHeader from '~/shared/container/admin-form-header/AdminFormHeader';
import {
  updateBirthCertificateRequest,
  declineBirthCertificateRequest,
} from '~/shared/actions/BirthCertificateService';
import useModalReducer from '~/shared/usecase/useModalReducer';
import DetailBirthCertificateForm from './form/PageFormDetail';

interface IBirthCertificateRequestDetailContainer {
  data: IRootBirthCertificate | null;
  isLoading: boolean;
  id: string;
}

const BirthCertificateRequestDetailContainer = ({
  data,
  isLoading,
  id,
}: IBirthCertificateRequestDetailContainer) => {
  const form = useBirthCertificateRequestDetail(data);

  const { modalState, openModal, closeModal, setFeedback } =
    useModalReducer(form);

  const handleAccept = async () => {
    try {
      await updateBirthCertificateRequest(id, 'diproses');
      message.success('Berhasil update permohonan Akta Kelahiran');
    } catch (error) {
      message.error(
        'Gagal update permohonan Akta Kelahiran, silahkan coba kembali',
      );
    }
  };

  const handleDeclineSubmit = async () => {
    try {
      await declineBirthCertificateRequest(id, modalState.feedback);
      closeModal();
      message.success('Berhasil menolak permohonan Akta Kelahiran');
    } catch (error) {
      message.error(
        'Gagal menolak permohonan Akta Kelahiran, silahkan coba kembali',
      );
    }
  };

  const handleFinish = async () => {
    try {
      await updateBirthCertificateRequest(id, 'selesai');
      message.success('Berhasil update permohonan Akta Kelahiran');
    } catch (error) {
      message.error(
        'Gagal update permohonan Akta Kelahiran, silahkan coba kembali',
      );
    }
  };

  return (
    <div>
      <PageTitle title="Detail Permohonan Akta Kelahiran" withArrow />
      <AdminFormHeader
        onAccept={async () => {
          await handleAccept();
        }}
        onDecline={() => openModal(id)}
        onFinish={async () => {
          await handleFinish();
        }}
        requestStatus={data?.request_status ?? 'menunggu'}
      />
      <DetailBirthCertificateForm form={form} id={id} />
      <Modal
        title="Tolak Permohonan Akta Kelahiran"
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

export default BirthCertificateRequestDetailContainer;
