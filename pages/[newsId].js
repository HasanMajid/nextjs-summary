import React from "react";
import { useRouter } from "next/router";

function DetailPage() {
  const router = useRouter();
  router.query.newsId; 
  console.log(router.query.newsId);

  //send a request to the backend API
  //to fetch the news item with newsId

  return <h1>The Detail Page</h1>;
}

export default DetailPage;
