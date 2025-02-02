import { Star } from "lucide-react";
import Image from "next/image";

const imageUrls = [
  "https://qpdwualqgmqaxfgoapyc.supabase.co/storage/v1/object/public/appboilerplate/landingpage/shizai.jpeg?t=2024-09-27T11%3A19%3A21.728Z",
  "https://qpdwualqgmqaxfgoapyc.supabase.co/storage/v1/object/public/appboilerplate/landingpage/malte_herberg.jpeg?t=2024-09-27T11%3A19%3A06.850Z",
  "https://qpdwualqgmqaxfgoapyc.supabase.co/storage/v1/object/public/appboilerplate/landingpage/andrei.jpg?t=2024-09-27T11%3A24%3A44.921Z",
  "https://qpdwualqgmqaxfgoapyc.supabase.co/storage/v1/object/public/appboilerplate/landingpage/miguel.png?t=2024-09-27T11%3A28%3A15.468Z",
];

const Hero = () => {
  return (
    <section className="relative gap-10 md:min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="flex flex-col justify-center px-4 sm:px-6 lg:px-8 xl:px-16 max-w-2xl lg:max-w-none mx-auto">
        <div className="lg:max-w-xl pt-20 lg:pt-0  text-center md:text-start">
          <div className="flex sm:hidden flex-col items-center justify-center gap-2 align-middle md:flex-row md:items-start mb-2">
            <div className="z-10 flex -space-x-2 ">
              {imageUrls.map((url, index) => (
                <Image
                  key={index}
                  className="size-8 rounded-full border-2 border-white dark:border-gray-800 object-cover"
                  src={url}
                  width={60}
                  height={60}
                  alt={`Avatar ${index + 1}`}
                />
              ))}
            </div>
            <div className="flex  gap-2  items-center ">
              <div className="flex gap-1">
                <Star className="h-4 w-4 fill-orange-400 text-orange-400" />
                <Star className="h-4 w-4 fill-orange-400 text-orange-400" />
                <Star className="h-4 w-4 fill-orange-400 text-orange-400" />
                <Star className="h-4 w-4 fill-orange-400 text-orange-400" />
                <Star className="h-4 w-4 fill-orange-400 text-orange-400" />
              </div>
              <div className="font-semibold text-sm">127+ Happy Clients</div>
            </div>
          </div>

          <h1 className="text-3xl leading-snug  sm:text-4xl sm:leading-snug md:text-5xl  font-bold tracking-tight md:leading-snug text-gray-900 mb-4">
            Authentic Design for a Better User Experience
          </h1>
          <p className="text-lg text-gray-600 mb-10 lg:mb-12 max-w-lg">
            We are a software company facilitating businesses to establish an
            online presence and thrive.
          </p>
          <div className="flex flex-col items-center md:flex-row gap-4">
            <button className="px-6 w-full h-fit max-w-48 mx-auto md:mx-0 py-3 border border-[#21242a] rounded-lg   text-lg font-semibold leading-6 text-center whitespace-nowrap transition-colors duration-200 ease-in bg-[#21242a] text-white">
              Contact Us
            </button>

            <div className="hidden sm:flex flex-col items-center justify-center gap-2 align-middle flex-wrap md:flex-row md:items-start">
              <div className="z-10 flex  -space-x-4 rtl:space-x-reverse">
                {imageUrls.map((url, index) => (
                  <Image
                    key={index}
                    className="h-12 w-12 rounded-full border-2 border-white dark:border-gray-800 object-cover"
                    src={url}
                    width={60}
                    height={60}
                    alt={`Avatar ${index + 1}`}
                  />
                ))}
              </div>
              <div className="flex flex-col  gap-1 items-center md:items-start">
                <div className="font-semibold text-sm">127+ Happy Clients</div>
                <div className="flex gap-1">
                  <Star className="h-4 w-4 fill-orange-400 text-orange-400" />
                  <Star className="h-4 w-4 fill-orange-400 text-orange-400" />
                  <Star className="h-4 w-4 fill-orange-400 text-orange-400" />
                  <Star className="h-4 w-4 fill-orange-400 text-orange-400" />
                  <Star className="h-4 w-4 fill-orange-400 text-orange-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="block relative min-h-screen">
        <img
          src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=240"
          alt="Modern office space with wooden panels and built-in shelving"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </section>
  );
};
export default Hero;
