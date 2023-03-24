import React, {Component} from 'react'
import './Header.css'

class Header extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return(
      <header className="header-bar">
        <h1>Bea &amp; Travis's Movie Cinema</h1>
        <input type="text" placeholder="Search" name="search" />
        <button className='search-button'>Search</button>
      </header>
        
     
    
    )
  }
}

export default Header;

{/* <header>
<section>
  <img></img>
  <h1>Bea & Travis's Rate Movies</h1>
</section>
 <form>
  <input type="text" placeholder="Search" name="search" />
</form>
</header> */}