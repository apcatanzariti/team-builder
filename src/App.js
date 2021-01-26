import React, { useState } from 'react';
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
    <div>
    <Form values={formValues} update={updateForm}/>
    {
      teamMembers.map(member =>{
        return (
          <Member details={member} />
        );
      })
    }
    </div>
  );
}

export default App;
