import { Console } from "console";
import { access, constants, copyFile, mkdir } from "fs";
import { readdir } from "fs/promises";
import { dirname, join } from "path";

const copy = async () => {
  const folder = new URL("files/", import.meta.url);
  const destination = new URL("files_copy/", import.meta.url);

  await mkdir(destination, { recursive: false }, (err) => {
    if (err) throw new Error("FS operation failed");
  });
  const files = await readdir(folder);
  for (const file of files) {
    await copyFile(new URL(file, folder), new URL(file, destination), (err) => {
      if (err) console.log(err);
    });
  }
};

copy();
