import React, { PropTypes } from 'react';
import config from '~/config/main.config';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import muiThemeFile from '~/styles/muiTheme';

const muiTheme = getMuiTheme(muiThemeFile);

function injectConfiguration(BaseComponent) {
  class ConfiguredComponent extends React.Component {
    static childContextTypes = {
      config: PropTypes.object.isRequired,
      muiTheme: PropTypes.object.isRequired
    };

    getChildContext() {
      return { config, muiTheme };
    }

    render() {
      return ( <BaseComponent { ...this.props }/> );
    }
  }

  return ConfiguredComponent;
}

export default injectConfiguration;
