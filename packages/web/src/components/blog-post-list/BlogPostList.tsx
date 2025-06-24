import React, { useState } from 'react';
import BlogPostItem from './blog-post-item/BlogPostItem';
import styles from './BlogPostList.module.scss';
import { Blogpost } from '../../../../../shared/types/blogpost';

interface BlogPostListProps {
  blogPosts: Blogpost[];
}

const BlogPostList = (props: BlogPostListProps): JSX.Element => {
  const [allBlogPosts] = useState<Blogpost[]>(props?.blogPosts || []);

  return (
    <div className={styles.post}>
      <ul className={styles["list"]}>
        {allBlogPosts.map((blogPost) => (
          <li key={blogPost.blogpostId}><BlogPostItem blogPost={blogPost} /></li>
        ))}
      </ul>
    </div>
  );
}

export default BlogPostList;
