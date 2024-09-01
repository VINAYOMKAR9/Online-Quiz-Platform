import React, { useEffect, useState } from 'react'
import axios from 'axios'

let URL=`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-quiz`

const getData = async(page)=>{
    return await axios.get(URL,{
        params:{
            _page:{page},
            _limit:5
        }
    })
}


const Productss = () => {
    const [page,setPage]= useState(2)
    const [Data,setData]= useState([])

    useEffect(()=>{
        getData(page).then((res)=>{
            setData(res.data)

        }).catch((err)=>{
            setData([])
        })
    },[page])
    console.log(data)


  return (
    <div>
      
    </div>
  )
}

export default Productss
