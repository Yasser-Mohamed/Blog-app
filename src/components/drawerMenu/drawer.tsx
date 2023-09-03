import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import Toggle from "../toggleMode/Toggle";
import { HamburgerIcon } from "@chakra-ui/icons";

function Menu() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <HamburgerIcon onClick={onOpen}>
        Open
      </HamburgerIcon>
      <Drawer placement={"right"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
        <DrawerCloseButton />
          <DrawerBody className="flex flex-col gap-5 mt-4">
            <span>Blog</span>
            <span>Projects</span>
            <span>About</span>
            <span>Newsletter</span>
            <div className="flex justify-start items-center gap-2">
              <Link
                className="py-2 px-4 bg-[#6941C6] text-white rounded-lg "
                href="/newBlog"
              >
                New Blog
              </Link>
              <Toggle />
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
export default Menu;
