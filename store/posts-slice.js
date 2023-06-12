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
          selected: false,
        },
        {
          id: 'r2',
          type: '👍',
          count: 2,
          selected: false,
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

    addReaction(state, action) {
      const { postId, reactionType } = action.payload;
      const post = state.posts.find((post) => post.id === postId);
      const reaction = post.reactions.find(
        (reaction) => reaction.type === reactionType
      );

      reaction
        ? reaction.selected
          ? reaction.count === 1
            ? post.reactions.splice(post.reactions.indexOf(reaction), 1)
            : (reaction.count--, (reaction.selected = false))
          : (reaction.count++, (reaction.selected = true))
        : post.reactions.unshift({
            id: Math.random(),
            type: reactionType,
            count: 1,
            selected: true,
          });

      state.posts = state.posts.map((post) =>
        post.id === postId ? post : post
      );
    },
  },
});

export const postsActions = postsSlice.actions;

export default postsSlice;
