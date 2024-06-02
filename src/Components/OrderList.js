import React from 'react';
import Order from './Order';
import ordersData from '../data.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import "../ComponentsCSS/OrderList.css"

const OrderList = () => {

  const HandleFilterButtonClick = () => {
    alert("I imagine an animation that plays that reveals the options to filter by in the line of the filter icon as the icon moves to the side\n Filter by: \nUserId \nOrderStatus \nOrderId")
  }

  const HandleAddOrderButtonClick = () => {
    alert("Open up a modal that has a form to enter all the info and then send it to the backend and update the front and then the user simply confirmes and the data is updated and sent to the backend and the fronted reacts accordingly")
  }

  return (
    <div class="order-list-container">
      <h1>Order List (all orders)</h1>
      <div class="shipment-options">
        <div class="filter-icon" onClick={HandleFilterButtonClick}>
          <FontAwesomeIcon icon={faFilter} size="2xl" style={{color: "#282c34",}} />
        </div>
        <div class="add-shippment-button" onClick={HandleAddOrderButtonClick}>
          Add Shippment
        </div>
      </div>
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
