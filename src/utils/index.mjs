import "dotenv/config";
import * as fs from "fs";

const getFonts = async () => {
  const API_KEY = process.env.NEXT_PUBLIC_FONT_API_KEY;

  const response = await fetch(
    `https://www.googleapis.com/webfonts/v1/webfonts?key=${API_KEY}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  const data = await response.json();
  return data;
};

const fontList = (obj) => {
  const fonts = [];

  obj.items.forEach(({ family, variants }) => {
    fonts.push({ family, variants });
  });

  return fonts;
};

const saveFonts = async () => {
  const fonts = await getFonts();
  const fontsListed = fontList(fonts);

  fs.writeFile(
    "./src/app/dev/fonts/fontList.json",
    JSON.stringify(fontsListed),
    function (err) {
      if (err) throw err;
      console.log("Saved!");
    },
  );
};

saveFonts();

export { fontList, getFonts, saveFonts };
