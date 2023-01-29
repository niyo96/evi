export class Project {
    constructor() {
        this.id = null;
        this.name = "";
        this.street = "";
        this.postcode = "";
        this.city = "";
        this.buildings = [];
    }

    addBuilding(building) {
        this.buildings.push(building);
    }
}

export class Building {
    constructor() {
        this.id = null;
        this.address = "";
        this.note = "";
        this.apartments = [];
    }

    addApartment(apartment){
        this.apartments.push(apartment);
    }
}

export class Apartment {
    constructor() {
        this.id = null;
        this.orientation = "";
        this.etage = "";
        this.rooms = [];
    }
    addRoom(room){
        this.rooms.push(room);
    }
}

export class Room {
    constructor() {
        this.id = null;
        this.orientation = "";
        this.info = "";
        this.evidences = [];
    }
    addEvidence(evicence){
        this.evidences.push(evicence);
    }
}

export class Evidence {
    constructor() {
        this.id = null;
        this.date = null;
        this.picture = '';
        this.diagonal = false;
        this.horizontal = false;
        this.vertical = false;
        this.crosswise = false;
        this.wallCeilingConnection = false;
        this.wallWindowConnection = false;
        this.wallDoorConnection = false;
        this.wallWindowsillConnection = false;
        this.wallSkirtingBoardConnection = false;
        this.wallBracketConnection = false;
        this.wall = '';
        this.wallCorner = '';
        this.continuous = false;
        this.circulating = false;
        this.interrupted = false;
        this.overview = false;
        this.detail = false;
        this.lengthMeters = null;
        this.thicknessMillimeters = '';
        this.repaint = false;
        this.crackStructure = '';
        this.continuedFrom = '';
        this.other = '';
        this.room = null;
        this.flat = null;
        this.building = null;
        this.constructionSite = null;
    }
}
