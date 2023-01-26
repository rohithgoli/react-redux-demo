import axios from 'axios'
import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from "./userTypes";

export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

export const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

export const fetchUsersFailure = (error) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

// fetchUsers action Creator returns function instead of object as other above
// and the function it returns doesn't have to be pure, it is allowed to have side-effects such as
// async api calls
// and this function also receives dispatch method as its argument
export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUsersRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                const users = response.data
                dispatch(fetchUsersSuccess(users))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchUsersFailure(errorMsg))
            })
    }
}