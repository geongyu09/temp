"use client";

import { useRouter } from "next/router";
import { useEffect } from "react";

const SuccessPage = () => {
  const router = useRouter;

  // useEffect(() => {
  //   const { searchParams } = router.query;
  //   const code = searchParams?.code;

  //   if (code) {
  //     // Perform the login action with the obtained code
  //     // For example, you can call an API to exchange the code for a token
  //     console.log("Code received:", code);
  //     // Redirect to the main page after successful login
  //     router.push("/main");
  //   }
  // }, [router]);

  return <div></div>;
};

export default SuccessPage;
