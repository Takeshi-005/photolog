import Compressor from 'compressorjs';

const compressor = (
  file: File | Blob,
  options: Compressor.Options = {
    quality: 0.6,
    maxWidth: 600,
    maxHeight: 800,
    mimeType: 'image/jpeg'
  }
) => {
  return new Promise<Blob>((resolve, reject) => {
    new Compressor(file, {
      ...options,
      success: result => resolve(result),
      error(err) {
        console.log(err.message);

        return reject(err);
      }
    });
  });
};

export default compressor;
