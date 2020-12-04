import React from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';

import {
  Container,
  ProductsContainer,
  ProductsList,
  ProductCard,
  ProductTitle,
  PriceContainer,
  ProductPrice,
  ProductButton,
  ProductImage,
  ProductDetails,
  ScoreContainer,
  ProductScore,
} from './styles';

import gameImg1 from '../../assets/call-of-duty-infinite-warfare.png';
import gameImg2 from '../../assets/terra-media-sombras-de-mordor.png';
import CartIcon from '../../assets/cart-icon.svg';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <ProductsContainer>
        <ProductsList>
          <ProductCard>
            <ProductImage source={gameImg1} />

            <ProductDetails>
              <ProductTitle>Call of Duty Infinite Warfare</ProductTitle>

              <ScoreContainer>
                <FeatherIcon size={14} name="star" color="#fd993b" />
                <ProductScore>200</ProductScore>
              </ScoreContainer>

              <PriceContainer>
                <ProductPrice>R$400,00</ProductPrice>
                <ProductButton>
                  <CartIcon width={24} height={24} color="#3d3d4d" />
                </ProductButton>
              </PriceContainer>
            </ProductDetails>
          </ProductCard>

          <ProductCard>
            <ProductImage source={gameImg2} />

            <ProductDetails>
              <ProductTitle>Terra Media Sombras de Mordor</ProductTitle>

              <ScoreContainer>
                <FeatherIcon size={14} name="star" color="#fd993b" />
                <ProductScore>200</ProductScore>
              </ScoreContainer>

              <PriceContainer>
                <ProductPrice>R$150,00</ProductPrice>
                <ProductButton>
                  <CartIcon width={24} height={24} color="#3d3d4d" />
                </ProductButton>
              </PriceContainer>
            </ProductDetails>
          </ProductCard>
        </ProductsList>
      </ProductsContainer>
    </Container>
  );
};

export default Dashboard;
