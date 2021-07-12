import { toast } from "react-toastify";
import EmployeeService from "../../services/EmployeeService";

export const GET_ALL_EMPLOYEES_SUCCESS = "GET_ALL_EMPLOYEES_SUCCESS";
export const GET_ALL_EMPLOYEES_FAILURE = "GET_ALL_EMPLOYEES_FAILURE";
export const GET_ALL_USERS_SUCCESS = "GET_ALL_USERS_SUCCESS";
export const GET_ALL_USERS_FAILURE = "GET_ALL_USERS_FAILURE";
export const UPDATE_EMPLOYEE_SUCCESS = "UPDATE_EMPLOYEE_SUCCESS";
export const UPDATE_EMPLOYEE_FAILURE = "UPDATE_EMPLOYEE_FAILURE";
export const SET_ROLE_TO_USER_SUCCESS = "SET_ROLE_TO_USER_SUCCESS";
export const SET_ROLE_TO_USER_FAILURE = "SET_ROLE_TO_USER_FAILURE";

let employeeService = new EmployeeService();
export const getAllEmployees = (pageNo, pageSize) => async (dispatch) => {
  await employeeService
    .getAll(pageNo, pageSize)
    .then((response) =>
      dispatch({
        type: GET_ALL_EMPLOYEES_SUCCESS,
        payload: response.data.data,
        loading: false,
      })
    )
    .catch((error) =>
      dispatch({
        type: GET_ALL_EMPLOYEES_FAILURE,
        payload: error.message,
        loading: false,
      })
    );
};
export const getAllUsers = (pageNo, pageSize) => async (dispatch) => {
    await employeeService
      .getAllUsers(pageNo, pageSize)
      .then((response) =>
        dispatch({
          type: GET_ALL_USERS_SUCCESS,
          payload: response.data.data,
          loading: false,
        })
      )
      .catch((error) =>
        dispatch({
          type: GET_ALL_USERS_FAILURE,
          payload: error.message,
          loading: false,
        })
      );
  };
export const UpdateEmployee = (employee) => async (dispatch) => {
  await employeeService
    .addOrUpdate(employee)
    .then((response) => {
      toast.success("Güncelleme işlemi başarılı");
      dispatch({
        type: UPDATE_EMPLOYEE_SUCCESS,
        payload: response.data.data,
        loading: false,
      });
    })
    .catch((error) => {
        toast.error("Beklenmedik bir hata oluştu")
      dispatch({
        type: UPDATE_EMPLOYEE_FAILURE,
        payload: error.message,
        loading: false,
      });
    });
};
export const setRoleToUser = (userId,roleName) => async (dispatch) => {
  await employeeService
    .setRoleToUser(userId,roleName)
    .then((response) => {
      toast.success("Rol güncellendi");
      dispatch({
        type: SET_ROLE_TO_USER_SUCCESS,
        payload: response.data.data,
        loading: false,
      });
    })
    .catch((error) => {
        toast.error("Beklenmedik bir hata oluştu")
      dispatch({
        type: SET_ROLE_TO_USER_FAILURE,
        payload: error.message,
        loading: false,
      });
    });
};
