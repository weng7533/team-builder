import React, { useState } from 'react';



const InportForm = (props) => {
    const [InputedMember, SetInputedMember] = useState(
        {
            name: '',
            email: '',
            role: ''
        }
    )
    const ChangeHandler = (Event) => {

        SetInputedMember({ ...InputedMember, [Event.target.name]: Event.target.value })


    }

    const SubmitHandler = (Event) => {
        props.SetTeamMember(InputedMember);
        Event.preventDefault();
        SetInputedMember({
            name: '',
            email: '',
            role: ''
        });
    }

    console.log(InputedMember);
    return (
        <form onSubmit={SubmitHandler}>

            <label id='name'>Name
                <input type='text' id='name' name='name' value={InputedMember.name} onChange={ChangeHandler} />
            </label>
            <label id='email'>email
                <input type='text' id='email' name='email' value={InputedMember.email} onChange={ChangeHandler} />
            </label>
            <label id='Role'>Role
                <input type='text' id='Role' name='role' value={InputedMember.role} onChange={ChangeHandler} />
            </label>
            <button type='submit'>Submit</button>

        </form>
    )
}

export default InportForm;