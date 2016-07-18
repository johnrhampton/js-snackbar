export const SNACKBAR = {
  text: 'Default Text',
  textColor: '#ffffff',
  width: 'auto',
  showAction: true,
  actionText: 'Dismiss',
  actionTextColor: '#4caf50',
  backgroundColor: '#323232',
  pos: 'bottom-left',
  duration: 5000,
  customClass: '',
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
