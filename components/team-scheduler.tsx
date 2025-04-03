"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TeamMember from "@/components/team-member";
import TimeSlot from "@/components/time-slot";
import AppointmentCard from "@/components/appointment-card";
import AssignmentCard from "@/components/assignment-card";
import StatusDropdown from "@/components/status-dropdown";
import TeamDropdown from "@/components/team-dropdown";
import HoursDropdown from "@/components/hours-dropdown";
import DayDropdown from "@/components/day-dropdown";

const teamMembers = [
  { id: 1, name: "Member 1", color: "bg-orange-500", bgColor: "bg-orange-50" },
  { id: 2, name: "Member 2", color: "bg-green-500", bgColor: "bg-green-50" },
  { id: 3, name: "Member 3", color: "bg-cyan-500", bgColor: "bg-cyan-50" },
  { id: 4, name: "Member 4", color: "bg-sky-400", bgColor: "bg-sky-50" },
  { id: 5, name: "Member 5", color: "bg-blue-400", bgColor: "bg-blue-50" },
  { id: 6, name: "Member 6", color: "bg-green-400", bgColor: "bg-green-50" },
  { id: 7, name: "Member 7", color: "bg-pink-400", bgColor: "bg-pink-50" },
  { id: 8, name: "Member 8", color: "bg-yellow-400", bgColor: "bg-yellow-50" },
  { id: 9, name: "Member 9", color: "bg-red-400", bgColor: "bg-red-50" },
  {
    id: 10,
    name: "Member 10",
    color: "bg-purple-400",
    bgColor: "bg-purple-50",
  },
  {
    id: 11,
    name: "Member 11",
    color: "bg-yellow-200",
    bgColor: "bg-yellow-50",
  },
];

const timeSlots = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
];

const appointments = [
  {
    id: 1,
    memberId: 2,
    clientName: "Client Name",
    startTime: "10:00 am",
    endTime: "10:45 am",
    column: 1,
    bgColor: "bg-sky-50",
  },
  {
    id: 2,
    memberId: 2,
    clientName: "Client Name",
    startTime: "8:00 am",
    endTime: "8:30 am",
    column: 3,
    bgColor: "bg-sky-50",
  },
  {
    id: 3,
    memberId: 5,
    clientName: "Client Name",
    startTime: "9:30 am",
    endTime: "10:00 am",
    column: 3,
    bgColor: "bg-fuchsia-50",
   
  },
  {
    id: 4,
    memberId: 8,
    clientName: "Client Name",
    startTime: "11:30 am",
    endTime: "12:00 pm",
    column: 4,
    bgColor: "bg-fuchsia-50",
  },
  {
    id: 5,
    memberId: 8,
    clientName: "Client Name",
    startTime: "1:15 pm",
    endTime: "2:00 am",
    column: 6,
  },
  {
    id: 6,
    memberId: 11,
    clientName: "Client Name",
    startTime: "12:30 pm",
    endTime: "1:00 pm",
    column: 1,
    bgColor: "bg-sky-50",
  },
];

const assignedItems = [
  {
    id: 1,
    name: "Cameron Williamson",
    address: "4140 Parker Rd, Allentown, New Mexico 31134",
    jobNumber: "JOB106731",
  },
  {
    id: 2,
    name: "Cameron Williamson",
    address: "4140 Parker Rd, Allentown, New Mexico 31134",
    jobNumber: "JOB106731",
  },
  {
    id: 3,
    name: "Cameron Williamson",
    address: "4140 Parker Rd, Allentown, New Mexico 31134",
    jobNumber: "JOB106731",
  },
  {
    id: 4,
    name: "Cameron Williamson",
    address: "4140 Parker Rd, Allentown, New Mexico 31134",
    jobNumber: "JOB106731",
  },
];

const unassignedItems = [
  {
    id: 5,
    name: "Brooklyn Simmons",
    address: "2118 Thornridge Cir, Syracuse, Connecticut 35624",
    jobNumber: "JOB106732",
  },
  {
    id: 6,
    name: "Leslie Alexander",
    address: "3891 Ranchview Dr, Richardson, California 62639",
    jobNumber: "JOB106733",
  },
];

