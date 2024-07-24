'use client';

import React, { useState } from 'react';
import { Button, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import type { UploadFile } from 'antd/es/upload/interface';

interface ICloudUpload {
  name: string;
  label?: string;
  form: any;
  multipleFile?: boolean;
}

const CloudUpload = ({ name, form, multipleFile = true }: ICloudUpload) => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const handleChange = async ({
    fileList: newFileList,
  }: {
    fileList: UploadFile[];
  }) => {
    // Filter out files larger than 2MB
    const validFiles = newFileList.filter(
      (file) => file.size && file.size <= 2 * 1024 * 1024,
    );

    if (validFiles.length !== newFileList.length) {
      message.error(
        'Some files were removed because they exceed the 2MB limit.',
      );
    }

    setFileList(validFiles);

    if (validFiles.length > 0) {
      const formData = new FormData();
      validFiles.forEach((file) => {
        if (file.originFileObj) {
          formData.append('files', file.originFileObj);
        }
      });

      try {
        const response = await fetch('/api/upload-image', {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) {
          throw new Error('Upload failed');
        }

        const data = await response.json();
        form.setFieldsValue({ [name]: data.urls });
      } catch (error) {
        message.error('Failed to upload files');
      }
    }
  };

  const handleRemove = (file: UploadFile) => {
    const newFileList = fileList.filter((item) => item.uid !== file.uid);
    setFileList(newFileList);

    if (newFileList.length === 0) {
      // If no files are left, clear the form field
      form.setFieldsValue({ [name]: undefined });
    }
  };

  return (
    <Upload
      multiple={multipleFile}
      beforeUpload={() => false}
      onChange={handleChange}
      onRemove={handleRemove}
      fileList={fileList}
      listType="picture"
    >
      <Button icon={<UploadOutlined />}>Unggah</Button>
    </Upload>
  );
};

export default CloudUpload;
