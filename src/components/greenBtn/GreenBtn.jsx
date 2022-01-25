import React from 'react'
import './GreenBtn.css'

const GreenBtn = ({children}) => {
    return (
        <button className='green-btn'>
            {children}
        </button>
    )
}

export default GreenBtn
