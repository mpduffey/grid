"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Grid = (function () {
    function Grid() {
        this.showOptions = false;
        this.sorter = new Sorter();
    }
    Grid.prototype.sort = function (key) {
        this.sorter.sort(key, this.rows);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], Grid.prototype, "name", void 0);
    __decorate([
        core_1.Input("show-options"), 
        __metadata('design:type', Object)
    ], Grid.prototype, "showOptions", void 0);
    Grid = __decorate([
        core_1.Component({
            selector: 'grid',
            inputs: ['rows: rows', 'columns: columns'],
            template: "\n\t\t<div showOptions=\"true\">Records: \n\t\t\t<select>\n\t\t\t\t<option value=\"10\">10</option>\n\t\t\t\t<option value=\"25\">25</option>\n\t\t\t\t<option value=\"50\">50</option>\n\t\t\t</select>\n\t\t</div>\n\t\t<table class=\"table table-striped table-condensed\">\n\t\t\t<thead><tr><td *ngFor=\"let col of columns\"><a (click)=\"sort(col.name)\">{{col.descr}}</a></td></tr></thead>\n\t\t\t<tbody><tr *ngFor=\"let row of rows\"><td *ngFor=\"let col of columns\">{{row[col.name]}}</td></tr></tbody>\n\t\t</table>\n\t",
            styles: ["\n\t\ttable {\n\t\t\tfont-size: 12px;\n\t\t}\n\t\tthead td {\n\t\t\tcursor: pointer;\n\t\t}\n\t\tselect {\n\t\t\tcolor: black;\n\t\t}\n\t"],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [])
    ], Grid);
    return Grid;
}());
exports.Grid = Grid;
var Column = (function () {
    function Column(name, descr) {
        this.name = name;
        this.descr = descr;
    }
    return Column;
}());
exports.Column = Column;
var Sorter = (function () {
    function Sorter() {
        this.direction = 1;
    }
    Sorter.prototype.sort = function (key, data) {
        var _this = this;
        if (this.key === key) {
            this.direction = this.direction * -1;
        }
        else {
            this.direction = 1;
        }
        this.key = key;
        data.sort(function (a, b) {
            if (a[key] === b[key]) {
                return 0;
            }
            else if (a[key] > b[key]) {
                return 1 * _this.direction;
            }
            else {
                return -1 * _this.direction;
            }
        });
    };
    return Sorter;
}());
exports.Sorter = Sorter;
//# sourceMappingURL=grid.js.map