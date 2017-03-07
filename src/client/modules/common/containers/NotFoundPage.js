import React, { PropTypes, Component } from 'react';

import { Link } from 'react-router';
import { textCenterStyle } from '~/styles/inline';

class NotFoundPage extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const verticalCenterStyle = { marginTop: this.context.viewportHeight / 2 };

    return (
      <div style={ { ...verticalCenterStyle, ...textCenterStyle } }>
        <h4>
          404 Page Not Found
        </h4>
        <Link to="/"> Go back to homepage </Link>
      </div>
    );
  }
};

NotFoundPage.contextTypes = {
  viewportHeight: PropTypes.number.isRequired
};

export default NotFoundPage;
