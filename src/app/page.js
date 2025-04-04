import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main className="flex-grow flex flex-col justify-center items-center text-center">
        {/* <Image src="/logo.png" alt="logo" height={120} width={280} /> */}
        <h1 className="text-4xl font-bold py-5 text-orange-500">
          Registration in Progress...
        </h1>
        <Link
          className="bg-green-700 p-3 px-6 rounded-lg text-white text-lg hover:bg-green-800 transition"
          href="/contactus"
        >
          Click here to Contact Us
        </Link>
      </main>
    </div>
  );
}
