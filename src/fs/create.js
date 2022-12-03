import { access, constants, writeFile } from "fs";

const create = async () => {
  const file = new URL("files/fresh.txt", import.meta.url);

  access(file, constants.F_OK, (err) => {
    if (err) {
      // create file and write
      writeFile(file, "I am fresh and young", (err) => {
        if (err) console.log(err);
      });
    } else {
      throw new Error("FS operation failed");
    }
  });
};

await create();
