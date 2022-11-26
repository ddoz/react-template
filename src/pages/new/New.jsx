import './new.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';

export const New = () => {
  return (
    <div className='new'>
      <Sidebar />
      <div className="newContainer">
        <Navbar/>

        <div className="top">
          <h1>Add New User</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src="https://images.pexels.com/photos/2638026/pexels-photo-2638026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
            
          </div>
          <div className="right">
            <form action="">
              
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