export default function TeamScheduler() {
  const [activeTab, setActiveTab] = useState("team-view");
  const [assignmentTab, setAssignmentTab] = useState("assigned");
  const [currentDate, setCurrentDate] = useState(new Date());
  const [statusFilter, setStatusFilter] = useState("all");
  const [teamFilter, setTeamFilter] = useState("all");
  const [hourView, setHourView] = useState("1 hour");
  const [dayView, setDayView] = useState("day");

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  };


  const navigateDay = (direction: "prev" | "next" | "today") => {
    const newDate = new Date(currentDate);

    if (direction === "prev") {
      newDate.setDate(newDate.getDate() - 1);
    } else if (direction === "next") {
      newDate.setDate(newDate.getDate() + 1);
    } else {
      newDate.setTime(new Date().getTime());
    }

    setCurrentDate(newDate);
  };

  return (
    <div className="w-full overflow-hidden">

      <div className="border-b">
        <div className="flex flex-wrap items-center justify-between px-4 py-3 gap-2">
          <div className="flex items-center gap-2 md:w-auto w-full">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <h2 className="text-lg font-medium">November 2024</h2>
          </div>

          <Tabs
            defaultValue="team-view"
            className="w-auto mx-auto"
            onValueChange={setActiveTab}
          >
            <TabsList className="grid grid-cols-3 w-auto">
              <TabsTrigger value="events">Events</TabsTrigger>
              <TabsTrigger value="team-view">Team View</TabsTrigger>
              <TabsTrigger value="team-tracking">Team Tracking</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>


      </div>

      {/* Main content */}
      <div className="flex flex-col md:flex-row md:gap-0 gap-6">
        {/* Team schedule grid */}
        <div className="flex-grow overflow-x-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 px-4 py-3 border-t">
            <div className="flex flex-wrap gap-2">
              <StatusDropdown
                value={statusFilter}
                onValueChange={setStatusFilter}
              />
              <TeamDropdown value={teamFilter} onValueChange={setTeamFilter} />
            </div>

            <div className="flex items-center gap-2">
              <HoursDropdown value={hourView} onValueChange={setHourView} />
              <DayDropdown value={dayView} onValueChange={setDayView} />
              <div className="flex items-center">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => navigateDay("prev")}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  className="px-2"
                  onClick={() => navigateDay("today")}
                >
                  Today
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => navigateDay("next")}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          <div className="min-w-[800px] border-t ">
            {/* Team header */}
            <div className="flex bg-gray-100">
              <div className="w-[150px] p-4 border-r border-b">
                <h3 className="font-medium">Team</h3>
              </div>
              <div className="flex-grow grid grid-cols-9">
                {timeSlots.map((time, index) => (
                  <TimeSlot key={index} time={time} />
                ))}
              </div>
            </div>

            {/* Team members and schedule */}
            <div className="relative">
              {teamMembers.map((member) => (
                <div key={member.id} className="flex">
                  <TeamMember member={member} />
                  <div className="flex-grow grid grid-cols-9">
                    {timeSlots.map((_, index) => (
                      <div
                        key={index}
                        className="h-[60px] border-r border-b relative"
                      ></div>
                    ))}
                  </div>
                </div>
              ))}

              {/* Appointments */}
              {appointments.map((appointment) => {
                const memberIndex = teamMembers.findIndex(
                  (m) => m.id === appointment.memberId
                );
                const member = teamMembers[memberIndex];
                return (
                  <AppointmentCard
                    key={appointment.id}
                    appointment={appointment}
                    memberIndex={memberIndex}
                    // bgColor={member.bgColor}
                    bgColor={appointment.bgColor || member.bgColor}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* Assignments sidebar */}

        <div className="w-full md:w-[350px] border-l md:h-[calc(100dvh_-_65px)] h-auto">
          <Tabs
            defaultValue="assigned"
            className="w-full md:w-auto"
            onValueChange={setAssignmentTab}
          >
            <TabsList className="grid grid-cols-2 w-full md:w-auto">
              <TabsTrigger value="assigned">Assigned</TabsTrigger>
              <TabsTrigger value="unassigned">Unassigned</TabsTrigger>
            </TabsList>
          </Tabs>
          <div className="p-4 border-b flex justify-between items-center">
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center gap-1 bg-muted border w-full h-8"
            >
              <span>Assign All</span>
              <img
                src="/Mask group.jpg"
                alt="Assign All Icon"
                className="h-4 w-4"
              />
            </Button>
          </div>
          <div className="overflow-y-auto max-h-[calc(100vh-200px)]">
            {assignmentTab === "assigned"
              ? assignedItems.map((assignment) => (
                <AssignmentCard
                  key={assignment.id}
                  assignment={assignment}
                />
              ))
              : unassignedItems.map((assignment) => (
                <AssignmentCard
                  key={assignment.id}
                  assignment={assignment}
                />
              ))}
          </div>
        </div>

      </div>
    </div>
  );
}
