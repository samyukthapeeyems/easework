export const initialState = {
    user: null,
    isAuthenticated: false,
  };
  
  export function AuthReducer(state, action) {
    const {type, payload} = action;
  
    switch (type) {
      case 'SIGN_IN':
        console.log('SIGN_IN');
  
        return {
          user: payload.user,
          isAuthenticated: payload.isAuthenticated,
        };
  
      case 'SIGN_OUT':
        console.log('SIGN_OUT');
  
        return {
          isAuthenticated: payload.isAuthenticated,
          user: null,
        };
    }
  }