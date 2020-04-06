import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'

export default () => {
    const count = useSelector(state => state.count )
    const dispatch = useDispatch()
    const add = () => {
        dispatch({
            type: 'INCREMENT'
        })
    }
    return (
        <div>
            <Link to={{pathname: '/about', state: {msg: 'hello world'}}}>ABOUT</Link>
            <h1> {count} </h1>
            <button onClick={add}> add </button>
        </div>
    )
}