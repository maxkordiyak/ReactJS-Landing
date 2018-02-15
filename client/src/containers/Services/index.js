import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Services from '../../components/Services';

class ServicesContainer extends Component {
    render() {
        return (
            <Services />
        );
    }
}

const mapStateToProps = (state) => ({
    state: state
});

export default withRouter(connect(mapStateToProps, null)(ServicesContainer));
