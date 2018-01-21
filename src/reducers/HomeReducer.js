import * as types from '../actions/types';

const INITIAL_STATE = {
  loading: false,
  error: '',
  data: []
};

export default (state=INITIAL_STATE, action) => {
	  switch (action.type) {

      case types.TASKLIST_START:
          return { ...state, loading: true, error: '' }

	  	case types.TASKLIST_SUCCESS:
      		return { ...state, data: action.payload, loading:false, error: '' };

      case types.TASKLIST_FAILED:
        return { ...state, loading:false, error: 'Request Failed' };

      	default:
      		return state;
	  }
}
