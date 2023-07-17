// import React, { useState } from 'react';
// import { Typography, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from '@mui/material';
// import { FaTrash, FaEdit } from 'react-icons/fa';

// function ReadData() {
//   // Sample user data
//   const [users, setUsers] = useState([
//     { id: 1, name: 'John Doe', email: 'johndoe@example.com' },
//     { id: 2, name: 'Jane Smith', email: 'janesmith@example.com' },
//     { id: 3, name: 'Bob Johnson', email: 'bobjohnson@example.com' }
//   ]);

//   const [open, setOpen] = useState(false);
//   const [editUserId, setEditUserId] = useState('');
//   const [editName, setEditName] = useState('');
//   const [editEmail, setEditEmail] = useState('');

//   const handleEdit = (user) => {
//     setEditUserId(user.id);
//     setEditName(user.name);
//     setEditEmail(user.email);
//     setOpen(true);
//   };

//   const handleUpdate = () => {
//     setUsers((prevUsers) => {
//       return prevUsers.map((user) => {
//         if (user.id === editUserId) {
//           return {
//             ...user,
//             name: editName,
//             email: editEmail
//           };
//         }
//         return user;
//       });
//     });
//     handleClose();
//   };

//   const handleClose = () => {
//     setOpen(false);
//     setEditUserId('');
//     setEditName('');
//     setEditEmail('');
//   };

//   const handleDelete = (id) => {
//     setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
//   };

//   return (
//     <div>
//       <Typography variant="h5">Data List</Typography>
//       <TableContainer>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>Name</TableCell>
//               <TableCell>Email</TableCell>
//               <TableCell>Action</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {users.map((user) => (
//               <TableRow key={user.id}>
//                 <TableCell>{user.name}</TableCell>
//                 <TableCell>{user.email}</TableCell>
//                 <TableCell>
//                   <IconButton onClick={() => handleDelete(user.id)}>
//                     <FaTrash />
//                   </IconButton>
//                   <IconButton onClick={() => handleEdit(user)}>
//                     <FaEdit />
//                   </IconButton>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       <Dialog open={open} onClose={handleClose}>
//         <DialogTitle>Edit User</DialogTitle>
//         <DialogContent>
//           <TextField label="Name" fullWidth value={editName} onChange={(e) => setEditName(e.target.value)} />
//           <TextField label="Email" fullWidth value={editEmail} onChange={(e) => setEditEmail(e.target.value)} />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Cancel</Button>
//           <Button onClick={handleUpdate} color="primary">Update</Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// }

// export default ReadData;


import React from 'react';
import { Typography, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from '@mui/material';
import { FaTrash, FaEdit } from 'react-icons/fa';

function ReadData({ users, onUserDeleted, onUserUpdated }) {
  const [open, setOpen] = React.useState(false);
  const [editUserId, setEditUserId] = React.useState('');
  const [editName, setEditName] = React.useState('');
  const [editEmail, setEditEmail] = React.useState('');

  const handleEdit = (user) => {
    setEditUserId(user.id);
    setEditName(user.name);
    setEditEmail(user.email);
    setOpen(true);
  };

  const handleUpdate = () => {
    onUserUpdated(editUserId, editName, editEmail);
    handleClose();
  };

  const handleClose = () => {
    setOpen(false);
    setEditUserId('');
    setEditName('');
    setEditEmail('');
  };

  const handleDelete = (id) => {
    onUserDeleted(id);
  };

  return (
    <div>
      <Typography variant="h5">Data List</Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleDelete(user.id)}>
                    <FaTrash />
                  </IconButton>
                  <IconButton onClick={() => handleEdit(user)}>
                    <FaEdit />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit User</DialogTitle>
        <DialogContent>
          <TextField label="Name" fullWidth value={editName} onChange={(e) => setEditName(e.target.value)} />
          <TextField label="Email" fullWidth value={editEmail} onChange={(e) => setEditEmail(e.target.value)} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleUpdate} color="primary">Update</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ReadData;
