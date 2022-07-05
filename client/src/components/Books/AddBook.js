import React, { useState } from 'react';
import { createBook } from '../../redux/actions/books/bookActions';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import Books from './Books';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const AddBook = ({ history }) => {
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate()

  //Get the user id from store

  const userLogin = useSelector(state => state.userLogin);

  // const { userInfo } = userLogin;
  // console.log(userInfo._id);
  // dispatch action
  const dispatch = useDispatch();

  const formSubmitHandler = e => {
    const data = {
      category,
      title,
      author,
      // createdBy: userInfo && userInfo._id,
    };
    e.preventDefault();
    dispatch(createBook(data));
    history.push('/books');
  };
  // console.log(category);
  // const getData = () =>{
  //   const [data, setData]
  // }
  

  return (
    <div className='row container-height'>
      <div className='col-lg-6 col-md-6 m-auto'>
        <div className='container'>
        {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Click to add books
        </button> */}
        <Button onClick={handleOpen}>Click to add books</Button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
           <Box sx={style}>
            <div className='modal-dialog'>
              <div className='modal-content'>
                <div className='modal-header'>
                  <h5 className='modal-title' id='exampleModalLabel'>
                    Create Book
                  </h5>
                  <button onClick={handleClose}
                    type='button'
                    className='close'
                    data-dismiss='modal'
                    aria-label='Close'>
                    <span aria-hidden='true'>&times;</span>
                  </button>
                </div>
                <div className='modal-body'>
                  <h1 className='text-center'>Add Book</h1>
                  <form onSubmit={formSubmitHandler}>
                    <fieldset>
                      <div className='form-group'>
                        <select
                          value={category}
                          onChange={e => setCategory(e.target.value)}
                          className='custom-select'>
                          <option defaultValue='programming'>
                            programming
                          </option>
                          <option value='religion'>Religion</option>
                          <option value='life'>life</option>
                          <option value='culture'>culture</option>
                        </select>
                      </div>
                      <div className='form-group'>
                        <label htmlFor='exampleInputEmail1'>Author </label>
                        <input
                          value={author}
                          onChange={e => setAuthor(e.target.value)}
                          type='text'
                          className='form-control'
                          id='exampleInputEmail1'
                          aria-describedby='emailHelp'
                          placeholder='Author name'
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='exampleInputPassword1'>title</label>
                        <input
                          value={title}
                          onChange={e => setTitle(e.target.value)}
                          type='text'
                          className='form-control'
                          id='exampleInputPassword1'
                          placeholder='Book title'
                        />
                      </div>
                      <button type='submit' className='btn btn-warning m-auto'>
                        Create Book 
                      </button>
                    </fieldset>
                  </form>
                </div>
                <div className='modal-footer'>
                  <button onClick={handleClose}
                    type='button'
                    className='btn btn-danger'
                    data-dismiss='modal'>
                    Close
                  </button>
                </div>
              </div>
            </div>
            </Box>
        </Modal>
         
        </div>
      </div>
    </div>
  );
};

export default AddBook;