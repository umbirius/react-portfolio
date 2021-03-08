import React from 'react'
import CardInfo from './Cardinfo'


function Card(props){

    return(
        <div className="d-inline-block q-card" onClick={(e) => props.click(props.item)}>
            <img className="q-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} />
            { props.item.selected && <CardInfo title={props.item.title} tools={props.item.tools} subTitle={props.item.subTitle} git={props.item.git} demo={props.item.demo}/>}
        </div>
    )
}

export default Card