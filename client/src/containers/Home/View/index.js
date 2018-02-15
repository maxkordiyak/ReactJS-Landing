import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {hideFooter, showFooter, hideBoxShadow, showBoxShadow} from '../../../actions';
import Home from '../../../components/Home/View';

class HomeContainer extends Component {
    componentDidMount() {
      this.props.hideBoxShadow();
      this.props.hideFooter();
    }

    componentWillUnmount() {
        this.props.showBoxShadow();
        this.props.showFooter();
    }

  render() {
    return (
      <Home />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
      hideFooter: () => dispatch(hideFooter()),
      showBoxShadow: () => dispatch(showBoxShadow()),
      hideBoxShadow: () => dispatch(hideBoxShadow()),
      showFooter: () => dispatch(showFooter())
  }
};

const mapStateToProps = (state) => ({
  state: state
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeContainer));
