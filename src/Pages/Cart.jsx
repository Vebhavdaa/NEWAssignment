import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove, increase, decrease } from "../store/cartSlice";
const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleRemove = (item) => {
    dispatch(remove(item));
  };

  const handleDecrease = (item) => {
    dispatch(decrease(item));
  };
  const handleIncrease = (item) => {
    dispatch(increase(item));
  };
  return (
    <>
      <h1>CART</h1>

      <div style={{ display: "flex" }}>
        {products.map((item) => (
          <div
            className="productCard"
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              width: "150px",
              margin: "30px",
              height: "150px",
            }}
          >
            <div>
              <img
                src={item.image}
                alt="Product Pic"
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "contain",
                }}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <h5 style={{ height: "55px" }}>{item.title}</h5>
              <h5>Price- ₹{item.price}</h5>
              <h5>Total-₹{item.price * item.qty}</h5>

              <div
                style={{
                  width: "140px",
                  border: "1px solid green",
                  height: "30px",
                  display: "flex",
                  justifyContent: "space-between",
                  borderRadius: "30px",
                }}
              >
                <RemoveIcon
                  style={{ padding: "5px", cursor: "pointer" }}
                  onClick={
                    item.qty > 1
                      ? () => handleDecrease(item)
                      : () => handleRemove(item.id)
                  }
                />
                <span>{item.qty}</span>
                <AddIcon
                  style={{ padding: "5px", cursor: "pointer" }}
                  onClick={() => handleIncrease(item)}
                />
              </div>

              <Button
                variant="outlined"
                startIcon={<DeleteIcon />}
                style={{ borderRadius: "30px", margin: "10px" }}
                onClick={() => handleRemove(item.id)}
              >
                Remove
              </Button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cart;
