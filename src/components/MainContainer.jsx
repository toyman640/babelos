import React from "react";
import FirstImage from '../assets/first.svg'
import ProgressBar from "./ProgressBar";

const MainPage  = () => {
  return (
    <div className="MainPage">
      <div className="ImageSection">
        <img className="SideImage" src={FirstImage} alt="First Image"/>
      </div>
      <div className="FormSection">
        <div>
          <div>
            <p>Back home</p>
          </div>
          <div>
            <p>Already have an account? Log in</p>
          </div>
        </div>
        <div className="InnerFormSection">
          <div>
            <ProgressBar />
          </div>
          <div>
            <h2>Create Account</h2>
            <div>
              <p>Personal Information</p>
              <form action="">

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainPage;