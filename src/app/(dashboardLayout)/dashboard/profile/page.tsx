import { authOptions } from "@/libs/authOptions";
import { getServerSession } from "next-auth";
import React from "react";

export default async function PageProfile() {
  const session = await getServerSession(authOptions);

  return <div>Profile</div>;
}
