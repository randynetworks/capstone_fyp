import Passions from '../views/pages/passions';
import PostInfo from '../views/pages/post-info';
import ListInfo from '../views/pages/list-info';
import DetailInfo from '../views/pages/detail-info';
import Comments from '../views/pages/comments';
import About from '../views/pages/about';

const routes = {
  '/': Passions, // default page
  '/passions': Passions,
  '/post-info': PostInfo,
  '/list-info/:id': ListInfo,
  '/detail-info/:id': DetailInfo,
  '/comments/:id': Comments,
  '/about': About,
};

export default routes;
