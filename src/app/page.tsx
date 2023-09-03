"use client";
import styles from "./home.module.css";
import { Container } from "@chakra-ui/react";
import Posts from "@/components/posts/page";
import Footer from "@/components/footer/Footer";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getPostsPage } from "@/API";
import Loader from "@/components/loader/Loader";
import { notFound } from "next/navigation";

export default function Home() {
  const [page, setPage] = useState(1);
  const {
    isLoading,
    error,
    data: posts,
  } = useQuery(["/posts", page], () => getPostsPage(page), {
    keepPreviousData: true,
  });
  if (isLoading) return <Loader/>

    if (error) return notFound()

  const nextPage = () => setPage((prev) => prev + 1);

  const prevPage = () => setPage((prev) => prev - 1);

  return (
    <main className={styles.main}>
      <Container maxW={"container.xl"}>
        <div className="flex w-full justify-center items-center py-5 md:text-[100px] sm:text-[80px] text-[60px] sm:font-extrabold sm:tracking-[10px] md:tracking-[20px] border-t-2 border-b-2 border-inherit">
          THE BLOG
        </div>
        <div className="container">
          <Posts posts={posts} />
        </div>
        <div className="nav">
          <nav className="flex justify-between items-center ">
            <button onClick={prevPage} disabled={page === 1}>
              Prev Page
            </button>
            <button onClick={nextPage}>
              Next Page
            </button>
          </nav>
        </div>
        <Footer />
      </Container>
    </main>
  );
}
