import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdc-web/lib/Grid';
import format from 'date-fns/format';

import './index.css';

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hideMore: false,
            hideLess: true
        };
        this.showMore = this.showMore.bind(this);
        this.showLess = this.showLess.bind(this);
    }

    showMore(e) {
        e.preventDefault();
        this.setState({
            hideMore: true,
            hideLess: false
        }, () => {
            this.props.actions.getPosts({ limit: "all" });
        });
    };

    showLess(e) {
        e.preventDefault();
        this.setState({
            hideMore: false,
            hideLess: true
        }, () => {
            this.props.actions.getPosts({ limit: 3 });
        });
    };

    render() {
        const regex = new RegExp(/^(https?:\/\/)?((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))(\:\d+)?(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/i);

        const formatText = (text) => (
            `${text.slice(0, 150)}...`
        );

        const isLink = (str) => (
            str.match(regex)
        );

        return(
            <div className="page">
                <h2 className="mdc-typography--title h2-title">
                    News/Events
                </h2>
                {this.props.blog.posts.data && this.props.blog.posts.data.map((post, index) => (
                    <Grid key={index}>
                        <Cell col={3}></Cell>
                        <Cell col={6}>
                            <article className="article">
                                {
                                    isLink(post.markdown) ? (
                                        <h3 className="article__h3-title"><a href={post.markdown} target="_blank">{ this.props.translate(`${post.title}`) }</a></h3>
                                    ) : (
                                        <h3 className="article__h3-title"><a href="#" className="link-about" target="_blank">{post.title}</a></h3>
                                    )
                                }
                                <div className="article__date">
                                    {format(post.published_at, 'Do MMMM, YYYY')}
                                </div>
                                {post.meta_description ? (
                                    <div>
                                        {post.meta_description}
                                    </div>
                                ) : (
                                    formatText(post.markdown)
                                )}
                            </article>
                        </Cell>
                        <Cell col={3}>
                            <img className="article__image" src={`http://ghost.innvation.com${post.image}`} alt={`${post.title}`} />
                        </Cell>
                    </Grid>
                ))}
                <Grid>
                    <Cell col={3}></Cell>
                    <Cell col={6}>
                        <button
                            className={this.state.hideMore ?
                                'shouldHide' :
                                'mdc-button mdc-button--stroked show-more-button'}
                            onClick={this.showMore}>Show More
                        </button>
                        <button
                            className={this.state.hideLess ?
                                'shouldHide' :
                                'mdc-button mdc-button--stroked show-more-button'}
                            onClick={this.showLess}>Show Less
                        </button>
                    </Cell>
                    <Cell col={3}>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default News;


