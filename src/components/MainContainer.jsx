import React, { useState } from "react";
import FirstImage from '../assets/first.svg'
import BackButton from '../assets/back-Icon.svg'
import ProgressBar from "../assets/Progress-steps.svg";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

const MainPage  = () => {
  const [value, setValue] = useState('');
  const [sex, setSex] = useState('');
  const [site, setSite] = useState('');
  const [idType, setIdType] = useState('Choose');

  const handleSexChange = (event) => {
    setSex(event.target.value);
  };

  const handleSiteChange = (event) => {
    setSite(event.target.value)
  }

  const handleIdTypeChange = (event) => {
    setIdType(event.target.value);
  };
  return (
    <div className="MainPage">
      <div className="ImageSection">
        <img className="SideImage" src={FirstImage} alt="First Image"/>
      </div>
      <div className="FormSection">
        <div className="TOp">
          <div className="TopLeft">
            <img className="BackImage" src={BackButton} alt="First Image"/>
            <p>Back home</p>
          </div>
          <div>
            <p>Already have an account? Log in</p>
          </div>
        </div>
        <div className="InnerFormSection">
          <div className="ProgressDiv">
            <img className="ProgressImage" src={ProgressBar} alt="First Image"/>
          </div>
          <div>
            <h2>Create Account</h2>
            <div>
              <p>Personal Information</p>
              <form className="Form" action="">
                <div className="NameCover">
                  <div className="FormCover FormWrap">
                    <label htmlFor="firstName">First Name*</label>
                    <input type="text" name="firstName" placeholder="Enter first name"  required/>
                  </div>
                  <div className="FormCover FormWrap">
                    <label htmlFor="lasttName">Last Name*</label>
                    <input type="text" name="lastName" placeholder="Enter last name"  required/>
                  </div>
                </div>
                <div className="FormWrap">
                  <label htmlFor="phoneNumber">Phone number*</label>
                  <PhoneInput placeholder="000 0000 000" value={value} onChange={setValue}  />
                </div>
                <div className="FormWrap OtherFields">
                  <label htmlFor="Email address(Optional)">Email address</label>
                  <input type="email" placeholder="Enter email Address" />
                </div>
                <div className="FormWrap">
                  <div className="OtherFields">
                    <label htmlFor="age">Age*</label>
                    <input type="number" name="age" id="" />
                  </div>
                  <div className="OtherFields">
                    <label htmlFor="gender">Choose Gender*</label>
                    <label> <input type="radio" name="age" checked={sex === 'male'} value='male' onChange={handleSexChange} />Male</label>
                    <label> <input type="radio" name="age"  checked={sex === 'female'} value='female' onChange={handleSexChange} />Female</label>
                  </div>
                </div>
                <div className="FormWrap OtherFields">
                  <label htmlFor="address">Residential address*</label>
                  <input type="text" placeholder="Ex: No 21 Pass road, Ikeja"  required/>
                </div>
                <div className="FormWrap OtherFields">
                  <label htmlFor="address">Site*</label>
                  <select value={site} id="" onChange={handleSiteChange}>
                    <option value="Select">Select..</option>
                  </select>
                </div>
                <div className="FormWrap OtherFields">
                  <label htmlFor="idcard">ID Type*</label>
                  <select value={idType} id="" required>
                  <option value="Choose">Choose..</option>
                    <option value="National ID card (NIN)">National ID card (NIN)</option>
                    <option value="Voter's card">Voter's card</option>
                    <option value="International Passport">International Passport</option>
                  </select>
                </div>
                <div className="FormWrap OtherFields">
                  <label htmlFor="idNumber">ID Number*</label>
                  <input type="text" placeholder="Enter your ID number" required/>
                </div>
                <div className="FormWrap OtherFields">
                  <label htmlFor="document">Upload ID document</label>
                  <input type="file" name="document" id="" />
                </div>
                <div className="FormWrap OtherFields">
                  <label htmlFor="passowrd">Create Password</label>
                  <input type="password" name="passowrd" id="" />
                </div>
                <div className="FormWrap OtherFields">
                  <label htmlFor="passowrd">Confirm Password</label>
                  <input type="password" name="confirmPassowrd" id="" />
                </div>
                <div className="FormWrap">
                  <p>Must be at least 8 characters</p>
                  <p>Must contain one special character</p>
                  <p>Passwords must match</p>
                </div>
                <div className="FormWrap OtherFields">
                  <label htmlFor="picture">Upload Profile picture(Option)</label>
                  <input type="file" name="" id="" />
                  <p>PNG or JPG (max. 5MB)</p>
                </div>
                <div>
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

export default MainPage;