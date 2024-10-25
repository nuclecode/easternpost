"use client";

import React from 'react';

const Flipbook = () => {
    return (
        <div style={{ position: 'relative', paddingTop: '0', width: '900px', height: '500px', overflow: 'hidden' }}>
            <iframe
                style={{
                    position: 'absolute',
                    border: 'none',
                    width: '100%',
                    height: '100%',
                    left: '0',
                    top: '0',
                    overflow: 'auto',
                }}
                src="https://online.fliphtml5.com/whnzy/gmay/"
                seamless="seamless"
                allowFullScreen={true}
            ></iframe>
        </div>
    );
};

export default Flipbook;
