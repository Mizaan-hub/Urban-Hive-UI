import Slider from "../../components/Slider/Slider";
import Map from "../../components/Map/Map";
import "./SinglePage.scss";
import { singlePostData, userData } from "../../lib/dummydata";

function SinglePage() {
  return (
    <div className="SinglePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePostData.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <div className="address">
                  <img src="/public/assets/images/pin.png" alt="" />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="price">£ {singlePostData.price}</div>
              </div>
              <div className="user">
                <img src={userData.img} alt="" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">{singlePostData.description}</div>
          </div>
        </div>
      </div>

      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="listVertical">
            <div className="feature">
              <img src="/public/assets/images/utility.png" alt="" />
              <div className="featureText">
                <span>Utilities</span>
                <p>Renter is responsible</p>
              </div>
            </div>
            <div className="feature">
              <img src="/public/assets/images/pet.png" alt="" />
              <div className="featureText">
                <span>Pet Policy</span>
                <p>Pets are allowed</p>
              </div>
            </div>
            <div className="feature">
              <img src="/public/assets/images/fee.png" alt="" />
              <div className="featureText">
                <span>Property fee</span>
                <p>Must have 3X the rent in total household income</p>
              </div>
            </div>
          </div>
          <p className="title">Room Sizes</p>
          <div className="sizes">
            <div className="size">
              <img src="/public/assets/images/size.png" alt="" />
              <span>861sft</span>
            </div>
            <div className="size">
              <img src="/public/assets/images/bed.png" alt="" />
              <span>{singlePostData.bedRooms} beds</span>
            </div>
            <div className="size">
              <img src="/public/assets/images/bath.png" alt="" />
              <span>{singlePostData.bathroom} bathroom</span>
            </div>
          </div>
          <p className="title">Nearby Places</p>
          <div className="listHorizontal">
            <div className="feature">
              <img src="/public/assets/images/school.png" alt="" />
              <div className="featureText">
                <span>School</span>
                <p>250m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/public/assets/images/bus.png" alt="" />
              <div className="featureText">
                <span>Bus Stop</span>
                <p>100m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/public/assets/images/restaurant.png" alt="" />
              <div className="featureText">
                <span>Restaurant</span>
                <p>200m away</p>
              </div>
            </div>
          </div>
          <p className="title">Location</p>
          <div className="mapContainer">
            <Map items={[singlePostData]} />
          </div>
          <div className="buttons">
            <button>
              <img src="/public/assets/images/chat.png" alt="" />
              Send a message
            </button>
            <button>
              <img src="/public/assets/images/save.png" alt="" />
              Save the place
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SinglePage;
