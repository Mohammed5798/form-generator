import React from 'react'
import Header from '../components/Header'
import { HiBars3BottomLeft } from 'react-icons/hi2';
import { CiCircleList } from "react-icons/ci";
import { CiSquareChevDown } from "react-icons/ci";
import { CiImport } from "react-icons/ci";
import { MdDateRange } from "react-icons/md";
import { BsTextParagraph  } from "react-icons/bs";
import {Link} from 'react-router-dom';
function CreateFrom() {
  return (
    <div className='h-screen w-screen flex flex-col gap-4 justify-center'>
      <div className='header'><Header /></div>

      <h1 className='self-center text-3xl mt-8'>Start Building Your Form</h1>
      <div className='cards w-full  h-full flex flex-col gap-4 p-4 items-center justify-center'>

        <div className='rowOne flex gap-4 w-3/4 h-1/3 items-center justify-center'>
          <div className='firstCard flex flex-col w-[40%] h-full border border-gray-300 rounded-2xl p-2 pl-8 gap-2 '>
            <div className='iconText flex w-full h-1/2 items-center gap-4'>
              <div className='bg-gray-300 rounded-lg w-[10%] h-[60%] flex items-center justify-center p-2'>
                <HiBars3BottomLeft className='text-[#7050EF] text-xl '/>
              </div>
              <h3 className='text-xl '>Short Answer</h3>
            </div>
            <button className='border border-gray-300 w-1/4 rounded-lg text-sm p-1'>Add Field</button>
          </div>
          {/* Second Card */  }
          <div className='secondCard flex flex-col w-[40%] h-full border border-gray-300 rounded-2xl p-2 pl-8 gap-2'>
            <div className='iconText flex w-full h-1/2 items-center gap-4'>
              <div className='bg-gray-300 rounded-lg w-[10%] h-[60%] flex items-center justify-center'>
                <BsTextParagraph  className='text-[#7050EF] text-xl '/>
              </div>
              <h3 className='text-xl '>Paragraph</h3>
            </div>
            <button className='border border-gray-300 w-1/4 rounded-lg text-sm p-1'>Add Field</button>
          </div>
        </div>

        {/* Row Two */}
        <div className='rowtwo flex  gap-4 w-3/4 h-1/3 items-center justify-center'>
          <div className='firstCard flex flex-col w-[40%] h-full border border-gray-300 rounded-2xl p-2 pl-8 gap-2'>
            <div className='iconText flex w-full h-1/2 items-center gap-4'>
              <div className='bg-gray-300 rounded-lg w-[10%] h-[60%] flex items-center justify-center p-2'>
                <CiCircleList className='text-[#7050EF] text-xl '/>
              </div>
              <h3 className='text-xl '>Multiple Choice</h3>
            </div>
            <button className='border border-gray-300 w-1/4 rounded-lg text-sm p-1'>Add Field</button>
          </div>
          {/* Second Card */  }
          <div className='secondCard flex flex-col w-[40%] h-full border border-gray-300 rounded-2xl p-2 pl-8 gap-2'>
            <div className='iconText flex w-full h-1/2 items-center gap-4'>
              <div className='bg-gray-300 rounded-lg w-[10%] h-[60%] flex items-center justify-center'>
                <CiSquareChevDown className='text-[#7050EF] text-xl'/>
              </div>
              <h3 className='text-xl '>Dropdown</h3>
            </div>
            <button className='border border-gray-300 w-1/4 rounded-lg text-sm p-1'> Add Field</button>
          </div>
        </div>

        {/* Row Three */}
        <div className='rowthree flex  gap-4 w-3/4 h-1/3 justify-center'>
          <div className='firstCard flex flex-col w-[40%] h-full border border-gray-300 rounded-2xl p-2 pl-8 gap-2'>
            <div className='iconText flex w-full h-1/2 items-center gap-4'>
              <div className='bg-gray-300 rounded-lg w-[10%] h-[60%] flex items-center justify-center p-2'>
                <CiImport className='text-[#7050EF] text-xl '/>
              </div>
              <h3 className='text-xl '>File Upload</h3>
            </div>
            <button className='border border-gray-300 w-1/4 rounded-lg text-sm p-1'>Add Field</button>
          </div>
          {/* Second Card */  }
          <div className='secondCard flex flex-col w-[40%] h-full border border-gray-300 rounded-2xl p-2 pl-8 gap-2'>
            <div className='iconText flex w-full h-1/2 items-center gap-4'>
              <div className='bg-gray-300 rounded-lg w-[10%] h-[60%] flex items-center justify-center'>
                <MdDateRange className='text-[#7050EF] text-xl '/>
              </div>
              <h3 className='text-xl '>Date</h3>
            </div>
            <button className='border border-gray-300 w-1/4 rounded-lg text-sm p-1'>Add Field</button>
            {/* <Link to="/addQuestion" className='border border-gray-300 w-1/4 rounded-lg text-sm p-1'>Add Field</Link> */}
          </div>
        </div>
        <Link to="/formBuilder" className='bg-[#7050EF] w-[20%] rounded-lg text-center'>
         <button className='self-center rounded-lg text-white py-2 h-[20%] text-xl'>Next</button>
        </Link>
      </div>
       
    </div>
  )
}

export default CreateFrom