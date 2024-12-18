import React from "react";
import { Heading } from "@/components/common/heading";
import { useRouter } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table/data-table";
import { columns } from "./columns";


export const WhatsappChat = async () => {
  

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title="Whatsapp Chats" description="See all" />
      </div>
      <Separator />
      
    </>
  );
};
