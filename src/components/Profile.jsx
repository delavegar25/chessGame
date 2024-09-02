import React, { useState } from 'react';
import ProfileImage from '../assets/white chess.png';

const Profile = () => {
    return (
        <div className='bg-cover bg-center
        min-h-screen flex flex-col justify-start
        items-center'
        style={{ backgroundImage: `url(${
            ProfileImage
        })`}}>

        </div>
    )
}

export default Profile;