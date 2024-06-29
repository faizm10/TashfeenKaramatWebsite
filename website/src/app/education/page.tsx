import React from "react";

const Home: React.FC = () => {
  return (
    <div className="bg-gray-900 flex justify-center items-center min-h-screen relative p-4">
      <div className="text-center z-10">
        <h1 className="text-4xl font-bold mt-4 text-teal-400">Tashfeen Karamat</h1>
        <p className="text-xl text-gray-300">Associate Professor @ Carleton University</p>
        <div className="p-4">
          <h2 className="text-3xl font-bold text-gray-200 mb-6">Education</h2>
          <ol className="relative border-l border-gray-700">
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-gray-700 rounded-full mt-1.5 -left-1.5 border border-white"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400">Sep 2009 – Jun 2014</time>
              <h3 className="text-lg font-semibold text-teal-400">PhD in Electrical Engineering</h3>
              <p className="text-base font-normal text-gray-300">Queen’s University, Kingston, ON, Canada</p>
              <p className="text-base font-normal text-gray-400">Speciality: Navigational Multi-Sensor Fusion, GPS, Inertial Sensors, Kalman Filtering</p>
            </li>
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-gray-700 rounded-full mt-1.5 -left-1.5 border border-white"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400">May 2007 – Jan 2009</time>
              <h3 className="text-lg font-semibold text-teal-400">Master of Applied Science in Electrical Engineering</h3>
              <p className="text-base font-normal text-gray-300">Royal Military College, Kingston, ON, Canada</p>
              <p className="text-base font-normal text-gray-400">Speciality: Navigational Multi-Sensor Fusion, GPS, Inertial Sensors, Kalman Filtering</p>
            </li>
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-gray-700 rounded-full mt-1.5 -left-1.5 border border-white"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400">Sep 2004 – Jan 2006</time>
              <h3 className="text-lg font-semibold text-teal-400">Master of Engineering in Computer Engineering</h3>
              <p className="text-base font-normal text-gray-300">Queen’s University, Kingston, ON, Canada</p>
              <p className="text-base font-normal text-gray-400">Speciality: Digital Integrated Circuits, Computer Networks, Signal & Image Processing</p>
            </li>
            <li className="ml-4">
              <div className="absolute w-3 h-3 bg-gray-700 rounded-full mt-1.5 -left-1.5 border border-white"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400">1985 – 1989</time>
              <h3 className="text-lg font-semibold text-teal-400">Bachelor of Engineering in Avionics</h3>
              <p className="text-base font-normal text-gray-300">N.E.D University, College of Aeronautical Engineering Campus, Pakistan</p>
              <p className="text-base font-normal text-gray-400">Speciality: Avionics Engineering</p>
            </li>
          </ol>

          <h2 className="text-3xl font-bold text-gray-200 mb-6 mt-12">Teaching Experience</h2>
          <ol className="relative border-l border-gray-700">
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-gray-700 rounded-full mt-1.5 -left-1.5 border border-white"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400">Sep 2021 – Present</time>
              <h3 className="text-lg font-semibold text-teal-400">Instructor II, Electronics Department</h3>
              <p className="text-base font-normal text-gray-300">Carleton University, Ottawa, ON, Canada</p>
              <p className="text-base font-normal text-gray-400">Teaching ECOR 1043 Circuits, ELEC 4504 Avionics Systems, and developing ELEC 4906 Satellite-based Integrated Navigation.</p>
            </li>
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-gray-700 rounded-full mt-1.5 -left-1.5 border border-white"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400">Aug 2019 – Aug 2021</time>
              <h3 className="text-lg font-semibold text-teal-400">Instructor I, Electronics Department</h3>
              <p className="text-base font-normal text-gray-300">Carleton University, Ottawa, ON, Canada</p>
              <p className="text-base font-normal text-gray-400">Taught ECOR 1043 Circuits, ECOR 1044 Mechatronics, and ELEC 4504 Avionics Systems. Developed course materials and supervised Teaching Assistants.</p>
            </li>
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-gray-700 rounded-full mt-1.5 -left-1.5 border border-white"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400">Sep 2018 – Apr 2019</time>
              <h3 className="text-lg font-semibold text-teal-400">Contract Instructor, Systems and Computer Engineering & Electronics Dept</h3>
              <p className="text-base font-normal text-gray-300">Carleton University, Ottawa, ON, Canada</p>
              <p className="text-base font-normal text-gray-400">Taught SYSC 3006 Computer Organization and ELEC 2607 Switching Circuits. Managed administrative tasks and supervised lab sessions.</p>
            </li>
            <li className="ml-4">
              <div className="absolute w-3 h-3 bg-gray-700 rounded-full mt-1.5 -left-1.5 border border-white"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400">June 2019 – Present</time>
              <h3 className="text-lg font-semibold text-teal-400">Adjunct Professor, Electrical & Computer Engineering Dept</h3>
              <p className="text-base font-normal text-gray-300">Royal Military College (RMC), Kingston, ON, Canada</p>
              <p className="text-base font-normal text-gray-400">Collaborates on research projects in navigation technologies, including GPS, INS, and integrated navigation systems.</p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Home;
