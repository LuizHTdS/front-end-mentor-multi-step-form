import { FormProps } from './PersonalInfo';
import { PlanCard } from './PlanCard';

const plans = ['arcade', 'advanced', 'pro'];

export const SelectPlan = (props: FormProps) => {
  const planCardEl = plans.map((plan) => {
    return (
      <PlanCard
        formData={props.formData}
        plan={plan}
        key={plan}
        setFormData={props.setFormData}
      />
    );
  });

  return (
    <section className='selectPlan'>
      <div className='selectPlan__heading'>
        <h1>Select your plan</h1>
        <h2>You have the option of monthly or yearly billing</h2>
      </div>
      <div className='selectPlan__billing'>{planCardEl}</div>
      <div className='selectPlan__frequency'>
        <h3 className={props.formData.plan.isYearly ? '' : 'active'}>
          Monthly
        </h3>
        <label className='switch'>
          <input
            type='checkbox'
            name='isYearly'
            checked={props.formData.plan.isYearly}
            onChange={props.handleChange}
          />
          <span className='slider'></span>
        </label>
        <h3 className={props.formData.plan.isYearly ? 'active' : ''}>Yearly</h3>
      </div>
    </section>
  );
};
