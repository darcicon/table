const initState = {
  list: [],

  ref: {},
};

// ACTION TYPES
const CREATE = "CREATE";
const UPDATE = "UPDATE";
const DELETE = "DELETE";
const VIEW_ALL_USERS = "VIEW_ALL_USERS";
const VIEW_BY_ID = "VIEW_BY_ID";

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
  return async (dispatch) => {
    const url = `http://localhost:8080/api/user/${payload.id}`;
    const requestBody = { ...payload };

    await fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });

    dispatch(updateRefUser({}));
  };
}

export function deleteUserAction(payload) {
  return async (dispatch) => {
    const url = `http://localhost:8080/api/user/${payload.id}`;
    await fetch(url, { method: "DELETE" });

    dispatch(viewAllUsers());
  };
}

export function viewAllUsers(payload) {
  return async (dispatch) => {
    const url = "http://localhost:8080/api/user/";

    const response = await fetch(url);
    const userList = await response.json();
    console.log(userList);

    dispatch({ type: VIEW_ALL_USERS, payload: userList });
  };
}

export function viewById(payload) {
  return async (dispatch) => {
    const url = `http://localhost:8080/api/user/${payload.id}`;
    const response = await fetch(url);
    const userObj = await response.json();

    dispatch(updateRefUser(userObj));
  };
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

      return { ...state, list: [...oldList] };

    case REF:
      return { ...state, ref: action.payload };

    case VIEW_ALL_USERS:
      return { ...state, list: action.payload };

    default:
      return state;
  }
}
