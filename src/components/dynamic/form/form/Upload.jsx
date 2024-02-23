import { useState } from "react";
import { FaUpload } from "react-icons/fa";
import { FaFilePdf, FaImage, FaTimes, FaEye } from "react-icons/fa";
import toaster from "@/utils/toaster";
import { BYTES } from "@/data/dynamic/Bytes";
import { readFileAsBase64, compress } from "@/utils/convert";
import Modal from "@/components/dynamic/admin/dashboards/dashboard/Modal";
const getSize = (maxSize) => BYTES[maxSize[1]] * maxSize[0];
const getType = (types) => "." + types.join(",.");

const Upload = ({ field, user, setUser, text, maxSize, types, required }) => {
  const [file, setFile] = useState(
    user[field] && user[field].startsWith("data:image")
      ? { src: user[field], type: "image", title: `${user.name}.png` }
      : null
  );
  const [uploading, setUploading] = useState(false);
  const [showModal, setShowModal] = useState(null);

  const handleInput = async (e) => {
    setUploading(true);
    const blob = await compress(e.target.files[0]);
    if (blob.size > getSize(maxSize)) {
      toaster(`File too big, exceeds ${maxSize[0]} ${maxSize[1]}!`, "error");
      return;
    }
    const base64 = await readFileAsBase64(blob);
    setUser({ ...user, [field]: base64 });
    setFile({
      src: base64,
      type: blob.type,
      title: blob.name,
    });
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
              {file.title}
            </div>
            <div className="flex flex-row">
              {file.type.split("/")[0] === "image" && (
                <FaEye
                  onClick={() => setShowModal(true)}
                  className="text-gray-500 hover:cursor-pointer hover:text-gray-800 mr-2"
                />
              )}

              <FaTimes
                className="text-gray-500 hover:cursor-pointer hover:text-red-600"
                onClick={() => setFile(null)}
                data-cy="upload-cancel"
              />
            </div>
          </div>
        )}
        {showModal && <Modal data={file} setModal={setShowModal} />}
      </div>
      {uploading && "UPLOADING ..."}
    </div>
  );
};

export default Upload;
