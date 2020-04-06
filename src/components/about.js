import React from 'react'
import { useLocation } from 'react-router-dom'

export default () => {
    const location = useLocation()
    return (
        <div>
            <h1>This is About Page</h1>
            <h1>{location.state?.msg}</h1>
        </div>
    )
}
