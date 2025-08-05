'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaCircle, FaSearch } from 'react-icons/fa';
import logo24 from '../../../public/images/logo24.png';
import { pendingApplication } from '@/constant/profile/pendingApplication';
import { motion, AnimatePresence } from 'framer-motion';

const ApplicationReviewHeader = () => {
    const [isProfile, setIsProfile] = useState(false);

    return (
        <section className="min-h-screen w-full bg-gradient-to-b from-gray-800 via-gray-900 to-black text-white">
            {/* Header */}
            <div className='flex flex-row justify-between p-10'>
                <h1 className='text-[48px] font-bold'>Welcome Back! Zain Ch</h1>
                <div>
                    <button
                        className='bg-blue-600 mt-4 px-6 py-2 rounded-2xl hover:bg-blue-700 transition shadow-lg'
                        onClick={() => setIsProfile(!isProfile)}
                    >
                        Edit Profile
                    </button>
                </div>
            </div>

            {/* Profile Section with Animation */}
            <AnimatePresence>
                {isProfile && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className='flex flex-row justify-between p-10'>
                            <h1 className='text-[32px] font-semibold'>Application Details</h1>
                            <p
                                className='text-[33px] cursor-pointer hover:text-red-400 transition'
                                onClick={() => setIsProfile(false)}
                            >
                                x
                            </p>
                        </div>

                        <div className='flex flex-row p-10'>
                            <div>
                                <Image src={logo24} alt='logo24' className='rounded-lg shadow-lg' />
                            </div>
                            <div className='px-3 space-y-3'>
                                <h1 className='text-[30px]'>ZenWave</h1>
                                <p className='text-[#FFB547] font-semibold'>10 XP</p>
                                <div className='text-blue-400 hover:text-blue-300 transition'>
                                    <Link href='/'>https://discord.gg/gaminghub</Link>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-gray-900 via-black to-black border border-[#30BDEE] rounded-xl p-6 space-y-6 w-full text-sm shadow-lg">
                            <div className="flex flex-row justify-between">
                                <div>
                                    <p className="text-gray-400">Date of Submission</p>
                                    <p className="font-medium">24-05-2025</p>
                                </div>
                                <div>
                                    <p className="text-gray-400">Applied Group</p>
                                    <p className="font-medium">Elite Circle</p>
                                </div>
                                <div>
                                    <p className="text-gray-400">Time Zone</p>
                                    <p className="font-medium">AEST (UTC+10)</p>
                                </div>
                            </div>

                            {/* Basic Info */}
                            <div className="bg-gradient-to-br from-gray-800 to-black rounded-lg p-4 space-y-2 shadow-md">
                                <p className="font-semibold">Basic Information</p>
                                <div className="space-y-2">
                                    <div className="flex flex-row justify-between">
                                        <p className="text-gray-300">Discord Username:</p>
                                        <p>ZenWave#1045</p>
                                    </div>
                                    <div className="flex flex-row justify-between">
                                        <p className="text-gray-300">In-Game Username:</p>
                                        <p>SquadLeader77</p>
                                    </div>
                                    <div className="flex flex-row justify-between">
                                        <p className="text-gray-300">Reference:</p>
                                        <p>CommanderRoy#9081</p>
                                    </div>
                                </div>
                            </div>

                            {/* Agreements */}
                            <div className="bg-gradient-to-br from-gray-800 to-black rounded-lg p-4 space-y-2 w-[582px] shadow-md">
                                <p className="font-semibold">Agreements</p>
                                <div className="flex flex-wrap text-sm text-gray-300 gap-x-6 gap-y-2">
                                    {[
                                        "18+ Agreement",
                                        "Rules Agreement",
                                        "Community Agreement",
                                        "Confidentiality Agreement"
                                    ].map((item, i) => (
                                        <label key={i} className="flex items-center gap-2 w-1/3 min-w-[160px]">
                                            <input type="checkbox" checked readOnly className="accent-[#30BDEE]" />
                                            {item}
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Game IDs */}
                            <div className="bg-gradient-to-br from-gray-800 to-black rounded-lg p-4 space-y-2 shadow-md">
                                <p className="font-semibold">Game IDs & Platform Info</p>
                                <div className="space-y-2 text-gray-300">
                                    <div className="flex flex-row justify-between"><p>Steam64 ID:</p><p className='text-white'>76561197960289730</p></div>
                                    <div className="flex flex-row justify-between"><p>RSI ID:</p><p className='text-white'>StarPilotX</p></div>
                                    <div className="flex flex-row justify-between"><p>Reforger ID:</p><p className='text-white'>f1923995-53f1-479e-bc60-e47bb0a9054f</p></div>
                                    <div className="flex flex-row justify-between"><p>War Thunder IGN:</p><p className='text-white'>SkyAce_2025</p></div>
                                    <div className="flex flex-row justify-between"><p>Dune Awakening ID:</p><p className='text-white'>SandWalker#4491</p></div>
                                </div>
                            </div>

                            {/* Questions and Answers Accordion */}
                            <div className="bg-gradient-to-br from-gray-800 to-black rounded-lg p-4 space-y-4 mt-6 w-full text-sm shadow-md">
                                <p className="font-semibold text-lg">Questions and Answers</p>
                                {[
                                    "Play Time Per Week", "Discovered Us Through", "Drawn To Us By", "Games of Interest",
                                    "Teamplay Oriented Games", "Envision in Unnamed (Staff Role Interest)",
                                    "Handles Conflict By", "Exclusivity Agreement"
                                ].map((question, index) => (
                                    <details key={index} className="bg-[#1A1A1C] rounded-md p-3 cursor-pointer border border-[#2B2B2F] hover:bg-[#252527] transition">
                                        <summary className="flex justify-between items-center">{question}<span className="text-blue-400 text-xl">+</span></summary>
                                        <div className="mt-2 text-gray-300">Sample answer for: {question}</div>
                                    </details>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Application Review Header Bottom Section */}
            <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white w-full p-6 md:p-8 mt-6 shadow-lg">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-semibold mb-1">Application Review</h2>
                        <p className="text-sm text-gray-400">Review, Evaluate, And Approve New Member Applications With Ease.</p>
                    </div>

                    {/* Search */}
                    <div className="w-full max-w-md relative">
                        <FaSearch className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400 text-sm" />
                        <input
                            type="text"
                            placeholder="Search by name, username, or Discord ID"
                            className="w-full bg-gradient-to-r from-gray-800 to-black border border-gray-700 pl-10 pr-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
                        />
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {[
                        { label: "Total Applications", value: 248, color: "blue", percent: "100%" },
                        { label: "Pending", value: 67, color: "yellow", percent: "27%" },
                        { label: "Approved", value: 153, color: "green", percent: "61%" },
                        { label: "Rejected", value: 28, color: "red", percent: "12%" },
                    ].map((stat, i) => (
                        <div key={i} className="bg-gradient-to-br from-gray-800 to-black w-full h-40 flex flex-col items-center justify-center border border-[#2B2B2F] rounded-lg shadow-md">
                            <div className="text-base font-medium">{stat.label}</div>
                            <div className="text-3xl font-extrabold my-2">{stat.value}</div>
                            <div className={`flex items-center gap-2 text-${stat.color}-400 text-sm`}>
                                <FaCircle className={`text-${stat.color}-500 text-xs`} />
                                {stat.percent} Total
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Table Section */}
            <div className="mt-10 px-6 md:px-8">
                <div className="overflow-x-auto rounded-xl">
                    <table className="min-w-full bg-gradient-to-br from-gray-900 to-black text-white text-sm border border-[#2B2B2F]">
                        <thead className="bg-[#2B2B2F] text-gray-400">
                            <tr>
                                <th className="text-left px-6 py-4">Name</th>
                                <th className="text-left px-6 py-4">Discord ID</th>
                                <th className="text-left px-6 py-4">Date</th>
                                <th className="text-left px-6 py-4">Applied Group</th>
                                <th className="text-left px-6 py-4">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pendingApplication.map((item, index) => (
                                <tr key={index} className="border-t border-[#2B2B2F] hover:bg-[#252527] transition">
                                    <td className="px-6 py-4 flex items-center gap-3">
                                        <Image src={item.profileImage} alt="profile" width={32} height={32} className="rounded-full shadow" />
                                        <span className="font-medium">{item.username}</span>
                                    </td>
                                    <td className="px-6 py-4 text-gray-300">{item.discordId}</td>
                                    <td className="px-6 py-4 text-gray-300">{item.date}</td>
                                    <td className="px-6 py-4 text-gray-300">{item.appliedGroup}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                            item.status === 'Pending'
                                                ? 'bg-yellow-900 text-yellow-400'
                                                : item.status === 'Approved'
                                                ? 'bg-green-900 text-green-400'
                                                : 'bg-red-900 text-red-400'
                                        }`}>
                                            {item.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default ApplicationReviewHeader;
