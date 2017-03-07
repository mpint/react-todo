import React from 'react';
import muiThemeFile from '~/styles/muiTheme';
import mainConfig from '~/config/main.config';
import reduxStore from '~/config/store/configureStore';
import { Provider } from 'react-redux';
/* mocks and configurations */

export const router = {};
export const muiTheme = muiThemeFile;
export const config = mainConfig;
export const store = reduxStore;

/*
  A configured redux store provider for testing
  Usage:
    <ConfiguredProvider>
      <MyComponent/>
    </ConfiguredProvider> will inject initial app state into MyComponent

    <ConfiguredProvider state= { customState }>
      <MyComponent/>
    </ConfiguredProvider> will inject customState into MyComponent
 */
export const ConfiguredProvider = (props) => {
  const initialState = store().getState();

  const injectedState = !props.state ? undefined :
    Object.keys(props.state).reduce(
      (out, stateName) => ({ ...out, [stateName]: { ...out[stateName], ...props.state[stateName] } }),
      initialState
    );

  return (
    <Provider store={ reduxStore(injectedState) }>
      { props.children }
    </Provider>
  );
};

ConfiguredProvider.defaultProps = { state: {} }

/**
 * helper function for calling generator.next().value
 *
 * @param  {generator} generator
 * @param  {arguments} arguments list that will be passed into next
 * @return {Any}           the next value of the generator
 */
export function nextValue(generator, ...args) {
  return generator.next(...args).value;
}

/**
 * helper function for calling generator.throw().value
 *
 * @param  {generator} generator
 * @param  {arguments} arguments list that will be passed into throw
 * @return {Any}           the thrown value of the generator
 */
export function throwValue(generator, ...args) {
  return generator.throw(...args).value;
}

// http://broonix-rants.ghost.io/testing-with-react-context/
export function wrapWithContext(context, contextTypes, children) {
  const wrapperWithContext = React.createClass({
    childContextTypes: contextTypes,
    getChildContext() {
      return context;
    },
    render() {
      return children;
    }
  });

  return React.createElement(wrapperWithContext);
}
