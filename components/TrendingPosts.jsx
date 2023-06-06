import React from 'react';
import TrendingPostCard from './TrendingPostCard';

const trendingPosts = [
  {
    id: 1,
    title: '🎤 Top TechCrunch articles of the week!',
    category: '✨ Nova Community',
    views: 500,
    days: 20,
  },
  {
    id: 2,
    title: 'We help startups find interns',
    category: '🦄 Entrepreneurship',
    views: 171,
    days: 5,
  },
  {
    id: 3,
    title: '$50 to talk to my friend',
    category: '🌎 Remote Students',
    views: 945,
    days: 25,
  },
  {
    id: 4,

    title: 'Paid opportunities for AI engineers and data scientists',
    category: '📊 Data Science & AI',
    views: 500,
    days: 20,
  },
  {
    id: 5,
    title: '🎤 Top TechCrunch articles of the week!',
    category: '📈 Marketing & Sales',
    views: 250,
    days: 12,
  },
];

const TrendingPosts = () => {
  return (
    <div>
      <h2 className="font-bold text-[0.75rem] text-primary uppercase mb-3">
        Trending Posts
      </h2>
      <div className="flex flex-col space-y-5">
        {trendingPosts.map((post) => (
          <TrendingPostCard
            key={post.id}
            title={post.title}
            category={post.category}
            views={post.views}
            days={post.days}
          />
        ))}
      </div>
    </div>
  );
};

export default TrendingPosts;
