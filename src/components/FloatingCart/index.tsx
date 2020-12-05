import React, { useMemo } from 'react';
import { useNavigation } from '@react-navigation/native';

import { useCart } from '../../hooks/cart';
import formatValue from '../../utils/formatValue';

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
  const { products } = useCart();

  const navigation = useNavigation();

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
    <>
      <Frete>*Frete grátis para compras acima de R$250,00</Frete>

      <Container>
        <CartButton onPress={() => navigation.navigate('Cart')}>
          <CartIcon width={24} height={24} color="#fff" />
          <CartButtonText>{`${totalItensInCart} itens`}</CartButtonText>
        </CartButton>

        <CartPricing>
          <CartTotalPrice>{cartTotal}</CartTotalPrice>
        </CartPricing>
      </Container>
    </>
  );
};

export default FloatingCart;
