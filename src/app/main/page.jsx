"use client";
import { Link } from "@chakra-ui/next-js";

export default function Page() {
  return (
    <Link href="/main" color="blue.400" _hover={{ color: "blue.500" }}>
      Test
    </Link>
  );
}
