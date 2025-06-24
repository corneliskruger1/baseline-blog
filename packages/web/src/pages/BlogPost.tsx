import React, { useEffect } from 'react';
import PageWrapper from '../components/page-wrapper/PageWrapper';
import { getAllBlogposts, getBlogpost } from '../../../../shared/client-api/blogpost';
import { createRequestHandler, getRequestHandler } from '../../../../shared/client-api/request-handler';
import { useLoaderData, useParams } from 'react-router-dom';
import { Blogpost } from '../../../../shared/types/blogpost';
import { AxiosRequestConfig } from 'axios';
import BlogPostView from '../components/blog-post-view/BlogPostView';

export async function blogPostLoader({ params }) {
  const { id } = params;

  if (!getRequestHandler()) {
    createRequestHandler(
      async (config: AxiosRequestConfig): Promise<AxiosRequestConfig> => {
        return config;
      },
    );
  }

  const blogPost = await getBlogpost(getRequestHandler(), params.id)
  
  return { blogPost: blogPost };
}

const BlogPost = (): JSX.Element => {
  const { id } = useParams();
  const { blogPost } = useLoaderData() as {blogPost: Blogpost};
  

  return (
    <PageWrapper title="Blog post">
      <BlogPostView blogPost={blogPost} />
    </PageWrapper>
  );
}

export default BlogPost;