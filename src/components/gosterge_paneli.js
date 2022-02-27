import React, {useState} from "react";
import {Knob} from 'primereact/knob';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import _ from "lodash";

function Item(props) {
    const {sx, ...other} = props;
    return (
        <Box
            sx={{
                p: 1,
                m: 1,
                bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
                color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
                border: '1px solid',
                borderColor: (theme) =>
                    theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                borderRadius: 2,
                fontSize: '0.875rem',
                fontWeight: '700',
                ...sx,
            }}
            {...other}
        />
    );
}

class FormItem extends React.Component {
    constructor(props) {
        super(props);
        this.title = props.title;
        this.max = props.max;
        this.min = props.min;
        this.birim = props.birim;

        this.value = props.value === 0 || props.value ? props.value : this.min + Math.floor(Math.random() * this.max);
    }

    render() {
        return (
            <div>
                <Item>
                    <Grid container
                          direction="column"
                          justifyContent="center"
                          alignItems="center">
                        <Grid item>

                            <Knob strokeWidth={10} value={this.value} size={this.max} readOnly
                                  valueTemplate={"{value}" + (this.birim ? this.birim : "")}
                                  onChange={(e) => 56}/>
                        </Grid>
                        <Grid item>
                            <h4 style={{"margin": 0, "margin-top": 0}}>{this.title}</h4>
                        </Grid>
                    </Grid>
                </Item>
            </div>
        );
    };
}

export default class GostergePaneli extends React.Component {
    constructor(props) {
        super(props);
        this.elemanlar = [
            {title: "Hız", birim: "m/s", min: 0, max: 100, value: 30},
            {title: "İvme", min: 0, max: 100,},
            {title: "Yükseklik", birim: "ft", min: 0, max: 100,},
            {title: "Sıcaklık", birim: "°C", min: 0, max: 100,},
            {title: "Enlem", min: 0, max: 100,},
            {title: "Boylam", min: 0, max: 100,},
            {title: "(Atanmamış)", min: 0, max: 100, value: 0},
            {title: "(Atanmamış)", min: 0, max: 100, value: 0}
        ]
    };

    render() {
        return (
            <div style={{width: '100%'}}>
                <Box
                    className={"gostergePaneli"}
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                        p: 1,
                        m: 1,
                    }}>

                    {
                        _.map(this.elemanlar, function (d, i) {
                            return (
                                <FormItem title={d.title} min={d.min} max={d.max} value={d.value} birim={d.birim}/>
                            );
                        })
                    }

                </Box>
            </div>
        );
    };
}