'use client';
import Image from 'next/image';
import './style.scss';
import logo from './../../../public/logo.png';
import Link from 'next/link';
export default function Header() {
  return (
    <header className="border-bottom sticky-top bg-dark header-container">




      <nav className="navbar navbar-expand-lg bg-body-dark navbar-dark">
        <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link href="/" className="d-flex align-items-center mb-lg-0 text-decoration-none">
            <Image src={logo} height={40} width={40} alt='logo' />
          </Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="/"> <i className="bi bi-house-fill"></i> Rudra GYM</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/about"><i className="bi bi-info-circle"></i> About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/membership"><i className="bi bi-people-fill"></i> Membership</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/blogs"><i className="bi bi-card-heading"></i> Blogs</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/contactUs"> <i className="bi bi-headset"></i>  Contact Us</Link>
              </li>
            </ul>

            <div className="dropdown text-end">
              <Link href="#" className="d-block text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle" />
              </Link>
              <ul className="dropdown-menu text-small">
                <li><Link className="dropdown-item" href="#">New project...</Link></li>
                <li><Link className="dropdown-item" href="#">Settings</Link></li>
                <li><Link className="dropdown-item" href="#">Profile</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" href="#">Sign out</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}