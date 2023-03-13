type StepProps = {
  step: number;
  action: string;
  curStep: number;
};

export const Step = (props: StepProps) => {
  return (
    <div className='curStepCard__step'>
      <div className={`curStepCard__step--number ${props.curStep && 'active'}`}>
        <h2>{props.step}</h2>
      </div>
      <h3 className='curStepCard__step--action'>
        <span className='curStepCard__step--action-step'>
          STEP {props.step}
        </span>{' '}
        {props.action}
      </h3>
    </div>
  );
};
