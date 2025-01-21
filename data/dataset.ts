// data/dataset.ts
import { RiFolder6Line } from "react-icons/ri";

// Define types for dataset
export type DatasetItem = {
  icon: string; // React component for icon
  name: string;
  size: string;
  type: string;
  modifiedOn: string;
};

export const dataset: DatasetItem[] = [
  {
    icon: "/icons/Custom.png",
    name: "Folder 1",
    size: "105.88 GB",
    type: "Folder",
    modifiedOn: "Nov 29, 2024 3:00 pm",
  },
  {
    icon: "/icons/Image.png",
    name: "Image20158-5589-5104845-4421",
    size: "105.88 GB",
    type: "PNG",
    modifiedOn: "Nov 29, 2024 3:00 pm",
  },
  {
    icon: "/icons/Custom.png",
    name: "Folder 1",
    size: "105.88 GB",
    type: "Folder",
    modifiedOn: "Nov 29, 2024 3:00 pm",
  },
  {
    icon: "/icons/Image.png",
    name: "Image20158-5589-5104845-4421",
    size: "105.88 GB",
    type: "PNG",
    modifiedOn: "Nov 29, 2024 3:00 pm",
  },
  {
    icon: "/icons/Image.png",
    name: "Image20158-5589-5104845-4421",
    size: "105.88 GB",
    type: "PNG",
    modifiedOn: "Nov 29, 2024 3:00 pm",
  },
];
