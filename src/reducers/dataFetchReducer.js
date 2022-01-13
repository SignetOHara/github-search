export const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return {
        ...state,
        isLoading: true,
        isError: {
          status: false,
          msg: '',
        },
        data: [],
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: {
          status: false,
          msg: '',
        },
        data: action.payload,
      };
    case 'FETCH_FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: {
          status: true,
          msg: action.error,
        },
        data: [],
      };
    default:
      throw new Error();
  }
};
