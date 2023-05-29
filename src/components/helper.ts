import dayjs from "dayjs";
import { ImageAssets } from "assets";

export const getZodiacSign = (dateStr: string) => {
  const date = dayjs(dateStr); // parse the input string into a Dayjs object
  const month = date.month() + 1; // get the month (0-indexed in Dayjs, so add 1)
  const day = date.date(); // get the day of the month

  if ((month == 1 && day <= 20) || (month == 12 && day >= 22)) {
    return ImageAssets.MaKetImage;
  } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
    return ImageAssets.BaoBinhImage;
  } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
    return ImageAssets.SongNguImage;
  } else if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
    return ImageAssets.BachDuongImage;
  } else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
    return ImageAssets.KimNguuImage;
  } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
    return ImageAssets.SongTuImage;
  } else if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) {
    return ImageAssets.CuGiaiImage;
  } else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
    return ImageAssets.SuTuImage;
  } else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
    return ImageAssets.XuNuImage;
  } else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
    return ImageAssets.ThienBinhImage;
  } else if ((month == 10 && day >= 23) || (month == 11 && day <= 22)) {
    return ImageAssets.BoCapImage;
  } else if ((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
    return ImageAssets.NhanMaImage;
  }
};
