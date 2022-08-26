import './propertyList.css'
import React from 'react'

const PropertyList = () => {
  return (
    <div className='pList'>
      <div className="pListItem">
      <img className="pListImg" src="https://images.trvl-media.com/hotels/1000000/10000/6100/6062/72c28410_z.jpg" alt="" />
        <div className="pListTitle">
            <h2>Hotels</h2>
            <h3>345 Hotel</h3>
        </div>
      </div>
      <div className="pListItem">
      <img className="pListImg" src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YXBhcnRtZW50fGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" />
        <div className="pListTitle">
            <h2>Appartments</h2>
            <h3>345 Hotel</h3>
        </div>
      </div>
      <div className="pListItem">
      <img className="pListImg" src="./img/resort.jpg" alt="" />
        <div className="pListTitle">
            <h2>Resorts</h2>
            <h3>345 Hotel</h3>
        </div>
      </div>
      <div className="pListItem">
      <img className="pListImg" src="https://img.wallpapersafari.com/desktop/1440/900/48/41/gQt4ke.jpg" alt="" />
        <div className="pListTitle">
            <h2>Villas</h2>
            <h3>345 Hotel</h3>
        </div>
      </div>
      <div className="pListItem">
      <img className="pListImg" src="https://c4.wallpaperflare.com/wallpaper/624/573/238/log-cabin-bedroom-suite-wallpaper-preview.jpg" alt="" />
        <div className="pListTitle">
            <h2>Cabins</h2>
            <h3>345 Hotel</h3>
        </div>
      </div>
    </div>
  )
}

export default PropertyList