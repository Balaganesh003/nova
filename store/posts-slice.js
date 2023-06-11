import { createSlice } from '@reduxjs/toolkit';

const initialPostsState = {
  posts: [
    {
      id: '3487395526201',
      title: 'My Post',
      author: {
        name: 'Balaganesh',
        imgUrl: 'https://xsgames.co/randomusers/assets/avatars/pixel/41.jpg',
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
      createAt: '2023-06-01T12:00:00.000Z',
    },
  ],

  selectedPost: null,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState: initialPostsState,
  reducers: {
    addPost(state, action) {
      state.posts.unshift(action.payload);
    },
    getPostById(state, action) {
      state.selectedPost = state.posts.find(
        (post) => post.id === action.payload
      );
    },
  },
});

export const postsActions = postsSlice.actions;

export default postsSlice;
