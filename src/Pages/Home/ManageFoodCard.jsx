
import { FiDelete ,FiEdit } from 'react-icons/fi';
const ManageFoodCard = ({requests}) => {
 const {photo,Quantity,Location,Date} =requests




 return (
 <div className="mt-10">

<div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>photo</th>
        <th>Quantity</th>
        <th>Location</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
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
          <FiDelete></FiDelete>
        </th>
        <th className='text-2xl font-bold'>
          <FiEdit></FiEdit>
        </th>
      </tr>
    
    </tbody>
  </table>
</div>           

      {/* <table>
        {
          <tbody className="border border-spacing-5 border-black">
            <td>{photo}</td>
            <td> {Quantity}</td>
            <td>{Location}</td>
            <td> {Date}</td>
            <td>{additional}</td>
          </tbody>
        }

    </table>                                                                                       */}
  </div>
 );
};

export default ManageFoodCard;