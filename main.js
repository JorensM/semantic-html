const renderNav = () => `
    <nav>
        <ul>
            <li>
                <a href='index.html'>
                    Blog
                </a>
            </li>
            <li>
                <a href='about.html'>
                    About
                </a>
            </li>
            <li>
                <a href='contact.html'>
                    Contact
                </a>
            </li>
            
        </ul>
    </nav>
`

document.getElementsByTagName('header')[0]
    .insertAdjacentHTML('beforeend', renderNav())
document.getElementsByTagName('footer')[0]
    .insertAdjacentHTML('beforeend', renderNav())