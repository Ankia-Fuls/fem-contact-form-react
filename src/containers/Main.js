function Main() {
    return (
        <main>
            <form className="form">
                <h1 className="form__heading">Contact Us</h1>
                <fieldset className="form__name">
                    <div className="form__name--first">
                        <label for="first-name">First Name</label>
                        <input type="text" id="first-name" name="first-name"></input>
                        <p className="form__error">This field is required</p>
                    </div>
                    <div className="form__name--last">
                        <label for="last-name">Last Name</label>
                        <input type="text" id="last-name" name="last-name"></input>
                        <p className="form__error">This field is required</p>
                    </div>
                </fieldset>

                <fieldset className="form__email">
                    <label for="email">Email Address</label>
                    <input type="email" id="email" name="email"></input>
                    <p className="form__error form__error--valid">Please enter a valid email address</p>
                    <p className="form__error">This field is required</p>
                </fieldset>

                <fieldset className="form__type">
                    <legend>Query Type</legend>
                    <div className="radio-buttons">
                        <div>
                            <input type="radio" id="general" name="type" value="general" />
                            <label for="general">General Enquiry</label>
                        </div>
                        <div>
                            <input type="radio" id="support" name="type" value="support" />
                            <label for="support">Support Request</label>
                        </div>
                    </div>
                    <p className="form__error">Please select a query type</p>
                </fieldset>

                <fieldset className="form__message">
                    <legend>Message</legend>
                    <textarea name="message"></textarea>
                    <p className="form__error">This field is required</p>
                </fieldset>

                <fieldset className="form__consent">
                    <input type="checkbox" id="consent" name="consent"></input>
                    <label for="consent">I consent to being contacted by the team</label>
                    <p className="form__error">To submit this form, please consent to being contacted</p>
                </fieldset>

                <input className="form__submit" type="submit" value="Submit" />
            </form>

            <dialog className="pop-up">
                <div className="pop-up__heading">
                    <img src="./images/icon-success-check.svg"></img>
                    <p>Message Sent!</p>
                </div>
                <p className="pop-up__text">Thanks for completing the form. We'll be in touch soon!</p>
            </dialog>
        </main>
    );
}

export default Main;