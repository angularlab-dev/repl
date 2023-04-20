export default function createState<T>() {
  let state: T;
  function set(newState: T) {
    state = { ...newState };
  }
  function get() {
    return state;
  }
  return {get, set}
}
