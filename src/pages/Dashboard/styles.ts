import styled, { css } from 'styled-components/native';
import { FlatList } from 'react-native';

interface Product {
  id: number;
  name: string;
  price: number;
  score: number;
  image: string;
}

interface FilterItemProps {
  isSelected: boolean;
}

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

export const FilterContainer = styled.View`
  flex-direction: row;
  margin-top: 56px;
`;

export const FilterItem = styled.TouchableOpacity<FilterItemProps>`
  flex: 1;
  align-items: center;
  padding-bottom: 10px;
  /* background-color: #3d3d4d; */
  color: #fff;

  ${props =>
    props.isSelected &&
    css`
      /* border-bottom-width: 0.4px;
      border-bottom-color: #f16e4a; */
    `}
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

export const ScoreContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding-top: 2px;
`;

export const ProductScore = styled.Text`
  margin-left: 4px;
  font-size: 14px;
  color: #fd993b;
`;

export const PriceContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  margin-top: auto;
`;

export const ProductPrice = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #f16e4a;
`;

export const ProductButton = styled.TouchableOpacity``;
