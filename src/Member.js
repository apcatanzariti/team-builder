import React from 'react';

export default function Member ({ details }) {
    return (
        <div>
            name:{details.name}
            email:{details.email}
            role:{details.role}
        </div>
    );
}