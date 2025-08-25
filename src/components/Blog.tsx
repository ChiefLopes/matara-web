import mtthumb from "@/assets/svg/mtthumb.svg";
import jthumb from "@/assets/svg/jthumb.svg";
import lthumb from "@/assets/svg/lthumb.svg";
import Image from "next/image";

function Blog() {
  const blogData = [
    {
      img: mtthumb,
      tag: "Blog",
      title: "Introducing Matara",
      desc: "Matara is the leader of the future where its followers...",
    },
    {
      img: lthumb,
      tag: "Announcement",
      title: "Introducing Matara",
      desc: "Matara is the leader of the future where its followers.",
    },
    {
      img: jthumb,
      tag: "Blog",
      title: "Introducing Matara",
      desc: "Matara is the leader of the future where its followers.",
    },
  ];

  return (
    <div className="bg-primary flex flex-col items-center justify-center mt-[40px] p-[50px_20px] lg:p-[50px]">
      <p className="font-montserrat font-[600] text-[30px] lg:text-[52px] text-white">
        Blog
      </p>
      <p className="font-montserrat font-[400] text-[18px] lg:text-[24px] text-white text-center ">
        Stay updated with the latest news and articles on purpose-driven{" "}
        <br className="hidden lg:block" /> living, blockchain technology, and
        community empowerment.
      </p>

      <div className="mt-[40px] grid min-h-[380px] md:grid-cols-3 gap-[40px] text-white w-full lg:w-[75%]">
        {blogData.map((item, i) => (
          <div
            key={i}
            className="bg-[#D9D9D90A] bcard p-[15px] hover:shadow-[0_0_20px_4px_rgba(255,0,128,0.4)] rounded-[10px] transition">
            <div className="h-[250px] overflow-hidden w-full border rounded-[10px]">
              <Image
                src={item.img}
                alt={item.title}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-[20px] space-y-[8px]">
              <p className="text-secondary font-inter text-[16px]">
                {item.tag}
              </p>
              <p className="text-white font-montserrat font-[600] text-[20px]">
                {item.title}
              </p>
              <p className="text-[#DFDBDB] font-montserrat font-[400] text-[16px] leading-[21px]">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
