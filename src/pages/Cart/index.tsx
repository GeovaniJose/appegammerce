import React, { useMemo, useState } from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { View } from 'react-native';

import { useCart } from '../../hooks/cart';
import formatValue from '../../utils/formatValue';

import CartIcon from '../../assets/cart-icon.svg';
import ArrowIcon from '../../assets/arrow-down-icon.svg';

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
  CheckoutButton,
  CheckoutContainer,
  IconContainer,
  TotalValue,
  FreteSubtotal,
} from './styles';

const Cart: React.FC = () => {
  const { increment, decrement, products } = useCart();

  const [checkoutPressed, setCheckoutPressed] = useState(false);

  function handleIncrement(id: number): void {
    increment(id);
  }

  function handleDecrement(id: number): void {
    decrement(id);
  }

  const totalItensInCart = useMemo(() => {
    const totalItens = products.reduce(
      (accumulator, product) => accumulator + product.quantity,
      0,
    );

    return totalItens;
  }, [products]);

  const cartSubTotal = useMemo(() => {
    const subtotal = products.reduce(
      (accumulator, product) => accumulator + product.quantity * product.price,
      0,
    );

    return subtotal;
  }, [products]);

  const freteTotal = useMemo(() => {
    return cartSubTotal > 250 ? 0 : totalItensInCart * 10;
  }, [cartSubTotal, totalItensInCart]);

  const cartTotal = useMemo(() => {
    const total = cartSubTotal + freteTotal;

    return total;
  }, [freteTotal, cartSubTotal]);

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
        <CheckoutButton onPress={() => setCheckoutPressed(!checkoutPressed)}>
          <CheckoutContainer>
            {checkoutPressed ? (
              <>
                <FreteSubtotal>
                  {`Subtotal ${formatValue(cartSubTotal)}`}
                </FreteSubtotal>
                <FreteSubtotal>
                  {`Frete ${
                    freteTotal > 0 ? formatValue(freteTotal) : 'grátis'
                  }`}
                </FreteSubtotal>
                <FreteSubtotal>
                  {`Total ${formatValue(cartTotal)}`}
                </FreteSubtotal>
              </>
            ) : (
              <TotalValue>{formatValue(cartTotal)}</TotalValue>
            )}
          </CheckoutContainer>

          <IconContainer isPressed={checkoutPressed}>
            <ArrowIcon width={10} height={10} color="#fff" />
          </IconContainer>
        </CheckoutButton>
      </TotalProductsContainer>
    </Container>
  );
};

export default Cart;
