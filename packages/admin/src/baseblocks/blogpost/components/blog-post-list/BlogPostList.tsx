import React, { useEffect, useState } from 'react';
import styles from './BlogPostList.module.scss';
import { Blogpost } from '@baseline/types/blogpost';
import ConfirmDelete from '../../../../components/confirm-delete/ConfirmDelete';
import { deleteBlogpost } from '@baseline/client-api/blogpost';
import { getRequestHandler } from '@baseline/client-api/request-handler';
import AddBlogPost from '../add-blog-post/AddBlogPost';

interface BlogPostListProps {
  blogPosts: Blogpost[];
}

const BlogPostList = (props: BlogPostListProps): JSX.Element => {
  const [allBlogPosts, setAllBlogPosts] = useState<Blogpost[]>(props?.blogPosts || []);

  const handleDelete = async (blogPostId: string): Promise<void> => {
    await deleteBlogpost(getRequestHandler(), blogPostId);
    setAllBlogPosts((blogPosts) =>
      blogPosts.filter((blogPost) => blogPost.blogpostId !== blogPostId),
    );
  };

  return (
    <div className={styles.userList}>
      <div className={styles.list}>
        <div className={styles.header}>
          <div className={styles.userCount}>
            There are {allBlogPosts?.length} blog posts
          </div>
          <AddBlogPost setAllBlogPosts={setAllBlogPosts} />
        </div>
        {allBlogPosts?.map((blogPost) => (
          <div key={blogPost.title} className={styles.admin}>
            <div className={styles.info}>
              <div className={styles.details}>
                <div className={styles.title}>{blogPost.title}</div>
                <div className={styles.data}>{blogPost.subTitle}</div>
              </div>
            </div>
            <div className={styles.buttons}>
              <ConfirmDelete
                itemName={blogPost.blogpostId}
                deleteFunction={async () => {
                  await handleDelete(blogPost.blogpostId);
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPostList;
