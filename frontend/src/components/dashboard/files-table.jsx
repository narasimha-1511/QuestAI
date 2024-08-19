import React from "react";
import { formatUploadTime } from "../../utils/const-functions";
import { useFiles } from "../../context/files-context";

const FilesTabe = ({ files, handleEditTranscript }) => {
  const { removeFile } = useFiles();

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-lg font-semibold mb-4">Your Files</h2>
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-gray-200 rounded-2xl">
            <th className="px-4 py-4 text-sm font-medium text-gray-700 rounded-s-xl">
              No.
            </th>
            <th className="text-sm font-medium text-gray-700">Name</th>
            <th className="text-sm font-medium text-gray-700">
              Upload Date & Time
            </th>
            <th className="text-sm font-medium text-gray-700 rounded-e-xl">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {files.map((file, index) => (
            <FileRow
              key={file._id}
              file={file}
              index={index}
              handleEditTranscript={handleEditTranscript}
              removeFile={removeFile}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const FileRow = ({ file, index, handleEditTranscript, removeFile }) => (
  <tr className="border-b ml-4">
    <td className="px-4 py-4 text-sm text-gray-700">{index + 1}</td>
    <td className="text-sm text-gray-700">{file.fileName}</td>
    <td className="text-sm text-gray-700">
      {formatUploadTime(file.createdAt)}
    </td>
    <td className="px-4 py-4">
      <button
        className="text-blue-500 hover:underline mr-4"
        onClick={() => handleEditTranscript(file.fileDescription, file._id)}
      >
        View
      </button>
      <button
        className="text-red-500 hover:underline"
        onClick={() => removeFile(file._id)}
      >
        Delete
      </button>
    </td>
  </tr>
);

export default FilesTabe;
