import { Badge } from "@material-ui/core";
import { PersonOutline, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../logo.png";
import { useHistory } from "react-router";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

// const Language = styled.span`
//   font-size: 14px;
//   cursor: pointer;
//   ${mobile({ display: "none" })}
// `;

// const SearchContainer = styled.div`
//   border: 0.5px solid lightgray;
//   display: flex;
//   align-items: center;
//   margin-left: 25px;
//   padding: 5px;
// `;

// const Input = styled.input`
//   border: none;
//   ${mobile({ width: "50px" })}
// `;

// const Center = styled.div`
//   flex: 1;
//   text-align: center;
// `;

// const Logo = styled.h1`
//   font-weight: bold;
//   ${mobile({ fontSize: "24px" })}
// `;

// const LogoImage = styled.img`
//   width: "150px";
//   marginleft: "50px" ${mobile({ height: "20vh" })};
// `;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const token = useSelector((state) => state.user.token);
  const history = useHistory();
  return (
    <Container>
      <Wrapper>
        {/* <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left> */}
        <Left>
          <img
            src={logo}
            onClick={(e) => {
              e.preventDefault();
              history.push("/");
            }}
            width="150px"
            style={{ marginLeft: "0px" }}
            alt=".com"
          />
          {/* <Logo>ABC.</Logo> */}
        </Left>
        <Right>
          {!token ? (
            <>
              <Link to="/register">
                <MenuItem>YENİ ÜYE</MenuItem>
              </Link>
              <Link to="/login">
                <MenuItem>ÜYE GİRİŞ</MenuItem>
              </Link>
            </>
          ) : (
            <Link to="/logout">
              <MenuItem>ÇIKIŞ</MenuItem>
            </Link>
          )}
          <Link to="/cart">
            <MenuItem>
              <PersonOutline />
            </MenuItem>
          </Link>
          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
