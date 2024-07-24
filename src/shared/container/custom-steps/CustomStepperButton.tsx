import { Button, type FormInstance } from 'antd';

interface ICustomButtonStepper {
  current: number;
  form: FormInstance<any>;
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
  form,
  onComplete,
  mutateLoading,
}: ICustomButtonStepper) => {
  const handleNextOrSubmit = async () => {
    try {
      const values = await form.validateFields();

      if (current === stepsLength - 1) {
        const allFormData = form.getFieldsValue(true);
        onComplete(allFormData);
      } else {
        onNext();
      }
    } catch (error) {
      console.error('Validation failed:', error);
    }
  };

  if (current === 0) {
    return (
      <div className="flex justify-center">
        <Button
          className="h-12 w-80 rounded-lg bg-blue-600 text-lg font-semibold text-white"
          onClick={handleNextOrSubmit}
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
          onClick={handleNextOrSubmit}
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
          onClick={handleNextOrSubmit}
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
