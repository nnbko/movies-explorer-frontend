import React from "react";

import { HashLink } from "react-router-hash-link";

export default function NavTab() {
    return (
        <section className="navtab">
                <HashLink  smooth to="#aboutProject" className="navtab__button-link">
                    Узнать больше
                </HashLink>
        </section>
    )
}