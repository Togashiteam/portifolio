import Link from "next/link";

export default function Style() {
  return (
    <>
      <Link href={"../"}>Home</Link>
      <br />

      <h1>Style</h1>
      <br />
      <ul>
        <li>
          <Link href="style/border">Border Style CSS</Link>
        </li>
      </ul>
    </>
  );
}
