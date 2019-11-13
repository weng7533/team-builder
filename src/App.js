import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import InportForm from './Form';

function App() {

  const [teamMember, SetTeamMember] = useState([
    {
      name: 'William',
      email: 'weng7533@gmail.com',
      role: 'frontend engineer'
    },
    {
      name: 'Coltyn',
      email: 'coltynwiewel@gmail.com',
      role: 'frontend engineer'
    },
    {
      name: 'Stella',
      email: 'coltynwiewel@gmail.com',
      role: 'frontend engineer'
    },
    {
      name: 'Denise Fafette',
      email: 'denisefafette@gmail.com',
      role: 'frontend engineer'
    },
  ]
  )

  // const [memberList, SetMemberList] = useState([])

  const memberAdder = (newMember) => {
    SetTeamMember([...teamMember, newMember])
  }

  console.log(teamMember);

  return (
    <div className='App'>

      <InportForm SetTeamMember={memberAdder} />

      {
        teamMember.map((member) =>
          <div className='NameCard'>
            <li>Name: {member.name}</li>
            <li>Email: {member.email}</li>
            <li>Role: {member.role}</li>
          </div>

        )
      }


    </div>

  );
}

export default App;
