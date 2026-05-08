import Image from "next/image";

export default function Blog() {
  const posts = [
    {
      id: 1,
      image: "/blog1.jpg", 
      date: "April 7, 2023",
      title: "Traveling on a Budget",
      description: "Practical advice for travelers who want to see the world without breaking the bank."
    },
    {
      id: 2,
      image: "/blog2.jpg", 
      date: "April 7, 2023",
      title: "Explore the Wonders",
      description: "Must-see destinations and experiences, including wildlife and cultural experiences."
    }
    ,
    {
      id: 3,
      image: "/blog3.jpg", 
      date: "April 7, 2025",
      title: "Must-See Landmarks",
      description: "Iconic landmarks that make Europe one of the world's most popular travel destinations."
    }
    ,
    {
      id: 4,
      image: "/blog4.jpg", 
      date: "April 7, 2025",
      title: "Explore the Wonders",
      description: "Must-see destinations and experiences, including wildlife and cultural experiences."
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] w-full overflow-hidden">
        <Image 
          src="/blog.jpg" 
          alt="blog hero" 
          fill 
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-5xl md:text-6xl font-black uppercase tracking-wide">Our Blog</h1>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {posts.map((post) => (
            <div key={post.id} className="flex flex-col group cursor-pointer">
              
              {/* Image Container */}
              <div className="relative h-[400px] w-full mb-6 overflow-hidden rounded-[25px]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content Container */}
              <div className="space-y-4 text-left">
                {/* Date Badge */}
                <div className="inline-block bg-[#1a2b49] text-white px-4 py-1.5 rounded-md text-[13px] font-bold">
                  {post.date}
                </div>

                {/* Title */}
                <h2 className="text-3xl font-black text-gray-900 leading-tight">
                  {post.title}
                </h2>

                {/* Description */}
                <p className="text-gray-500 text-lg leading-relaxed">
                  {post.description}
                </p>

                {/* Read More Button */}
                <button className="mt-4 bg-[#d97d4a] hover:bg-black text-white px-10 py-4 rounded-xl font-bold transition-all duration-300">
                  Read More
                </button>
              </div>

            </div>
          ))}
        </div>
      </section>
    </main>
  );
}