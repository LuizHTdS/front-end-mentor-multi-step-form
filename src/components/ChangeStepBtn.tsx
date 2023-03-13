interface Props {
  action: 'back' | 'forward' | 'submit';
  curStep: number;
  setCurStep: React.Dispatch<number>;
}

const ChangeStepButton: React.FC<Props> = ({ action, curStep, setCurStep }) => {
  let onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  let label: string;

  if (action === 'forward') {
    label = 'Next Step';
    onClick = () => {
      setCurStep(curStep + 1);
    };
  } else if (action === 'back') {
    label = 'Go Back';
    onClick = () => {
      setCurStep(curStep - 1);
    };
  } else {
    label = 'Confirm';
    onClick = () => {
      setCurStep(curStep + 1);
    };
  }

  return (
    <button type='button' onClick={onClick} className={`btn__${action}`}>
      {label}
    </button>
  );
};

export default ChangeStepButton;
