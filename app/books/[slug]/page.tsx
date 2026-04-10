export default function BookPage({ params }: any) {
  return (
    <div>
      <h1>{params.slug}</h1>
    </div>
  );
}