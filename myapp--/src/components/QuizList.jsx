import React, { useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'


const QuizList = () => {
    const dispatch = useDispatch()
    const{quizzes,loading,error} = useSelector((state)=>state.quizzes)

    useEffect(()=>{
        dispatch(fetchQuizzes())
    },[dispatch])

    console.log('quizzes',quizzes)

    if (loading) return <p>Loading ...</p>
    if (error) return <p>Loading ...{error}</p>



    return (

    <div>

        {
        quizzes?.map((quiz)=>{
            <div key={quizzes.id}>



            <h3>{quiz.title}</h3>
            <p>{quiz.question}</p>
        </div>
            
        })
        
        
        }
      
    </div>
  )
}

export default QuizList
