export interface ChartResult {
    Count: number;
    Series: HCSeries[];

    categories: string[];

    title: string;
    subtitle: string;
}


export interface HCSeries {
    data: Data[];
    name: string;

    showInLegend: boolean;

    type: string;

}

// tslint:disable-next-line:class-name
export interface drilldown {
    series: HCDrilldownSeries[];
}

export interface HCDrilldownSeries {
    data: any[];
    name: string;

    id: string;

}

export interface SimpleSeries {
    data: number | null[];
    name: string;

    showInLegend: boolean;

    type: string;
}

export interface Data {
    name: string;
    y: number | null;

    drilldown: string;
}



// tslint:disable-next-line:no-empty-interface
export interface HChartOption {

}
