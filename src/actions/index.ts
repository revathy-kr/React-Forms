import axios from "axios";

export const addDataAction = (data: IData) => ({
  type: 'ADD_DATA',
  payload: data,
});

export const getDataAction = async (data: ITableData) => ({
  type: 'GET_DATA',
  payload: await fetchPosts(),
});

export function fetchPosts() {
  return async () => {
    const res = await axios({
      method: 'post',
      url: "https://1dlkbk98d8.execute-api.ap-south-1.amazonaws.com/Stage/question/class_list",
      headers: {}, 
      data: {
        ...requestData
      }
    });
    return res.data;
  };
}

export interface IGetDataAction {
  readonly type: 'GET_DATA';
  payload: ITableData[];
};

export interface IAddDataAction {
  readonly type: 'ADD_DATA';
  payload: IData;
};

export type AllActions =
  | IGetDataAction
  | IAddDataAction

export interface IData {
  Name: string;
  Email: string;
  Country: string;
  DOB: Date | undefined;
  About: string;
  Gender: string;
}
export interface ITableData {
  id: string;
  name: string;
}

const requestData = { "app_code":"TMS-STAFF", "staff_type":"TEACHER", "version":"35", "platform":"web", "device_id":"d566e0dce6c65368", "school_id":"3", "academic_year_id":"1953", "division":{ "0":"1840 ", "1":"1841 ", "2":"1843 ",
"3":"1844", "4":"1845 ", "5":"1846 ", "6":"1847 ", "7":"1848 ", "8":"1849 ", "9":"1867 ", "10":"1868 ", "11":"1869 ", "12":"1896 ", "13":"1870" }, "user_id":"201", "user_type":"TMS_USER" };