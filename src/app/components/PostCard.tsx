import React from 'react'

interface IPostCard {
    id: number;
    name: string;
}

const PostCard = ({
    id,
    name
}: IPostCard) => {
    return (
        <div
            key={id}
            className='p-3 rounded-lg bg-white text-black shadow-lg'
        >
            {name}
        </div>
    )
}

export default PostCard