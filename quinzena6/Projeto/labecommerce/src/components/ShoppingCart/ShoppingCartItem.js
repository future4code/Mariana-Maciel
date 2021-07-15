import React from 'react';
import styled from 'styled-components';

const ItemContainer = styled.div`
    display: grid;
    grid-auto-flow: column;
    gap: 8px;
    align-items: center;
    margin-top: 8px;
    p{
        margin: 0;
    }
`

export class ShoppingCartItem extends React.Component{
    render(){
        return <ItemContainer>
            <p>{this.props.cartItem.quantity}</p>
            <p>{this.props.cartItem.name}</p>
            <button onClick={() => this.props.onRemoveProductFromCart(this.props.cartItem.id)}>
                Remover
            </button>
        </ItemContainer>
    }
}