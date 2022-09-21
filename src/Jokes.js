// const useFetch = require("./useFetch")
import useFetch from './useFetch';

const Jokes = () => {
  const url = "http://ahookheradmand.com/wp-json/wp/v2/posts";
  const { data, loading } = useFetch(url);

  if (loading) return (
      <div>Loading...</div>
  )

  
  return (
    <>
    <div>
      {data && data.map((data, idx) => (
                      <div key= {idx}>{data.title.rendered}</div>
               ))}
    </div>
    </>
  );
};

export default Jokes;