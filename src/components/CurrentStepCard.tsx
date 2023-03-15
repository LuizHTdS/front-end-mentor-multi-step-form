import { Step } from './Step';

type Props = {
  curStep: number;
  setCurStep: React.Dispatch<number>;
};

export const CurrentStepCard: React.FC<Props> = (props) => {
  const stepElemets = ['YOUR INFO', 'SELECT PLAN', 'ADD-ONS', 'SUMMARY'].map(
    (action, i) => {
      return (
        <Step
          step={i + 1}
          action={action}
          curStep={props.curStep}
          key={action}
        />
      );
    }
  );

  return (
    <aside className='curStepCard'>
      <div className='curStepCard__container'>{stepElemets}</div>
    </aside>
  );
};
