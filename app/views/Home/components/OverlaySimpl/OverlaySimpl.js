import React from 'react';
import Overlay from 'components/Overlay';
import IconPlayCircle from 'components/Icons/PlayCircle';
import Card from 'components/Card';
import s from './OverlaySimpl.css';
import sSection from 'components/Section/Section.css';
import sGrid from 'components/Grid/Grid.css';
import profileMobile from './assets/profile-mobile@1x.png';
import profileDesktop from './assets/profile-desktop@1x.png';
import userDashboardMobile from './assets/user-dashboard-mobile@1x.png';
import userDashboardDesktop from './assets/user-dashboard-desktop@1x.png';
import transactions from './assets/transactions@1x.png';
import documentation from './assets/documentation@1x.png';

class OverlaySimpl extends React.Component {
  constructor() {
    super();

    this.state = {
      isLoaded: false,
      videoLoaded: false
    };
  }

  loadVideo() {
    if (this.state.videoLoaded) return;

    this.refs.video.classList.add(s.loginActive);

    this.setState({
      videoLoaded: true
    });
  }

  loadBelowTheFold() {
    this.setState({
      isLoaded: true
    });
  }

  render() {
    return (
      <Overlay id="simpl" animateInCallback={this.loadBelowTheFold.bind(this)}>
        <article>
          <section>
            <h2>
              Simpl
            </h2>
            <p>
              My most recent work is done at Simpl. I work as the lead frontend
              developer for the website and the transaction. Head over to{' '}
              <a href="https://www.getsimpl.com/" target="_blank" rel="noopener nofollow">
                Simpl’s website
              </a>, to see my work.
            </p>
            <p>
              Our frontend stack includes:
            </p>
            <ul>
              <li>
                Ruby on Rails
              </li>
              <li>
                Browserify
              </li>
              <li>
                Uglifier
              </li>
              <li>
                JQuery
              </li>
              <li>
                JQuery UI
              </li>
              <li>
                Modernizr
              </li>
              <li>
                GSAP
              </li>
              <li>
                Jasmine
              </li>
              <li>
                SASS (Using BEM convention)
              </li>
              <li>
                Autoprefixer
              </li>
            </ul>
          </section>
          {this.state.isLoaded ? (
            <div>
              <section>
                <h3>
                  Login/Signup Flow
                </h3>
                <p>
                  At Simpl you can place orders now and pay us back later. Because of this
                  we need to approve a user first before it can start using our service.
                </p>
                <p>
                  After entering your mobile number, we make an ajax call to check if:
                </p>
                <ul>
                  <li>
                    The user is approved and has an account and then show the password form.
                  </li>
                  <li>
                    The user is approved and then show the activate account form.
                  </li>
                  <li>
                    The user isn’t approved and then show the get invite form.
                  </li>
                </ul>
                <div ref="video" className={s.login} onClick={this.loadVideo.bind(this)}>
                  {this.state.videoLoaded ? (
                    <video width="100%" autoplay loop controls>
                      <source src="./assets/static/login-flow.mp4" type="video/mp4" />
                    </video>
                  ) : (
                    <div>
                      <div className={s.loginBg} />
                      <div className={s.loginSeeDemo}>
                        <IconPlayCircle attributes={{ className: s.loginPlayCircleIcon }} />
                      </div>
                    </div>
                  )}
                </div>
              </section>
              <section>
                <h3>
                  User Pages
                </h3>
                <div className={sSection.row}>
                  <div className={sGrid.areaSingle}>
                    <Card>
                      <a className={s.profileMobile}
                        href={profileMobile}
                        target="_blank"
                        rel="noopener nofollow" />
                    </Card>
                  </div>
                  <div className={sGrid.areaSingle}>
                    <Card>
                      <a className={s.profileDesktop}
                        href={profileDesktop}
                        target="_blank"
                        rel="noopener nofollow" />
                    </Card>
                  </div>
                  <div className={sGrid.areaSingle}>
                    <Card>
                      <a className={s.userDashboardMobile}
                        href={userDashboardMobile}
                        target="_blank"
                        rel="noopener nofollow" />
                    </Card>
                  </div>
                  <div className={sGrid.areaSingle}>
                    <Card>
                      <a className={s.userDashboardDesktop}
                        href={userDashboardDesktop}
                        target="_blank"
                        rel="noopener nofollow" />
                    </Card>
                  </div>
                </div>
              </section>
              <section>
                <h3>
                  Merchant Pages
                </h3>
                <div className={sSection.row}>
                  <div className={sGrid.areaSingle}>
                    <Card>
                      <a className={s.transactions}
                        href={transactions}
                        target="_blank"
                        rel="noopener nofollow" />
                    </Card>
                  </div>
                  <div className={sGrid.areaSingle}>
                    <Card>
                      <a className={s.documentation}
                        href={documentation}
                        target="_blank"
                        rel="noopener nofollow" />
                    </Card>
                  </div>
                </div>
              </section>
            </div>
          ) : (
            <div className={s.loading}>
              Loading...
            </div>
          )}
        </article>
      </Overlay>
    )
  }
};

export default OverlaySimpl;
