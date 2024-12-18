import React, { Suspense } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

import ChatAnalytics from "./_components/ChatAnalytics";
import { ChatSummarySkeleton } from "./_components/analytics/ChatSummary";
import { ChatTimelineSkeleton } from "./_components/analytics/ChatTimeline";

const Home = () => {
  return (
    <div className="flex h-full flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          {/* <div className="flex items-center space-x-2">
            <CalendarDateRangePicker />
            <Button size="sm">Download</Button>
          </div> */}
        </div>
        <Tabs defaultValue="analytics" className="space-y-4">
          <TabsList>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>
          <TabsContent value="analytics">
            <Suspense
              fallback={
                <>
                  <ChatSummarySkeleton /> <ChatTimelineSkeleton />
                </>
              }
            >
              <ChatAnalytics />
            </Suspense>
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
