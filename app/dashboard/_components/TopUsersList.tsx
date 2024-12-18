"use server";

import React from "react";
import {
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  Card,
} from "@/components/ui/card";
import { RecentSales } from "@/components/dashboard/recent-sales";


const TopUsersList = async () => {
 

  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Top users</CardTitle>
        <CardDescription>
          Users who sent most messages of all time
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

export default TopUsersList;
