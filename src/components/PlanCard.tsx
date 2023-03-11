import { FormProps } from './PersonalInfo'

interface CardProps extends FormProps {
    plan: string
};

export const PlanCard: React.FC<CardProps> = ({ plan, formData, setFormData }) => {
    let price: number;

    if (plan === 'arcade') {
        formData.plan.frequency === 'monthly' ? price = 9 : price = 90;
    } else if (plan === 'advanced') {
        formData.plan.frequency === 'monthly' ? price = 12 : price = 120;
    } else if (plan === 'pro') {
        formData.plan.frequency === 'monthly' ? price = 15 : price = 150;
    }

    return (
        <div className="selectPlan__billing--card">
            <img src={`../public/images/icon-${plan}`} alt={`icon for the ${plan} plan`} />
            <h3>{plan[0].toUpperCase + plan.slice(1)}</h3>
            <h4>{price}</h4>
        </div>
    )
}