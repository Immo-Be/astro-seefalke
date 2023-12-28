import axios from 'axios';
import type {Post} from '../types/blog';

export const fetchBlogPosts = async () =>
  await axios.get<Array<Post>>('https://seefalke.info/wp-json/wp/v2/posts');
