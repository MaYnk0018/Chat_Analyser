import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

// Placeholder components since original imports are not supported
const ChatAnalytics = () => (
  <div className="bg-gray-100 p-4 rounded-lg">
    <h3 className="text-xl font-semibold mb-4">Chat Analytics</h3>
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-white p-3 rounded">
        <p className="text-gray-600">Total Chats: 1,234</p>
      </div>
      <div className="bg-white p-3 rounded">
        <p className="text-gray-600">Average Response Time: 2.3s</p>
      </div>
    </div>
  </div>
);

const ChatSummarySkeleton = () => (
  <div className="animate-pulse bg-gray-200 h-24 rounded-lg mb-4"></div>
);

const ChatTimelineSkeleton = () => (
  <div className="animate-pulse bg-gray-200 h-36 rounded-lg"></div>
);

const Home = () => {
  return (
    <div className="flex h-full flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        </div>
        
        <Tabs defaultValue="analytics" className="space-y-4">
          <TabsList>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>
          
          <TabsContent value="analytics">
            {/* Simplified error handling without external library */}
            {React.createElement(
              'div',
              { key: 'analytics-content' },
              <ChatAnalytics />
            )}
          </TabsContent>
          
          <TabsContent value="reports" className="p-8">
            <p className="text-2xl">Coming Soon</p>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Home;