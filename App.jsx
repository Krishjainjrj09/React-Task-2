import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'




import "./App.css";

const interns = [
  {
    id: 1,
    name: "Krish Jain",
    role: "Junior Data Scientist",
    location: "Eluru",
  },
  {
    id: 2,
    name: "Ann Elizibath",
    role: "Frontend Developer",
    location: "Kerla/Kochi",
  },
  {
    id: 3,
    name: "Rinu Thomas",
    role: "Data Analyst",
    location: "Kerla/Kochi",
  },
  {
    id: 4,
    name: "Ashwin",
    role: "React Developer",
    location: "Kerla/kochi",
  },
];


function InternCard({ name, role, location }) {
  return (
    <div className="intern-card">
      <h2>{name}</h2>
      <p className="role">{role}</p>
      <p>
        <strong>Location:</strong> {location}
      </p>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <h1>Intern Profile Cards</h1>
      <p className="subtitle">
        React Fundamentals — Components, Props and map()
      </p>

      <div className="intern-container">
        {interns.map((intern) => (
          <InternCard
            key={intern.id}
            name={intern.name}
            role={intern.role}
            location={intern.location}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
