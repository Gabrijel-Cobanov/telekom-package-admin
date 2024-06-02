import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdCard, faTruck, faMoneyBill, faSpinner, faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import "../ComponentsCSS/Order.css"

const Order = ({ id, customerName, total, status }) => {
    const statusIcon = status === 'shipped' ? <FontAwesomeIcon icon={faSquareCheck} size="2xl" style={{color: "#63E6BE",}} /> : <FontAwesomeIcon icon={faSpinner} size="2xl" style={{color: "#FFD43B",}} />;

  return (
    // <li class="order">
    //     <div class="customer-info">
    //         <div><FontAwesomeIcon icon={faIdCard} size="2xl" style={{color: "#63E6BE",}} />Order ID: {id}</div>
    //         <div>Customer: {customerName}</div>
    //         <div><FontAwesomeIcon icon={faTruck} size="2xl" style={{color: "#63E6BE",}} /> Adresa koju dobijem API pozivom</div>
    //     </div>
    //     <div class="order-info">
    //         <div><FontAwesomeIcon icon={faMoneyBill} size="2xl" style={{color: "#63E6BE",}} /> Total: ${total.toFixed(2)}</div>
    //         <div>{statusIcon}Status: {status}</div>
    //         <button>Modify Order</button>
    //     </div>
    // </li>

    <li class="order">
        <div class="customer-info">
            <div class="id-name-surname-container">
                <div class="id-icon">
                    <div><FontAwesomeIcon icon={faIdCard} size="2xl" style={{color: "#63E6BE",}} /></div>
                </div>
                <div class="id-name-surname">
                    <div> ID: {id} </div>
                    <div> {customerName} </div>
                </div>
            </div>
            <div class="location-container">
                <div class="loc-icon"><FontAwesomeIcon icon={faTruck} size="2xl" style={{color: "#63E6BE",}}/></div>
                <div class="location"> ADRESS THAT I CAN GET FROM AN API CALL</div>
            </div>
        </div>
        <div class="order-info">
            <div><FontAwesomeIcon icon={faMoneyBill} size="2xl" style={{color: "#63E6BE",}} /> Total: ${total.toFixed(2)}</div>
            <div>{statusIcon}Status: {status}</div>
            <button>Modify Order</button>
        </div>
    </li>
  );
};

export default Order;
