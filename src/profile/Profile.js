import React, { Component } from 'react';
import propTypes from 'prop-types';
import './Profile.css'


const Profile = ({full, bioo, profs, children, image, alert}) => {
    return (
        <div className="top-section">
            <div className="left">
                my name is {full}
                <br />
                my bio is {bioo}
                <br />
                and my profession is {profs}
                <br/>
            </div>

            <div className="right">
            {children} <br/>{image}

            {alert()}
            </div>


        </div>
    )
}
Profile.propTypes={
    full:propTypes.string,
    bioo:propTypes.string,
    profs:propTypes.string,
    image:propTypes.string,
}

Profile.defaultProps={
    full:"oumayma"
}

export default Profile; 