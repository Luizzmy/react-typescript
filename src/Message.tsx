import React from 'react'

const Message=(prop: {message: string}): any=> {
    return (
        <div>
          <p>Hola! {prop.message} </p>  
        </div>
    )
}

export default Message
