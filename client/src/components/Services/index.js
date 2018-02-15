import React from 'react';
import { Grid, Cell } from 'react-mdc-web/lib/Grid';

import './index.css';

export default ({ }) => (
    <div className="page">
        <Grid>
            <Cell col={3}>
                <h2 className="mdc-typography--title h2-title">
                    Services
                </h2>
            </Cell>
            <Cell col={6}>
                <div className="philosophy-description">
                    <p className="mdc-typography--body" style={{ marginTop: '12px' }}>Your image is about perception. People make the judgment about you during the first 10 seconds. You tell your story to the outside world through your appearance. Wearing the right clothes, styles, fit, colors and having a right attitude makes you feel great and you project confidence.</p>

                    <p className="mdc-typography--body">Your best self is produced by your visual appearance, verbal and non-verbal communications. Your image will create a lasting impression and will help you at work, school, social life, dates, and business deals.</p>

                    <hr />
                    <p className="mdc-typography--body services-subtitle">Public speaking, lectures, and seminars</p>

                    <p className="mdc-typography--body services-paragraph" style={{ marginTop:'10px', marginBottom: '10px' }}>In my lectures, I will teach you to use the power of style and appearance in your professional and personal life to your advantage.</p>
                    <ul className="services-ul">
                        <li>
                            Look 10 years younger with the right clothes
                        </li>
                        <li>
                            Look 10 kg slimmer with the right clothes
                        </li>
                        <li>
                            Looking the best with what you have got.
                        </li>
                        <li>
                            The spring upgrade.
                        </li>
                        <li>
                            The icons of style - who are they?
                        </li>
                        <li>
                            How to live in style on a budget.
                        </li>
                        <li>
                            Looking great on every occasion using cloths from your wardrobe.
                        </li>
                        <li>
                            What to wear, and what to put further away in your closet.
                        </li>
                        <li>
                            Follow the dress code and maintaining the style.
                        </li>
                        <li>
                            Increase your social rating with your appearance.
                        </li>
                        <li>
                            Making the first impression a right way.
                        </li>
                    </ul>
                    <hr />
                    <p className="mdc-typography--body services-subtitle">Image Consulting</p>

                    <p className="mdc-typography--body services-paragraph">I work with men and woman to make their appearance work for them.</p>

                    <p className="mdc-typography--body services-paragraph">Personal Image
                        I will help you look great, feel great and be more confident in yourself. Your wardrobe, accessories and body language will help you shape your best image and unique personal style to open doors and create a lasting impression.
                    </p>

                    <p className="mdc-typography--body services-paragraph">Professional Image
                        Does your image set you apart for the next person, does it help in your career goals?  What is the story your appearance tell? The way you look is crucial for professional growth. Your look tells how organized, influential, credible, savvy, and sharp you are. Do not let your appearance tell a wrong story about yourself.
                    </p>

                    <p className="mdc-typography--body services-paragraph">Coaching
                        I help the individuals to improve confidence, better communication, achieve goals, visualization, spirituality, motivation, and relationships
                    </p>

                    <p className="mdc-typography--body services-paragraph">Tailored services
                        Is there any other way I can help you or you have a special occasion, contact me!</p>
                </div>
            </Cell>
            <Cell col={3}>
            </Cell>
        </Grid>
    </div>
);
