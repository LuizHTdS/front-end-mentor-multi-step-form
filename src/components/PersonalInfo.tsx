type FormProps = {
    formData: any;
    setFormData: React.Dispatch<FormData>;
}

export const PersonalInfo = (props: FormProps) => {
    return (
        <section className="personalInfo">
            <div className="personalInfo__heading">
                <h1>Personal Info</h1>
                <h2>Please provide your name, email address and phone number</h2>
            </div>
            <div className="personalInfo__form">
                <div className="personalInfo__form--inputBox">
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder="e.g Stephen King" name="name" value={props.formData.info.name} />
                </div>
                <div className="personalInfo__form--inputBox">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="email" placeholder="e.g stephenking@lorem.com" value={props.formData.info.email} />
                </div>
                <div className="personalInfo__form--inputBox">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="text" name="phone" placeholder="e.g. +1 234 567 890" value={props.formData.info.phone} />
                </div>
            </div>
            <NextStepBtn />
        </section>
    )
}