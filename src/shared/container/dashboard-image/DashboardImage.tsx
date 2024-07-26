import React from 'react';
import { Image, Space } from 'antd';
import {
  DownloadOutlined,
  RotateLeftOutlined,
  RotateRightOutlined,
  SwapOutlined,
  UndoOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
} from '@ant-design/icons';

interface DashboardImageProps {
  src: string | string[] | undefined;
  width?: number;
  height?: number;
}

const onDownload = (imgUrl: string) => {
  fetch(imgUrl)
    .then((response) => response.blob())
    .then((blob) => {
      const url = URL.createObjectURL(new Blob([blob]));
      const link = document.createElement('a');
      link.href = url;
      link.download = 'image.png';
      document.body.appendChild(link);
      link.click();
      URL.revokeObjectURL(url);
      link.remove();
    });
};

const DashboardImage: React.FC<DashboardImageProps> = ({
  src,
  width = 200,
  height = 200,
}) => {
  const isMultipleImages = Array.isArray(src) && src.length > 1;

  const renderImage = (url: string | undefined, index?: number) => {
    if (!url) return null;

    return (
      <Image
        key={index}
        src={url}
        width={width}
        height={height}
        style={{ marginRight: '8px' }}
        preview={{
          toolbarRender: (
            _,
            {
              image: { url: imageUrl },
              transform: { scale },
              actions: {
                onFlipY,
                onFlipX,
                onRotateLeft,
                onRotateRight,
                onZoomOut,
                onZoomIn,
                onReset,
              },
            },
          ) => (
            <Space size={12} className="toolbar-wrapper">
              <DownloadOutlined onClick={() => onDownload(imageUrl)} />
              <SwapOutlined rotate={90} onClick={onFlipY} />
              <SwapOutlined onClick={onFlipX} />
              <RotateLeftOutlined onClick={onRotateLeft} />
              <RotateRightOutlined onClick={onRotateRight} />
              <ZoomOutOutlined disabled={scale === 1} onClick={onZoomOut} />
              <ZoomInOutlined disabled={scale === 50} onClick={onZoomIn} />
              <UndoOutlined onClick={onReset} />
            </Space>
          ),
        }}
      />
    );
  };

  if (!src) return null;

  return isMultipleImages ? (
    <Image.PreviewGroup>
      {(src).map((url, index) => renderImage(url, index))}
    </Image.PreviewGroup>
  ) : (
    renderImage(Array.isArray(src) ? src[0] : src)
  );
};

export default DashboardImage;
