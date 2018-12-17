export const ADD_VENDOR = 'mob-vend/vendors/ADD_VENDOR';
export const UPDATE_VENDOR = 'mob-vend/vendors/UPDATE_VENDOR';
export const DELETE_VENDOR = 'mob-vend/vendors/DELETE_VENDOR';


const initialState = [
  {name: "Sam Vendorson", "key": "1"}
];


export default function vendors(state=initialState, action) {
  let vendorList = state.slice();
  switch (action.type) {

    case ADD_VENDOR:
      return [...state, {name: action.name}];

    case UPDATE_VENDOR:
      let vendorToUpdate = vendorList[action.id]
      vendorToUpdate.name = action.name;
      vendorList.splice(action.id, 1, vendorToUpdate);
      return vendorList;

    case DELETE_VENDOR:
      vendorList.splice(action.id, 1);
      return vendorList;

    default:
      return state;
  }
}

export const addVendor = text => {
  return {
    type: ADD_VENDOR,
    text
  }
}

export const updateVendor = (id, name) => {
  return {
    type: UPDATE_VENDOR,
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
