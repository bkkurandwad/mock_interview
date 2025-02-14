"use client";
import { useUser } from "../../../../useUser";
import React, { useEffect, useState, useRef } from "react";
import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { desc, eq } from "drizzle-orm";
import InterviewItemCard from "./InterviewItemCard";
import { Skeleton } from "@/components/ui/skeleton"
import Cookies from "js-cookie";
import { set } from "react-hook-form";


const InterviewList = (userName) => {
  const { user } = useUser();
  const [interviewList, setInterviewList] = useState([]);
  const [myMail, setMyMail] = useState();
  const mailRef = useRef(null); 


  useEffect(() => {
    user && GetInterviewList();
  }, [user]);

  const GetInterviewList = async () => {
    const cookmail = Cookies.get("userMail");
    console.log("Cookies mail", cookmail);
      const result = await db
      .select()
      .from(MockInterview)
      .where(
        eq(MockInterview.createdBy, cookmail))
      
      .orderBy(desc(MockInterview.id));
      console.log(result);
    setInterviewList(result);
  };
  return (
    <div>
      <h2 className="font-medium text-xl">Previous Mock Interview</h2>
  
      {interviewList ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-3">
          {interviewList.map((interview, index) => (
            <InterviewItemCard key={index} interview={interview} />
          ))}
        </div>
      ) : (
        <Skeleton className="w-[100px] h-[20px] rounded-full" />
      )}
    </div>
  );
};

export default InterviewList;
