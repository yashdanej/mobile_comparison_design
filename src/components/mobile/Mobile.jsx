import React, { useEffect, useState } from 'react';
import './mobile.css';
import PlusIcon from './PlusIcon';
import AddMobileModal from './AddMobileModal';
import MobileCard from './MobileCard';
import { motion, AnimatePresence } from 'framer-motion';
import MobileTable from './table/MobileTable';

const Mobile = () => {
  const [mobile, setMobile] = useState([]);
  const [open, setOpen] = useState(false);

  const addMobile = (item) => {
    setMobile((prevMobiles) => [...prevMobiles, item]); // Update state immutably
  };

  const removeMobile = (item) => {
    const updatedMobiles = mobile.filter((mob) => mob.name !== item.name);
    setMobile(updatedMobiles); // Update state with the filtered array
  };

  return (
    <div className='m-auto max-w-screen-lg overflow-auto py-28'>
      <div className="flex flex-row justify-center">
        <div className="md:flex md:flex-row">
          <AnimatePresence>
            {mobile &&
              mobile.length > 0 &&
              mobile.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                >
                  <MobileCard item={item} key={item.name} from="home" removeMobile={removeMobile} />
                </motion.div>
              ))}
          </AnimatePresence>
        </div>
        {
          mobile.length !== 3 &&
          <div className="rounded-3xl w-full md:w-1/3 min-h-56 max-h-full inset-x-0 border border-gray-100 bg-white/80 shadow backdrop-blur-lg">
            <div className="container">
              <div className="flex justify-center items-center h-full">
                <button className="Btn" onClick={() => setOpen(true)}>
                  <div className="sign">
                    <PlusIcon />
                  </div>
                  <div className="text">Add</div>
                </button>
              </div>
            </div>
          </div>
        }

        <AddMobileModal addMobile={addMobile} mobile={mobile} open={open} setOpen={setOpen} />
      </div>
      {
        mobile.length > 0 &&
        <div className='my-10'>
          <MobileTable mobile={mobile} />
        </div>
      }
      <p className='text-red-500 text-[12px] font-bold my-2'>*If you want to add more than 3 mobile to comparison, comment like this*</p>
      <div class="relative rounded-lg bg-slate-900 p-2">
        <div class="relative flex text-center">
          <div class="flex pl-3.5 pt-3">
            <svg viewBox="0 0 24 24" fill="currentColor" class="-ml-0.5 mr-1.5 h-3 w-3 text-red-500/20">
              <circle r="12" cy="12" cx="12"></circle>
            </svg>
            <svg viewBox="0 0 24 24" fill="currentColor" class="-ml-0.75 mr-1.5 h-3 w-3 text-yellow-500/20">
              <circle r="12" cy="12" cx="12"></circle>
            </svg>
            <svg viewBox="0 0 24 24" fill="currentColor" class="-ml-0.75 mr-1.5 h-3 w-3 text-green-500/20">
              <circle r="12" cy="12" cx="12"></circle>
            </svg>
          </div>
          <span class="absolute inset-x-0 top-2 text-xs text-slate-500">Mobile.jsx</span>
        </div>
        <div class="mt-5 space-y-1.5 px-5 pb-10">
          <p class="mt-4 font-mono text-xs font-normal tracking-wide text-violet-400">
            <span class="text-slate-500">{"{/* {"}</span><br />
            <span class="text-blue-400">mobile.length !== 3</span><span class="text-slate-500"> && {"*/}"}</span>
          </p>
          <p class="ml-3 font-mono text-xs font-normal tracking-wide text-violet-400">
            <span class="text-slate-500">&lt;</span><span class="text-pink-400">div</span><span class="text-slate-500"> className=</span>
            <span class="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10"><span class="relative text-blue-400">"rounded-3xl w-full md:w-1/3 min-h-56 max-h-full inset-x-0 border border-gray-100 bg-white/80 shadow backdrop-blur-lg"</span></span>
            <span class="text-slate-500">&gt;</span>
          </p>
          <p class="ml-6 font-mono text-xs font-normal tracking-wide text-violet-400">
            <span class="text-slate-500">&lt;</span><span class="text-pink-400">div</span><span class="text-slate-500"> className=</span>
            <span class="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10"><span class="relative text-blue-400">"container"</span></span><span class="text-slate-500">&gt;</span>
          </p>
          <p class="ml-9 font-mono text-xs font-normal tracking-wide text-violet-400">
            <span class="text-slate-500">&lt;</span><span class="text-pink-400">div</span><span class="text-slate-500"> className=</span>
            <span class="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10"><span class="relative text-blue-400">"flex justify-center items-center h-full"</span></span><span class="text-slate-500">&gt;</span>
          </p>
          <p class="ml-12 font-mono text-xs font-normal tracking-wide text-violet-400">
            <span class="text-slate-500">&lt;</span><span class="text-pink-400">button</span><span class="text-slate-500"> className=</span>
            <span class="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10"><span class="relative text-blue-400">"Btn"</span></span><span class="text-slate-500"> onClick=</span>
            <span class="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10"><span class="relative text-blue-400">{"() => setOpen(true)"}</span></span><span class="text-slate-500">&gt;</span>
          </p>
          <p class="ml-15 font-mono text-xs font-normal tracking-wide text-violet-400">
            <span class="text-slate-500">&lt;</span><span class="text-pink-400">div</span><span class="text-slate-500"> className=</span>
            <span class="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10"><span class="relative text-blue-400">"sign"</span></span><span class="text-slate-500">&gt;</span>
          </p>
          <p class="ml-18 font-mono text-xs font-normal tracking-wide text-violet-400">
            <span class="text-slate-500">&lt;</span><span class="text-pink-400">PlusIcon</span><span class="text-slate-500"> /&gt;</span>
          </p>
          <p class="ml-15 font-mono text-xs font-normal tracking-wide text-violet-400">
            <span class="text-slate-500">&lt;/</span><span class="text-pink-400">div</span><span class="text-slate-500">&gt;</span>
          </p>
          <p class="ml-15 font-mono text-xs font-normal tracking-wide text-violet-400">
            <span class="text-slate-500">&lt;</span><span class="text-pink-400">div</span><span class="text-slate-500"> className=</span>
            <span class="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10"><span class="relative text-blue-400">"text"</span></span><span class="text-slate-500">&gt;</span>
            <span class="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10"><span class="relative text-blue-400">Add</span></span>
            <span class="text-slate-500">&lt;/</span><span class="text-pink-400">div</span><span class="text-slate-500">&gt;</span>
          </p>
          <p class="ml-12 font-mono text-xs font-normal tracking-wide text-violet-400">
            <span class="text-slate-500">&lt;/</span><span class="text-pink-400">button</span><span class="text-slate-500">&gt;</span>
          </p>
          <p class="ml-9 font-mono text-xs font-normal tracking-wide text-violet-400">
            <span class="text-slate-500">&lt;/</span><span class="text-pink-400">div</span><span class="text-slate-500">&gt;</span>
          </p>
          <p class="ml-6 font-mono text-xs font-normal tracking-wide text-violet-400">
            <span class="text-slate-500">&lt;/</span><span class="text-pink-400">div</span><span class="text-slate-500">&gt;</span>
          </p>
          <p class="ml-3 font-mono text-xs font-normal tracking-wide text-violet-400">
            <span class="text-slate-500">&lt;/</span><span class="text-pink-400">div</span><span class="text-slate-500">&gt;</span>
          </p>
          <p class="ml-3 font-mono text-xs font-normal tracking-wide text-violet-400">
            <span class="text-slate-500">{"{/* }} */"}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
