import { Button } from 'antd';

type IAdminFormHeader = {
  onAccept: () => void;
  onDecline: () => void;
  onFinish: () => void;
  requestStatus: 'selesai' | 'dikembalikan' | 'menunggu' | 'diproses';
};

const AdminFormHeader = ({
  onAccept,
  onDecline,
  onFinish,
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
      {requestStatus === 'menunggu' ? (
        <></>
      ) : (
        <Button
          className="h-10 bg-green-500 text-body-2 text-white hover:!border-green-400 hover:!bg-green-400 hover:!text-white"
          onClick={onFinish}
          disabled={isDisabled}
        >
          Selesai
        </Button>
      )}
      {requestStatus === 'menunggu' ? (
        <Button
          className="h-10 bg-orange-500 text-body-2 text-white hover:!border-orange-400 hover:!bg-orange-400 hover:!text-white"
          onClick={onAccept}
        >
          Proses
        </Button>
      ) : requestStatus === 'diproses' ? (
        <></>
      ) : (
        <Button
          className="h-10 bg-orange-500 text-body-2 text-white hover:!border-orange-400 hover:!bg-orange-400 hover:!text-white"
          onClick={onAccept}
          disabled={true}
        >
          Proses
        </Button>
      )}
    </div>
  );
};

export default AdminFormHeader;
