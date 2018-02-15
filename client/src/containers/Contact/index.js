import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Contact from '../../components/Contact';
import { contact } from '../../actions';

class ContactContainer extends Component {
    render() {
        return (
            <Contact contact={this.props.contact} />
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        contact: data => dispatch(contact(data))
    };
};

const mapStateToProps = (state) => ({
    state: state
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ContactContainer));
