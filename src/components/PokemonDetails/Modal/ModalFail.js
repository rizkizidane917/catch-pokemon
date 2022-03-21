import React, { useContext } from 'react';
import { pokemonContext } from '../../../context/DataContext';
import PokeBall from '../../../assets/pokeBall.png';
import Button from '../../../element/button/index';
const ModalFail = (props) => {
  const { openFailForm, setOpenFailForm } = useContext(pokemonContext);
  return (
    <div>
      {openFailForm ? (
        <>
          <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none '>
            <div className='relative w-auto my-6 mx-auto max-w-3xl '>
              {/*content*/}
              <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none px-5'>
                {/*body*/}
                <div className='relative p-9 flex-auto text-center'>
                  <img src={PokeBall} className='w-[40px] h-[40px] mx-auto animate-bounce' />
                  <p className='my-4 text-blueGray-500 text-lg leading-relaxed'>Opps Your Pokemon Run...</p>
                  <Button isSmall onClick={() => setOpenFailForm(false)}>
                    Release
                  </Button>
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

export default ModalFail;
