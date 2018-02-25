import { createContext } from "react";

// We want to change header default color when user visit
// the "breaking news" section of the site
const appContext = createContext({
  currentLanguage: null,
  currentUser: {
    name: "Yann",
    company: "Happy Dev Nantes"
  }
});

export default appContext;
