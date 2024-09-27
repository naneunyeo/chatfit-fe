<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
    <!-- Spinner Start -->
    <div
        id="spinner"
        class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
    >
        <div class="spinner-border text-primary" style="width: 3rem; height: 3rem" role="status">
            <span class="sr-only">Loading...</span>
        </div>
    </div>

    <!-- Spinner End -->
    <!-- Navbar & Hero Start -->
    <div class="container-fluid p-0">
        <nav class="navbar navbar-expand-lg navbar-light bg-transparent px-4 px-lg-5 py-3 py-lg-0">
            <a href="index.html" class="navbar-brand p-0">
                <h1 class="display-6 text-primary m-0">
                    <i class="fas fa-envelope me-3"></i>Mailler
                </h1>
                <!-- <img src="img/logo.png" alt="Logo"> -->
            </a>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
            >
                <span class="fa fa-bars"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav ms-auto py-0">
                    <RouterLink to="/home" class="nav-item nav-link">Home</RouterLink>
                    <RouterLink to="/about" class="nav-item nav-link">About</RouterLink>
                    <RouterLink to="/service" class="nav-item nav-link">Services</RouterLink>
                    <div class="nav-item dropdown">
                        <a
                            href="#"
                            class="nav-link dropdown-toggle active"
                            data-bs-toggle="dropdown"
                            >Pages</a
                        >
                        <div class="dropdown-menu m-0">
                            <a href="feature.html" class="dropdown-item">Features</a>
                            <a href="pricing.html" class="dropdown-item">Pricing</a>
                            <a href="blog.html" class="dropdown-item">Blog</a>
                            <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                            <a href="404.html" class="dropdown-item active">404 Page</a>
                        </div>
                    </div>
                    <a href="contact.html" class="nav-item nav-link">Contact Us</a>
                </div>
                <a
                    href="#"
                    class="btn btn-light border border-primary rounded-pill text-primary py-2 px-4 me-4"
                    >Log In</a
                >
                <a href="#" class="btn btn-primary rounded-pill text-white py-2 px-4">Sign Up</a>
            </div>
        </nav>
    </div>
    <!-- Navbar & Hero End -->
    <RouterView />
</template>
