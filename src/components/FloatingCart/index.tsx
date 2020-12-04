import React from 'react';
import { useNavigation } from '@react-navigation/native';

import CartIcon from '../../assets/cart-icon.svg';

import {
  Container,
  Frete,
  CartPricing,
  CartButton,
  CartButtonText,
  CartTotalPrice,
} from './styles';

const FloatingCart: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <Frete>*Frete grátis para compras acima de R$250,00</Frete>

      <Container>
        <CartButton onPress={() => navigation.navigate('Cart')}>
          <CartIcon width={24} height={24} color="#fff" />
          <CartButtonText>24 itens</CartButtonText>
        </CartButton>

        <CartPricing>
          <CartTotalPrice>R$15.000,00</CartTotalPrice>
        </CartPricing>
      </Container>
    </>
  );
};

export default FloatingCart;
