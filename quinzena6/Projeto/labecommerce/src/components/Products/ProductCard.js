import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
    border: 1px solid black;
    border-radius: 8px;
    display: flex;
    flex-direction: column;

    img{
        padding: 16px;
        height: 300px;
        width: 300px
    }
`
const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px;

    p{
        margin: 4px 0;
    }
`
const AddToCartButton = styled.button`
    align-self: center;
    margin-top: 4px;
`

export class ProductCard extends React.Component{
    render(){
        const product = this.props.product
        return <CardContainer>
            <img src={product.photo}/>
            <CardInfo>
                <p>{product.name}</p>
                <p>R${product.price},00</p>
                <AddToCartButton onClick={() => this.props.onAddProductToCart(product.id)}>
                    Adicionar ao carrinho
                </AddToCartButton>
            </CardInfo>
        </CardContainer>
    }
}