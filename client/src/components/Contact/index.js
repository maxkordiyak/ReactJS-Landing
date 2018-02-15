import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdc-web';
import { MDCTextField, MDCTextFieldFoundation } from '@material/textfield/dist/mdc.textfield';

import './index.css';

class Contact extends Component {
    componentDidMount() {
        const email = this.refs.email;
        const name = this.refs.name;
        if (!email && !name) {return false};

        const email_textfield = new MDCTextField(email);
        const name_textfield = new MDCTextField(name);
    }

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            message: "",
            sent: false
        };
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        let email, name, message;
        e.preventDefault();
        this.props.contact({
            email: this.state.email,
            name: this.state.name,
            message: this.state.message
        });
        this.setState({
            sent: true
        });
    };

    render() {
        return(
            <div className="page contact-page">
                {this.state.sent ? (
                    <Grid>
                        <Cell col={3}>
                            <h2 className="mdc-typography--title h2-title">
                                Contact
                            </h2>
                        </Cell>
                        <Cell col={6}>
                            <p className="mdc-typography--body page-title" style={{ marginTop: '8px', marginBottom: '0' }}>Thank you!</p>
                                <p className="mdc-typography--body page-title">Your message has been sent.</p>
                        </Cell>

                        <Cell col={3}></Cell>
                    </Grid>
                ) : (
                    <form className="no-padding" onSubmit={this.onSubmit}>
                    <Grid>
                    <Cell col={3}>
                    <h2 className="mdc-typography--title h2-title">
                    Contact
                    </h2>
                    </Cell>
                    <Cell col={6}>
                        <p className="mdc-typography--title page-title" style={{ marginTop: '8px' }}>I would love to hear from you!</p>
                    </Cell>

                    <Cell col={3}></Cell>

                    <Cell col={3}>
                    </Cell>

                    <Cell col={3}>
                        <div className="mdc-text-field mdc-text-field--fullwidth contact__textfield" ref='name'>
                        <input type="text"
                        required
                        id="name"
                        className="mdc-text-field__input"
                        name="name"
                        placeholder="Your name"
                        value={this.state.name}
                        onChange={({target : {value : name}}) => {
                        this.setState({ name })
                    }}
                        />
                        <div className="mdc-text-field__bottom-line"></div>
                        </div>
                        </Cell>
                        <Cell col={3}>
                        <div className="mdc-text-field mdc-text-field--fullwidth contact__textfield" ref='email'>
                        <input type="email"
                           required
                        id="email"
                        className="mdc-text-field__input"
                        name="email"
                        placeholder="Your email"
                        value={this.state.email}
                        onChange={({target : {value : email}}) => {
                        this.setState({ email })
                    }}
                        />
                        <div className="mdc-text-field__bottom-line"></div>
                        </div>
                        </Cell>

                        <Cell col={3}></Cell>

                        <Cell col={3}>
                        </Cell>

                        <Cell col={6}>
                        <div className="mdc-text-field mdc-text-field--fullwidth contact__textfield" ref='message'>
                        <input type="text"
                               required
                        id="message"
                        className="mdc-text-field__input"
                        name="message"
                        placeholder="Message"
                        value={this.state.message}
                        onChange={({target : {value : message}}) => {
                        this.setState({ message })
                    }}
                        />
                        <div className="mdc-text-field__bottom-line"></div>
                        </div>
                        <div>
                            <button className="mdc-button mdc-button--stroked send--button"
                            type="submit">
                                Send
                            </button>
                        </div>
                        </Cell>
                    <Cell col={3}></Cell>
                    <Cell col={3}></Cell>
                    <Cell col={6}></Cell>
                    <Cell col={3}></Cell>
                    </Grid>
                    </form>
                )}

            </div>
        )
    }
}
export default Contact;
