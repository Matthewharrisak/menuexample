import styled from "@emotion/styled";

export const Footer = () => {
  return (
    <StyledFooter>
      <p>&copy; 2024 Dynamic Menu</p>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  height: 50px;
  border-top: 1px solid #e0e0e0;
`;
