import React from "react";
import Layout from "../../components/Layout";
import {useRouter} from 'next/router'

const Blog = () => {
    const {query} = useRouter()
    return (
    <Layout>
        <h3>Category: {query.category} </h3>
        <h2>Blog: {query.blog} </h2>
    </Layout>
) 
}

export default Blog;
