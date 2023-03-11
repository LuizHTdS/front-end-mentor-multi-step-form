import ChangeStepButton from "./ChangeStepBtn";
import { FormProps } from './PersonalInfo'

export const SelectPlan: React.FC<FormProps> = () => {
    return <section className="selectPlan">
        <div className="selectPlan__heading">
            <h1>
                Select your plan
            </h1>
            <h2>You have the option of monthly or yearly billing</h2>
        </div>
        <div className="selectPlan__billing">

        </div>


    </section>
}