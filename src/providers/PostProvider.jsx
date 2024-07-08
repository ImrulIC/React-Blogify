import { useContext, useReducer } from "react";
import { PostContext } from "../context";
import { PostInitialState, PostReducer } from "../reducers/PostReducer";

const PostProvider = ({ children }) => {
  const [state, dispatch] = useReducer(PostReducer, PostInitialState);

  return (
    <PostContext.Provider value={{ state, dispatch }}>
      {children}
    </PostContext.Provider>
  );
};

export default PostProvider;
