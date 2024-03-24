// variables
const canvas = document.getElementById('canvas');
const contain = document.getElementById('contain');
const how = document.getElementById('howToPlay');
const ctx = canvas.getContext('2d');
canvas.style.backgroundColor = 'rgb(255, 140, 0)';

let widthPercentage = (200 / 9) + '%';
document.getElementById('leftAd').style.width = widthPercentage;
document.getElementById('righAd').style.width = widthPercentage;
how.style.width = widthPercentage;

const volumeON = new Image();
volumeON.src = "data:image/png;base64,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";
const volumeOFF = new Image();
volumeOFF.src = "data:image/png;base64,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";
var volume = 'on';
var tupSound = [
    document.getElementById('tup1'),
    document.getElementById('tup2'),
    document.getElementById('tup3'),
    document.getElementById('tup4'),
    document.getElementById('tup5'),
    document.getElementById('tup6'),
    document.getElementById('tup7')
];
var sound = {left: '', right: '', top: '', bottom: ''};
var colors = ['rgb(255, 0, 0)', 'rgb(0, 255, 0)', 'rgb(0, 0, 255)', 'rgb(255, 255, 0)', 'rgb(255, 0, 255)', 'purple'];
var objects = {
    player:    [{x: 47, y: 50, w: 6, h: 9, co: colors[randomNum(0, 5)]}],
    platforms: [{x: 20, y: 80, w: randomNum(10, 50), h: randomNum(4, 10), co: colors[randomNum(0, 5)]}],
}
let leftJump = 0;
let rightJump = 0;
var objects2 = {};
var lava = 150;
var text;
var score = 0;
var record = 0;
var mousePos = {x: 0, y: 0};
var check = {
    left: 'no',
    leftA: 'no',
    leftAr: 'no',
    right: 'no',
    rightD: 'no',
    rightAr: 'no',
    up: 'no',
    upw: 'no',
    upa: 'no',
    ups: 'no',
    click: 'no',
    enter: 'no',
    space: 'no',
    prevSpace: 'yes',
    v: 'yes',
    v2: 'no',
    v3: 'yes'
}
var situation = 'started';
var player = {
    vel: {
        left: 0,
        right: 0,
        jump: 0
    },
    col: {
        platforms: [{left: 0, right: 0, top: 0, bottom: 0}],
    },
    prev: objects,
    gravity: 0
}
var plat = {
}

//____________________________________________________________________________________________
// Functions
function getMousePos(canvas, event) {
    return {
        x: (event.clientX - canvas.getBoundingClientRect().left) / canvas.height * 100 - 50,
        y: (event.clientY - canvas.getBoundingClientRect().top) / canvas.height * 100 - 50
    };
}
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function makePlatform(x2, y2, w2, h2) {
    objects.platforms.push({x: x2, y: y2, w: w2, h: h2});
}

function Controls () {
    document.addEventListener('keydown', function (event) {
        //Left
        if (event.code == 'KeyA') {
            check.leftA = 'yes';
        }
        if (event.code == 'ArrowLeft') {
            check.leftAr = 'yes';
        }
        //Right
        if (event.code == 'KeyD') {
            check.rightD = 'yes';
        }
        if (event.code == 'ArrowRight') {
            check.rightAr = 'yes';
        }
        //Up
        if (event.code == 'KeyW') {
            check.upw = 'yes';
        }
        if (event.code == 'ArrowUp') {
            check.upa = 'yes';
        }
        if (event.code == 'Space') {
            check.ups = 'yes';
        }
        //__
        if (event.code == 'Space') {
            check.space = 'yes';
        }
        if (event.code == 'KeyV') {
            check.v2 = 'yes';
        }
    });
    document.addEventListener('keyup', function (event) {
        //Left
        if (event.code == 'KeyA') {
            check.leftA = 'no';
        }
        if (event.code == 'ArrowLeft') {
            check.leftAr = 'no';
        }
        //Right
        if (event.code == 'KeyD') {
            check.rightD = 'no';
        }
        if (event.code == 'ArrowRight') {
            check.rightAr = 'no';
        }
        //Up
        if (event.code == 'KeyW') {
            check.upw = 'no';
        }
        if (event.code == 'ArrowUp') {
            check.upa = 'no';
        }
        if (event.code == 'Space') {
            check.ups = 'no';
        }
        //__
        if (event.code == 'Enter') {
            check.enter = 'yes';
        }
        if (event.code == 'Space') {
            check.space = 'no';
        }
        if (event.code == 'KeyV') {
            check.v2 = 'no';
            check.v3 = 'yes';
        }
    });

    // Mouse
    canvas.addEventListener('mousemove', function(event) {
        mousePos = getMousePos(canvas, event);
    });

    // Mouse click
    canvas.addEventListener('mousedown', function (event) {
        if (event.button === 0) {
            check.click = 'yes';
        }
    });
    canvas.addEventListener('mouseup', function (event) {
        if (event.button === 0) {
            check.click = 'no';
            check.v = 'yes';
        }
    });
} Controls();

