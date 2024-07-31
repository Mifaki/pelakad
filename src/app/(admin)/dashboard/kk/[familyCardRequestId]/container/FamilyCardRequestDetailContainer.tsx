'use client';

import { Modal, Input, message } from 'antd';
import { type IRootFamilyCardRequest } from '~/shared/models/familycardinterfaces';
import PageTitle from '~/shared/container/page-title/PageTitle';
import { useFamilyCardRequestDetail } from '../usecase/usePopulateForm';
import AdminFormHeader from '~/shared/container/admin-form-header/AdminFormHeader';
import {
  updateFamilyCardRequest,
  declineFamilyCardRequest,
} from '~/shared/actions/FamilyCardService';
import useModalReducer from '~/shared/usecase/useModalReducer';
import DetailFamilyCardForm from '../form/PageFormDetail';

interface IFamilyCardRequestDetailContainerProps {
  data: IRootFamilyCardRequest | null;
  isLoading: boolean;
  id: string;
}

const FamilyCardRequestDetailContainer = ({
  data,
  isLoading,
  id,
}: IFamilyCardRequestDetailContainerProps) => {
  const form = useFamilyCardRequestDetail(data);
  const { modalState, openModal, closeModal, setFeedback } =
    useModalReducer(form);

  const handleAccept = async () => {
    try {
      await updateFamilyCardRequest(id, 'diproses');
      message.success('Berhasil update permohonan Kartu Keluarga');
    } catch (error) {
      message.error(
        'Gagal update permohonan Kartu Keluarga, silahkan coba kembali',
      );
    }
  };

  const handleSignature = async () => {
    try {
      const result = await updateFamilyCardRequest(id, 'tanda-tangan');
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
      const result = await declineFamilyCardRequest(id, modalState.feedback);
      closeModal();
      message.success('Berhasil menolak permohonan Kartu Keluarga');

      if (result.whatsappRedirectUrl) {
        window.open(result.whatsappRedirectUrl, '_blank');
      }
    } catch (error) {
      message.error(
        'Gagal menolak permohonan Kartu Keluarga, silahkan coba kembali',
      );
    }
  };

  const handleFinish = async () => {
    try {
      const result = await updateFamilyCardRequest(id, 'selesai');
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

  return (
    <div>
      <PageTitle title="Detail Permohonan Kartu Keluarga" withArrow />
      <AdminFormHeader
        onAccept={handleAccept}
        onDecline={() => openModal(id)}
        onFinish={handleFinish}
        onSignature={handleSignature}
        requestStatus={data?.request_status ?? 'menunggu'}
      />
      <DetailFamilyCardForm form={form} id={id} />
      <Modal
        title="Tolak Permohonan Kartu Keluarga"
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

export default FamilyCardRequestDetailContainer;
