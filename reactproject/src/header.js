import UsersComponent from "./users";
import ServicesComponent from "./services";
import CallComponent from "./call";
import EmailComponent from "./email";
import { Route, Routes, Link } from "react-router-dom";

function HeaderComponent() {
    return (
        <header>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <Link class="navbar-brand" to={"/"}>Brand</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link" to={"/users"}>Users</Link>
                            </li>
                             <li class="nav-item">
                                <Link class="nav-link" to={"/services"}>Services</Link>
                            </li>
                            <li class="nav-item dropdown">
                                <Link class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Contacts
                                </Link>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link class="dropdown-item" to={"/call"}>Call</Link></li>
                                    <li><Link class="dropdown-item" to={"/email"}>Email</Link></li>
                                </ul>
                            </li>
                        </ul>
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            <Routes>
                <Route path="/" />
                <Route path="/users" element={<UsersComponent />} />
                <Route path="/services" element={<ServicesComponent />} />
                <Route path="/call" element={<CallComponent />} />
                <Route path="/email" element={<EmailComponent />} />
            </Routes>
        </header>

    )
}

export default HeaderComponent;