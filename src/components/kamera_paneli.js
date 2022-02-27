import React, {useState, Component} from "react";
import {TabView, TabPanel} from "primereact/tabview";
import {Image} from 'primereact/image';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default class KameraPaneli extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex1: 1,
            activeIndex2: 0
        };

        this.tabHeaderITemplate = this.tabHeaderITemplate.bind(this);
    }

    tabHeaderITemplate(options) {
        return (
            <button
                type="button"
                onClick={options.onClick}
                className={options.className}
            >
                <i className="pi pi-prime mr-2"/>
                {options.titleElement}
            </button>
        );
    }

    render() {
        return (
            <div className="card">
                <TabView>
                    <TabPanel header="Kamera 1">

                        <div>
                            <img height={290} className={"kameraResim"} src="https://i.ytimg.com/vi/OMLdPu7ZE8M/maxresdefault.jpg"
                                 alt=""/>
                        </div>


                    </TabPanel>
                    <TabPanel header="Kamera 2">
                        <div>
                            <img height={290} className={"kameraResim"} src="https://i.ytimg.com/vi/OMLdPu7ZE8M/maxresdefault.jpg"
                                 alt=""/>
                        </div>
                    </TabPanel>
                </TabView>
            </div>
        );
    }
}