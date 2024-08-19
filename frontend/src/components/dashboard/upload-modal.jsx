import React, { useState } from "react";
import Modal from "../shared/Modal";
import Button from "../shared/Button";
import Spinner from "../shared/Spinner";
import { useFiles } from "../../context/files-context";
import { useProjectsContext } from "../../context/projects-context";

const UploadModal = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [transcript, setTranscript] = useState("");
  const [uploadError, setUploadError] = useState("");
  const { createFile, loading } = useFiles();
  const { increaseEpisodeCount, projectId } = useProjectsContext();

  const handleUpload = async () => {
    if (!name || !transcript) {
      setUploadError("Name and transcript are required");
      return;
    }
    setUploadError("");
    try {
      await createFile(name, transcript);
      increaseEpisodeCount(projectId);
      onClose();
    } catch (error) {
      console.error(error);
    } finally {
      onClose();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Upload Your Transcript">
      <div className="flex flex-col gap-4">
        <div>
          <label className="text-gray-400">Name</label>
          <input
            type="text"
            id="file-upload"
            className="w-full p-2 border-2 rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label className="text-gray-400">Transcript</label>
          <textarea
            className="w-full p-2 border-2 rounded-md"
            value={transcript}
            onChange={(e) => setTranscript(e.target.value)}
          />
        </div>
      </div>
      {uploadError && <p className="text-red-500">{uploadError}</p>}
      <div className="flex justify-end">
        <Button
          className="text-white bg-black hover:bg-black/80 flex items-center"
          onClick={handleUpload}
        >
          {loading ? <Spinner className="w-4 h-4 mr-2" /> : "Upload"}
        </Button>
      </div>
    </Modal>
  );
};

export default UploadModal;
