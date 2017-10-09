export class Sw {
  constructor(
    public colorNumber?: string,
    public coordinatingColors?: object,
    public id?: number,
    public isExterior?: boolean,
    public isInterior?: boolean,
    public name?: string,
    public rgb?: number,
    public storeStripLocator?: string,
    public brandedCollectionIds?: number[],
    public colorFamilyIds?: number[],
    public brandedCollectionNames?: string[],
    public colorFamilyNames?: string[]
  ) {}
}

// "6840, { "coord2ColorId": 11335, "coord1ColorId": 11364,
// "whiteColorId": 2681 }, 2527, true, true, "Exuberant Pink",
// 11881855, "101-C1", [ 7200, 31772 ], [ 1 ], [ "Lifestyle",
// "Colormix Forecast 2018" ], [ "Red" ]
