import "./searchItem.css";
import React from 'react'

const SearchItem = () => {
  return (
    <div className="searchItem">
       <img src="https://q-xx.bstatic.com/xdata/images/hotel/max500/261707367.jpg?k=ac31a815c4f99292986f73224c1c26ad12c7e6b79a0fc8dd1ab58048edcdf98a&o=" className="siImg" alt="" />
       <div className="siDesc">
        <h1 className="siTitle"> Tower Street Appartment</h1>
        <span className="siDistance"> 500m from center</span>
        <span className="sitaxiOp"> Free airport taxi </span>
        <span className="siSubtitle">
          Studio Appartment with Air conditioning
        </span>
        <span className="siFeatures">
          Entire Studio 1 bathroom 21m² 1 full bed
        </span>
        <span className="siCancelOp"> Free Cancellation</span>
        <span className="siCancelOpSubtitle"> You can cancel later, so lock in this great price today </span>
       </div>
       <div className="siDetails">
        <div className="siRatings">
          <span> Excellent</span>
          <button> 4.5 </button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice"> 7000PKR</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton"> See availability</button>
        </div>
       </div>
    </div>
  )
}

export default SearchItem