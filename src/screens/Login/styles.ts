import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.View`
  width: 90%;
  gap: 16px;
`;

export const Form = styled.View`
  gap: 16px;
`;

export const TextContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  gap: 4px;
`;

export const TextBlack = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLACK};
`;

export const TextLinkContainer = styled.TouchableOpacity``;

export const TextLink = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLUE};
  font-weight: bold;
`;
