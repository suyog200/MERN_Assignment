import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post/Post";

import useStyles from './styles';

const Posts = () => {
    const classes = useStyles((state) => state.posts);
    const posts = useSelector();
    return (
        <>
        <h1>Posts</h1>
        <Post />
        <Post />
        </>
    );
}

export default Posts;