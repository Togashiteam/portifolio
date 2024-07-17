import Link from "next/link";

export default function Dev() {
  return (
    <>
      <Link href={"../"}>Home</Link>
      <br />
      <h1>Dev</h1>
      <br />
      <ul>
        <li>
          <Link href="dev/fonts">Fonts</Link>
        </li>
      </ul>
    </>
  );
}
