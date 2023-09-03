import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getPostsPage } from "@/API";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Card, CardBody, Heading, Stack, Text } from "@chakra-ui/react";
import {ExternalLinkIcon} from '@chakra-ui/icons'

export default function Posts({posts}: any) {
  return (
    <section>
      <article>
        <header className="font-bold m-4">Recent blog posts</header>
        <div className="container flex flex-col lg:flex-row gap-5">
          <div className="left lg:flex-[1] w-screen lg:w-auto ">
            <div className="w-full">
              <Image
                className="w-screen"
                src="/blog.jpg"
                width={500}
                height={500}
                alt=""
              />
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-[#6941C6] ">sunday, 1 Jun 2023</span>
              <h2 className="text-lg font-bold">UX review presentations </h2>
              <span className="text-green-400">J.K Rowling</span>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus, ullam quos quibusdam nostrum aut neque nobis quis!{" "}
              </p>
              <ul className="flex gap-5">
                <li className="px-4 py-2 rounded-lg bg-sky-100 text-sky-500">
                  Design
                </li>
                <li className="px-4 py-2 rounded-lg bg-fuchsia-100 text-fuchsia-500">
                  Research
                </li>
                <li className="px-4 py-2 rounded-lg bg-indigo-100 text-indigo-500">
                  Presentation
                </li>
              </ul>
            </div>
          </div>
          <div className="right lg:flex-[1]">
            <div className="flex flex-col gap-5">
              <div className="flex md:flex-row flex-col gap-2">
                <div className="md:flex-[1] w-full">
                  <Image
                    className="w-full"
                    src="/blog.jpg"
                    width={500}
                    height={500}
                    alt=""
                  />
                </div>
                <div className="flex md:flex-[1] flex-col gap-4">
                  <span className="text-[#6941C6] ">sunday, 1 Jun 2023</span>
                  <h2 className="text-lg font-bold">UX review presentations</h2>
                  <span className="text-green-400">J.K Rowling</span>
                  <p className="text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <ul className="flex gap-5">
                    <li className="px-4 py-2 rounded-lg bg-sky-100 text-sky-500">
                      Design
                    </li>
                    <li className="px-4 py-2 rounded-lg bg-fuchsia-100 text-fuchsia-500">
                      Research
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex md:flex-row flex-col gap-2">
                <div className="md:flex-[1] w-full">
                  <Image
                    className="w-full"
                    src="/blog.jpg"
                    width={500}
                    height={500}
                    alt=""
                  />
                </div>
                <div className="flex md:flex-[1] flex-col gap-4">
                  <span className="text-[#6941C6] ">sunday, 1 Jun 2023</span>
                  <h2 className="text-lg font-bold">UX review presentations</h2>
                  <span className="text-green-400">J.K Rowling</span>
                  <p className="text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <ul className="flex gap-5">
                    <li className="px-4 py-2 rounded-lg bg-sky-100 text-sky-500">
                      Design
                    </li>
                    <li className="px-4 py-2 rounded-lg bg-fuchsia-100 text-fuchsia-500">
                      Research
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 flex lg:flex-row flex-col gap-5">
          <div className="w-full lg:flex-[1]">
            <Image
              className="w-screen"
              src="/blog.jpg"
              width={500}
              height={500}
              alt=""
            />
          </div>
          <div className="lg:flex-[1]">
            <div className="flex md:flex-[1] flex-col gap-4">
              <span className="text-[#6941C6] ">sunday, 1 Jun 2023</span>
              <h2 className="text-lg font-bold">UX review presentations</h2>
              <span className="text-green-400">J.K Rowling</span>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <ul className="flex gap-5">
                <li className="px-4 py-2 rounded-lg bg-sky-100 text-sky-500">
                  Design
                </li>
                <li className="px-4 py-2 rounded-lg bg-fuchsia-100 text-fuchsia-500">
                  Research
                </li>
              </ul>
            </div>
          </div>
        </div>
      </article>
      <article className="">
        <header>
          <h2 className="text-lg font-bold m-8">All blog posts</h2>
        </header>
        <div className="flex flex-wrap">
          {posts.map((post: any) => (
            <Card className="m-2" key={post.id} maxW="sm">
              <CardBody>
                <Image
                  className=""
                  src="/blog.jpg"
                  width={500}
                  height={500}
                  alt=""
                />
                <Stack mt="6" spacing="3">
                  <Text className="text-[#6941C6]">sunday, 1 Jun 2023</Text>
                  <Link className="flex justify-between items-center" href={`/${post.id}`}>
                    <Heading size="md">{post.title}</Heading>
                    <ExternalLinkIcon/>
                  </Link>
                  <span className="text-green-400">J.K Rowling</span>
                  <Text className="text-gray-400">{post.body}</Text>
                  <ul className="flex gap-5">
                    <li className="px-4 py-2 rounded-lg bg-sky-100 text-sky-500">
                      Design
                    </li>
                    <li className="px-4 py-2 rounded-lg bg-fuchsia-100 text-fuchsia-500">
                      Research
                    </li>
                  </ul>
                </Stack>
              </CardBody>
            </Card>
          ))}
        </div>
      </article>
    </section>
  );
}