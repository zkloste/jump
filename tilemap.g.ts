// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile11 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile12 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`10001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006020500000000000000000000000000000000000000000000000000000000000000000000000b0000000000000000000000000000000602050000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010304000000000000000000000000000a0807000000000000000000010400000a0807030c000006020500000a0700000a08070807000000000000000a0709090a08070807000000000000000a0808080808070807090909090909090a080808080807`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . 2 2 2 . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . 2 2 2 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . 2 2 2 
. . . . . . . . . . . . . 2 2 2 
. . . . . . . . . 2 2 . . 2 2 2 
2 2 . . 2 2 2 . . 2 2 . . 2 2 2 
2 2 . . . . . . . 2 2 . . 2 2 2 
2 2 . . . . . . . 2 2 2 2 2 2 2 
2 2 . . . . . . . 2 2 2 2 2 2 2 
`, [myTiles.transparency16,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,sprites.builtin.brick], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "myTile":
            case "tile1":return tile1;
            case "baseTransparency16":
            case "transparency16":return transparency16;
            case "oceanSand5":
            case "tile2":return tile2;
            case "oceanSand2":
            case "tile3":return tile3;
            case "oceanSand6":
            case "tile4":return tile4;
            case "oceanSand7":
            case "tile5":return tile5;
            case "oceanSand3":
            case "tile6":return tile6;
            case "oceanSand1":
            case "tile7":return tile7;
            case "myTile5":
            case "tile8":return tile8;
            case "myTile6":
            case "tile9":return tile9;
            case "coral4":
            case "tile10":return tile10;
            case "myTile7":
            case "tile11":return tile11;
            case "coral0":
            case "tile12":return tile12;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
