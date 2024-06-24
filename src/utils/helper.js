export const processDataForTable = (data) => {
  const yearData = {};
  const cropData = {};

  data.forEach((item) => {
    if (!item["Crop Production (UOM:t(Tonnes))"]) return;

    const year = item.Year;
    const cropProduction = parseFloat(item["Crop Production (UOM:t(Tonnes))"]);
    const cropName = item["Crop Name"];
    const cropYield = parseFloat(
      item["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"]
    );
    const cultivationArea = parseFloat(
      item["Area Under Cultivation (UOM:Ha(Hectares))"]
    );

    if (!yearData[year]) {
      yearData[year] = {
        maxCrop: cropName,
        maxProduction: cropProduction,
        minCrop: cropName,
        minProduction: cropProduction,
      };
    } else {
      if (cropProduction > yearData[year].maxProduction) {
        yearData[year].maxCrop = cropName;
        yearData[year].maxProduction = cropProduction;
      }
      if (cropProduction < yearData[year].minProduction) {
        yearData[year].minCrop = cropName;
        yearData[year].minProduction = cropProduction;
      }
    }

    if (cropYield && cultivationArea) {
      if (!cropData[cropName]) {
        cropData[cropName] = {
          totalYield: cropYield,
          totalArea: cultivationArea,
          count: 1,
        };
      } else {
        cropData[cropName].totalYield += cropYield;
        cropData[cropName].totalArea += cultivationArea;
        cropData[cropName].count += 1;
      }
    }
  });

  const yearProcessedData = Object.keys(yearData).map((year) => ({
    year,
    maxCrop: yearData[year].maxCrop,
    maxProduction: yearData[year].maxProduction,
    minCrop: yearData[year].minCrop,
    minProduction: yearData[year].minProduction,
  }));

  const cropProcessedData = Object.keys(cropData).map((crop) => ({
    crop,
    averageYield: (cropData[crop].totalYield / cropData[crop].count).toFixed(2),
    averageArea: (cropData[crop].totalArea / cropData[crop].count).toFixed(2),
  }));

  return { yearProcessedData, cropProcessedData };
};
