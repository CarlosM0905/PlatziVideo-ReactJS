export const actions = {
  setFavorite: 'SET_FAVORITE',
  deleteFavorite: 'DELETE_FAVORITE',
  loginRequest: 'LOGIN_REQUEST',
  logoutRequest: 'LOGOUT_REQUEST',
  registerRequest: 'REGISTER_REQUEST',
  getVideoSource: 'GET_VIDEO_SOURCE',
};

export const setFavorite = (payload) => {
  console.log(payload);
  return ({
    type: actions.setFavorite,
    payload,
  }
  );
};

export const deleteFavorite = (payload) => {
  console.log(payload);
  return ({
    type: actions.deleteFavorite,
    payload,
  }
  );
};

export const loginRequest = (payload) => {
  return ({
    type: actions.loginRequest,
    payload,
  }
  );
};

export const logoutRequest = (payload) => {
  return ({
    type: actions.loginRequest,
    payload,
  }
  );
};

export const registerRequest = (payload) => {
  return ({
    type: actions.registerRequest,
    payload,
  }
  );
};

export const getVideoSource = (payload) => {
  return ({
    type: actions.getVideoSource,
    payload,
  }
  );
};
