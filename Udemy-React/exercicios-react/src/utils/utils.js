import React from 'react'

export function heranca(props) {
    return React.Children.map(props.children, filho => {
        return React.cloneElement(filho, {...props})
    })
}

