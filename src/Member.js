import React from 'react';
import styled from 'styled-components';

export default function Member ({ details }) {
    return (
        <div>
        <StyledMemberCard>
            <p>Name: {details.name}</p>
            <p>Email: {details.email}</p>
            <p>Role: {details.role}</p>
        </StyledMemberCard>
        </div>
    );
}

//------------------------------------BEGIN STYLING------------------------------

const StyledMemberCard = styled.div`
    border: solid 1px #c0c0c0;
    width: 60%;
    font-size: 1.2em;
    margin: 3%;
    border-radius: 10px;
    box-shadow: 5px 5px 5px lightgray;
    color: #7e7e7e;
`;