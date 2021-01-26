import React from 'react';
import styled from 'styled-components';

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
        <form onSubmit={onSubmit}>
            <StyledFormContainer>
                <h1>New Member Sign Up!</h1>
                <div>
                <input
                type='text'
                name='name'
                value={values.name}
                placeholder='Name'
                onChange={onChange}>
                </input>
                </div>
                <div>
                <input
                type='email'
                name='email'
                value={values.email}
                placeholder='Email'
                onChange={onChange}>
                </input>
                </div>
                <div>
                    <select
                    name='role'
                    value={values.role}
                    onChange={onChange}>
                        <option>Select Role</option>
                        <option>Student</option>
                        <option>Instructor</option>
                    </select>
                <br />
                <button>Submit</button>
                </div>
            </StyledFormContainer>
        </form>
    );
}

//-----------------------------------BEGIN STYLING-------------------------------

const StyledFormContainer = styled.div`
    padding-bottom: 3%;
    border-bottom: solid 1px #b3b3b3;

    input, select {
        margin: 1% 0% 1% .5%;
        padding: 1%;
        font-size: 1em;
        color:#7e7e7e;
        text-align: center;
        border: solid 1px #7e7e7e;
        border-radius: 5px;
        ::placeholder {
            color:  #7e7e7e;
        }
    }

    h1 {
        color: #00bfff;
    }

    button {
        padding: 1% 10% 1% 10%;
        margin-top: 2%;
        font-size: 1em;
        color:  #00bfff;
        background-color: white;
        border: solid 2px  #00bfff;
        border-radius: 10px;
        transition: .3s;
        cursor: pointer;
    }

    button:hover {
        color: white;
        background-color: #00bfff;
    }
`;