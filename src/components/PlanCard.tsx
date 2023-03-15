import { FormProps } from './PersonalInfo';

interface CardProps extends Pick<FormProps, 'formData' | 'setFormData'> {
  plan: string;
}

export const PlanCard = (props: CardProps) => {
  let price: number | undefined;

  if (props.plan === 'arcade') {
    props.formData.plan.isYearly === false ? (price = 9) : (price = 90);
  } else if (props.plan === 'advanced') {
    props.formData.plan.isYearly === false ? (price = 12) : (price = 120);
  } else if (props.plan === 'pro') {
    props.formData.plan.isYearly === false ? (price = 15) : (price = 150);
  }

  const capitalizedPlan = props.plan[0].toUpperCase() + props.plan.slice(1);

  return (
    <div
      className={`selectPlan__billing--card ${
        props.formData.plan.package === props.plan ? 'selected' : ''
      }`}
      onClick={() => {
        props.setFormData((prevData: any) => ({
          ...prevData,
          plan: {
            ...prevData.plan,
            package: props.plan,
          },
        }));
      }}
    >
      <img
        src={`images/icon-${props.plan}.svg`}
        alt={`icon for the ${props.plan} plan`}
      />
      <div className='textContainer'>
        <h3>{capitalizedPlan}</h3>
        <h4>
          ${price}/{props.formData.plan.isYearly ? 'yr' : 'mo'}
        </h4>
      </div>
    </div>
  );
};
