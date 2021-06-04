const initState = {
  list: [],

  ref: {},
};

// ACTION TYPES
const CREATE = "CREATE";
const UPDATE = "UPDATE";
const DELETE = "DELETE";

const REF = "REF";

// ACTIONS :: COmponents are interacting with this action
export function createUserAction(payload) {
  return async (dispatch) => {
    const url = "http://localhost:8080/api/user/";
    const requestBody = { ...payload };

    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });

    dispatch({ type: CREATE, payload: payload });
  };
}

export function updateUserAction(payload) {
  return { type: UPDATE, payload: payload };
}

export function deleteUserAction(payload) {
  return { type: DELETE, payload: payload };
}

export function updateRefUser(payload) {
  return { type: REF, payload: payload };
}

// REDUCER LOGIC
export function RegisterReducer(state = initState, action) {
  switch (action.type) {
    case CREATE:
      return { ...state, list: [action.payload, ...state.list] };

    case DELETE:
      const oldList = state.list;
      oldList.splice(action.payload, 1);
      console.log("OL", oldList);

    case REF:
      return { ...state, ref: action.payload };

    default:
      return state;
  }
}
