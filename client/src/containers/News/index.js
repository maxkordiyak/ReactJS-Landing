import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import News from '../../components/News';
import { bindActionCreators } from 'redux';
import { actions } from 'redux-ghost';
import { getTranslate, getActiveLanguage } from 'react-localize-redux';

class NewsContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.actions.getPosts({ include: 'html, feature_image, plaintext', limit: 3 });
    }

    render() {
        return (
            <News
                actions={this.props.actions}
                blog={this.props.blog}
                translate={this.props.translate}
                currentLanguage={this.props.currentLanguage}
            />
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
};

const mapStateToProps = (state) => ({
    blog: state.blog,
    translate: getTranslate(state.locale),
    currentLanguage: getActiveLanguage(state.locale)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewsContainer));
