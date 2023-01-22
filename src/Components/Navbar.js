import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Button from "@mui/material-next/Button";
import { Badge, IconButton } from "@mui/material";
import { useAuth } from "../Context/auth";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import LogoutIcon from "@mui/icons-material/Logout";
import styled from "styled-components";

export const Navbar = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("LOGGING OUT");
    auth.logout();
    navigate("/Login");
  };

  const cartData = useSelector((state) => state.cart);
  console.log(cartData);

  const Container = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100px;
    width: 100%;
    flex-wrap: wrap;
  `;
  const Left = styled.div`
    margin-left: 30px;
    margin-top: 15px;
  `;

  const Right = styled.div`
    display: flex;
    margin-right: 30px;
    margin-top: 15px;
    padding-right: 50px;
  `;

  return (
    <Container>
      <Left>
        <img
          src="https://brainerhub.com/images/brainerhub_logo.svg"
          width="200px"
        />
      </Left>
      <Right>
        <div style={{ marginRight: "30px" }} onClick={handleLogout}>
          <Button
            variant="outlined"
            startIcon={<LogoutIcon />}
            style={{ width: "100px", height: "40px" }}
          >
            Logout
          </Button>{" "}
        </div>

        <div style={{ marginRight: "10px" }}>
          <Link to="/Cart">
            <IconButton>
              <Badge badgeContent={cartData.length} color="primary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </IconButton>
          </Link>
        </div>
      </Right>
    </Container>
  );
};
