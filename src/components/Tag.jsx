import React, { useState } from 'react';

import useGif from '../custom_hooks/useGif';

const Tag = () => {
    const [tag, setTag] = useState('funny');
    const {gif, fetchGif} = useGif(tag);

    return (
        <div className="container">
            <h1>Random {tag} Gif</h1>
            <img width="500" src={gif} alt="Random {tag} Gif" />
            <input value={tag} onChange={(e) => setTag(e.target.value)} />
            <button onClick={() => fetchGif(tag)}>CLICK FOR NEW</button>
        </div>
    );
}

export default Tag;
