import { storage } from 'app/firebase';
import { ref, listAll, getDownloadURL } from 'firebase/storage';

export const getUrlFilesList = async (path: string) => {
  const listRef = ref(storage, path);
  const list = await listAll(listRef);
  const res = await Promise.all(list.items.map((url) => getDownloadURL(url)));
  return res;
};