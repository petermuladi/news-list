
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import UsersReducer from './Reducers/users';
import PostsReducer from './Reducers/posts';

//Redux store with users and posts.
const reducer = combineReducers({
    users: UsersReducer,
    posts: PostsReducer
});

//redux store
export const store = configureStore({
    reducer
})
