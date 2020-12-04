import React from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';

import {
  Container,
  ProductsContainer,
  ProductsList,
  ProductCard,
  ProductTitle,
  ProductTotalPrice,
  ProductImage,
  ProductDetails,
  ProductPriceContainer,
  ProductSinglePrice,
  ActionContainer,
  ActionButton,
  ProductQuantity,
  Frete,
  TotalProductsContainer,
  TotalProductsText,
  SubtotalValue,
} from './styles';

import gameImg1 from '../../assets/call-of-duty-infinite-warfare.png';
import gameImg2 from '../../assets/terra-media-sombras-de-mordor.png';
import CartIcon from '../../assets/cart-icon.svg';

const Cart: React.FC = () => {
  return (
    <Container>
      <ProductsContainer>
        <ProductsList>
          <ProductCard>
            <ProductImage source={gameImg1} />

            <ProductDetails>
              <ProductTitle>Call of Duty Infinite Warfare</ProductTitle>

              <ProductPriceContainer>
                <ProductQuantity>12x</ProductQuantity>
                <ProductSinglePrice>R$200,00</ProductSinglePrice>
              </ProductPriceContainer>

              <ProductTotalPrice>R$400,00</ProductTotalPrice>
            </ProductDetails>

            <ActionContainer>
              <ActionButton>
                <FeatherIcon name="plus" color="#f16e4a" size={16} />
              </ActionButton>

              <ActionButton>
                <FeatherIcon name="minus" color="#f16e4a" size={16} />
              </ActionButton>
            </ActionContainer>
          </ProductCard>

          <ProductCard>
            <ProductImage source={gameImg2} />

            <ProductDetails>
              <ProductTitle>Terra Media Sombras de Mordor</ProductTitle>

              <ProductPriceContainer>
                <ProductQuantity>12x</ProductQuantity>
                <ProductSinglePrice>R$200,00</ProductSinglePrice>
              </ProductPriceContainer>

              <ProductTotalPrice>R$150,00</ProductTotalPrice>
            </ProductDetails>

            <ActionContainer>
              <ActionButton>
                <FeatherIcon name="plus" color="#f16e4a" size={16} />
              </ActionButton>

              <ActionButton>
                <FeatherIcon name="minus" color="#f16e4a" size={16} />
              </ActionButton>
            </ActionContainer>
          </ProductCard>
        </ProductsList>
      </ProductsContainer>

      <Frete>*Frete grátis para compras acima de R$250,00</Frete>

      <TotalProductsContainer>
        <CartIcon width={24} height={24} color="#fff" />
        <TotalProductsText>24 itens</TotalProductsText>
        <SubtotalValue>R$15.000,00</SubtotalValue>
      </TotalProductsContainer>
    </Container>
  );
};

export default Cart;
