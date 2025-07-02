import React from 'react';
import './collection.css';
// import bg1 from '../../../assets/images/bg1.jpg'; // Update paths as needed
// import bg2 from '../../../assets/images/bg2.jpg';
import firstImgCollection from '../../../assets/images/collectionImages/firstImgCollection.jpg'
import secondImgCollection from '../../../assets/images/collectionImages/secondImgCollection.jpg'
// import secondImgCollection from '../../../assets/images/collectionImages/kobraCollectionImg.jpg'
// import secondImgCollection from '../../../assets/images/collectionImages/third-collection.jpg'

const Collection = () => {
  return (
    <div className="collection-container">
      <div
        className="collection-box lookbook"
        style={{ backgroundImage: `url(${firstImgCollection})` }}
      >
        <div className="lookbook-content">
          <h3>The Beauty</h3>
          <h1>Lookbook</h1>
          <a href="#">View Collection</a>
        </div>
      </div>

      <div
        className="collection-box countdown"
        style={{ backgroundImage: `url(${secondImgCollection})` }}
      >
        <div className="countdown-content">
          <div className="countdown-product">
            <p>Boxy2 sneacker with brown Sleeve</p>
            <h1>$20.00</h1>
          </div>
          <div className="countdown-timer">
            <div className="time-box">
              <h1>-2374</h1>
              <p>days</p>
            </div>
            <div className="time-box">
              <h1>-12</h1>
              <p>hrs</p>
            </div>
            <div className="time-box">
              <h1>-55</h1>
              <p>mins</p>
            </div>
            <div className="time-box">
              <h1>-14</h1>
              <p>secs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
