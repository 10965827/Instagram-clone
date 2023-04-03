
function SignUp(){
    
    
    return(
        <div className='body'>
            <div className='signup-container'>
                <div className='signup-form'>
                    <div className='instagramlo'>
                      <img src={instagramlogo} alt='#' className='instagram-logo1' />
                    </div>
                      <p className='intro'>Sign up to see photos and videos
                        <br/>from your friends.
                      </p>


                    <div className='submit' value='login'>
                      <button className='login-button'>
                      <img src={facebook} alt='#' className='facebook-logo'/> <span> Login with Facebook</span> 
                      </button>
                    </div>

                    <div className='line-box'>
                     <div className='line1'></div>
                     <div className='or-box'>OR</div>
                     <div className='line2'></div>
                    </div>


                    <div className='input-box'>
                     <input type='mobile' placeholder='Mobile Number, or email'
                      />
                    </div>

                    <div className='input-box'>
                      <input type='fullname' placeholder='Full Name'/>
                     </div>

                     <div className='input-box'>
                     <input type='usernm' placeholder='Username'
                      />
                    </div>
                    <div className='input-box'>
                     <input type='passwd' placeholder='Password'
                      />
                    </div>
                    <div className='terms'>

                    <p>People who use our service may have uploaded  
                     <br/>your contact information to Instagram. Learn More
                    </p>

                    <p>
                        By signing up, you agree to our <a>Terms, privacy</a>
                        <br/> <a>Policy</a> and <a>cookies Policy</a>
                    </p>
                    </div>


                    <div className='submit' value='login'>
                      <a href=''><button className='signup-button'>sign up</button></a>
                    </div>
                     
                
               
            </div>
            <div className='power'>
              <p>
                  Have an account? <a href=''><span className='sign-in-span'>Sign in</span></a>
              </p>
            
            <div className='get-app'>
                <p>Get the app.</p>
            
            <div className='googlePlay microsoftStore'>
                <img src={googlePlay} alt='#' className='google-play-logo1' />
                <img src={getFromMicrosoft} alt='#' className='microsoft-store-logo1' />
            </div>
            </div>
            </div>

    

        </div>
           <div className='footer'>
                <div className='links'>
                
                    <ul>
                        <li><a href='#'>Meta</a></li>
                        <li><a href='#'>About</a></li>
                        <li><a href='#'>Blog</a></li>
                        <li><a href='#'>Jobs</a></li>
                        <li><a href='#'>Help</a></li>
                        <li><a href='#'>API</a></li>
                        <li><a href='#'>Privacy</a></li>
                        <li><a href='#'>Terms</a></li>
                        <li><a href='#'>Top Accounts</a></li>
                        <li><a href='#'>Locations</a></li>
                        <li><a href='#'>Instagram Lite</a></li>
                        <li><a href='#'> Contact Uploading & Non-Users</a></li>
                        <li><a href='#'>Meta Verified</a></li>
                    </ul>
                    
                     <p>
                       <select>
                        <option>English</option> 
                        <option>french</option>
                        <option>Twi</option>
                        <option>Ewe</option>
                        <option>Ga</option>
                        <option>Russian</option>
                        <option>Spanish</option>
                        </select>   
                        <span className='copy'>© 2023 Instagram from Meta</span>
                     </p>
                </div>
            </div>
        </div>
        
    )  


}

export default SignUp