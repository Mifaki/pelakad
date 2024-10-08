'use client';

import { Button } from 'antd';
import { type TRequestStatus } from '~/shared/models/generalInterfaces';

type IAdminFormHeader = {
  onAccept: () => void;
  onDecline: () => void;
  onFinish: () => void;
  onSignature: () => void;
  requestStatus: TRequestStatus;
};

const AdminFormHeader = ({
  onAccept,
  onDecline,
  onFinish,
  onSignature,
  requestStatus,
}: IAdminFormHeader) => {
  const isDisabled =
    requestStatus === 'selesai' || requestStatus === 'dikembalikan';

  return (
    <div className="items- mb-5 flex flex-wrap justify-end gap-3">
      <Button
        className="h-10 bg-red-500 text-body-2 text-white hover:!border-red-400 hover:!bg-red-400 hover:!text-white"
        onClick={onDecline}
        disabled={isDisabled}
      >
        Tolak
      </Button>
      {requestStatus === 'selesai' && (
        <Button
          className="h-10 bg-green-500 text-body-2 text-white hover:!border-green-400 hover:!bg-green-400 hover:!text-white"
          disabled={true}
        >
          Selesai
        </Button>
      )}
      {requestStatus === 'menunggu' && (
        <Button
          className="h-10 bg-orange-500 text-body-2 text-white hover:!border-orange-400 hover:!bg-orange-400 hover:!text-white"
          onClick={onAccept}
        >
          Proses
        </Button>
      )}
      {requestStatus === 'diproses' && (
        <Button
          className="h-10 bg-blue-500 text-body-2 text-white hover:!border-blue-400 hover:!bg-blue-400 hover:!text-white"
          onClick={onSignature}
        >
          Tanda Tangan
        </Button>
      )}
      {requestStatus === 'tanda-tangan' && (
        <Button
          className="h-10 bg-green-500 text-body-2 text-white hover:!border-green-400 hover:!bg-green-400 hover:!text-white"
          onClick={onFinish}
        >
          Selesai
        </Button>
      )}
    </div>
  );
};

export default AdminFormHeader;
