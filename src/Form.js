import React from 'react';

export default function Form ({ values, update, submit }) {

    const onChange = evt => {
        const { name, value } = evt.target;
        update(name, value);
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    return (
        <form onSubmit={null}>
            <div>
            <label>Name:
            <input
            type='text'
            name='name'
            value={values.name}
            placeholder='Name'
            onChange={onChange}>
            </input>
            </label>
            </div>

            <div>
            <label>Email:
            <input
            type='email'
            name='email'
            value={values.email}
            placeholder='Email'
            onChange={onChange}>
            </input>
            </label>
            </div>

            <div>
            <label>Role:
                <select
                name='role'
                value={values.role}
                onChange={onChange}>
                    <option>Select Role</option>
                    <option>Student</option>
                    <option>Instructor</option>
                </select>
            </label>
            </div>
            <button>Submit</button>
        </form>
    );
}