//____________________________________________________
function Spawn() {
    //Dissapear
    for (var i = 1; i < objects.platforms.length; i++) {
        if (objects.platforms[i].y > 300) {
            objects.platforms.splice(i, 1);
        }
    }

    //Spawn
    let lessestY = Infinity;
    for (let i = 0; i < objects.platforms.length; i++) {
        if (lessestY > objects.platforms[i].y) {
            lessestY = objects.platforms[i].y;
        }
    }

    if (lessestY > -150) {
        let randomW;
        let randomH;
        let randomX;
        let randomY;
        let left;
        let right;
        let top;
        let bottom;
        function location () {
            randomW = randomNum(3, 40);
            randomH;
            if (randomW > 15) {
                randomH = randomNum(3, 8);
            }
            else {
                randomH = randomNum(3, 40);
            }
            randomX = randomNum(2, 98 - randomW);
            randomY = randomNum(lessestY - randomH - 40, lessestY - randomH + 100);
            left = randomX;
            right = randomX + randomW;
            top = randomY;
            bottom = randomY + randomH;
            xcen = randomX + randomW / 2;
            ycen = randomY + randomH / 2;
        }
        location();

        function checkCol () {
            for (let i = 0; i < objects.platforms.length; i++) {
                let left2 = objects.platforms[i].x;
                let right2 = objects.platforms[i].x + objects.platforms[i].w;
                let top2 = objects.platforms[i].y;
                let bottom2 = objects.platforms[i].y + objects.platforms[i].h;

                if ((left - 7 < right2 &&
                    right + 7 > left2 &&
                    top - 10 < bottom2 &&
                    bottom + 10 > top2) ||
                    bottom > objects.platforms[0].y ||
                    bottom > 49 ||
                    (left < left2 && right > right2 && bottom < top2 && bottom > top2 - 41)
                ) {
                    location();
                    checkCol();
                }
            }
        }
        checkCol();

        let colr = colors[randomNum(0, 5)];
        function checkColor () {
            if (colr == objects.player[0].co) {
                colr = colors[randomNum(0, 5)];
                checkColor();
            }
        }
        checkColor();

        objects.platforms.push({x: randomX, y: randomY, w: randomW, h: randomH, co: colr});
    }
}

function PlayerXMovement () {
    //Jump
    if (check.upw == 'yes' || check.upa == 'yes' || check.ups == 'yes') {
        check.up = 'yes';
    }
    if (check.upw == 'no' && check.upa == 'no' && check.ups == 'no') {
        check.up = 'no';
    }
    //Movement
    //Left
    if (check.leftA == 'yes' || check.leftAr == 'yes') {
        check.left = 'yes';
    }
    if (check.leftA == 'no' && check.leftAr == 'no') {
        check.left = 'no';
    }
    //Right
    if (check.rightD == 'yes' || check.rightAr == 'yes') {
        check.right = 'yes';
    }
    if (check.rightD == 'no' && check.rightAr == 'no') {
        check.right = 'no';
    }

    //Speed
    let speed = 0.8;
    let speed2 = 0.08;
    //left
    if (check.left == 'yes' && situation == 'playing') {
        if (player.vel.left < speed) {
            player.vel.left += speed2;
        }
    }
    else {
        if (player.vel.left > 0) {
            player.vel.left -= speed2;
        }
    }
    //right
    if (check.right == 'yes' && situation == 'playing') {
        if (player.vel.right < speed) {
            player.vel.right += speed2;
        }
    }
    else {
        if (player.vel.right > 0) {
            player.vel.right -= speed2;
        }
    }

    // security, but not necessary idk
    if (player.vel.right < 0) {
        player.vel.right = 0;
    }
    if (player.vel.left < 0) {
        player.vel.left = 0;
    }
    if (player.vel.right > speed) {
        player.vel.right = speed;
    }
    if (player.vel.left > speed) {
        player.vel.left = speed;
    }
}

