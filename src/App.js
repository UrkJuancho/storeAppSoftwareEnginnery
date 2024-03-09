
import React,{useEffect} from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import { FiSettings } from "react-icons/fi";
import {Tooltip, TooltipComponent } from '@syncfusion/ej2-react-popups';

import {Navbar, footer, Sidebar, ThemeSetttings } from './components/Index';


import {
    Ecommerse,
    Orders,
    Calendar,
    Stacked,
    Pyramid,
    Customers,
    Kanban,
    Line,
    Area,
    Bar,
    Pie,
    Financial,
    ColorPicker,
    Editor,
    Employees,
    ColorMapping,

} from "./pages";
import "./App.css";


export const App = () =>{ 
    const activeMenu = true; 
    return(
        <BrowserRouter>
            <div className="flex relative dark:bg">
                <div className="fixed right-4 bottom-4" style={{zIndex: 1000}}>
                    <TooltipComponent content="Settings" position="Top">
                        <button
                            type="button"
                            className="text-3xl p-3 hover:drop-shadow hover:bg-light-gray text-white"
                            style={{background: "red", borderRadius: '50%' }}
                        >
                            <FiSettings/>
                        </button>
                    </TooltipComponent>
                </div>
                {activeMenu ? (
                    <div className='w- 72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
                        <Sidebar/>
                    </div>
                ) : (
                    <div className= 'w-0 dark:bg-secondary-dark-bg'>
                        <Sidebar/>
                    </div>
                )}
                <div className={`dark:bg-main-bg bg-main-bg main-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`}>
                <div>
                <Navbar/>
                </div>
                {/*----------------------- */}
               <div>
                <Routes>
                    {/*dashBoard */}
                    <Route path="/" element = {< Ecommerse/>}/>
                    <Route path="/ecommerse" element = {< Ecommerse/>}/>


                    {/* pages */}
                     <Route path="/orders" element = {< Orders/>}/>
                     <Route path="/employees" element = {< Employees/>}/>
                     <Route path="/customers" element = {< Customers/>}/>
                    


                    {/*Apss */}
                     <Route path="/kanban" element = {< Kanban/>}/>
                     <Route path="/editor" element = {< Editor/>}/>
                     <Route path="/calendar" element = {< Calendar/>}/>
                     <Route path="/color-picker" element = {< ColorPicker/>}/>
                     

                    {/*graficos */}
                     <Route path="/line" element = {< Line/>}/>
                     <Route path="/area" element = {< Area/>}/>
                     <Route path="/bar" element = {< Bar/>}/>
                     <Route path="/pie" element = {< Pie/>}/>
                     <Route path="/financial" element = {< Financial/>}/>
                     <Route path="/color-mapping" element = {< ColorMapping/>}/>
                     <Route path="/pyramid" element = {< Pyramid/>}/>
                     <Route path="/staked" element = {< Stacked/>}/>
                    
                    
                </Routes>
               </div> 
            </div>
        </div>
        </BrowserRouter>
    );
};  
