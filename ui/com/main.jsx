import * as atom from "./atom.js";
import * as grid from "./grid.js";
import * as sidebar from "./sidebar.js";
import { App } from "../lib/app.js";


export function Main({style}) {
    style.add({
        position: "fixed",
        overflow: "auto",
        width: "500%",
        height: "100%",
        display: "flex",
    });
    return (
        <main>
            <sidebar.Sidebar package={App.session.package()} />
            <atom.Divider />
            <grid.Grid blocks={App.session.blocks()} entry={App.session.entry()} source={App.session.source()} />
        </main>
    )
}