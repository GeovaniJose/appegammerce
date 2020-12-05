import React, { useEffect, useState } from 'react';
import { View, Image } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import { useCart } from '../../hooks/cart';
import formatValue from '../../utils/formatValue';
import getImageURI from '../../utils/getImageURI';
import data from '../../../products.json';

import FloatingCart from '../../components/FloatingCart';

import CartIcon from '../../assets/cart-icon.svg';

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
  const { addToCart } = useCart();

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const formattedProducts = data.map(product => ({
      ...product,
      image: Image.resolveAssetSource(getImageURI(product.image)).uri,
    }));

    setProducts(formattedProducts);
  }, []);

  function handleAddToCart(item: Product): void {
    addToCart(item);
  }

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
                  <ProductPrice>{formatValue(item.price)}</ProductPrice>
                  <ProductButton onPress={() => handleAddToCart(item)}>
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
