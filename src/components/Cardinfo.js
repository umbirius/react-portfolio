import React from 'react'
import { useSpring, animated } from 'react-spring'

function CardInfo(props) {


    const style = useSpring({ opacity: 1, from: { opacity: 0 } })

    return (
        <animated.div clasName="q-card-info" style={style}>
            <p className="q-card-title">{props.title}</p>
            <p className="q-card-subTitle">{props.tools}</p>
            <p className="q-card-subTitle">{props.subTitle}</p>
            <p>
                <a href={props.git} target={props.git} rel="noopener noreferrer">Git</a><br></br>
                <a href={props.demo} target={props.demo} rel="noopener noreferrer">Demo</a>
            </p>
        </animated.div>
    )

}

export default CardInfo