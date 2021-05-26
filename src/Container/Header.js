

const Header = () => {
    return(
        <nav className='blue lighten-1'>
            <div className="nav-wrapper container">
                <a href="https://www.google.com/" className="brand-logo">Logo</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="https://www.google.com/">Sass</a></li>
                    <li><a href="https://www.google.com/">Components</a></li>
                    <li><a href="https://www.google.com/">JavaScript</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header