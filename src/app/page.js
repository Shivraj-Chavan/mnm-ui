import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen" >
      <Image src="/logo.png" alt="logo" height="100" width='300' />
      <h1 className="text-4xl font-bold py-5 text-orange-500 text-center" >Registration in Progress...</h1>
      <Link className="bg-green-700 p-2 px-4 rounded-lg text-white" href="/contactus" >Click here to Contact Us</Link>
    </div>
  );
}
