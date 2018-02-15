import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Book from '../../components/Book';

class BookContainer extends Component {
    render() {
        return (
            <Book />
        );
    }
}

const mapStateToProps = (state) => ({
    state: state
});

export default withRouter(connect(mapStateToProps, null)(BookContainer));
