import React, { useState, useContext } from 'react';

import { pokemonContext } from '../../context/DataContext';

const Modal = (props) => {
  const { openForm, setOpenForm, nickName, name, setNickName, addItemsHandler } = useContext(pokemonContext);
  const { pokemons } = props;

  const processData = pokemons[0] || {};
  const CheckedName = (e, person) => {
    const filterName = name.filter((names) => names.nickName !== person.nickName);
    console.log(filterName);
    setNickName(e.target.value);
  };

  return (
    <div>
      {openForm ? (
        <>
          <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none '>
            <div className='relative w-auto my-6 mx-auto max-w-3xl '>
              {/*content*/}
              <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none px-5'>
                {/*body*/}
                <div className='relative p-6 flex-auto'>
                  <p className='my-4 text-blueGray-500 text-lg leading-relaxed'>Wow You Catch {processData.name}..</p>
                  <p className='my-4 text-blueGray-500 text-lg leading-relaxed'>Give a Wild Name !!</p>
                  <input
                    value={nickName}
                    // onChange={(e) => setNickName(e.target.value)}
                    onChange={CheckedName}
                    type='text'
                    placeholder='Give The Nickname...'
                    className='px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full'
                  />
                </div>
                {/*footer*/}
                <div className='flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b'>
                  <button
                    className='text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                    type='button'
                    onClick={() => setOpenForm(false)}
                  >
                    Release
                  </button>
                  <button
                    onClick={() => addItemsHandler(processData)}
                    className='bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                    type='button'
                  >
                    Catch
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
        </>
      ) : null}
    </div>
  );
};

export default Modal;
