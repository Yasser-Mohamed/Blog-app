import { Container } from "@chakra-ui/react";
import React from "react";
import Menu from "../drawerMenu/drawer";
import Link from "next/link";
import Toggle from "../toggleMode/Toggle";

export default function Navbar() {
  return (
    <Container
      maxW="container.xl"
      className="flex justify-between items-center py-5"
    >
      <div className="logo">
        <Link href="/">
          <h1 className="font-bold text-lg">Yascoblog</h1>
        </Link>
      </div>
      <div className="pc">
        <div className="links hidden md:flex items-center gap-[20px] ">
        <Link href="/">
          <span className="py-2 border-b-2 border-inherit">Blog</span>
        </Link>
          <span className="py-2 hover:border-b-2 border-inherit">Projects</span>
          <span className="py-2 hover:border-b-2 border-inherit">About</span>
          <span className="py-2 hover:border-b-2 border-inherit">
            Newsletter
          </span>
          <div className="flex items-center justify-center gap-2">
            <Link
              className="py-2 px-4 bg-[#6941C6] text-white rounded-lg "
              href="/newBlog"
            >
              New Blog
            </Link>
            <Toggle />
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <Menu />
      </div>
    </Container>
  );
}
