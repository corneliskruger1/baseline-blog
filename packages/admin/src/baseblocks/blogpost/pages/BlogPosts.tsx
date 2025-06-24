import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getRequestHandler } from '@baseline/client-api/request-handler';
import PageContent from '../../../components/page-content/PageContent';
import { Blogpost } from '@baseline/types/blogpost';
import BlogPostList from '../components/blog-post-list/BlogPostList';
import { getAllBlogposts } from '@baseline/client-api/blogpost';

export async function blogPostListLoader() {
  const data = await getAllBlogposts(getRequestHandler());
  
  return {
    blogPosts: data,
  };
}

const BlogPosts = (): JSX.Element => {
  const { blogPosts } = useLoaderData() as { blogPosts: Blogpost[] };

  return (
    <PageContent>
      <BlogPostList blogPosts={blogPosts} />
    </PageContent>
  );
};

export default BlogPosts;
