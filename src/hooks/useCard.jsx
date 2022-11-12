import React from 'react'
import { appContext } from '../App'

export const useCard = () => {
    const {cardItems , setCardItems} = React.useContext(appContext)
    
    const totalPrice = cardItems.reduce((sum, obj) => obj.price + sum, 0)
    return { cardItems, setCardItems, totalPrice }
}