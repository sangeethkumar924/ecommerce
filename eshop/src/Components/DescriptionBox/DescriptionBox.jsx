import React from 'react';
import './DescriptionBox.css'
const DescriptionBox=()=>{
    return(
        <div className="descriptionbox">
          <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
          </div>
          <div className="descriptionbox-description">
            <p>An eCommerce website is a digital platform that allows businesses to sell products 
                and services online. It provides users with a user-friendly interface to browse, compare, 
                and purchase items from various categories.Key features often include shopping carts, secure 
                payment gateways, and customer reviews. These sites enhance the shopping experience through 
                personalization and targeted marketing.</p>
                <p>
                Secure payment options and user accounts enhance convenience and safety during transactions. Many eCommerce sites also offer customer support through chatbots or FAQs. 
                By leveraging analytics, these platforms can optimize user experience and drive sales effectively.
                </p>
          </div>
        </div>
    );
}
export default DescriptionBox