import React, {useRef, useEffect, useState} from "react";
import mapboxgl from "mapbox-gl";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import IconButton from '@mui/material/IconButton';
import Icon from '@mui/material/Icon';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import HomeIcon from '@mui/icons-material/Home';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import AddModeratorIcon from '@mui/icons-material/AddModerator';
import CropSquareIcon from '@mui/icons-material/CropSquare';
import AirlineStopsIcon from '@mui/icons-material/AirlineStops';
import BlockIcon from '@mui/icons-material/Block';
import FlagIcon from '@mui/icons-material/Flag';

mapboxgl.accessToken =
    "pk.eyJ1IjoiYWh5NTQ4MSIsImEiOiJja3hhdHJ0Y3YweTZ5MnVvMWphMzhsZTY5In0.7MqfGdir6tR9gGGJ7eDUQg";

const theme = createTheme({
    palette: {
        color_white: {
            // Purple and green play nicely together.
            main: '#ffffff',
        },
        color_2: {
            // This is green.A700 as hex.
            main: '#11cb5f',
        },
    },
});

const buttons = [
    <IconButton color="color_white" aria-label="upload picture" component="span">
        <AddCircleIcon/>
    </IconButton>,
    <IconButton color="color_white" aria-label="upload picture" component="span">
        <HomeIcon/>
    </IconButton>,
    <IconButton color="color_white" aria-label="upload picture" component="span">
        <AddLocationIcon/>
    </IconButton>,
    <IconButton color="color_white" aria-label="upload picture" component="span">
        <AddModeratorIcon/>
    </IconButton>,
    <IconButton color="color_white" aria-label="upload picture" component="span">
        <CropSquareIcon/>
    </IconButton>,
    <IconButton color="color_white" aria-label="upload picture" component="span">
        <AirlineStopsIcon/>
    </IconButton>,
    <IconButton color="color_white" aria-label="upload picture" component="span">
        <BlockIcon/>
    </IconButton>,
    <IconButton color="color_white" aria-label="upload picture" component="span">
        <FlagIcon/>
    </IconButton>,
];

function GroupButton() {
    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    display: 'flex',
                    '& > *': {
                        m: 1,
                    },
                }}
            >
                <ButtonGroup
                    orientation="vertical"
                    aria-label="vertical outlined button group"
                >
                    {buttons}
                </ButtonGroup>
            </Box>
        </ThemeProvider>
    );
}

export default function MainMap() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(35.2532);
    const [lat, setLat] = useState(39.2656);
    const [zoom, setZoom] = useState(5.09);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: "mapbox://styles/mapbox/streets-v11",
            center: [lng, lat],
            zoom: zoom,
        });
    });

    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on("move", () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
    });

    return (
        <div ref={mapContainer} className="map-container">
            <div className="sidebar-top">
                Enlem: {lng} | Boylam: {lat} | Yakınlık: {zoom}
            </div>
            <div className="sidebar-right">
                <GroupButton/>
            </div>
        </div>
    );
}
