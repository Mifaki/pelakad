import React from 'react';

interface ProcessStepsProps {
  currentStep: number;
  onStepClick: (step: number) => void;
}

const ProcessSteps: React.FC<ProcessStepsProps> = ({
  currentStep,
  onStepClick,
}) => {
  const steps = ['Pemohon', 'Kepala', 'Wilayah', 'Anggota'];

  return (
    <div className="mt-6 flex items-center justify-center space-x-1">
      {steps.map((step, index) => (
        <React.Fragment key={step}>
          <button
            className={`rounded-full px-2 py-0.5 text-sm font-medium ${
              index === currentStep
                ? 'bg-blue-600 text-white'
                : index < currentStep
                  ? 'bg-blue-300 text-blue-800'
                  : 'bg-blue-200 text-blue-600'
            } ${index <= currentStep ? 'cursor-pointer' : 'cursor-not-allowed'}`}
            onClick={() => index <= currentStep && onStepClick(index)}
            disabled={index > currentStep}
          >
            {step}
          </button>
          {index < steps.length - 1 && (
            //segitiga
            <div className="h-0 w-0 border-b-[4px] border-l-[4px] border-t-[6px] border-b-transparent border-l-red-500 border-t-transparent"></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ProcessSteps;
