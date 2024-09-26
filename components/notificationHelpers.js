import AsyncStorage from "@react-native-async-storage/async-storage";

const _NOTIF_NAMES = "NOTIFS";

const makeNotifsItemIfItDoesntExist = async () => {
  const keys = await AsyncStorage.getAllKeys();
  if (keys.includes(_NOTIF_NAMES)) {
    return;
  }
  await AsyncStorage.setItem(_NOTIF_NAMES, JSON.stringify([]));
};

const doesNotifExist = async (notif) => {
  const notifs = JSON.parse(await AsyncStorage.getItem(_NOTIF_NAMES));
  return notifs.includes(notif);
};

const addNotif = async (notif) => {
  const notifs = JSON.parse(await AsyncStorage.getItem(_NOTIF_NAMES));
  notifs.push(notif);
  await AsyncStorage.setItem(_NOTIF_NAMES, notifs);
};

const removeNotif = async (notif) => {
  const notifs = JSON.parse(await AsyncStorage.getItem(_NOTIF_NAMES));
  notifs.filter((el) => el !== notif);
  await AsyncStorage.setItem(_NOTIF_NAMES, notifs);
};

export { makeNotifsItemIfItDoesntExist, doesNotifExist, addNotif, removeNotif };
