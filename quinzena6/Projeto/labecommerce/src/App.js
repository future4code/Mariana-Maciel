import React from 'react';
import { Filters } from './components/Filters/Filters';
import { Products } from './components/Products/Products';
import { ShoppingCart } from './components/ShoppingCart/ShoppingCart';
import styled from "styled-components";

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 2fr;
  padding: 16px;
  gap: 8px;
`;

const products = [
  {
    id: 1,
    name: 'Box Outlander - Diana Gabaldon',
    price: 680,
    photo: 'https://www.booktopia.com.au/covers/big/9781784758400/0902/outlander-box-set.jpg'
  },
  {
    id: 2,
    name:'Box Trono de Vidro - Sarah J. Maas',
    price: 370,
    photo: 'https://images-na.ssl-images-amazon.com/images/I/81Cb3D7u-QL.jpg'
  },
  {
    id: 3,
    name:'Box Eragon - Christopher Paolini',
    price: 145,
    photo: 'https://http2.mlstatic.com/D_NQ_NP_720203-MLB40509052163_012020-O.webp'
  },
  {
    id: 4,
    name:'Box "ACOTAR" - Sarah J. Maas.',
    price: 180,
    photo: 'https://images-americanas.b2w.io/produtos/01/00/img/1819061/5/1819061549_1GG.jpg'
  },
  {
    id: 5,
    name:'Box Sussurro - Becca Fitzpatrick',
    price: 190,
    photo: 'https://images-na.ssl-images-amazon.com/images/I/71Q8rdSfBBL.jpg'
  },
  {
    id: 6,
    name:'Box Instrumentos Mortais - ',
    price: 199,
    photo: 'https://opiniaobomvaleapena.com.br/imagens/livro-box-instrumentos-mortais-edi%C3%A7%C3%A3o-especial.png'
  }
]


class App extends React.Component {
  state = {
    minFilter: '',
    maxFilter: 1000,
    nameFilter: '',
    productsInCart: []
  }

  onChangeMinFilter = (event) => {
    this.setState({minFilter: event.target.value})
  }
  onChangeMaxFilter = (event) => {
    this.setState({maxFilter: event.target.value})
  }
  onChangeNameFilter = (event) => {
    this.setState({nameFilter: event.target.value})
  }

  onAddProductToCart = (productId) => {
    const productInCart = this.state.productsInCart.find(product => productId === product.id)

    if(productInCart) {
      const newProductInCart = this.state.productsInCart.map(product => {
        if(productId === product.id){
          return{
            ...product,
            quantity: product.quantity + 1
          }
        }
        return product
      })
      this.setState({productsInCart: newProductInCart})
    } else{
      const productToAdd = products.find(product => productId === product.id)

      const newProductsInCart = [...this.state.productsInCart, {...productToAdd, quantity:1}]

      this.setState({productsInCart: newProductsInCart})
    }
  }

  onRemoveProductFromCart = (productId) => {
    const newProductsInCart = this.state.productsInCart.map((product) => {
      if(product.id === productId){
        return{
          ...product,
          quantity: product.quantity - 1
        }
      }
      return product
    }).filter((product) => product.quantity > 0)
    this.setState({productsInCart: newProductsInCart})
  }
  render(){
    return (
      <AppContainer>
        <Filters
          minFilter={this.state.minFilter}
          maxFilter={this.state.maxFilter}
          nameFilter={this.state.nameFilter}
          onChangeMaxFilter={this.onChangeMaxFilter}
          onChangeMinFilter={this.onChangeMinFilter} 
          onChangeNameFilter={this.onChangeNameFilter}
        />
        <Products 
          products={products}
          minFilter={this.state.minFilter}
          maxFilter={this.state.maxFilter}
          nameFilter={this.state.nameFilter}
          onAddProductToCart={this.onAddProductToCart}
        />
        <ShoppingCart
          productsInCart={this.state.productsInCart}
          onRemoveProductFromCart={this.onRemoveProductFromCart}
        />     
      </AppContainer>
    );
  }
}
  

export default App;