function PlayerGravity () {
    if (objects.player[0].y + objects.player[0].h > lava) {
        if (player.gravity > 0.03) {
            player.gravity -= 0.1;
        }
        else {
            player.gravity = 0.03;
        }
    }
    else {
        if (player.gravity < 1) {
            player.gravity += 0.03;
        }
        else {
            player.gravity = 1;
        }
    }
}

function UpdatePositions () {
    // Player
    if (objects.player[0].x > 102) {
        objects.player[0].x = -8;
    }
    if (objects.player[0].x < -8) {
        objects.player[0].x = 102;
    }

    player.prev = {
        player: objects.player.map(rectangle => ({
            x: rectangle.x,
            y: rectangle.y,
            w: rectangle.w,
            h: rectangle.h
        })),
        platforms: objects.platforms.map(rectangle => ({
            x: rectangle.x,
            y: rectangle.y,
            w: rectangle.w,
            h: rectangle.h
        })),
    }
    
    objects.player[0].x -= player.vel.left;
    objects.player[0].x += player.vel.right;
    for (let i = 0; i < objects.platforms.length; i++) {
        objects.platforms[i].y += player.vel.jump;
        objects.platforms[i].y -= player.gravity;
    }
    lava += player.vel.jump;
    lava -= player.gravity;

    objects.player[0].x += leftJump;
    objects.player[0].x -= rightJump;
}

