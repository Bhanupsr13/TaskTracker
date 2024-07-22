import { useTodoContext } from '../hooks/useTodoContext'

const  ItemDetails = ({item})=>{
    const {dispatch} = useTodoContext()

    const handleDelete = async() => {
        const response = await fetch('api/lists/' + item._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if(response.ok){
            dispatch({type: 'DELETE_ITEM', payload: json})
        }
        console.log(json)
    }
    return (
        <div className="item">
            <h4>{item.title}</h4>
            <p>{item.description}</p>
            <p>{item.createdAt}</p>
            <span onClick={handleDelete}>DELETE</span>
        </div>
    )
}
export default ItemDetails