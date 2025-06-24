import React, { useState } from 'react';
import styles from './BlogPostView.module.scss';
import { Blogpost } from '../../../../../shared/types/blogpost';

interface BlogPostViewProps {
  blogPost: Blogpost;
}

const BlogPostView = (props: BlogPostViewProps): JSX.Element => {
  const [blogPost] = useState<Blogpost>(props?.blogPost);

  return (
    <div className={styles.blog}>
          <div className={styles.content}>
            <h1>{blogPost.title}</h1>
            <h4>{blogPost.subTitle}</h4>
            <p>
            {blogPost.body}
            </p>
          </div>
        </div>
  );
}

export default BlogPostView;
