"use client";
import { Logs } from "./page";

type ButtonProps = {
  setData: () => Promise<void>;
  getData: () => Promise<Logs>;
  updateData: (id: number) => Promise<void>;
  deleteData: (id: number) => Promise<void>;
  data: Logs;
};

const Button: React.FunctionComponent<ButtonProps> = ({
  setData,
  getData,
  updateData,
  deleteData,
  data,
}) => {
  return (
    <div>
      <button
        onClick={async () => {
          await setData();
        }}
      >
        SET TEST DATA - C
      </button>
      <button
        onClick={async () => {
          await getData();
        }}
      >
        READ TEST DATA - R
      </button>
      <button
        onClick={async () => {
          await updateData(1);
        }}
      >
        UPDATE TEST DATA U
      </button>
      <button
        onClick={async () => {
          await deleteData(1);
        }}
      >
        DELETE TEST DATA D
      </button>
    </div>
  );
};

export default Button;
