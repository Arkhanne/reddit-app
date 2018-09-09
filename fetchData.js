export default async function fetchData(url) {
  const result = await fetch(url);
  const response = await result.json();
  return response;
}