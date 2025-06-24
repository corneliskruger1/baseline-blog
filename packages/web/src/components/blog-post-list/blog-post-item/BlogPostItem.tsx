import React from 'react';
import { Link } from 'react-router-dom';
import styles from './BlogPostItem.module.scss';
import { Blogpost } from '../../../../../../shared/types/blogpost';

interface BlogPostProps {
  blogPost: Blogpost;
}

const BlogPostItem = (props: BlogPostProps): JSX.Element => (
  <div className={styles.post}>
    <div className={styles.content}>
      <h3>{props.blogPost.title}</h3>
      <p>
        {props.blogPost.subTitle}
      </p>
      <Link to={`/blogpost/${props.blogPost.blogpostId}`}>More...</Link>
    </div>
    <div className={styles.image}>
      <img src="./placeholder.svg" alt="placeholder" />
    </div>
  </div>
);

export default BlogPostItem;
