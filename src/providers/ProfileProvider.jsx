import React, { useReducer } from "react";
import { ProfileContext } from "../context";
import {
  ProfileInitialState,
  ProfileReducer,
} from "../reducers/ProfileReducer";

export default function ProfileProvider({ children }) {
  const [state, dispatch] = useReducer(ProfileReducer, ProfileInitialState);
  return (
    <ProfileContext.Provider value={{ state, dispatch }}>
      {children}
    </ProfileContext.Provider>
  );
}
