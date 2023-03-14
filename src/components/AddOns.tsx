import { FormProps } from './PersonalInfo';

const AddOns = (props: FormProps) => {
  return (
    <section className='addOns'>
      <div className='addOns__heading'>
        <h1>Pick add-ons</h1>
        <h2>Add-ons help enhance your gaming experience.</h2>
      </div>
      <div className='addOns__services'>
        <div
          className={`addOns_services--addOn ${
            props.formData.addOns.onlineService ? 'selected' : ''
          }`}
        >
          <input
            type='checkbox'
            name='onlineService'
            checked={props.formData.addOns.onlineService}
            onChange={props.handleChange}
          />
          <div className='addOns__services--addOn-text'>
            <h3>Online service</h3>
            <p>Access to multiplayer games</p>
          </div>
          <h4>
            +{props.formData.plan.isYearly === false ? '$1/mo' : '$10/yr'}
          </h4>
        </div>
        <div
          className={`addOns_services--addOn ${
            props.formData.addOns.largerStorage ? 'selected' : ''
          }`}
        >
          <input
            type='checkbox'
            name='largerStorage'
            checked={props.formData.addOns.largerStorage}
            onChange={props.handleChange}
          />
          <div className='addOns__services--addOn-text'>
            <h3>Larger storage</h3>
            <p>Extra 1TB of cloud save</p>
          </div>
          <h4>
            +{props.formData.plan.isYearly === false ? '$2/mo' : '$20/yr'}
          </h4>
        </div>
        <div
          className={`addOns_services--addOn ${
            props.formData.addOns.customProfile ? 'selected' : ''
          }`}
        >
          <input
            type='checkbox'
            name='customProfile'
            checked={props.formData.addOns.customProfile}
            onChange={props.handleChange}
          />
          <div className='addOns__services--addOn-text'>
            <h3>Customizable profile</h3>
            <p>Custom theme on your profile</p>
          </div>
          <h4>
            +{props.formData.plan.isYearly === false ? '$2/mo' : '$20/yr'}
          </h4>
        </div>
      </div>
    </section>
  );
};

export { AddOns };
