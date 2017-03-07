import { commonModel as initial } from '~/config/initialState';

/*
  actions
 */
 export const APP_LOADED_SAGA = 'COMMON/APP_LOADED_SAGA'; // do this when app loads (or reloads)

 export const API_STATUS_REQUEST = 'COMMON/API_STATUS_REQUEST';
 export const API_STATUS_SUCCESS = 'COMMON/API_STATUS_SUCCESS';
 export const API_STATUS_ERROR = 'COMMON/API_STATUS_ERROR';

 export const INCREMENT_COUNTER_SAGA = 'COMMON/INCREMENT_COUNTER_SAGA';
 export const INCREMENT_COUNTER = 'COMMON/INCREMENT_COUNTER';
/*
  action creators
 */
export const actions = {
	appLoaded: () => {
		return { type: APP_LOADED_SAGA };
	},

  incrementCounterSaga: () => {
		return { type: INCREMENT_COUNTER_SAGA };
	},

  incrementCounter: () => {
		return { type: INCREMENT_COUNTER };
	},

	apiStatusRequest: () => {
	  return { type: API_STATUS_REQUEST };
	},

	apiStatusSuccess: () => {
	  return { type: API_STATUS_SUCCESS };
	},

	apiStatusError: (status) => {
	  return { type: API_STATUS_ERROR, status };
	}
};

export default function commonAppState(state = initial, action) {
	switch (action.type) {
		case API_STATUS_REQUEST:
		  return {
		    ...state,
		    isApiResponding: {
					...state.isApiResponding,
					isSending: true,
					value: true
				}
		  };

		case API_STATUS_SUCCESS:
		  return {
		    ...state,
		    isApiResponding: {
					...state.isApiResponding,
					isSending: false,
					value: true
				}
		  };

		case API_STATUS_ERROR:
		  return {
		    ...state,
					isApiResponding: {
						...state.isApiResponding,
						statusCode: action.status,
						isSending: false,
						status: 'error',
						value: false
				}
		  };

    case INCREMENT_COUNTER:
		  return {
		    ...state,
				counter: ++state.counter
		  };

		default:
			return state;
	}
}
