"use client";

import React from "react";
import { Button } from "../ui/button";
import { forceCacheRevalidation } from "@/utils/actions.utils";

const RevalidateButton = () => {



  return <Button onClick={() => forceCacheRevalidation()}>Force Cache Revalidation</Button>;
};

export default RevalidateButton;
