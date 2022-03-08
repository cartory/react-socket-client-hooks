import { useEffect, useState } from 'react'

import io from 'socket.io-client'

const socket = io(process.env.REACT_APP_API, {
    transports: ['websocket']
}).emit('init')

export const useSocketOnce = (event) => {
    const [data, setData] = useState(null)

    useEffect(() => {
        socket.once(event, resultData => {
            setData(resultData)
        })
    }, [event])

    return { data, setData }
}

export const useSocketOn = (event, setData) => {
    useEffect(() => {
        socket.on(event, resultData => {
            setData(resultData)
        })
    }, [event, setData])
}