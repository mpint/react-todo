import React, { PropTypes, Component } from 'react';
import { revisionStyles } from '~/styles/inline';
import { setLocalStorageItem } from '~/modules/common/state/localStorage';
import { version, commit } from '../../../../../.revision';
import MenuList from '~/modules/common/components/MenuList';

class AppRoot extends Component {
  constructor() {
    super();

    this.state = {
      viewportWidth: window.innerWidth,
      viewportHeight: window.outerHeight,
      contentWidth: window.innerWidth,
      contentHeight: window.outerHeight
    };
  }

  componentDidUpdate() {
    const currentPath = this.props.location.pathname;
    setLocalStorageItem('app-history', currentPath);
  }

  componentDidMount = () => {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.handleResize);
  }

  getChildContext = () =>  {
    return {
      viewportWidth: this.state.viewportWidth,
      viewportHeight: this.state.viewportHeight,
      contentWidth: this.state.contentWidth,
      contentHeight: this.state.contentHeight
    };
  }

  handleResize = () => {
    this.setState({
      viewportWidth: window.innerWidth,
      viewportHeight: window.outerHeight,
      contentWidth: window.innerWidth,
      contentHeight: window.outerHeight
    });
  }

  render () {
    return (
      <div>
        <div className="menu-container">
          <MenuList
            pageConfig={ this.context.config.pages } />
        </div>

        <div className="grid-container">
          { this.props.children }
        </div>

        <div style={ revisionStyles }>
          { version && `ver. ${version}` }
          { commit && ` (${commit.slice(0, 7)})`}
        </div>
      </div>
    );
  }
}

AppRoot.contextTypes = {
  muiTheme: PropTypes.object.isRequired,
  config: PropTypes.object.isRequired
};

AppRoot.childContextTypes = {
  viewportHeight: PropTypes.number.isRequired,
  viewportWidth: PropTypes.number.isRequired,
  contentWidth: PropTypes.number.isRequired,
  contentHeight: PropTypes.number.isRequired
};

export default AppRoot;
