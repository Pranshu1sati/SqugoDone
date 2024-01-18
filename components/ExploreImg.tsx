import Link from "next/link";
interface AppProps {
  img: string;
  name: string;
}
export default function ExploreImg({ img, name }: AppProps) {
  return (
    <Link href="/products" className="group relative block bg-black">
      <img
        alt="Developer"
        src={img}
        className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
      />

      <div className="relative p-4 sm:p-6 lg:p-8">
        <p className="text-sm font-medium uppercase tracking-widest">
          Browse Products
        </p>

        {/* <p className="text-xl font-bold text-white sm:text-2xl">{name}</p> */}

        <div className="mt-32 sm:mt-48 lg:mt-64">
          <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
            <p className="text-sm text-white">{name}</p>
            <span className="mt-3 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
              Shop Now
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}