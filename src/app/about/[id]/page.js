const page = ({ params }) => {
  return <a href={`/about/${params.id}/`}>Link to self</a>;
};

export default page;
