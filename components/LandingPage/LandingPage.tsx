"use client";

import React, { useState } from "react";
import Header from "../dashboardLayout/header";

import { Heading } from "../common/heading";
import FileUploadClientComponent from "../FileUploadClientComponent";

import { ModalProvider } from "@/providers/modal-provider";

const LandingPage = () => {

  return (
    <>
      <Header />
      <div className="flex min-h-[100vh] w-full flex-col items-center justify-center overflow-y-auto  px-5 py-16">
        <Heading
          title="Welcome to WhatsappAnalyzer"
          description="Get insights into your chats - Now with more interesting graphs, free statistics and full PDF export, whatsapp chat file upload and more features will be added one by one, please consider to contribute."
          className="my-5 max-w-[800px] space-y-2 text-center"
        />
        <ModalProvider>
          <FileUploadClientComponent />
        </ModalProvider>
      </div>
    </>
  );
};

export default LandingPage;
