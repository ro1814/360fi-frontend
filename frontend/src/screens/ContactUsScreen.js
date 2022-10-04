import React from "react";
import {} from "../styles/ContactUsStyles.css";

const ContactUsScreen = () => {
  return (
    <>
      <div className="firstMeetUsDiv">

        <div className="firstSubDivMu">

            <div className="logoMUDiv">
              <img src="/logo-header360.svg" alt="360-logo" className="logoMU" />
            </div>

            <div className="secondSubDivMu">
                <div className="ukImageDiv">
              <img src="/images/uk-map.svg" alt="ukMap" className="ukMap" />
              <p>UNITED KINGDOM</p>
              <p>Spaces Ealing Aurora 71-75</p>
              <p>Uxbridge Road - Ealing</p>
              <p>LONDON | W5 5SL</p>
              <p>+44(0)795 714 7852</p>
                </div>
                <div className="spImageDiv">
                    
                </div>
            </div>
        </div>

        <div className="formDivMu">
            <h1>Contact Us</h1>
            <form>

            </form>
        </div>
      </div>
    </>
  );
};
export default ContactUsScreen;
