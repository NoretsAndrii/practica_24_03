export function fetchData(query) {
  const searchParams = new URLSearchParams({
    client_id: 'xankM5JcWjNdU3aQm9SCaf_qfZApy4ZcN2-HgCA1cGs',
    query: query,
    orientation: 'portrait',
    per_page: 20,
  });
  return fetch(`https://api.unsplash.com/search/photos/?${searchParams}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('error');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      return data;
    })
    .catch(error => console.log('error'));
}
