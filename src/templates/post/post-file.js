import React from "react";
import styled from "@emotion/styled";
import PostFileCover from "./post-file-cover";

const PostFile = ({ post })=>{

    return(
        
        <Article key={post.id}>
            <PostFileCover {...{ post }} />
        </Article>
    )
}

export default PostFile;

const Article = styled.article``;
