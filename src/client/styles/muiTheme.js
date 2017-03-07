import {
  white, darkBlack, fullBlack,
  cyan700, grey100, grey300, grey400, grey500, pinkA200
} from 'material-ui/styles/colors';

import { fade } from 'material-ui/utils/colorManipulator';

/*
  brand colors
 */
export const testBlue = '#33ace1';
export const testMenuItemGrey = '#97989C';
export const testDarkGrey = '#595A60';
export const testWhite = '#FFFFFF';
export const testBlack = '#000000';

/*
accent colors
*/

export const testAccentRed = '#971B1E';
export const testAccentYellow = '#DBB527';
export const testAccentGrey = '#B4B3B0';

export const fontFamily = 'Montserrat, sans-serif';

export const testColors = {
  testBlue: '#33ace1',
  testMenuItemGrey: '#97989C',
  testDarkGrey: '#595A60',
  testWhite: '#FFFFFF',
  testBlack: '#000000',
  testAccentRed: '#971B1E',
  testAccentYellow: '#DBB527',
  testAccentGrey: '#B4B3B0'
}

export const spacing = {
  iconSize: 24,
  desktopGutter: 24,
  desktopGutterMore: 32,
  desktopGutterLess: 16,
  desktopGutterMini: 8,
  desktopKeylineIncrement: 64,
  desktopDropDownMenuItemHeight: 32,
  desktopDropDownMenuFontSize: 15,
  desktopDrawerMenuItemHeight: 48,
  desktopSubheaderHeight: 48,
  desktopToolbarHeight: 56
};

export const palette = {
  primary1Color: testDarkGrey,
  primary2Color: cyan700,
  primary3Color: grey400,
  accent1Color: testAccentGrey,
  accent2Color: grey100,
  accent3Color: grey500,
  textColor: testDarkGrey,
  alternateTextColor: testWhite,
  canvasColor: white,
  borderColor: grey300,
  disabledColor: fade(testDarkGrey, 0.9),
  pickerHeaderColor: testBlue,
  clockCircleColor: fade(darkBlack, 0.7),
  shadowColor: fullBlack,
  messageBar: {
    info: testBlue,
    success: testBlue,
    warning: testAccentYellow,
    error: testAccentRed
  }
};

export default { spacing, palette, fontFamily, testColors };
