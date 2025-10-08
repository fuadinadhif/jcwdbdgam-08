import fs from "node:fs/promises";

interface ICashflow {
  id: string;
  title: string;
  nominal: number;
  category: string;
  date: Date;
}

export async function readData() {
  const dataJSON = await fs.readFile("data.json", "utf-8");
  const data = JSON.parse(dataJSON);

  return data;
}

export async function writeData(cashflow: ICashflow[]) {
  await fs.writeFile("data.json", JSON.stringify(cashflow, null, 2));
}
