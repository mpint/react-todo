import React from 'react';
import renderer from 'react-test-renderer';

import { ConfiguredProvider } from '~/lib/test.helpers';

import injectConfig from '../injectConfig';
import TextComponent from '../../components/TextComponent';

describe('injectConfig', function() {

  it('should render', function() {
    const Thing = injectConfig(TextComponent);

    const component = renderer.create(
      <ConfiguredProvider>
        <Thing/>
      </ConfiguredProvider>
    );

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
