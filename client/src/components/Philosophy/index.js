import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdc-web/lib/Grid';
import { Link } from 'react-router-dom';

class Philosophy extends Component {
    render() {
        return(
        <div className="page">
            <Grid>
                <Cell col={3}>
                    <h2 className="mdc-typography--title h2-title">
                        3E Philosophy
                    </h2>
                </Cell>
                <Cell col={6}>
                    <div className="philosophy-description">
                        <p className="mdc-typography--body">The 3E Philosophy is focusing on being more elegant, more effective, in a financially efficient way.</p>

                        <p className="mdc-typography--body">I am happy to share my 3E Philosophy with you. I will teach you how to buy fewer clothes and to gain endless possibilities for combination. How to combine elegance and convenience. How to combine clothing in a creative and stylish way.</p>

                        <p className="mdc-typography--body">You will learn how to choose proper garments to enhance your body forms and proportions and complement your style. How to choose right lingerie and sunglasses. How to select proper shoes and stylish accessories.</p>

                        <p className="mdc-typography--body">You will learn the secrets and tricks of industry professionals.</p>

                        <p className="mdc-typography--body">Please see my <Link to='/news' className="link-default">Events</Link> section for announcements of upcoming 3E Philosophy classes, events, and shopping tours.</p>
                    </div>
                </Cell>
                <Cell col={3}>
                </Cell>
            </Grid>
        </div>
        )
    }
}
export default Philosophy;
