import React, {Component} from 'react'
import './Header.css'

class Header extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return(
      <div>
        <h1>Bea & Travis's Rate Movies</h1>
        <input type="text" placeholder="Search" name="search" />
      </div>
    
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