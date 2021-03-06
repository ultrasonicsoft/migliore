System.register(['@angular/core', './ng2-websocket'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, ng2_websocket_1;
    var App;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ng2_websocket_1_1) {
                ng2_websocket_1 = ng2_websocket_1_1;
            }],
        execute: function() {
            App = (function () {
                function App() {
                    this.counter = 'not known';
                    this.ws = new ng2_websocket_1.$WebSocket("ws://localhost:8088/counter");
                }
                App.prototype.subscribe = function ($event) {
                    var _this = this;
                    console.log("trying to subscribe to ws");
                    this.ws = new ng2_websocket_1.$WebSocket("ws://localhost:8088/counter");
                    this.ws.send("Hello");
                    this.ws.getDataStream().subscribe(function (res) {
                        var count = JSON.parse(res.data).value;
                        console.log('Got: ' + count);
                        _this.counter = count;
                    }, function (e) { console.log('Error: ' + e.message); }, function () { console.log('Completed'); });
                };
                App = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n\tCounter Value is: {{counter}}\n\t<button type=\"button\" (click)=\"subscribe($event)\">Subscribe to WebSocket</button>\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], App);
                return App;
            }());
            exports_1("App", App);
        }
    }
});
//# sourceMappingURL=app.js.map