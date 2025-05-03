import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main className="flex-grow flex flex-col justify-center items-center text-center">
        {/* <p className="text-md font-bold py-5 text-orange-500">We’re working hard to bring you something amazing</p> */}
        <h2 className="text-2xl font-bold py-5 text-orange-500">Launching on <span className="text-3xl text-blue-700" >12 july 2025</span> Stay tuned!</h2>
        {/* <Image src="/logo.png" alt="logo" height={120} width={280} /> */}
        <h1 className="text-2xl font-bold py-5 text-orange-500">
          Registration in Progress...
        </h1>
        <Link
          className="bg-blue-600 p-3 px-6 rounded-lg text-white text-lg hover:bg-blue-800 transition"
          href="/contactus"
        >
         Click here to Inquire 
        </Link>
        <Link
          className="bg-green-700 mt-7 p-3 px-6 rounded-lg text-white text-lg hover:bg-green-800 transition"
          href="/register"
        >
         Click here to register
        </Link>
      </main>
    </div>
  );
}
