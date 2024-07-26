import React, { useState } from 'react';
import { Button, message } from 'antd';

type IDownloadButton = {
  downloadUrl: string;
  fileName?: string;
};

const DownloadButton = ({
  downloadUrl,
  fileName = 'download',
}: IDownloadButton) => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleDownload = async () => {
    setLoading(true);

    try {
      const response = await fetch(downloadUrl);

      if (!response.ok) {
        throw new Error('Download failed');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      link.parentNode?.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download error:', error);
      message.error('Failed to download file');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button onClick={handleDownload} loading={loading}>
      Download
    </Button>
  );
};

export default DownloadButton;
