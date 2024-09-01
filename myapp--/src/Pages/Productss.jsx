import React from 'react'
import axios from 'axios'

let URL=`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-quiz?page=2&limit=5`

const getData = async(page)=>{
    return await axios.get(URL)
}


const Productss = () => {
  return (
    <div>
      
    </div>
  )
}

export default Productss
