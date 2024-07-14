import React from 'react';
import PostCard from './card/PostCard';

interface ILandingContainer {
  posts: any;
}

const LandingContainer = ({ posts }: ILandingContainer) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight">Pelakad</h1>
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-4">
            {posts.map((item: any, index: number) => (
              <PostCard
                key={index + 1}
                id={item.id}
                name={item.name ? item.name : ''}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingContainer;
