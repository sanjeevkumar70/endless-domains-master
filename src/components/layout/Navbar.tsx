"use client";

import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-white shadow-sm px-4 py-3">
            <div className="container-fluid">

                <Link href="/" className="navbar-brand fw-bold d-flex align-items-center">
                    <span className="bg-warning me-2" style={{ width: 18, height: 18 }}></span>
                    ENDLESS DOMAINS
                </Link>

                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mx-auto gap-3">
                        <li className="nav-item"><Link href={"/"}>Home</Link></li>
                        <li className="nav-item"><Link href={"/about"}>About</Link></li>
                        <li className="nav-item"><Link href={"/blog"}>Blog</Link></li>
                        <li className="nav-item"><Link href={"/gallery"}>Gallery</Link></li>
                        <li className="nav-item"><Link href={"/contact"}>Contact</Link></li>
                    </ul>

                    <div className="d-flex gap-2">
                        <button className="btn btn-outline-primary">Login/Signup</button>
                        <button className="btn btn-light">🛒</button>
                    </div>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;