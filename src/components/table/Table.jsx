import './table.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Tables = () => {

    function createData(id, product, img, customer, date, amount, method, status) {
        return { id, product, img, customer, date, amount, method, status };
    }
    
    const rows = [
        createData(235741, "Razer Blade 15", "https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", "John Smith", "1 March", 920, "Online", "Approved"),
        createData(235742, "Razer Blade 15", "https://images.pexels.com/photos/341523/pexels-photo-341523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", "John Smith", "1 March", 920, "Online", "Approved"),
        createData(235743, "Razer Blade 15", "https://images.pexels.com/photos/1470167/pexels-photo-1470167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", "John Smith", "1 March", 920, "Online", "Pending"),
        createData(235744, "Razer Blade 15", "https://images.pexels.com/photos/2638026/pexels-photo-2638026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", "John Smith", "1 March", 920, "Online", "Pending"),
    ];
      
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className='tableCell'>Tracking ID</TableCell>
            <TableCell className='tableCell'>Product</TableCell>
            <TableCell className='tableCell'>Customer</TableCell>
            <TableCell className='tableCell'>Date</TableCell>
            <TableCell className='tableCell'>Amount</TableCell>
            <TableCell className='tableCell'>Payment Method</TableCell>
            <TableCell className='tableCell'>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
            >
              <TableCell className='tableCell'>{row.id}</TableCell>
              <TableCell className='tableCell'>
                <div className="cellWrapper">
                    <img src={row.img} className="image" alt='' />
                    {row.product}
                </div>
            </TableCell>
              <TableCell className='tableCell'>{row.customer}</TableCell>
              <TableCell className='tableCell'>{row.date}</TableCell>
              <TableCell className='tableCell'>{row.amount}</TableCell>
              <TableCell className='tableCell'>{row.method}</TableCell>
              <TableCell className='tableCell'>
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Tables