"use server";

import React from "react";
import { CardHeader, CardTitle, CardContent, Card } from "@/components/ui/card";



const MessagesPerMonth = async () => {
  
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Messages per month</CardTitle>
      </CardHeader>
      <CardContent className="pl-2">
        
      </CardContent>
    </Card>
  );
};

export default MessagesPerMonth;
