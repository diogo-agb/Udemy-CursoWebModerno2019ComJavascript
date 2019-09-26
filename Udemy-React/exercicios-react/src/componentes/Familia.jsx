import React from 'react'
import { heranca } from '../utils/utils'

export default props =>
    <div>
        <h1>Família</h1>
        { heranca(props) }
        {/* {React.Children.map(props.children, filho => {
            return React.cloneElement(filho, {...props})
        })} */}
        {/* {props.children} */}
        {/* {React.cloneElement(props.children, {...props})} */}
        {/* {React.cloneElement(props.children, props)} */}
        {/* {React.cloneElement(props.children,
            { sobrenome: props.sobrenome }
        )} */}
    </div>

