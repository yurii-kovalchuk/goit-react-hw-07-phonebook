import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #F5F5F5;
  &: focus, :hover {
    background-color: #F5F5F5;
  }
`;

export const NameWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Letters = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 30px;
  height: 30px;

  margin-right: 20px;
  padding: 5px;

  background-color: #00bfff;
  color: #f0ffff;

  font-size: 20px;
  font-weight: 600;
  text-shadow: #1e90ff 1px 1px 1px;

  border-radius: 50%;
  border: 1px solid #1e90ff;
`;

export const Text = styled.p`
  margin: 0 0 5px 0;
  font-size: 18px;
`;

export const Phone = styled(Text)`
  margin: 0;
  font-size: 14px;
  color: gray;
`;

export const Btn = styled.button`
  display: block;
  margin-left: 20px;
  padding: 5px;
  width: 24px;
  height: 24px;
  border: transparent;
  border-radius: 4px;
  background-color: crimson;
  color: #f0ffff;
  cursor: pointer;

  &:hover,
  :focus {
    background-color: #b22222;
  }

  &:active {
    background-color: darkred;
  }
`;
