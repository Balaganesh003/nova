import { createSlice } from '@reduxjs/toolkit';

const initialPostsState = {
  posts: [
    {
      id: 'p1',
      title: 'My Post',
      author: {
        name: 'Balaganesh',
        imgUrl: 'https://xsgames.co/randomusers/avatar.php?g=pixel',
      },
      community: '🚀 Startup Hub',
      description:
        '<ul><li><p>Balaganesh</p></li><li><p>Eshwarthath </p></li></ul>',
      reactions: [
        {
          id: 'r1',
          type: '🥰',
          count: 1,
        },
        {
          id: 'r2',
          type: '👍',
          count: 2,
        },
      ],
      comments: ['Thanks for sharing this!', 'this is awesome!'],
    },
  ],
};

const postsSlice = createSlice({
  name: 'posts',
  initialState: initialPostsState,
  reducers: {
    addPost(state, action) {
      state.projects.push(action.payload);
    },
  },
});

export const postsActions = postsSlice.actions;

export default postsSlice;
