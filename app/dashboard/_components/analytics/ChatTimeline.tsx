"use client";

import React, { useState } from "react";
import Section from "@/components/dashboard/Section";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useChatInsightStore } from "@/providers/chatInsightStoreProvider";
import ChatStatsBox from "@/components/dashboard/ChatStatsBox";
import ChatStatsBoxSkeleton from "@/components/dashboard/ChatStatsBoxSkeleton";


const ChatTimeline = () => {
  const chatUsers = useChatInsightStore((store) => store.usernames);
  const chatTimeline = useChatInsightStore((store) => store.stats.timeline);
  const [selectedUser, setSelectedUser] = useState("All");

  const handleUserChange = (userName: string) => setSelectedUser(userName);
  return (
    <Section title="Chat Timeline">
      <select
        className="block min-h-6 w-full min-w-40 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        onChange={(event) => {
          handleUserChange(event.target.value);
        }}
      >
        <option value={"All"} key={"All"}>
          All
        </option>
        {chatUsers.map((user) => {
          return (
            <option value={user} key={user}>
              {user}
            </option>
          );
        })}
      </select>
      <ChatStatsBox
        title={`Most Active Day With  ${chatTimeline[selectedUser as "All"].timelineStat.value}  Texts Exchanged`}
        stats={chatTimeline[selectedUser as "All"].timelineStat.mostActiveDate}
        iconName="flame"
        iconClassNames="size-10"
      />
      <TimelineBarChart selectedOption={selectedUser} />
    </Section>
  );
};

export default ChatTimeline;

export const TimelineBarChart: React.FC<{ selectedOption: string }> = ({
  selectedOption = "All",
}) => {
  const chatInsightTimeline = useChatInsightStore(
    (store) => store.stats.timeline,
  );

  const dateFormat = (date: any) =>
    new Date(date.date).toLocaleDateString("en-GB");
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        height={400}
        data={chatInsightTimeline[selectedOption].timelineUsage}
      >
        <Bar
          dataKey="count"
          fill="#25d366"
          legendType={"line"}
          isAnimationActive={false}
        />
        <XAxis dataKey={dateFormat} />
        <Tooltip labelClassName="text-black" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export const ChatTimelineSkeleton: React.FC = () => {
  return (
    <Section title="Chat Timeline">
      <select className="block min-h-6 w-full min-w-40 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500">
        <option value={"All"} key={"All"}>
          All
        </option>
      </select>
      <ChatStatsBoxSkeleton />
      <div
        role="status"
        className="max-w-full animate-pulse rounded border border-gray-200 p-4 shadow dark:border-gray-700 md:p-6"
      >
        <div className="mt-4 flex items-baseline gap-6">
          <div className="h-72 w-full rounded-t-lg bg-gray-200 dark:bg-gray-700"></div>
          <div className="h-56 w-full rounded-t-lg bg-gray-200 dark:bg-gray-700"></div>
          <div className="h-72 w-full rounded-t-lg bg-gray-200 dark:bg-gray-700"></div>
          <div className="h-64 w-full rounded-t-lg bg-gray-200 dark:bg-gray-700"></div>
          <div className="h-80 w-full rounded-t-lg bg-gray-200 dark:bg-gray-700"></div>
          <div className="h-72 w-full rounded-t-lg bg-gray-200 dark:bg-gray-700"></div>
          <div className="h-80 w-full rounded-t-lg bg-gray-200 dark:bg-gray-700"></div>
          <div className="h-72 w-full rounded-t-lg bg-gray-200 dark:bg-gray-700"></div>
          <div className="h-56 w-full rounded-t-lg bg-gray-200 dark:bg-gray-700"></div>
          <div className="h-72 w-full rounded-t-lg bg-gray-200 dark:bg-gray-700"></div>
          <div className="h-64 w-full rounded-t-lg bg-gray-200 dark:bg-gray-700"></div>
          <div className="h-80 w-full rounded-t-lg bg-gray-200 dark:bg-gray-700"></div>
          <div className="h-72 w-full rounded-t-lg bg-gray-200 dark:bg-gray-700"></div>
          <div className="h-80 w-full rounded-t-lg bg-gray-200 dark:bg-gray-700"></div>
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    </Section>
  );
};
