import moment from "moment";

export const ADD_FILTER = "ADD_FILTER";
export const CLEAR_FILTER = "CLEAR_FILTER";

export const addFilter = (filter) => {
  return {
    type: ADD_FILTER,
    payload: filter,
  };
};
export const clearFilter = () => {
  return {
    type: CLEAR_FILTER,
    payload: {
      date: moment().endOf("day").format("YYYY-MM-DD"),
      cityId: [null],
      jobTypeId: [null],
      jobTimeId: [null],
      jobPositionId: [null],
    },
  };
};
