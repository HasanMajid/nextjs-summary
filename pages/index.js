import { Fragment } from "react";
import Link from "next/link";

export default function Home() {
  return (
    <Fragment>
      <h1>News Page</h1>
      <ul>
        <li>
          <Link href="/news"> News 1</Link>
        </li>
        <li>News 2</li>
        <li>News 3</li>
      </ul>
    </Fragment>
  );
}
