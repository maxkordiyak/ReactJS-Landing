import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Philosophy from '../../components/Philosophy';

class PhilosophyContainer extends Component {
    render() {
        return (
            <Philosophy />
        );
    }
}

const mapStateToProps = (state) => ({
    state: state
});

export default withRouter(connect(mapStateToProps, null)(PhilosophyContainer));
