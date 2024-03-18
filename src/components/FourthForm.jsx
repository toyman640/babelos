import React from "react";
import FourthImage from '../assets/Frame4.svg';
import BackButton from '../assets/back-Icon.svg';
import Progress4 from '../assets/Progress4.svg';

const FourthForm = () => {
  return (
    <div className="MainPage">
      <div className="ImageSection">
        <img className="SideImage" src={FourthImage} alt="Second Image"/>
      </div>
      <div className="FormSection">
        <div className="TOp">
          <div className="TopLeft">
            <img className="BackImage" src={BackButton} alt="Back Button"/>
            <p>Back home</p>
          </div>
          <div>
            <p>Already have an account? Log in</p>
          </div>
        </div>
        <div className="InnerFormSection">
          <div className="ProgressDiv">
            <img className="ProgressImage" src={Progress4} alt="Progress Image"/>
          </div>
          <div>
            <h2>Create Account</h2>
            <div>
              <p>Farm Registration</p>
              <form className="Form" action="">
                <div className="FormWrap OtherFields">
                  <label htmlFor="farmName">Farm Name*</label>
                  <input type="text" placeholder="Enter farm name" />
                </div>
                <div className="FormWrap OtherFields">
                  <label htmlFor="farmcordinates">Farm Coordinates(Optional)</label>
                  <input type="number" placeholder="Longitude" />
                  <input type="number" placeholder="Latitude" />
                </div>
                <div>
                  <p>Crops cultivated and planting season</p>
                  <div className="FormWrap OtherFields">
                    <label htmlFor="crop">What crop do you cultivate on this farm?</label>
                    <select name="" id="">
                      <option value="">Maize</option>
                      <option value="">Yam</option>
                    </select>
                  </div>
                </div>
                <div className="ButtonDiv">
                  <button>Back</button>
                  <button>Continue</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FourthForm;