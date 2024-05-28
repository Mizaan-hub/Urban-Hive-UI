import { useState } from 'react'
import './Chat.scss'

function Chat (){

    const [chat, setChat] = useState(true);

    return(
        <div className='Chat'>
            <div className="messages">
                <h1>Messages</h1>
                <div className="message">
                    <img src="/public/assets/pics/lana-profile-2.jpg" alt="" />
                    <span>Lana Rhoades</span>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="message">
                    <img src="/public/assets/pics/lana-profile-2.jpg" alt="" />
                    <span>Lana Rhoades</span>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="message">
                    <img src="/public/assets/pics/lana-profile-2.jpg" alt="" />
                    <span>Lana Rhoades</span>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="message">
                    <img src="/public/assets/pics/lana-profile-2.jpg" alt="" />
                    <span>Lana Rhoades</span>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="message">
                    <img src="/public/assets/pics/lana-profile-2.jpg" alt="" />
                    <span>Lana Rhoades</span>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="message">
                    <img src="/public/assets/pics/lana-profile-2.jpg" alt="" />
                    <span>Lana Rhoades</span>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
            {chat && (<div className="chatBox">
                <div className="top">
                    <div className="user">
                        <img src="/public/assets/pics/lana-profile-2.jpg" alt="" />
                        <span>Lana Rhoades</span>
                    </div>
                    <div className="close" onClick={() => (setChat(null))}>X</div>
                </div>
                <div className="center">
                    <div className="chatMessage">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage own">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage own">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage own">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        <span>1 hour ago</span>
                    </div>
                </div>
                <div className="bottom">
                    <textarea name="" id=""></textarea>
                    <button>Send</button>
                </div>
            </div>)}
        </div>
    )
}
export default Chat