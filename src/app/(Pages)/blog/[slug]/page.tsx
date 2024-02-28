const Page = ({ params }: { params: { slug: string } }) => {
  return (
    <div>
      <h1>`This is a particular Page ${params.slug} `</h1>
    </div>
  );
};
export default Page;
