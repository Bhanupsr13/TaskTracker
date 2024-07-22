import { useState } from "react"
import { useTodoContext } from '../hooks/useTodoContext'

const ItemForm = () => {
    const {dispatch} = useTodoContext()

    const [title, setTitle] = useState('')
    const [description, setDesc] = useState('')
    const [err, setErr] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])
    const handleSubmit = async (e) => {
        e.preventDefault()
        const item = {title, description}
        const response = await fetch('/api/lists', {
            method: 'POST',
            body:JSON.stringify(item),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()
        if(response.ok){
            dispatch({type:'CREATE_ITEM', payload:json})
            setTitle('')
            setDesc('')
            setErr(null)
            setEmptyFields([])
        } else {
            setErr(json.error)
            setEmptyFields(json.emptyFields)
            console.log(json.emptyFields)
        }
    }
    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a new todo</h3>
            
            <label>Title :</label>
            <input
                type="text"
                onChange={(e)=>setTitle(e.target.value)}
                value={title}
                className={emptyFields.includes('title')?'error':''}
                />
            <label>Description</label>
            <input
                type="text"
                onChange={(e)=>setDesc(e.target.value)}
                value={description}
                className={emptyFields.includes('description')?'error':''}
            />
            <button>Add Item</button>
            {err && <div className="error">{err}</div>}
        </form>
    )
}
export default ItemForm