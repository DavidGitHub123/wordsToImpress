import {
  getNamesOfLists,
  defaultList,
  addOneWordToList,
  _resetDefaultList,
  makeNewList,
} from "./listHelpers";

import data from "../data";

export default async function init() {
  const _DEV_MODE = false;
  const _RESET_DEV_LIST = true;

  const namesOfLists = await getNamesOfLists();

  if (!namesOfLists.includes(defaultList)) {
    await makeNewList(defaultList);
  }

  if (_DEV_MODE) {
    if (_RESET_DEV_LIST) {
      await _resetDefaultList();

      for (const wordData of data.slice(0, 50)) {
        await addOneWordToList(defaultList, wordData.Word);
      }
    }
    return;
  }
}
