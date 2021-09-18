import React, { Component } from 'react'
import CardBig from './cardBig'
import CardSmall from './cardSmall'

import './style.css'

import * as data from '../../json/cardData.json'

const { card } = data && data.default;
console.log('we get', card)

class Card extends Component {
    render() {
        return (
            <div class='card-container'>
                <CardBig />
                <CardBig />
                
                <CardBig />
                <CardSmall />
                <CardSmall />
                
            </div>
        )
    }
}


export default Card