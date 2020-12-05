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

  const totalItensInCart = useMemo(() => {
    const totalItens = products.reduce(
      (accumulator, product) => accumulator + product.quantity,
      0,
    );

    return totalItens;
  }, [products]);

  const cartTotal = useMemo(() => {
    const subtotal = products.reduce(
      (accumulator, product) => accumulator + product.quantity * product.price,
      0,
    );

    const frete = subtotal > 250 ? 0 : totalItensInCart * 10;

    const total = frete + subtotal;

    return formatValue(total);
  }, [products, totalItensInCart]);

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
