import { Navbar } from 'react-bootstrap'
import { Icon } from '@iconify/react'
import fireIcon from '@iconify/icons-mdi/fire-alert'

const Header = () => {
    return (
        <header>
            <Navbar>
            <Navbar.Brand style={{color: "white"}}>
                <Icon icon={fireIcon} style={{color:"orange", fontSize:"2rem"}} /> Wildfire Tracker (Powered by NASA)
            </Navbar.Brand>
            </Navbar>
        </header>
    )
}

export default Header