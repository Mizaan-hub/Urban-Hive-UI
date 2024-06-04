import './ProfileUpdatePage.scss'

function ProfileUpdatePage (){
    return(
        <div className='ProfileUpdatePage'>
            <div className="formContainer">
                <form>
                    <h1>Update Profile</h1>
                    <div className="item">
                        <label htmlFor='username'>Username</label>
                        <input type='text' id='username' name='username' />
                    </div>
                    <div className="item">
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' name='email' />
                    </div>
                    <div className="item">
                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password' name='password' />
                    </div>
                    <button>Update</button>
                </form>
            </div>
            <div className="sideContainer">
                <img src="" alt="" className="avatar" />
            </div>
        </div>
    )
}
export default ProfileUpdatePage