export default function reducer(state, { type, payload }) {
    switch (type) {
      case "SEARCH_PLACE":
        return {
          ...state,
          city: payload
        };
      default:
        return state;
    }
  }
  