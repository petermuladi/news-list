import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Container from 'react-bootstrap/esm/Container';
import { FetchById } from '../../Store/Thunks/FetchById';
import Spinner from '../Spinner';
import Newsletter from '../NewsLetter/Newsletter';
import NotFound from '../NotFound/NotFound';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { BsFillPersonFill } from 'react-icons/bs';
import { AiOutlineCalendar } from 'react-icons/ai';


export default function Post() {

  // Get the post by id from the redux store
  const onePost = useSelector((state) => state.posts.postById);

  // Get the loading status from the redux store
  const LOAD = useSelector((state) => state.posts.loading);

  // Get the dispatch function from the useDispatch hook
  const dispatch = useDispatch();

  // Get the parameters from the URL
  const params = useParams();
  
  // Get the id parameter from the URL
  const id = params.id;

  useEffect(() => {

    dispatch(FetchById(id));

  }, []);

  //Spinnder
  if (LOAD) { return <Spinner /> };

  //post or id not found-> page 404....
  if (!onePost || !id) { return <NotFound /> };

  return (
    <div>
      <Container className='mt-5 text-center'>
        {onePost ?
          <div>
            <h1 className='text-center display-4 p-2'>{onePost.title}</h1>
            <img src={`${onePost.imagexl}?${onePost.id}`} className="img-fluid" alt={onePost.author}></img>
            <small><BsFillPersonFill className='mb-1' />  {onePost.author}  <AiOutlineCalendar className='mb-1' /> {onePost.createdAt}</small>
            <hr />
            <p dangerouslySetInnerHTML={{ __html: onePost.content }}></p>
            <NavLink to={'/'}><Button variant="outline-primary"><BsFillArrowLeftCircleFill /> Go Back</Button></NavLink>
            <hr />
          </div>
          : null}
      </Container>
      <Newsletter />
    </div>
  )
}
