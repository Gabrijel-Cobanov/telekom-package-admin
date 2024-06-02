import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faCheck } from '@fortawesome/free-solid-svg-icons';
import "../ComponentsCSS/StatusOption.css"

const StatusOption = ({ status }) => {

    const HandleClick = () => {
        alert("A modal pops up with all the info (grabbed from the backend with an API call) and then the info can be eddited, the changes need to be saved first and the page automatically reflects the new data")
    }

    return (
      <div style={{ color: status === 'pending' ? 'yellow' : 'green' }}>
        {status === "pending" ? (
        <div class="status-pending" onClick={HandleClick}>
            <div class="status-option-icon">
                <FontAwesomeIcon icon={faPenToSquare} size="2xl" style={{color: "#282c34",}} />
            </div>
        </div>
      ) : (
        <div class="status-shipped">
            <div class="status-option-icon">
                <FontAwesomeIcon icon={faCheck} size="2xl" style={{color: "#282c34",}} />
            </div>
        </div>
      )}
      </div>
    );
  };

export default StatusOption;