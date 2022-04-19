function index({ product }) {
  return (
    <div key={product.key}>
      <h1>Title: {product.name}</h1>
      <p>Price: {product.price}</p>
    </div>
  );
}

export default index;

// This function gets called at build time
export async function getStaticProps(context) {
  // Call an external API endpoint to get posts
  const res = await fetch(
    `http://localhost:5000/products/${context.params.id}`
  );
  const product = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      product,
    },
  };
}

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch("http://localhost:5000/products");
  const posts = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}
