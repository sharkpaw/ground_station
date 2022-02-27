import React from "react";
import RGL, {WidthProvider} from "react-grid-layout";
import _ from "lodash";
import "../assets/css/home_page.css";
import MainMap from "./map";
import GostergePaneli from "./gosterge_paneli";
import KameraPaneli from "./kamera_paneli";
import GorevKontrolPaneli from "./gorev_kontrol_paneli";

const ReactGridLayout = WidthProvider(RGL);

export default class ResizableHandles extends React.PureComponent {
    static defaultProps = {
        className: "layout",
        rowHeight: 20,
        cols: 15,
        onLayoutChange: function () {
        },
    };

    constructor(props) {
        super(props);
        this.allProps = [
            {
                i: "Harita",
                x: 5,
                y: 0,
                w: 10,
                h: 15,
                static: true,
                resizeHandles: ["s", "e"],
                body: <MainMap/>,
            },
            {
                i: "Kamera",
                x: 0,
                y: 0,
                w: 5,
                h: 13,
                resizeHandles: ["s", "e","se"],
                body: <KameraPaneli/>
            },
            {
                i: "Gösterge Paneli",
                x: 0,
                y: 10,
                w: 5,
                h: 12,
                resizeHandles: ["s", "e","se"],
                body: <GostergePaneli/>
            },
            {
                i: "Kontrol Paneli",
                x: 5,
                y: 0,
                w: 10,
                h: 10,
                resizeHandles: ["s", "e","se"],
                body: <GorevKontrolPaneli/>
            }
        ];
        const layout = this.generateLayout();
        console.log(layout);
        this.state = {layout};
    }

    1;

    generateDOM() {
        return _.map(this.allProps, function (value, i) {
            return (
                <div key={value.i} className="blok">
                    <div className="headerCell">{value.i}</div>
                    <div>{value.body}</div>
                </div>
            );
        });
    }

    generateLayout() {
        const availableHandles = ["s", "w", "e", "n", "sw", "nw", "se", "ne"];

        return _.forEach(this.allProps, function (value) {
            console.log(value.x, value.y, value.h, value.resizeHandles);
            return {
                x: value.x,
                y: value.y,
                w: value.w,
                h: value.h,
                i: value.i,
                resizeHandles: value.resizeHandles,
            };
        });
    }

    onLayoutChange(layout) {
        this.props.onLayoutChange(layout);
    }

    render() {
        return (
            <ReactGridLayout
                layout={this.state.layout}
                onLayoutChange={this.onLayoutChange}
                {...this.props}
            >
                {this.generateDOM()}
            </ReactGridLayout>
        );
    }
}
