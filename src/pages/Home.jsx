import React, { useState, useMemo } from "react";
import { IndiaAgroData } from "../shared/data";
import TableComponent from "../components/Home/TableComponent";
import { processDataForTable } from "../utils/helper";

const PAGE_SIZE = 10;

const Home = () => {
  const { yearProcessedData, cropProcessedData } =
    processDataForTable(IndiaAgroData);

  const [page1, setPage1] = useState(1);
  const [page2, setPage2] = useState(1);

  const paginatedYearData = useMemo(() => {
    const startIndex = (page1 - 1) * PAGE_SIZE;
    return yearProcessedData.slice(startIndex, startIndex + PAGE_SIZE);
  }, [page1, yearProcessedData]);

  const paginatedCropData = useMemo(() => {
    const startIndex = (page2 - 1) * PAGE_SIZE;
    return cropProcessedData.slice(startIndex, startIndex + PAGE_SIZE);
  }, [page2, cropProcessedData]);

  return (
    <div>
      <div>
        <TableComponent
          data={paginatedYearData}
          columns={[
            "Year",
            "Crop with Maximum Production",
            "Maximum Production (Tonnes)",
            "Crop with Minimum Production",
            "Minimum Production (Tonnes)",
          ]}
          page={page1}
          setPage={setPage1}
          totalPages={Math.ceil(yearProcessedData.length / PAGE_SIZE)}
        />
      </div>
      <div className="mt-5">
        <TableComponent
          data={paginatedCropData}
          columns={[
            "Crop",
            "Average Yield (Kg/Ha)",
            "Average Cultivation Area (Ha)",
          ]}
          page={page2}
          setPage={setPage2}
          totalPages={Math.ceil(cropProcessedData.length / PAGE_SIZE)}
        />
      </div>
    </div>
  );
};

export default Home;
