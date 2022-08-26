import "./hotel.css";
import Navbar from "../../Components/navbar/Navbar";
import Header from "../../Components/header/Header";
import MailList from "../../Components/mailList/MailList";
import Footer from "../../Components/footer/Footer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLocationDot,faCircleXmark,faCircleArrowLeft,faCircleArrowRight} from "@fortawesome/free-solid-svg-icons"
import { useState } from "react";
const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState (0);
  const [open, setOpen] = useState (false);
  const photos = [
    {
      src : "https://image-tc.galaxy.tf/wijpeg-advok7uvd9e0nb91cvsna5pds/file.jpg?width=1600&height=1066"
    },
    {
      src : "https://image-tc.galaxy.tf/wijpeg-8ile2cn6m8i3d4ihmzr9dnsop/file.jpg?width=1600&height=1066"
    },
    {
      src : "https://media-cdn.tripadvisor.com/media/photo-m/1280/19/ef/0d/bd/swat-serena-hotel.jpg"
    },
    {
      src : "https://image-tc.galaxy.tf/wijpeg-b49gchsa4qcjhqrpx2wbfucw8/file.jpg?width=1600&height=1066"
    },
    {
      src : "https://image-tc.galaxy.tf/wijpeg-apki4prfj9t59ez4lhixfzpqq/file.jpg?width=767"
    },
    {
      src : "https://tourmypakistan.com.pk/wp-content/uploads/2019/01/156335293.jpg"
    }
  ]

  const handleOpen = (i)=>{
    setSlideNumber(i);
    setOpen(true);
  }
  const hanldeMove = (direction)=>{
    let newSliderNumber;
    if(direction === "l"){
      newSliderNumber = slideNumber === 0 ? 5 : slideNumber - 1 ; 
    }
    else{
      newSliderNumber = slideNumber === 5 ? 0 : slideNumber + 1 ;
    }
    setSlideNumber(newSliderNumber);
  }
  return (
    <div> 
      <Navbar/>
      <Header type= "list" />
      <div className="hotelContainer">
        {open && <div className="slider"> 
          <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)}/>
          <FontAwesomeIcon icon={faCircleArrowLeft} onClick={()=>hanldeMove("l")} className="arrow"/>
          <div className="sliderWrapper">
            <img src={photos[slideNumber].src} alt="" className="sliderImg" />
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} onClick={()=>hanldeMove("r")} className="arrow"/>
        </div>}
        <div className="hotelWrapper">
          <button className="bookNow"> Reserve or Book Now!</button>
          <h1 className="hotelTitle">Swat Serena Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot}/>
            <span>Saidu Sharif Rd, near Allah Wala Chowk،، Saidu Sharif, Swat, Khyber Pakhtunkhwa 19200</span>
          </div>
          <span className="hotelDistance"> Excellent location - 500m from center </span>
          <span className="hotelPriceHighLight"> Book a stay over 27,840 PKR at this property and get a free airport taxi</span>
          <div className="hotelImages">
            {photos.map((photo,i) =>(
              <div className="hotelImgWrapper">
                <img onClick={()=>handleOpen(i)} src={photo.src} alt="" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of Swat</h1>
              <p className="hotelDesc"> Set on 2 hectares of landscaped grounds, this understated hotel with views of the surrounding valley is 14 minutes' walk from Swat Museum's Buddhist exhibits and 4 km from road N95.
              The warm rooms and suites feature private balconies, free Wi-Fi and TVs, plus minifridges, and tea and coffeemaking facilities. Room service is available.
              A breakfast buffet is complimentary. Amenities include a restaurant, a gym, an outdoor pool and badminton courts.</p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay</h1>
              <span> Swat Serena Hotel is situated in Saidu. Among the facilities of this property are a restaurant, with a score of 
                    8.3! </span>
                    <h2>
                      <b>245,560 PKR</b> (9 nights)
                    </h2>
                    <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList/>
        <Footer/>
      </div>
    </div>
  )
}

export default Hotel