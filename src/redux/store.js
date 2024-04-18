import { createStore, combineReducers } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { contactsReducer } from "./contacts/contactsReduser";

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);

// У файлі store.js:

// Створи конфігурацію для збереження поля items зі слайса контактів.
// Використовуй persistReducer, щоб застосувати конфігурацію до редюсера слайса контактів.
// Використовуй persistStore для створення persistor для PersistGate.
