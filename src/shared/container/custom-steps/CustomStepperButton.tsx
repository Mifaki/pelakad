import { Button } from 'antd';

interface ICustomButtonStepper {
  current: number;
  stepsLength: number;
  onNext: () => void;
  onPrev: () => void;
  onComplete: any;
  mutateLoading: boolean;
}

const CustomStepperButton = ({
  current,
  stepsLength,
  onNext,
  onPrev,
  onComplete,
  mutateLoading,
}: ICustomButtonStepper) => {
  if (current === 0) {
    return (
      <div className="flex justify-center">
        <Button
          className="h-12 w-80 rounded-lg bg-blue-600 text-lg font-semibold text-white"
          onClick={onNext}
        >
          Lanjut
        </Button>
      </div>
    );
  } else if (current === stepsLength - 1) {
    return (
      <div className="flex flex-col items-center space-y-4">
        <Button
          className="h-12 w-80 rounded-lg bg-blue-600 text-lg font-semibold text-white"
          onClick={onComplete}
          loading={mutateLoading}
        >
          Selesai
        </Button>
        <Button
          className="h-12 w-80 rounded-lg border border-blue-600 bg-white text-lg font-semibold text-blue-600"
          onClick={onPrev}
        >
          Kembali
        </Button>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col items-center space-y-4">
        <Button
          className="h-12 w-80 rounded-lg bg-blue-600 text-lg font-semibold text-white"
          onClick={onNext}
        >
          Lanjut
        </Button>
        <Button
          className="h-12 w-80 rounded-lg border border-blue-600 bg-white text-lg font-semibold text-blue-600"
          onClick={onPrev}
        >
          Kembali
        </Button>
      </div>
    );
  }
};

export default CustomStepperButton;
