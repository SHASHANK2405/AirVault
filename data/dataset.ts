// data/dataset.ts
import { RiFolder6Line } from "react-icons/ri";

// Define types for dataset
export type DatasetItem = {
  id: number;
  icon: string; // React component for icon
  name: string;
  size: string;
  type: string;
  modifiedOn: string;
  SharedBy: string;
};

export const dataset: DatasetItem[] = [
  {
    id: 1,
    icon: "/icons/Custom.png",
    name: "Folder 1",
    size: "105.88 GB",
    type: "Folder",
    modifiedOn: "Nov 29, 2024 3:00 pm",
    SharedBy: "Bishal Bhattacharya",
  },
  {
    id: 2,
    icon: "/icons/Image.png",
    name: "Image20158-5589-5104845-4421",
    size: "105.88 GB",
    type: "PNG",
    modifiedOn: "Nov 29, 2024 3:00 pm",
    SharedBy: "rituraj",
  },
  {
    id: 3,
    icon: "/icons/Custom.png",
    name: "Folder 1",
    size: "105.88 GB",
    type: "Folder",
    modifiedOn: "Nov 29, 2024 3:00 pm",
    SharedBy: "Rohit Chowik",
  },
  {
    id: 4,
    icon: "/icons/Image.png",
    name: "Image20158-5589-5104845-4421",
    size: "105.88 GB",
    type: "PNG",
    modifiedOn: "Nov 29, 2024 3:00 pm",
    SharedBy: "Rituraj Kumar ",
  },
  {
    id: 5,
    icon: "/icons/Image.png",
    name: "Image20158-5589-5104845-4421",
    size: "105.88 GB",
    type: "PNG",
    modifiedOn: "Nov 29, 2024 3:00 pm",
    SharedBy: "Ashutosh Mishra",
  },
];
