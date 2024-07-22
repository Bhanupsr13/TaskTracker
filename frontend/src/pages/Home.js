import {useEffect} from 'react'
import { useTodoContext } from '../hooks/useTodoContext'
 
//components
import Itemdetails from '../components/ItemDetails'
import ItemForm from '../components/ItemForm'

const Home = ()=>{
    const {List, dispatch} = useTodoContext()
    useEffect(()=>{
        const fetchList = async ()=>{
            const res = await fetch('/api/lists/')
            const json = await res.json()
            
            if(res.ok){
                dispatch({type:'SET_LIST', payload:json})
            }
        }
        fetchList()
    },[dispatch])
    return (
        <div className="home">
            <div className="list">
                {List && List.map((item)=>(
                    <Itemdetails key={item._id} item={item} />
                ))}
            </div>
            <ItemForm/>
        </div>
    )
}
export default Home