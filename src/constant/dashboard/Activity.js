// data/dashboardData.js

import Link from 'next/link';
import logo11 from '../../../public/images/logo11.svg'
import logo12 from '../../../public/images/logo12.svg'


export const recentActivities = [
  { text: 'Joined Group: Alpha Developers', time: '2 Days Ago', logo: logo11 },
  { text: 'Earned 400 XP: From Challenge', time: '3 Days Ago', logo: logo12 },
  { text: 'Bought Item: Discord Nitro (2 Weeks)', time: '5 Days Ago', logo: logo12 },
  { text: 'Earned 150 XP', time: '5 Days Ago', logo: logo12 },
  { text: 'Joined Group: Team Warriors', time: '6 Days Ago', logo: logo11 },
];

export const activeMissions = [
  {
    icon: 'users',
    text: 'Join your first group',
    xp: '+100 XP',
    button: '',
     Link: 'Continue',
    progress: null,
  },
  {
    icon: 'poll',
    text: 'Participate in a poll',
    xp: '+50 XP',
    button: 'Take Poll',
     Link: '',
    progress: 60, // percent
    stat: 156,
  },
  {
    icon: 'comments',
    text: 'Post your first message',
    xp: '+50 XP',
    button: 'Go to chat',
     Link: 'Continue',
    progress: null,
  },
];
