import { NavigationActions } from 'react-navigation'
import * as types from './types';
import {taskListAPI} from '../services/taskListAPI';


export const taskListService =  ({ navigation  }) => {
    return async (dispatch) => {

    	dispatch({ type: types.TASKLIST_START });

        try{
	      let response = await taskListAPI();
	      console.log(response)
	      taskListSuccess(dispatch, response, navigation)
	    } catch(err){
	      console.log(err);
	      taskListFailed(dispatch)
	    }
    }
} 

const taskListSuccess = (dispatch, data, navigation) => {
	console.log(navigation);
	const { navigate } = navigation;
	dispatch({
		type: types.TASKLIST_SUCCESS,
		payload: data
	})
	console.log("TaskList success");
}

const taskListFailed = (dispatch) => {
	dispatch({
		type: types.TASKLIST_FAILED
	});
}