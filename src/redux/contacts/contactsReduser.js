const INITIAL_STATE = {
  contacts: {
    items: [],
  },
  filters: {
    name: "",
  },
};

export const contactsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "contacts/ADD_CONTACT": {
      return {
        ...state,
        contacts: {
          ...state.contacts,
          items: [...state.contacts.items, action.payload],
        },
      };
    }
    case "contacts/DELETE_CONTACT": {
      return {
        ...state,
        contacts: {
          ...state.contacts,
          items: state.contacts.items.filter(
            (contact) => contact.id !== action.payload
          ),
        },
      };
    }
    case "contacts/SET_FILTER": {
      return {
        ...state,
        filters: {
          ...state.filters,
          name: action.payload,
        },
      };
    }
    default:
      return state;
  }
};
