import moment from "moment";

export const filters={
    date: moment().endOf("day").format("YYYY-MM-DD"),
      cityId: [null],
      jobTypeId: [null],
      jobTimeId: [null],
      jobPositionId: [null],
}