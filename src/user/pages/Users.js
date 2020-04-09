import React from 'react';
import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {id: 'u1',
     name: 'Max Schwarz',
     image:'https://cdn2.vectorstock.com/i/1000x1000/03/96/peace-and-love-symbol-vector-19560396.jpg',
     places:3
    }  
  ];
  return <UsersList items={USERS} />;
};

export default Users;
