/**
 * Created by shimon on 12/27/16.
 */
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HelloWorld} from "./components/helloworld";

@NgModule({
    imports:[BrowserModule],
    declarations:[HelloWorld],
    bootstrap:[HelloWorld],
})
export class HomeModule{}
