import { FormProps } from './PersonalInfo';

interface SummaryProps extends FormProps {
  setCurStep: React.Dispatch<React.SetStateAction<number>>;
}

const Summary = (props: SummaryProps) => {
  let planPrice: number;

  function getPlanPrice() {
    if (props.formData.plan.package === 'arcade') {
      props.formData.plan.isYearly ? (planPrice = 90) : (planPrice = 9);
      return `$${planPrice}/${frequency}`;
    } else if (props.formData.plan.package === 'advanced') {
      props.formData.plan.isYearly ? (planPrice = 120) : (planPrice = 12);
      return `$${planPrice}/${frequency}`;
    } else if (props.formData.plan.package === 'pro') {
      props.formData.plan.isYearly ? (planPrice = 150) : (planPrice = 15);
      return `$${planPrice}/${frequency}`;
    }
  }

  function getTotalPrice() {
    if (
      !props.formData.addOns.onlineService &&
      !props.formData.addOns.largerStorage &&
      !props.formData.addOns.customProfile
    ) {
      return planPrice;
    }
    let totalPrice = planPrice;

    if (props.formData.addOns.onlineService) {
      props.formData.plan.isYearly
        ? (totalPrice = totalPrice + 10)
        : (totalPrice = totalPrice + 1);
    } else if (props.formData.addOns.largerStorage) {
      props.formData.plan.isYearly
        ? (totalPrice = totalPrice + 20)
        : (totalPrice = totalPrice + 2);
    } else if (props.formData.addOns.customProfile) {
      props.formData.plan.isYearly
        ? (totalPrice = totalPrice + 20)
        : (totalPrice = totalPrice + 2);
    }

    return totalPrice;
  }

  const frequency = props.formData.plan.isYearly ? 'yr' : 'mo';

  return (
    <div className='summary'>
      <div className='summary__heading'>
        <h1>Finishing up</h1>
        <h2>Double-check everything looks OK before confirming.</h2>
      </div>
      <div className='summary__info'>
        <div className='summary__info--plan'>
          <div className='summary__info--plan-package'>
            <h3>{props.formData.plan.package}</h3>
            <p id='changePlan' onClick={() => props.setCurStep(2)}>
              Change
            </p>
            <h4>{getPlanPrice()}</h4>
          </div>
          <div className='summary__info--addOn'>
            {props.formData.addOns.onlineService && (
              <div className='summary__info--addOn-item'>
                <p>Online service</p>
                <h4>
                  +${props.formData.plan.isYearly ? 10 : 1}/{frequency}
                </h4>
              </div>
            )}
            {props.formData.addOns.largerStorage && (
              <div className='summary__info--addOn-item'>
                <p>Larger storage</p>
                <h4>
                  +${props.formData.plan.isYearly ? 20 : 2}/{frequency}
                </h4>
              </div>
            )}
            {props.formData.addOns.customProfile && (
              <div className='summary__info--addOn-item'>
                <p>Custom profile</p>
                <h4>
                  +${props.formData.plan.isYearly ? 20 : 2}/{frequency}
                </h4>
              </div>
            )}
          </div>
        </div>
        <div className='summary__info--total'>
          <p>Total(per {frequency === 'yr' ? 'year' : 'month'})</p>
          <h3>
            +${getTotalPrice()}/{frequency}
          </h3>
        </div>
      </div>
    </div>
  );
};

export { Summary };
