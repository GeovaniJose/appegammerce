import React, { useMemo } from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { View } from 'react-native';

import { useCart } from '../../hooks/cart';
import formatValue from '../../utils/formatValue';

import CartIcon from '../../assets/cart-icon.svg';

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

interface Product {
  id: number;
  name: string;
  price: number;
  score: number;
  image: string;
  quantity: number;
}

const Cart: React.FC = () => {
  const { increment, decrement, products } = useCart();

  function handleIncrement(id: number): void {
    increment(id);
  }

  function handleDecrement(id: number): void {
    decrement(id);
  }

  const cartTotal = useMemo(() => {
    const total = products.reduce(
      (accumulator, product) => accumulator + product.quantity * product.price,
      0,
    );

    return formatValue(total);
  }, [products]);

  const totalItensInCart = useMemo(() => {
    const totalItens = products.reduce(
      (accumulator, product) => accumulator + product.quantity,
      0,
    );

    return totalItens;
  }, [products]);

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

                <ProductPriceContainer>
                  <ProductQuantity>{`${item.quantity}x`}</ProductQuantity>
                  <ProductSinglePrice>
                    {formatValue(item.price)}
                  </ProductSinglePrice>
                </ProductPriceContainer>

                <ProductTotalPrice>
                  {formatValue(item.price * item.quantity)}
                </ProductTotalPrice>
              </ProductDetails>

              <ActionContainer>
                <ActionButton onPress={() => handleIncrement(item.id)}>
                  <FeatherIcon name="plus" color="#f16e4a" size={16} />
                </ActionButton>

                <ActionButton onPress={() => handleDecrement(item.id)}>
                  <FeatherIcon name="minus" color="#f16e4a" size={16} />
                </ActionButton>
              </ActionContainer>
            </ProductCard>
          )}
        />
      </ProductsContainer>

      <Frete>*Frete grátis para compras acima de R$250,00</Frete>

      <TotalProductsContainer>
        <CartIcon width={24} height={24} color="#fff" />
        <TotalProductsText>{`${totalItensInCart} itens`}</TotalProductsText>
        <SubtotalValue>{cartTotal}</SubtotalValue>
      </TotalProductsContainer>
    </Container>
  );
};

export default Cart;
