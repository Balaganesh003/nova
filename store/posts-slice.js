import { createSlice } from '@reduxjs/toolkit';

const initialPostsState = {
  posts: [
    {
      id: '39089809678216',
      title:
        'Daily roundup of AI news, research, launches and more (in 13 stories):',
      author: {
        name: 'Andrew Tan',
        imgUrl: 'https://xsgames.co/randomusers/assets/avatars/pixel/40.jpg',
      },
      community: '🚀 Startup Hub',
      description:
        '<ol><li><p>🚀 <span style="color: rgb(33, 33, 33)">Elon Musk eyes AI business expansion to challenge tech giants Google and Microsoft, hinting at interlinking facets of his corporations, including Twitter.</span></p></li><li><p>💻 <span style="color: rgb(33, 33, 33)">Meta AI unveils Megabyte, a revolutionary AI model architecture capable of generating over a million tokens across formats, outperforming Transformers and addressing scalability. </span></p></li><li><p><span style="color: rgb(33, 33, 33)">❄️ Snowflake acquires Neeva, infusing AI-powered search into its cloud data management. The acquisition will enhance Snowflake\'s data discovery capabilities at scale.</span></p></li><li><p><span style="color: rgb(33, 33, 33)">🧠 QLoRA, a cheap way to fine-tune large models with 65B parameters on a 48GB GPU, shows promising open-source progress.</span></p></li><li><p><span style="color: rgb(33, 33, 33)">📚 SEAHORSE: A new dataset aiding in multilingual summarization systems evaluation. 96,000 summaries rated by humans on key aspects provide a new benchmark and training resource.</span></p></li><li><p><span style="color: rgb(33, 33, 33)">📝 Recursive self-improvement for large language models introduced in the form of meta-in-context learning, proving competitive in real-world tasks.</span></p></li><li><p><span style="color: rgb(33, 33, 33)">📹 ControlVideo: A novel text-to-video generation framework, outperforming existing methods in consistency and quality. Videos are generated efficiently within minutes.</span></p></li><li><p><span style="color: rgb(33, 33, 33)">⛓️ ChainForge: An open-source visual programming environment for battle-testing prompts to LLMs.</span></p></li><li><p><span style="color: rgb(33, 33, 33)">🔄 LoopGPT: A Python package reimplementing Auto-GPT with a focus on modularity and extensibility.</span></p></li><li><p><span style="color: rgb(33, 33, 33)">🛍️ Amazon\'s AI seen as incomplete by cloud customers eagerly waiting to test the newly unveiled ChatGPT-style technology.</span></p></li><li><p><span style="color: rgb(33, 33, 33)">🧠 Neural networks and humans found to learn languages in a strikingly similar way, revealing potential synergies between natural and artificial networks.</span></p></li><li><p><span style="color: rgb(33, 33, 33)">🚫 Challenges of AI in content moderation across multiple languages highlighted, underscoring the need for improved accuracy and transparency.</span></p></li><li><p><span style="color: rgb(33, 33, 33)">🎨 Adobe integrates generative AI into Photoshop, enhancing accessibility for novice users.</span></p></li></ol><p><span style="color: rgb(33, 33, 33)">If you found this interesting or helpful, please share it with your network and follow me for more AI insights! And subscribe to the TLDR AI newsletter, where I write for 225,000 readers who get smarter about AI every morning:</span></p></br><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://tldr.tech/ai"><span style="color: rgb(33, 33, 33)">https://tldr.tech/ai</span></a></p><p></p><p></p><p></p><p></p><p></p>',
      reactions: [
        {
          id: '86570500306448',
          type: '👍',
          count: 5,
          selected: false,
        },
        {
          id: '86570500306448',
          type: '🥰',
          count: 2,
          selected: false,
        },
      ],
      comments: [],
      createAt: '6/13/2023, 4:05:20 PM',
    },

    {
      id: '46904890201173',
      title:
        'Hiring TikTok Creators for a YC-Backed Fintech Startup (Paid Opportunity)',
      author: {
        name: 'Balaganesh K',
        imgUrl: 'https://xsgames.co/randomusers/assets/avatars/pixel/23.jpg',
      },
      community: '🦋 Creator Space',
      description:
        '<p><span style="color: rgb(0, 0, 0)">Hey! I’m wondering if anyone is interesting in creating TikTok content for a YC-Backed Fintech Startup.</span></p><p></p><p><span style="color: rgb(0, 0, 0)"></br>Requirements</span></p></br><p></p><ul><li><p>College student or recent grad familiar with financial apps</p></li><li><p>Past experience creating TikToks</p></li></ul><p></p></br><p><span style="color: rgb(0, 0, 0)">The role is super flexible and paid (negotiable). If interested, please leave a comment. I’ll DM you individually with details and next steps:)</span></p>',
      reactions: [
        {
          id: '31357811845070',
          type: '👍',
          count: 1,
          selected: true,
        },
      ],
      comments: [],
      createAt: '6/13/2023, 4:26:10 PM',
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
