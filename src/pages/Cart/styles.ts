import styled, { css } from 'styled-components/native';
import { FlatList } from 'react-native';

interface Product {
  id: number;
  name: string;
  price: number;
  score: number;
  image: string;
  quantity: number;
}

interface IconContainerProps {
  isPressed: boolean;
}

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  margin-top: 56px;
`;

export const ProductsContainer = styled.View`
  flex: 1;
  flex-direction: row;
  border-radius: 5px;
`;

export const ProductsList = styled(
  FlatList as new () => FlatList<Product>,
).attrs({
  numColumns: 1,
})`
  flex: 1;
  padding: 0 10px;
`;

export const ProductCard = styled.View`
  flex-direction: row;
  padding: 12px 12px;
  margin: 60px 8px 8px;
  border-radius: 16px;
  background: #fff;
`;

export const ProductImage = styled.Image`
  width: 90px;
  height: 122px;
  margin: -55px 0 25px;
  border-radius: 8px;
`;

export const ProductDetails = styled.View`
  flex: 1;
  margin-left: 12px;
`;

export const ProductTitle = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #3d3d4d;
`;

export const ProductPriceContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding-top: 10px;
  margin-top: auto;
`;

export const ProductSinglePrice = styled.Text`
  margin-left: 4px;
  font-size: 14px;
  color: #a0a0b2;
  font-weight: bold;
`;

export const ProductQuantity = styled.Text`
  font-size: 14px;
  color: #a0a0b2;
  font-weight: bold;
`;

export const ProductTotalPrice = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #f16e4a;
`;

export const ActionContainer = styled.View`
  align-self: flex-end;
  align-items: center;
  justify-content: space-between;
  margin-left: auto;
`;

export const ActionButton = styled.TouchableOpacity`
  background: rgba(241, 110, 74, 0.2);
  border-radius: 5px;
  padding: 12px;
  margin-bottom: 5px;
`;

export const Frete = styled.Text`
  position: absolute;
  bottom: 70px;
  font-size: 10px;
  color: #a0a0b2;
`;

export const TotalProductsContainer = styled.View`
  position: absolute;
  bottom: 0px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 28px;
  background: #f16e4a;
`;

export const TotalProductsText = styled.Text`
  flex: 1;
  margin-left: 15px;
  padding: 20px 0px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;

export const CheckoutButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const CheckoutContainer = styled.View``;

export const IconContainer = styled.View<IconContainerProps>`
  ${props =>
    props.isPressed &&
    css`
      transform: rotate(180deg);
    `}
`;

export const TotalValue = styled.Text`
  margin-right: 6px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;

export const FreteSubtotal = styled.Text`
  margin-right: 6px;
  font-size: 11px;
  text-align: right;
  color: #fff;
`;
