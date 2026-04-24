import Image from "next/image";
import LeftSideBar from "@/components/homepage/LeftSideBar";
import RightSideBar from "@/components/homepage/RightSideBar";

const catagory = async () => {
  const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
  const data = await res.json();
  return data.data;
};

export default async function Home() {
  const data = await catagory();
  return (
    <div className="container mx-auto grid grid-cols-12 gap-4">
      <div className="col-span-3">
         <LeftSideBar data={data} activeId={null} />
      </div>

      <div className="border col-span-6">
        <h2>News</h2>
      </div>

      <div className="col-span-3">
        <div>
          <RightSideBar></RightSideBar>
        </div>
      </div>

    </div>
  );
}
