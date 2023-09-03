"use client";

import React, { useState } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { axiosOne } from "@/API";
import { Box, Container, Flex, Heading, Text } from "@chakra-ui/layout";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  IconButton,
} from "@chakra-ui/react";
import { BiLike, BiChat, BiShare } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import CommentsSection from "@/components/comments/Comments";
import Footer from "@/components/footer/Footer";

type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function getData(id: PostType) {
  const res = await axiosOne.get(`/posts/${id}`);
  if (!res) {
    return notFound();
  }

  return res.data;
}


const BlogPost = async ({ params }: any) => {
  const [comments, setComments] = useState([])

  const data = await getData(params.id);
  return (
    <Container className="flex justify-center items-center flex-col" maxW={"container.xl"}>
      <Card className="" maxW="md">
        <CardHeader>
          <Flex letterSpacing="4">
            <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
              <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
              <Box>
                <Heading size="sm">{data.title}</Heading>
                <Text>Creator, Chakra UI</Text>
              </Box>
            </Flex>
            <IconButton
              variant="ghost"
              colorScheme="gray"
              aria-label="See menu"
              icon={<BsThreeDotsVertical />}
            />
          </Flex>
        </CardHeader>
        <CardBody>
          <Text>{data.body}</Text>
        </CardBody>
        <Image
          objectFit="cover"
          src="/blog.jpg"
          width={500}
          height={500}
          alt="Chakra UI"
        />

        <CardFooter
          justify="space-between"
          flexWrap="wrap"
          sx={{
            "& > button": {
              minW: "136px",
            },
          }}
        >
          <Button flex="1" variant="ghost" leftIcon={<BiLike />}>
            Like
          </Button>
          <Button flex="1" variant="ghost" leftIcon={<BiChat />}>
            Comment
          </Button>
          <Button flex="1" variant="ghost" leftIcon={<BiShare />}>
            Share
          </Button>
        </CardFooter>
      </Card>
      <CommentsSection postId={data.id} />
      <div className="flex justify-center gap-5 flex-col text-center">
        <div className="text-[#6941C6]">Newsletter</div>
        <h1 className="text-2xl">Stories and interviews</h1>
        <p className="text-gray-400">
        Subscribe to learn about new product features, the latest in technology, solutions, and updates.
        </p>
        <div className="flex justify-center gap-4">
          <input placeholder="Email" className="outline-none px-4 py-2 rounded-md" type="email" name="" id="" />
          <button className="px-4 py-2 bg-[#6941C6] rounded-md ">Subscribe</button>
        </div>
        <p className='text-gray-400'>We Care about your data in our <span className="underline">privacy policy</span></p>
      </div>
          <Footer/>
    </Container>
  );
};

export default BlogPost;
