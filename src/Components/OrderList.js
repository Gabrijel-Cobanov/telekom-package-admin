import React from 'react';
import Order from './Order';
import ordersData from '../data.json';
import "../ComponentsCSS/OrderList.css"

const OrderList = () => {
  return (
    <div class="order-list-container">
      <h1>Order List</h1>
      <div class="order-list">
      <ul>
      {ordersData.map(ordersData => (
        <Order
          key={ordersData.id}
          id={ordersData.id}
          customerName={ordersData.customer.name}
          total={ordersData.total}
          status={ordersData.status}
        />
      ))}
    </ul>
      </div>
    </div>
  );
};

export default OrderList;
