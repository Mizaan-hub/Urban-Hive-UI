import "./NewPostPage.scss";

function NewPostPage() {
  return (
    <div className="NewPostPage">
      <div className="formContainer">
        <div className="wrapper">
          <form>
            <div className="item">
              <label htmlFor="title">Title</label>
              <input type="text" name="title" id="title" />
            </div>
            <div className="item">
              <label htmlFor="price">Price</label>
              <input type="number" name="price" id="price" />
            </div>
            <div className="item">
              <label htmlFor="address">Address</label>
              <input type="text" name="address" id="address" />
            </div>
            <div className="item description">
              <label htmlFor="desc">Description</label>
              <textarea name="desc" id="desc"></textarea>
            </div>
            <div className="item">
              <label htmlFor="city">City</label>
              <input type="text" name="city" id="city" />
            </div>
            <div className="item">
              <label htmlFor="bedroom">Bedroom Number</label>
              <input type="Number" name="bedroom" id="bedroom" />
            </div>
            <div className="item">
              <label htmlFor="bathroom">Bathroom Number</label>
              <input type="Number" name="bathroom" id="bathroom" />
            </div>
            <div className="item">
              <label htmlFor="longitude">Longitude</label>
              <input type="text" name="longitude" id="longitude" />
            </div>
            <div className="item">
              <label htmlFor="latitude">Latitude</label>
              <input type="text" name="latitude" id="latitude" />
            </div>
            <div className="item">
              <label htmlFor="type">Type</label>
              <select name="type">
                <option value="rent" defaultChecked>Rent</option>
                <option value="buy">Buy</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="type">Property</label>
              <select name="property">
                <option value="owner" >Apartment</option>
                <option value="tenant">House</option>
                <option value="condo">Condo</option>
                <option value="land">Land</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="utilities">Utilities Policy</label>
              <select name="utilities">
                <option value="owner" >Owner is responsible</option>
                <option value="tenant">Tenant is responsible</option>
                <option value="shared">Shared</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="pet">Pet Policy</label>
              <select name="pet">
                <option value="allowed">Allowed</option>
                <option value="not-allowed">Not Allowed</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="income">Income Policy</label>
              <input
                id="income"
                name="income"
                type="text"
                placeholder="Income Policy"
              />
            </div>
            <div className="item">
              <label htmlFor="size">Total Size (sft)</label>
              <input min={0} id="size" name="size" type="number" />
            </div>
            <div className="item">
              <label htmlFor="school">School</label>
              <input min={0} id="school" name="school" type="number" />
            </div>
            <div className="item">
              <label htmlFor="bus">bus</label>
              <input min={0} id="bus" name="bus" type="number" />
            </div>
            <div className="item">
              <label htmlFor="restaurant">Restaurant</label>
              <input min={0} id="restaurant" name="restaurant" type="number" />
            </div>
            <button className="sendButton">Add</button>
          </form>
        </div>
      </div>
      <div className="sideContainer"></div>
    </div>
  );
}
export default NewPostPage;
