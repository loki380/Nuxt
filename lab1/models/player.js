export default class Player {
    
    constructor(name, image, position){
        this.name = name;
        this.image = image;
        this.position = position;
    }
}

export const Position = Object.freeze({
    Forward: 'Napastnik',
    Keeper: 'Bramkarz',
    Midfield: 'Pomocnik',
    Defender: 'Obrońca'
})
