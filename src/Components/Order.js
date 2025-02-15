import React from 'react';
import StatusOption from './StatusOption'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdCard, faTruck, faMoneyBill, faSpinner, faSquareCheck, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import "../ComponentsCSS/Order.css"

const Order = ({ id, customerName, total, status }) => {
    
    const statusIcon = status === 'shipped' ? <FontAwesomeIcon icon={faSquareCheck} size="2xl" style={{color: "#63E6BE",}} /> : <FontAwesomeIcon icon={faSpinner} size="2xl" style={{color: "#FFD43B",}} />;
    
    const HandleDetailsClick = () => {
        alert("Show the shippment details")
    }

  return (
    <li class="order">
        <div class="customer-info">
            <div class="id-name-surname-container">
                <div class="id-icon">
                    <div><FontAwesomeIcon icon={faIdCard} size="2xl" style={{color: "#efeff0",}} /></div>
                </div>
                <div class="id-name-surname">
                    <div> ID: {id} </div>
                    <div> {customerName} </div>
                </div>
            </div>
            <div class="location-container">
                <div class="loc-icon"><FontAwesomeIcon icon={faTruck} size="2xl" style={{color: "#efeff0",}}/></div>
                <div class="location"> ADRESS THAT I CAN GET FROM AN API CALL</div>
            </div>
        </div>
        <div class="order-info">
            <div class="total-container">
                <div class="total-ammount"><FontAwesomeIcon icon={faMoneyBill} size="2xl" style={{color: "#efeff0",}} /> &nbsp; &nbsp; &nbsp;Total price: ${total.toFixed(2)}</div>
                <div class="details" onClick={HandleDetailsClick}><FontAwesomeIcon icon={faEllipsisVertical} size="2xl" /></div>
            </div>
        </div>
        <StatusOption status={status}/>
    </li>
  );
};

export default Order;
