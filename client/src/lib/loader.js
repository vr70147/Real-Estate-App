import { defer } from 'react-router-dom';
import apiReq from '../lib/apiReq.js';

export const singlePageLoader = async ({ request, params }) => {
  const res = await apiReq('/posts/' + params.id);
  return res.data;
};

export const listPageLoader = async ({ request, params }) => {
  const query = request.url.split('?')[1];
  const postPromise = apiReq('/posts?' + query);
  return defer({
    postResponse: postPromise,
  });
};
