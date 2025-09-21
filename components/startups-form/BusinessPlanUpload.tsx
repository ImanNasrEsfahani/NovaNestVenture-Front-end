import React from 'react';
import FileUpload from 'public/static/logos/FileUpload';

interface Props {
  title: string;
  yesLabel: string;
  noLabel: string;
  uploadDocumentLabel: string;
  chooseFileLabel: string;
  fileCounter: boolean;
  onFileCounterChange: (name: string) => void;
  onFileChange: (file: any) => void;
}

const BusinessPlanUpload: React.FC<Props> = ({
  title,
  yesLabel,
  noLabel,
  uploadDocumentLabel,
  chooseFileLabel,
  fileCounter,
  onFileCounterChange,
  onFileChange
}) => {
  return (
    <div className='col-span-1 h-auto flex flex-col gap-2 items-center'>
      <div className='w-full h-auto flex flex-row justify-start items-center mt-2 mb-1'>
        <p className='text-black font-medium font-barlow text-lg leading-[19px]'>{title}</p>
      </div>
      
      <div className='w-full h-auto bg-whiteGold drop-shadow-md px-2 py-4'>
        <div className='w-full h-auto flex flex-row items-center justify-around cursor-pointer'>
          <div className='size-auto flex flex-row gap-2 items-center' onClick={() => onFileCounterChange("business")}>
            <div className='border-2 rounded-full border-primary p-1'>
              <div
                className={`size-3 rounded-full transition-all ${
                  fileCounter ? "bg-primary" : "bg-whiteGold"
                }`}
              />
            </div>
            <p className='text-grayCheckBox font-barlow font-medium text-lg leading-[18px]'>{yesLabel}</p>
          </div>
          
          <div className='size-auto flex flex-row gap-2 items-center' onClick={() => onFileCounterChange("business")}>
            <div className='border-2 rounded-full border-primary p-1'>
              <div
                className={`size-3 rounded-full transition-all ${
                  !fileCounter ? "bg-primary" : "bg-whiteGold"
                }`}
              />
            </div>
            <p className='text-grayCheckBox font-barlow font-medium text-lg leading-[18px]'>{noLabel}</p>
          </div>
        </div>
      </div>

      {fileCounter ? (
        <div className='w-full h-auto'>
          <div className='w-full h-auto flex flex-col items-center gap-2'>
            <div className='size-auto'>
              <p className='text-grayLabel font-medium text-xs md:text-lg 2xl:text-2xl md:leading-[14px]'>{uploadDocumentLabel}</p>
            </div>
            <div className='w-full md:w-1/2 h-auto bg-whiteGold drop-shadow-md flex justify-center relative overflow-hidden'>
              <label className="cursor-pointer relative size-12 flex items-center justify-center rounded-full hover:bg-gray-200 transition">
                <input
                  type="file"
                  name='businessPlanFile'
                  className="absolute inset-0 size-full opacity-0 cursor-pointer"
                  onChange={(e) => {
                    onFileChange(e.target.files ? e.target.files[0] : '')
                  }}
                />
                <FileUpload
                  name="businessPlanFile"
                  label={chooseFileLabel}
                  onChange={onFileChange}
                />
              </label>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default BusinessPlanUpload;