function Collisions () {
    player.col = {
        platforms: objects.platforms.map(obj => ({ ...obj, left: 0, right: 0, top: 0, bottom: 0})),
    };

    for (let i = 0; i < objects.platforms.length; i++) {
        let prePlay = player.prev.player[0];
        let curPlay = objects.player[0];
        let prePlat = player.prev.platforms[i];
        let curPlat = objects.platforms[i];
        if (prePlay.x >= curPlat.x + curPlat.w && curPlay.x < curPlat.x + curPlat.w && curPlay.y < curPlat.y + curPlat.h && curPlay.y + curPlay.h > curPlat.y) {
            player.vel.left = 0;
            player.col.platforms[i].left = curPlat.x + curPlat.w - curPlay.x;
            if (check.up == 'yes' && situation == 'playing') {
                player.vel.jump = 2.2;
                leftJump = 1.5;
                if (volume == 'on') {
                    document.getElementById('jump').cloneNode().play();
                }
            }
        }
        else if (prePlay.x + prePlay.w <= curPlat.x && curPlay.x + curPlay.w > curPlat.x && curPlay.y < curPlat.y + curPlat.h && curPlay.y + curPlay.h > curPlat.y) {
            player.vel.right = 0;
            player.col.platforms[i].right = curPlay.x + curPlay.w - curPlat.x;
            if (check.up == 'yes' && situation == 'playing') {
                player.vel.jump = 2.2;
                rightJump = 1.5;
                if (volume == 'on') {
                    document.getElementById('jump').cloneNode().play();
                }
            }
        }
        else if (prePlat.y + prePlat.h <= curPlay.y && curPlat.y + curPlat.h > curPlay.y && curPlat.x + curPlat.w > curPlay.x && curPlat.x < curPlay.x + curPlay.w) {
            player.gravity = 0;
            player.vel.jump = 0;
            player.col.platforms[i].top = curPlat.y + curPlat.h - 50;
        }
        else if (prePlat.y >= curPlay.y + curPlay.h && curPlat.y < curPlay.y + curPlay.h && curPlat.x + curPlat.w > curPlay.x && curPlat.x < curPlay.x + curPlay.w) {
            player.gravity = 0;
            player.vel.jump = 0;
            if (check.up == 'yes' && situation == 'playing') {
                player.vel.jump = 2.2;
                if (volume == 'on') {
                    document.getElementById('jump').cloneNode().play();
                }
            }
            player.col.platforms[i].bottom = curPlay.y + curPlay.h - curPlat.y;
        }
        else {
            player.col.platforms[i].left = 0;
            player.col.platforms[i].right = 0;
            player.col.platforms[i].top = 0;
            player.col.platforms[i].bottom = 0;
        }
    }

    for (let i = 0; i < objects.platforms.length; i++) {
        objects.player[0].x += player.col.platforms[i].left;
        objects.player[0].x -= player.col.platforms[i].right;
        for (let j = 0; j < objects.platforms.length; j++) {
            objects.platforms[j].y -= player.col.platforms[i].top;
            objects.platforms[j].y += player.col.platforms[i].bottom;
        }
        lava -= player.col.platforms[i].top;
        lava += player.col.platforms[i].bottom;
    }

    //___________
    if (player.vel.jump > 0) {
        player.vel.jump -= 0.03;
    }
    else {
        player.vel.jump = 0;
    }

    if (rightJump > 0) {
        rightJump -= 0.1;
    }
    else {
        rightJump = 0;
    }
    if (leftJump > 0) {
        leftJump -= 0.1;
    }
    else {
        leftJump = 0;
    }

    // Sound
    if (volume == 'on') {
        let playL = objects.player[0].x;
        let playR = objects.player[0].x + objects.player[0].w;
        let playT = objects.player[0].y;
        let playB = objects.player[0].y + objects.player[0].h;
        
        // Left
        let checkLeft = 'no';
        for (let i = 0; i < objects.platforms.length; i++) {
            let platL = objects.platforms[i].x;
            let platR = objects.platforms[i].x + objects.platforms[i].w;
            let platT = objects.platforms[i].y;
            let platB = objects.platforms[i].y + objects.platforms[i].h;

            if (playL == platR && playT < platB && playB > platT && playR > platL) {
                checkLeft = 'yes';
                break;
            }
        }
        if (checkLeft == 'yes') {
            if (sound.left == 'yes') {
                tupSound[randomNum(0, 6)].cloneNode().play();
            }
            sound.left = 'no';
        }
        else {
            sound.left = 'yes';
        }
        // Right
        let checkRight = 'no';
        for (let i = 0; i < objects.platforms.length; i++) {
            let platL = objects.platforms[i].x;
            let platR = objects.platforms[i].x + objects.platforms[i].w;
            let platT = objects.platforms[i].y;
            let platB = objects.platforms[i].y + objects.platforms[i].h;

            if (playR == platL && playT < platB && playB > platT && playL < platR) {
                checkRight = 'yes';
                break;
            }
        }
        if (checkRight == 'yes') {
            if (sound.right == 'yes') {
                tupSound[randomNum(0, 6)].cloneNode().play();
            }
            sound.right = 'no';
        }
        else {
            sound.right = 'yes';
        }
        // Top
        let checkTop = 'no';
        for (let i = 0; i < objects.platforms.length; i++) {
            let platL = objects.platforms[i].x;
            let platR = objects.platforms[i].x + objects.platforms[i].w;
            let platT = objects.platforms[i].y;
            let platB = objects.platforms[i].y + objects.platforms[i].h;

            if (playT == platB && playL < platR && playR > platL && playB > platT) {
                checkTop = 'yes';
                break;
            }
        }
        if (checkTop == 'yes') {
            if (sound.top == 'yes') {
                tupSound[randomNum(0, 6)].cloneNode().play();
            }
            sound.top = 'no';
        }
        else {
            sound.top = 'yes';
        }
        // Bottom
        let checkBottom = 'no';
        for (let i = 0; i < objects.platforms.length; i++) {
            let platL = objects.platforms[i].x;
            let platR = objects.platforms[i].x + objects.platforms[i].w;
            let platT = objects.platforms[i].y;
            let platB = objects.platforms[i].y + objects.platforms[i].h;

            if (playB == platT && playL < platR && playR > platL && playT < platB) {
                checkBottom = 'yes';
                break;
            }
        }
        if (checkBottom == 'yes') {
            if (sound.bottom == 'yes') {
                tupSound[randomNum(0, 6)].cloneNode().play();
            }
            sound.bottom = 'no';
        }
        else {
            sound.bottom = 'yes';
        }
    }
}

