import {useRouter} from "next/router";
import Layout from "../components/Layout";
import React from "react";

const CategoryShow = () => {
    const router = useRouter();

    return (
        <Layout>
            <h3>Category: /{router.query.category}</h3>
        </Layout>
    );
};

export default CategoryShow
