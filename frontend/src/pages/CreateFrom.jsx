import React from 'react'
import Header from '../components/Header'
import { HiBars3BottomLeft } from 'react-icons/hi2';
import {Link} from 'react-router-dom';
function CreateFrom() {
  return (
    <div className='h-screen w-screen flex flex-col gap-4 justify-center'>
        <div className='header'>
            <Header />
        </div>
        <h1 className='text self-center text-4xl'>Start Building Your Form</h1>
        <div className='cards w-full  h-full flex flex-col gap-4 p-4 
        items-center justify-center'>
            <div className='row rowOne flex gap-4 w-3/4 h-1/4 
            items-center justify-center'>
                <div className='card firstCard flex flex-col w-[40%] h-full 
                border border-gray-300 rounded-2xl p-2 gap-4 '>
                    <div className='iconText flex w-full 
                      h-1/2 items-center gap-4'>
                        <div className='bg-gray-300 rounded-lg w-[50px] h-[50px] 
                        flex items-center justify-center p-2'>
                        <HiBars3BottomLeft className='text-[#7050EF] text-xl 
                        '/>
                        </div>
                        <h3 className='text-xl '>Short answer</h3>
                    </div>
                    <button className='w-fit px-[10px] py-[2px] border border-gray-300 rounded-lg '>
                        Add Field</button>
                </div>
               {/* Second Card */  }
                <div className='card secondCard flex flex-col w-[40%] h-full 
                border border-gray-300 rounded-2xl p-2 gap-4'>
                    <div className='iconText flex w-full 
                      h-1/2 items-center gap-4'>
                        <div className='bg-gray-300 rounded-lg w-[50px] h-[50px] 
                        flex items-center justify-center p-2'>
                        <HiBars3BottomLeft className='text-[#7050EF] text-xl 
                        '/>
                        </div>
                        <h3 className='text-xl '>Short answer</h3>
                    </div>
                    <button className='w-fit px-[10px] py-[2px] border border-gray-300 rounded-lg '>
                        Add Field</button>
                </div>
            </div>
            {/* Row Two */}
                  <div className='row rowtwo flex  gap-4 w-3/4 h-1/4 justify-center'>
                <div className='card firstCard flex flex-col w-[40%] h-full 
                border border-gray-300 rounded-2xl p-2 gap-4'>
                    <div className='iconText flex w-full 
                      h-1/2 items-center gap-4'>
                        <div className='bg-gray-300 rounded-lg w-[50px] h-[50px] 
                        flex items-center justify-center p-2'>
                        <HiBars3BottomLeft className='text-[#7050EF] text-xl 
                        '/>
                        </div>
                        <h3 className='text-xl '>Short answer</h3>
                    </div>
                    <button className='w-fit px-[10px] py-[2px] border border-gray-300 rounded-lg '>
                        Add Field</button>
                </div>
               {/* Second Card */  }
                <div className='card secondCard flex flex-col w-[40%] h-full 
                  border border-gray-300 rounded-2xl p-2 gap-4'>
                    <div className='iconText flex w-full 
                      h-1/2 items-center gap-4'>
                        <div className='bg-gray-300 rounded-lg w-[50px] h-[50px] 
                        flex items-center justify-center p-2'>
                        <HiBars3BottomLeft className='text-[#7050EF] text-xl 
                        '/>
                        </div>
                        <h3 className='text-xl '>Short answer</h3>
                    </div>
                    <button className='w-fit px-[10px] py-[2px] border border-gray-300 rounded-lg '>
                        Add Field</button>
                </div>
            </div>
            {/* Row Three */}
              <div className='row rowthree flex  gap-4 w-3/4 h-1/4 justify-center'>
                <div className='card firstCard flex flex-col w-[40%] h-full 
                border border-gray-300 rounded-2xl p-2 gap-4'>
                    <div className='iconText flex w-full 
                      h-1/2 items-center gap-4'>
                        <div className='bg-gray-300 rounded-lg w-[50px] h-[50px] 
                        flex items-center justify-center p-2'>
                        <HiBars3BottomLeft className='text-[#7050EF] text-xl 
                        '/>
                        </div>
                        <h3 className='text-xl '>Short answer</h3>
                    </div>
                    <button className='w-fit px-[10px] py-[2px] border border-gray-300 rounded-lg '>
                        Add Field</button>
                </div>
               {/* Second Card */  }
                <div className='card secondCard flex flex-col w-[40%] h-full 
                border border-gray-300 rounded-2xl p-2 gap-4'>
                    <div className='iconText flex w-full 
                      h-1/2 items-center gap-4'>
                        <div className='bg-gray-300 rounded-lg w-[50px] h-[50px] 
                        flex items-center justify-center p-2'>
                        <HiBars3BottomLeft className='text-[#7050EF] text-xl 
                        '/>
                      </div>
                        <h3 className='text-xl '>Short answer</h3>
                    </div>
                    <Link to="/addQuestion" className='w-fit px-[10px] py-[2px] text-center border border-gray-300 rounded-lg'>
                        Add Field</Link>
                </div>
            </div>
              <button className='next bg-[#7050EF] w-[20%] self-center 
              rounded-xl text-white h-[10%] text-2xl'>Next</button>
        </div>
        
    </div>
  )
}

export default CreateFrom