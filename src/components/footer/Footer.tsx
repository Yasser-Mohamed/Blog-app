import { Container } from "@chakra-ui/react";
import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <Container className="relative" maxW={"container.xl"}>
      <footer className="m-4 flex gap-4 flex-col md:flex-row justify-center">
        <div className="date order-2 text-center">
          <p>
            Copyright &copy; {year} page by{" "}
            <a
              className="text-green-400 font-bold hover:shadow-green-200 hover:shadow-lg"
              href="https://yasser-mohamed.github.io/My-Web/"
            >
              Yasser-Mohamed
            </a>
          </p>
        </div>
        <div className="links order-1 md:order-2 ">
          <ul className="flex gap-4 md:flex-row flex-col text-center">
            <li>Twitter</li>
            <li>Linkedin</li>
            <li>Email</li>
            <li>RSS feed</li>
            <li>Add to feedly</li>
          </ul>
        </div>
      </footer>
    </Container>
  );
}
