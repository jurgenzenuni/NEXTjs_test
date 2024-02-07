import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <p> Home page</p>
      <Link href="/login">
      <button className="loginbtn"> Login </button>
      </Link>
    </div>
  );
}
