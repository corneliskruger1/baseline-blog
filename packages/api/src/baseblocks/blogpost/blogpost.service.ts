import { Blogpost } from '@baseline/types/blogpost';
import { getDynamodbConnection } from '@baselinejs/dynamodb';
import { ServiceObject } from '../../util/service-object';

const dynamoDb = getDynamodbConnection({
  region: `${process.env.API_REGION}`,
});

export const blogpostService = new ServiceObject<Blogpost>({
  dynamoDb: dynamoDb,
  objectName: 'Blogpost',
  table: `${process.env.APP_NAME}-${process.env.NODE_ENV}-blogpost`,
  primaryKey: 'blogpostId',
});
