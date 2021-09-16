    // 01. Media: Video Game

    const Media = require('./generator');

    class VideoGame extends Media {
        constructor(name,year,console,brand,digital,price,rate_id) {
            super(name);
            this.year = year;
            this.console = console;
            this.brand = brand;
            this.digital = digital;
            this.price = price;
            this.rate_id = rate_id;
        }

        get_name() {
            return this.name;
        }
        get_year() {
            return this.year;
        }
        get_console() {
            return this.console;
        }
        get_brand() {
            return this.brand;
        }
        get_digital() {
            return this.digital;
        }
        get_price() {
            return this.price;
        }
        get_rate_id() {
            return this.rate_id;
        }
        get_role() {
            return "Video Game";
        }
    }

    module.exports = VideoGame;