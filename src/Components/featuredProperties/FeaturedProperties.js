import './featuredProperties.css'; 
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const FeaturedProperties = () => {
  return (
    <div className='fp'>
        <div className="fpItem">
      <img className='fpImg oneFp' src="https://dailytimes.com.pk/assets/uploads/2020/03/14/Pearl-Continental-Hotel-Mountain-Ski-Resort-Malam-Jabba-is-NOW-OPEN-1280x720.jpg" alt="" />
      <span className='fpName'> Pearl Continental Hotel Malam Jabba </span>
      <span className='fpCity'> Swat </span>
      <span className='fpPrice'> Starting from 39,297 PKR</span>
      <div className="fpRating">
        <div className="fpRatingList">
          <FontAwesomeIcon icon={faStar}  />
          </div>
        <div className="fpRatingList">
          <FontAwesomeIcon icon={faStar}  />
          </div>
        <div className="fpRatingList">
          <FontAwesomeIcon icon={faStar}  />
          </div>
        <div className="fpRatingList">
          <FontAwesomeIcon icon={faStar}  />
          </div>
          <div className="fpRatingList">
          <FontAwesomeIcon icon={faStarHalf}  />
          </div>  
        <span>Excellent 4.5</span>
      </div>
      </div>
      <div className="fpItem">
      <img className='fpImg oneFp' src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/333696836.jpg?k=7779da322b7b7cc017ae1a12e21722b93f233d6d3054eb863f7a86901c2a3c55&o=&hp=1" alt="" />
      <span className='fpName'> Mountain View Resort Malam Jabba</span>
      <span className='fpCity'> Swat </span>
      <span className='fpPrice'> Starting from PKR 17,830</span>
      <div className="fpRating">
        <div className="fpRatingList">
          <FontAwesomeIcon icon={faStar}  />
          </div>
        <div className="fpRatingList">
          <FontAwesomeIcon icon={faStar}  />
          </div>
        <div className="fpRatingList">
          <FontAwesomeIcon icon={faStar}  />
          </div>
        <div className="fpRatingList">
          <FontAwesomeIcon icon={faStar}  />
          </div> 
        <span>Very Good 4</span>
      </div>
      </div>
      <div className="fpItem">
      <img className='fpImg oneFp' src="https://images.trvl-media.com/hotels/75000000/74460000/74453800/74453755/w1273h1276x3y0-3b428046.jpg?impolicy=resizecrop&rw=670&ra=fit" alt="" />
      <span className='fpName'> Hotel Green Valley </span>
      <span className='fpCity'> Swat </span>
      <span className='fpPrice'> Starting from 9,940 PKR</span>
      <div className="fpRating">
        <div className="fpRatingList">
          <FontAwesomeIcon icon={faStar}  />
          </div>
        <div className="fpRatingList">
          <FontAwesomeIcon icon={faStar}  />
          </div>
        <div className="fpRatingList">
          <FontAwesomeIcon icon={faStar}  />
          </div>
          <div className="fpRatingList">
          <FontAwesomeIcon icon={faStarHalf}  />
          </div>  
        <span>Good 3.5</span>
      </div>
      </div>
    </div>
  )
}

export default FeaturedProperties