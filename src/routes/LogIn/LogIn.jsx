import './LogIn.scss'

function LogIn (){
    return(
        <div className='LogIn'>
            <div className="formContainer">
                <form >
                    <h1>Welcome Back</h1>
                    <input type="text" name="username" placeholder='Username' />
                    <input type="text" name="password" placeholder='Password' />
                    <button>Log In</button>
                </form>
            </div>
            <div className="imgContainer">
                <img src="/public/assets/pics/Urban Hive.gif" alt="" />
            </div>
        </div>
    )
}
export default LogIn