import fetcher from '@/helpers/fetcher';

export function fetchPosts() {
  return fetcher({
    url: '/api/tiles',
    method: 'get',
  });
}
