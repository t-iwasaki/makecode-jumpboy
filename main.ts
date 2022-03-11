scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    mySprite.ay = -250
    if (tiles.tileAtLocationEquals(location, assets.tile`rainbow`)) {
        tiles.setTileAt(location, assets.tile`rainbow0`)
    } else if (tiles.tileAtLocationEquals(location, assets.tile`rainbow0`)) {
        tiles.setTileAt(location, assets.tile`rainbow7`)
    } else if (tiles.tileAtLocationEquals(location, assets.tile`rainbow7`)) {
        tiles.setTileAt(location, assets.tile`rainbow8`)
    } else if (tiles.tileAtLocationEquals(location, assets.tile`rainbow8`)) {
        tiles.setTileAt(location, assets.tile`rainbow9`)
    } else if (tiles.tileAtLocationEquals(location, assets.tile`rainbow9`)) {
        tiles.setTileAt(location, assets.tile`rainbow10`)
    } else if (tiles.tileAtLocationEquals(location, assets.tile`rainbow10`)) {
        tiles.setTileAt(location, assets.tile`rainbow11`)
    } else if (tiles.tileAtLocationEquals(location, assets.tile`rainbow11`)) {
        tiles.setTileAt(location, assets.tile`transparency16`)
    } else {
        tiles.setWallAt(location, false)
        game.over(false)
    }
})
sprites.onCreated(SpriteKind.Food, function (sprite) {
    sprite.setScale(0.5, ScaleAnchor.Middle)
    sprite.setPosition(80, 10)
})
sprites.onCreated(SpriteKind.Player, function (sprite) {
    sprite.setPosition(10, 10)
})
let mySprite: Sprite = null
let gravity = 9.8
mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
let mySprite2 = sprites.create(img`
    . . . . . . . . . . . 6 6 6 6 6 
    . . . . . . . . . 6 6 7 7 7 7 8 
    . . . . . . 8 8 8 7 7 8 8 6 8 8 
    . . e e e e c 6 6 8 8 . 8 7 8 . 
    . e 2 5 4 2 e c 8 . . . 6 7 8 . 
    e 2 4 2 2 2 2 2 c . . . 6 7 8 . 
    e 2 2 2 2 2 2 2 c . . . 8 6 8 . 
    e 2 e e 2 2 2 2 e e e e c 6 8 . 
    c 2 e e 2 2 2 2 e 2 5 4 2 c 8 . 
    . c 2 e e e 2 e 2 4 2 2 2 2 c . 
    . . c 2 2 2 e e 2 2 2 2 2 2 2 e 
    . . . e c c e c 2 2 2 2 2 2 2 e 
    . . . . . . . c 2 e e 2 2 e 2 c 
    . . . . . . . c e e e e e e 2 c 
    . . . . . . . . c e 2 2 2 2 c . 
    . . . . . . . . . c c c c c . . 
    `, SpriteKind.Food)
tiles.setCurrentTilemap(tilemap`レベル1`)
let directY = 1
game.onUpdate(function () {
    mySprite.ay += directY * gravity
    mySprite.x += controller.dx()
})
