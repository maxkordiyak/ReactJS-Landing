import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdc-web/lib/Grid';
import { MDCTextField, MDCTextFieldFoundation } from '@material/textfield/dist/mdc.textfield';
import './index.css';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            hideSubscribe: true,
            hideSuccess: true
        };
        this.onFocus = this.onFocus.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        let email;
        e.preventDefault();
        this.props.subscribe({
            email: this.state.email
        });
        this.setState({
            hideSubscribe: true,
            hideSuccess: false,
            email: ""
        });
        setTimeout(() => {
            this.setState({ hideSuccess: true });
        }, 3000);
    };


    onFocus() {
        this.setState({
            hideSubscribe: false
        })
    }

    render() {
        return(
            <div>
                {this.props.state.user.displayFooter ? (
                    <footer className="footer">
                        <form className="footer-grid" onSubmit={this.onSubmit}>
                            <Grid style={{ padding: '0 0 30px 0' }}>
                            <Cell col={3}>
                                <div className="footer__contacts-block">
                                    <div className="footer__contacts-block__title">
                                        Contact
                                    </div>
                                    <a className="footer__contacts-block__email" href="mailto:me@zannadubska.com">me@zannadubska.com</a>
                                    <a className="footer__contacts-block__tel" href="tel:+37129244809">+37 129 244 809</a>
                                    <div className="footer__contacts-block__copyright">
                                        &#169; 2018 Žanna Dubska
                                    </div>
                                </div>
                            </Cell>
                            <Cell col={3}>
                                <div className="footer__subscribe" id="foot">
                                    <div className="footer__subscribe-block__title">
                                        Subscribe
                                    </div>
                                    <div className="mdc-text-field mdc-text-field--fullwidth footer__subscribe-block__textfield">
                                        <input type="email"
                                               required
                                               id="email"
                                               onFocus={this.onFocus}
                                               className="mdc-text-field__input"
                                               name="email"
                                               placeholder="Enter your email"
                                               value={this.state.email}
                                               onChange={({target : {value : email}}) => {
                                                   this.setState({ email })
                                               }}
                                        />
                                        <div className="mdc-text-field__bottom-line"></div>
                                    </div>
                                    <ul className="footer-links">
                                        <li className="footer-links__item">
                                            <a href="https://www.facebook.com/zanna.dubska" className="social facebook" target="_blank">
                                            </a>
                                        </li>
                                        <li className="footer-links__item">
                                            <a href="https://www.instagram.com/zannadubska/" className="social instagram" target="_blank">
                                            </a>
                                        </li>
                                        <li className="footer-links__item">
                                            <a href="https://lv.linkedin.com/in/zanna-dubska-23a9915a" className="social linkedin" target="_blank">
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                </Cell>
                                <Cell col={2}>
                                    <span
                                        className={this.state.hideSuccess ?
                                            'shouldHide' :
                                            'message--success'}
                                    >
                                        Thank you! <br />Your subscription has been successfully sent!
                                    </span>
                                    <button type="submit"
                                        className={this.state.hideSubscribe ?
                                        'shouldHide' :
                                        'mdc-button mdc-button--stroked subscribe__button'}
                                        >
                                        Subscribe
                                    </button>
                                </Cell>
                                <Cell col={4}>
                                </Cell>
                            </Grid>
                        </form>
                    </footer>
                ) : (
                    null
                )}
            </div>
        )
    }

}
export default Footer;
