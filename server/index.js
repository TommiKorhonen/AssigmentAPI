const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch")

const app = express();

app.use(cors());

app.get("/energyMonthly", async (req, res) => {
  try {
    const response = await fetch('https://helsinki-openapi.nuuka.cloud/api/v1.0/EnergyData/monthly/ListByProperty?Record=LocationName&SearchString=1000%20Hakaniemen%20kauppahalli&ReportingGroup=Electricity&StartTime=2019-01-01&EndTime=2019-12-31');
    const data = await response.json();
    console.log("success")
    return res.json(data);
  } catch (err) {
    console.log(err)
  }
});

app.listen(4000, () => {
  console.log("listening");
});
