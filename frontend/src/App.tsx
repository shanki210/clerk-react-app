import { useState } from 'react';
import './App.css';
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Welcome to My App</h1>
        <nav>
          <SignedOut>
            <SignInButton className="cta-button" />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </nav>
      </header>
      <main className="app-main">
        <section className="hero-section">
          <h2>Your Gateway to Awesome Features</h2>
          <p>Experience seamless authentication with Clerk and enjoy our amazing services.</p>
          <SignedOut>
            <SignInButton className="cta-button">Get Started</SignInButton>
          </SignedOut>
        </section>
      </main>
      <footer className="app-footer">
        <p>&copy; 2024 My App. Created with Love by Suryansh.</p>
      </footer>
    </div>
  );
}

export default App;