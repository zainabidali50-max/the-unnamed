'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaComments, FaPoll, FaUsers } from 'react-icons/fa';
import { recentActivities, activeMissions } from '../../constant/dashboard/Activity';

const iconMap = {
  users: FaUsers,
  poll: FaPoll,
  comments: FaComments,
};

const DashboardSection = () => {
  return (
    <section className="bg-black text-white w-full px-6 lg:px-12 py-12">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Recent Activity */}
        <div className="bg-gradient-to-r from-black via-[#1c1c1c] to-gray-800 rounded-2xl p-6 shadow-lg space-y-4 w-full">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-semibold">Recent Activity</h2>
            <a href="#" className="text-sm text-blue-400 hover:underline">View all</a>
          </div>

          {recentActivities.map((activity, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b border-gray-700 pb-3 last:border-none last:pb-0"
            >
              <div className="flex items-center gap-3">
                <Image src={activity.logo} alt="icon" width={28} height={28} />
                <p className="text-sm text-gray-300">{activity.text}</p>
              </div>
              <span className="text-xs text-gray-500">{activity.time}</span>
            </div>
          ))}
        </div>

        {/* Active Missions */}
        <div className="bg-gradient-to-r from-black via-[#1c1c1c] to-gray-800 rounded-2xl p-6 shadow-lg space-y-4 w-full">
          <h2 className="text-xl font-semibold mb-2">Active Missions</h2>

          {activeMissions.map((mission, index) => {
            const Icon = iconMap[mission.icon];
            return (
              <div
                key={index}
                className="bg-[#1a1a1a] rounded-xl p-5 space-y-4 shadow-md"
              >
                {/* Title & XP */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Icon className="text-white text-xl" />
                    <span className="text-sm text-gray-300">
                      {mission.text}{' '}
                      <span className="text-yellow-400">{mission.xp}</span>
                    </span>
                  </div>
                  {mission.stat && <span className="text-blue-300 text-sm">{mission.stat}</span>}
                </div>

                {/* Custom Progress Bars */}
                {mission.progress !== null && (
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div
                        key={i}
                        className={`w-10 h-2 rounded-full ${
                          i < mission.progress ? 'bg-yellow-400' : 'bg-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                )}

                {/* Action Button */}
                <div className="flex justify-end">
                  {mission.Link ? (
                    <Link href={'/communityStepOne'}>
                      <button className="bg-green-600 hover:bg-green-700 transition text-white text-sm px-4 py-2 rounded-full font-medium">
                        {mission.button || 'Continue'}
                      </button>
                    </Link>
                  ) : (
                    <button className="bg-green-600 hover:bg-green-700 transition text-white text-sm px-4 py-2 rounded-full font-medium">
                      {mission.button || 'Start'}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default DashboardSection;
