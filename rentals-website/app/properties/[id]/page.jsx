'use client';

import React from 'react';

const PropertyPage = () => {
    return (
    <div>
        <div>Property page</div>
        <button onClick={() => router.push('/')} className="bg-blue-500 p-2">Go home</button>
    </div>
    )
}

export default PropertyPage;