function byDefault () {
    check.prevSpace = 'yes';
    let random = randomNum(10, 50);
    situation = 'playing';
    objects = {
        player:    [{x: 47, y: 50, w: 6,  h: 9, co: colors[randomNum(0, 5)]}],
        platforms: [{x: 50 - random / 2, y: 80, w: random, h: randomNum(4, 10), co: colors[randomNum(0, 5)]}]
    }
    player.gravity = 0;
    lava = 150;
    score = 0;
}

function Situations () {
    // Canvas size
    if (innerWidth > innerHeight - 30) {
        canvas.width = innerHeight - 30;
        canvas.height = innerHeight - 30;
        contain.style.height = (innerHeight - 30) + 'px';
    }
    else {
        canvas.width = innerWidth;
        canvas.height = innerWidth;
        contain.style.height = innerWidth + 'px';
    }
    canvas.style.left = (window.innerWidth / 2 - canvas.width / 2) + 'px';
    canvas.style.top = (window.innerHeight / 2 - canvas.height / 2 + 15) + 'px';

    contain.style.width = (innerHeight - 30) * 1.8 + 'px';
    contain.style.left = (window.innerWidth / 2 - (innerHeight - 30) * 1.8 / 2) + 'px';
    contain.style.top = parseInt(canvas.style.top) + 'px';

    if (objects.platforms[0].co == objects.player[0].co) {
        objects.platforms[0].co = colors[randomNum(0, 5)];
    }

    // Situations_________
    if (situation == 'started') {
        // Click on play
        if (
            mousePos.x < 10 &&
            mousePos.x > -9 &&
            mousePos.y > -7 &&
            mousePos.y < 0 &&
            check.click == 'yes'
        ) {
            situation = 'playing';
        }

        objects = {
            player:    [{x: 47, y: 50, w: 6,  h: 9, co: objects.player[0].co}],
            platforms: [{x: 50 - objects.platforms[0].w / 2, y: 80, w: objects.platforms[0].w, h: objects.platforms[0].h, co: objects.platforms[0].co}],
        }

        player = {
            vel: {
                left: 0,
                right: 0,
                jump: 0
            },
            col: {
                platforms: [{left: 0, right: 0, top: 0, bottom: 0}],
            },
            prev: objects,
            gravity: 0
        }
        lava = 150;
    }
    else if (situation == 'playing') {
        if (objects.player[0].y + objects.player[0].h > lava) {
            situation = 'lost';
            if (volume == 'on') {
                document.getElementById('lava').cloneNode().play();
            }
        }
        if (objects.platforms[0].y > 80 + score) {
            score++;
        }
        if (lava > -200) {
            lava -= 0.51;
        }
    }
    else if (situation == 'lost') {
        if (lava > -200) {
            lava -= 0.51;
        }
        // Click on play again
        if (check.space == 'no') {
            check.prevSpace = 'no';
        }
        if (
            (check.prevSpace == 'no' && check.space == 'yes') ||
            (
                mousePos.x < 23.5 &&
                mousePos.x > -22.5 &&
                mousePos.y > -7 &&
                mousePos.y < 0 &&
                check.click == 'yes'
            )
        )
         {
            byDefault();
        }

        player.vel.left = 0;
        player.vel.right = 0;
    }

    if (check.enter == 'yes') {
        check.enter = 'no';
        if (situation == 'started') {
            situation = 'playing';
        }
        else {
            byDefault();
        }
    }

    if (record < score) {
        record++;
    }
}

