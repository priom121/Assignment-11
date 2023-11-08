
import { FiDelete ,FiEdit } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const ManageFoodCard = ({requests ,handleDelete }) => {
 const { _id ,photo,Quantity,Location,Date} =requests

 return (
 <div className="mt-10">

<div className="overflow-x-auto">
  <table className="table">

    <tbody>
      <tr>
        <th>
        <div className="mask mask-squircle w-20 h-12">
                <img src={photo} alt="Avatar Tailwind CSS Component" />
              </div>
        </th>
        <td>
          <div className="flex items-center space-x-3">
        
            <div>
              <div className="font-bold">{Quantity}</div>
            </div>
          </div>
        </td>
        <td>
          {Location}
        </td>
        <td>{Date}</td>
        <th className='text-2xl font-bold'>
         <button onClick={()=> handleDelete(_id)}> <FiDelete></FiDelete></button>
        </th>
        <th className='text-2xl font-bold'>
        <Link to={`/updatedFood/${_id}`}>
        <button > <FiEdit></FiEdit></button>
        </Link>
        </th>
      </tr>
    
    </tbody>
  </table>
</div>           
  </div>
 );
};

export default ManageFoodCard;