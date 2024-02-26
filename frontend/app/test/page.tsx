"use client";

import { useEffect } from "react";


const Test = () => {
  const fetchA = async () => {
    const URL = `${process.env.NEXT_PUBLIC_API_URL}api/home-pages?populate[0]=metadata.metaImage`;
    const res = await fetch(URL);
    const data = await res.json();
    console.log("🚀 ~ fetch ~ data:", data);
  };

  useEffect(() => {
    fetchA();
  });
  return <div>Test</div>;
};

export default Test;
