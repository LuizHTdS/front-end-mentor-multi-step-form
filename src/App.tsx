import React, { useState } from "react"
import { CurrentStepCard } from "./components/CurrentStepCard";
interface Info {
  name: string,
  email: string,
  phone: number | string
}
interface Plan {
  package: 'Arcade' | 'Advanced' | 'Pro',
  frequency: 'Monthly' | 'Yearly'
}

interface AddOns {
  onlineService: boolean,
  largerStorage: boolean,
  customProfile: boolean,
}
interface FormData {
  info: Info;
  plan: Plan;
  addOns: AddOns
  handleChange: any
}

export default function App() {

  const [formData, setFormData] = React.useState<FormData>({
    info: {
      name: '',
      email: '',
      phone: ''
    },
    plan: {
      package: 'Arcade',
      frequency: 'Monthly'
    },
    addOns: {
      onlineService: false,
      largerStorage: false,
      customProfile: false,
    },
    handleChange: (e: IInputChange) => {

    }
  })

  console.log(formData)

  const [curStep, setCurStep] = React.useState(1)

  return (
    <form>
      <CurrentStepCard curStep={curStep} />
      {
        curStep === 1 ? <PersonalInfo formData={formData} setFormData={setFormData} />
          : curStep === 2 ? <SelectPlan formData={formData} setFormData={setFormData} />
            : curStep === 3 ? <AddOns formData={formData} setFormData={setFormData} />
              : curStep === 4 ? <Summary formData={formData} setFormData={setFormData} />
    }
    </form>
  )
}