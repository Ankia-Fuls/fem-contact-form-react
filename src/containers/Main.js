import React, { useState, useEffect } from 'react';

function Main() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [queryType, setQueryType] = useState('');
    const [message, setMessage] = useState('');
    const [termsAgreed, setTermsAgreed] = useState(false);

    const [isFormValid, setIsFormValid] = useState(false);
    const [fieldErrors, setFieldErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    // useEffect(() => {
    //     const errors = {};

    //     if (firstName.trim() === '') {
    //         errors.firstName = 'This field is required.';
    //     }

    //     if (lastName.trim() === '') {
    //         errors.lastName = 'This field is required.';
    //     }

    //     if (email.trim() === '') {
    //         errors.email_required = 'This field is required.';
    //     }

    //     if (!email.includes('@')) {
    //         errors.email_valid = 'Please enter a valid email address.';
    //     }

    //     if (queryType === '') {
    //         errors.query = 'Please select a query type.';
    //     }

    //     if (message.trim() === '') {
    //         errors.message = 'This field is required.';
    //     }

    //     if (!termsAgreed) {
    //         errors.termsAgreed = 'To submit this form, please consent to being contacted';
    //     }

    //     setFieldErrors(errors);

    //     const isEmailValid = email.includes('@') && email.trim() !== '';
    //     const isQueryValid = queryType !== "";
    //     const isMessageValid = message.trim() !== "";
    //     const areNamesValid = firstName.trim() !== '' && lastName.trim() !== '';
    //     const areTermsValid = termsAgreed;

    //     setIsFormValid(
    //         isEmailValid &&
    //         isQueryValid &&
    //         isMessageValid &&
    //         areNamesValid &&
    //         areTermsValid
    //     );
    // }, [firstName, lastName, email, queryType, message, termsAgreed]);


    const submitForm = (e) => {
        e.preventDefault();

        const errors = {};

        if (firstName.trim() === '') {
            errors.firstName = 'This field is required.';
        }

        if (lastName.trim() === '') {
            errors.lastName = 'This field is required.';
        }

        if (email.trim() === '') {
            errors.email_required = 'This field is required.';
        }

        if (!email.includes('@')) {
            errors.email_valid = 'Please enter a valid email address.';
        }

        if (queryType === '') {
            errors.query = 'Please select a query type.';
        }

        if (message.trim() === '') {
            errors.message = 'This field is required.';
        }

        if (!termsAgreed) {
            errors.termsAgreed = 'To submit this form, please consent to being contacted';
        }

        setFieldErrors(errors);

        const isEmailValid = email.includes('@') && email.trim() !== '';
        const isQueryValid = queryType !== "";
        const isMessageValid = message.trim() !== "";
        const areNamesValid = firstName.trim() !== '' && lastName.trim() !== '';
        const areTermsValid = termsAgreed;

        setIsFormValid(
            isEmailValid &&
            isQueryValid &&
            isMessageValid &&
            areNamesValid &&
            areTermsValid
        );


    }

    return (
        <main>
            <form className="form">
                <h1 className="form__heading">Contact Us</h1>
                <fieldset className="form__name">
                    <div className="form__name--first">
                        <label htmlFor="first-name">First Name <span className="form__required" aria-label="Required input.">*</span></label>
                        <input type="text" id="first-name" name="first-name" value={firstName} onChange={(e) => setFirstName(e.target.value)} className={(fieldErrors.firstName ? 'form__border--error' : 'form__border--normal')}></input>
                        {fieldErrors.firstName && (
                            <p className="form__error">{fieldErrors.firstName}</p>
                        )}

                    </div>
                    <div className="form__name--last">
                        <label htmlFor="last-name">Last Name <span className="form__required" aria-label="Required input.">*</span></label>
                        <input type="text" id="last-name" name="last-name" value={lastName} onChange={(e) => setLastName(e.target.value)} className={(fieldErrors.lastName ? 'form__border--error' : 'form__border--normal')}></input>
                        {fieldErrors.lastName && (
                            <p className="form__error">{fieldErrors.lastName}</p>
                        )}
                    </div>
                </fieldset>

                <fieldset className="form__email">
                    <label htmlFor="email">Email Address <span className="form__required" aria-label="Required input.">*</span></label>
                    <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className={(fieldErrors.email_required || fieldErrors.email_valid ? 'form__border--error' : 'form__border--normal')}></input>
                    {fieldErrors.email_required && (
                        <p className="form__error">{fieldErrors.email_required}</p>
                    )}
                    {fieldErrors.email_valid && (
                        <p className="form__error">{fieldErrors.email_valid}</p>
                    )}
                </fieldset>

                <fieldset className="form__type">
                    <legend>Query Type <span className="form__required" aria-label="Required input.">*</span></legend>
                    <div className="radio-buttons">
                        <label className="form__container form__border--normal" htmlFor="general">
                            <input className='form__container--input' type="radio" id="general" name="type" value="general" checked={queryType === 'general'} onChange={(e) => setQueryType(e.target.value)} />
                            <span className='form__container--checkbox'></span>
                            <p>General Enquiry</p>
                        </label>
                        {/* <div className="form__container">
                            <input type="radio" id="general" name="type" value="general" checked={queryType === 'general'} onChange={(e) => setQueryType(e.target.value)} />
                            <label htmlFor="general"></label>
                        </div> */}
                        <label className="form__container form__border--normal" htmlFor="support">
                            <input className='form__container--input' type="radio" id="support" name="type" value="support" checked={queryType === 'support'} onChange={(e) => setQueryType(e.target.value)} />
                            <span className='form__container--checkbox'></span>
                            <p>Support Request</p>
                        </label>
                        {/* <div className="form__container">
                            <input type="radio" id="support" name="type" value="support" checked={queryType === 'support'} onChange={(e) => setQueryType(e.target.value)} />
                            <label htmlFor="support">Support Request</label>
                        </div> */}
                    </div>
                    {fieldErrors.query && (
                        <p className="form__error">{fieldErrors.query}</p>
                    )}
                </fieldset>

                <fieldset className="form__message">
                    <legend>Message <span className="form__required" aria-label="Required input.">*</span></legend>
                    <textarea className={(fieldErrors.message ? 'form__message--text form__border--error' : 'form__message--text form__border--normal')} name="message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                    {fieldErrors.message && (
                        <p className="form__error">{fieldErrors.message}</p>
                    )}
                </fieldset>

                <fieldset >
                    <label htmlFor="consent" className="form__consent">
                        <input className='form__consent--input' type="checkbox" id="consent" name="consent" checked={termsAgreed} onChange={(e) => setTermsAgreed(!termsAgreed)}></input>
                        <span className='form__consent--checkbox'></span>
                        <p>I consent to being contacted by the team <span className="form__required" aria-label="Required input.">*</span></p>
                    </label>
                    {/* <div className="form__consent">
                        <input type="checkbox" id="consent" name="consent" checked={termsAgreed} onChange={(e) => setTermsAgreed(!termsAgreed)}></input>
                        <label htmlFor="consent">I consent to being contacted by the team <span className="form__required" aria-label="Required input.">*</span></label>
                    </div> */}

                    {fieldErrors.termsAgreed && (
                        <p className="form__error">{fieldErrors.termsAgreed}</p>
                    )}
                </fieldset>

                {/* <input className="form__submit" type="submit" value="Submit" disabled={!isFormValid} onClick={submitForm} /> */}
                <input className="form__submit" type="submit" value="Submit" onClick={submitForm} />
            </form>

            <dialog className="pop-up" open={isFormValid}>
                <div className="pop-up__heading">
                    <img src="./images/icon-success-check.svg" alt='checkmark' aria-hidden="true"></img>
                    <p>Message Sent!</p>
                </div>
                <p className="pop-up__text">Thanks for completing the form. We'll be in touch soon!</p>
            </dialog>

        </main>
    );
}

export default Main;