function Render () {
    //variables influenced by canvas size
    objects2 = {
        player: objects.player.map(rectangle => ({
            x: canvas.height / 100 * rectangle.x,
            y: canvas.height / 100 * rectangle.y,
            w: canvas.height / 100 * rectangle.w,
            h: canvas.height / 100 * rectangle.h
        })),
        platforms: objects.platforms.map(rectangle => ({
            x: canvas.height / 100 * rectangle.x,
            y: canvas.height / 100 * rectangle.y,
            w: canvas.height / 100 * rectangle.w,
            h: canvas.height / 100 * rectangle.h
        })),
    };
    // Render
    // background
    ctx.fillStyle = 'rgb(0, 255, 255)';
    ctx.fillRect(0, 0, canvas.width, canvas.height / 100 * lava);
    // player
    ctx.fillStyle = objects.player[0].co;
    ctx.fillRect(objects2.player[0].x, objects2.player[0].y, objects2.player[0].w, objects2.player[0].h);

    // platforms
    for (let i = 0; i < objects2.platforms.length; i++) {
        let plat = objects2.platforms[i];
        ctx.fillStyle = objects.platforms[i].co;
        ctx.fillRect(plat.x, plat.y, plat.w, plat.h);
    }

    // lava
    ctx.fillStyle = 'rgb(255, 140, 0)';
    ctx.globalAlpha = 0.8;
    ctx.fillRect(0, canvas.height / 100 * lava, canvas.width, canvas.height - canvas.height / 100 * lava);
    ctx.globalAlpha = 1.0;

    // situations
    if (situation == 'started') {
        score = 0;
        record = 0;

        // Play
        text = canvas.width / 100 * 9;
        ctx.font = `bolder ${text}px Arial`;
        ctx.fillStyle = 'white';
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 5;
        ctx.strokeText('Play', canvas.width / 2 - text, canvas.height / 2);
        ctx.fillText('Play', canvas.width / 2 - text, canvas.height / 2);
    }
    else if (situation == 'lost') {
        // Play again
        text = canvas.width / 100 * 9;
        ctx.font = `bolder ${text}px Arial`;
        ctx.fillStyle = 'white';
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 5;
        ctx.strokeText('Play Again', canvas.width / 2 - text * 2.5, canvas.height / 2);
        ctx.fillText('Play Again', canvas.width / 2 - text * 2.5, canvas.height / 2);
    }

    // score
    text = canvas.height / 100 * 4;
    ctx.font = `bolder ${text}px Arial`;
    ctx.fillStyle = 'white';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 5;
    ctx.strokeText(`record: ${Math.round(record / 15)}`, text / 2, text);
    ctx.fillText(`record: ${Math.round(record / 15)}`, text / 2, text);
    ctx.strokeText(`score: ${Math.round(score / 15)}`, text / 2, text * 2.2);
    ctx.fillText(`score: ${Math.round(score / 15)}`, text / 2, text * 2.2);

    // volume
    let vol = {
        x: canvas.height / 100 * 90,
        y: canvas.height / 100 * 2,
        w: canvas.height / 100 * 8,
        h: canvas.height / 100 * 8
    }
    if (check.click == 'yes' && check.v == 'yes') {
        check.v = 'no';
        if (mousePos.x > 39 && mousePos.x < 48 && mousePos.y > -48 && mousePos.y < -39) {
            if (volume == 'on') {
                volume = 'off';
            }
            else {
                volume = 'on';
            }
        }
    }

    if (check.v2 == 'yes' && check.v3 == 'yes') {
        check.v3 = 'no';
        if (volume == 'on') {
            volume = 'off';
        }
        else {
            volume = 'on';
        }
    }

    if (volume == 'on') {
        ctx.drawImage(volumeON, vol.x, vol.y, vol.w, vol.h);
    }
    else {
        ctx.drawImage(volumeOFF, vol.x, vol.y, vol.w, vol.h);
    }

    // How to play
    how.style.fontSize = (canvas.height / 30) + 'px';
}
// Gameloop
function Gameloop () {
    //Update
    Spawn();
    PlayerXMovement();
    PlayerGravity();

    UpdatePositions();
    Collisions();
    Situations();
    Render();

    requestAnimationFrame(Gameloop);
}
Gameloop();