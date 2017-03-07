import React, { PropTypes, Component } from 'react';

import GithubIcon from 'material-ui/svg-icons/action/gavel';
import TextComponent from '~/modules/common/components/TextComponent';

import { textCenterStyle, uppercaseStyle } from '~/styles/inline';

class CreditsPage extends Component {
  constructor() {
    super();
  }

  render () {
    const CONTENT_VERTICAL_OFFSET = 150;

    const { config } = this.context;
    const verticalCenterStyle = { marginTop: this.context.viewportHeight / 2 - CONTENT_VERTICAL_OFFSET };

    return (
      <div style={ { ...verticalCenterStyle, ...textCenterStyle } }>
        <h2 style={ uppercaseStyle }> Brought to you by...</h2>

        <TextComponent
          content={ 'A heavily modified version of...' } />
        <TextComponent
          content={ <a href="https://github.com/coryhouse/react-slingshot">React Slingshot</a> } />

        <br />

        <TextComponent
          content={ 'And a lightly modified version of...' } />
        <TextComponent
          content={ <a href="https://github.com/jeffijoe/koa-es7-boilerplate">koa-es7-boilerplate</a> } />

        <br />

        <TextComponent
          content={ 'And a bunch of other stuff in package.json' } />

        <br />

        <TextComponent
          content={ 'Contact me' } />

        <TextComponent
          content={
            <a href="mailto:mpinter09@gmail.com" target="_top">
              <i className="fa fa-envelope"></i>
            </a>
          } />

      </div>
    );
  }
}

CreditsPage.contextTypes = {
  config: PropTypes.object.isRequired,
  viewportHeight: PropTypes.number.isRequired
};

export default CreditsPage;
