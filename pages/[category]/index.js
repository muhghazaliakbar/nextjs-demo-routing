import Router, {useRouter} from "next/router";
import Layout from "../../components/Layout";
import React from "react";

const CategoryShow = () => {
    const router = useRouter();
    return (
        <Layout>
            <h3>Category: /{router.query.category}</h3>
        </Layout>
    );
};

CategoryShow.getInitialProps = ({query, res }) => {
    if(query.category && query.category === 'about-me'){
        if (res) {
            res.writeHead(302, {
                Location: '/about'
            })
            res.end()
        } else {
            Router.push('/about')
        }
    }
    return {query}
}

export default CategoryShow
