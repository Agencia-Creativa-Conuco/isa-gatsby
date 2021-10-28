import React from "react";
import styled from "@emotion/styled";
import PostCover from "./post-event-cover";
import PostContent from "./post-event-content";

const PostEvent = ({ post })=>{

    return(
        
        <Article key={post.id}>
            <PostCover {...{ post }}/>
            <PostContent {...{ post }}/>
        </Article>
    )
}

export default PostEvent;

const Article = styled.article``;
