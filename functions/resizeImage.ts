import functions from 'firebase-functions';

export type Image = {
  fileName: string;
  originalRefPath: string;
};

export const resizeImage = functions.firestore
  .document('images/{imageID}')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  .onCreate((snapShot, context) => {
    const image = snapShot;
    console.log(image);
  });

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function resize(image) {
  // const imageID = image.ref.id;
  // const fileName = image.data.fileName;
  // const filePath = `images/${imageID}/ ${fileName}`;
}
