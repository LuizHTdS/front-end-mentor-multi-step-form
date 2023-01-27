interface StepProps {
    step: number;
    action: string;
}

export const Step = (props: StepProps) => {
    return (
        <div className="curStepCard__step">
            {props.step}
        </div>
    )
}