var E = {};

function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

function inRect(x, y, rect) {
    //declaring this so wrinklers work
    var dx = x + Math.sin(-rect.r) * (-(rect.h / 2 - rect.o)), dy = y + Math.cos(-rect.r) * (-(rect.h / 2 - rect.o));
    var h1 = Math.sqrt(dx * dx + dy * dy);
    var currA = Math.atan2(dy, dx);
    var newA = currA - rect.r;
    var x2 = Math.cos(newA) * h1;
    var y2 = Math.sin(newA) * h1;
    if (x2 > -0.5 * rect.w && x2 < 0.5 * rect.w && y2 > -0.5 * rect.h && y2 < 0.5 * rect.h) return true;
    return false;
}

function convertToNum(seed) { // converts alphabet to int
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let num = 0;
    for (let i = 0; i < seed.length; i++) {
        num += alphabet.indexOf(seed[i]) * (26 ** i);
    }
    return num;
}

function isv(str) { //"isValid". made by cursed
    if (typeof str === 'string') {
        if (str.includes('NaN') || str.includes('undefined') || str === '') {
            return false;
        }
    }
    if (typeof str !== 'string' && isNaN(str)) { return false; }
    if (typeof str === 'undefined') { return false; }
    return true;
}

//hash function (for the password cracker achievement)

function md5cycle(x, k) {
    var a = x[0], b = x[1], c = x[2], d = x[3];

    a = ff(a, b, c, d, k[0], 7, -680876936);
    d = ff(d, a, b, c, k[1], 12, -389564586);
    c = ff(c, d, a, b, k[2], 17, 606105819);
    b = ff(b, c, d, a, k[3], 22, -1044525330);
    a = ff(a, b, c, d, k[4], 7, -176418897);
    d = ff(d, a, b, c, k[5], 12, 1200080426);
    c = ff(c, d, a, b, k[6], 17, -1473231341);
    b = ff(b, c, d, a, k[7], 22, -45705983);
    a = ff(a, b, c, d, k[8], 7, 1770035416);
    d = ff(d, a, b, c, k[9], 12, -1958414417);
    c = ff(c, d, a, b, k[10], 17, -42063);
    b = ff(b, c, d, a, k[11], 22, -1990404162);
    a = ff(a, b, c, d, k[12], 7, 1804603682);
    d = ff(d, a, b, c, k[13], 12, -40341101);
    c = ff(c, d, a, b, k[14], 17, -1502002290);
    b = ff(b, c, d, a, k[15], 22, 1236535329);

    a = gg(a, b, c, d, k[1], 5, -165796510);
    d = gg(d, a, b, c, k[6], 9, -1069501632);
    c = gg(c, d, a, b, k[11], 14, 643717713);
    b = gg(b, c, d, a, k[0], 20, -373897302);
    a = gg(a, b, c, d, k[5], 5, -701558691);
    d = gg(d, a, b, c, k[10], 9, 38016083);
    c = gg(c, d, a, b, k[15], 14, -660478335);
    b = gg(b, c, d, a, k[4], 20, -405537848);
    a = gg(a, b, c, d, k[9], 5, 568446438);
    d = gg(d, a, b, c, k[14], 9, -1019803690);
    c = gg(c, d, a, b, k[3], 14, -187363961);
    b = gg(b, c, d, a, k[8], 20, 1163531501);
    a = gg(a, b, c, d, k[13], 5, -1444681467);
    d = gg(d, a, b, c, k[2], 9, -51403784);
    c = gg(c, d, a, b, k[7], 14, 1735328473);
    b = gg(b, c, d, a, k[12], 20, -1926607734);

    a = hh(a, b, c, d, k[5], 4, -378558);
    d = hh(d, a, b, c, k[8], 11, -2022574463);
    c = hh(c, d, a, b, k[11], 16, 1839030562);
    b = hh(b, c, d, a, k[14], 23, -35309556);
    a = hh(a, b, c, d, k[1], 4, -1530992060);
    d = hh(d, a, b, c, k[4], 11, 1272893353);
    c = hh(c, d, a, b, k[7], 16, -155497632);
    b = hh(b, c, d, a, k[10], 23, -1094730640);
    a = hh(a, b, c, d, k[13], 4, 681279174);
    d = hh(d, a, b, c, k[0], 11, -358537222);
    c = hh(c, d, a, b, k[3], 16, -722521979);
    b = hh(b, c, d, a, k[6], 23, 76029189);
    a = hh(a, b, c, d, k[9], 4, -640364487);
    d = hh(d, a, b, c, k[12], 11, -421815835);
    c = hh(c, d, a, b, k[15], 16, 530742520);
    b = hh(b, c, d, a, k[2], 23, -995338651);

    a = ii(a, b, c, d, k[0], 6, -198630844);
    d = ii(d, a, b, c, k[7], 10, 1126891415);
    c = ii(c, d, a, b, k[14], 15, -1416354905);
    b = ii(b, c, d, a, k[5], 21, -57434055);
    a = ii(a, b, c, d, k[12], 6, 1700485571);
    d = ii(d, a, b, c, k[3], 10, -1894986606);
    c = ii(c, d, a, b, k[10], 15, -1051523);
    b = ii(b, c, d, a, k[1], 21, -2054922799);
    a = ii(a, b, c, d, k[8], 6, 1873313359);
    d = ii(d, a, b, c, k[15], 10, -30611744);
    c = ii(c, d, a, b, k[6], 15, -1560198380);
    b = ii(b, c, d, a, k[13], 21, 1309151649);
    a = ii(a, b, c, d, k[4], 6, -145523070);
    d = ii(d, a, b, c, k[11], 10, -1120210379);
    c = ii(c, d, a, b, k[2], 15, 718787259);
    b = ii(b, c, d, a, k[9], 21, -343485551);

    x[0] = add32(a, x[0]);
    x[1] = add32(b, x[1]);
    x[2] = add32(c, x[2]);
    x[3] = add32(d, x[3]);

}

function cmn(q, a, b, x, s, t) {
    a = add32(add32(a, q), add32(x, t));
    return add32((a << s) | (a >>> (32 - s)), b);
}

function ff(a, b, c, d, x, s, t) {
    return cmn((b & c) | ((~b) & d), a, b, x, s, t);
}

function gg(a, b, c, d, x, s, t) {
    return cmn((b & d) | (c & (~d)), a, b, x, s, t);
}

function hh(a, b, c, d, x, s, t) {
    return cmn(b ^ c ^ d, a, b, x, s, t);
}

function ii(a, b, c, d, x, s, t) {
    return cmn(c ^ (b | (~d)), a, b, x, s, t);
}

