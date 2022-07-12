import { useEffect, useState } from 'react';

import { Text } from '../components/Text';
import { HorizontalBarChart } from '../components/HorizontalBarChart';

import styled from 'styled-components';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';

import { SpaceContainer } from '../components/layout/SpaceContainer';
import { getPrescriptions } from '../common/api/prescriptions';

const BodyContainer = styled('div')(
    ({ theme }) => {
        return `
        padding: 0 ${theme.spacing(3)};
        margin-bottom: ${theme.spacing(4)};
        color: ${theme.palette.grey['800']};
        `
    }
);

export default function HomePage() {
    const [selectedYear, setSelectedYear] = useState(0);
    const [yearPrescriptionData, setYearPrescriptionData] = useState();
    const [widthHeight, setWidthHeight] = useState([window.innerWidth, window.innerHeight]);

    useEffect(() => {
        (async () => {
            const data = await getPrescriptions();
            setYearPrescriptionData(data);
        })();
    }, []);

    useEffect(() => {
        const resize = () => {
            setWidthHeight([window.innerWidth, window.innerHeight]);
        };

        window.addEventListener('resize', resize);

        return () => {
            window.removeEventListener("resize", resize);
        }
    });

    const handleYearChange = (event) => {
        const year = +event.target.value;
        setSelectedYear(year);
    }

    return (
        <>
            <SpaceContainer bottomSize='md'>
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                            <MenuIcon />
                        </IconButton>
                        <Text variant="h6" color="inherit" component="h6">
                            Home
                        </Text>
                    </Toolbar>
                </AppBar>
            </SpaceContainer>

            <BodyContainer>
                <SpaceContainer bottomSize='sm'>
                    <Text variant='h5' component='h5'>
                        My Journey
                    </Text>
                </SpaceContainer>

                <SpaceContainer bottomSize='md'>
                    <Divider />
                </SpaceContainer>

                <FormControl>
                    <FormLabel id="prescription-year-row-radio-buttons-group-label">Yearly Pill Intake</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="prescription-year-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        value={selectedYear}
                        onChange={handleYearChange}
                    >
                        <FormControlLabel value="0" control={<Radio />} label="2019" />
                        <FormControlLabel value="1" control={<Radio />} label="2020" />
                        <FormControlLabel value="2" control={<Radio />} label="2021" />
                        <FormControlLabel value="3" control={<Radio />} label="2022" />
                    </RadioGroup>
                </FormControl>
            </BodyContainer>
            
            {
                yearPrescriptionData &&
                <HorizontalBarChart size={[widthHeight[0], 300]} data={yearPrescriptionData[selectedYear]} axisKeys={["count", "name"]} />
            }
        </>
    );
}
