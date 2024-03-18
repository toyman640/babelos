import React, { useState } from "react";
import SecondImage from "../assets/Frame2.svg";
import BackButton from '../assets/back-Icon.svg';
import Progress2 from '../assets/Progress2.svg';

const SecondForm = () => {
  const [smartphone, setSmartphone] = useState(null); // State for smartphone radio button selection
  const [bankAccount, setBankAccount] = useState(null); // State for bank account radio button selection
  const [bankName, setBankName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');

  const handleSmartphoneChange = (event) => {
    setSmartphone(event.target.value);
  };

  const handleBankAccountChange = (event) => {
    setBankAccount(event.target.value);
  };

  const handleBankNameChange = (event) => {
    setBankName(event.target.value);
  };

  const handleAccountNumberChange = (event) => {
    setAccountNumber(event.target.value);
  };

  return (
    <div className="MainPage">
      <div className="ImageSection">
        <img className="SideImage" src={SecondImage} alt="Second Image"/>
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
            <img className="ProgressImage" src={Progress2} alt="Progress Image"/>
          </div>
          <div>
            <h2>Create Account</h2>
            <div>
              <p>Bank Details</p>
              <form className="Form" action="">
                <div className="OtherFields">
                  <label htmlFor="smartphone">Do you have a Smartphone?</label>
                  <div className="RadioOptions">
                    <label>
                      <input
                        type="radio"
                        name="smartphone"
                        checked={smartphone === 'yes'}
                        value='yes'
                        onChange={handleSmartphoneChange}
                      />
                      Yes
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="smartphone"
                        checked={smartphone === 'no'}
                        value='no'
                        onChange={handleSmartphoneChange}
                      />
                      No
                    </label>
                  </div>
                </div>
                <div className="OtherFields">
                  <label htmlFor="bankAccount">Do you have a Bank Account?</label>
                  <div className="RadioOptions">
                    <label>
                      <input
                        type="radio"
                        name="bankAccount"
                        checked={bankAccount === 'yes'}
                        value='yes'
                        onChange={handleBankAccountChange}
                      />
                      Yes
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="bankAccount"
                        checked={bankAccount === 'no'}
                        value='no'
                        onChange={handleBankAccountChange}
                      />
                      No
                    </label>
                  </div>
                </div>
                {bankAccount === 'yes' && (
                  <>
                    <div className="FormWrap OtherFields">
                      <label htmlFor="bankName">Bank Name*</label>
                      <select name="bank" id="" onChange={handleBankNameChange} value={bankName}>
                        <option value="">select</option>
                        {/* Add options for banks */}
                      </select>
                    </div>
                    <div className="FormWrap OtherFields">
                      <label htmlFor="accountNumber">Personal Bank Account Number*</label>
                      <input type="text" placeholder="Enter your account number" onChange={handleAccountNumberChange} value={accountNumber} />
                    </div>
                  </>
                )}
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

export default SecondForm;
