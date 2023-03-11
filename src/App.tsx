import React, { useState } from 'react';
import { CurrentStepCard } from './components/CurrentStepCard';
import { PersonalInfo } from './components/PersonalInfo';
interface Info {
  name: string;
  email: string;
  phone: number | string;
}
interface Plan {
  package: 'Arcade' | 'Advanced' | 'Pro';
  frequency: 'Monthly' | 'Yearly';
}

interface AddOns {
  onlineService: boolean;
  largerStorage: boolean;
  customProfile: boolean;
}
interface FormData {
  info: Info;
  plan: Plan;
  addOns: AddOns;
}

export default function App() {
  const [formData, setFormData] = useState<FormData>({
    info: {
      name: '',
      email: '',
      phone: '',
    },
    plan: {
      package: 'Arcade',
      frequency: 'Monthly',
    },
    addOns: {
      onlineService: false,
      largerStorage: false,
      customProfile: false,
    },
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    if (curStep === 1) {
      const info = formData.info;
      setFormData((prevFormData) => ({
        ...prevFormData,
        info: {
          ...formData.info,
          [name]: value,
        },
      }));
    }
  };

  const [curStep, setCurStep] = React.useState(1);

  return (
    <form>
      <CurrentStepCard curStep={curStep} setCurStep={setCurStep} />
      {curStep === 1 ? (
        <PersonalInfo
          formData={formData}
          setFormData={setFormData}
          curStep={curStep}
          setCurStep={setCurStep}
          handleChange={handleChange}
        />
      ) : // : curStep === 2 ? <SelectPlan formData={formData} setFormData={setFormData} />
      //   : curStep === 3 ? <AddOns formData={formData} setFormData={setFormData} />
      //     : curStep === 4 ? <Summary formData={formData} setFormData={setFormData} />
      null}
    </form>
  );
}
