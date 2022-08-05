import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CurrentTempContainer from "./CurrentTempContainer";
import FiveDayForeCastContainer from "./FiveDayForeCastContainer";
import Weather from "./Weather";
import { styled } from "@mui/material";
import HourlyContainer from "./HourlyContainer";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

interface StyledTabsProps {
  children?: React.ReactNode;
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const StyledTabs = styled((props: StyledTabsProps) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 40,
    width: "100%",
    backgroundColor: "#635ee7",
  },
});

interface StyledTabProps {
  label: string;
}

const StyledTab = styled((props: StyledTabProps) => (
  <Tab disableRipple {...props} />
))(({ theme }) => ({
  textTransform: "none",
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.typography.pxToRem(15),
  marginRight: theme.spacing(1),
  color: "rgba(255, 255, 255, 0.7)",
  "&.Mui-selected": {
    color: "#fff",
  },
  "&.Mui-focusVisible": {
    backgroundColor: "rgba(100, 95, 228, 0.32)",
  },
}));

interface WeatherTabsProps {
  currentTemp: Weather;
  currentDayForecast: Weather[];
}

export default function WeatherTabs(props: WeatherTabsProps) {
  const { currentTemp, currentDayForecast } = props;

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "#D3D3D3",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#000080",
          height: "3.5rem",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          padding: "0px",
        }}
      >
        <StyledTabs value={value} onChange={handleChange}>
          <StyledTab label="Today" {...a11yProps(0)} />
          <StyledTab label="Hourly" {...a11yProps(1)} />
          {/*<StyledTab label="Item Three" {...a11yProps(2)} />*/}
        </StyledTabs>
        <TabPanel value={value} index={0}>
          <CurrentTempContainer currentTemp={currentTemp} />
          <FiveDayForeCastContainer
            currentTemp={currentTemp}
            currentDayForecast={currentDayForecast}
          />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <HourlyContainer />
        </TabPanel>
        {/*<TabPanel value={value} index={2}>*/}
        {/*  Item Three*/}
        {/*</TabPanel>*/}
      </Box>
    </Box>
  );
}
