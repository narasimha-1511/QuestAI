import React, { useEffect, useState , useRef, useCallback } from 'react'
import UploadModal from '../components/dashboard/upload-modal';
import UploadFiles from '../components/dashboard/no-uploads';
import FilesTable from '../components/dashboard/files-table';
import Podcasts from '../components/dashboard/podcasts';
import BackIcon from '../assets/icons/leftArrow.svg';
import { useFiles } from '../context/files-context';

const  AddYourPodcast = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [editTranscript, setEditTranscript] = useState(false);
  const [TransscriptContent, setTransscriptContent] = useState("");
  const [fileId, setFileId] = useState(null);
  const [isSaved, setIsSaved] = useState(false);
  const { files , updateFile ,projectId  } = useFiles();

  useEffect(() => {
    console.log(" chasges e fd ffiles", files)
    console.log("projectId", projectId)
  },[files])

  const handleEditTranscript = useCallback((fileDescription , fileId) => {
    setEditTranscript(true);
    setTransscriptContent(fileDescription);
    setFileId(fileId);
  },[])

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleSave = async () => {
    try{
      await updateFile(fileId ,  TransscriptContent)
      setIsSaved(true);
    }catch(error){
      console.error(error);
    }
  }

  useEffect(() => {
    if(isSaved){
    }
  },[isSaved])

  return (
    <>
    {editTranscript ? (<div className='flex flex-col w-full h-full px-16 p-6'>
      <div className='flex justify-between items-center'>
        <div className='flex items-center'>
          <img src={BackIcon} alt="back" className='w-8 h-8 cursor-pointer mr-3' onClick={() => setEditTranscript(false)} />
          <h1 className="text-3xl font-bold">Edit Transcript</h1>
        </div>
        <div className='flex items-center gap-4'>
          {isSaved ?
            <button className='bg-black text-white px-4 py-2 rounded-md w-[100px]' onClick={() => setIsSaved(false)}>Edit</button>
           : 
           (<>
            <button className='bg-transparent text-[#E01919] border border-[#E01919] px-4 py-2 font-bold rounded-md w-[100px]' onClick={() => {setEditTranscript(false); setTransscriptContent("")}}>Discard</button> 
            <button className='bg-black text-white px-4 py-2 rounded-md w-[100px]' onClick={() => handleSave()}>Save</button>
           </>)
          }
        </div>
      </div>
      <div className='px-8 mt-8 bg-white w-full h-[65vh] rounded-lg shadow-lg flex justify-center items-center'>
        <textarea readOnly={isSaved} className={`w-full h-[60vh] py-2 resize-none outline-none`} value={TransscriptContent} onChange={(e) => setTransscriptContent(e.target.value)}>
        </textarea>
      </div>
    </div>) : (
    <div className="flex flex-col w-full h-full px-16 p-6">
        <Podcasts handleModal={handleModal} />
        {files == null || files.length == 0 ? <UploadFiles /> : <FilesTable files={files} handleEditTranscript={handleEditTranscript}/>}
      <UploadModal isOpen={isOpen} onClose={handleModal} />
    </div>
    )}
    </>
  );
};



export default AddYourPodcast;