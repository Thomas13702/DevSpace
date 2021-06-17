import Link from "next/link";

export default function CategoryLabel({ children }) {
  const colourKey = {
    JavaScript: "yellow",
    CSS: "blue",
    Python: "green",
    PHP: "purple",
    Ruby: "red",
  };

  return (
    <div
      className={`px-2 py-1 bg-${colourKey[children]}-600 text-gray-100 font-bold rounded`}
    >
      <Link href={`/blog/catgeory/${children.toLowerCase()}`}>{children}</Link>
    </div>
  );
}
