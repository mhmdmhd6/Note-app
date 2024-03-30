import './Header.css'

export default function Header() {
  return (
    <header className='header'>
      <h1 className='header__logo'>Note app</h1>
      <div className='header__search'>
        <input type="text" placeholder='search...'/>
      </div>
      {/* <div>
        <a href="#" className='header__link'>Login</a>
        <a href="#" className='header__link'>Signup</a>
      </div> */}
    </header>
  );
}
