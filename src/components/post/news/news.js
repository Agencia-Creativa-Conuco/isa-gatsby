import React from "react";
import styled from "@emotion/styled";
import NewsCover from "./news-cover";
import NewsContent from "./news-content";
import Related from "../../related";
import usePosts from "../../../hooks/usePosts";

const News = ({ post })=>{

    const posts = usePosts();

    const relatedPosts = posts.filter( (item, index) => item.id != post.id).slice(0,3);

    return(
        
        <Article key={post.id}>
            <NewsCover {...{ post }}/>
            <NewsContent {...{ post }}/>
            <Related items={relatedPosts} />
        </Article>
    )
}

export default News;

const Article = styled.article``;
