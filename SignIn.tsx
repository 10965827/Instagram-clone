function SignIn(){

    

const Login = () => {
    
    return(
        <div className='body'>
            <div className='login-container'>
                <div className='form'>
                    <div className='instagraml'>
                      <img src={instagramlogo} alt='#' className='instagram-logo' />
                    </div>
                    <div className='input-box'>
                     <input type='text' placeholder='Phone number, username, or email'
                      />
                    </div>
                    <div className='input-box'>
                      <input type='password' placeholder='Password'/>
                 </div>


                    

                <div className='submit' value='login'>
                      <a href=''><button className='login-button'>Login</button></a>
                    </div>
                    <div className='line-box'>
                    <div className='line1'></div>
                    <div className='or-box'>OR</div>
                    <div className='line2'></div>
                </div>
               <a href="https://www.facebook.com/login.php/"> <button className="button0">   <div className='facebook-box'>
               <span>  
                     <img src={facebook} alt='#' className='facebook-logo' />
                    </span>
                    <p className='facebook-link'>Login with Facebook</p>
                </div></button></a> <br/>

               <a href=""> <button className="button2">
                <div className="forgotten-password-box">
                  <p className='forgotten-password-link'>Forgotten your password?</p>
                </div>
                </button>
                </a>

            </div>
            <div className='power'>
              <p>
                 Don't have an account?  <a href=''  ><button className="button1"> <span className='sign-up-span'>Sign up </span></button></a>
              </p>
            </div>
            <div className='get app'>
                <p>Get the app.</p>
            </div>
            <div className='googlePlay microsoftStore'>
               <a href="https://play.google.com/store/apps/details?id=com.instagram.android&hl=en&gl=US&pli=1" ><img src={googlePlay} alt='#' className='google-play-logo' /></a> 
                <a href="https://apps.microsoft.com/store/detail/instagram/9NBLGGH5L9XT" ><img src={getFromMicrosoft} alt='#' className='microsoft-store-logo' /> </a> 
            </div>

    

        </div>
           <div className='footer'>
                <div className='links'>
                    <ul>
                        <li><a href='https://about.meta.com/'>Meta</a></li>
                        <li><a href='https://about.instagram.com/'>About</a></li>
                        <li><a href='https://about.instagram.com/blog/'>Blog</a></li>
                        <li><a href='https://www.instagram.com/about/jobs/'>Jobs</a></li>
                        <li><a href='https://help.instagram.com/'>Help</a></li>
                        <li><a href='https://developers.facebook.com/docs/instagram'>API</a></li>
                        <li><a href='https://www.instagram.com/legal/privacy/'>Privacy</a></li>
                        <li><a href="https://www.instagram.com/legal/terms/">Terms</a></li>
                        <li><a href='https://www.instagram.com/directory/profiles/'>Top Accounts</a></li>
                        <li><a href='https://www.instagram.com/explore/locations/'>Locations</a></li>
                        <li><a href='https://www.instagram.com/web/lite/'>Instagram Lite</a></li>
                        <li><a href='https://l.instagram.com/?u=https%3A%2F%2Fwww.facebook.com%2Fhelp%2Finstagram%2F261704639352628&e=AT1n-cANc1cvvDaOsHhrPG_WaN7aPK0DYXWlnrhIEKeHjzKlLEDhzlheWwr8XVPF1OUa8gj4pdhKsc1BMdF0I9o5BiOpq4W2R-TyJqIXVp4XDL9Y_oLQhWUMzqrluiJXTa2R7RDjPZBFJKb8yteRGw'> Contact Uploading & Non-Users</a></li>
                        <li><a href='https://about.meta.com/technologies/meta-verified/'>Meta Verified</a></li>
                    </ul>
                     <p>
                       <select aria-label='Switch Display Language' class='lang'>
                        <option>English</option> 
                        <option>french</option>
                        <option>Twi</option>
                        <option>Ewe</option>
                        <option>Ga</option>
                        <option>Russian</option>
                        <option>Spanis</option>

                        </select>   
                        <span className='copy'>© 2023 Instagram from Meta</span>
                     </p>
                </div>
            </div>
        </div>
        
    )  
}

}

export default SignIn