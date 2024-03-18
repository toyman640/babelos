import React from "react";
import ThirdImage from '../assets/Frame3.svg';
import BackButton from '../assets/back-Icon.svg';
import Progress3 from '../assets/Progress3.svg';
import FingerPrint from '../assets/finger-print.svg';

const ThirdForm = () => {
  return (
    <div className="MainPage">
      <div className="ImageSection">
        <img className="SideImage" src={ThirdImage} alt="Second Image"/>
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
            <img className="ProgressImage" src={Progress3} alt="Progress Image"/>
          </div>
          <div>
            <h2>Create Account</h2>
            <div>
              <p>Security -  Setup Fingerprint(Optional)</p>
              <p>Capture Fingerprint(Your L-R Index fingers)</p>
              <form className="Form" action="">
                <div className="FingerCont">
                  <div>
                    <img src={FingerPrint} alt="Progress Image"/>
                    <p>Left thumb</p>
                  </div>
                  <div>
                    <img src={FingerPrint} alt="Progress Image"/>
                    <p>Left Index</p>
                  </div>
                  <div>
                    <img src={FingerPrint} alt="Progress Image"/>
                    <p>Right Index</p>
                  </div>
                  <div>
                    <img src={FingerPrint} alt="Progress Image"/>
                    <p>Right Index</p>
                  </div>
                </div>
                <div>
                  <p>
                    Place your finger on the fingerprint scannner to capture your fingerprint. Ensure your finger covers the entire scanner
                  </p>
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

export default ThirdForm;