function md51(s) {
    txt = '';
    var n = s.length,
        state = [1732584193, -271733879, -1732584194, 271733878], i;
    for (i = 64; i <= s.length; i += 64) {
        md5cycle(state, md5blk(s.substring(i - 64, i)));
    }
    s = s.substring(i - 64);
    var tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (i = 0; i < s.length; i++)
        tail[i >> 2] |= s.charCodeAt(i) << ((i % 4) << 3);
    tail[i >> 2] |= 0x80 << ((i % 4) << 3);
    if (i > 55) {
        md5cycle(state, tail);
        for (i = 0; i < 16; i++) tail[i] = 0;
    }
    tail[14] = n * 8;
    md5cycle(state, tail);
    return state;
}

/* there needs to be support for Unicode here,
 * unless we pretend that we can redefine the MD-5
 * algorithm for multi-byte characters (perhaps
 * by adding every four 16-bit characters and
 * shortening the sum to 32 bits). Otherwise
 * I suggest performing MD-5 as if every character
 * was two bytes--e.g., 0040 0025 = @%--but then
 * how will an ordinary MD-5 sum be matched?
 * There is no way to standardize text to something
 * like UTF-8 before transformation; speed cost is
 * utterly prohibitive. The JavaScript standard
 * itself needs to look at this: it should start
 * providing access to strings as preformed UTF-8
 * 8-bit unsigned value arrays.
 */
function md5blk(s) { /* I figured global was faster.   */
    var md5blks = [], i; /* Andy King said do it this way. */
    for (i = 0; i < 64; i += 4) {
        md5blks[i >> 2] = s.charCodeAt(i)
            + (s.charCodeAt(i + 1) << 8)
            + (s.charCodeAt(i + 2) << 16)
            + (s.charCodeAt(i + 3) << 24);
    }
    return md5blks;
}

var hex_chr = '0123456789abcdef'.split('');

function rhex(n) {
    var s = '', j = 0;
    for (; j < 4; j++)
        s += hex_chr[(n >> (j * 8 + 4)) & 0x0F]
            + hex_chr[(n >> (j * 8)) & 0x0F];
    return s;
}

function hex(x) {
    for (var i = 0; i < x.length; i++)
        x[i] = rhex(x[i]);
    return x.join('');
}

function md5(s) {
    return hex(md51(s));
}

/* this function is much faster,
so if possible we use it. Some IEs
are the only ones I know of that
need the idiotic second function,
generated by an if clause.  */

function add32(a, b) {
    return (a + b) & 0xFFFFFFFF;
}

if (md5('hello') != '5d41402abc4b2a76b9719d911017c592') {
    function add32(x, y) {
        var lsw = (x & 0xFFFF) + (y & 0xFFFF),
            msw = (x >> 16) + (y >> 16) + (lsw >> 16);
        return (msw << 16) | (lsw & 0xFFFF);
    }
}


