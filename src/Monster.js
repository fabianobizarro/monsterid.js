import React from 'react';
import { getAvatar } from './monsterid';

export default ({ value, width, heigth }) => {
    let src = getAvatar(value, width, heigth);
    return <img src={src} />;
}