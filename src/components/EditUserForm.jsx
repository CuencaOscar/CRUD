import React from 'react'
import { useForm } from 'react-hook-form';

const EditUserForm = ({ currentUser, updateUser }) => {

    const { register, handleSubmit, formState: { errors }, setValue } = useForm({
        defaultValues: currentUser
    });

    setValue('name', currentUser.name)
    setValue('username', currentUser.username)

    const onSubmit = (data, e) => {
        updateUser(data.id, data)
        e.target.reset()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name</label>
            <input
                placeholder="Ingrese su nombre"
                type="text"
                {
                ...register("name", { required: true })
                }
            />
            {errors.name && errors.name.type === "required" && <div className="text-danger text-small d-block mb-2">This field is required</div>}
            {/* {errors.name && errors.name.type === "minLength" && <span className="text-danger text-small d-block mb-2">The size in small</span>} */}
            <label>Username</label>
            <input
                placeholder="Ingrese el username"
                type="text"
                {
                ...register("username", { required: true })
                }
            />
            {errors.username && errors.username.type === "required" && <div className="text-danger text-small d-block mb-2">This field is required</div>}
            <button>Edit User</button>
        </form>
    )
}

export default EditUserForm;

