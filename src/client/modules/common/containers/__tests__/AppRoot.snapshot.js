import React from 'react';
import renderer from 'react-test-renderer';

import { wrapWithContext, store, muiTheme, config } from '~/lib/test.helpers';

import AppRoot from '../AppRoot';

describe('AppRoot', function() {
  const contextTypes = { muiTheme: React.PropTypes.object, config: React.PropTypes.object };

  it('should render', function() {
    const component = renderer.create(
      wrapWithContext(
        { muiTheme, config },
        contextTypes,
        <AppRoot />
      )
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
