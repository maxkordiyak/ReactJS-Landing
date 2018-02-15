import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import About from '../../../components/About/View';

class AboutContainer extends Component {
    componentDidMount() {
    }

    render() {
        return (
            <About />
        );
    }
}

const mapStateToProps = (state) => ({
    state: state
});

export default withRouter(connect(mapStateToProps, null)(AboutContainer));
