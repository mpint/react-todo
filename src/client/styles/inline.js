
/**
 * reusable inline jsx styles
 */
import { palette, testColors } from './muiTheme';

export const uppercaseStyle = { textTransform: 'uppercase' };

export const sectionBumperStyle = { margin: '20px 0' };

export const textCenterStyle = { textAlign: 'center' };

export const textLeftStyle = { textAlign: 'left' };

export const displayInlineBlockStyle = { display: 'inline-block' };

export const displayBlockStyle = { display: 'block' };

export const activeLinkStyles = { fontSize: '24px' };

export const tableHeaderStyle = { fontSize: 18, color: palette.primary1Color };

export const messageStyles = {
  success: { ...textCenterStyle, borderTop: `6px solid ${palette.messageBar.success}` },
  info: { ...textCenterStyle, borderTop: `6px solid ${palette.messageBar.info}` },
  warning: { ...textCenterStyle, borderTop: `6px solid ${palette.messageBar.warning}` },
  error: { ...textCenterStyle, borderTop: `6px solid ${palette.messageBar.error}` },
  hidden: { display: 'none' }
};

export const topBarStyles = { position: 'relative', backgroundColor: palette.primary1Color, height: 56 };

export const sideBarStyles = { textAlign: 'left', color: palette.menuTextColor, backgroundColor: palette.primary1Color, width: 256, overflow: 'hidden' };

export const menuWrapperStyles = { position: 'relative', width: 256, height: '100%' };

export const topBarLogoStyles = { padding: '0 4px 4px 14px' };

export const loginPageLogoStyles = { width: 312 };

export const menuStyles = { width: 164 };

export const menuItemStyles = { paddingLeft: 0, margin: '10px 0', color: testColors.testWhite };

export const menuItemTextStyles = { paddingLeft: 5 };

export const removeListStyles = { listStyleType: 'none' };

export const fileUploadButtonStyles = {
  cursor: 'pointer',
  position: 'absolute',
  top: 0, bottom: 0, right: 0, left: 0,
  width: '100%', opacity: 0
};

export const removeContainerPaddingEditorStyles = { position: 'relative', top: -50 };

export const removeContainerPaddingKibanaStyles = { position: 'relative', top: -40, left: 3 };

export const revisionStyles = { position: 'fixed', bottom: 10, left: 10, fontSize: 10, color: 'white', zIndex: 1500 };
