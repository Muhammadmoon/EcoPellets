// pages/team.js
import React from 'react';

const teamMembers = [
  { image: '/images/member1.jpg', name: 'Alice Johnson', designation: 'CEO' },
  { image: '/images/member2.jpg', name: 'Bob Smith', designation: 'CTO' },
  { image: '/images/member3.jpg', name: 'Carol White', designation: 'CFO' },
  { image: '/images/member4.jpg', name: 'David Brown', designation: 'COO' },
  { image: '/images/member5.jpg', name: 'Eve Davis', designation: 'CMO' },
];

const TeamMember = ({ image, name, designation }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
      <img className="w-full h-80 object-cover" src={image} alt={name} />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75 group-hover:opacity-50 transition-opacity"></div>
      <div className="absolute bottom-0 left-0 p-4 text-white">
        <h2 className="text-lg font-bold">{name}</h2>
        <p className="text-sm">{designation}</p>
      </div>
    </div>
  );
};

const Team = () => {
  return (
    <div className="bg-gray-100 py-10 px-6 md:px-12 lg:px-24">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">Our Team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10">
        {teamMembers.map((member, index) => (
          <TeamMember
            key={index}
            image={member.image}
            name={member.name}
            designation={member.designation}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;
