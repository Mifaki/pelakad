import React from 'react';

interface IPostCard {
  id: number;
  name: string;
}

const PostCard = ({ id, name }: IPostCard) => {
  return (
    <div key={id} className="rounded-lg bg-pd-primary p-3 text-white shadow-lg">
      {name}
    </div>
  );
};

export default PostCard;
