import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import FloatingCart from '../../components/FloatingCart';

import CartIcon from '../../assets/cart-icon.svg';

import data from '../../../products.json';

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

interface Product {
  id: number;
  name: string;
  price: number;
  score: number;
  image: string;
}

const Dashboard: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const formattedProducts = data.map(product => ({
      ...product,
      image: `../../assets/${product.image}`,
    }));

    setProducts(formattedProducts);
  }, []);

  return (
    <Container>
      <ProductsContainer>
        <ProductsList
          data={products}
          keyExtractor={item => item.id.toString()}
          ListFooterComponent={<View />}
          ListFooterComponentStyle={{
            height: 80,
          }}
          renderItem={({ item }) => (
            <ProductCard>
              <ProductImage source={{ uri: item.image }} />

              <ProductDetails>
                <ProductTitle>{item.name}</ProductTitle>

                <ScoreContainer>
                  <FeatherIcon size={14} name="star" color="#fd993b" />
                  <ProductScore>{item.score}</ProductScore>
                </ScoreContainer>

                <PriceContainer>
                  <ProductPrice>{item.price}</ProductPrice>
                  <ProductButton>
                    <CartIcon width={24} height={24} color="#3d3d4d" />
                  </ProductButton>
                </PriceContainer>
              </ProductDetails>
            </ProductCard>
          )}
        />
      </ProductsContainer>
      <FloatingCart />
    </Container>
  );
};

export default Dashboard;
