import { VALIDATE_WORKSPACE_SUCCESS, VALIDATE_WORKSPACE_FAILED } from 'common/actionTypes';

const intialState = {
  isWorkspaceValid: false,
  hasError: false,
};

export default (state = intialState, action) => {
  switch (action.type) {
    case VALIDATE_WORKSPACE_SUCCESS:
      return { ...state, isWorkspaceValid: true };
    case VALIDATE_WORKSPACE_FAILED:
      return { ...state, hasError: true };
    default:
      return state;
  }
}