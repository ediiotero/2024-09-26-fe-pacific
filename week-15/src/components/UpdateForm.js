import React, {useState} from 'react'

const initialState = {
    id: '',
    title: '',
    body: ''
}

const UpdateForm = () => {
    const [formData, setFormData] = useState(initialState)

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    const updateData = async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${formData.id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        })

        const data = await res.json()
        console.log(data)
    }

    const handleSubmit = event => {
        event.preventDefault()
        updateData()
        setFormData(initialState)
    }

  return (
    <div>
    <h2>Update Post Form</h2>
    <form onSubmit={handleSubmit}>
        <div>
            <input 
                type="text"
                placeholder='Enter id'
                name='id'
                value={formData.id}
                onChange={handleChange}
            />
        </div>
        <div>
            <input 
                type="text"
                placeholder='Enter title'
                name='title'
                value={formData.title}
                onChange={handleChange}
            />
        </div>
        <div>
            <input 
                type="text"
                placeholder='Enter post body'
                name='body'
                value={formData.body}
                onChange={handleChange}
            />
        </div>
        <input type="submit" />
    </form>
</div>
  )
}

export default UpdateForm