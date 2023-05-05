import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useStepContext } from '@mui/material'
import "../App.css"
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';



// get data from database usin axios

const Bills11 = () => {
    const navigate = useNavigate();

    const handleDelete = async (pg) => {
        setpgs(pgs.filter((p) => p._id !== pg._id));
        await axios.delete(`http://localhost:3550/Bills/Bills/${pg._id}`);
        toast.success("Product Deleted successfully")
      };

    // function editpg 
    // function deletepg 

    //get pg by id
    const [pge, setpge] = useState()
    const { id } = useParams()
    const getpgById = () => {
        
            navigate(`pg/update`)
        
    }



   





    //update pg

    

    const onSubmit = () => {
        console.log("update pg")

        getpgById()
        
        
    }



   








    
   










    const [pgs, setpgs] = useState()
    const [type, settype] = useState()
    const [pgtype, setroles] = useState()

    useEffect(() => {
        getpgs();
    }, [])

    const getpgs = () => {

        axios.get("http://localhost:3550/Bills/Bills").then((res) => {
            console.log(res.data.products)
            setpgs(res.data.products)
        })
    }

   

    


    return (
        <div className='tcontainer'>
            <div className='font'>Invoice</div>
            <section class=" h-screen overflow-hidden flex justify-center" >
                <div class="table w-full p-2" >
               
                    <table class=" border" >
                        <thead class="bg-gray-100">
                            <tr>
                                <th class="border px-4 py-2">id</th>
                                <th class="border px-4 py-2">Product Name</th>
                                <th class="border px-4 py-2">Category Name</th>
                                <th class="border px-4 py-2">Brand Name</th>
                                <th class="border px-4 py-2">Description</th>
                                <th class="border px-4 py-2">Quantity</th>
                                <th class="border px-4 py-2">Base Price</th>
                              <th class="border px-4 py-2">Action</th>

                                

                            </tr>
                        </thead>
                        <tbody>
                            {pgs?.map((pg) => (
                                <tr>
                                    <td class="border px-4 py-2">{pg?._id}</td>
                                   
                                    <td class="border px-4 py-2">{pg?.productName}</td>
                                    <td class="border px-4 py-2">{pg?.categoryId?.categoryName}</td>
                                    <td class="border px-4 py-2">{pg?.brandId?.brandName}</td>
                                   
                                    <td class="border px-4 py-2">{pg?.description}</td>
                                    <td class="border px-4 py-2">{pg?.qty}</td>
                                    <td class="border px-4 py-2">{pg?.basePrice}</td>

                                    <td class="border px-4 py-2">
                                        
                                        <button onClick={() => handleDelete(pg)} class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
                                    </td>



                                </tr>



                            ))}



                        </tbody>

                    </table>
                </div>
            </section>

        </div>
    )
}

export default Bills11