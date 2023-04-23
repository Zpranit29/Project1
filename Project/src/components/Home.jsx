import React from 'react'
import CorecoLogo from '../assets/coreco logo.png'
import LaptopImg from '../assets/laptop2.png'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
<div className="bg-light-coreco h-screen">
       <nav className="flex items-center justify-between flex-wrap bg-white py-4 px-6">
        <div className="flex items-center flex-shrink-0 text-light-coreco mr-6">
          <img src={CorecoLogo} alt="Coreco Logo" className=" w-1/6 mr-2" />
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-light-coreco border-light-coreco hover:text-white hover:border-white transition-colors duration-300 ease-in-out">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0zM0 9h20v2H0zM0 15h20v2H0z"/></svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-light-coreco hover:text-white mr-4 transition-colors duration-300 ease-in-out">Home</a>
            <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-light-coreco hover:text-white mr-4 transition-colors duration-300 ease-in-out">About</a>
            <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-light-coreco hover:text-white transition-colors duration-300 ease-in-out">Contact</a>
          </div>
          <div>
            <a href="login" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white bg-light-coreco hover:bg-white hover:text-light-coreco transition-colors duration-300 ease-in-out">Log In</a>
          </div>
        </div>
      </nav>
      <div className="flex flex-col items-center justify-center h-screen">
        <img src={LaptopImg} alt="Laptop" className=" mb-10" />
        <h1 className="text-5xl font-bold text-white mb-10">Empowering Businesses with Technology</h1>
        <p className="text-2xl font-semibold text-white mb-20">"Technology is just a tool. In terms of getting the kids working together and motivating them, the teacher is the most important." - Bill Gates</p>
      </div>
    </div>
    <footer className="bg-black text-white py-4 px-6 flex-shrink-0">
        <div className="flex justify-between items-center">
          <p>&copy; 2023 Coreco Technologies. All rights reserved.</p>
          <ul className="flex">
            <li className="ml-4">
              <a href="#">Privacy Policy</a>
            </li>
            <li className="ml-4">
              <a href="#">Terms of Service</a>
            </li>
            <li className="ml-4">
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>


  )
}

export default Home
