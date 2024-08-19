import React from "react";
import UploadCloud from "../../assets/icons/uploadCloud.svg";

const UploadFiles = () => {
  return (
    <div className="flex h-[45vh] w-full px-16 justify-center items-center bg-white rounded-lg border border-gray-200 shadow-lg">
      <div className="flex flex-col justify-center items-center gap-3">
        <img src={UploadCloud} alt="uploadSymbol" className="w-16 h-16" />
        <p className="text-xl font-thin">
          Select a file or drag and drop here (Podcast Media or Transcription
          Text)
        </p>
        <p className="text-gray-300 font-light">
          MP4, MOV, MP3, WAV, PDF, DOCX or TXT file{" "}
        </p>
        <button className="bg-transparent border border-purple-500 text-purple-600 rounded-full font-semibold px-4 py-2 rounded-lg">
          Select File
        </button>
      </div>
    </div>
  );
};

export default UploadFiles;
