export const ACTION_TYPE = {
  TEXT: 'TEXT',
  CLOSE: 'CLOSE',
  NONE: 'NONE'
};

export const SNACKBAR = {
  text: 'Default Text',
  textColor: '#ffffff',
  width: 'auto',
  actionType: ACTION_TYPE.NONE,
  actionText: 'Dismiss',
  actionTextColor: '#ffffff',
  backgroundColor: '#323232',
  pos: 'bottom-right',
  duration: 5000,
  customClass: '',
  notifyIcon: null, //'info_outline',
  imgSrc: null,
  onActionClick: (element) => {
    element.style.opacity = 0;
  }
};

export const INNER_ELEMENT = {
  margin: 0,
  padding: 0,
  fontSize: '14px',
  fontWeight: 300,
  lineHeight: '1em'
};
