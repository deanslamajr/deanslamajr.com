import { QueryResolvers } from '../types/about.graphqls';
import { resolver as homeMainResolver } from './home';
import { resolver as postsResolver } from './posts';

const Query: Required<QueryResolvers> = {
  homeQuery: homeMainResolver,
  postsQuery: postsResolver,
};

export default { Query };
