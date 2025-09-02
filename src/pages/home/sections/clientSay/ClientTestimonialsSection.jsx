import React from "react";
import Button from "@/components/ui/button";
import rightPoint from "@/assets/rightPoint.png";
import shape_1 from "@/assets/shape_1.png";
import shape_2 from "@/assets/shape_2.png";
import shape_3 from "@/assets/shape_3.png";
import blog_1 from "@/assets/blog1.png";
import blog_2 from "@/assets/blog2.png";
import blog_3 from "@/assets/blog3.png";
const ClientTestimonialsSection = () => {
  const blogPosts = [
    {
      image: blog_1,
      date: "Jul 10, 2024",
      readTime: "3 Min Read",
      title: "Enrich Your Mind Envision Your Future Education for Success",
      buttonIcon: rightPoint,
    },
    {
      image: blog_2,
      date: "Jul 10, 2024",
      readTime: "3 Min Read",
      title: "Exploring The Green Spaces Of Realar Residence Harmony with",
      buttonIcon: rightPoint,
    },
    {
      image: blog_3,
      date: "Jul 09, 2024",
      readTime: "3 Min Read",
      title: "Living sustainability: A day in the life atrealar residence",
      buttonIcon: rightPoint,
    },
  ];

  const decorativeShapes = [
    {
      top: "top-[714px]",
      left: "left-[38px]",
      width: "w-[35px]",
      height: "h-[47px]",
      image: shape_3,
    },
    {
      top: "top-[826px]",
      left: "left-[38px]",
      width: "w-14",
      height: "h-[78px]",
      image: shape_2,
    },
    {
      top: "top-[815px]",
      left: "left-[134px]",
      width: "w-[15px]",
      height: "h-[21px]",
      image: shape_1,
    },
  ];

  return (
    <section className="relative h-[952px] w-full overflow-hidden bg-[#e9f6f9]">
      {/* Decorative shapes */}
      {decorativeShapes.map((shape, index) => (
        <div
          key={`shape-${index}`}
          className={`absolute ${shape.top} ${shape.left} ${shape.width} ${shape.height} bg-cover bg-[50%_50%]`}
          style={{ backgroundImage: `url(${shape.image})` }}
        />
      ))}

      {/* Header section */}
      <header className="absolute top-[119px] left-[300px] h-[100px] w-[641px]">
        <div className="font-montez absolute top-0 left-0 h-10 w-[272px] text-[40px] leading-10 tracking-[0] whitespace-nowrap text-[#113d48]">
          About Us Restaurant
        </div>
        <h2 className="font-manrope absolute top-[35px] left-0 h-[65px] w-[641px] text-5xl leading-[63.7px] font-bold tracking-[0] whitespace-nowrap text-[#113d48]">
          News &amp; Articles From Tourm
        </h2>
      </header>

      {/* See More Articles button */}
      <div className="absolute top-[166px] left-[1402px]">
        <Button
          variant="outline"
          className="h-14 w-[218px] rounded-[48px] border-[#113d48] text-[#113d48] transition-colors hover:bg-[#113d48]"
        >
          <span className="text-base font-normal">See More Articles</span>
          <img className="ml-2 h-6 w-6" alt="Arrow right" src={rightPoint} />
        </Button>
      </div>

      {/* Blog posts grid */}
      <div className="absolute top-[244px] left-72 w-[1344px]">
        <div className="grid grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={`blog-post-${index}`}
              className="w-[424px] border-none bg-transparent shadow-none"
            >
              <div className="p-3">
                {/* Blog post image */}
                <div
                  className="mb-8 h-[350px] w-full rounded-2xl bg-cover bg-center"
                  style={{ backgroundImage: `url(${post.image})` }}
                />

                {/* Date and read time */}
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex items-center">
                    <span className="text-sm leading-6 font-normal tracking-[0] text-[#6e7070]">
                      {post.date}
                    </span>
                    <div className="ml-4 h-2.5 w-px bg-[#999999]" />
                  </div>
                  <span className="text-sm leading-6 font-normal tracking-[0] text-[#6e7070]">
                    {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mb-6 [font-family:'Manrope',Helvetica] text-2xl leading-[34px] font-semibold tracking-[0] text-[#113d48]">
                  {post.title}
                </h3>

                {/* Read More button */}
                <Button
                  variant="outline"
                  className="h-12 w-[158px] rounded-[48px] border-[#113D48] text-[#113D48] transition-colors hover:bg-[#113D48]"
                >
                  <span className="text-base font-normal">Read More</span>
                  <img
                    className="ml-2 h-4 w-4"
                    alt="Arrow right"
                    src={post.buttonIcon}
                  />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ClientTestimonialsSection;
