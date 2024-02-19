import { useState } from "react";
import { FaUpload } from "react-icons/fa";
import { FaFilePdf, FaImage, FaTimes } from "react-icons/fa";
import toaster from "@/utils/toaster";
import { BYTES } from "@/data/dynamic/Bytes";
import { readFileAsBase64, compress } from "@/utils/convert";

const getSize = (maxSize) => BYTES[maxSize[1]] * maxSize[0];
const getType = (types) => "." + types.join(",.");

const Upload = ({ field, user, setUser, text, maxSize, types, required }) => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleInput = async (e) => {
    setUploading(true);
    const blob = await compress(e.target.files[0]);
    if (blob.size > getSize(maxSize)) {
      toaster(`File too big, exceeds ${maxSize[0]} ${maxSize[1]}!`, "error");
      return;
    }
    setFile(blob);
    const base64 = await readFileAsBase64(blob);
    setUser({ ...user, [field]: base64 });
    setUploading(false);
  };

  return (
    <div className="flex flex-col mb-4 font-workSans">
      <p className="mb-2 font-normal">
        {text}
        {required && <span className="text-design-orange">*</span>}
      </p>
      <div className="flex items-center w-full flex-col" data-cy="upload">
        {!file && (
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-fit border-2 border-gray-300 rounded-lg cursor-pointer bg-design-white hover:bg-design-beige/50"
          >
            <div className="flex flex-col items-center justify-center pt-4">
              <FaUpload className="text-3xl mb-2 text-design-green-light" />
              <p className="text-sm font-normal text-gray-500">
                Upload From My Computer
              </p>
            </div>
            <div className="w-full" data-cy="upload-input">
              <input
                id="dropzone-file"
                onChange={handleInput}
                type="file"
                className="hidden"
                accept={getType(types)}
              />
            </div>
          </label>
        )}
        {file && (
          <div
            className="flex items-center justify-between w-full my-2 bg-design-beige px-2 py-2"
            data-cy="upload-success"
          >
            <div className="flex items-center">
              {file.type.split("/")[0] === "image" ? (
                <FaImage className="text-xl mr-2" />
              ) : (
                <FaFilePdf className="text-xl mr-2" />
              )}
              {file.name}
            </div>
            <FaTimes
              className="text-gray-500 hover:cursor-pointer hover:text-black"
              onClick={() => setFile(null)}
              data-cy="upload-cancel"
            />
          </div>
        )}
      </div>
      {uploading && "UPLOADING ..."}
    </div>
  );
};

export default Upload;
