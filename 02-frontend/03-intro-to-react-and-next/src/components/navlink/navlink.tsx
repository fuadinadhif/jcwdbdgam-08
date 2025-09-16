import Link from "next/link";

export function Navlink(props: { linkHref: string; linkContent: string }) {
  console.log(props);

  return (
    <li style={{ border: "1px solid red" }}>
      <Link href={props.linkHref}>{props.linkContent}</Link>
    </li>
  );
}
