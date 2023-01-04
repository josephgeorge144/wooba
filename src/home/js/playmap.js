function initMap() {
    // need to load the center from the user
    const center = { lat: 51.49745, lng: -0.156248 };
    const map = new google.maps.Map(document.getElementById('playmap'), {
        zoom: 14,
        center: center,
        disableDefaultUI: true,
        draggable: false,
        styles: [
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [
                    {
                        color: '#e9e9e9',
                    },
                    {
                        lightness: 17,
                    },
                ],
            },
            {
                featureType: 'landscape',
                elementType: 'geometry',
                stylers: [
                    {
                        color: '#f5f5f5',
                    },
                    {
                        lightness: 20,
                    },
                ],
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.fill',
                stylers: [
                    {
                        color: '#ffffff',
                    },
                    {
                        lightness: 17,
                    },
                ],
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [
                    {
                        color: '#ffffff',
                    },
                    {
                        lightness: 29,
                    },
                    {
                        weight: 0.2,
                    },
                ],
            },
            {
                featureType: 'road.arterial',
                elementType: 'geometry',
                stylers: [
                    {
                        color: '#ffffff',
                    },
                    {
                        lightness: 18,
                    },
                ],
            },
            {
                featureType: 'road.local',
                elementType: 'geometry',
                stylers: [
                    {
                        color: '#ffffff',
                    },
                    {
                        lightness: 16,
                    },
                ],
            },
            {
                featureType: 'poi',
                elementType: 'geometry',
                stylers: [
                    {
                        color: '#f5f5f5',
                    },
                    {
                        lightness: 21,
                    },
                ],
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [
                    {
                        color: '#dedede',
                    },
                    {
                        lightness: 21,
                    },
                ],
            },
            {
                elementType: 'labels.text.stroke',
                stylers: [
                    {
                        visibility: 'on',
                    },
                    {
                        color: '#ffffff',
                    },
                    {
                        lightness: 16,
                    },
                ],
            },
            {
                elementType: 'labels.text.fill',
                stylers: [
                    {
                        saturation: 36,
                    },
                    {
                        color: '#333333',
                    },
                    {
                        lightness: 40,
                    },
                ],
            },
            {
                elementType: 'labels.icon',
                stylers: [
                    {
                        visibility: 'off',
                    },
                ],
            },
            {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [
                    {
                        color: '#f2f2f2',
                    },
                    {
                        lightness: 19,
                    },
                ],
            },
            {
                featureType: 'administrative',
                elementType: 'geometry.fill',
                stylers: [
                    {
                        color: '#fefefe',
                    },
                    {
                        lightness: 20,
                    },
                ],
            },
            {
                featureType: 'administrative',
                elementType: 'geometry.stroke',
                stylers: [
                    {
                        color: '#fefefe',
                    },
                    {
                        lightness: 17,
                    },
                    {
                        weight: 1.2,
                    },
                ],
            },
        ],
    });
}

function createGameDiv(g) {
    var gDiv = document.createElement('div');
    gDiv.classList.add('play');

    var imDiv = document.createElement('div');
    imDiv.classList.add('play-image');
    imDiv.style.backgroundImage = 'url(' + g.image + ')';

    gDiv.append(imDiv);

    var desc = document.createElement('div');
    desc.classList.add('play-desc');

    var gHead = document.createElement('h1');
    gHead.innerHTML = g.name;

    desc.append(gHead);

    var gTiming = document.createElement('p');
    gTiming.classList.add('timing');
    gTiming.innerHTML = 'From ' + g.start + ' to ' + g.end;

    desc.append(gTiming);
    gDiv.append(desc);

    return gDiv;
}

function createGameAdderDiv() {
    var adderDiv = document.createElement('div');
    adderDiv.classList.add('game-adder');
    var aHead = document.createElement('h1');
    aHead.innerHTML = '+ Add yours';
    adderDiv.append(aHead);

    return adderDiv;
}

function buildGames(games) {
    var gameLister = document.getElementById('gameContent');
    var gameListerLarge = document.getElementById('gameContentLarge');
    if (!gameLister) {
        console.error('failed to add games to ui, gameContent not found');
        return;
    }

    var gameDivs = [];
    var gameDivsLarge = [];
    games.forEach(function (g) {
        gameDivs.push(createGameDiv(g));
        gameDivsLarge.push(createGameDiv(g));
    });

    gameDivs.push(createGameAdderDiv());
    gameDivsLarge.push(createGameAdderDiv());

    gameLister.append(...gameDivs);
    gameListerLarge.append(...gameDivsLarge);
}

function loadGames() {
    fetch('/assets/games.json')
        .then(function (r) {
            r.json()
                .then(function (games) {
                    buildGames(games);
                })
                .catch(function (e) {
                    console.log('error while parsing games json', e);
                    buildGames([]);
                });
        })
        .catch(function (e) {
            console.error('failed to load games', e);
            buildGames([]);
        });
}

var viewerAnimation;

function capturePlayViewerScroll() {
    var playViewer = document.getElementById('gameViewer');
    playViewer.addEventListener('wheel', function (e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        e.preventDefault();

        var delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
        playViewer.scrollLeft = Math.min(
            playViewer.scrollLeft - delta * 40,
            playViewer.scrollWidth
        );
    });
}

window.initMap = initMap;
window.addEventListener('load', function () {
    loadGames();
    capturePlayViewerScroll();
});
