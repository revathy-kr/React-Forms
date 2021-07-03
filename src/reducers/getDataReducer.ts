import { AllActions, ITableData } from "../actions";

type IState = {
  tableData: ITableData[];
};

export const initialState: IState = {
  tableData: [],
}

const getDataReducer = (state: IState = initialState, action: AllActions) => {
  switch (action.type) {
    case 'GET_DATA':
      return {
        ...state,
        tableData: action.payload
      };

    default:
      return state;
  }
};

export default getDataReducer;