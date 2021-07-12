import {
  GET_ALL_EMPLOYEES_FAILURE,
  GET_ALL_EMPLOYEES_SUCCESS,
  GET_ALL_USERS_FAILURE,
  GET_ALL_USERS_SUCCESS,
  SET_ROLE_TO_USER_FAILURE,
  SET_ROLE_TO_USER_SUCCESS,
} from "../actions/employeeActions";
import { employees, message, loading, users } from "../initialValues/employees";

const initialState = {
  employees: employees,
  users: users,
  message: message,
  loading: loading,
};

export default function employeeReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case GET_ALL_EMPLOYEES_SUCCESS:
      return {
        ...state,
        employees: payload,
        loading: false,
      };
    case GET_ALL_EMPLOYEES_FAILURE:
      return {
        ...state,
        message: payload,
        loading: false,
      };
    case GET_ALL_USERS_SUCCESS:
      return {
        ...state,
        users: payload,
        loading: false,
      };
    case GET_ALL_USERS_FAILURE:
      return {
        ...state,
        message: payload,
        loading: false,
      };
    case SET_ROLE_TO_USER_SUCCESS:
      const userIndex = state.users.content.findIndex(
        (user) => user.id === payload.id
      );

      return {
        ...state,
        users: {
          ...state.employees.users,
          content: [
            ...state.users.content.map((user, index) =>
              index === userIndex ? payload : user
            ),
          ],
        },
        loading: false,
      };
    case SET_ROLE_TO_USER_FAILURE:
      return {
        ...state,
        message: payload,
        loading: false,
      };
    default:
      return state;
  }
}
