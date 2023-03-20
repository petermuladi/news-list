import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchPosts } from '../../Store/Thunks/FetchHomePosts';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import Spinner from '../Spinner';
import { CgReadme } from 'react-icons/cg';
import { BsFillPersonFill } from 'react-icons/bs';
import { AiOutlineCalendar } from 'react-icons/ai';


export default function HomePosts() {

    // Get the dispatch function from the useDispatch hook
    const dispatch = useDispatch();
    
    // Get the home posts from the redux store
    const homePosts = useSelector((state) => state.posts.articles.items);

    // Get the loading status from the redux store
    const LOADING = useSelector((state) => state.posts.loading);

    // Get the end status of the home posts from the redux store
    const endPosts = useSelector((state) => state.posts.articles.end);

    // Get the page number of the home posts from the redux store
    const page = useSelector((state) => state.posts.articles.page);

    //Fetch posts first 6p ost
    useEffect(() => {

        if (homePosts.length <= 0) {
            dispatch(FetchPosts({ page: 1, order: 'asc', limit: '6' }));
        };
        window.scrollTo(0, 4000);
    });


    //Fetch more....
    const morePosts = () => {

        const nextPage = page + 1;

        dispatch(FetchPosts({ page: nextPage, order: 'asc', limit: '6' }));
    };

    //Spinner loading....
    if (LOADING) {
        return <Spinner />
    };
    return (
        <div>
            <Container>
                <Row>
                    {homePosts ? homePosts.map((post, i) => (
                        <Col className='mt-2' key={i} sm={6} md={6} lg={4}>
                            <Card>
                                <Card.Img variant='top' src={`${post.image}?${post.id}`} />
                                <Card.Body>
                                    <Card.Title>{post.title}</Card.Title>
                                    <p>{post.excerpt}</p>
                                    <small> <BsFillPersonFill className='mb-1' />  {post.author}</small>
                                    <small> <AiOutlineCalendar className='mb-1' /> {post.createdAt}</small>
                                </Card.Body>
                                <NavLink to={`/post/${post.id}`}>
                                    <Button className='m-2' variant="outline-primary"><CgReadme className='mb-1' /> Read</Button>
                                </NavLink>
                            </Card>
                        </Col>
                    )) : null}
                    {!endPosts && !LOADING ?
                        <Button className='m-2 btn btn-secondary'
                            onClick={() => morePosts()}
                        >😉 Load More Posts....</Button>
                        : null}
                </Row>
            </Container>
        </div>
    )
}

