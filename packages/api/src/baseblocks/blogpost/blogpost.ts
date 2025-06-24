import { Blogpost } from '@baseline/types/blogpost';

export const blogpostMapper = (data: Blogpost): Blogpost => {
  const blogpost: Blogpost = {
    blogpostId: data?.blogpostId,
    title: data?.title,
    subTitle: data?.subTitle,
    body: data?.body,
    createdAt: data?.createdAt,
    category: data?.category,
  };
  return blogpost;
};
