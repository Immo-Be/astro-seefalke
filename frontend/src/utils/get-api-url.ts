import axios from 'axios';
import type {Post} from '../types/blog';

export const fetchBlogPosts = async () => {
  try {
    const res = await axios.get<Array<Post>>(
      'http://wordpress:80/wp-json/wp/v2/posts'
    );

    if (!res.data || res.status !== 200) {
      throw new Error(`Failed to fetch blog posts ${res.statusText}`);
    }
    return res.data;
  } catch (err) {
    console.log('an error occured', err);
    return [];
  }
};
