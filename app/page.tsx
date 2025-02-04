import getPosts from "@/server/actions/get-posts";

export default async function Home() {
  const data = await getPosts();
  console.log(data);

  return (
    <main>
      <h1 className="m-2">{Date.now()}</h1>
      <p
        className="m-3"
        style={{ backgroundColor: "white", color: "black" }}
      ></p>
    </main>
  );
}
