const initialState = {
  isLoading: true
};

export default function (state = initialState, action = {}) {
 

  console.log(action.type)

  switch (action.type) {
    case 'LOADING_START':
      return { ...state, isLoading: true };
    case 'LOADING_DONE':
      return { ...state, isLoading: false };
    default: return state;
  }
}
