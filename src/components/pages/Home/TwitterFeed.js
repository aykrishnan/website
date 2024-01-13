import React from 'react'

import './TwitterFeed.css'
import useScript from '../../../hooks/useScript';


const TwitterFeed = () => {
    useScript('https://platform.twitter.com/widgets.js', true);

    return (
        <div className="twitter-feed">
            <a className="twitter-timeline" data-height="480" data-dnt="true" data-theme="light" href="https://twitter.com/aykrishnan?ref_src=twsrc%5Etfw">
                Tweets by @aykrishnan
            </a>
        </div>
    );
};

export default TwitterFeed;
