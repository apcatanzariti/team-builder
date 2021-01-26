import React, { useState } from 'react';
import styled from 'styled-components';
import Form from './Form';
import Member from './Member'

const team = [
  {
    name: 'Tony',
    email: 'tony@lambda.com',
    role: 'Student'
  },

  {
    name: 'Keith',
    email: 'keith@comcast.com',
    role: 'Student'
  }
];

const initialFormValues = {
  name: '',
  email: '',
  role: '',
}

function App() {

  const updateForm = (inputName, inputValue) => {
    setFormValues({
      ...formValues,
      [inputName]: inputValue,
    });
  };

  const submitForm = () => {
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    };
    if (!newMember.name || !newMember.email || !newMember.role) {
      return;
    } else {
      setTeamMembers([...teamMembers, newMember]);
      setFormValues(initialFormValues);
    }
  }

  const [teamMembers, setTeamMembers] = useState(team);
  const [formValues, setFormValues] = useState(initialFormValues);

  return (
    <StyledContainer>
    <Form values={formValues} update={updateForm} submit={submitForm}/>
    <h2>Our Current Members!</h2>
    {
      teamMembers.map(member =>{
        return (
          <center><Member details={member} /></center>
        );
      })
    }
    </StyledContainer>
  );
}

//----------------------------------BEGIN STYLES---------------------------------

const StyledContainer = styled.div`
  margin: 0 auto;
  width: 80%;
  padding: 2%;
  text-align: center;
  // border: solid 1px red;

  h2 {
    color: #00bfff;
  }
`;

//-------------------------------------EXPORT------------------------------------

export default App;
