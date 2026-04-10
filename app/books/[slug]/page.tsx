export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div style={{ padding: "40px", color: "white" }}>
      <h1>Book Page</h1>
      <p>You opened: {params.slug}</p>
    </div>
  );
}