Game.registerMod("Eercermer", {
    //
    init: function () {

        var img = "https://hellopir2.github.io/cc-mods/img/eercermerIcons.png"; //this is used for custom icons, instead of typing the link everytime. should be added later

        E.updateGarden = false;

        E.tinyCookieClicks = 0; //+1 for each click on the tiny cookie
        E.petKrumblor = 0; //+1 everytime you pet krumblor
        E.pseudoGoldenClicks = 0; //+1 for each non-natural golden cookie clicked (all time)
        E.pseudoGoldenClicksLocal = 0; //+1 for each non-natural golden cookie clicked (this game only)
        E.httpClicks = 0;
        E.wipeSaveModalCount = 0;
        E.shinyWrinklersPopped = 0;
        E.jukeboxPlays = 0;
        E.bakeryRenames = 0;
        E.goldenYearCounter = 0; //+1 for each golden lump harvested (gets set to 0 if any other type harvested)
        E.buildingsSold = 0;
        E.perfectECCounter = 0;
        E.ascensionTimerStartedUpdate = 0;
        E.harvestSac = 0;
        E.plantedSac = 0;
        E.cheating = 1; // assume player is always cheating
        
        if (!Game.Objects['Farm'].minigameLoaded){ // unless the garden isnt loaded
            E.cheating = 0;
        }
        else if (Game.Objects['Farm'].minigame.save().split(' ')[1] == '1000000000000000000000000000000000') { // or the garden is in its initial state with maybe some meddleweed lying around. sure, you could've harvested like, wheat beforehand, but you don't gain any advantage.
            let count = 0;
            for (let i = 0; i < 6; i++) {
                for (let j = 0; j < 6; j++) {
                    if (Game.Objects['Farm'].minigame.getTile(i,j)[0] == 0 || Game.Objects['Farm'].minigame.getTile(i,j)[0] == 14) {
                        count++;
                    }
                }
            }
            E.cheating = (count==36)?0:1;
            // you better hope what's not weed or empty on the garden is wheat.
            E.plantedSac += (36 - count);
        }

        E.progress = new Uint8Array(1485172);

        // var db;

        // const progressDB = indexedDB.open("saveArray");
        // progressDB.onerror = (event) => {
        //     console.error("Bruh.");
        // }
        // progressDB.onupgradeneeded = (event) => {
        //     const db = event.target.result;
        //     const saveProgress = db.createObjectStore("seedProgress");
        // }

        E.trackPrisoner = [];
        for (let i = 0; i < 3600; i++) {
            E.trackPrisoner.push(Game.goldenClicks);
        }
        
        E.trackWrath = [];

        tl = { 0: '=', 1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e', 6: 'f', 7: 'g', 8: 'h', 9: 'i', 10: 'j', 11: 'k', 12: 'l', 13: 'm', 14: 'n', 15: 'o', 16: 'p', 17: 'q', 18: 'r', 19: 's', 20: 't', 21: 'u', 22: 'v', 23: 'w', 24: 'x', 25: 'y', 26: 'z', 27: '!', 28: '@', 29: '#', 30: '$', 31: '%', 32: '^', 33: '&', 34: '*', undefined: ';', null: ';' };

        E.gardenCompletion = [];
        for (let i = 0; i < 6 * 34; i++) {
            E.gardenCompletion.push([";3", ";3", ";3", ";3", ";3", ";3", ";3", ";3", ";3", ";3", ";3", ";3", ";3", ";3", ";3", ";3", ";3", ";3", ";3", ";3", ";3", ";3", ";3", ";3", ";3", ";3", ";3", ";3", ";3", ";3"]) // 5 * 6
        }
        
        E.addSeed = function () {
            var num = convertToNum(Game.seed);
            const byte = Math.floor(num/8);
            if (byte < 0 || byte > 26*26*13*13*13) return; // invalid seeds are bad.
            const bit = num%8;
            E.progress[byte] |= 2**bit;
            // console.log(E.progress[byte] |= 2**bit);
            if (Game.HasAchiev("Keeper of the conservatory")) {
                for (let i of E.progress) {
                    if (E.progress[i] < 255) {
                        return;
                    }
                }
                Game.Win("So much to do so much to seed");
            }
        }

        E.addSeed();

        eval('Game.Reset=' + Game.Reset.toString().replace(`Game.seed=Game.makeSeed();`, `Game.seed=Game.makeSeed(); E.addSeed();`)); // i hate this achievement so much

        /*addEventListener("keydown", function(e) {
            if (e.ctrlKey && e.keyCode==69) {
                E.saveProgress = 1;
                Game.toSave=true;
                e.preventDefault();
            }
        });*/

        eval('Game.ClickSpecialPic=' + Game.ClickSpecialPic.toString().replace('0.3);', '0.3); E.petKrumblor++; '));

        eval('Game.UpdateWrinklers=' + Game.UpdateWrinklers.toString().replace('Game.wrinklersPopped++;', 'if (me.type==1) E.shinyWrinklersPopped++; Game.wrinklersPopped++;'));

        eval('Game.Logic=' + Game.Logic.toString().replace(`if (Game.T%(Game.fps)==0 && Math.random()<1/1000000) Game.Win('Just plain lucky');`, `if (Game.T%(Game.fps)==0) { var jpl = Math.random(); if (jpl < 1/1000000) Game.Win('Just plain lucky'); if (jpl < 1/2**64) Game.Win('Just plain luckiest'); }`));

        eval('Game.shimmerTypes["golden"].popFunc=' + Game.shimmerTypes["golden"].popFunc.toString().replace(`if (Game.forceUnslotGod)`, `if (!me.spawnLead && !me.noCount)
        { 
            E.pseudoGoldenClicks++;
            E.pseudoGoldenClicksLocal++;

            if (E.pseudoGoldenClicks >= 727272) Game.Win('Those who have nine lives must suffer nine deaths');
        }if (Game.forceUnslotGod)`));

        eval('Game.HardReset=' + Game.HardReset.toString().replace(`else if (bypass==1)
			{
				Game.Prompt('<id ReallyWipeSave><h3>'+loc("Wipe save")+'</h3><div class="block">'+tinyIcon([15,5])+'<div class="line"></div>'+loc("Whoah now, are you really, <b><i>REALLY</i></b> sure you want to go through with this?<br><small>Don't say we didn't warn you!</small>")+'</div>',[[EN?'Do it!':loc("Yes"),'Game.ClosePrompt();Game.HardReset(2);','float:left'],[loc("No"),0,'float:right']]);
			}`, `else if (bypass==1)
			{
                E.wipeSaveModalCount++; if (E.wipeSaveModalCount >= 1000000) Game.Win("Indecisive");
				Game.Prompt('<id ReallyWipeSave><h3>'+loc("Wipe save")+'</h3><div class="block">'+tinyIcon([15,5])+'<div class="line"></div>'+loc("Whoah now, are you really, <b><i>REALLY</i></b> sure you want to go through with this?<br><small>Don't say we didn't warn you!</small>")+'</div>',[[EN?'Do it!':loc("Yes"),'Game.ClosePrompt();Game.HardReset(2);','float:left'],[loc("No"),0,'float:right']]);
			}`));

        for (var i in Game.Objects) {
            eval('Game.Objects["' + i + '"].sell=' + Game.Objects[i].sell.toString().replace(`sold++;`, `sold++;  E.buildingsSold++; if (E.buildingsSold >= 457467567) Game.Win("Reforestation")`));
        }

        eval('Game.bakeryNameRefresh=' + Game.bakeryNameRefresh.toString().replace(`if (name=='orteil') Game.Win('God complex');`, `if (name=='orteil') Game.Win('God complex'); if (md5(name)=='4420c31b9506fea7e4dd19cf4ccb08ac') Game.Win('Password cracker');`)); //you thought you can just look at the code to know the pre hashed string, didn't you?

        eval('Game.tinyCookie=' + Game.tinyCookie.toString().replace(`!Game.HasAchiev('Tiny cookie')`, `!Game.HasAchiev('Wrong cookie')`));
        eval('Game.ClickTinyCookie=' + Game.ClickTinyCookie.toString().replace(`if (!Game.HasAchiev('Tiny cookie')){PlaySound('snd/tick.mp3');Game.Win('Tiny cookie');}`, `if (!Game.HasAchiev('Wrong cookie')){PlaySound('snd/tick.mp3'); E.tinyCookieClicks++; if (E.tinyCookieClicks > 0) Game.Win('Tiny cookie'); if (E.tinyCookieClicks >= 10000000) Game.Win('Wrong cookie');}`));

        eval('Game.WriteSave=' + Game.WriteSave.toString().replace(`Game.lastSaveData=str;`, `Game.lastSaveData=str; if (Game.lastSaveData.length >= 1e9) {Game.Win("Data hoard");}`));
        eval('Game.LoadSave=' + Game.LoadSave.toString().replace(`if (amount>0)`, `if (Date.now()-Game.lastDate >= (Date.now()-new Date(2013,7,8))/2) {Game.Win("Are you even playing the game?");}if (amount>0)`));

        AddEvent(l('httpsSwitch'), 'click', function () {
            E.httpClicks++;
            if (E.httpClicks >= 10000000) Game.Win("RNG cycle");
        });

        Game.Upgrades["Jukebox"].choicesFunction = function () {
            var str = '';
            str += '<div class="usesIcon" style="margin:auto;width:48px;height:48px;background-position:' + (-31 * 48) + 'px ' + (-12 * 48) + 'px;" id="jukeboxPlayer"></div>';
            str += '<div style="font-size:11px;opacity:0.7;margin-bottom:-4px;" id="jukeboxOnSoundN">' + (Game.jukebox.onSound + 1) + '/' + (Game.jukebox.sounds.length) + '</div>';
            str += '<div class="fancyText" style="font-variant:normal;letter-spacing:2px;padding:8px;font-size:18px;" id="jukeboxOnSound">&bull; ' + Game.jukebox.sounds[Game.jukebox.onSound] + ' &bull;</div>';
            str += '<div style="position:relative;width:100%;text-align:center;">'
                + '<a class="option fancyText" onclick="Game.jukebox.setSound(Game.jukebox.onSound-1);">&#xab;</a>'
                + '<a class="option fancyText" onclick="Game.jukebox.setSound(Game.jukebox.onSound);">' + loc("Play") + '</a>'
                + '<a class="option fancyText" onclick="Game.jukebox.setSound(Game.jukebox.onSound+1);">&#xbb;</a>'
                + '</div>';
            str += '<select id="jukeboxSoundSelect" onchange="Game.jukebox.setSound(parseInt(this.value));">';
            for (var i = 0; i < Game.jukebox.sounds.length; i++) {
                str += '<option value="' + i + '"' + (i == Game.jukebox.onSound ? ' selected="true"' : '') + '>' + Game.jukebox.sounds[i] + '</option>';
            }
            str += '</select><a class="option" onclick="Game.jukebox.setSound(Math.floor(Math.random()*Game.jukebox.sounds.length)); E.jukeboxPlays++; if (E.jukeboxPlays >= 100000000) Game.Win(`Say that again? I can\'t hear you`);">' + loc("Random") + '</a>';
            if (App) {
                var data = Music ? Music.tracks[Game.jukebox.tracks[Game.jukebox.onTrack]].audio : 0;
                var dur = data ? data.duration + 1 : 0;
                str += '<div class="line"></div>';
                str += '<div class="fancyText" style="font-style:italic;letter-spacing:2px;padding:8px;font-size:18px;" id="jukeboxOnTrack">&bull; ' + cap(Game.jukebox.tracks[Game.jukebox.onTrack]) + ' &bull;</div>';
                str += '<div id="jukeboxOnTrackAuthor" style="font-size:11px;opacity:0.7;margin-top:-4px;">' + Music.tracks[Game.jukebox.tracks[Game.jukebox.onTrack]].author + '</div>';
                str += '<div style="margin:4px 0px;font-size:11px;">'
                    + '<span id="jukeboxMusicTime">' + (data ? Math.floor(data.currentTime / 60) + ':' + (Math.floor(data.currentTime % 60) < 10 ? '0' : '') + Math.floor(data.currentTime % 60) : '') + '</span> | '
                    + '<a class="option fancyText" id="jukeboxMusicPlay" onclick="Game.jukebox.pressPlayMusic();">' + ((data && data.paused) ? loc("Play") : loc("Pause")) + '</a>'
                    + '<a class="option fancyText prefButton' + (Game.jukebox.trackLooped ? '' : ' off') + '" id="jukeboxMusicLoop" onclick="Game.jukebox.pressLoopMusic();">' + loc("Loop") + '</a>'
                    + '| <span id="jukeboxMusicTotalTime">' + (data ? Math.floor(dur / 60) + ':' + (Math.floor(dur % 60) < 10 ? '0' : '') + Math.floor(dur % 60) : '') + '</span>'
                    + '</div>'
                    ;
                str += '<div style="position:relative;"><input class="slider" style="clear:both;" type="range" min="0" max="1000" step="1" value="' + (data ? (data.currentTime / data.duration) * 1000 : 0) + '" onchange="Game.jukebox.musicScrub(this.value);" oninput="Game.jukebox.musicScrub(this.value);" id="jukeboxMusicScrub"/><div id="jukeboxMusicScrubElapsed" style="position:absolute;left:3px;top:3px;height:6px;width:0px;background:#ccc;box-shadow:1px 1px 1px #555 inset,0px -1px 0px #fff inset;border-radius:2px;z-index:10;pointer-events:none;"></div></div>';

                str += '<a class="option fancyText prefButton' + (Game.jukebox.trackAuto ? '' : ' off') + '" onclick="Game.jukebox.pressMusicAuto();" id="jukeboxMusicAuto">' + loc("Auto") + '</a><select id="jukeboxTrackSelect" onchange="Game.jukebox.setTrack(parseInt(this.value));">';
                for (var i = 0; i < Game.jukebox.tracks.length; i++) {
                    str += '<option value="' + i + '"' + (i == Game.jukebox.onTrack ? ' selected="true"' : '') + '>' + Game.jukebox.tracks[i] + '</option>';
                }
                str += '</select><!--<a class="option fancyText prefButton' + (Game.jukebox.trackAuto ? '' : ' off') + '" onclick="Game.jukebox.pressMusicShuffle();">' + loc("Shuffle") + '</a>-->';

                setTimeout(Game.jukebox.updateMusicCurrentTime, 500);
            }
            return str;
        }

        eval('Game.bakeryNamePromptRandom=' + Game.bakeryNamePromptRandom.toString().replace(`l('bakeryNameInput').value=Game.RandomBakeryName();`,
        `l('bakeryNameInput').value=Game.RandomBakeryName(); E.bakeryRenames++; if (E.bakeryRenames >= 100000000) Game.Win('Identity crisis');`));

        eval('Game.harvestLumps=' + Game.harvestLumps.toString().replace(`else if (Game.lumpCurrentType==4) Game.Win('Maillard reaction');`, `else if (Game.lumpCurrentType==4) Game.Win('Maillard reaction');
        if (Game.lumpCurrentType==2) E.goldenYearCounter++; else E.goldenYearCounter = 0; if (E.goldenYearCounter >= 365) Game.Win("Golden year");`));

        Game.registerHook('logic', () => {
            if (Object.keys(Game.buffs).length >= 62) Game.Win("How did we get here");
           
            if (Game.T % (Game.fps) == 0) {
                E.trackPrisoner.push(Game.goldenClicks);
                if (E.trackPrisoner.length == 3601) {
                    if (E.trackPrisoner[3600] - E.trackPrisoner[0] >= 777) Game.Win("Prisoner");
                    E.prisonerStatMenu = E.trackPrisoner[3600] - E.trackPrisoner[0];
                    E.trackPrisoner = E.trackPrisoner.slice(1);
                }
            }
        });

        E.CheckFuckAutoSave = function () {
            if (!E.ascensionTimerStartedUpdate) {
                E.ascensionTimerStarted = parseInt(Date.now());
                E.ascensionTimerStartedUpdate = 1;
            }
            ascensionStayed = new Date();
            ascensionStayed.setTime(Date.now() - E.ascensionTimerStarted);
            if (ascensionStayed >= 7 * 24 * 60 * 60 * 1000) Game.Win("Fuck autosave");
        }

        E.trackWrathEffect = function (eff) {
            E.trackWrath.push(eff);
            if (E.trackWrath.length == 17) {
                let condition = true;
                for (let i = 0; i < 17; i++) {
                    condition &&= E.trackWrath[i];
                    for (let j = 0; j < i; j++) {
                        condition &&= E.trackWrath[i] !== E.trackWrath[j];
                    }
                }
                if (condition) Game.Win("Wrath cookies are better anyways");
                E.trackWrath = E.trackWrath.slice(1);
            }

        }

        Game.registerHook('check', () => {
            E.ascensionModeCopy = Game.ascensionMode;
        });

        E.exportGardenCompletion = function () {
            return "30/204/" + E.gardenCompletion.map(e => e.join("")).join("");
        }

        E.checkCompletionistGardener = function () {
            for (let i = 0; i < Game.ObjectsById[2].minigame.plantsById.length; i++) {
                for (let j = 0; j < 5; j++) {
                    if (j == 4 && Game.ObjectsById[2].minigame.plantsById[i].immortal) { // immortal plants can't be in the dying state.
                        continue;
                    }
                    for (let k = 0; k < 6; k++) {
                        for (let m = 0; m < 6; m++) {
                            if (i == 21 && m % 5 == 0 && k % 5 == 0) { // can't get jqb on borders.
                                continue;
                            }
                            if (E.gardenCompletion[i * 6 + m][j * 6 + k] == ";3") {
                                return;
                            }
                        }
                    }
                }
            }
            Game.Win('Completionist gardener');
        }

        E.loadCompletionistGardener = function (str) {
            str = str.split("/");
            x = parseInt(str[0]);
            y = parseInt(str[1]);
            str = str[2];
            E.gardenCompletion = [];
            for (let j = 0; j < y; j++) {
                E.gardenCompletion.push([]);
                for (let i = 0; i < x; i++) {
                    E.gardenCompletion[j].push(str.substring((j * x + i) * 2, (j * x + i + 1) * 2));
                }
            }
        }

        Game.registerHook('check', () => {
            if (Game.Objects['Farm'].minigameLoaded && !E.updateGarden) {
                M = Game.Objects['Farm'].minigame;
                if (isv(E.garden)){
                    M.load(E.garden);
                    E.garden = undefined;
                }
                M.soilsById.soilsById = [];
                var n = 0;
                for (var i in M.soils) {
                    M.soils[i].id = n;
                    M.soils[i].key = i;
                    M.soilsById[n] = M.soils[i];
                    n++;
                }

                M.harvestAll = function (type, mature, mortal) //declaring harvestAll so M.convert works
                {
                    var harvested = 0;
                    for (var i = 0; i < 2; i++) //we do it twice to take care of whatever spawns on kill
                    {
                        for (var y = 0; y < 6; y++) {
                            for (var x = 0; x < 6; x++) {
                                if (M.plot[y][x][0] >= 1) {
                                    var doIt = true;
                                    var tile = M.plot[y][x];
                                    var me = M.plantsById[tile[0] - 1];
                                    if (type && me != type) doIt = false;
                                    if (mortal && me.immortal) doIt = false;
                                    if (mature && tile[1] < me.mature) doIt = false;

                                    if (doIt) harvested += M.harvest(x, y) ? 1 : 0;
                                }
                            }
                        }
                    }
                    if (harvested > 0) setTimeout(function () { PlaySound('snd/harvest1.mp3', 1, 0.2); }, 50);
                    if (harvested > 2) setTimeout(function () { PlaySound('snd/harvest2.mp3', 1, 0.2); }, 150);
                    if (harvested > 6) setTimeout(function () { PlaySound('snd/harvest3.mp3', 1, 0.2); }, 250);
                }

                eval('Game.Objects["Farm"].minigame.harvest=' + Game.Objects["Farm"].minigame.harvest.toString().replace(`M.harvestsTotal++;`, `M.harvestsTotal++; E.harvestSac++;`));
                eval('Game.Objects["Farm"].minigame.useTool=' + Game.Objects["Farm"].minigame.useTool.toString().replace(`M.toRebuild=true;`, `M.toRebuild=true; E.plantedSac++;`));

                eval('Game.Objects["Farm"].minigame.convert=' + Game.Objects["Farm"].minigame.convert.toString().replace(`M.convertTimes++;`, `M.convertTimes++; if (E.harvestSac <= 2 && E.plantedSac <=2 && E.cheating == 0) Game.Win("Flint when?"); E.harvestSac = 0; E.plantedSac = 0; E.cheating = 0;`));

                eval('Game.Objects["Farm"].minigame.harvest=' + Game.Objects["Farm"].minigame.harvest.toString().replace(`				if (tile[1]>=me.mature)
				{
					if (M.unlockSeed(me)) Game.Popup('('+me.name+')<br>'+loc("Unlocked %1 seed.",me.name),Game.mouseX,Game.mouseY);
					M.harvests++;
					M.harvestsTotal++; E.harvestSac++;
					if (M.harvestsTotal>=100) Game.Win('Botany enthusiast');
					if (M.harvestsTotal>=1000) Game.Win('Green, aching thumb');
				}`, `if (tile[1]>=me.mature)
				{
					if (M.unlockSeed(me)) Game.Popup('('+me.name+')<br>'+loc("Unlocked %1 seed.",me.name),Game.mouseX,Game.mouseY);
					M.harvests++;
					M.harvestsTotal++;
					if (M.harvestsTotal>=100) Game.Win('Botany enthusiast');
					if (M.harvestsTotal>=1000) Game.Win('Green, aching thumb');
				}
                var stage=0;
                if (tile[1]>=me.mature) stage=4;
                else if (tile[1]>=me.mature*0.666) stage=3;
                else if (tile[1]>=me.mature*0.333) stage=2;
                else stage=1;
                if (tile[1]+Math.ceil(me.ageTick+me.ageTickR)>=100){
                    E.gardenCompletion[(tile[0]-1) * 6 + y][24 + x] = tl[tile[0]-1] + 4;
                }
                else {
                    E.gardenCompletion[(tile[0]-1) * 6 + y][(stage - 1) * 6 + x] = tl[tile[0]-1] + (stage - 1);
                }`));

                E.updateGarden = true;

            }
        });

        eval('Game.shimmerTypes["golden"].popFunc=' + Game.shimmerTypes["golden"].popFunc.toString().replace(`\tif (choice=='cookie storm drop')`, `if (choice !=='building special')
        {
            E.trackWrathEffect(me.wrath && choice);
        }if (choice=='cookie storm drop')`));
        eval('Game.shimmerTypes["golden"].popFunc=' + Game.shimmerTypes["golden"].popFunc.toString().replace(`buff=Game.gainBuff('building debuff',time,pow,obj);`, `buff=Game.gainBuff('building debuff',time,pow,obj); E.trackWrathEffect(me.wrath && 'building debuff');`));
        eval('Game.shimmerTypes["golden"].popFunc=' + Game.shimmerTypes["golden"].popFunc.toString().replace(`buff=Game.gainBuff('building buff',time,pow,obj);`, `buff=Game.gainBuff('building buff',time,pow,obj); E.trackWrathEffect(me.wrath && 'building buff');`));

        eval('Game.UpdateMenu=' + Game.UpdateMenu.toString().replace(`'<div class="listing"><b>'+loc("Golden cookie clicks:")+'</b> '+Beautify(Game.goldenClicksLocal)+' <small>('+loc("all time:")+' '+Beautify(Game.goldenClicks)+')</small></div>'+`, `'<div class="listing"><b>'+loc("Golden cookie clicks:")+'</b> '+Beautify(Game.goldenClicksLocal)+' <small>('+loc("all time:")+' '+Beautify(Game.goldenClicks)+')</small></div>'+
        '<div class="listing"><b>'+loc("Golden cookie clicks in last hour:")+'</b> '+Beautify(E.prisonerStatMenu)+'</div>'+
        '<div class="listing"><b>'+loc("Pseudo-natural golden cookie clicks:")+'</b> '+Beautify(E.pseudoGoldenClicksLocal)+' <small>('+loc("all time:")+' '+Beautify(E.pseudoGoldenClicks)+')</small></div>'+
        '<div class="listing"><b>'+loc("Missed golden cookie clicks:")+'</b> '+Beautify(Game.missedGoldenClicks)+'</div>'+
        `));

        eval('Game.Reset=' + Game.Reset.toString().replace(`if (Math.round(Game.cookies)==1000000000000) Game.Win('When the cookies ascend just right');`,
        `if (Math.round(Game.cookies)==1000000000000) { Game.Win('When the cookies ascend just right'); if(E.ascensionModeCopy == 1) { E.perfectECCounter++; if (E.perfectECCounter >= 1000) Game.Win("Perfect endless cycle"); } }`));

        eval('Game.UpdateAscend=' + Game.UpdateAscend.toString().replace(`if (Game.keys[37]) Game.AscendOffXT+=16*(1/Game.AscendZoomT);`, `if (Game.keys[37]) Game.AscendOffXT+=16*(1/Game.AscendZoomT);  E.CheckFuckAutoSave();`));

        eval('Game.UpdateMenu=' + Game.UpdateMenu.toString().replace(`'dungeon':(EN?'<b>Dungeon achievements</b> <small>(Not technically achievable yet.)</small>':'<b>???</b>'),`, `'dungeon':(EN?'<b>Dungeon achievements</b> <small>(Not technically achievable yet.)</small>':'<b>???</b>'), 'eercermer':(EN?'<b>Eercermer achievements</b>':'<b>???</b>'),`));
        eval('Game.crate=' + Game.crate.toString().replace(`if (me.pool=='shadow') classes+=' shadow';`, `if (me.pool=='shadow' || me.pool=='eercermer') classes+=' shadow';`));

        E.createAchievements = function () {
            E.achievements = []
            E.achievements.push(new Game.Achievement("Fuck autosave", "Sit on the ascension screen for <b>1 week</b>. <q>Well, at least the game\'s not running.</q>", [5, 2, img])); //implemented
            E.achievements.push(new Game.Achievement("How did we get here", "Have <b>62 buffs</b> active. <q>Interest not included.</q>", [0, 2, img]));  //implemented
            E.achievements.push(new Game.Achievement("Tabloid overdose", "Click on the news ticker <b>1 billion times</b>. <q>You\'re tired. You\'ve clicked a billion news tickers. You\'ve read them all in some capacity. Can you really still call it news at this point? Oh, you don\'t have all the fortunes yet?</q>", [27, 7])); //implemented
            E.achievements.push(new Game.Achievement("Those who have nine lives must suffer nine deaths", "Click <b>727,272 non-natural golden cookies (except for storm drops)</b>. <q>The end of all cats.</q>", [6, 1, img])); //implemented
            E.achievements.push(new Game.Achievement("Diabetes", "Harvest <b>100,000 coalescing sugar lumps</b>. <q>Way more than you\'ll ever need.</q>", [2, 2, img])); //implemented
            E.achievements.push(new Game.Achievement("Aw dangit", "Miss <b>500,000 golden cookies</b>. <q>Let\'s go gambling!</q>", [8, 1, img])); //implemented
            E.achievements.push(new Game.Achievement("Prisoner", "Click <b>777 golden cookies</b> within <b>an hour</b>. <q>Why do cookie chains give golden clicks again?</q>", [8, 0, img]));  //implemented
            E.achievements.push(new Game.Achievement("Ascending order", "Appease the grandmatriarchs at least <b>12.346 million times</b>. <q>we<br>have<br>ascended</q>", [8, 9])); //implemented
            E.achievements.push(new Game.Achievement("Wrath cookies are better anyways", "Get every unique outcome from consecutive wrath cookies. <q>Now get elder frenzy from a golden cookie.</q>", [7, 1, img])); //implemented
            E.achievements.push(new Game.Achievement("Indecisive", "Open the wipe save modal <b>1 million times</b>. <q>So, made up your mind yet?</q>", [3, 2, img])); //implemented
            E.achievements.push(new Game.Achievement("Identity crisis", "Rename your bakery <b>100 million times</b> using the random option. <q>If you know neither the enemy nor yourself, you will succumb in every battle.</q>", [0, 8])); //implemented
            E.achievements.push(new Game.Achievement("Are you even playing the game?", "Collect more than half the game\'s lifetime worth of offline progress. <q>Well, that\'s one way to get around float imprecision.</q>", [6, 2, img])); //implemented
            E.achievements.push(new Game.Achievement("Stop using Force the Hand of Fate", "Have all <b>20 building special buffs</b> active at once <b>without casting any spells</b> in an ascension. <q>Possibly the dumbest and most tedious way to execute a finnless finn combo is to multitab building specials for 2 years.</q>", [3, 0, img])); //implemented
            E.achievements.push(new Game.Achievement("Bankruptcy", "Lose <b>9.877 billion</b> profits in the stockmarket. <q>Hire some brokers already!</q>", [5, 0, img])); //implemented
            E.achievements.push(new Game.Achievement("Flint when?", "Sacrifice the garden with 2 plants harvested and 2 plants planted for the current sacrifice. <q>Finally! A use for pebbles!</q>", [5, 1, img])); //implemented
            E.achievements.push(new Game.Achievement("Reforestation", "Sell <b>457.468 million</b> buildings. <q>Godzamok is pleased.</q>", [23, 18])); //implemented
            E.achievements.push(new Game.Achievement("Perfect endless cycle", "Ascend with exactly <b>1 trillion</b> cookies in born again <b>1,000 times</b>. <q>Be glad it doesn't require floating point precision.</q>", [1, 1, img]));  //implemented
            E.achievements.push(new Game.Achievement("It\'s not even Christmas", "Gift/Recieve <b>10 billion</b> worth of cookies. <q>Which wizard? Santa.</q>", [34, 8]));  //implemented
            E.achievements.push(new Game.Achievement("Santa\'s biggest hater", "Pop <b>444,444 reindeer</b>. <q>Well, they\'re not extinct yet.</q>", [12, 9])); //implemented
            E.achievements.push(new Game.Achievement("Never ending bubble wrap", "Burst <b>6.667 million wrinklers</b>. <q>Occasionally children will dip one in an idleverse and eat it.</q>", [19, 8])); //implemented
            E.achievements.push(new Game.Achievement('According to all known laws of probability, to be rare, an RNG event must have a 0.01% chance of occurring', "Have a <b>full ring of shiny wrinklers</b> with winklers and toys active, while having popped <b>0 wrinklers</b>. <q>Those clones are quite unhappy.</q>", [7, 2, img])); //implemented
            E.achievements.push(new Game.Achievement("Speed baking IV", "Get to <b>1 million cookies</b> baked in <b>6 minutes</b>, without using seasons. <q>You\'re a really fast clicker</q>", [2, 0, img]));  //implemented
            E.achievements.push(new Game.Achievement("Just plain luckiest", "You have <b>1 chance in 18 quintillion</b> every second of earning this achievement. <q>Thanks for playing!</q>", [4, 0, img])); //implemented
            E.achievements.push(new Game.Achievement("Golden year", "Harvest <b>365</b> golden sugar lumps in a row. <q>Midas would like a word.</q>", [9, 0, img])); //implemented
            E.achievements.push(new Game.Achievement("More to come", "Burst <b>66 shiny wrinklers</b>. <q>You devil!</q>", [24, 12])); //implemented
            E.achievements.push(new Game.Achievement("Fake storm drop", "Have <b>35</b> golden cookies simultaneously. <q>Has science gone too far?</q>", [6, 0, img])); //implemented
            E.achievements.push(new Game.Achievement("Completionist gardener", "Harvest every plant in every plot where it can spawn, in all possible stages. <q>Even rarer, still, is the decaying elderwort specimen.</q>", [4, 1, img])); //implemented
            E.achievements.push(new Game.Achievement("So much to do so much to seed", "Have every seed at least once. <q>No, not those ones</q>", [2, 1, img])); //implemented 
            E.achievements.push(new Game.Achievement("Data hoard", "Have a save size of at least <b>1 GB</b>. <q>One byte for every click. Those cookies have to go somewhere.</q>", [4, 2, img])); //implemented
            E.achievements.push(new Game.Achievement("RNG cycle", "Click the green/gray http(s) lock <b>10 million times</b>. <q>If you haven't interacted with everything, have you really played the game at all?</q>", [8, 2, img])); //implemented
            E.achievements.push(new Game.Achievement("Deforestation", "Harvest <b>888,888</b> mature garden plants. <q>You\'re the reason global warming exists.</q>", [3, 1, img])); //implemented
            E.achievements.push(new Game.Achievement("Master wizard", "Reach level <b>100</b> wizard towers. <q>Good luck comboing after this.</q>", [1, 0, img])); //implemented
            E.achievements.push(new Game.Achievement("Fuck you", "Reach level <b>100</b> cursors. <q>Iridescent gloves? Where?</q>", [0, 0, img])); //implemented
            E.achievements.push(new Game.Achievement("Dragon\'s best friend", "Pet Krumblor <b>1 billion times</b>. <q>No such thing as too many pets.</q>", [30, 12])); //implemented
            E.achievements.push(new Game.Achievement("Wrong cookie", "Click the tiny cookie <b>10 million times</b>. <q>loud incorrect buzzer</q>", [7, 0, img])); //implemented
            E.achievements.push(new Game.Achievement("True Everclick", "Click the big cookie <b>1 billion times</b>. <q>Certainly one of the ways to get Hardcore.</q>", [1, 2, img])); //implemented
            E.achievements.push(new Game.Achievement("Say that again? I can\'t hear you", "Play <b>100 million</b> random sounds in the jukebox. <q>My ears!</q>", [31, 12])); //implemented
            E.achievements.push(new Game.Achievement("Password cracker", "Figure out a bakery name that hashes to the following hash. <br> Hash : 4‍4‍2‍0‍c‍3‍1‍b‍9‍5‍0‍6‍f‍e‍a‍7‍e‍4‍d‍d‍1‍9‍c‍f‍4‍c‍c‍b‍0‍8‍a‍c <q>Hint : The original is 16 characters long.</q>", [0, 1, img])); //implemented
            //E.achievements.push(new Game.Achievement("I don\'t go outside but I can learn their languages anyways", "Get a finn combo in every language, must have language on at the start of the ascenion.", [0, 0])); //this achievement is too dumb and hard to implement
            //E.achievements.push(new Game.Achievement("A wrinkler in time", "Burst <b>666,666 wrinklers</b>without popping any shiny ones.", [19, 8])); removed due to being easily cheesable

            for (var i in E.achievements) {
                E.achievements[i].pool = "eercermer";
            }

            LocalizeUpgradesAndAchievs()
        }

        E.checkAchievements = function () {
            if (Game.cookieClicks >= 1000000000) Game.Win("True Everclick");
            if (Game.TickerClicks >= 1000000000) Game.Win("Tabloid overdose");
            if (E.petKrumblor >= 1000000000) Game.Win("Dragon\'s best friend");
            if (Game.cookiesSent + Game.cookiesReceived >= 10000000000) Game.Win("It\'s not even Christmas");
            if (Game.Objects.Farm.minigameLoaded && Game.Objects.Farm.minigame.harvestsTotal >= 888888) Game.Win("Deforestation");
            if (Game.reindeerClicked >= 444444) Game.Win("Santa\'s biggest hater");
            if (Game.wrinklersPopped >= 6666666) Game.Win("Never ending bubble wrap");
            if (E.shinyWrinklersPopped >= 66) Game.Win("More to come");

            var win = (Game.Objects['Wizard tower'].minigameLoaded && Game.Objects['Wizard tower'].minigame.spellsCast === 0 || Game.Objects['Wizard tower'].level < 1);

            for (let i of Game.ObjectsById) {
                win &&= (Game.hasBuff(Game.goldenCookieBuildingBuffs[i.name][0]));
            }

            if (win) Game.Win("Stop using Force the Hand of Fate");

            if (Game.TOYS && Game.WINKLERS && !Game.wrinklersPopped) {
                for (var i in Game.wrinklers) {
                    if (Game.wrinklers[i].type == 1) Game.Win("According to all known laws of probability, to be rare, an RNG event must have a 0.01% chance of occurring");
                }
            }

            if (Game.pledges >= 12345678) Game.Win("Ascending order");
            if (Game.Objects.Bank.minigameLoaded && Game.Objects.Bank.minigame.profit <= -9876543210) Game.Win("Bankruptcy");
            if (Game.lumpsTotal >= 100000) Game.Win("Diabetes");
            if (Game.shimmerTypes['golden'].n >= 35) Game.Win('Fake storm drop');
            if (Game.missedGoldenClicks >= 500000) Game.Win("Aw dangit");

            if (Game.Objects['Cursor'].level >= 100) Game.Win("Fuck you");
            if (Game.Objects['Wizard tower'].level >= 100) Game.Win("Master wizard");

            var timePlayed = new Date();
            timePlayed.setTime(Date.now() - Game.startDate);

            if (Game.cookiesEarned >= 1000000 && Game.reindeerClicked == 0 && Game.Has("A festive hat") == 0 && Game.GetHowManyEggs() == 0 && (Game.ascensionMode == 1 || Game.resets == 0))//challenge run or hasn't ascended yet. no seasonal buffs.
            {
                if (timePlayed <= 1000 * 60 * 6) Game.Win('Speed baking IV');
            }
            if (Game.Objects['Farm'].minigameLoaded){
                E.checkCompletionistGardener();
            }

        }

        if (Game.ready) E.createAchievements()
        else Game.registerHook("create", E.createAchievements)
        Game.registerHook("check", E.checkAchievements)

        //reset function of the mod
        Game.registerHook('reset', (hard) => {
            E.ascensionTimerStartedUpdate = 0;
            E.ascensionTimerStarted = 0;
            E.pseudoGoldenClicksLocal = 0;
            E.buildingsSold = 0;

            if (hard) {
                E.tinyCookieClicks = 0;
                E.petKrumblor = 0;
                E.pseudoGoldenClicks = 0;
                E.pseudoGoldenClicksLocal = 0;
                E.httpClicks = 0;
                E.wipeSaveModalCount = 0;
                E.shinyWrinklersPopped = 0;
                E.jukeboxPlays = 0;
                E.bakeryRenames = 0;
                E.goldenYearCounter = 0;
                E.buildingsSold = 0;
                E.perfectECCounter = 0;
                E.ascensionTimerStartedUpdate = 0;
                E.harvestSac = 0;
                E.plantedSac = 0;
                E.cheating = 0;

                E.trackPrisoner = [];
                for (let i = 0; i < 3600; i++) {
                    E.trackPrisoner.push(Game.goldenClicks);
                }

                E.trackWrath = [];

                E.gardenCompletion = [];
                for (let i = 0; i < 6 * 34; i++) {
                    E.gardenCompletion.push([";3", ";3", ";3", ";3", ";3", ";3", ";3", ";3", ";3", ";3", ";3", ";3", ";3", ";3", ";3", ";3", ";3", ";3", ";3", ";3", ";3", ";3", ";3", ";3", ";3", ";3", ";3", ";3", ";3", ";3"])
                }
            }
        });
    },
    save: function () {
        let str = "";
        for (let i of E.achievements) str += i.won + ',';
        str += '|';
        str += E.tinyCookieClicks + ',' + E.petKrumblor + ',' + E.pseudoGoldenClicks + ',' + E.pseudoGoldenClicksLocal + ',' + E.httpClicks + ',' + E.wipeSaveModalCount + ',' + E.shinyWrinklersPopped + ',' + E.jukeboxPlays + ',' + E.bakeryRenames + ',' + E.goldenYearCounter + ',' + E.buildingsSold + ',' + E.perfectECCounter + ',' + E.ascensionTimerStartedUpdate + ',' + E.harvestSac + ',' + E.plantedSac + ',' + E.cheating + ',';
        str += '|';
        str += E.exportGardenCompletion() + ',' + (Game.Objects['Farm'].minigameLoaded?Game.Objects['Farm'].minigame.save():'') + ',';
        str += '|';
        // str += E.progress; // temporary
        str += '|';

        //db.transaction("saveProgress", "readwrite").objectStore("seedProgress").put(E.progress, Game.startDate);
        // console.log(str)
        return str; 

    },
    load: function (str) {

        E.tinyCookieClicks = 0; //+1 for each click on the tiny cookie
        E.petKrumblor = 0; //+1 everytime you pet krumblor
        E.pseudoGoldenClicks = 0; //+1 for each non-natural golden cookie clicked (all time)
        E.pseudoGoldenClicksLocal = 0; //+1 for each non-natural golden cookie clicked (this game only)
        E.httpClicks = 0;
        E.wipeSaveModalCount = 0;
        E.shinyWrinklersPopped = 0;
        E.jukeboxPlays = 0;
        E.bakeryRenames = 0;
        E.goldenYearCounter = 0; //+1 for each golden lump harvested (gets set to 0 if any other type harvested)
        E.buildingsSold = 0;
        E.perfectECCounter = 0;
        E.ascensionTimerStartedUpdate = 0;
        E.harvestSac = 0;
        E.plantedSac = 0;
        E.cheating = 1; // assume player is always cheating.

        if (!Game.Objects['Farm'].minigameLoaded){ // unless the garden isnt loaded. except, loading the garden takes a bit of time, and it might not have loaded by now. L for loading onto a save without garden unlocked.
            // E.cheating = 0;
        }
        else if (Game.Objects['Farm'].minigame.save().split(' ')[1] == '1000000000000000000000000000000000') { // or the garden is in its initial state with maybe some meddleweed lying around. sure, you could've harvested like, wheat beforehand, but you don't gain any advantage.
            let count = 0;
            for (let i = 0; i < 6; i++) {
                for (let j = 0; j < 6; j++) {
                    if (Game.Objects['Farm'].minigame.getTile(i,j)[0] == 0 || Game.Objects['Farm'].minigame.getTile(i,j)[0] == 14) {
                        count++;
                    }
                }
            }
            E.cheating = (count==36)?0:1;
            // you better hope what's not weed or empty on the garden is wheat.
            E.plantedSac += (36 - count);
        }

        E.progress = new Uint8Array(1485172);

        E.gardenCompletion = [];
        for (let i = 0; i < 6 * 34; i++) {
            E.gardenCompletion.push([";3", ";3", ";3", ";3", ";3", ";3", ";3", ";3", ";3", ";3", ";3", ";3", ";3", ";3", ";3", ";3", ";3", ";3", ";3", ";3", ";3", ";3", ";3", ";3", ";3", ";3", ";3", ";3", ";3", ";3"]) // 5 * 6
        }

        // console.log(str);
        str = str.split('|');
        let strIn = str[0].split(',');
        for (let i = 0; i < strIn.length; i++) {
            if (isv(strIn[i])) { E.achievements[i].won = parseFloat(strIn[i]); }
        }

        strIn = str[1].split(',');
        if (isv(strIn[0])) { E.tinyCookieClicks = parseFloat(strIn[0]); }
        if (isv(strIn[1])) { E.petKrumblor = parseFloat(strIn[1]); }
        if (isv(strIn[2])) { E.pseudoGoldenClicks = parseFloat(strIn[2]); }
        if (isv(strIn[3])) { E.pseudoGoldenClicksLocal = parseFloat(strIn[3]); }
        if (isv(strIn[4])) { E.httpClicks = parseFloat(strIn[4]); }
        if (isv(strIn[5])) { E.wipeSaveModalCount = parseFloat(strIn[5]); }
        if (isv(strIn[6])) { E.shinyWrinklersPopped = parseFloat(strIn[6]); }
        if (isv(strIn[7])) { E.jukeboxPlays = parseFloat(strIn[7]); }
        if (isv(strIn[8])) { E.bakeryRenames = parseFloat(strIn[8]); }
        if (isv(strIn[9])) { E.goldenYearCounter = parseFloat(strIn[9]); }
        if (isv(strIn[10])) { E.buildingsSold = parseFloat(strIn[10]); }
        if (isv(strIn[11])) { E.perfectECCounter = parseFloat(strIn[11]); }
        if (isv(strIn[12])) { E.ascensionTimerStartedUpdate = parseFloat(strIn[12]); }
        if (isv(strIn[13])) { E.harvestSac = parseFloat(strIn[13]); }
        if (isv(strIn[14])) { E.plantedSac = parseFloat(strIn[14]); }
        if (isv(strIn[15])) { E.cheating = parseFloat(strIn[15]); }

        strIn = str[2].split(',');
        if (isv(strIn[0])) { E.loadCompletionistGardener(strIn[0]); }
        if (isv(strIn[1]) && E.cheating == 0) { E.garden = strIn[1]; }
        /*db.transaction("saveProgress").objectStore("seedProgress").get(Game.startDate).onsuccess = (eveny) => {
            ${E.progress}
        }*/
        // if (isv(str[3])) { E.progress = new Uint8Array(str[3].split(",")); } // temporary

        E.updateGarden = false;

        E.trackPrisoner = [];
        for (let i = 0; i < 3600; i++) {
            E.trackPrisoner.push(Game.goldenClicks);
        }

        E.trackWrath = [];

        E.addSeed();

    }
});
