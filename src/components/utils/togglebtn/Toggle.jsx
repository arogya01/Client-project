import React from 'react';
import './styles.css';

export const Toggle = () => {
    return (
        <div className='toggle-wrapper'>
        <input class='checkbox' type='checkbox' name='switch' id='switch' />
        <label for='switch' className='toggle-label'></label>
      </div>
    )
}
