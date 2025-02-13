"use client";
import { UserButton } from "@clerk/nextjs";
import React, { useEffect } from "react";
import AddNewInterview from "./_components/AddNewInterview";
import InterviewList from "./_components/InterviewList";
import { useParams } from "next/navigation";

const Dashboard = () => {
  const params = useParams();
  const { idnumber } = params; 
  useEffect(() => {
    console.log(idnumber);
  }, [idnumber]);
  return (
    <div className="p-10" >
      <h2 className="font-bold text-2xl" >Dashboard</h2>
      <h2 className="text-gray-500" >Create and start your AI Mockup Interview</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 my-5" >
        <AddNewInterview userName={idnumber}/>
      </div>

      <InterviewList/>
    </div>
  );
};

export default Dashboard;
