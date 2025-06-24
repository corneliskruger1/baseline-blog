import React, { useEffect } from 'react';
import BlogPostList from '../components/blog-post-list/BlogPostList';
import PageWrapper from '../components/page-wrapper/PageWrapper';
import { getAllBlogposts } from '../../../../shared/client-api/blogpost';
import { createRequestHandler, getRequestHandler } from '../../../../shared/client-api/request-handler';
import { useLoaderData } from 'react-router-dom';
import { Blogpost } from '../../../../shared/types/blogpost';
import { AxiosRequestConfig } from 'axios';

export async function blogPostListLoader({request}) {
  if (!getRequestHandler()) {
    createRequestHandler(
      async (config: AxiosRequestConfig): Promise<AxiosRequestConfig> => {
        return config;
      },
    );
  }

  const blogPosts = await getAllBlogposts(getRequestHandler());

  return {
    blogPosts: blogPosts,
  };
}

const Home = (): JSX.Element => {
  const { blogPosts } = useLoaderData() as { blogPosts: Blogpost[] };

  return (
    <PageWrapper title="Home">
      <BlogPostList blogPosts={blogPosts} />
    </PageWrapper>
  );
}

export default Home;