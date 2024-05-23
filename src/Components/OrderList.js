import React from 'react';
import ordersData from '../data.json';

const OrderList = () => {
  return (
    <div>
      <h1>Order List</h1>
      <ul>
        {ordersData.map(order => (
          <li key={order.id}>
            <div>Order ID: {order.id}</div>
            <div>Customer: {order.customer.name}</div>
            <div>Total: ${order.total.toFixed(2)}</div>
            <div>Status: {order.status}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;
