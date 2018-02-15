import { SHOW_FOOTER, HIDE_FOOTER, HIDE_SHADOW, SHOW_SHADOW } from '../actions';

export default (state = { displayFooter: true }, action) => {
  const { type } = action;

  switch (type) {
  case SHOW_FOOTER:
      return Object.assign({}, state, {
          displayFooter: true
      });
  case HIDE_FOOTER:
      return Object.assign({}, state, {
          displayFooter: false
      });
  case HIDE_SHADOW:
      return Object.assign({}, state, {
          headerStyle: {boxShadow: "0 0px 0px 0"}
      });
  case SHOW_SHADOW:
      return Object.assign({}, state, {
          headerStyle: {}
      });
  default:
    return state;
  }
};