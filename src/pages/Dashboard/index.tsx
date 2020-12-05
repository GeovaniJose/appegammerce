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
  FilterContainer,
  FilterItem,
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

interface FilterOptions {
  price: boolean;
  score: boolean;
  name: boolean;
}

const Dashboard: React.FC = () => {
  const { addToCart } = useCart();

  const [products, setProducts] = useState<Product[]>([]);
  const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    price: false,
    score: false,
    name: false,
  });

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

  function handleOrderProductsByPrice() {
    setProducts(state => [...state.sort((pA, pB) => pA.price - pB.price)]);
    setFilterOptions({ price: true, score: false, name: false });
  }

  function handleOrderProductsByScore() {
    setProducts(state => [...state.sort((pA, pB) => pB.score - pA.score)]);
    setFilterOptions({ price: false, score: true, name: false });
  }

  function handleOrderProductsByName() {
    setProducts(state => [
      ...state.sort((pA, pB) => {
        if (pA.name.toLocaleLowerCase() < pB.name.toLocaleLowerCase())
          return -1;
        if (pA.name.toLocaleLowerCase() > pB.name.toLocaleLowerCase()) return 1;
        return 0;
      }),
    ]);
    setFilterOptions({ price: false, score: false, name: true });
  }

  return (
    <Container>
      <FilterContainer>
        <FilterItem
          isSelected={filterOptions.price}
          onPress={() => handleOrderProductsByPrice()}
        >
          <FeatherIcon
            size={16}
            name="dollar-sign"
            color={filterOptions.price ? '#f16e4a' : '#777'}
          />
        </FilterItem>
        <FilterItem
          isSelected={filterOptions.score}
          onPress={() => handleOrderProductsByScore()}
        >
          <FeatherIcon
            size={16}
            name="star"
            color={filterOptions.score ? '#f16e4a' : '#777'}
          />
        </FilterItem>
        <FilterItem
          isSelected={filterOptions.name}
          onPress={() => handleOrderProductsByName()}
        >
          <FeatherIcon
            size={16}
            name="bold"
            color={filterOptions.name ? '#f16e4a' : '#777'}
          />
        </FilterItem>
      </FilterContainer>

      <ProductsContainer>
        <ProductsList
          data={products}
          extraData={products}
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
