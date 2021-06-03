const initState = {
  list: [],

  ref: {},
};

// ACTION TYPES
const CREATE = "CREATE";
const UPDATE = "UPDATE";
const DELETE = "DELETE";

// ACTIONS :: COmponents are interacting with this action
export function createUserAction(payload) {
  return { type: CREATE, payload: payload };
}

export function updateUserAction(payload) {
  return { type: UPDATE, payload: payload };
}

export function deleteUserAction(payload) {
  return { type: DELETE, payload: payload };
}

// REDUCER LOGIC
export function RegisterReducer(state = initState, action) {
  switch (action.type) {
    case CREATE:
      return { ...state, list: [action.payload, ...state.list] };

    default:
      return state;
  }
}
