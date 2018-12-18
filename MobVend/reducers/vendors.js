export const ADD_VENDOR = 'mob-vend/vendors/ADD_VENDOR';
export const UPDATE_VENDOR = 'mob-vend/vendors/UPDATE_VENDOR';
export const EDIT_VENDOR = 'mob-vend/vendors/EDIT_VENDOR';
export const DELETE_VENDOR = 'mob-vend/vendors/DELETE_VENDOR';


const initialState = {
  vendors: [
    {name: "Sam Vendorson", "key": "1"}
  ],
  editVendor: null,
}


export default function vendors(state=initialState, action) {
  let vendorList = state.vendors.slice();
  let result = {
    vendors: vendorList,
    editVendor: null,
  }
  let idx;

  switch (action.type) {

    case ADD_VENDOR:
      result.vendors = [...state, {name: action.name, key: `${vendorList.length+2}`}]
      return result
    case EDIT_VENDOR:
      result.editVendor = {name: action.name, key: action.id}
      return result;
    case UPDATE_VENDOR:
      idx = vendorList.findIndex(element => {
        return element.key === action.id
      })
      if (idx != -1) {
        vendorList[idx].name = action.name;
        vendorList[idx].key = action.id;
      }
      result.vendors = vendorList;
      return result;

    case DELETE_VENDOR:
      idx = vendorList.findIndex(element => {
        return element.key === action.id
      })
      if (idx != -1) {
        vendorList.splice(idx, 1);
      }
      result.vendors = vendorList;
      return result;

    default:
      return state;
  }
}

export const addVendor = name => {
  return {
    type: ADD_VENDOR,
    name
  }
}

export const updateVendor = (id, name) => {
  return {
    type: UPDATE_VENDOR,
    id,
    name
  }
}

export const editVendor = (id, name) => {
  return {
    type: EDIT_VENDOR,
    id,
    name
  }
}


export const deleteVendor = id => {
  return {
    type: DELETE_VENDOR,
    id
  }
}
