import 'bootstrap';

export default function Navbar() {
  return (
    <nav className="navbar fixed-top navbar-expand-md navbar-light bg-white d-flex justify-content-between p-0">
    <div className='d-flex flex-nowrap justify-content-between py-3 col-md-1'>
      <div className="navbar-brand display_mobile"><img src="./images/J_W dark noB - fav.svg" /></div>
      <div className="navbar-brand display_desktop"><img src="./images/Full name-stacked.svg" /></div>
      <button className="navbar-toggler" type="button" >
        <span className="navbar-toggler-icon"></span>
      </button>
    </div>
    <div className="navbar-collapse collapsed transition col-md-11 col-lg-11 bg-sm-light bg-none p-0" id="navbarText" > 
      <div className="d-flex justify-content-between col-lg-12 p-0">
        <ul className="navbar-nav w-auto mr-auto ml-md-3 ml-lg-1 col-12 col-md-9 p-0">
          <li className="nav-item pl-4 active">
          <div className='nav-link description' >Bio</div>
          </li>
          <li className="nav-item pl-4">
            <div className='nav-link experience' >Experiences</div>
          </li>
          <li className="nav-item pl-4">
            <div className='nav-link skills' >Skills</div>
          </li>
          <li className="nav-item pl-4">
            <div className='nav-link education' >Education</div>
          </li>
          <li className="nav-item pl-4 py-2 w-100 bg-light display_mobile">
            <div className='nav-link'><strong>Get in touch</strong></div>
          </li>
        </ul>
        <div className="btn btn-secondary px-lr-3 display_desktop mr-2">
          Get in touch 
        </div>
      </div>
    </div>
  </nav>
  )
}
