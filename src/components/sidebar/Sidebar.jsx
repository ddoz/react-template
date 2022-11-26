import React, { useContext } from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import './sidebar.scss';
import { FireTruckOutlined, GraphicEqOutlined, ListAltOutlined, LogoutOutlined, NotificationAddOutlined, Person2Outlined, SettingsAccessibilityOutlined, SystemSecurityUpdateOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext';

const Sidebar = () => {

  const {dispatch} = useContext(DarkModeContext)

  return (
    <div className='sidebar'>
        <div className="top">
            <Link to="/" style={{textDecoration: "none"}}>
                <span className="logo">neobkd</span>
            </Link>
        </div>
        <hr/>
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <li>
                    <DashboardIcon className='icon' />
                    <span>Dashboard</span>
                </li>
                <Link to="/users" style={{textDecoration: "none"}}>
                    <li>
                        <PersonOutlineOutlinedIcon className='icon' />
                        <span>Users</span>
                    </li>
                </Link>
                <Link to="/products" style={{textDecoration: "none"}}>
                    <li>
                        <Inventory2OutlinedIcon className='icon' />
                        <span>Products</span>
                    </li>
                </Link>
                <li>
                    <CreditCardOutlinedIcon className='icon'  />
                    <span>Orders</span>
                </li>
                <li>
                    <FireTruckOutlined className='icon'  />
                    <span>Delivery</span>
                </li>
                <li>
                    <GraphicEqOutlined className='icon'  />
                    <span>Stats</span>
                </li>
                <li>
                    <NotificationAddOutlined className='icon'  />
                    <span>Notifications</span>
                </li>
                <li>
                    <SystemSecurityUpdateOutlined className='icon' />
                    <span>System Health</span>
                </li>
                <li>
                    <ListAltOutlined className='icon'  />
                    <span>Logs</span>
                </li>
                <li>
                    <SettingsAccessibilityOutlined className='icon'  />
                    <span>Settings</span>
                </li>
                <p className="title">USER</p>
                <li>
                    <Person2Outlined className='icon'  />
                    <span>Profile</span>
                </li>
                <li>
                    <LogoutOutlined className='icon'  />
                    <span>Logout</span>
                </li>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption" onClick={()=>dispatch({type:"LIGHT"})}></div>
            <div className="colorOption" onClick={()=>dispatch({type:"DARK"})}></div>
        </div>
    </div>
  )
}

export default Sidebar