import { TypingText } from "@/components/typing-text";
import Image from "next/image";
export default function Home() {
  return (
    <>
      {/* Landing */}
      <div
        id="#landing"
        className="container grid grid-cols-1 lg:grid-cols-3 gap-5 px-5 mx-auto h-lvh"
      >
        <div className="col-span-2 lg:my-auto px-5 lg:order-1 order-2">
          <TypingText />
          {/* <h1 className="text-xl lg:text-4xl font-medium lg:mb-4">
            👋 Hi, I'm Alvin — a Full Stack Web Developer
          </h1> */}

          <p>
            I'm passionate in building functional, user-friendly applications.
            With experience in React.js, Node.js, and MongoDB/MySQL, I
            specialize in creating full-stack solutions—from mobile apps to
            modern web systems. I enjoy solving real-world problems with clean,
            scalable code. I'm always learning, always building, and always up
            for the next challenge. Let’s create something awesome together.
          </p>
          <p>Welcome to my portfolio — feel free to explore my work!</p>
        </div>
        <div className="place-items-center order-1 content-center">
          <div className="w-full md:w-1/2 lg:w-full mx-auto">
            <Image
              src="/alvinpic.jpg"
              width={400}
              height={650}
              alt="Alvin John Bregana"
              className="pic-shadow w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </>
  );
}
