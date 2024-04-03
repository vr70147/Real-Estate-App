import apiReq from '../lib/apiReq.js';

export const singlePageLoader = async ({ request, params }) => {
  const res = await apiReq('/posts/' + params.id);
  return res.data;
};
