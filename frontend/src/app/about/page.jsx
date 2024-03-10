import Image from "next/image";
import photo from "../../../public/photo.jpg"


const page = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-8 py-8">
        <div className="flex flex-col space-y-4">
          <Image
            src={photo}
            alt="HackHive Team"
            className="rounded-lg items-center shadow-md w-70  h-89"
          />
        </div>
        
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-white">About HackHive</h2>
          <p className="text-white-700 leading-loose">
            HackHive is a passionate community of tech enthusiasts at Swami Rama Himalayan University dedicated to fostering innovation, collaboration, and skill development in the ever-evolving world of technology. We welcome individuals of all experience levels, from curious beginners to seasoned developers, to join us on our journey of exploration and learning.
          </p>
          <ul className="list-disc pl-4 text-white-700">
            <li>Provide a platform for members to learn, share knowledge, and collaborate on exciting technical projects.</li>
            <li>Organize workshops, hackathons, and other events to equip members with the latest skills and technologies.</li>
            <li>Foster a supportive and inclusive environment where everyone feels comfortable asking questions, experimenting, and pushing their boundaries.</li>
            <li>Connect members with industry professionals and mentors to gain valuable insights and guidance.</li>
          </ul>
          <a
            href="https://srhu.edu.in"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            More about SRHU!
            <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </a>
        </div>
      </div>


    </>
  );
};

export default page;