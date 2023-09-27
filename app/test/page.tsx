import styles from "./page.module.css";
import prisma from "@/utils/prismaClient";
import Button from "./Button";
import { Prisma } from "@prisma/client";

//server "action" functions

export type Logs = {
  id?: number;
  title: string;
  file_name: string;
  line_number: number;
}[];

//CREATE
async function setTestLog(): Promise<void> {
  "use server";
  await prisma.logs.create({
    data: {
      title: "test",
      file_name: "test file",
      line_number: 9,
    },
  });
}

//READ
async function getTestLogs(): Promise<Logs> {
  "use server";
  const logs = await prisma.logs.findMany({});
  return logs;
}

//UPDATE - using upsert here
async function updateTestLogs(id: number): Promise<void> {
  "use server";
  await prisma.logs.upsert({
    where: {
      id,
    },
    update: {
      title: "updated",
    },
    create: {
      title: "this did not exist before",
      file_name: "still page.tsx",
      line_number: 44,
    },
  });
}

//DELETE- just a single log
async function deleteTestLog(id: number): Promise<void> {
  "use server";
  try {
    await prisma.logs.delete({
      where: {
        id,
      },
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      console.log("id does not exist", error.meta);
    }
  }
}

export default async function Test(): Promise<any> {
  const data = await getTestLogs();
  return (
    <>
      <div className={styles.wrap}>
        <h1>TEST PAGE</h1>
        <Button
          data={data}
          setData={setTestLog}
          getData={getTestLogs}
          updateData={updateTestLogs}
          deleteData={deleteTestLog}
        />
      </div>
    </>
  );
}
