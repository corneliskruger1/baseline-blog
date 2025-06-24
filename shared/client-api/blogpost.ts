import { Blogpost } from '@baseline/types/blogpost';
import { RequestHandler } from './request-handler';

export const getBlogpost = async (requestHandler: RequestHandler, blogpostId: string): Promise<Blogpost> => {
  const response = await requestHandler.request<Blogpost>({
    method: 'GET',
    url: `blogpost/${blogpostId}`,
    hasAuthentication: true,
  });
  if ('data' in response) {
    return response.data;
  }
  throw response;
};

export const getAllBlogposts = async (requestHandler: RequestHandler): Promise<Blogpost[]> => {
  const response = await requestHandler.request<Blogpost[]>({
    method: 'GET',
    url: `blogpost/list`,
    hasAuthentication: true,
  });
  if ('data' in response) {
    return response.data;
  }
  throw response;
};

export const deleteBlogpost = async (requestHandler: RequestHandler, blogpostId: string): Promise<boolean> => {
  const response = await requestHandler.request<boolean>({
    method: 'DELETE',
    url: `blogpost/${blogpostId}`,
    hasAuthentication: true,
  });
  if ('data' in response) {
    return response.data;
  }
  throw response;
};

export const createBlogpost = async (
  requestHandler: RequestHandler,
  blogpost: Partial<Blogpost>,
): Promise<Blogpost> => {
  const response = await requestHandler.request<Blogpost>({
    method: 'POST',
    url: `blogpost`,
    hasAuthentication: true,
    data: blogpost,
  });
  if ('data' in response) {
    return response.data;
  }
  throw response;
};

export const updateBlogpost = async (
  requestHandler: RequestHandler,
  blogpost: Partial<Blogpost>,
): Promise<Blogpost> => {
  const response = await requestHandler.request<Blogpost>({
    method: 'PATCH',
    url: `blogpost`,
    hasAuthentication: true,
    data: blogpost,
  });
  if ('data' in response) {
    return response.data;
  }
  throw response;
};
