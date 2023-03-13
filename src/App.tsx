import React, { useState } from 'react';
import { CurrentStepCard } from './components/CurrentStepCard';
import { PersonalInfo } from './components/PersonalInfo';
import { SelectPlan } from './components/SelectPlan';
import { AddOns } from './components/AddOns';
import { Summary } from './components/Summary';
import ChangeStepButton from './components/ChangeStepBtn';
interface Info {
  name: string;
  email: string;
  phone: number | string;
}
interface Plan {
  package: 'arcade' | 'advanced' | 'pro';
  isYearly: boolean;
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
      package: 'arcade',
      isYearly: false,
    },
    addOns: {
      onlineService: false,
      largerStorage: false,
      customProfile: false,
    },
  });

  const handleChange = (e: any) => {
    const { name, type, checked } = e.target;
    let { value } = e.target;
    value = type === 'checkbox' ? checked : value;
    console.log(name);
    if (name === 'phone') {
      value = value.replace(/\D/g, '');
    }
    if (curStep === 1) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        info: {
          ...formData.info,
          [name]: value,
        },
      }));
    } else if (curStep === 2) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        plan: {
          ...formData.plan,
          [name]: value,
        },
      }));
    } else if (curStep === 3) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        addOns: {
          ...formData.addOns,
          [name]: value,
        },
      }));
    }
    console.log(formData);
  };

  const [curStep, setCurStep] = React.useState(1);

  function placeButtons() {
    if (curStep === 1) {
      return (
        <ChangeStepButton
          action='forward'
          curStep={curStep}
          setCurStep={setCurStep}
        />
      );
    } else if (curStep > 1 && curStep < 4) {
      return (
        <>
          <ChangeStepButton
            curStep={curStep}
            setCurStep={setCurStep}
            action='back'
          />
          <ChangeStepButton
            curStep={curStep}
            setCurStep={setCurStep}
            action='forward'
          />
        </>
      );
    } else if (curStep === 4) {
      return (
        <>
          <ChangeStepButton
            curStep={curStep}
            setCurStep={setCurStep}
            action='back'
          />
          <button>Confirm</button>
        </>
      );
    }
  }

  return (
    <form>
      <CurrentStepCard curStep={curStep} setCurStep={setCurStep} />
      {curStep === 1 ? (
        <PersonalInfo
          formData={formData}
          setFormData={setFormData}
          handleChange={handleChange}
        />
      ) : curStep === 2 ? (
        <SelectPlan
          formData={formData}
          setFormData={setFormData}
          handleChange={handleChange}
        />
      ) : curStep === 3 ? (
        <AddOns
          formData={formData}
          setFormData={setFormData}
          handleChange={handleChange}
        />
      ) : curStep === 4 ? (
        <Summary
          formData={formData}
          setFormData={setFormData}
          handleChange={setCurStep}
          setCurStep={setCurStep}
        />
      ) : (
        <h1>error</h1>
      )}
      <div className='buttonField'>{placeButtons()}</div>
    </form>
  );
}
