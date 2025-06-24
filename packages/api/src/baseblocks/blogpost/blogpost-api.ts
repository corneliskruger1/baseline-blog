import { Response } from 'express';
import { blogpostMapper } from './blogpost';
import { isAdmin } from '../../middleware/is-admin';
import { RequestContext } from '../../util/request-context.type';
import { Blogpost } from '@baseline/types/blogpost';
import { getErrorMessage } from '../../util/error-message';
import createApp from '../../util/express-app';
import createAuthenticatedHandler from '../../util/create-authenticated-handler';
import { blogpostService } from './blogpost.service';

const app = createApp();
// app.use(isAdmin); // All private endpoints require the user to be an admin
export const handler = createAuthenticatedHandler(app);

app.post('/blogpost', [
  isAdmin,
  async (req: RequestContext, res: Response) => {
    try {
      const { title, subTitle, body, createdAt, category } = req.body as Blogpost;
      const blogpostData: Partial<Blogpost> = {
        title, subTitle, body, createdAt, category,
      };
      const blogpost = await blogpostService.create(blogpostData);
      res.json(blogpostMapper(blogpost));
    } catch (error) {
      const message = getErrorMessage(error);
      console.error(`Failed to create blogpost ${message}`);
      res.status(400).json({ error: 'Failed to create blogpost' });
    }
  },
]);

app.patch('/blogpost', [
  isAdmin,
  async (req: RequestContext, res: Response) => {
    try {
      const { blogpostId, title, subTitle, body, createdAt, category } = req.body as Blogpost;
      const blogpostData: Partial<Blogpost> = {
        blogpostId, title, subTitle, body, createdAt, category
      };
      const blogpost = await blogpostService.update(blogpostData);
      res.json(blogpostMapper(blogpost));
    } catch (error) {
      const message = getErrorMessage(error);
      console.error(`Failed to update blogpost: ${message}`);
      res.status(400).json({
        error: 'Failed to update blogpost',
      });
    }
  },
]);

app.delete('/blogpost/:blogpostId', [
  isAdmin,
  async (req: RequestContext, res: Response) => {
    try {
      const blogpostId = req.params.blogpostId;
      await blogpostService.delete(blogpostId);
      res.status(200);
      res.send();
    } catch (error) {
      const message = getErrorMessage(error);
      console.error(`Failed to delete blogpost: ${message}`);
      res.status(400).json({
        error: 'Failed to delete blogpost',
      });
    }
  },
]);

app.get('/blogpost/list', [
  isAdmin,
  async (req: RequestContext, res: Response) => {
    try {
      const blogposts = await blogpostService.getAll();
      const formattedBlogposts = blogposts.map(blogpostMapper);
      res.json(formattedBlogposts);
    } catch (error) {
      const message = getErrorMessage(error);
      console.error(`Failed to get blogposts: ${message}`);
      res.status(400).json({
        error: 'Failed to get blogposts',
      });
    }
  },
]);

app.get('/blogpost/:blogpostId', [
  isAdmin,
  async (req: RequestContext, res: Response) => {
    try {
      const blogpost = await blogpostService.get(req.params.blogpostId);
      res.json(blogpostMapper(blogpost));
    } catch (error) {
      const message = getErrorMessage(error);
      console.error(`Failed to get blogpost: ${message}`);
      res.status(400).json({
        error: 'Failed to get blogpost',
      });
    }
  },
]);
