import React from 'react';
import "../ComponentsCSS/Order.css"

const Order = ({ id, customerName, total, status }) => {
  return (
    <li class="order">
      <div>Order ID: {id}</div>
      <div>Customer: {customerName}</div>
      <div>Total: ${total.toFixed(2)}</div>
      <div>Status: {status}</div>
    </li>
  );
};

export default Order;
