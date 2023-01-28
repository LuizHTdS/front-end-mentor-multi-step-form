import { Step } from "./Step";

type Props = {
    curStep: number;
}


export const CurrentStepCard: React.FC<Props> = (props) => {
    const stepElemets = ['YOUR INFO', 'SELECT PLAN', 'ADD-ONS', 'SUMMARY'].map((action, i) => {
        return <Step step={i + 1} action={action} curStep={props.curStep} />
    })

    return (
        <aside className="curStepCard">
            {stepElemets}
        </aside>
    )
}