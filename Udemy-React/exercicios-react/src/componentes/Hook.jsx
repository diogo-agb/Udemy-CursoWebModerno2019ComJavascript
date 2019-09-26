import React, { useState, useEffect } from 'react'

const Hook = props => {
    const [count, setCount] = useState(0)
    const [status, setStatus] = useState('Par')

    useEffect(() => {
        count % 2 === 0 ? setStatus('Par') : setStatus('Impar')
    })

    return (
        <React.Fragment>
            <h1>{count}</h1>
            <h6>{status}</h6>
            <button onClick={() => setCount(count + 1) }>+</button>
            <button onClick={() => setCount(count - 1) }>-</button>
        </React.Fragment>
    )
}

export default Hook;