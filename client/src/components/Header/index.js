import React, {Component} from 'react';
import Nav from '../Nav';
import logo from '../../img/logo.png';
import menuIcon from '../../img/menu.png';
import closeIcon from '../../img/close.png';
import { NavLink } from 'react-router-dom';
import { Toolbar, ToolbarRow, ToolbarSection } from 'react-mdc-web/lib/Toolbar';
import { Link } from 'react-router-dom';
import { drawer } from 'material-components-web/dist/material-components-web';

import './index.css';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            headerStyle: {}
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            headerStyle: nextProps.state.user.headerStyle
        })
    }

    componentDidMount() {
        const $menuIcon = document.querySelector('.menu-icon');
        const $closeIcon = document.querySelector('.drawer-close-btn');
        const $drawer = document.querySelector('.mdc-drawer--temporary');

        if ($drawer) {
            const drawerInstance = new drawer.MDCTemporaryDrawer(document.querySelector('.mdc-drawer--temporary'));

            if ($menuIcon) {
                $menuIcon.addEventListener('click', () => drawerInstance.open = true);
            }

            if ($closeIcon) {
                $closeIcon.addEventListener('click', () => drawerInstance.open = false);
            }

        }
    }


    render() {
        return(
            <Toolbar style={this.state.headerStyle}>
            <ToolbarRow>
                <ToolbarSection align="start" className="logo-section">
                    <Link to="/">
                        <img className="logo" src={logo} alt="Logo"/>
                    </Link>
                </ToolbarSection>
                <ToolbarSection className="middle-section">
                    <Nav/>
                </ToolbarSection>
                <ToolbarSection align="end">
                    <ul className="toolbar-list">
                        {this.props.languages.map(language =>
                            <li className={this.props.currentLanguage.code === language.code ? "toolbar-list__item toolbar-list__item--languages active" : "toolbar-list__item toolbar-list__item--languages"}
                                key={language.code}
                            >
                                <span onClick={ () => this.props.setActiveLanguage(language.code) }>
                                    {language.name}
                                </span>
                            </li>
                        )}
                        <li style={{ marginLeft: '5.38%' }} className="toolbar-list__item toolbar-list__item--social">
                            <a href="https://www.facebook.com/zanna.dubska" className="social facebook" target="_blank">

                            </a>
                        </li>
                        <li className="toolbar-list__item toolbar-list__item--social">
                            <a href="https://www.instagram.com/zannadubska/" className="social instagram" target="_blank">
                            </a>
                        </li>
                        <li className="toolbar-list__item toolbar-list__item--social">
                            <a href="https://lv.linkedin.com/in/zanna-dubska-23a9915a" className="social linkedin" target="_blank">
                            </a>
                        </li>
                    </ul>
                </ToolbarSection>
                <img className="menu-icon" src={menuIcon} alt="Menu Icon" />
            </ToolbarRow>

                <aside className="mdc-drawer mdc-drawer--temporary mdc-typography">
                    <nav className="mdc-drawer__drawer">
                        <header className="mdc-drawer__header">
                            <a href="/">
                                <img className="logo" src={logo} alt="Logo" />
                            </a>
                            <img className="drawer-close-btn" src={closeIcon} alt="Close Menu Icon" />
                        </header>
                        <nav className="mdc-drawer__content mdc-list">
                            <NavLink className="mdc-list-item" key="about" to="/about">About</NavLink>
                            <NavLink className="mdc-list-item" key="philosophy" to="/philosophy">Philosophy</NavLink>
                            <NavLink className="mdc-list-item" key="services" to="/services">Services</NavLink>
                            <NavLink className="mdc-list-item" key="book" to="/book">The Book</NavLink>
                            <NavLink className="mdc-list-item" key="news" to="/news">News/Events</NavLink>
                            <NavLink className="mdc-list-item" key="contact" to="/contact">Contact</NavLink>
                            <ul className="toolbar-list drawer-list">
                                {this.props.languages.map(language =>
                                    <li className={this.props.currentLanguage.code == language.code ? "toolbar-list__item toolbar-list__item--languages active" : "toolbar-list__item toolbar-list__item--languages"}
                                            key={language.code}
                                        >
                                        <span onClick={ () => this.props.setActiveLanguage(language.code) }>
                                            {language.name}
                                        </span>
                                        </li>
                                )}
                            </ul>
                            <ul className="toolbar-list mdc-list-item drawer-social">
                            <li className="toolbar-list__item toolbar-list__item--social drawer-link">
                                <a href="https://www.facebook.com/zanna.dubska" className="social facebook" target="_blank">
                                </a>
                                </li>
                                <li className="toolbar-list__item toolbar-list__item--social drawer-link">
                                    <a href="https://www.instagram.com/zannadubska/" className="social instagram" target="_blank">
                                    </a>
                                </li>
                                <li className="toolbar-list__item toolbar-list__item--social drawer-link">
                                    <a href="https://lv.linkedin.com/in/zanna-dubska-23a9915a" className="social linkedin" target="_blank">
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </nav>
                </aside>

            </Toolbar>
        )
    }
}
export default Header;
