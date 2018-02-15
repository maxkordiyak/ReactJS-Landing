import React, { Component } from 'react';
import Fonts from './utils/Fonts';
import { withRouter } from 'react-router-dom';
import { Grid, Cell } from 'react-mdc-web/lib/Grid';
import Header from './components/Header';
import Routes from './Routes';
import './App.css';
import {connect} from "react-redux";
import Footer from './components/Footer';
import { subscribe } from './actions';
import { setActiveLanguage, getLanguages, getActiveLanguage } from 'react-localize-redux';

class App extends Component {
    constructor(props) {
        super(props);
        this.setActiveLanguage = this.setActiveLanguage.bind(this);
    }

    componentDidMount() {
        Fonts();
    }

    setActiveLanguage(name) {
        this.props.setActiveLanguage(name);
        localStorage.setItem('language', name);
    }

    render() {
        return(
            <div className="Site">
                <div className="Site-content">
                    <div className="App-header">
                        <Header
                            state={this.props.state}
                            languages={this.props.languages}
                            setActiveLanguage={this.setActiveLanguage}
                            currentLanguage={this.props.currentLanguage}
                        />
                    </div>
                    <div>
                        <div className="App">
                            <main>
                                <Grid className="main-grid">
                                    <Cell col={12}>
                                        <Routes />
                                    </Cell>
                                </Grid>
                            </main>
                        </div>
                    </div>
                </div>
                <Footer state={this.props.state}
                        subscribe={this.props.subscribe}
                />
            </div>
        )
    }

}

const mapDispatchToProps = dispatch => {
    return {
        subscribe: data => dispatch(subscribe(data)),
        setActiveLanguage: (name) => dispatch(setActiveLanguage(name))
    };
};


const mapStateToProps = (state) => ({
    state: state,
    languages: getLanguages(state.locale),
    currentLanguage: getActiveLanguage(state.locale)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));


