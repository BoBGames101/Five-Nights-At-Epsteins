class AssetManager {
    constructor() {
        // This list tells the game where your pictures are
        this.images = {
            office: 'assets/images/office.png',
            fan_icon: 'assets/images/fa3.png',
            star: 'assets/images/star.png',
            cutscene: 'assets/images/cutscene.png',
            epstein: 'assets/images/epstein.png',
            trump: 'assets/images/trump.png',
            hawking: 'assets/images/hawking.png'
        };

        // This list tells the game where your sounds are
        this.sounds = {
            menu_music: 'assets/sounds/music3.ogg',
            jumpscare: 'assets/sounds/jumpscare.mp3',
            ambient: 'assets/sounds/ambience.mp3'
        };

        // This is for the camera static video
        this.videos = {
            static: 'assets/vedio/202512191935.webm'
        };
    }

    getAsset(name) {
        return this.images[name] || this.sounds[name] || this.videos[name];
    }
}

