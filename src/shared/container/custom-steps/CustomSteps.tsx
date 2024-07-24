import React from 'react';
import { type IStep } from '~/shared/models/generalInterfaces';

interface ICustomSteps {
  steps: IStep[];
  current: number;
}

const CustomSteps = ({ steps, current }: ICustomSteps) => (
  <>
    <div className="flex items-center justify-between rounded-full bg-blue-100 p-2">
      {steps.map((step, index) => (
        <div
          key={step.title}
          className={`rounded-full px-2 py-1 text-sm font-medium ${
            index === current
              ? 'bg-blue-600 text-white'
              : 'bg-transparent text-blue-600'
          }`}
        >
          {step.title}
        </div>
      ))}
    </div>
    <div className="mt-4">
      {steps[current]?.content ?? 'No content available'}
    </div>
  </>
);

export default CustomSteps;
