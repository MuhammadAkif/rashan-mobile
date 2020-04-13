import user_reducer from './user-reducer';
import usergroup_reducer from "./usergroup-reducer";
import role_reducer from "./role_reducer";
import trainingItems_reducer from './trainingItems_reducer';
import { combineReducers } from 'redux';
import categories_reducer from './categories_reducer';
import course_reducer from "./course-reducer";

const reducer = combineReducers({
  user_reducer,
  usergroup_reducer,
  role_reducer,
  trainingItems_reducer,
  categories_reducer,
  course_reducer
});

export default reducer;
